import type { Copy } from "./pt";

const SITE = "https://oficinaos.app";

const organization = {
  "@type": "Organization" as const,
  "@id": `${SITE}/#org`,
  name: "OficinaOS",
  url: `${SITE}/`,
  logo: `${SITE}/apple-touch-icon.png`,
  email: "oficinaos.app@gmail.com",
  sameAs: [
    "https://github.com/braindeadpt/OficinaOS",
    "https://discord.gg/secdgJYZNn",
    "https://www.youtube.com/@OficinaOSapp",
    "https://www.facebook.com/OficinaOS",
  ],
};

const website = {
  "@type": "WebSite" as const,
  "@id": `${SITE}/#site`,
  url: `${SITE}/`,
  name: "OficinaOS",
  publisher: { "@id": `${SITE}/#org` },
  inLanguage: ["pt-PT", "en", "es"],
};

/** Homepage: SoftwareApplication + Organization + WebSite.
 *  Only facts the site/repo actually support — price 0 (MIT core),
 *  Windows installer + Docker on Linux/macOS; no native Android app
 *  is claimed (phones use the browser/PWA). */
export function landingJsonLd(t: Copy): object[] {
  return [
    organization,
    website,
    {
      "@type": "SoftwareApplication",
      name: "OficinaOS",
      description: t.meta.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10/11, Docker (Linux, macOS)",
      url: `${SITE}/`,
      downloadUrl:
        "https://github.com/braindeadpt/OficinaOS/releases/latest",
      softwareHelp: `${SITE}/docs`,
      license: "https://github.com/braindeadpt/OficinaOS/blob/main/LICENSE",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: ["pt-PT", "en", "es"],
    },
    {
      "@type": "VideoObject",
      name: `OficinaOS — ${t.screenshots.title}`,
      description: t.screenshots.subtitle,
      thumbnailUrl: `${SITE}/screenshots/dashboard.webp`,
      contentUrl: `${SITE}/video/oficinaos-demo.mp4`,
      uploadDate: "2026-10-08",
      duration: "PT1M2S",
      publisher: { "@id": `${SITE}/#org` },
    },
  ];
}

/** Docs index: FAQPage built from the real «Perguntas frequentes» table
 *  (content must be visible on the page — it is) + BreadcrumbList. */
export function docsJsonLd(t: Copy, locale: string): object[] {
  const faq = t.docs.sections.find(
    (s) => s.table && /^pergunta|question|pregunta/i.test(s.table.head[0])
  );
  const out: object[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "OficinaOS",
          item: `${SITE}/${locale === "pt" ? "" : `${locale}/`}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.docs.title,
        },
      ],
    },
  ];
  if (faq?.table) {
    out.push({
      "@type": "FAQPage",
      mainEntity: faq.table.rows.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  return out;
}

/** /diag: SoftwareApplication do OficinaOS Diag — só factos do repo (Windows, grátis, MIT). */
export function diagJsonLd(t: Copy, url: string): object[] {
  return [
    organization,
    {
      "@type": "SoftwareApplication",
      name: "OficinaOS Diag",
      description: t.diagPage.metaDesc,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Windows 10/11",
      url,
      downloadUrl: "https://github.com/braindeadpt/oficinaos-diag/releases/latest",
      license: "https://github.com/braindeadpt/oficinaos-diag/blob/main/LICENSE",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      publisher: { "@id": `${SITE}/#org` },
    },
  ];
}

/** /trade: WebApplication do OficinaOS Trade — só factos do oficinaos-market: app web em
 *  trade.oficinaos.app, grátis no lançamento, disponível em Portugal e Espanha, PT/ES/EN. */
export function tradeJsonLd(t: Copy, url: string): object[] {
  return [
    organization,
    {
      "@type": "WebApplication",
      name: "OficinaOS Trade",
      description: t.tradePage.metaDesc,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      url: "https://trade.oficinaos.app/",
      mainEntityOfPage: url,
      areaServed: [
        { "@type": "Country", name: "Portugal" },
        { "@type": "Country", name: "Spain" },
      ],
      inLanguage: ["pt-PT", "es", "en"],
      audience: { "@type": "BusinessAudience" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      publisher: { "@id": `${SITE}/#org` },
    },
  ];
}
