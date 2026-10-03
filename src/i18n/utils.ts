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
export const INSTALL_ZIP_URL = `${REPO_URL}/releases/latest/download/oficinaos-install.zip`;
export const PORTABLE_ZIP_URL = `${REPO_URL}/releases/latest/download/oficinaos-portable.zip`;
export const PORTABLE_DOCS_URL = `${REPO_URL}/blob/main/scripts/portable/README.md`;
export const BACKUP_DOCS_URL = `${REPO_URL}#backups-e-teste-de-restore-sidecar-db-backup`;
export const DOCS_REMOTE_URL = `${REPO_URL}/blob/main/docs/remote-access.md`;
export const DOCS_MOBILE_URL = `${REPO_URL}/blob/main/docs/mobile-access.md`;

export const DIAG_REPO_URL = "https://github.com/braindeadpt/oficinaos-diag";
export const DIAG_ZIP_URL = `${DIAG_REPO_URL}/releases/latest/download/oficinaos-diag-win-x64.zip`;

/** Heading → URL-safe anchor id (strips accents and punctuation). */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
