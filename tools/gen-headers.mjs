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
// No GitHub Pages é ignorado sem efeito.
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
  perPage.set(urlFor(file), hashes);
}

const cspFor = (hashes) =>
  [
    "default-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "form-action 'self' mailto: https://cloud.oficinaos.app",
    "img-src 'self'",
    "media-src 'self'",
    "style-src 'self'",
    "font-src 'self'",
    `script-src ${hashes.size ? [...hashes].sort().join(" ") : "'none'"}`,
    "connect-src 'self' https://cloud.oficinaos.app",
    "frame-src https://www.youtube-nocookie.com",
    "manifest-src 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

const BASE_HEADERS = `/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  X-Permitted-Cross-Domain-Policies: none
`;

let headers = BASE_HEADERS;
let longest = 0;
for (const url of [...perPage.keys()].sort()) {
  const csp = cspFor(perPage.get(url));
  if (csp.length > longest) longest = csp.length;
  headers += `${url}\n  Content-Security-Policy: ${csp}\n`;
}

writeFileSync(join(DIST, "_headers"), headers);
console.log(
  `dist/_headers written — ${perPage.size} paths, CSP mais longa ${longest} chars (limite 2000)`,
);
if (longest >= 2000) {
  console.error("ERRO: ainda há uma linha CSP acima do limite da Cloudflare");
  process.exit(1);
}
