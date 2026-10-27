// Gera dist/_headers após o astro build: lê todos os HTML, calcula os
// sha256 dos <script> inline e escreve a CSP com os hashes — a política
// fica sempre certa, mesmo quando o conteúdo dos scripts muda.
//
// O ficheiro segue o formato Cloudflare Pages (_headers em public/ ou dist/).
// No GitHub Pages é ignorado sem efeito; com a Cloudflare à frente, os mesmos
// valores aplicam-se via Transform Rules (ver tools/cf-headers.md).
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
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

const scriptHashes = new Set();
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(
    /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g
  )) {
    scriptHashes.add(`'sha256-${sha256(m[1])}'`);
  }
}

const csp = [
  "default-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "form-action 'self' mailto: https://cloud.oficinaos.app",
  "img-src 'self'",
  "media-src 'self'",
  "style-src 'self'",
  "font-src 'self'",
  `script-src ${[...scriptHashes].sort().join(" ")}`,
  "connect-src 'self' https://cloud.oficinaos.app",
  "frame-src https://www.youtube-nocookie.com",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const headers = `/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Content-Security-Policy: ${csp}
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  X-Permitted-Cross-Domain-Policies: none
`;

writeFileSync(join(DIST, "_headers"), headers);
console.log(`dist/_headers written — ${scriptHashes.size} script hashes`);
