import type { Copy } from "../i18n/pt";
import type { Locale } from "../i18n/utils";
import { localeUrl } from "../i18n/utils";

export type ProductId = "os" | "diag" | "pro" | "trade";
export const PRODUCT_IDS: ProductId[] = ["os", "diag", "pro", "trade"];

export const TRADE_URL = "https://trade.oficinaos.app/";

/** Destino de cada produto. /diag e /pro ganham página própria nas fases 3–4;
 *  até lá apontam para o que existe hoje. A Cloud vive dentro do Pro. */
export function productHref(id: ProductId, locale: Locale): string {
  switch (id) {
    case "os":
      return localeUrl(locale);
    case "diag":
      return localeUrl(locale, "/docs/diag/");
    case "pro":
      return `${localeUrl(locale)}#pro`;
    case "trade":
      return TRADE_URL;
  }
}

export function products(t: Copy, locale: Locale) {
  return PRODUCT_IDS.map((id) => ({
    id,
    name: t.nav.productItems[id].name,
    desc: t.nav.productItems[id].desc,
    href: productHref(id, locale),
    external: id === "trade",
  }));
}
