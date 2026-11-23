// Gera dist/_headers após o astro build: lê todos os HTML, calcula os
// sha256 dos <script> inline de CADA página e escreve a CSP por path —
// cada página leva só os hashes dos seus scripts, nunca a união global.
//
// Porquê por path: o limite do _headers da Cloudflare é 2000 chars/linha
// (código 100324); com ~50 inline scripts o script-src global estourava
// e o `wrangler deploy` falhava. Por path, a linha fica abaixo do limite
// desde que uma página não acumule dezenas de scripts inline.
//
// O ficheiro segue o formato Cloudflare (_headers em dist/).
// Fora da Cloudflare é ignorado sem efeito.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

const sha256 = (s) =>
  createHash("sha256").update(s, "utf8").digest("base64");

// dist/pro/index.html → /pro/ · dist/index.html → / · dist/404.html → /404.html
const urlFor = (file) => {
  const rel = relative(DIST, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
};

const perPage = new Map();
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  const hashes = new Set();
  for (const m of html.matchAll(
    /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g
  )) {
    hashes.add(`'sha256-${sha256(m[1])}'`);
  }
  // Form endpoints actually emitted on this page — the beta form posts
  // natively to whatever PUBLIC_BETA_FORM_ENDPOINT pointed to at build,
  // so form-action must allow that exact origin (or the POST 403s).
  const formActions = new Set();
  for (const m of html.matchAll(/<form[^>]*\baction="([^"]+)"/g)) {
    try {
      const u = new URL(m[1], "https://oficinaos.app");
      if (u.protocol === "mailto:") formActions.add("mailto:");
      else if (u.origin !== "https://oficinaos.app") formActions.add(u.origin);
    } catch {
      /* action relativo — coberto por 'self' */
    }
  }
  perPage.set(urlFor(file), {
    hashes,
    beacon: html.includes("static.cloudflareinsights.com"),
    formActions,
  });
}

const cspFor = ({ hashes, beacon, formActions }) =>
  [
    "default-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    `form-action 'self'${formActions.size ? ` ${[...formActions].sort().join(" ")}` : ""}`,
    "img-src 'self'",
    "media-src 'self'",
    "style-src 'self'",
    "font-src 'self'",
    `script-src ${hashes.size ? [...hashes].sort().join(" ") : "'none'"}${
      beacon ? " https://static.cloudflareinsights.com" : ""
    }`,
    `connect-src 'self'${beacon ? " https://cloudflareinsights.com" : ""}`,
    "manifest-src 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

// Paths without their own rule (arbitrary URLs → 404.html via
// not_found_handling) still get a CSP. The base CSP must cover BOTH
// the 404 page and the homepage: on `/` specifically the `!` unset is
// ignored at the production edge (workers-sdk#11351 — confirmed CF
// bug, open since nov-2025), so the /* rule arrives stacked on top of
// the `/` rule and browsers enforce the intersection. If the base
// allowed only the 404's scripts, every homepage inline script —
// nav sheet, theme — would be blocked. The union stays fail-closed:
// only hashes emitted by these two pages are ever allowed.
const notFound = perPage.get("/404.html");
const home = perPage.get("/");
const baseHashes = new Set([
  ...(home?.hashes ?? []),
  ...(notFound?.hashes ?? []),
]);
const baseFormActions = new Set([
  ...(home?.formActions ?? []),
  ...(notFound?.formActions ?? []),
]);
// Guarda contra regressão: enquanto o edge empilhar `/*` sobre `/` a
// base tem de admitir TODOS os scripts/form-actions da home. Se a união
// for revertida ou enfraquecida, o build falha aqui em vez de o menu
// móvel morrer silenciosamente em produção.
if (home) {
  const missingScripts = [...home.hashes].filter((h) => !baseHashes.has(h));
  const missingActions = [...home.formActions].filter(
    (a) => !baseFormActions.has(a),
  );
  if (missingScripts.length || missingActions.length) {
    console.error(
      `ERRO: CSP base não cobre a home — scripts: ${missingScripts.join(", ") || "ok"}, form-actions: ${missingActions.join(", ") || "ok"}`,
    );
    process.exit(1);
  }
}
const baseCsp = notFound
  ? cspFor({
      hashes: baseHashes,
      beacon: Boolean(home?.beacon) || notFound.beacon,
      formActions: baseFormActions,
    })
  : "default-src 'none'";

const BASE_HEADERS = `/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  X-Permitted-Cross-Domain-Policies: none
  Content-Security-Policy: ${baseCsp}
`;

const CSP_HEADER = "  Content-Security-Policy: ";

let headers = BASE_HEADERS;
// Cloudflare anexa os cabeçalhos de TODAS as regras que correspondem ao URL
// (não substitui) e o browser aplica várias CSP cumulativamente. Sem o `!`,
// a política base do `/*` (a da 404) fundir-se-ia com a da página e
// bloqueava scripts/forms que só a regra específica autoriza.
let longest = CSP_HEADER.length + baseCsp.length;
for (const url of [...perPage.keys()].sort()) {
  const csp = cspFor(perPage.get(url));
  const line = CSP_HEADER + csp;
  if (line.length > longest) longest = line.length;
  headers += `${url}\n  ! Content-Security-Policy\n${line}\n`;
}

writeFileSync(join(DIST, "_headers"), headers);
console.log(
  `dist/_headers written — ${perPage.size} paths, linha CSP mais longa ${longest} chars (limite 2000)`,
);
if (longest >= 2000) {
  console.error("ERRO: ainda há uma linha CSP acima do limite da Cloudflare");
  process.exit(1);
}
