/**
 * Changelog shown on /updates — one entry per shipped feature.
 *
 * How to add: append a new object at the TOP of UPDATES for each release.
 * `tier` controls the badge: "free" = core (always MIT), "pro" = paid module,
 * "diag" = OficinaOS Diag companion tool.
 * Keep titles one line; desc one sentence, honest about limits.
 */
export type UpdateTier = "free" | "pro" | "diag";

export interface UpdateEntry {
  /** ISO date, newest first. */
  date: string;
  tier: UpdateTier;
  /** Short scope tag shown next to the tier badge. */
  area: { pt: string; en: string; es: string };
  title: { pt: string; en: string; es: string };
  desc: { pt: string; en: string; es: string };
}

export const UPDATES: UpdateEntry[] = [
  {
    date: "2026-10-07",
    tier: "free",
    area: { pt: "Instalação", en: "Install", es: "Instalación" },
    title: {
      pt: "Instalador Windows de um clique",
      en: "One-click Windows installer",
      es: "Instalador Windows de un clic",
    },
    desc: {
      pt: "O novo OficinaOS-Setup.exe instala tudo — corre como serviço Windows (arranca com o PC), faz backup diário da base de dados e tem ícone na bandeja. Sem Docker, sem consolas.",
      en: "The new OficinaOS-Setup.exe installs everything — runs as a Windows service (starts with the PC), backs up the database daily and sits in the system tray. No Docker, no consoles.",
      es: "El nuevo OficinaOS-Setup.exe lo instala todo — corre como servicio de Windows (arranca con el PC), hace copia diaria de la base de datos y tiene icono en la bandeja. Sin Docker, sin consolas.",
    },
  },
  {
    date: "2026-10-07",
    tier: "free",
    area: { pt: "Acesso à loja", en: "Shop access", es: "Acceso a la tienda" },
    title: {
      pt: "oficinaos.local + QR — adeus IP decorado",
      en: "oficinaos.local + QR — no more memorized IPs",
      es: "oficinaos.local + QR — adiós IP memorizada",
    },
    desc: {
      pt: "A app anuncia-se como oficinaos.local na rede da loja e a página de Ajuda mostra um QR — lê-se com o telemóvel ou tablet e abre-se a loja, mesmo quando o IP muda.",
      en: "The app announces itself as oficinaos.local on the shop network and the Help page shows a QR code — scan it with a phone or tablet to open the shop, even when the IP changes.",
      es: "La app se anuncia como oficinaos.local en la red de la tienda y la página de Ayuda muestra un QR — se lee con el móvil o tablet y abre la tienda, aunque cambie la IP.",
    },
  },
  {
    date: "2026-10-07",
    tier: "diag",
    area: { pt: "OficinaOS Diag", en: "OficinaOS Diag", es: "OficinaOS Diag" },
    title: {
      pt: "Novo logótipo e testes de campo reforçados",
      en: "New logo and stronger field tests",
      es: "Nuevo logotipo y pruebas de campo reforzadas",
    },
    desc: {
      pt: "v0.2.1: logótipo «parafuso pentalobe», zonas térmicas no benchmark (bateria vs SoC), contagem de quedas USB, deteção de bloqueio SIM/operadora, rampa de cinzentos e teste multi-toque.",
      en: "v0.2.1: «pentalobe screw» logo, thermal zones in the benchmark (cell vs SoC), USB drop counting, SIM/carrier lock detection, grey ramp and multi-touch test.",
      es: "v0.2.1: logotipo «tornillo pentalobe», zonas térmicas en el benchmark (batería vs SoC), conteo de caídas USB, detección de bloqueo SIM/operadora, rampa de grises y prueba multitáctil.",
    },
  },
  {
    date: "2026-10-05",
    tier: "pro",
    area: { pt: "Loja online", en: "Online store", es: "Tienda online" },
    title: {
      pt: "Loja online pública",
      en: "Public online store",
      es: "Tienda online pública",
    },
    desc: {
      pt: "Marque artigos como «Listar na loja online» e eles aparecem na página pública da sua loja no OficinaOS Cloud — com reservas de clientes a chegar à app. O módulo Storefront+ adiciona cor, logótipo e layouts.",
      en: "Mark items as «List in online store» and they appear on your shop's public page on OficinaOS Cloud — with customer reservations arriving in the app. The Storefront+ module adds colour, logo and layouts.",
      es: "Marca artículos como «Listar en tienda online» y aparecen en la página pública de tu tienda en OficinaOS Cloud — con reservas de clientes llegando a la app. El módulo Storefront+ añade color, logotipo y diseños.",
    },
  },
  {
    date: "2026-10-05",
    tier: "pro",
    area: { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
    title: {
      pt: "Remarketing automático",
      en: "Automatic remarketing",
      es: "Remarketing automático",
    },
    desc: {
      pt: "Re-engaja clientes por WhatsApp automaticamente — recupera quem ficou sem resposta ou traz de volta quem não volta há muito tempo.",
      en: "Automatically re-engages customers over WhatsApp — recovers unanswered quotes and brings back customers who haven't visited in a while.",
      es: "Vuelve a captar clientes por WhatsApp automáticamente — recupera presupuestos sin respuesta y trae de vuelta a quien no visita hace tiempo.",
    },
  },
  {
    date: "2026-10-05",
    tier: "pro",
    area: { pt: "Marketplace", en: "Marketplace", es: "Marketplace" },
    title: {
      pt: "Quadro «Procuro-peça»",
      en: "«Looking for a part» board",
      es: "Tablón «Busco pieza»",
    },
    desc: {
      pt: "Publique pedidos de peças que não tem em stock — outras lojas OficinaOS respondem com ofertas. O negócio acerta-se entre lojas.",
      en: "Post requests for parts you don't have in stock — other OficinaOS shops answer with offers. The deal is settled between shops.",
      es: "Publica peticiones de piezas que no tienes en stock — otras tiendas OficinaOS responden con ofertas. El trato se cierra entre tiendas.",
    },
  },
  {
    date: "2026-10-05",
    tier: "free",
    area: { pt: "Receção", en: "Intake", es: "Recepción" },
    title: {
      pt: "Hora pretendida no pré-check público",
      en: "Preferred time on the public pre-check",
      es: "Hora preferida en el pre-check público",
    },
    desc: {
      pt: "O cliente pode escolher a hora pretendida ao submeter o pedido de reparação online — a loja vê a preferência na fila de Pedidos.",
      en: "Customers can pick a preferred time when submitting an online repair request — the shop sees it in the Requests queue.",
      es: "El cliente puede elegir la hora preferida al enviar la solicitud online — la tienda la ve en la cola de Solicitudes.",
    },
  },
  {
    date: "2026-10-05",
    tier: "diag",
    area: { pt: "OficinaOS Diag", en: "OficinaOS Diag", es: "OficinaOS Diag" },
    title: {
      pt: "Inglês + 3 temas + Microsoft Store",
      en: "English + 3 themes + Microsoft Store",
      es: "Inglés + 3 temas + Microsoft Store",
    },
    desc: {
      pt: "O Diag fala português e inglês, oferece três temas (Terminal, Windows 95, Moderno) e passa a estar disponível na Microsoft Store — instalação sem aviso SmartScreen.",
      en: "Diag speaks Portuguese and English, offers three themes (Terminal, Windows 95, Modern) and is now on the Microsoft Store — install without the SmartScreen warning.",
      es: "Diag habla portugués e inglés, ofrece tres temas (Terminal, Windows 95, Moderno) y ahora está en la Microsoft Store — instalación sin aviso SmartScreen.",
    },
  },
  {
    date: "2026-10-04",
    tier: "free",
    area: { pt: "Impressão", en: "Printing", es: "Impresión" },
    title: {
      pt: "Impressão configurável + ESC/POS direto",
      en: "Configurable printing + direct ESC/POS",
      es: "Impresión configurable + ESC/POS directo",
    },
    desc: {
      pt: "Talões em 58 mm, 80 mm ou A4; etiquetas de reparação em 3 tamanhos; secções do talão ao gosto da loja; e impressão direta na térmica por rede, sem diálogo do browser.",
      en: "Receipts in 58 mm, 80 mm or A4; repair labels in 3 sizes; per-section receipt toggles; and direct network printing to thermal printers, no browser dialog.",
      es: "Tickets en 58 mm, 80 mm o A4; etiquetas de reparación en 3 tamaños; secciones del ticket configurables; e impresión directa por red a térmicas, sin diálogo del navegador.",
    },
  },
  {
    date: "2026-10-04",
    tier: "free",
    area: { pt: "Retomas", en: "Trade-ins", es: "Recompras" },
    title: {
      pt: "Compra de usados ao cliente",
      en: "Buying used devices from customers",
      es: "Compra de usados al cliente",
    },
    desc: {
      pt: "Registo legal de retomas: identificação do vendedor, checklist funcional, assinatura e avaliação — tudo ligado ao histórico do equipamento.",
      en: "Legal second-hand registry: seller ID, functional checklist, signature and valuation — all tied to the device history.",
      es: "Registro legal de recompras: identificación del vendedor, checklist funcional, firma y valoración — todo ligado al historial del equipo.",
    },
  },
  {
    date: "2026-10-03",
    tier: "free",
    area: { pt: "Relatórios", en: "Reports", es: "Informes" },
    title: {
      pt: "Objetivo mensal e CSV em todos os relatórios",
      en: "Monthly goal and CSV export in all reports",
      es: "Objetivo mensual y CSV en todos los informes",
    },
    desc: {
      pt: "Defina a meta mensal de faturação nas Definições e exporte qualquer relatório para Excel — vendas, encomendas, retomas, devoluções por técnico.",
      en: "Set the monthly revenue goal in Settings and export any report to Excel — sales, orders, trade-ins, returns by technician.",
      es: "Define el objetivo mensual de facturación en Ajustes y exporta cualquier informe a Excel — ventas, pedidos, recompras, devoluciones por técnico.",
    },
  },
  {
    date: "2026-10-03",
    tier: "free",
    area: { pt: "Receção", en: "Intake", es: "Recepción" },
    title: {
      pt: "Intake completo: assinatura, checklist, consentimento",
      en: "Complete intake: signature, checklist, consent",
      es: "Recepción completa: firma, checklist, consentimiento",
    },
    desc: {
      pt: "A ficha de entrada ganhou assinatura digital do cliente, checklist funcional, código de desbloqueio, acessórios entregues e consentimento WhatsApp registado.",
      en: "The intake form gained a digital customer signature, functional checklist, unlock code, handed-over accessories and recorded WhatsApp consent.",
      es: "La ficha de entrada ganó firma digital del cliente, checklist funcional, código de desbloqueo, accesorios entregados y consentimiento de WhatsApp registrado.",
    },
  },
  {
    date: "2026-10-02",
    tier: "pro",
    area: { pt: "Diag intake", en: "Diag intake", es: "Diag intake" },
    title: {
      pt: "O cliente faz o diagnóstico em casa",
      en: "Customers run diagnostics at home",
      es: "El cliente hace el diagnóstico en casa",
    },
    desc: {
      pt: "Com o OficinaOS Diag e o código da loja, o cliente envia o scan do telemóvel antes de sair de casa — chega como pedido pronto a converter em reparação.",
      en: "With OficinaOS Diag and the shop code, customers send their phone scan before leaving home — it arrives as a request ready to convert into a repair.",
      es: "Con OficinaOS Diag y el código de la tienda, el cliente envía el escaneo del móvil antes de salir de casa — llega como solicitud lista para convertir en reparación.",
    },
  },
];
