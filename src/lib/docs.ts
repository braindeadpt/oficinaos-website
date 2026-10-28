// Documentação (fase 5): mapa das páginas, ids estáveis dos títulos e o índice de pesquisa
// gerado no build (um JSON estático por idioma, sem serviço externo).
import type { Copy, DocPage, DocsSection } from "../i18n/pt";
import type { Locale } from "../i18n/utils";
import { localeUrl, slugify } from "../i18n/utils";
import type { ProductId } from "./products";

type ModuleKey = keyof Copy["moduleDocs"];

/** Páginas de módulo, pela ordem da side-nav. O slug é o URL (/docs/<slug>/) — não mudar. */
export const DOC_MODULES: { slug: string; key: ModuleKey; product: ProductId }[] = [
  { slug: "diag", key: "diag", product: "diag" },
  { slug: "portal", key: "portal", product: "pro" },
  { slug: "whatsapp", key: "whatsapp", product: "pro" },
  { slug: "sms", key: "sms", product: "os" },
  { slug: "invoicing", key: "invoicing", product: "pro" },
  { slug: "storefront", key: "storefront", product: "pro" },
  { slug: "market", key: "market", product: "pro" },
  { slug: "market-prices", key: "marketPrices", product: "pro" },
  { slug: "multi-shop", key: "multiShop", product: "pro" },
  { slug: "remarketing", key: "remarketing", product: "pro" },
];

/** Quantas secções do guia completo cabem em cada grupo da side-nav (rótulos em t.docs.ui.groups).
 *  Se o número de secções mudar e a soma deixar de bater, a side-nav cai para um grupo único. */
const OVERVIEW_GROUP_SIZES = [4, 7, 3, 8, 3];

/** Ids únicos por página: slug do título; repetidos ganham -2, -3… (o 1.º mantém o id de sempre). */
export function sectionIds(sections: DocsSection[]): string[] {
  const seen = new Map<string, number>();
  return sections.map((s) => {
    const base = slugify(s.heading) || "seccao";
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  });
}

/** Rótulo curto para a navegação: a parte antes de « — », salvo se ficar repetido. */
function shortLabels(sections: DocsSection[]): string[] {
  const short = sections.map((s) => s.heading.split(" — ")[0].trim());
  const count = new Map<string, number>();
  short.forEach((s) => count.set(s, (count.get(s) ?? 0) + 1));
  return short.map((s, i) => ((count.get(s) ?? 0) > 1 ? sections[i].heading : s));
}

export interface NavLink {
  label: string;
  href: string;
}

export function overviewGroups(t: Copy, locale: Locale): { label: string; links: NavLink[] }[] {
  const secs = t.docs.sections;
  const ids = sectionIds(secs);
  const labels = shortLabels(secs);
  const base = localeUrl(locale, "/docs/");
  const links = secs.map((_, i) => ({ label: labels[i], href: `${base}#${ids[i]}` }));
  const sum = OVERVIEW_GROUP_SIZES.reduce((a, b) => a + b, 0);
  if (sum !== secs.length || t.docs.ui.groups.length !== OVERVIEW_GROUP_SIZES.length) {
    return [{ label: t.docs.title, links }];
  }
  let at = 0;
  return OVERVIEW_GROUP_SIZES.map((n, g) => {
    const group = { label: t.docs.ui.groups[g], links: links.slice(at, at + n) };
    at += n;
    return group;
  });
}

export function moduleLinks(t: Copy, locale: Locale) {
  return DOC_MODULES.map((m) => ({
    slug: m.slug,
    product: m.product,
    label: t.moduleDocs[m.key].title,
    href: localeUrl(locale, `/docs/${m.slug}/`),
  }));
}

/** Links internos dos dados sem barra final (/docs/portal) → com barra (evita um 301). */
export function normalizeHref(href: string): string {
  if (!href.startsWith("/") || href.includes("#") || href.includes("?")) return href;
  const last = href.split("/").pop() ?? "";
  return href.endsWith("/") || last.includes(".") ? href : `${href}/`;
}

// ── Índice de pesquisa ─────────────────────────────────────────────

function clip(s: string, max = 170): string {
  const flat = s.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), max - 20)).replace(/[,;:.—–-]+$/, "")}…`;
}

/** Texto curto de uma secção: parágrafos, lista e, na falta deles, a 1.ª coluna da tabela. */
function sectionText(s: DocsSection): string {
  const parts = [...s.paragraphs, ...(s.list ?? [])];
  if (s.table) parts.push(s.table.rows.map((r) => r[0]).join(" · "));
  return clip(parts.join(" "));
}

/** Texto extra só para encontrar (não se mostra): o resto da secção, incluindo as tabelas. */
function sectionKeywords(s: DocsSection): string {
  const parts = [...s.paragraphs, ...(s.list ?? [])];
  if (s.table) parts.push(...s.table.head, ...s.table.rows.flat());
  return parts.join(" ").replace(/\s+/g, " ").slice(0, 900);
}

export interface SearchPage {
  /** Título da página */
  t: string;
  /** URL da página */
  u: string;
  /** Subtítulo */
  d: string;
  /** Secções: [título, id, texto curto, palavras-chave] */
  s: [string, string, string, string][];
}

function pageEntry(page: DocPage, url: string, subtitle: string): SearchPage {
  const ids = sectionIds(page.sections);
  return {
    t: page.title,
    u: url,
    d: clip(subtitle),
    s: page.sections.map((s, i) => [s.heading, ids[i], sectionText(s), sectionKeywords(s)]),
  };
}

export function buildSearchIndex(t: Copy, locale: Locale): SearchPage[] {
  const overview: DocPage = { title: t.docs.title, subtitle: t.docs.subtitle, sections: t.docs.sections };
  return [
    pageEntry(overview, localeUrl(locale, "/docs/"), t.docs.subtitle),
    ...DOC_MODULES.map((m) => {
      const p = t.moduleDocs[m.key];
      return pageEntry(p, localeUrl(locale, `/docs/${m.slug}/`), p.subtitle);
    }),
  ];
}

export function searchIndexResponse(t: Copy, locale: Locale): Response {
  return new Response(JSON.stringify(buildSearchIndex(t, locale)), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
