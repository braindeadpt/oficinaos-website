import type { Locale } from "../i18n/utils";
import { localeUrl } from "../i18n/utils";

/**
 * Atributos dos botões «Descarregar» (deteção do SO, progressiva).
 * - Sem JS: href = /download/ do idioma (funciona em qualquer SO; lá está o .exe, o Docker e o portátil).
 * - Com JS: o script do <head> (Base.astro) põe data-os="win|desktop|mobile" no <html> antes do
 *   primeiro paint e, no clique, troca o href pelo data-dl-<os>:
 *     win     → /download/?start=windows (a página inicia o Setup.exe e mostra os passos do SmartScreen)
 *     desktop → /download/#docker (Linux/macOS)
 *     mobile  → /download/#mobile (instala-se num PC; o telemóvel usa o browser)
 * Os rótulos por SO trocam só por CSS (.dl-v-*), por isso não há layout shift.
 */
export function downloadAttrs(locale: Locale) {
  const page = localeUrl(locale, "/download/");
  return {
    href: page,
    "data-dl-win": `${page}?start=windows`,
    "data-dl-desktop": `${page}#docker`,
    "data-dl-mobile": `${page}#mobile`,
  };
}
