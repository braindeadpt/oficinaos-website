// Fonte única de preços e limites comerciais do site (/pro, /precos, calculadora, páginas de módulos).
// Origem das decisões: reparilo/docs/internal/plano-oferta-comercial.md (§2b, §3, §4) — 2026-11-25.
// Valores em euros, sem IVA. `null` = ainda não decidido pelo dono → o site mostra «a anunciar».
// Nunca escrever preços diretamente no texto (i18n): ler sempre daqui.

export const pricing = {
  pro: {
    /** Mensalidade por conta (multi-loja), com o modelo de IA incluído. */
    monthlyAiIncluded: 49,
    /** Mensalidade por conta com a chave de IA do próprio cliente (BYOK). */
    monthlyByok: 39,
    shopsIncluded: 3,
    extraShopMonthly: 9.9,
    /** Conversas de IA por mês, partilhadas por todas as lojas da conta. */
    conversationsIncluded: 3000,
    trialDays: 14,
    founder: {
      /** Preço de fundador, com IA incluída, fixo durante `months`. */
      monthly: 39,
      months: 12,
      slots: 10,
    },
    annual: {
      /** O cliente escolhe uma das duas ofertas no plano anual. */
      freeMonths: 2,
      setupHoursOffered: 3,
    },
  },
  extras: {
    conversationPack: { conversations: 1000, price: 9 },
    whatsappOfficialActivation: 149,
    /** Respostas grátis por mês e por número que a Meta oferece no WhatsApp oficial (desde 1/10/2026). */
    metaFreeServiceMessages: 1000,
  },
  services: {
    hourly: 49,
    /** Faturação em blocos de 15 min, mínimo 30 min. */
    blockMinutes: 15,
    minimumMinutes: 30,
    installation: 99,
    /** Horas de suporte dedicado incluídas na instalação, a usar em `installationSupportDays` dias. */
    installationSupportHours: 1,
    installationSupportDays: 30,
    dataImportFrom: 50,
    /** Alojamento na VPS da OficinaOS, com manutenção incluída — ainda por decidir. */
    hostingMonthly: null as number | null,
  },
} as const;

/** Formatação de euros por idioma do site. */
export function euro(locale: "pt" | "en" | "es", value: number, decimals: "auto" | 0 | 2 = "auto"): string {
  const tag = locale === "pt" ? "pt-PT" : locale === "es" ? "es-ES" : "en-IE";
  const isInt = Number.isInteger(value);
  const digits = decimals === "auto" ? (isInt ? 0 : 2) : decimals;
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** Número com separador de milhares do idioma (ex.: 3.000 / 3,000). */
export function num(locale: "pt" | "en" | "es", value: number): string {
  const tag = locale === "pt" ? "pt-PT" : locale === "es" ? "es-ES" : "en-IE";
  return new Intl.NumberFormat(tag, { useGrouping: "always" } as Intl.NumberFormatOptions).format(value);
}

/** Substitui `{chave}` num texto pelos valores dados. */
export function fill(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}
