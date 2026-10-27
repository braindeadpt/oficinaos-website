import type { Copy } from "../i18n/pt";
import type { Locale } from "../i18n/utils";
import { localeUrl } from "../i18n/utils";

export type ProductId = "os" | "diag" | "pro" | "trade";
export const PRODUCT_IDS: ProductId[] = ["os", "diag", "pro", "trade"];

export const TRADE_URL = "https://trade.oficinaos.app/";
/** Rotas reais da SPA do Trade (oficinaos-market web/src/app.tsx). */
export const TRADE_APPLY_URL = `${TRADE_URL}admissao`;
export const TRADE_MARKET_URL = `${TRADE_URL}mercado`;
export const TRADE_SIGNIN_URL = `${TRADE_URL}entrar`;

/** Destino de cada produto. Diag e Pro têm página própria desde a fase 3 e o Trade desde a
 *  fase 4 (a documentação do Diag continua em /docs/diag/; a app do Trade é TRADE_URL).
 *  A Cloud vive dentro do Pro. */
export function productHref(id: ProductId, locale: Locale): string {
  switch (id) {
    case "os":
      return localeUrl(locale);
    case "diag":
      return localeUrl(locale, "/diag/");
    case "pro":
      return localeUrl(locale, "/pro/");
    case "trade":
      return localeUrl(locale, "/trade/");
  }
}

export function products(t: Copy, locale: Locale) {
  return PRODUCT_IDS.map((id) => ({
    id,
    name: t.nav.productItems[id].name,
    desc: t.nav.productItems[id].desc,
    href: productHref(id, locale),
    external: false,
  }));
}
