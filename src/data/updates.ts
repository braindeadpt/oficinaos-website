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
    date: "2026-11-27",
    tier: "pro",
    area: { pt: "Livro de Ponto", en: "Time Clock", es: "Registro de jornada" },
    title: {
      pt: "v1.0.23: exportação para a ACT",
      en: "v1.0.23: ACT export",
      es: "v1.0.23: exportación para la ACT",
    },
    desc: {
      pt: "O livro de ponto exporta os registos no formato exigido pela Autoridade para as Condições do Trabalho — se a loja for inspecionada, o ficheiro sai pronto, sem montagens à mão.",
      en: "The time clock exports records in the format required by the Portuguese labour authority — if the shop is inspected, the file comes out ready, no hand-built spreadsheets.",
      es: "El registro de jornada exporta los registros en el formato exigido por la Autoridad para las Condiciones del Trabajo — si la tienda es inspeccionada, el archivo sale listo, sin montajes manuales.",
    },
  },
  {
    date: "2026-11-27",
    tier: "pro",
    area: { pt: "Livro de Ponto", en: "Time Clock", es: "Registro de jornada" },
    title: {
      pt: "v1.0.23: folha de informação aos trabalhadores",
      en: "v1.0.23: worker information sheet",
      es: "v1.0.23: hoja de información a los trabajadores",
    },
    desc: {
      pt: "A app gera a folha que explica a cada trabalhador que dados o livro de ponto recolhe e durante quanto tempo, com registo de entrega — a obrigação legal de informação fica documentada.",
      en: "The app generates the sheet explaining to each worker what the time clock collects and for how long, with a delivery record — the legal information duty is documented.",
      es: "La app genera la hoja que explica a cada trabajador qué datos recoge el registro de jornada y durante cuánto tiempo, con registro de entrega — la obligación legal de información queda documentada.",
    },
  },
  {
    date: "2026-11-27",
    tier: "pro",
    area: { pt: "Livro de Ponto", en: "Time Clock", es: "Registro de jornada" },
    title: {
      pt: "v1.0.23: fotografias deixam de ser guardadas, localização só quando é preciso",
      en: "v1.0.23: photos no longer stored, location only when needed",
      es: "v1.0.23: las fotos dejan de guardarse, ubicación solo cuando hace falta",
    },
    desc: {
      pt: "Os registos externos guardam apenas a nota «foto enviada às HH:MM» — a imagem nunca fica na base de dados. E quem regista com o QR do ecrã da loja, na rede da loja, já não partilha a localização: ela só é pedida quando não há outra prova de presença.",
      en: "External check-ins keep only the note «photo sent at HH:MM» — the image never reaches the database. And staff checking in with the shop-screen QR on the shop network no longer share their location: it is only asked when there is no other proof of presence.",
      es: "Los registros externos guardan solo la nota «foto enviada a las HH:MM» — la imagen nunca queda en la base de datos. Y quien registra con el QR de la pantalla de la tienda, en la red de la tienda, ya no comparte su ubicación: solo se pide cuando no hay otra prueba de presencia.",
    },
  },
  {
    date: "2026-11-27",
    tier: "free",
    area: { pt: "IA", en: "AI", es: "IA" },
    title: {
      pt: "v1.0.23: MCP só de leitura, grátis",
      en: "v1.0.23: read-only MCP, free",
      es: "v1.0.23: MCP de solo lectura, gratis",
    },
    desc: {
      pt: "A loja pode ligar um assistente de IA aos dados da oficina — clientes, reparações, vendas — em modo só de leitura, sem custo. Os dados pessoais saem mascarados e cada pessoa tem o seu token revogável.",
      en: "The shop can connect an AI assistant to its data — customers, repairs, sales — in read-only mode, at no cost. Personal data comes out masked and each person has their own revocable token.",
      es: "La tienda puede conectar un asistente de IA a sus datos — clientes, reparaciones, ventas — en modo de solo lectura, sin coste. Los datos personales salen enmascarados y cada persona tiene su token revocable.",
    },
  },
  {
    date: "2026-11-27",
    tier: "free",
    area: { pt: "Assinaturas", en: "Signatures", es: "Firmas" },
    title: {
      pt: "v1.0.23: termos assinados ligados à versão exata",
      en: "v1.0.23: signed terms bound to the exact version",
      es: "v1.0.23: términos firmados ligados a la versión exacta",
    },
    desc: {
      pt: "O texto que o cliente assina é o da loja no momento exato da assinatura e fica guardado com ela — ninguém o pode trocar depois. O recibo indica a versão dos termos e a data em que a loja a editou.",
      en: "The text the customer signs is the shop's text at the exact moment of signature and is stored with it — nobody can swap it afterwards. The receipt shows the terms version and the date the shop last edited it.",
      es: "El texto que el cliente firma es el de la tienda en el momento exacto de la firma y queda guardado con ella — nadie puede cambiarlo después. El ticket indica la versión de los términos y la fecha en que la tienda la editó.",
    },
  },
  {
    date: "2026-11-27",
    tier: "pro",
    area: { pt: "Livro de Ponto", en: "Time Clock", es: "Registro de jornada" },
    title: {
      pt: "v1.0.23: modo só-ponto e backups verificados",
      en: "v1.0.23: time-clock-only mode and verified backups",
      es: "v1.0.23: modo solo-registro y copias verificadas",
    },
    desc: {
      pt: "Um computador ou tablet pode ficar dedicado ao livro de ponto, sem acesso ao resto da gestão. E as cópias de segurança passam a ser verificadas automaticamente — a loja sabe que o backup abre antes de precisar dele.",
      en: "A computer or tablet can be dedicated to the time clock, with no access to the rest of the system. And backups are now verified automatically — the shop knows the backup opens before it needs it.",
      es: "Un ordenador o tablet puede quedar dedicado al registro de jornada, sin acceso al resto de la gestión. Y las copias de seguridad ahora se verifican automáticamente — la tienda sabe que la copia abre antes de necesitarla.",
    },
  },
  {
    date: "2026-11-27",
    tier: "pro",
    area: { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
    title: {
      pt: "v1.0.23: credenciais Meta geridas na Cloud",
      en: "v1.0.23: Meta credentials managed in the Cloud",
      es: "v1.0.23: credenciales de Meta gestionadas en la Cloud",
    },
    desc: {
      pt: "As credenciais do WhatsApp deixam o computador da loja e passam a ser geridas na Cloud, com consentimento explícito — menos um segredo guardado localmente.",
      en: "WhatsApp credentials leave the shop computer and are now managed in the Cloud, with explicit consent — one less secret stored locally.",
      es: "Las credenciales de WhatsApp dejan el ordenador de la tienda y pasan a gestionarse en la Cloud, con consentimiento explícito — un secreto menos guardado localmente.",
    },
  },
  {
    date: "2026-10-27",
    tier: "free",
    area: { pt: "Impressão", en: "Printing", es: "Impresión" },
    title: {
      pt: "v1.0.21: alto contraste em qualquer impressora",
      en: "v1.0.21: high contrast on any printer",
      es: "v1.0.21: alto contraste en cualquier impresora",
    },
    desc: {
      pt: "A opção «Impressão de alto contraste» estava escondida quando a impressão era feita pelo diálogo do Windows — agora aparece em qualquer método e escurece o talão em todos eles.",
      en: "The «High contrast printing» option was hidden when printing through the Windows print dialog — it now shows under any print method and darkens the receipt on all of them.",
      es: "La opción «Impresión de alto contraste» estaba oculta cuando se imprimía por el diálogo de Windows — ahora aparece con cualquier método y oscurece el ticket en todos ellos.",
    },
  },
  {
    date: "2026-10-27",
    tier: "free",
    area: { pt: "Estabilidade", en: "Stability", es: "Estabilidad" },
    title: {
      pt: "v1.0.21: atualizador usa sempre o script da nova versão",
      en: "v1.0.21: updater always runs the new version's script",
      es: "v1.0.21: el actualizador usa siempre el script de la nueva versión",
    },
    desc: {
      pt: "As atualizações in-app passam a descarregar e verificar (SHA-256) o script de atualização da própria versão nova, em vez de usarem o que ficou instalado — updates futuros mais robustos.",
      en: "In-app updates now download and SHA-256-verify the new version's own update script instead of reusing the previously installed one — more robust updates going forward.",
      es: "Las actualizaciones in-app ahora descargan y verifican (SHA-256) el script de actualización de la propia versión nueva, en lugar de reutilizar el instalado — actualizaciones futuras más robustas.",
    },
  },
  {
    date: "2026-10-27",
    tier: "free",
    area: { pt: "Assinatura", en: "Signature", es: "Firma" },
    title: {
      pt: "v1.0.20: QR de assinatura corrigido no Android",
      en: "v1.0.20: signature QR fixed on Android",
      es: "v1.0.20: QR de firma corregido en Android",
    },
    desc: {
      pt: "O QR do «assinar no telemóvel» apontava para um endereço que o Android não resolve — agora usa o IP local do PC e abre em qualquer telemóvel no Wi-Fi da loja.",
      en: "The «sign on the customer's phone» QR pointed at an address Android can't resolve — it now uses the PC's LAN IP and opens on any phone on the shop Wi-Fi.",
      es: "El QR de «firmar en el móvil» apuntaba a una dirección que Android no resuelve — ahora usa la IP local del PC y abre en cualquier móvil en la Wi-Fi de la tienda.",
    },
  },
  {
    date: "2026-10-27",
    tier: "free",
    area: { pt: "Impressão", en: "Printing", es: "Impresión" },
    title: {
      pt: "v1.0.20: impressão de alto contraste",
      en: "v1.0.20: high-contrast printing",
      es: "v1.0.20: impresión de alto contraste",
    },
    desc: {
      pt: "Nova opção em Definições → Loja que imprime todas as linhas do talão a negrito — resolve talões fracos em impressoras térmicas com densidade baixa ou papel gasto.",
      en: "New option in Settings → Shop that prints every receipt line in bold — fixes faint receipts on thermal printers with low density or worn paper.",
      es: "Nueva opción en Configuración → Tienda que imprime todas las líneas del ticket en negrita — resuelve tickets débiles en impresoras térmicas con densidad baja o papel gastado.",
    },
  },
  {
    date: "2026-10-27",
    tier: "free",
    area: { pt: "Estabilidade", en: "Stability", es: "Estabilidad" },
    title: {
      pt: "v1.0.20: atualizador Windows blindado + ecrãs pequenos",
      en: "v1.0.20: hardened Windows updater + small screens",
      es: "v1.0.20: actualizador Windows reforzado + pantallas pequeñas",
    },
    desc: {
      pt: "Se uma atualização falhar a meio (ficheiro bloqueado, antivírus), a versão anterior é restaurada automaticamente. E o POS, relatórios e navegação ficaram usáveis em ecrãs pequenos.",
      en: "If an update fails midway (locked file, antivirus), the previous version is automatically restored. Plus POS, reports and navigation now work on small screens.",
      es: "Si una actualización falla a mitad (archivo bloqueado, antivirus), la versión anterior se restaura automáticamente. Además, el POS, informes y navegación funcionan en pantallas pequeñas.",
    },
  },
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
      pt: "Inglês + 3 temas",
      en: "English + 3 themes",
      es: "Inglés + 3 temas",
    },
    desc: {
      pt: "O Diag fala português e inglês, oferece três temas (Terminal, Windows 95, Moderno) e foi submetido à Microsoft Store (aguarda aprovação).",
      en: "Diag speaks Portuguese and English, offers three themes (Terminal, Windows 95, Modern) and has been submitted to the Microsoft Store (awaiting approval).",
      es: "Diag habla portugués e inglés, ofrece tres temas (Terminal, Windows 95, Moderno) y se ha enviado a la Microsoft Store (pendiente de aprobación).",
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
