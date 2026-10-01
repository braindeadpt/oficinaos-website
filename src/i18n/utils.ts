export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** URL for a locale root (or path under it), honouring astro.config `base`. */
export function localeUrl(locale: Locale, path = "/"): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${BASE}${prefix}${path}`;
}

export const REPO_URL = "https://github.com/braindeadpt/OficinaOS";
export const INSTALL_URL = `${REPO_URL}/blob/main/INSTALL.md`;
export const RELEASES_URL = `${REPO_URL}/releases`;
