// Resume os relatórios do `lhci collect` (.lighthouseci/lhr-*.json):
// uma linha por execução com as 4 categorias e FCP / LCP / TBT / CLS.
// Escreve em Markdown (stdout) — o workflow junta-o ao $GITHUB_STEP_SUMMARY.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = ".lighthouseci";
let files = [];
try {
  files = readdirSync(DIR).filter((f) => /^lhr-.*\.json$/.test(f));
} catch {
  console.log("Sem relatórios do Lighthouse (.lighthouseci/ vazio).");
  process.exit(0);
}

const rows = files
  .map((f) => JSON.parse(readFileSync(join(DIR, f), "utf8")))
  .map((lhr) => {
    const c = lhr.categories;
    const a = lhr.audits;
    const path = new URL(lhr.finalDisplayedUrl ?? lhr.finalUrl).pathname;
    return {
      path,
      time: lhr.fetchTime,
      perf: Math.round(c.performance.score * 100),
      a11y: Math.round(c.accessibility.score * 100),
      bp: Math.round(c["best-practices"].score * 100),
      seo: Math.round(c.seo.score * 100),
      fcp: a["first-contentful-paint"].numericValue,
      lcp: a["largest-contentful-paint"].numericValue,
      tbt: a["total-blocking-time"].numericValue,
      cls: a["cumulative-layout-shift"].numericValue,
    };
  })
  .sort((x, y) => x.path.localeCompare(y.path) || x.time.localeCompare(y.time));

const ms = (v) => `${(v / 1000).toFixed(2)} s`;
const out = [
  "### Lighthouse (mobile, 3 execuções por página)",
  "",
  "| Página | # | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS |",
  "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
];
const seen = {};
for (const r of rows) {
  seen[r.path] = (seen[r.path] ?? 0) + 1;
  out.push(
    `| \`${r.path}\` | ${seen[r.path]} | ${r.perf} | ${r.a11y} | ${r.bp} | ${r.seo} | ${ms(r.fcp)} | ${ms(r.lcp)} | ${Math.round(r.tbt)} ms | ${r.cls.toFixed(3)} |`
  );
}
console.log(out.join("\n"));
