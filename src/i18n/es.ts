import type { Copy } from "./pt";
import {
  BACKUP_DOCS_URL,
  DIAG_REPO_URL,
  DIAG_ZIP_URL,
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  PORTABLE_DOCS_URL,
  PORTABLE_ZIP_URL,
  RELEASES_URL,
  REPO_URL,
  SETUP_EXE_URL,
} from "./utils";

export const lang = "es";
export const locale = "es";
export const ogLocale = "es_ES";

export const t: Copy = {
  meta: {
    title: "OficinaOS — gestión gratis para talleres de reparación",
    description:
      "Reparaciones, presupuestos, stock y caja en un solo programa gratis, en el PC de tu tienda. Los datos de tus clientes no salen de la tienda.",
  },
  nav: {
    features: "Funcionalidades",
    diag: "Diagnóstico",
    pro: "Módulos Pro",
    install: "Instalar",
    docs: "Guía",
    updates: "Novedades",
    github: "GitHub",
    githubLabel: "Código fuente en GitHub",
    menuLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    download: "Descargar",
    language: "Idioma",
    products: "Productos",
    productsMenuLabel: "Productos OficinaOS",
    forBusinesses: "Para cualquier empresa",
    moduleItems: { ponto: "Fichar por WhatsApp, con un QR en la puerta.", atendimento: "Asistente de IA que responde a los clientes en WhatsApp." },
    productItems: {
      os: { name: "OficinaOS", desc: "Reparaciones, clientes, stock y caja en un solo programa. Gratis." },
      diag: { name: "Diag", desc: "Diagnóstico de móviles por cable, con informe para el cliente." },
      pro: { name: "Pro", desc: "WhatsApp y SMS con IA, portal del cliente, facturación y más. Extras a tu medida." },
      trade: { name: "Trade", desc: "Compraventa de piezas y equipos entre profesionales." },
    },
    openSource: "Código abierto",
    githubStars: "estrellas en GitHub",
    languageMenuLabel: "Elegir idioma",
    languageNames: { pt: "Português", en: "English", es: "Español" },
    skipToContent: "Saltar al contenido",
    theme: { label: "Tema", system: "automático", light: "claro", dark: "oscuro" },
  },
  hero: {
    badge: "Gratis para siempre · Tus datos se quedan en tu tienda",
    title: "Menos llamadas de «¿ya está listo?».",
    titleAccent: "Tu tienda de reparaciones, organizada.",
    subtitle:
      "Programa gratis para tiendas de reparación de móviles. Recepción, presupuestos, stock y caja en un solo programa, instalado en el PC de la tienda. Tus clientes pueden seguir la reparación desde el móvil y tu equipo siempre sabe qué toca hacer.",
    footerLabel: "Programa para talleres",
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Ver cómo funciona",
    downloadNote: "Gratis · Windows 10/11 · instalación guiada — si SmartScreen avisa, es normal en programas nuevos: «Más información» → «Ejecutar de todos modos»",
    chips: ["Sin cuotas mensuales", "Funciona sin internet", "En PC, tablet y móvil"],
    techNote: "Para técnicos: código abierto (licencia MIT), Linux/macOS con Docker —",
    techLink: "ver instalación avanzada",
    videoLabel: "Ver la presentación en vídeo",
  },
  features: {
    title: "Todo lo que necesita un taller",
    subtitle:
      "Pensado para el mostrador, el banco de trabajo y la oficina — en una sola app.",
    items: [
      {
        title: "Flujo de reparaciones",
        desc: "De la recepción a la entrega: estados, prioridades, técnico asignado, fotos y cronología completa de cada trabajo.",
      },
      {
        title: "Punto de venta",
        desc: "Vende piezas y accesorios en el mostrador, con sesiones de caja, tickets y registro de pagos.",
      },
      {
        title: "Stock y piezas",
        desc: "Inventario con alertas de stock bajo, proveedores y piezas vinculadas a cada reparación.",
      },
      {
        title: "Página de seguimiento",
        desc: "El cliente consulta el estado de su reparación desde el móvil con un código — sin cuenta y sin instalar nada.",
      },
      {
        title: "Aprobación de presupuestos",
        desc: "Envía presupuestos y el cliente aprueba o rechaza desde la página de seguimiento, con registro fechado.",
      },
      {
        title: "Notificaciones",
        desc: "Alertas en la app — y mensajes WhatsApp/SMS a los clientes con los módulos Pro.",
      },
      {
        title: "Interfaz multiidioma",
        desc: "Disponible en portugués europeo, inglés, francés y español.",
      },
      {
        title: "Funciona en el móvil",
        desc: "Ábrelo en el navegador de cualquier móvil o tablet, en la red de la tienda, y añádelo a la pantalla de inicio. Sin instalar nada.",
      },
      {
        title: "Copias de seguridad",
        desc: "Backups locales de la base de datos con un comando — los datos son tuyos.",
      },
    ],
  },
  screenshots: {
    title: "Míralo en acción",
    subtitle:
      "El flujo completo en un minuto: check-in, presupuesto y aprobación en el móvil.",
    videoAria: "Vídeo de demostración de OficinaOS",
  },
  pro: {
    badge: "Nuevo · 14 días gratis",
    title: "OficinaOS Pro",
    subtitle:
      "El programa que descargas es y será siempre gratuito y open source (licencia MIT) — nunca será de pago. El Pro es un plan opcional para lo que necesita «llegar a internet» a través de OficinaOS Cloud: mensajes a los clientes, portal, IA y facturación — y, como extras, el libro de horas y Balcão IA.",
    statusLabel: "Pro",
    teaser:
      "WhatsApp y SMS con asistente de IA, portal del cliente, facturación certificada, escaparate online e informes IA en un solo plan — con el libro de horas y Balcão IA como extras, sobre el programa gratis.",
    more: "Conocer el Pro",
    ctaBeta: "Probar 14 días gratis",
    groups: ["Hablar con clientes", "Vender y facturar", "Gestionar y crecer"],
    cloudEngine: "OficinaOS Cloud es el motor del Pro: conecta la app a internet solo para lo que necesitan los módulos.",
    modules: [
      { title: "Portal del cliente", desc: "Enlace público por reparación, con estado y respuesta a presupuestos.", href: "/docs/portal/" },
      { title: "Bot de WhatsApp", desc: "El cliente pregunta por WhatsApp y recibe el estado real de la reparación.", href: "/docs/whatsapp/" },
      { title: "Canal SMS", desc: "El mismo asistente por SMS, con un móvil Android en la tienda.", href: "/docs/sms/" },
      { title: "Recepción de diagnósticos", desc: "El cliente hace el diagnóstico en casa con el Diag y lo envía a la tienda.", href: "/docs/diag/" },
      { title: "Informes IA", desc: "El diagnóstico técnico explicado en lenguaje sencillo.", href: "/docs/diag/" },
      { title: "Facturación (InvoiceXpress)", desc: "Facturas certificadas desde la venta o la reparación — solo Portugal.", href: "/docs/invoicing/" },
      { title: "Escaparate online", desc: "Página pública con artículos del catálogo; los clientes reservan y el pedido entra en la app.", href: "/docs/storefront/" },
      { title: "Busco pieza", desc: "Tablón entre tiendas OficinaOS para pedir y ofrecer piezas.", href: "/docs/market/" },
      { title: "Precios de mercado", desc: "Compara tus precios con la mediana anónima de otras tiendas.", href: "/docs/market-prices/" },
      { title: "Multitienda", desc: "Ingresos y reparaciones de todas tus tiendas en un solo panel.", href: "/docs/multi-shop/" },
      { title: "Remarketing por WhatsApp", desc: "Mensaje automático a clientes que llevan tiempo sin volver.", href: "/docs/remarketing/" },
      { title: "Balcão IA", desc: "Bandeja de entrada unificada de WhatsApp y SMS con un asistente de IA para el equipo — lee, resume y prepara respuestas que un humano aprueba.", href: "/docs/#modulos-pro-como-funcionan" },
      { title: "Libro de horas", desc: "Libro de horas por WhatsApp y SMS — QR fijo en la tienda, registro con prueba de localización en WhatsApp y panel de horas para la inspección de trabajo.", href: "/docs/ponto/" },
    ],
    signup: {
      title: "Probar OficinaOS Pro",
      subtitle:
        "Déjanos tus datos: te ayudamos a emparejar y activamos los 14 días gratis. Sin compromiso y sin tarjeta. Te respondemos en breve.",
      email: "Email",
      emailPlaceholder: "tu@ejemplo.es",
      shop: "Nombre del negocio",
      shopPlaceholder: "ej.: Repara Ya",
      city: "Ciudad",
      cityPlaceholder: "ej.: Vigo",
      phone: "Teléfono",
      phonePlaceholder: "ej.: 612 345 678",
      optional: "opcional",
      languageLabel: "Idioma",
      founderLabel: "Quiero ser uno de los fundadores (precio especial durante 12 meses)",
      button: "Pedir los 14 días gratis",
      mailSubject: "OficinaOS Pro — solicitud de prueba gratis",
      note: "Solo usamos estos datos para contactarte sobre OficinaOS Pro.",
      noteMailto:
        "Al enviar se abre tu programa de correo con los datos rellenados — solo tienes que pulsar Enviar.",
      cloudText: "¿Ya tienes cuenta en OficinaOS Cloud?",
      cloudLink: "Entrar en cloud.oficinaos.app",
      sending: "Enviando…",
      success: "Solicitud recibida — te contactaremos pronto.",
      errorInvalid:
        "No pudimos registrar tu solicitud — revisa los datos e inténtalo de nuevo.",
      errorRate: "Demasiadas solicitudes — inténtalo de nuevo dentro de una hora.",
    },
  },
  diag: {
    badge: "Herramienta gratuita",
    title: "OficinaOS Diag — diagnóstico por cable",
    subtitle:
      "App Windows gratuita que lee cualquier Android o iPhone por USB: salud de batería, pantalla, sensores y almacenamiento.",
    customerTitle: "Soy cliente",
    customerItems: [
      "Descarga, conecta el móvil por cable y ve batería, pantalla y sensores — sin cuenta ni instalación.",
      "Prueba la pantalla y el táctil en el propio móvil (colores y rejilla).",
      "Exporta el informe en HTML/JSON — o envíalo a tu taller con el código que te dieron.",
    ],
    shopTitle: "Tengo un taller",
    shopItems: [
      "El cliente usa la herramienta en casa, gratis — y envía el diagnóstico con el código de tu tienda.",
      "El informe llega a la app como pre-check (Pedidos), listo para convertir en reparación — módulo Pro.",
      "Con informes IA, el mismo diagnóstico genera un texto en lenguaje sencillo para el cliente.",
    ],
    cta: "Descargar para Windows",
    repoLink: "Código fuente en GitHub",
    note: "Windows 10/11 · gratis · sin cuenta. Android vía depuración USB; iPhone vía «Confiar en este ordenador».",
  },
  privacy: {
    badge: "RGPD",
    title: "Los datos se quedan en la tienda.",
    subtitle:
      "La app corre en el PC de la tienda y no tiene telemetría: por defecto, ningún dato sale de la tienda. Cada módulo opcional que envía datos está declarado abajo.",
    cards: [
      {
        title: "Todo local por defecto",
        desc: "Clientes, reparaciones, stock y caja viven en el PC de la tienda. Sin módulos Pro activados, no recibimos ningún dato de la tienda.",
      },
      {
        title: "La Cloud es opcional",
        desc: "Los módulos Pro, las cuentas de OficinaOS Cloud y el envío de logs del Diag usan nuestros servidores. Solo se usan si la tienda (o el cliente, en el Diag) los activa.",
      },
      {
        title: "Extras declarados",
        desc: "WhatsApp, acceso remoto, IA y Cloud son opt-in — documentados ítem a ítem, listos para el registro de actividades de tratamiento (art. 30).",
      },
    ],
    tableTitle: "Cuando activas un módulo opcional, esto es lo que sale:",
    table: [
      {
        name: "OficinaOS Cloud (módulos Pro)",
        to: "Servidores de OficinaOS",
        what: "Cuenta y emparejamiento; datos de cada módulo activo — páginas del portal (con el nombre del cliente), mensajes de WhatsApp recibidos, reservas del escaparate, diagnósticos enviados, totales diarios (multitienda) y precios compartidos. El token Meta de la tienda queda cifrado en Cloud para enviar WhatsApp en su nombre",
      },
      {
        name: "Informes IA (Pro)",
        to: "Proveedor de IA de la Cloud",
        what: "Los datos del diagnóstico y las notas a partir de los que se genera el informe",
      },
      {
        name: "Envío de log del Diag",
        to: "Servidores de OficinaOS",
        what: "Solo al pulsar «Enviar log»: el final del archivo diag.log",
      },
      {
        name: "Notificaciones y bot WhatsApp",
        to: "Meta, vía el relay de OficinaOS Cloud",
        what: "Nº de teléfono del cliente + texto del mensaje — transitan por Cloud sin quedar guardados ni registrados (logs solo con id, estado y teléfono enmascarado)",
      },
      {
        name: "SMS y bot SMS (Pro)",
        to: "OficinaOS Cloud → el móvil Android de la tienda",
        what: "Credenciales del device + nº de teléfono del cliente + texto del mensaje — transitan por Cloud; los cuerpos de los mensajes no se registran",
      },
      {
        name: "Balcão IA (Pro)",
        to: "OficinaOS Cloud → el proveedor de IA que la tienda elija",
        what: "Los resultados de las herramientas de la bandeja de entrada transitan por Cloud sin quedar guardados ni registrados; los tokens personales MCP se guardan solo como hash; la clave de IA de la tienda queda cifrada",
      },
      {
        name: "Libro de horas (Pro)",
        to: "OficinaOS Cloud → canales Pro (WhatsApp/SMS)",
        what: "La localización en el momento del registro y las fotos de prueba de externos transitan por los canales de mensajería — Cloud no las guarda; el libro de horas queda en la app de la tienda",
      },
      {
        name: "Acceso remoto y enlaces al cliente",
        to: "Cloudflare",
        what: "El tráfico de las páginas en tránsito",
      },
      {
        name: "Analista IA",
        to: "El proveedor que configures",
        what: "Las preguntas que hagas a la IA",
      },
    ],
    cloudPrivacyLink: "Política de privacidad de OficinaOS Cloud",
    tableNote:
      "Ver el detalle completo — incluido lo que nunca sale — en el repositorio.",
  },
  terms: {
    badge: "Legal",
    title: "Términos y condiciones",
    subtitle:
      "Lo esencial, en lenguaje sencillo: OficinaOS es software libre, los datos son suyos y los servicios de pago son siempre opcionales.",
    sections: [
      {
        heading: "Software libre (MIT)",
        body: "OficinaOS se distribuye bajo la licencia MIT: puede usarlo, copiarlo, modificarlo y redistribuirlo, incluso comercialmente. El código fuente completo está en GitHub. Es un fork de Reparilo — el nombre «Reparilo» no está cubierto por la licencia y no puede reutilizarse en otras distribuciones.",
      },
      {
        heading: "Sin garantía",
        body: "El software se proporciona «tal cual», sin garantía de ningún tipo. La app hace copias de seguridad automáticas, pero comprobar que existen y guardar copias fuera del PC es responsabilidad de la tienda.",
      },
      {
        heading: "Sus datos",
        body: "La app se ejecuta en un PC dentro de la tienda y los datos de sus clientes se quedan ahí. La tienda es la responsable del tratamiento de esos datos (RGPD): qué se recoge, cuánto tiempo se guarda y quién puede verlo. Nosotros no tenemos acceso — ni lo pedimos.",
      },
      {
        heading: "Módulos Pro y OficinaOS Cloud",
        body: "El núcleo es gratis para siempre. Los módulos Pro son servicios opcionales de pago, activados por servidor en OficinaOS Cloud, y se rigen por los términos mostrados en la suscripción. Desactivar un módulo no borra los datos locales — son suyos.",
      },
      {
        heading: "Servicios de terceros, costes y uso razonable",
        body: "La mensajería usa redes y servicios que no controlamos: tarifas de SIM/SMS, proveedores SMS, Meta (WhatsApp Business Platform) y pasarelas no oficiales (Evolution API). Los costes por mensaje — SMS de la operadora, créditos del proveedor, plantillas de Meta — son siempre de la cuenta y la responsabilidad de la tienda. El transporte Evolution es no oficial: Meta puede limitar o banear el número y ese riesgo es íntegramente de la tienda (la app exige aceptar un término propio antes de activar el bot). Las funciones que dependen de SIM/proveedor tienen límites de uso razonable (p. ej. control de flood por número) — son para notificaciones y respuestas de servicio, no para campañas masivas; el abuso puede violar el fair-use de la operadora/proveedor y suspender el módulo.",
      },
      {
        heading: "Este sitio web",
        body: "Este sitio usa Cloudflare Web Analytics: estadísticas de visitas sin cookies, sin fingerprinting y sin datos personales — por eso no hay banner de cookies.",
      },
      {
        heading: "Ley aplicable",
        body: "Estos términos se rigen por la ley portuguesa. ¿Dudas o problemas? Escríbanos al email de contacto del pie de página antes de cualquier disputa — casi todo se resuelve hablando.",
      },
    ],
  },
  install: {
    title: "En marcha en minutos",
    subtitle:
      "Un PC con Windows en la tienda y un instalador. Tras la instalación, funciona offline en tu red local.",
    steps: [
      {
        title: "Descarga el instalador",
        desc: "Descarga OficinaOS-Setup.exe — un instalador normal de Windows, sin Docker.",
      },
      {
        title: "Doble clic en el instalador",
        desc: "Pide administrador una sola vez (servicios y firewall) y lo hace todo solo. Si SmartScreen avisa: «Más información» → «Ejecutar de todas formas».",
      },
      {
        title: "Abre en el navegador",
        desc: "Al final se abre http://localhost:4000 y queda un icono en la bandeja. En los demás dispositivos de la tienda: http://oficinaos.local:4000 — o escanea el código QR en la página de Ayuda.",
      },
    ],
    downloadButton: "Descargar para Windows",
    dockerLink: "Instalación avanzada (Docker)",
    portableLink: "Versión portátil (sin administrador)",
    downloadNote: "Windows 10/11 64-bit · gratis · corre como servicio, sin Docker · última versión en GitHub",
    advanced: {
      badge: "Avanzado",
      title: "Linux y macOS — Docker manual",
      desc: "No hay instalador automático para Linux ni macOS. Con Docker instalado, la app arranca con estos comandos:",
      commentGet: "obtener el código y la configuración",
      commentStart: "arrancar con docker (el seed solo la 1.ª vez)",
      commentOpen: "después, abrir en el navegador",
      note: "Edita el .env antes de arrancar (contraseña inicial del admin y APP_URL). Detalles en la guía de instalación.",
    },
    guideLink: "Guía de instalación completa",
    releasesLink: "Todas las versiones (Releases)",
  },
  docs: {
    title: "Guía completa",
    subtitle:
      "Para técnicos, tiendas de reparación y revendedores: instalación, uso diario, copias de seguridad y resolución de problemas.",
    toc: "En esta guía",
    backToGuide: "Guía completa",
    ui: {
      navLabel: "Documentación",
      menu: "Menú de la documentación",
      breadcrumb: "Ruta de navegación",
      groups: ["Empezar", "Día a día", "Impresión", "Módulos Pro", "Ayuda"],
      modules: "Guías de los módulos",
      onThisPage: "En esta página",
      search: "Buscar en la documentación",
      searchShort: "Buscar",
      searchPlaceholder: "Buscar en la guía… (p. ej.: copias, impresora, IVA)",
      searchHint: "Escribe para buscar en los títulos y secciones de todas las guías.",
      searchEmpty: "Sin resultados para «{q}». Prueba otra palabra o menos palabras.",
      searchOne: "1 resultado",
      searchMany: "{n} resultados",
      searchError: "No se pudo cargar la búsqueda. Usa el menú de la documentación.",
      searchKeys: "↑ ↓ para elegir · Enter para abrir · Esc para cerrar",
      close: "Cerrar",
      copy: "Copiar",
      copied: "Copiado",
      copyLabel: "Copiar comandos",
    },
    sections: [
      {
        heading: "Lo que incluye la app (gratis, MIT)",
        paragraphs: [
          "Todo lo que un taller usa en el día a día, sin suscripción ni límites:",
        ],
        table: {
          head: ["Menú", "Qué incluye"],
          rows: [
            ["Panel", "El día de un vistazo — reparaciones abiertas, prioridades y alertas (vista distinta para dueño, técnico y mostrador)"],
            ["Reparaciones", "Fichas con código único (REP-…), estados (recepción → listo → entregado), línea de tiempo, notas internas y al cliente, fotos y fecha prevista"],
            ["Pedidos", "Cola de entrada — pedidos y diagnósticos enviados por clientes, listos para convertir en reparación"],
            ["Devoluciones", "Gestión de devoluciones ligadas a ventas y reparaciones"],
            ["Clientes", "Fichas con historial de reparaciones, búsqueda por nombre/teléfono/IMEI, consentimientos"],
            ["Inventario de piezas", "Stock, alertas de mínimos, proveedores, piezas asociadas a reparaciones"],
            ["TPV de mostrador", "Venta de piezas y accesorios, sesiones de caja, tickets y registro de pagos"],
            ["Servicios de reparación", "Catálogo de reparaciones con precios — la «tarifa» de la tienda"],
            ["Presupuestos", "Versiones enviadas al cliente, respuesta aceptar/rechazar con registro fechado, historial completo"],
            ["Notificaciones", "Alertas en la app, plantillas de mensaje editables y cola de envío — envío WhatsApp/SMS con módulo Pro"],
            ["Informes", "Ventas, reparaciones y márgenes por periodo — con página de impresión A4"],
            ["Impresión", "Recibos y etiquetas configurables — rollo 58/80 mm, A4, secciones opcionales e impresión directa en térmicas de red"],
            ["Analista de IA", "Preguntas sobre los datos de la tienda en lenguaje natural"],
            ["Seguimiento del cliente", "Página pública en la red de la tienda para seguir la reparación — gratis en LAN"],
            ["Usuarios", "Varios empleados con perfiles y permisos por función"],
            ["Idiomas", "Portugués, inglés, francés y español"],
          ],
        },
        images: [
          {
            src: "/screenshots/dashboard.webp",
            alt: "Panel de reparaciones de OficinaOS",
            caption: "El panel — las reparaciones del día de un vistazo",
          },
          {
            src: "/screenshots/job-detail.webp",
            alt: "Ficha de reparación con estados, presupuesto y línea de tiempo",
            caption: "La ficha — estados, presupuesto y cronología completa",
          },
          {
            src: "/screenshots/tracking.webp",
            alt: "Página de seguimiento que el cliente ve en el móvil",
            caption: "La página de seguimiento que el cliente abre en el móvil",
          },
        ],
        links: [],
      },
      {
        heading: "Tres formas de instalar",
        paragraphs: [
          "OficinaOS es siempre el mismo programa — la diferencia está en cómo se ejecuta en el PC de la tienda. Hay tres caminos:",
          "OficinaOS-Setup.exe (recomendado) — un instalador Windows normal, sin Docker: corre como servicio, arranca con el PC, crea la regla de firewall, hace copias de seguridad diarias automáticas y deja un icono en la bandeja. El camino correcto para el PC de la tienda.",
          "Modo portátil — un único paquete con todo incluido (la app, la base de datos PostgreSQL y el runtime), sin instalación y sin servicios de Windows. Existe para los casos en que el instalador no sirve: PCs donde no tienes la contraseña de administrador, quien prefiere no instalar nada en el sistema, y como plan B si el instalador falla en una máquina concreta (antivirus, políticas de empresa).",
          "Docker — para un NAS, un servidor dedicado, Linux o macOS, o para quien ya usa Docker.",
        ],
        table: {
          head: ["", "Setup.exe (recomendado)", "Portátil", "Docker"],
          rows: [
            ["Cuándo usarlo", "PC de la tienda — casi siempre", "Sin admin, sin instalar nada, o el instalador falla", "NAS, servidor, Linux/macOS"],
            ["Requiere administrador", "Sí, durante la instalación", "No", "Sí, al instalar Docker"],
            ["Descarga", "~339 MB", "~540 MB", "~1 GB (Docker + app)"],
            ["Arranque con el PC", "Automático (servicio Windows)", "Opcional — tarea programada, se pregunta la 1ª vez", "Automático"],
            ["Si la app falla", "Se reinicia sola", "Se reinicia sola (wrapper)", "Se reinicia sola"],
            ["Copias de seguridad", "Diaria automática a las 03:30", "En cada arranque + BACKUP.bat", "Diaria automática (cada 24h)"],
            ["Copias fuera del PC", "Copiar la carpeta de backups", "Copiar la carpeta de backups", "Soportado (rclone → S3/B2/GCS)"],
            ["Actualizaciones", "Botón «Actualizar» en la app (~100 MB) o Setup encima", "Botón «Actualizar» en la app o ATUALIZAR.bat", "ATUALIZAR.bat — solo descarga lo que cambió"],
            ["Acceso remoto (HTTPS)", "Cloudflare Tunnel instalado aparte", "Cloudflare Tunnel instalado aparte", "Cloudflare Tunnel incluido"],
          ],
        },
        links: [
          { label: "Guía de instalación", href: INSTALL_URL },
          { label: "Documentación del modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Instalación — OficinaOS-Setup.exe (una vez, ~10 minutos)",
        paragraphs: [
          "Descarga OficinaOS-Setup.exe en la página de releases y haz doble clic. Si Windows Defender SmartScreen avisa: «Más información» → «Ejecutar de todas formas».",
          "Pide administrador una sola vez (servicios, firewall y la tarea de copias) y lo hace todo solo. Al final el navegador se abre en http://localhost:4000. En el primer acceso la app muestra la pantalla de configuración inicial — creas el usuario administrador y la contraseña.",
          "Queda un icono en la bandeja junto al reloj: abrir la app, ver el estado, parar/arrancar, hacer una copia. En otros aparatos de la tienda: http://oficinaos.local:4000 — o el código QR en la página Ayuda.",
          "En Linux o macOS no hay instalador — se usa Docker directamente:",
        ],
        images: [
          {
            src: "/screenshots/smartscreen-es.webp",
            alt: "Aviso SmartScreen de Windows — «Más información» y después «Ejecutar de todos modos»",
            caption: "El instalador aún no está firmado — Windows puede mostrar este aviso. «Más información» → «Ejecutar de todos modos».",
          },
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guía de instalación completa", href: INSTALL_URL },
          { label: "Descargar OficinaOS-Setup.exe", href: SETUP_EXE_URL },
        ],
      },
      {
        heading: "Modo portátil — sin admin, sin instalar nada",
        paragraphs: [
          "Para cuando el instalador no es opción: no tienes la contraseña de administrador del PC, no quieres que nada quede instalado en el sistema, o el instalador/servicios fueron bloqueados en esa máquina (antivirus, políticas de empresa).",
          "Descarga oficinaos-portable.zip, extráelo en una carpeta y ejecuta INICIAR.bat. La app es exactamente la misma — mismo código, misma base de datos PostgreSQL, mismas funciones — y también tiene el botón «Actualizar» dentro de la app.",
          "Dos diferencias prácticas frente a Setup.exe: el arranque automático es una tarea programada opcional (INICIAR.bat pregunta la 1ª vez) en vez de un servicio; y como nadie abre el firewall por ti, Windows pregunta una vez si permite la conexión — elige «Permitir» para que los tablets de la tienda conecten.",
          "Si llegaste aquí por el error «virtualization support not detected» del camino Docker, el portátil lo resuelve — pero en ese caso el Setup.exe es aún más simple, porque tampoco necesita Docker.",
        ],
        links: [
          { label: "Descargar paquete portátil", href: PORTABLE_ZIP_URL },
          { label: "Cómo funciona el modo portátil por dentro", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Día a día — encender, apagar, archivos",
        paragraphs: [
          "Una vez instalado, el día a día es doble clic en un archivo. Los nombres son iguales en los dos modos — solo cambia la carpeta donde están:",
        ],
        table: {
          head: ["Archivo", "Para qué"],
          rows: [
            ["INICIAR.bat", "Encender OficinaOS — abre el navegador al final"],
            ["PARAR.bat", "Apagar — los datos quedan guardados"],
            ["ATUALIZAR.bat", "Actualizar a la versión más reciente"],
            ["BACKUP.bat", "(solo portátil) Copia de seguridad manual"],
            ["RESTAURAR.bat", "(solo portátil) Restaurar la base de datos desde una copia"],
          ],
        },
        list: [
          "Instalación por Setup.exe: el servicio corre solo — parar/arrancar y copia manual desde el icono de la bandeja.",
          "Modo Docker: en la carpeta donde extrajiste el instalador.",
          "Modo portátil: dentro de la carpeta oficinaos-portable — los datos viven en data\\, las copias en app\\uploads\\backups.",
          "Otros dispositivos de la tienda (tablet, móvil, otro PC) no instalan nada — abren http://<IP-del-PC>:4000 en el navegador.",
        ],
        links: [],
      },
      {
        heading: "Copias de seguridad y restauración",
        paragraphs: [
          "Las copias son archivos comprimidos (.sql.gz) con toda la base de datos. La app muestra el estado de la última copia en Ajustes → Tienda → Copias de seguridad — funciona igual en todos los modos.",
          "Con la instalación por Setup.exe una tarea programada hace copia diaria a las 03:30 en C:\\ProgramData\\OficinaOS\\backups. En modo Docker un servicio dedicado hace una copia cada 24 horas, guarda 14 días, y opcionalmente copia a almacenamiento externo (S3, Backblaze, etc.) y prueba la restauración automáticamente.",
          "En modo portátil la copia se hace en cada arranque y con BACKUP.bat. Restaurar se hace con RESTAURAR.bat (elige un archivo de backups). Como no hay copia fuera del PC automática, copia la carpeta app\\uploads\\backups a un disco externo o USB — las copias en el mismo disco no protegen contra avería, robo o ransomware.",
        ],
        links: [
          { label: "Copias y restauración (Docker)", href: BACKUP_DOCS_URL },
          { label: "Copias en modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Actualizaciones",
        paragraphs: [
          "La app avisa arriba cuando hay una versión nueva. En las instalaciones por Setup.exe y en modo portátil, el dueño de la tienda tiene un botón «Actualizar» en el aviso — descarga solo la parte de la app (~100 MB) con verificación SHA-256, hace copia de la base de datos antes y repone la versión anterior solo si la nueva no arranca. La app queda offline ~1-2 minutos durante el cambio.",
          "A mano también funciona: el Setup.exe de la versión nueva encima, o ATUALIZAR.bat en portátil y en Docker. En Docker puedes activar actualizaciones 100% automáticas (Watchtower) — las migraciones de la base de datos corren siempre solas.",
        ],
        links: [{ label: "Todas las releases", href: RELEASES_URL }],
      },
      {
        heading: "En la tienda — móviles, tablets y PCs",
        paragraphs: [
          "Cualquier aparato conectado al Wi-Fi de la tienda abre la app en el navegador — sin instalar nada. Solo hay que escribir la dirección que da la instalación e iniciar sesión:",
          "Funciona sin internet para el uso diario. Guarda la dirección en favoritos — siempre es la misma.",
        ],
        code: "http://192.168.1.33:4000   # la dirección del PC servidor",
        links: [],
      },
      {
        heading: "Icono en la pantalla del móvil",
        paragraphs: [
          "Para abrir con un toque, como una app normal — tarda 10 segundos:",
        ],
        list: [
          "iPhone/iPad: Safari → botón Compartir → «Añadir a pantalla de inicio»",
          "Android: Chrome → menú ⋮ → «Añadir a pantalla de inicio»",
          "Con acceso remoto activo, Android puede llegar a ofrecer «Instalar aplicación» — instalación real",
        ],
        links: [{ label: "Guía para móviles", href: DOCS_MOBILE_URL }],
      },
      {
        heading: "Fuera de la tienda — acceso remoto",
        paragraphs: [
          "Con el PC de la tienda encendido, un Cloudflare Tunnel gratuito da a la tienda una dirección https:// propia — sin tocar el router, funciona con cualquier operadora, incluso las que bloquean puertos (CGNAT).",
          "Sirve para que el equipo consulte la app fuera de la tienda y para que los enlaces de los clientes — seguimiento, presupuestos, QR de garantía — abran en cualquier parte.",
        ],
        list: [
          "Crear cuenta gratis en Cloudflare + un dominio (~10 €/año)",
          "En el panel Zero Trust: crear el túnel y copiar el token",
          "Dos líneas en el archivo .env y reiniciar la app",
          "En la app: Ajustes → Tienda → URL base de seguimiento → la dirección pública",
        ],
        links: [
          { label: "Guía paso a paso", href: DOCS_REMOTE_URL },
        ],
      },
      {
        heading: "Privado por defecto",
        paragraphs: [
          "El túnel es opcional: la app funciona al 100% en la red local incluso sin internet. Los datos de los clientes se quedan en la tienda — Cloudflare solo transporta el tráfico cifrado mientras el túnel está activo.",
          "Quien quiera una barrera extra puede activar Cloudflare Access (gratis): email + código antes del login, manteniendo abiertas las páginas públicas de los clientes.",
        ],
        links: [],
      },
      {
        heading: "Impresión — recibos y etiquetas",
        paragraphs: [
          "OficinaOS imprime los tres documentos del día a día directamente desde la ficha o la pantalla de venta: el recibo de reparación para el cliente, el ticket de venta del TPV y la etiqueta que se pega en el equipo.",
          "Todo se configura en Ajustes → Tienda → Impresión — las opciones se aplican a todos los documentos a partir de ese momento:",
        ],
        table: {
          head: ["Opción", "Opciones"],
          rows: [
            ["Papel del recibo", "Rollo térmico 58 mm · Rollo térmico 80 mm · Hoja A4 (documento completo, tipo factura)"],
            ["Secciones del recibo", "Activar/desactivar cada bloque: IMEI, problema reportado, firma del cliente, QR de seguimiento, garantía"],
            ["Etiqueta del equipo", "40×20 mm · 57×32 mm · 62×29 mm"],
            ["Método de impresión", "Cuadro de diálogo Imprimir — cualquier impresora instalada — o térmica de red ESC/POS — directo, sin diálogo"],
          ],
        },
      },
      {
        heading: "Dos formas de imprimir",
        paragraphs: [
          "Cuadro de diálogo Imprimir (predeterminado): el documento se abre en una pestaña nueva y usa el diálogo de impresión del sistema. Funciona con cualquier impresora instalada — USB, red, Bluetooth — e incluso con «Guardar como PDF». Las etiquetas usan siempre esta vía: las etiqueteras hablan otros lenguajes (ZPL/TSPL) y el navegador se ocupa del driver.",
          "Impresora térmica de red (ESC/POS): la app envía el recibo directamente a la impresora por la red de la tienda — un clic y sale el ticket, sin diálogo. Para térmicas conectadas por cable o Wi-Fi (Epson TM, Star, Xprinter y compatibles ESC/POS). El texto usa la página de códigos CP850 — tildes correctas — y el QR de seguimiento se imprime con comandos nativos de la impresora, sin drivers.",
        ],
        list: [
          "Activar (una vez): Ajustes → Tienda → Impresión → Método «Impresora térmica de red» → indicar IP y puerto (casi siempre 9100) → «Enviar ticket de prueba»",
          "Encontrar la IP: en la mayoría de las térmicas, encender con el botón FEED pulsado imprime un autotest con la IP; también aparece en la lista de dispositivos del router",
          "Fijar la IP en el router (reserva DHCP) — si no, la impresora puede cambiar de dirección y dejar de imprimir",
          "Con el papel A4 configurado o una impresora solo USB, el camino es el cuadro de diálogo — ESC/POS es solo para rollos térmicos en red",
        ],
      },
      {
        heading: "Impresión — problemas comunes",
        paragraphs: ["Las situaciones más frecuentes:"],
        table: {
          head: ["Síntoma", "Qué hacer"],
          rows: [
            ["«No se pudo conectar con la impresora»", "Comprobar que está encendida y en la misma red de la tienda; revisar IP y puerto; repetir el «ticket de prueba»"],
            ["«No hay ninguna impresora de red configurada»", "Indicar IP + puerto en Ajustes → Tienda → Impresión — o cambiar el método a «Cuadro de diálogo Imprimir»"],
            ["La impresora cambió de IP", "Crear una reserva DHCP en el router y actualizar la IP en los ajustes"],
            ["Recibo cortado o márgenes incorrectos", "En el cuadro de diálogo: elegir el papel correcto (58 mm, 80 mm o A4), márgenes «Ninguno» y escala 100%"],
            ["La pestaña del recibo no se abre", "Permitir ventanas emergentes para la dirección de la app e imprimir de nuevo"],
            ["Impresora solo USB", "Usar el método «Cuadro de diálogo Imprimir» — ESC/POS necesita una impresora en la red"],
          ],
        },
      },
      {
        heading: "Módulos Pro — cómo funcionan",
        paragraphs: [
          "Los módulos Pro son funciones que necesitan «llegar a internet». La app sigue siendo 100% local y gratuita; cuando la tienda quiere alcance remoto, empareja la app con OficinaOS Cloud — nuestro servicio que hace de puente entre la app de la tienda y el exterior, sin exponer el PC de la tienda.",
          "La tienda crea una cuenta en Cloud y empareja la app con un código (una vez). Cada módulo se activa del lado del servidor — sin archivos de licencia. La app se sincroniza con Cloud cada ~2 minutos para enviar y recibir — las colas de mensajes (WhatsApp/SMS) tienen un ciclo rápido propio de ~12 segundos, para que las respuestas del bot lleguen en segundos.",
          "Sin emparejamiento, todo sigue funcionando en la red local — los módulos Pro simplemente no aparecen.",
          "Todos los canales de mensajería — SMS y WhatsApp, en cualquier transporte (red local o Cloud) — son módulos Pro: la app gratuita ni envía ni recibe mensajes. Las tarjetas de los ajustes siguen visibles, pero al pulsar muestran «Esta opción solo existe en OficinaOS Pro.»",
        ],
        table: {
          head: ["Módulo", "Lo que gana el cliente de la tienda"],
          rows: [
            ["Portal del cliente", "Enlace público con el estado de la reparación y botones para aceptar/rechazar el presupuesto — sin llamar a la tienda"],
            ["Bot de WhatsApp", "Escribe al WhatsApp de la tienda y recibe el estado de la reparación automáticamente; aprueba presupuestos con SÍ/NO"],
            ["Canal SMS", "El mismo asistente por SMS — un móvil Android conectado a Cloud (funciona con el PC apagado y puede servir a varias tiendas) o en la red local"],
            ["Balcão IA", "Bandeja de entrada unificada de WhatsApp y SMS, con IA ayudando al equipo a leer, resumir y preparar respuestas"],
            ["Diagnóstico a distancia", "Hace el diagnóstico del móvil en casa (oficinaos-diag, gratis) y lo envía a la tienda con un código"],
            ["Informes IA", "Informe del diagnóstico escrito en lenguaje sencillo, listo para entregar"],
            ["Facturación certificada", "Factura o factura-recibo legal emitida directamente desde la reparación o la venta — vía InvoiceXpress, con la cuenta de la propia tienda — solo Portugal"],
            ["Escaparate online", "Página pública con artículos del catálogo de la tienda; el cliente reserva y la reserva entra en la cola de Pedidos"],
            ["Busco pieza", "Tablón entre tiendas OficinaOS para pedir piezas y responder «la tengo» — el trato se cierra entre tiendas"],
            ["Precios de mercado", "La mediana anónima de los precios de reparaciones y piezas de otras tiendas, para compararla con los tuyos"],
            ["Multitienda", "Ingresos y reparaciones de todas las tiendas del mismo dueño en un solo panel de OficinaOS Cloud"],
            ["Remarketing por WhatsApp", "Mensaje automático a clientes con consentimiento cuya última reparación fue hace tiempo"],
            ["Libro de horas", "Libro de horas del equipo por WhatsApp y SMS — entrada, pausas y salida con prueba de localización en WhatsApp; panel de horas y exportación para la inspección de trabajo"],
          ],
        },
        links: [],
      },
      {
        heading: "Precios",
        paragraphs: [
          "La app completa es gratuita y open source (MIT) — sin límites, sin cuentas, sin periodo de prueba. Para siempre.",
          "El Pro es un plan, OficinaOS Pro, con una base que ya incluye casi todos los módulos y dos cuotas mensuales (con o sin IA incluida), con 14 días gratis. El Libro de horas, Balcão IA y el WhatsApp oficial son extras. Precios, extras y servicios están en la página de OficinaOS Pro. Sin permanencia ni costes ocultos.",
          "* Nota WhatsApp: la conexión rápida por QR no tiene coste por mensaje. En el WhatsApp oficial de Meta (extra), Meta cobra los mensajes directamente a la tienda, con 1.000 respuestas gratis al mes por número — coste de Meta, no nuestro.",
        ],
        table: {
          head: ["Qué", "Estado", "Precio"],
          rows: [
            ["App completa (core)", "Gratis para siempre", "0 €"],
            ["OficinaOS Diag (herramienta)", "Gratis para siempre", "0 €"],
            ["Portal del cliente", "Disponible", "Incluido en el Pro"],
            ["Bot de WhatsApp", "Disponible", "Incluido en el Pro*"],
            ["Canal SMS (pasarela Android)", "Disponible", "Incluido en el Pro. La tarifa del SIM es de la tienda"],
            ["Balcão IA", "Disponible", "Extra del Pro"],
            ["Recepción de diagnósticos", "Disponible", "Incluido en el Pro"],
            ["Informes IA", "Disponible", "Incluido en el Pro"],
            ["Facturación (InvoiceXpress)", "Disponible", "Incluido en el Pro. La cuenta de InvoiceXpress es de la tienda y tiene el coste propio del servicio"],
            ["Escaparate online (+ personalización)", "Disponible", "Incluido en el Pro"],
            ["Busco pieza", "Disponible", "Incluido en el Pro"],
            ["Precios de mercado", "Disponible", "Incluido en el Pro"],
            ["Multitienda", "Disponible", "Incluido en el Pro (hasta 3 tiendas; tiendas adicionales con coste mensual)"],
            ["Remarketing por WhatsApp", "Disponible", "Incluido en el Pro*"],
            ["Libro de horas", "Disponible", "Extra del Pro"],
          ],
        },
        links: [],
      },
      {
        heading: "Portal del cliente (Pro)",
        paragraphs: [
          "Con el módulo activo, cada reparación gana un botón «Public link» en su página de detalle. Al pulsarlo, la app publica en Cloud una copia redactada del trabajo — estado, dispositivo, presupuesto, fecha prevista y línea de tiempo — y copia el enlace.",
          "El enlace es un secreto por trabajo (un código aleatorio de 32 caracteres): quien lo tiene ve la página. Se envía al cliente por SMS, WhatsApp o impreso en el registro. La página se actualiza sola cuando cambia el estado en la app.",
          "Si hay un presupuesto pendiente, el cliente lo acepta o rechaza directamente en la página — la respuesta entra en la app por el flujo normal de presupuestos, con notificación al personal.",
        ],
        links: [
          { label: "Guía detallada del portal", href: "/es/docs/portal" },
        ],
      },
      {
        heading: "Bot de WhatsApp (Pro)",
        paragraphs: [
          "El cliente escribe al número de WhatsApp de la tienda y el bot responde con datos reales de la ficha — sin que nadie coja el teléfono. Funciona con el propio número de la tienda (el WhatsApp Business del móvil sigue funcionando en paralelo).",
          "Notas honestas: la respuesta llega en ~10–15 segundos (poller rápido de mensajes); el alta usa la WhatsApp Business Platform oficial de Meta y durante la beta te ayudamos con la configuración. También existe el transporte Evolution (no oficial — envío y bot son Pro) — ver la guía.",
        ],
        table: {
          head: ["El cliente escribe", "El bot responde"],
          rows: [
            ["«¿está listo?» o cualquier texto", "Estado de la reparación + fecha prevista"],
            ["«presupuesto» / «precio»", "Importe del presupuesto + cómo responder"],
            ["SÍ / acepto", "Aprueba el presupuesto pendiente (mismo flujo del mostrador)"],
            ["NO / rechazo", "Rechaza el presupuesto"],
            ["Código de la reparación (REP-…)", "Estado de ese trabajo"],
            ["«ayuda», audio o imagen", "Deriva al personal con aviso en la app"],
          ],
        },
        links: [
          { label: "Guía detallada del bot", href: "/es/docs/whatsapp" },
        ],
      },
      {
        heading: "Canal SMS (Pro)",
        id: "canal-sms-gratis-en-el-core",
        paragraphs: [
          "El mismo asistente automático, pero por SMS — para tiendas que no quieren (o aún no tienen) la cuenta empresarial de Meta. Un móvil Android con SIM hace de puente: conectado a OficinaOS Cloud envía y recibe incluso con el PC apagado (y puede servir a varias tiendas del mismo dueño); en la red local queda como transporte alternativo de envío.",
          "Sin cuentas Meta, sin aprobaciones de plantillas y sin coste por mensaje — solo la tarifa del SIM de la tienda (las tarifas con SMS incluidos hacen el coste marginal cero). Necesita el módulo SMS (Pro): sin él la app ni envía ni recibe mensajes.",
        ],
        links: [
          { label: "Guía detallada del canal SMS", href: "/es/docs/sms" },
        ],
      },
      {
        heading: "Diagnósticos remitidos por los clientes (Pro)",
        paragraphs: [
          "La herramienta oficinaos-diag es gratuita para cualquiera: el cliente la descarga, conecta el móvil al PC por cable y el programa lee batería, pantalla, sensores y almacenamiento.",
          "Con el módulo activo, la tienda recibe esos diagnósticos directamente en la app (cola de pedidos), listos para convertir en reparación — el cliente solo necesita el código de la tienda. El módulo de informes IA convierte los datos técnicos en un texto sencillo para entregar al cliente.",
        ],
        links: [
          { label: "Guía completa del Diag", href: "/es/docs/diag" },
          { label: "Sobre oficinaos-diag", href: DIAG_REPO_URL },
        ],
      },
      {
        heading: "Facturación certificada (Pro)",
        paragraphs: [
          "La app emite documentos fiscales legales directamente desde la venta o la reparación — factura-recibo cuando el cliente tiene NIF, factura simplificada cuando no lo tiene. La emisión se hace vía InvoiceXpress con la cuenta de la propia tienda: la clave API queda guardada cifrada en el PC de la tienda y la app habla directamente con InvoiceXpress — la OficinaOS Cloud solo controla el acceso al módulo, nunca ve los documentos. Solo para tiendas en Portugal.",
        ],
        links: [
          { label: "Guía detallada de facturación", href: "/es/docs/invoicing" },
        ],
      },
      {
        heading: "Escaparate, busco pieza, precios, multitienda y remarketing (Pro)",
        paragraphs: [
          "Cinco módulos Pro más, incluidos en el plan base y activados en la cuenta de OficinaOS Cloud. Cada uno tiene una guía breve:",
        ],
        table: {
          head: ["Módulo", "Para qué"],
          rows: [
            ["Escaparate online", "Página pública con los artículos del catálogo que elijas — el cliente reserva y el pedido aparece en Pedidos"],
            ["Busco pieza", "Pedir una pieza a otras tiendas OficinaOS o responder a sus pedidos"],
            ["Precios de mercado", "Ver la mediana anónima de los precios de otras tiendas junto a los tuyos"],
            ["Multitienda", "Panel con los ingresos y las reparaciones de todas tus tiendas"],
            ["Remarketing por WhatsApp", "Mensaje automático a clientes que llevan tiempo sin volver"],
          ],
        },
        links: [
          { label: "Guía del escaparate online", href: "/es/docs/storefront/" },
          { label: "Guía de busco pieza", href: "/es/docs/market/" },
          { label: "Guía de precios de mercado", href: "/es/docs/market-prices/" },
          { label: "Guía de multitienda", href: "/es/docs/multi-shop/" },
          { label: "Guía de remarketing", href: "/es/docs/remarketing/" },
        ],
      },
      {
        heading: "Libro de horas (Pro)",
        paragraphs: [
          "El módulo Libro de horas convierte el WhatsApp o el SMS de la tienda en un libro de horas: un QR fijo en la entrada y comandos de entrada, pausa, regreso y salida con prueba de localización en WhatsApp — con un panel de horas y exportación para la inspección de trabajo.",
          "Honestamente: ayuda a la tienda a cumplir la normativa laboral — la decisión y la responsabilidad legal son de la tienda.",
        ],
        links: [
          { label: "Guía del libro de horas", href: "/es/docs/ponto" },
        ],
      },
      {
        heading: "Problemas comunes",
        paragraphs: [
          "Las situaciones más frecuentes y cómo resolver cada una:",
        ],
        table: {
          head: ["Síntoma", "Qué hacer"],
          rows: [
            ["SmartScreen avisa al instalar", "«Más información» → «Ejecutar de todas formas» — es un archivo nuevo sin reputación, no un virus"],
            ["«Virtualization support not detected»", "El instalador ofrece las dos opciones: activar en BIOS o usar el modo portátil"],
            ["Windows pide reiniciar durante la instalación", "Reiniciar y ejecutar INSTALAR.bat otra vez — es normal al instalar Docker"],
            ["El firewall de Windows pregunta", "Elegir «Permitir» en red privada"],
            ["Página en blanco / no abre", "Ctrl+F5; comprobar que la dirección es http:// (no https://)"],
            ["«Invalid username or password»", "El acceso es por usuario (admin), no por email"],
            ["El PC cambió de IP y los demás dispositivos no conectan", "Actualizar APP_URL en .env (Docker) o borrar .env y ejecutar INSTALAR.bat de nuevo"],
            ["Puerto 4000 ocupado (portátil)", "Cambiar PORT en app\\.env"],
            ["Postgres no arranca (portátil)", "Ver data\\postgres.log; puerto 5433 ocupado → cambiarlo en data\\postgresql.conf y en .env"],
            ["Desinstalar todo", "PARAR.bat + borrar la carpeta (portátil); docker compose down -v + borrar la carpeta (Docker). Ojo: borra la base de datos — hacer copia antes"],
          ],
        },
        links: [{ label: "Resolución de problemas completa", href: INSTALL_URL }],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: ["Las dudas que más escuchamos:"],
        table: {
          head: ["Pregunta", "Respuesta"],
          rows: [
            ["¿Necesito internet?", "No para el uso diario — la app corre toda en la red de la tienda. Solo para actualizaciones y módulos Pro."],
            ["¿Los datos de los clientes van a algún servidor?", "No por defecto — la app no tiene telemetría. Con módulos Pro, OficinaOS Cloud recibe solo los datos que necesita cada módulo (por ejemplo, páginas del portal, mensajes, reservas y diagnósticos enviados), nunca costes internos ni notas internas. El detalle está en la política de privacidad de la Cloud (cloud.oficinaos.app/privacy)."],
            ["¿Funciona en el móvil?", "Sí — en el Wi-Fi de la tienda cualquier aparato lo abre en el navegador; fuera de la tienda con el acceso remoto (Cloudflare Tunnel)."],
            ["¿El cliente tiene que instalar algo?", "No — el portal abre como un enlace en su navegador; el bot responde en su WhatsApp normal."],
            ["¿Cuánto cuesta?", "La app completa es gratuita (licencia MIT). OficinaOS Pro es un plan opcional, con 14 días gratis."],
            ["¿Varias tiendas / sucursales?", "Cada tienda tiene su propia instalación. Con el módulo Pro Multitienda, el dueño ve los ingresos y las reparaciones de todas las tiendas en un solo panel de OficinaOS Cloud."],
            ["¿Y si el PC se estropea?", "Copias de seguridad diarias automáticas; restaurar en otro PC es copiar la copia y volver a ejecutar el instalador."],
            ["¿Mac o Linux?", "Sí, con Docker manual — el instalador automático es solo Windows."],
            ["¿Puedo importar datos de otro sistema?", "Clientes y catálogo por CSV; contáctanos para migraciones asistidas."],
          ],
        },
        links: [],
      },
      {
        heading: "Documentación completa",
        paragraphs: [
          "Esta guía cubre lo esencial. El repositorio en GitHub tiene la documentación técnica completa — instalación detallada, acceso remoto, móviles, copias con réplica externa y el funcionamiento interno del paquete portátil:",
        ],
        links: [
          { label: "Guía de instalación (INSTALL.md)", href: INSTALL_URL },
          { label: "Modo portátil — internals", href: PORTABLE_DOCS_URL },
          { label: "Acceso remoto (Cloudflare Tunnel)", href: DOCS_REMOTE_URL },
          { label: "Móviles y tablets", href: DOCS_MOBILE_URL },
          { label: "Repositorio en GitHub", href: REPO_URL },
        ],
      },
    ],
  },
  moduleDocs: {
    portal: {
      title: "Portal del cliente",
      subtitle:
        "Un enlace público por reparación — el cliente ve el estado en tiempo real y responde a presupuestos sin llamar a la tienda.",
      sections: [
        {
          heading: "Lo que ve el cliente",
          paragraphs: [
            "Al publicar una reparación, la app crea una página pública en OficinaOS Cloud con un resumen redactado de la ficha. La página se actualiza sola cada vez que el estado cambia en la app — el cliente abre el enlace en el móvil y ve siempre la versión más reciente.",
            "Lo que muestra la página:",
          ],
          list: [
            "Estado actual de la reparación en lenguaje sencillo",
            "Equipo y fecha prevista de finalización",
            "Cronología de eventos (recibido, en reparación, listo…)",
            "Presupuesto pendiente con botones «Aceptar» y «Rechazar»",
          ],
          links: [],
        },
        {
          heading: "Lo que nunca sale de la tienda",
          paragraphs: [
            "El portal publica una copia redactada — solo lo que el cliente necesita ver. Nunca aparecen: costes internos y márgenes, notas internas del personal, datos de otros clientes, contactos del equipo ni el historial de otras reparaciones.",
            "El enlace es un secreto por reparación (un código aleatorio de 32 caracteres): quien lo tiene ve la página — por eso se envía solo al cliente de esa reparación. Quitar el enlace en la ficha borra la página pública.",
          ],
          links: [],
        },
        {
          heading: "Activar el módulo (una vez)",
          paragraphs: [
            "El portal necesita OficinaOS Cloud — el servicio que hace de puente entre la app de la tienda e internet, sin exponer el PC de la tienda.",
          ],
          list: [
            "Crear cuenta en OficinaOS Cloud (cloud.oficinaos.app) — o recibir el código de emparejamiento del equipo",
            "En la app: Ajustes → pestaña Cloud → pegar el código de emparejamiento → «Conectar»",
            "El módulo portal se activa en la cuenta Cloud (en beta, por nosotros); la app se sincroniza sola",
            "A partir de ahí, cada ficha de reparación pasa a tener el botón «Enlace público»",
          ],
          links: [],
        },
        {
          heading: "Día a día — publicar y compartir",
          paragraphs: [
            "En la ficha de la reparación, el botón «Enlace público» publica la copia y copia el enlace. Se envía al cliente por SMS, WhatsApp o impreso en el registro de entrada — y listo.",
            "Cuando el estado cambia en la app, la siguiente sincronización (hasta ~2 minutos) actualiza la página. El botón «Quitar enlace público» borra la página cuando ya no hace falta.",
            "Si hay presupuesto pendiente, el cliente responde en la propia página: «Aceptar» o «Rechazar» entra en la app por el flujo normal de presupuestos — con registro fechado y notificación al personal, igual que una respuesta en el mostrador.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Hasta ~2 minutos entre cambiar el estado y la página actualizarse (ciclo de sincronización)",
            "Necesita internet en la tienda — sin conexión, la página queda congelada en el último estado publicado",
            "El enlace es el único control de acceso: si el cliente lo reenvía, otras personas ven esa reparación (nada más)",
            "Sin el módulo, el seguimiento en red local sigue funcionando gratis — el portal solo añade el acceso desde fuera",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    whatsapp: {
      title: "Bot de WhatsApp",
      subtitle:
        "El cliente escribe al WhatsApp de la tienda y recibe el estado real de la reparación — incluido aprobar presupuestos con «SÍ».",
      sections: [
        {
          heading: "Lo que responde el bot",
          paragraphs: [
            "El bot identifica al cliente por el número de teléfono y la reparación por el contexto. Cada mensaje es independiente — el cliente no necesita «iniciar sesión» ni seguir menús:",
          ],
          table: {
            head: ["El cliente escribe", "El bot responde"],
            rows: [
              ["«¿está listo?» o cualquier texto", "Estado de la reparación + fecha prevista"],
              ["«presupuesto» / «precio» / «cuánto»", "Importe del presupuesto pendiente + instrucciones"],
              ["SÍ / acepto / ok", "Aprueba el presupuesto pendiente — mismo flujo del mostrador"],
              ["NO / rechazo", "Rechaza el presupuesto"],
              ["Código de la reparación (REP-…)", "Estado de esa reparación concreta"],
              ["«ayuda» / «humano», audio o imagen", "Deriva al personal — con notificación en la app"],
              ["Número sin ficha", "Mensaje amable con los contactos de la tienda"],
            ],
          },
          links: [],
        },
        {
          heading: "Sin el módulo",
          paragraphs: [
            "Sin el módulo whatsapp-bot activo, la app ni envía ni recibe nada por WhatsApp — en ningún transporte (relay Cloud, Meta directo o Evolution). Las tarjetas de los ajustes siguen visibles, pero al pulsar muestran «Esta opción solo existe en OficinaOS Pro.»",
          ],
          links: [],
        },
        {
          heading: "Cómo decide la respuesta",
          paragraphs: [
            "El bot busca la ficha del cliente por los últimos 9 dígitos del número — robusto a prefijos +34/+351, espacios y formatos. Con una reparación activa el contexto es obvio y responde directamente; con varias, lista los códigos para que el cliente elija.",
            "«Reparación activa» incluye todas las que aún no se han entregado, devuelto o cancelado — incluidas las listas para recoger, que son justo las que generan la pregunta «¿ya está?».",
            "Lo que el bot no resuelve pasa a personas: «ayuda», «humano», audios, imágenes y preguntas fuera de patrón crean una notificación en la app con el texto del cliente — el equipo responde manualmente.",
          ],
          links: [],
        },
        {
          heading: "Qué hace falta (Meta)",
          paragraphs: [
            "El módulo usa la WhatsApp Business Platform oficial de Meta — sin trucos ni riesgo de ban del número. Requisitos:",
          ],
          list: [
            "Una app Meta (developers.facebook.com) con el producto WhatsApp — la app OficinaOS ya existe y está pendiente de aprobación por Meta",
            "El número de la tienda en WhatsApp Business — la coexistencia permite mantener la app en el móvil y conectar la API a la vez",
            "Un token permanente de system user con permisos whatsapp_business_messaging + whatsapp_business_management",
            "El webhook apuntado a OficinaOS Cloud — ya configurado de nuestro lado",
          ],
          links: [],
        },
        {
          heading: "Configuración en la app (por tienda)",
          paragraphs: [
            "Tras el alta en Meta (durante la beta te ayudamos en este paso), la configuración en la app son 4 campos:",
          ],
          list: [
            "Menú → Notificaciones → Setup → sección WhatsApp",
            "Business ID + Phone Number ID — facilitados en el alta",
            "API Token — el token permanente del system user (la app lo sube una vez a la Cloud, donde queda cifrado — los envíos salen por el relay y el token no se vuelve a pedir)",
            "Enabled activado — la app registra el phone_number_id y las credenciales en Cloud sola y el bot queda activo",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Las respuestas del bot llegan en ~10–15 segundos — la app consulta la cola de mensajes de Cloud en un poller rápido, separado de la sincronización de ~2 minutos",
            "Responder dentro de la ventana de 24h es gratis; iniciar conversaciones («tu reparación está lista») fuera de ella sale por plantillas aprobadas en Meta — la app las crea y envía automáticamente y muestra el estado (aprobada/en revisión/rechazada) en ajustes; los envíos por plantilla tienen coste de Meta",
            "Cuando las reglas no bastan, el bot puede usar IA (Pro): solo ve la ficha pública del cliente (estado, previsión, presupuesto — nunca datos internos ni de otros clientes) y el contenido no se registra en Cloud. «PARAR»/«STOP» retira el consentimiento del cliente al momento",
            "Control de flood: máximo 20 mensajes/hora por número — protección contra spam",
            "Audios e imágenes no se interpretan — van a un humano",
            "En modo prueba solo responde a números verificados en Meta — en producción no hay ese límite",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Alternativa: WhatsApp vía Evolution (Pro)",
          paragraphs: [
            "Para tiendas que no quieren la cuenta empresarial de Meta, la app también habla con una pasarela «Evolution API» local — un transporte no oficial que emula WhatsApp Web. Enviar y recibir son Pro; el bot de respuesta exige además aceptar un término de responsabilidad propio en ajustes.",
            "Sinceramente: al ser no oficial, Meta puede suspender/banear el número — ese riesgo es de la tienda. Por eso el bot Evolution es deliberadamente conservador: ignora grupos/broadcasts/mensajes no-texto y números sin ficha, responde como máximo ~10 veces/hora por número con tope diario, espera 3–8 s con «escribiendo…» antes de responder, y se suspende solo si la sesión es bloqueada (el dueño lo reactiva re-aceptando el término).",
          ],
          links: [],
        },
        {
          heading: "Si el bot se queda callado",
          table: {
            head: ["Síntoma", "Qué comprobar"],
            rows: [
              ["El cliente no recibe respuesta", "¿Sigue válido el token Meta? (los temporales caducan en 24h — usar el de system user)"],
              ["El mensaje ni llega a la app", "¿Módulo whatsapp-bot activo en Cloud? ¿phone_number_id correcto en ajustes?"],
              ["El bot responde pero Meta bloquea", "En modo prueba, ¿el destinatario está verificado? En producción, es la ventana de 24h"],
              ["«SÍ» no hace nada", "¿Hay presupuesto enviado y pendiente en esa ficha? (el bot solo actúa sobre presupuestos por responder)"],
              ["Presupuesto bien, respuesta mal", "¿El teléfono de la ficha del cliente tiene los mismos últimos 9 dígitos?"],
            ],
          },
          paragraphs: [],
          links: [],
        },
      ],
    },
    diag: {
      title: "OficinaOS Diag",
      subtitle:
        "La herramienta Windows gratuita que lee cualquier Android o iPhone por cable — el scan local es siempre gratis; el envío a la tienda y los informes IA son módulos Pro.",
      sections: [
        {
          heading: "Instalación",
          paragraphs: [
            "El Diag se distribuye como ZIP portátil en GitHub, gratis. Todavía no está en la Microsoft Store: el envío espera la aprobación de Microsoft.",
            "Descarga el zip, extrae la carpeta entera (el exe necesita los archivos de al lado) y ejecuta OficinaDiag.exe — Windows puede mostrar el aviso SmartScreen en la primera ejecución: «Más información» → «Ejecutar de todas formas».",
          ],
          links: [
            { label: "ZIP portable (GitHub)", href: DIAG_ZIP_URL },
            { label: "Código fuente en GitHub", href: DIAG_REPO_URL },
          ],
        },
        {
          heading: "Idioma y temas",
          paragraphs: [
            "Diag habla portugués e inglés — el idioma se elige en Opciones (⚙) y se guarda junto al exe.",
            "Tres temas a elegir: Terminal (el estilo retro original), Windows 95 y Moderno. La elección se guarda y se aplica al instante.",
          ],
          links: [],
        },
        {
          heading: "Lo que lee el scan — gratis",
          paragraphs: [
            "Conecta el móvil por cable USB y el scan corre 100% en el PC — no se envía nada a ningún lado:",
          ],
          table: {
            head: ["Datos", "Android", "iPhone/iPad"],
            rows: [
              ["Modelo, número de serie, versión del OS", "✓", "✓"],
              ["Batería — nivel, temperatura, ciclos", "✓", "✓"],
              ["Batería — capacidad real vs diseño", "donde el fabricante la expone", "✓"],
              ["Almacenamiento y RAM", "✓", "✓"],
              ["Sensores", "✓", "✓"],
              ["Root / gestor de arranque desbloqueado", "✓", "—"],
              ["Estado de activación / operadora", "—", "✓"],
            ],
          },
          links: [],
        },
        {
          heading: "Test de pantalla y toque en el móvil",
          paragraphs: [
            "La app sirve una página de test en la red local: en Android se abre sola vía adb, en iPhone se lee un código QR. El cliente corre los tests de colores y la rejilla de toque en el propio móvil.",
            "Los resultados vuelven al PC — los píxeles muertos y las zonas de toque muertas quedan registrados en el informe. Es el test de pantalla objetivo que antes se hacía «a ojo».",
          ],
          links: [],
        },
        {
          heading: "Exportar e historial",
          paragraphs: [
            "Cada scan puede exportarse como informe HTML (estética retro, imprimible → PDF para entregar al cliente) y como JSON bruto con todos los datos.",
            "El historial queda en el PC (%APPDATA%\\OficinaDiag) — permite comparar la salud de la batería de un equipo a lo largo del tiempo, útil en garantías y usados.",
          ],
          links: [],
        },
        {
          heading: "Requisitos por plataforma",
          table: {
            head: ["", "Android", "iPhone/iPad"],
            rows: [
              ["En el móvil", "Activar «Depuración USB» en opciones de desarrollador", "Aceptar «Confiar en este ordenador»"],
              ["En el PC", "Nada — el adb viene incluido", "Driver USB de Apple (iTunes o app «Apple Devices»)"],
              ["Extra", "Cable de datos (no solo de carga)", "Cerrar la app Fotos de Windows antes del scan"],
            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Enviar a la tienda — módulo diag-intake",
          paragraphs: [
            "El cliente corre el scan en casa, mete el código de la tienda y el diagnóstico viaja a OficinaOS Cloud, de donde la app de la tienda lo recoge. En la tienda aparece como un pedido en la cola de Pedidos — pre-check listo para convertir en reparación.",
            "Casos de uso: pre-diagnóstico antes de que el cliente venga a la tienda, evaluación de usados para compra/venta, y grading con datos objetivos (ciclos de batería, pantalla, sensores).",
          ],
          links: [],
        },
        {
          heading: "Informe IA — módulo ai-reports",
          paragraphs: [
            "Con el módulo activo, los datos técnicos brutos del scan se transforman en un informe en lenguaje sencillo para el cliente — «la batería está al 78% de la capacidad original, se recomienda sustituirla».",
            "La generación corre en OficinaOS Cloud con la clave del servidor — nada corre en el PC del cliente y los datos no se usan para entrenar modelos.",
          ],
          links: [],
        },
        {
          heading: "Privacidad",
          paragraphs: [
            "El scan es 100% local por defecto — nada sale del PC sin que el usuario elija «Enviar a la tienda» o «Informe IA». El destino es siempre el servidor OficinaOS, nunca terceros.",
            "En caso de problemas, el botón «Enviar log» envía el final del archivo diag.log (solo líneas técnicas de la app) para análisis — también opt-in, nada automático.",
          ],
          links: [],
        },
        {
          heading: "Si no detecta el móvil",
          table: {
            head: ["Síntoma", "Qué comprobar"],
            rows: [
              ["No pasa nada al conectar el cable", "¿El cable es de datos? (los de solo carga no sirven) — probar otro puerto USB"],
              ["Android no aparece", "¿«Depuración USB» activa en opciones de desarrollador? ¿Prompt de autorización aceptado en el móvil?"],
              ["iPhone no aparece", "¿«Confiar en este ordenador» aceptado? ¿Driver Apple instalado (iTunes/Apple Devices)? ¿App Fotos cerrada?"],
              ["El scan falla a medias", "Mantener la pantalla del móvil desbloqueada y despierta durante el scan"],
              ["Dudas persistentes", "Archivo %APPDATA%\\OficinaDiag\\diag.log — o botón «Enviar log» en la app"],
            ],
          },
          paragraphs: [],
          links: [],
        },
      ],
    },
    sms: {
      title: "Canal SMS",
      subtitle:
        "Notificaciones y asistente automático por SMS (módulo Pro) — por un móvil Android con SIM conectado a OficinaOS Cloud, o en la red local de la tienda.",
      sections: [
        {
          heading: "Qué hace el módulo",
          paragraphs: [
            "Con el canal SMS activo, la app usa un móvil Android en la tienda como «pasarela»: las notificaciones a clientes (reparación lista, presupuesto enviado, recordatorios) salen por SMS por la red móvil normal — y las respuestas de los clientes entran en la app y reciben respuesta automática.",
            "Es el mismo asistente del WhatsApp, con los mismos comandos — el cliente escribe «estado» y recibe el punto de la reparación, escribe «presupuesto» y recibe el importe, responde SÍ o NO para aprobar o rechazar. La diferencia: no necesita cuenta Meta, ni plantillas aprobadas, ni internet en el móvil del cliente.",
            "Sin el módulo SMS activo, la app ni envía ni recibe nada por este canal — en ningún transporte. La tarjeta de los ajustes sigue visible, pero al pulsar muestra «Esta opción solo existe en OficinaOS Pro.»",
          ],
          table: {
            head: ["El cliente escribe", "El bot responde"],
            rows: [
              ["«¿está listo?» o cualquier texto", "Estado de la reparación + fecha prevista"],
              ["«presupuesto» / «precio»", "Importe del presupuesto pendiente + cómo responder"],
              ["SÍ", "Aprueba el presupuesto pendiente — mismo flujo del mostrador"],
              ["NO", "Rechaza el presupuesto"],
              ["Código de la reparación (REP-…)", "Estado de ese trabajo concreto"],
              ["Número sin ficha", "Mensaje amable con los contactos de la tienda"],
            ],
          },
          links: [],
        },
        {
          heading: "Elegir el transporte — dos caminos (ambos Pro)",
          id: "elegir-el-transporte-tres-caminhos",
          paragraphs: [
            "Los dos transportes necesitan el módulo SMS (Pro) — sin él la app ni envía ni recibe. La diferencia está en el camino que hacen los SMS:",
          ],
          table: {
            head: ["Transporte", "Coste", "Envío", "Respuestas del cliente", "Para quién"],
            rows: [
              ["Android conectado a Cloud", "Módulo SMS + la tarifa del SIM de la tienda", "✅ — incluso con el PC apagado", "✅ — respuestas e informes vía Cloud; un móvil puede servir varias tiendas", "La mayoría de tiendas — y dueños con varias tiendas"],
              ["Android en la red local (fallback)", "Módulo SMS + la tarifa del SIM de la tienda", "✅ — por el PC de la tienda", "Recepción vía Cloud cuando está configurada", "Tienda sin móvil conectado a Cloud, o como reserva"],
            ],
          },
          links: [],
        },
        {
          heading: "Transporte Android — qué se necesita",
          list: [
            "El módulo SMS (Pro) activo — sin él la app ni envía ni recibe mensajes",
            "Un móvil Android — puede ser un equipo antiguo; se queda siempre en la tienda",
            "Una tarjeta SIM activa — idealmente con SMS incluidos en la tarifa (el coste de los mensajes es del operador)",
            "La app gratuita «SMS Gateway for Android» (sms-gate.app), de la Play Store o del sitio oficial",
            "Para el camino Cloud: el móvil con internet; para el camino local: el móvil y el PC de OficinaOS en la misma red Wi-Fi/LAN",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Android conectado a Cloud (Pro)",
          paragraphs: [
            "Con el módulo SMS activo, el mismo móvil Android puede conectarse a OficinaOS Cloud en lugar del PC de la tienda: en la app «SMS Gateway for Android» usa el modo Cloud/Private Server con los datos que la app muestra en ajustes (URL del servidor, usuario y contraseña del device). A partir de ahí la Cloud entrega los SMS a enviar directamente al móvil — los envíos y las respuestas de los clientes funcionan incluso con el PC apagado, y la app lo recoge todo al volver (poller de ~12 segundos).",
            "Un device puede servir varias tiendas del mismo dueño: la Cloud mantiene una tabla de enrutado (SmsRoute) que decide de qué tienda es cada respuesta — primero por el código REP-… del mensaje, luego por la tienda que habló por última vez con ese número, y por último la tienda por defecto.",
            "«Tienda cerrada»: si la app lleva más de ~5 minutos offline y llega un SMS, la Cloud responde automáticamente «Recibimos su mensaje. La tienda responderá en cuanto abra.» (máx. 1 por número cada 12 h).",
          ],
          links: [
            { label: "SMS Gateway for Android (sitio oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Informes de entrega (solo transporte Cloud)",
          paragraphs: [
            "Cada SMS enviado vía Cloud recibe del móvil un evento de estado (enviado/entregado/fallido) que la Cloud reenvía a la app — la entrada en la cola de notificaciones (Notificaciones → Outbox) pasa de «Enviado» a «Entregado», o a «Fallido» con el motivo del operador. Es la forma de saber que el cliente recibió de verdad el mensaje.",
          ],
          links: [],
        },
        {
          heading: "Instalación — paso a paso",
          id: "instalacion-paso-a-paso-5-minutos",
          paragraphs: [
            "1. En el móvil Android, instala «SMS Gateway for Android» (sms-gate.app) desde la Play Store o el sitio oficial.",
            "2. Camino Cloud (recomendado — envío y recepción, incluso con el PC apagado): conecta un device en tu cuenta de OficinaOS Cloud y, en la app del móvil, usa el modo Cloud/Private Server con los datos que OficinaOS muestra en Notificaciones → Canales → bloque «SMS Pro» — incluida la URL del webhook a registrar en la app del móvil para las respuestas de los clientes.",
            "3. Camino red local (envío, como fallback): en la app del móvil activa el modo «Local Server» — la app muestra la dirección local (ej.: 192.168.1.50:8080), un nombre de usuario y una contraseña. El móvil y el PC deben estar en la misma Wi-Fi.",
            "4. En la app OficinaOS: Menú → Notificaciones → Canales → sección SMS — en modo local, rellena la «URL de la pasarela» (http:// + dirección), el usuario y la contraseña del móvil y guarda.",
            "5. Pulsa «Enviar SMS de prueba», pon tu propio número y confirma que llega el mensaje.",
          ],
          links: [
            { label: "SMS Gateway for Android (sitio oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Mantener la pasarela fiable",
          list: [
            "Deja el móvil siempre enchufado al cargador — es la pasarela; apagado, los SMS no salen",
            "En los ajustes de Android, excluye «SMS Gateway» de la optimización de batería (Batería → Optimización → «No optimizar») para que Android no lo suspenda",
            "En el router de la tienda, reserva la IP del móvil (reserva DHCP) — si la IP cambia, la configuración deja de apuntar al sitio correcto",
            "Si la tienda tiene una Wi-Fi de invitados separada, el móvil debe estar en la red principal — la misma del PC",
            "Prueba rápida de salud: la app llama a GET /health en la pasarela en cada envío; si falla, la notificación queda en cola y reintenta",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Privacidad — qué sale y qué se queda",
          paragraphs: [
            "En el transporte de la red local, el envío es directo — la app habla con la pasarela del teléfono sin intermediarios. Las respuestas de los clientes se reciben a través de OficinaOS Cloud (el teléfono reenvía los SMS que recibe) — sin esa conexión este transporte no tiene entrada. El SMS en sí viaja siempre por la red móvil del operador, como cualquier SMS.",
            "En el transporte Cloud, las credenciales del device y el texto de los mensajes pasan por OficinaOS Cloud (es ella quien envía y recibe) — las credenciales quedan cifradas (AES-256-GCM) y los cuerpos de los mensajes nunca se registran. La contraseña de la pasarela local queda cifrada en la app y nunca vuelve a aparecer en los campos — solo se sustituye.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Control de flood: máximo 20 mensajes por hora por número — protege contra spam accidental",
            "El coste por SMS es de la tarifa del SIM de la tienda — con SMS incluidos el coste marginal es cero, pero conviene confirmarlo con el operador",
            "Los SMS con acentos (ç, ñ, é…) consumen más del límite de 160 caracteres — las plantillas deben ser cortas",
            "El uso automatizado intensivo puede violar el fair-use de la tarifa — el módulo es para notificaciones y respuestas, no para campañas masivas",
            "SMS no es WhatsApp: sin imágenes, sin botones, texto simple — pero funciona en cualquier móvil, hasta en los más antiguos",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Resolución de problemas",
          table: {
            head: ["Síntoma", "Qué verificar"],
            rows: [
              ["El SMS de prueba no llega", "¿URL correcta (http:// + IP:puerto)? ¿Número de destino con prefijo (ej.: +34…)? ¿Saldo/SMS disponibles en el SIM?"],
              ["«Fallo de conexión con la pasarela»", "¿El móvil está encendido y en la misma Wi-Fi que el PC? ¿No ha cambiado su IP (ver en la app del móvil)?"],
              ["Error de autenticación", "Usuario y contraseña exactamente como en la app del móvil (los genera ella, no los eliges tú)"],
              ["El cliente responde y no pasa nada", "En el camino Cloud: ¿la URL del webhook está registrada en la app del móvil? ¿El device aparece conectado en el bloque «SMS Pro»? ¿El módulo SMS está activo?"],
              ["Funcionaba y dejó de funcionar", "¿La optimización de batería de Android suspendió la app? ¿Cambió la IP del móvil?"],

            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Seguridad",
          list: [
            "Nunca expongas el puerto de la pasarela (ej.: 8080) a internet — es solo para la red interna de la tienda",
            "Mantén el móvil y el PC en la red de confianza de la tienda — no en la Wi-Fi de clientes/invitados",
            "Si cambias el móvil o el SIM, repite la configuración — en el camino Cloud, registra también la URL del webhook en la app del nuevo móvil",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    invoicing: {
      title: "Facturación certificada",
      subtitle:
        "Solo para tiendas en Portugal: facturas legales emitidas desde la venta o la reparación — vía InvoiceXpress, con la cuenta y la clave de la propia tienda.",
      sections: [
        {
          heading: "Solo para Portugal",
          paragraphs: [
            "El módulo emite documentos a través de InvoiceXpress, un servicio de facturación certificado para Portugal, y los tipos de IVA disponibles en la app son los de Portugal continental (IVA23, IVA13, IVA6 e IVA0). La facturación española (Verifactu, TicketBAI) todavía no está soportada: las tiendas en España no pueden usar este módulo para emitir facturas legales.",
          ],
          links: [],
        },
        {
          heading: "Qué hace el módulo",
          paragraphs: [
            "Con la facturación activa, cada venta del POS y cada reparación entregada ganan un botón «Emitir documento». La app envía los datos a InvoiceXpress y el documento fiscal sale numerado y certificado — factura-recibo cuando el cliente tiene NIF, factura simplificada («Consumidor final») cuando no lo tiene.",
            "El permalink del documento queda registrado en la ficha — puedes abrir el PDF oficial de InvoiceXpress desde la app y entregarlo al cliente.",
          ],
          table: {
            head: ["Situación", "Documento emitido"],
            rows: [
              ["Cliente con NIF en la ficha", "Factura-recibo (FR) — documento completo"],
              ["Cliente sin NIF", "Factura simplificada (FS) — «Consumidor final»"],
              ["Venta en el POS", "Documento con las líneas de los artículos vendidos"],
              ["Reparación entregada", "Documento con las reparaciones y piezas de la ficha"],
            ],
          },
          links: [],
        },
        {
          heading: "Qué necesitas",
          list: [
            "Una tienda en Portugal con cuenta en InvoiceXpress (su servicio tiene coste propio — independiente de OficinaOS)",
            "La clave API de la cuenta — se crea en los ajustes de InvoiceXpress",
            "El tipo de IVA predeterminado de la tienda — IVA23, IVA13, IVA6 o IVA0 (tipos portugueses)",
            "El módulo invoicing activo en la cuenta OficinaOS Cloud (en beta lo activamos nosotros)",
          ],
          paragraphs: [],
          links: [
            { label: "InvoiceXpress (sitio oficial)", href: "https://invoicexpress.com" },
          ],
        },
        {
          heading: "Configuración — paso a paso (~5 minutos)",
          paragraphs: [
            "1. En InvoiceXpress, entra en la cuenta de la tienda y genera una clave API (en los ajustes de API de la cuenta).",
            "2. En OficinaOS: Ajustes → pestaña Cloud → sección «Facturación (InvoiceXpress)» (aparece con la app emparejada y el módulo activo).",
            "3. En «Cuenta InvoiceXpress» escribe el subdominio de la cuenta — lo que aparece antes de .app.invoicexpress.com.",
            "4. Pega la clave API y elige el tipo de IVA predeterminado (ej.: IVA23).",
            "5. Activa «Activar facturación» y guarda.",
            "6. Prueba con una venta o reparación de valor simbólico y confirma que el documento aparece en InvoiceXpress.",
          ],
          links: [],
        },
        {
          heading: "Precios con IVA incluido",
          paragraphs: [
            "Los precios de la tienda son finales (IVA ya incluido). La app calcula el importe neto de cada línea a partir de la tasa configurada y lo envía a InvoiceXpress — el total del documento coincide con lo que pagó el cliente.",
          ],
          links: [],
        },
        {
          heading: "Privacidad — qué sale y qué se queda",
          paragraphs: [
            "La clave API queda guardada cifrada (AES-256) en el PC de la tienda y nunca vuelve a mostrarse — solo se sustituye. La app habla directamente con InvoiceXpress: los documentos y los datos fiscales no pasan por la OficinaOS Cloud — la Cloud solo confirma que el módulo está activo.",
            "Emitir un documento es irreversible (es un documento legal numerado) — la app bloquea la doble emisión de la misma venta o reparación.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Requiere la cuenta InvoiceXpress de la tienda — el coste de ese servicio es de la tienda, separado de OficinaOS",
            "Solo Portugal: InvoiceXpress y los tipos de IVA disponibles son portugueses — en España y otros países el módulo no emite documentos fiscales válidos",
            "Los documentos emitidos no se borran desde la app — las anulaciones/notas de crédito se hacen en InvoiceXpress",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    storefront: {
      title: "Escaparate online",
      subtitle:
        "Una página pública con artículos de tu catálogo — el cliente ve el precio y reserva, y la reserva entra en la app como pedido.",
      sections: [
        {
          heading: "Qué hace el módulo",
          paragraphs: [
            "La app envía a OficinaOS Cloud los artículos que marques como «listados online», y la Cloud los muestra en una página pública de la tienda (cloud.oficinaos.app/loja/<dirección>). Cada artículo aparece con nombre, categoría y precio; los artículos sin stock dejan de aparecer.",
            "El cliente elige un artículo y lo reserva con su nombre, su teléfono y una nota opcional. La reserva llega a la app en la siguiente sincronización y entra en la cola de Pedidos («Reserva loja online: …»), con aviso al dueño y al mostrador. No hay pago online: la venta se hace en la tienda.",
          ],
          links: [],
        },
        {
          heading: "Activar y publicar",
          list: [
            "Emparejar la app con OficinaOS Cloud (Ajustes → pestaña Cloud) y tener activo el módulo storefront (en beta lo activamos nosotros)",
            "En Ajustes → pestaña Cloud aparece la sección de la tienda online: elige la dirección de la página, una breve descripción y el email de contacto público",
            "Activa «Publicado» y guarda — el enlace de la página aparece arriba de la sección",
            "La dirección postal y el teléfono que muestra la página vienen de los ajustes de la tienda",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Elegir los artículos",
          paragraphs: [
            "En el inventario de piezas, edita el artículo y activa la opción de listarlo en la tienda online. El precio mostrado es el precio unitario del catálogo. Cuando cambia el stock (ventas en el TPV, piezas usadas en reparaciones, movimientos de stock), la página se actualiza en la siguiente sincronización (hasta ~2 minutos).",
          ],
          links: [],
        },
        {
          heading: "Personalización — módulo storefront-plus",
          list: [
            "Color de acento de la página",
            "Logotipo de la tienda (PNG, JPEG o WebP, hasta 200 KB)",
            "Dos diseños: Vitrina (tarjetas) o Compacto (lista)",
          ],
          paragraphs: [
            "Sin este módulo, la página usa el aspecto predeterminado.",
          ],
          links: [],
        },
        {
          heading: "Privacidad — qué sale y qué se queda",
          paragraphs: [
            "A la Cloud van los artículos listados (nombre, categoría, precio y si hay stock) y los contactos públicos de la tienda. Las reservas — nombre, teléfono y nota del cliente — se guardan en la Cloud y se entregan a la app.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Hasta ~2 minutos entre cambiar el catálogo y que la página se actualice",
            "Solo reservas: sin pago ni envío",
            "Máximo de 500 artículos listados",
            "La página solo indica si hay stock, no la cantidad",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    market: {
      title: "Busco pieza",
      subtitle:
        "Un tablón compartido entre tiendas OficinaOS: publica la pieza que necesitas o responde «la tengo» a los pedidos de otras tiendas.",
      sections: [
        {
          heading: "Cómo funciona",
          paragraphs: [
            "En el menú, «Procuro-peça» (busco pieza) abre el tablón con los pedidos abiertos de otras tiendas, y la pestaña de tus pedidos muestra los tuyos. Las demás tiendas solo ven el nombre de tu tienda y el pedido.",
            "Quien tiene la pieza pulsa «La tengo» y envía una respuesta con nota, precio y contacto. Solo la tienda que hizo el pedido ve las respuestas. El trato se cierra directamente entre tiendas, fuera de OficinaOS.",
          ],
          links: [],
        },
        {
          heading: "Publicar un pedido",
          list: [
            "«Nuevo pedido» → qué buscas (ej.: pantalla iPhone 12)",
            "Tipo de pieza y estado (cualquiera, nueva, OEM/original o usada)",
            "Marca, modelo, precio máximo y notas — opcionales",
            "Cuando consigas la pieza, márcala como encontrada; o cierra el pedido para retirarlo. Un pedido cerrado no se reabre — se publica otro",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Qué se necesita",
          list: [
            "La app emparejada con OficinaOS Cloud",
            "El módulo market activo en la cuenta (en beta lo activamos nosotros)",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "El tablón muestra los 100 pedidos abiertos más recientes",
            "Hasta 30 pedidos y 60 respuestas por hora, por tienda",
            "Sin pagos ni garantías en la plataforma — confirma la pieza directamente con la otra tienda",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    marketPrices: {
      title: "Precios de mercado",
      subtitle:
        "Compara los precios de tus reparaciones y piezas con la mediana anónima de otras tiendas OficinaOS.",
      sections: [
        {
          heading: "Qué muestra",
          paragraphs: [
            "En «Precios de mercado» (menú), cada fila muestra un artículo con la mediana de mercado, el rango (mínimo–máximo) y cuántas tiendas han contribuido. Cuando el nombre coincide con un artículo de tu catálogo, aparece también tu precio. Puedes filtrar por reparaciones o piezas.",
            "Un benchmark solo aparece cuando al menos 3 tiendas comparten un precio para el mismo artículo.",
          ],
          links: [],
        },
        {
          heading: "Compartir tus precios (opcional)",
          paragraphs: [
            "Activar la opción de compartir tus precios de forma anónima envía a la Cloud el nombre, la categoría y el precio de los artículos activos de tus catálogos de reparaciones y piezas. Cada vez que cambia el catálogo se vuelve a enviar y sustituye al envío anterior.",
            "Desactivarla borra de la Cloud todos los precios que envió la tienda. Puedes ver los benchmarks sin compartir.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Los artículos se comparan por nombre (sin acentos, mayúsculas ni puntuación) — nombres distintos para la misma reparación no se agrupan",
            "Con pocas tiendas, los extremos del rango son precios reales de tiendas concretas (sin decir cuáles)",
            "Necesita la app emparejada y el módulo market-prices activo",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    multiShop: {
      title: "Multitienda",
      subtitle:
        "Para quien tiene más de una tienda: los ingresos y las reparaciones de todas, lado a lado, en el panel de OficinaOS Cloud.",
      sections: [
        {
          heading: "Cómo funciona",
          paragraphs: [
            "Cada tienda sigue teniendo su propia instalación de OficinaOS, con sus datos en el PC de la tienda. Con el módulo activo, cada instalación envía a la Cloud un resumen diario solo con totales, y el dueño ve el conjunto al entrar en cloud.oficinaos.app.",
            "En beta, nosotros vinculamos las tiendas adicionales a tu cuenta; después, cada tienda empareja su app con un código generado en el panel.",
          ],
          links: [],
        },
        {
          heading: "Qué muestra el panel",
          list: [
            "Ingresos de los últimos 7 y 30 días, sumando todas las tiendas",
            "Reparaciones entregadas en los últimos 30 días y reparaciones en curso",
            "Gráfico de ingresos diarios de los últimos 30 días",
            "Tabla por tienda: ingresos, reparaciones, ventas, en curso y última sincronización",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Qué sale de la tienda",
          paragraphs: [
            "Solo números, por día: ingresos (pagos de ventas y reparaciones), reparaciones abiertas y entregadas, número e importe de las ventas, reparaciones en curso y clientes nuevos. Nunca salen nombres, contactos ni reparaciones individuales. El envío se hace en cada sincronización (~2 minutos) y recalcula también el día anterior.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "«Entregadas» cuenta las reparaciones en estado Entregado cuyo último cambio fue ese día — es una aproximación",
            "Una tienda con la app apagada no envía datos hasta volver a encenderla",
            "El panel está en portugués",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    remarketing: {
      title: "Remarketing por WhatsApp",
      subtitle:
        "Un mensaje automático desde el WhatsApp de la tienda a los clientes cuya última reparación fue hace tiempo.",
      sections: [
        {
          heading: "Quién lo recibe",
          list: [
            "Clientes que aceptaron mensajes automáticos (consentimiento en la ficha del cliente)",
            "Con al menos una reparación entregada, la última hace más días de los configurados (90 por defecto)",
            "Que no han recibido este mensaje dentro del intervalo mínimo configurado (180 días por defecto)",
          ],
          paragraphs: [
            "La app comprueba cada hora y envía como máximo 10 mensajes cada vez.",
          ],
          links: [],
        },
        {
          heading: "Qué se necesita",
          list: [
            "WhatsApp configurado en la app (Business ID, Phone Number ID y token) — el mismo del bot de WhatsApp",
            "Una plantilla de mensaje creada y APROBADA en tu cuenta Meta Business, en idioma portugués (pt)",
            "El módulo remarketing activo en la cuenta de OficinaOS Cloud (en beta lo activamos nosotros)",
          ],
          paragraphs: [],
          links: [{ label: "Guía del bot de WhatsApp", href: "/es/docs/whatsapp/" }],
        },
        {
          heading: "Configurar",
          paragraphs: [
            "Menú → Notificaciones → Canales → sección WhatsApp → remarketing automático. Define los días de inactividad, el intervalo mínimo entre mensajes y el nombre de la plantilla de Meta (oficinaos_remarketing por defecto).",
            "La plantilla recibe dos variables: {{1}} es el nombre de pila del cliente y {{2}} el nombre de la tienda. La app sugiere un texto en portugués del estilo: «¡Hola {{1}}! Ha pasado un tiempo desde tu última reparación en {{2}}. Si tu equipo necesita atención, aquí estamos para ayudarte.»",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Son mensajes iniciados por la tienda: Meta cobra cada mensaje plantilla — coste de Meta, no nuestro",
            "Solo WhatsApp, no SMS",
            "La plantilla se envía siempre en portugués (pt)",
            "Si un envío falla (por ejemplo, plantilla no aprobada), ese cliente solo se vuelve a intentar pasado el intervalo mínimo",
            "La app tiene que estar encendida para que se hagan las comprobaciones",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    aiAnalyst: {
      title: "Analista de IA",
      subtitle:
        "Preguntas sobre los datos de la tienda en lenguaje natural — el analista responde leyendo la base de datos local, con la clave de IA de la propia tienda.",
      sections: [
        {
          heading: "Qué hace el analista",
          paragraphs: [
            "Es un chat dentro de la app: escribes una pregunta en lenguaje cotidiano y el analista responde consultando la base de datos de la tienda en tiempo real. Para preguntas de datos, el modelo genera SQL de solo lectura y lo ejecuta contra la base local — la respuesta viene de números reales, no de un resumen desactualizado.",
            "Ejemplos de lo que puedes preguntar:",
          ],
          list: [
            "«¿Cuántas reparaciones cerramos esta semana y cuál es el valor medio?»",
            "«¿Qué piezas están por debajo del stock mínimo?»",
            "«Muestra los presupuestos pendientes desde hace más de 5 días»",
            "«¿Qué técnico tiene más entregas este mes?»",
          ],
          links: [],
        },
        {
          heading: "Qué sale de la tienda — y adónde va",
          paragraphs: [
            "El analista no es un módulo Pro — es funcionalidad del núcleo, gratis, y OficinaOS Cloud no ve nada. Las preguntas y los datos necesarios para responder van directamente de la app al proveedor de IA que la tienda configure (OpenAI, Google Gemini, Mistral o un endpoint propio). La clave de API es de la tienda, queda encriptada en la app y nunca vuelve a mostrarse.",
            "Como las respuestas pueden incluir datos de clientes (nombres, teléfonos, historial de reparaciones), el acceso al analista queda restringido al perfil de dueño — los demás perfiles no ven el módulo. Para el registro RGPD, el proveedor elegido es el subencargado: con datos europeos, un endpoint europeo o con cláusulas adecuadas es la opción más fácil de justificar.",
          ],
          links: [],
        },
        {
          heading: "Configurar (una vez)",
          paragraphs: [
            "1. Consigue una clave de API del proveedor elegido (OpenAI, Gemini, Mistral — o un endpoint compatible con la API de OpenAI, como una instancia local).",
            "2. En la app: Configuración → Analista de IA. Elige el proveedor o «Personalizado» e indica el endpoint si hace falta.",
            "3. Pega la clave de API y elige el modelo — los modelos pequeños (ej.: gpt-4o-mini) bastan para la mayoría de las preguntas y cuestan céntimos al mes en una tienda normal.",
            "4. Activa el módulo. Solo el perfil de dueño puede ver y configurar el analista — si otro perfil lo necesita, esa decisión es tuya y se revisa en Permisos.",
          ],
          links: [],
        },
        {
          heading: "Día a día — chat, memorias e instrucciones",
          paragraphs: [
            "Cada conversación queda guardada en el historial y puede retomarse o borrarse (individual o en masa). Dos herramientas afinan el comportamiento sin código:",
          ],
          list: [
            "Memorias (hasta 20 activas): hechos que el analista debe recordar siempre — «el IVA es 23%», «trabajamos con estas tres marcas»",
            "Instrucciones (hasta 10 activas): reglas de la casa — «responde siempre en español», «valores monetarios en euros con dos decimales»",
          ],
          links: [],
        },
        {
          heading: "Privacidad y seguridad por dentro",
          paragraphs: [
            "El SQL que genera el modelo no corre con las credenciales de la app: la app provisiona un rol Postgres dedicado de solo lectura (analyst_ro_…) — un intento de escritura falla en la base de datos, no solo en la validación. Si el rol no está provisionado, la herramienta de datos se niega en vez de caer a una conexión privilegiada.",
            "En la práctica: el analista lee, no escribe — no puede cambiar reparaciones, precios ni clientes. Aun así, trata las respuestas como punto de partida: para valores que mueven decisiones (cierre de caja, márgenes), confirma en Informes.",
          ],
          links: [],
        },
        {
          heading: "Límites honestos",
          list: [
            "Solo lectura — no ejecuta acciones ni altera datos",
            "La calidad de la respuesta es la calidad de los datos: fichas incompletas dan respuestas incompletas",
            "Los modelos pequeños se equivocan en SQL complejo — preguntas muy elaboradas pueden necesitar reformulación",
            "El coste es de la clave de la tienda — el proveedor cobra por uso (consulta sus precios)",
            "Sin internet no funciona — el endpoint del proveedor tiene que estar accesible",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Si el analista no responde",
          paragraphs: [
            "Por orden de probabilidad:",
          ],
          list: [
            "Módulo apagado — Configuración → Analista de IA, confirma «Activo»",
            "Clave de API inválida o sin saldo — el error del proveedor aparece en el chat; valida la clave en la consola del proveedor",
            "Nombre del modelo equivocado — en «Personalizado» el nombre tiene que ser el exacto del proveedor",
            "Endpoint inaccesible — en instalaciones sin internet o con firewall restrictivo, el proveedor no es alcanzable",
            "Rol de lectura no provisionado — en los logs de la app aparece un aviso de provisionamiento; reiniciar la app resuelve la mayoría de los casos",
          ],
          links: [],
        },
      ],
    },
    ponto: {
      title: "Libro de horas",
      subtitle:
        "Registro de jornada del equipo por WhatsApp y SMS — un QR fijo en la tienda, comandos con prueba de localización en WhatsApp y un panel de horas para la inspección de trabajo.",
      sections: [
        {
          heading: "Cómo funciona",
          paragraphs: [
            "La tienda imprime un QR fijo (en Ajustes) y lo coloca en la entrada. El empleado lee el QR — abre una página con un código de un solo uso — y envía el mensaje por el WhatsApp de la tienda, el mismo número de los canales Pro. El bot pide la localización y registra el fichaje.",
            "La hora es siempre la del servidor — nunca la escrita en el mensaje ni la del móvil. Por WhatsApp, sin localización no hay registro; por SMS (solo para empleados marcados «sin WhatsApp») el registro queda siempre por validar.",
          ],
          table: {
            head: ["El empleado escribe", "Lo que queda registrado"],
            rows: [
              ["ENTRADA (tras el QR)", "Código válido + localización dentro del radio de la tienda (100 m por defecto, configurable) → aprobado; fuera del radio → por validar"],
              ["PAUSA / VOLTEI / SAIDA", "Solo la localización — la entrada de ese día ya demostró quién es; fuera del radio → por validar"],
              ["ESTADO", "Horas de hoy y de la semana, y los registros por validar de ese empleado"],
              ["Externos (comerciales, técnicos a domicilio)", "Localización + foto, sin radio; aprobados automáticamente por defecto — la tienda puede pasar a «por validar»"],
              ["SMS", "Los mismos comandos en texto; siempre por validar — el SMS no lleva localización"],
            ],
          },
          links: [],
        },
        {
          heading: "Qué hace falta",
          list: [
            "Al menos un canal Pro de recepción activo — WhatsApp (oficial o Evolution) o SMS; el libro de horas no recibe mensajes por sí solo",
            "El módulo punto activo en la cuenta de OficinaOS Cloud (en la beta, lo activamos nosotros)",
            "La app emparejada con Cloud (Ajustes → pestaña Cloud)",
            "Cada empleado con su teléfono registrado en Ajustes — interno, externo o «sin WhatsApp»",
          ],
          paragraphs: [],
          links: [
            { label: "Guía del bot de WhatsApp", href: "/es/docs/whatsapp/" },
            { label: "Guía del canal SMS", href: "/es/docs/sms/" },
          ],
        },
        {
          heading: "El panel — de «quién está» a las horas del mes",
          paragraphs: [
            "El menú «Libro de horas» muestra quién está trabajando y qué necesita atención:",
          ],
          list: [
            "Ahora — quién está, quién está en pausa, quién salió",
            "Por validar — cada registro con mapa, radio, foto, hora y motivo; aprobar o rechazar con nota",
            "Horas — por día, semana y mes, con retrasos y horas extra",
            "Olvidos — salidas sin fichar: el bot pregunta al empleado por WhatsApp o SMS; sin respuesta en 60 minutos, el propietario y la recepción reciben un aviso en la app",
            "Exportar — PDF u Excel por periodo y empleado, para el contable y la inspección de trabajo, con las correcciones a la vista",
          ],
          links: [],
        },
        {
          heading: "Un registro que no se borra",
          paragraphs: [
            "Cada registro es una línea nueva que nunca se edita ni se borra — una corrección es otra línea que apunta a la original. El historial se guarda 5 años (Código del Trabajo portugués, art. 202), accesible y consultable por la inspección de trabajo, y el empleado puede pedir sus registros.",
            "Las fotos de prueba de externos se borran automáticamente a los 90 días — el registro queda, marcado como «foto caducada».",
          ],
          links: [],
        },
        {
          heading: "RGPD y derecho laboral — lo que la tienda debe hacer",
          paragraphs: [
            "El módulo ayuda a la tienda a cumplir la normativa laboral — no garantiza el cumplimiento: la decisión y la responsabilidad son de la tienda. En concreto:",
          ],
          list: [
            "Informar a los empleados por escrito — los Ajustes tienen una plantilla imprimible para firmar",
            "Localización solo en el momento del registro — nunca continua; sin biometría",
            "Las fotos de externos se guardan 90 días; los registros, 5 años",
            "Valorar la necesidad de una evaluación de impacto (AIPD) antes de activarlo — el seguimiento de la ubicación de empleados pide cuidado extra",
          ],
          links: [],
        },
        {
          heading: "Ajustes — activar, QR y empleados",
          paragraphs: [
            "Todo se configura en Ajustes: activar el módulo, marcar la ubicación de la tienda en un mapa y el radio (100 m por defecto), imprimir el QR en PDF, registrar los teléfonos de los empleados y exponer el texto de información para ellos.",
          ],
          links: [],
        },
      ],
    },
  },
  updates: {
    title: "Novedades",
    subtitle:
      "Lo que ha cambiado en OficinaOS — funciones nuevas, mejoras y módulos Pro. Actualizado con cada lanzamiento.",
    free: "Gratis",
    pro: "Pro",
  },
  seoPage: {
    metaTitle: "Software para tiendas de reparación de móviles — gratis",
    metaDesc:
      "Programa de gestión para talleres de reparación de móviles: recepciones, presupuestos, stock, TPV y copias. Gratis y con los datos en la tienda.",
    badge: "Software libre · Hecho en Portugal",
    title: "Software de gestión para tiendas de reparación de móviles",
    subtitle:
      "El programa gratuito que sustituye el papel, el Excel y las llamadas de «¿ya está listo?» — hecho para talleres independientes.",
    ctaTitle: "¿Listo para probarlo?",
    ctaText:
      "Descárgalo, instálalo en el PC de la tienda y haz la primera recepción hoy. Sin cuenta, sin tarjeta, sin cuotas.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    sections: [
      {
        heading: "Qué hace el programa",
        paragraphs: [
          "OficinaOS cubre el día a día completo de una tienda de reparaciones — desde que el cliente entra hasta que recoge el aparato:",
        ],
        list: [
          "Recepción de la reparación con marca, modelo, IMEI, estado y accesorios que se quedan",
          "Presupuestos con piezas y mano de obra — el cliente aprueba o rechaza desde su propio móvil",
          "Página pública de seguimiento: el cliente ve el estado en tiempo real sin llamar",
          "Gestión de stock con alertas de reposición e historial de piezas usadas",
          "TPV / caja para vender accesorios y registrar pagos en efectivo, tarjeta y MB Way",
          "Ingresos, márgenes y tiempo medio de reparación en un panel diario",
          "SMS automáticos al cliente cuando la reparación está lista (módulo Pro, con un móvil Android)",
          "Copias de seguridad diarias automáticas de la base de datos",
        ],
      },
      {
        heading: "Gratis, sin asteriscos",
        paragraphs: [
          "La mayoría de los programas para talleres cobra cuotas mensuales por puesto o por técnico. OficinaOS es software libre (licencia MIT): la aplicación completa — reparaciones, presupuestos, stock, TPV, copias de seguridad — es gratuita para siempre, para una tienda o para diez puestos.",
          "Los módulos Pro opcionales (portal del cliente en la nube, bot de WhatsApp, tienda online, precios de mercado, multi-tienda) forman parte de OficinaOS Pro, un plan opcional, para quien los necesite. El núcleo que usas cada día nunca queda detrás de un pago.",
        ],
        links: [
          { label: "Código fuente en GitHub", href: "https://github.com/braindeadpt/OficinaOS" },
          { label: "Módulos Pro", href: "/es/#pro" },
        ],
      },
      {
        heading: "Los datos de tus clientes se quedan en tu tienda",
        paragraphs: [
          "La aplicación corre en el PC de la tienda y lo guarda todo en una base de datos local. No hay telemetría, no hay cuenta obligatoria, y los datos de tus clientes — nombres, teléfonos, historial de reparaciones — no salen de la red de la tienda a menos que actives un módulo Pro.",
          "Para la mayoría de las tiendas esto resuelve buena parte del RGPD: no hay encargados de tratamiento, no hay transferencias internacionales, y si se cae internet la tienda sigue funcionando.",
        ],
        links: [{ label: "Política de privacidad", href: "/es/privacy" }],
      },
      {
        heading: "Comparado con lo que usas hoy",
        paragraphs: [],
        table: {
          head: ["", "Papel y Excel", "Software con cuota", "OficinaOS"],
          rows: [
            ["Coste", "«Gratis», pero caro en tiempo perdido", "20–60 €/mes por puesto", "Gratis (MIT)"],
            ["¿El cliente sigue la reparación?", "No — llama a la tienda", "A veces, de pago", "Sí, página pública gratis"],
            ["Dónde quedan los datos", "En el cajón / en un archivo", "En la nube del proveedor", "En el PC de tu tienda"],
            ["Funciona sin internet", "Sí", "Normalmente no", "Sí"],
            ["En tu idioma", "—", "Raramente", "Interfaz y ayuda en ES, PT, EN"],
          ],
        },
      },
      {
        heading: "Listo en una tarde",
        paragraphs: [
          "En Windows 10/11 basta ejecutar el instalador: lo configura todo, crea el servicio y deja un icono en la bandeja. Los demás dispositivos de la tienda — móviles, tablets, el PC de recepción — solo abren la dirección local en el navegador, sin instalar nada.",
          "Como alternativa, el paquete portátil corre desde una carpeta (incluso un USB) sin instalar nada, y hay imagen Docker para Linux y macOS.",
        ],
        links: [
          { label: "Guía de instalación paso a paso", href: "/es/docs" },
          { label: "Novedades y versiones", href: "/es/updates" },
        ],
      },
    ],
  },
  home: {
    fork: {
      title: "¿Tienes un taller o una tienda de reparación?",
      yesLabel: "Sí, tengo un taller",
      yesTitle: "OficinaOS: el programa gratis para tu tienda",
      yesText: "Reparaciones, presupuestos, clientes, stock y caja en un solo programa, gratis. Y, cuando quieras, OficinaOS Pro te conecta con tus clientes por WhatsApp y SMS.",
      yesCta: "Ver cómo funciona",
      yesPro: "Conocer OficinaOS Pro",
      noLabel: "No, tengo otro negocio",
      noTitle: "Módulos para cualquier empresa",
      noNote: "Próximamente para todas las empresas — ya puedes apuntarte a la lista de espera.",
    },
    hero: {
      title: "Cada reparación organizada, de la entrada a la entrega.",
      subtitle:
        "Software gratis y de código abierto para técnicos independientes, talleres y revendedores. Recepción, presupuestos, stock y caja en tu PC — y el cliente sigue la reparación desde el móvil, sin llamar.",
      ctaWin: "Descargar para Windows",
      ctaDesktop: "Instalar con Docker",
      ctaMobile: "Ver cómo instalar",
      ctaSecondary: "Ver cómo funciona",
      noteWin: "Gratis · Windows 10/11 · instalación guiada",
      noteDesktop: "Linux y macOS con Docker · o instálalo en un PC con Windows",
      noteMobile: "Se instala en un PC con Windows; después se abre en el móvil, desde el navegador.",
      trust: ["Código abierto (MIT)", "Funciona sin internet", "Los datos se quedan en tu PC"],
      versionLabel: "Versión",
      frameTitle: "Reparaciones",
      frameCaption:
        "Lista de reparaciones de OficinaOS recreada en HTML con datos de ejemplo: la reparación del iPhone 13 pasa de «En reparación» a «Listo» y se avisa al cliente.",
      toast: "Cliente avisado: «Tu iPhone 13 está listo.»",
    },
    tour: {
      title: "De la entrada a la entrega, en cinco pasos",
      lead: "El mismo flujo sirve para una tienda con mostrador, un técnico que trabaja solo o un revendedor que recibe equipos de otros profesionales.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Entra el cliente",
          text: "Ficha nueva en segundos: nombre, contacto y equipo. Los clientes habituales y los revendedores aparecen al momento, con su historial.",
        },
        {
          title: "IMEI y estado del equipo",
          text: "Registra el IMEI o el número de serie, los accesorios que se quedan y el estado en que llegó. El cliente firma y todo queda buscable.",
        },
        {
          title: "Presupuesto aprobado desde el móvil",
          text: "Piezas y mano de obra en un presupuesto que el cliente aprueba o rechaza en la página de seguimiento — con la hora registrada.",
        },
        {
          title: "Reparación",
          text: "Estados claros para quien está en el banco de trabajo, técnico asignado y piezas descontadas del stock. El cliente ve el progreso sin llamar.",
        },
        {
          title: "Entrega y ticket",
          text: "Cobro en caja y ticket con QR de seguimiento y garantía. Factura certificada con el módulo Pro (InvoiceXpress, solo en Portugal).",
        },
      ],
      ui: {
        intake: {
          title: "Nueva reparación",
          fields: [
            ["Cliente", "Ana Martín"],
            ["Teléfono", "612 345 678"],
            ["Equipo", "iPhone 13 · 128 GB"],
            ["Problema", "Pantalla rota, el táctil falla abajo"],
          ],
          hint: "Cliente habitual · 3 reparaciones anteriores",
        },
        device: {
          imeiLabel: "IMEI",
          accessoriesLabel: "Se queda con el equipo",
          accessories: ["Funda"],
          conditionLabel: "Estado a la entrada",
          condition: "Pantalla astillada · arañazos en la trasera",
          signature: "Firmado por el cliente",
        },
        quote: {
          title: "Presupuesto",
          lines: [
            ["Pantalla OLED (compatible)", 109],
            ["Mano de obra", 20],
          ],
          total: "Total",
          approved: "Aprobado por el cliente",
          when: "Hoy, 11:02 · en la página de seguimiento",
        },
        repair: {
          times: ["10:42", "11:05", "15:30"],
          tech: "Técnico",
          techName: "Rui",
          stockLabel: "Pantalla iPhone 13 (OLED)",
          stockUnit: "en stock",
        },
        receipt: {
          title: "Ticket",
          line: "Reparación R-2614 · iPhone 13",
          paid: "Pagado · tarjeta",
          warranty: "QR de seguimiento y garantía",
          invoice: "Factura certificada (Pro)",
        },
      },
    },
    video: {
      title: "¿Prefieres verlo?",
      lead: "El flujo completo en un minuto: recepción, presupuesto y aprobación desde el móvil.",
      play: "Ver el vídeo de demostración (1 min)",
      youtube: "Presentación narrada en YouTube (en portugués)",
    },
    ecosystem: {
      title: "Una familia de herramientas alrededor del banco de trabajo",
      lead: "OficinaOS empezó gestionando reparaciones y está creciendo: diagnóstico por cable, módulos online y un mercado entre profesionales. El núcleo sigue siendo gratis.",
      listLabel: "Productos OficinaOS",
      os: {
        title: "Reparaciones, clientes, stock y caja",
        text: "Gratis para siempre, de código abierto e instalada en tu PC. Para el PC, la tablet y el móvil del equipo.",
      },
      diag: {
        title: "Diagnóstico por cable, con informe",
        text: "App gratis para Windows que lee Android e iPhone por USB: batería, pantalla, sensores y almacenamiento.",
        battery: "Salud de la batería",
        cycles: "ciclos",
      },
      pro: {
        title: "Módulos online, con la Cloud como motor",
        text: "Portal del cliente, WhatsApp, facturación y escaparate online. Opcionales, activados uno a uno.",
        bubble: "Hola Ana, tu iPhone 13 está listo. Puedes recogerlo hasta las 19:00.",
        via: "vía OficinaOS Cloud",
      },
      trade: {
        title: "Compraventa entre profesionales",
        text: "Piezas, lotes y equipos entre técnicos, talleres y revendedores verificados.",
        rows: [
          ["Pantallas OLED iPhone 13 · lote de 5", "Madrid"],
          ["Galaxy S22 para piezas", "Oporto"],
        ],
        price: "Precio para profesionales",
      },
    },
    privacy: {
      title: "Tus datos se quedan contigo",
      lead: "OficinaOS funciona en tu PC o en tu servidor, sin telemetría y sin cuenta obligatoria. No sale nada si no lo activas tú.",
      localTitle: "En tu PC",
      local: ["Clientes y contactos", "Reparaciones e historial", "Stock, ventas y caja", "Copias de seguridad automáticas"],
      optionalTitle: "Solo si lo activas",
      optional: ["OficinaOS Cloud (módulos Pro)", "Mensajes por WhatsApp y SMS", "Informes con IA", "Acceso remoto (Cloudflare)"],
      points: [
        ["Self-hosted", "Instalador para Windows o Docker en tu propio servidor. Funciona en la red local, incluso sin internet."],
        ["Código abierto", "Licencia MIT: puedes leer, auditar y cambiar todo lo que hace la app."],
        ["RGPD sin sorpresas", "Cada módulo opcional declara qué envía y adónde, listo para el registro de actividades de tratamiento."],
      ],
      link: "Ver qué sale, módulo a módulo",
    },
    changelog: {
      title: "Novedades",
      lead: "Lo que cambió en las últimas versiones.",
      all: "Ver todas las novedades",
    },
    cta: {
      title: "Instálalo hoy y registra la primera reparación",
      lead: "Sin cuenta, sin tarjeta, sin cuotas. Si Windows muestra un aviso, la página de descarga explica qué hacer.",
      docker: "Instalación con Docker",
      portable: "Versión portátil",
      guide: "Guía de instalación",
      published: "publicada el",
    },
  },
  download: {
    metaTitle: "Descargar OficinaOS — Windows y Docker",
    metaDesc:
      "Descarga OficinaOS para Windows 10/11, comprueba el SHA-256 y pasa el aviso de SmartScreen. Docker para Linux y macOS.",
    title: "Descargar OficinaOS",
    lead: "Gratis y de código abierto. Instálalo en un PC con Windows o en un servidor con Docker — después, el equipo abre la app en el navegador de cualquier PC, tablet o móvil de la red.",
    latest: "Última versión",
    published: "publicada el",
    unknownVersion: "La versión más reciente está siempre en GitHub.",
    starting: "La descarga debería empezar en unos segundos. Si no empieza, usa el botón «Descargar».",
    winTitle: "Windows 10 y 11",
    winText: "Instalador guiado: crea el servicio, abre el firewall y deja un icono en la bandeja. Sin Docker.",
    winButton: "Descargar",
    winReq: "Windows 10/11 de 64 bits · pide administrador una vez",
    checksumTitle: "Comprobar el archivo (SHA-256)",
    checksumText: "Después de descargarlo, compara el resultado de este comando de PowerShell con el valor de abajo. Si coincide, el archivo es exactamente el publicado en GitHub.",
    checksumMissing: "No pudimos leer el checksum de esta versión al publicar la web. Los archivos .sha256 están junto a cada versión en GitHub.",
    copy: "Copiar",
    copied: "Copiado",
    stepsTitle: "Después de descargar",
    steps: [
      {
        title: "Abre OficinaOS-Setup.exe",
        text: "Está en la carpeta Descargas. Haz doble clic.",
      },
      {
        title: "Si Windows muestra «Windows protegió su PC»",
        text: "Haz clic en «Más información» y después en «Ejecutar de todas formas». El aviso aparece porque el instalador todavía no tiene firma digital y Windows no lo reconoce. No es un virus: todo el código está en GitHub y puedes comprobar el archivo con el SHA-256.",
      },
      {
        title: "Acepta la solicitud de administrador",
        text: "Solo una vez, para instalar el servicio, el firewall y la tarea de copias de seguridad. El resto es automático.",
      },
      {
        title: "Entra en la app",
        text: "Al terminar se abre el navegador en http://localhost:4000. En el primer acceso la app muestra la pantalla de configuración inicial — creas el usuario administrador y la contraseña. En otros dispositivos de la red: http://oficinaos.local:4000.",
      },
    ],
    smartscreen: {
      caption: "Recreación del aviso de Microsoft Defender SmartScreen en dos pasos: primero «Más información», después «Ejecutar de todas formas».",
      step1: "Pantalla 1",
      step2: "Pantalla 2",
      heading: "Windows protegió su PC",
      body: "Microsoft Defender SmartScreen impidió el inicio de una aplicación no reconocida. Ejecutar esta aplicación podría poner en riesgo su PC.",
      moreInfo: "Más información",
      appLabel: "Aplicación:",
      publisherLabel: "Editor:",
      publisher: "Editor desconocido",
      run: "Ejecutar de todas formas",
      dontRun: "No ejecutar",
    },
    dockerTitle: "Linux, macOS o servidor — Docker",
    dockerText: "No hay instalador para Linux ni macOS. Con Docker instalado, la app arranca con estos comandos:",
    portableTitle: "¿Sin permisos de administrador?",
    portableText: "La versión portátil funciona desde una carpeta (incluso desde un USB), sin instalar nada.",
    portableLink: "Descargar la versión portátil (.zip)",
    helpTitle: "¿Necesitas ayuda?",
    helpGuide: "Guía de instalación paso a paso",
    helpDiscord: "Preguntar en Discord",
    helpReleases: "Notas de versión y todas las versiones",
    mobileTitle: "¿Estás en el móvil?",
    mobileText: "OficinaOS se instala en un PC con Windows (o en un servidor). Después, el móvil y la tablet abren la app desde el navegador, en la red de la tienda — sin instalar nada.",
  },
  ui: {
    frame: {
      appTitle: "OficinaOS",
      caption: "La interfaz de OficinaOS recreada en HTML, con datos de ejemplo.",
    },
    repairList: {
      title: "Reparaciones",
      active: "activas",
      search: "Buscar por IMEI, cliente o n.º",
      newRepair: "Nueva reparación",
      cols: { id: "N.º", device: "Equipo", customer: "Cliente", imei: "IMEI / N.º de serie", status: "Estado", total: "Importe" },
      rows: [
        { id: "R-2614", device: "iPhone 13", issue: "Pantalla rota", customer: "Ana Marques", imei: "356938108542176", status: "in-repair", total: 129, when: "Hoy, 10:42" },
        { id: "R-2613", device: "Galaxy S22", issue: "No carga", customer: "Rui Teixeira", imei: "352094117730258", status: "waiting-for-parts", total: 45, when: "Hoy, 09:15" },
        { id: "R-2611", device: "Redmi Note 12", issue: "Batería hinchada", customer: "Marta Lopes", imei: "868123056649912", status: "done", total: 39.9, when: "Ayer, 17:30" },
        { id: "R-2609", device: "iPad (9.ª gen.)", issue: "Cristal de pantalla", customer: "Oficina Norte (reventa)", imei: "DMPXK2J9Q1GC", status: "intake", total: 89, when: "Ayer, 16:05" },
        { id: "R-2604", device: "Pixel 7", issue: "Cámara trasera", customer: "João Pires", imei: "357812094418360", status: "delivered", total: 74.5, when: "23/10, 12:20" },
      ],
    },
    status: {
      intake: "Recibido",
      "waiting-for-parts": "Esperando piezas",
      "in-repair": "En reparación",
      "on-hold": "En espera",
      done: "Listo",
      delivered: "Entregado",
      returned: "Devuelto",
      cancelled: "Cancelado",
    },
  },
  diagPage: {
    metaTitle: "OficinaOS Diag — diagnóstico de móviles por cable, gratis",
    metaDesc:
      "App Windows gratuita que lee Android e iPhone por USB: batería, pantalla, táctil y sensores, con informe HTML/JSON. Sin cuenta ni internet.",
    hero: {
      label: "OficinaOS Diag",
      title: "Conecta el cable. El informe se escribe solo.",
      subtitle:
        "App Windows gratuita que lee cualquier Android o iPhone por USB: batería, pantalla y táctil, sensores y almacenamiento. Todo se ejecuta en el PC, sin cuenta.",
      cta: "Descargar para Windows",
      ctaSecondary: "Ver un informe de ejemplo",
      note: "Windows 10/11 · gratis · sin cuenta · código abierto (MIT)",
      frameTitle: "Escaneo USB",
      frameCaption:
        "Recreación ilustrativa de un escaneo de OficinaOS Diag con datos de ejemplo: un iPhone 13 conectado por USB, las pruebas completándose y el informe listo para exportar.",
      device: "iPhone 13 · 128 GB",
      connected: "Conectado por USB",
      trusted: "«Confiar en este ordenador» aceptado",
      tests: [
        ["Identificación", "iOS 18.1 · número de serie leído"],
        ["Batería", "87 % de capacidad · 412 ciclos"],
        ["Almacenamiento y RAM", "56,6 de 128 GB usados"],
        ["Sensores", "4 de 4 responden"],
        ["Pantalla y táctil", "0 píxeles muertos · 1 zona muerta"],
        ["Activación y operador", "Activado"],
      ],
      reportReady: "Informe listo",
      export: "Exportar HTML · JSON",
    },
    caps: {
      title: "Lo que hace el Diag — gratis, siempre",
      lead: "Sin cuenta y sin servidor: el escaneo se ejecuta 100 % en el PC. Dos extras opcionales lo conectan con quien repara.",
      free: [
        { title: "Escaneo por USB", text: "Modelo, número de serie, versión del sistema, batería (nivel, temperatura, ciclos y capacidad real frente a la de diseño), almacenamiento, RAM y sensores." },
        { title: "Prueba de pantalla y táctil", text: "La app sirve una página de prueba en la red local — en Android se abre sola, en iPhone se lee un código QR. Los píxeles muertos y las zonas táctiles muertas quedan en el informe." },
        { title: "Informe HTML y JSON", text: "Cada escaneo exporta un informe imprimible (sirve como PDF para entregar al cliente) y el JSON en bruto con todos los datos." },
        { title: "Historial en el PC", text: "Los escaneos anteriores se guardan en local — compara la salud de la batería del mismo equipo a lo largo del tiempo, útil en garantías y usados." },
        { title: "Android e iPhone", text: "Android con adb ya incluido (nada que instalar en el PC). iPhone e iPad con el driver USB de Apple." },
        { title: "Portugués e inglés, tres temas", text: "Terminal (el aspecto retro original), Windows 95 y Moderno. La elección se guarda." },
      ],
      proTitle: "Con el Pro de quien repara",
      pro: [
        { title: "Enviar a quien repara", text: "El cliente hace el escaneo en casa, escribe el código que le dieron y el diagnóstico llega a OficinaOS como pre-check." },
        { title: "Informe en lenguaje sencillo", text: "Los datos técnicos se convierten en un texto claro para el cliente — «la batería está al 78 % de su capacidad original, se recomienda sustituirla»." },
      ],
      proBadge: "Pro",
    },
    report: {
      title: "Explora un informe de ejemplo",
      lead: "Esto es lo que entrega el Diag al final de cada escaneo. Abre cada sección — los números son de ejemplo.",
      docTitle: "Informe de diagnóstico",
      docMeta: "iPhone 13 · escaneo de ejemplo",
      summaryLabel: "Resumen",
      summary: [
        ["Batería", "87 %", "de la capacidad de diseño"],
        ["Pantalla", "0", "píxeles muertos"],
        ["Táctil", "1", "zona muerta"],
        ["Sensores", "4/4", "responden"],
      ],
      sections: [
        {
          title: "Equipo",
          rows: [
            ["Modelo", "iPhone 13 (A2633)"],
            ["Número de serie", "F2LX••••Q6R"],
            ["Sistema", "iOS 18.1"],
          ],
        },
        {
          title: "Batería",
          rows: [
            ["Nivel", "64 %"],
            ["Temperatura", "31,2 °C"],
            ["Ciclos de carga", "412"],
            ["Capacidad real / de diseño", "2808 / 3227 mAh (87 %)"],
          ],
        },
        {
          title: "Almacenamiento y RAM",
          rows: [
            ["Almacenamiento", "56,6 GB usados de 128 GB"],
            ["RAM", "4 GB"],
          ],
        },
        {
          title: "Sensores",
          rows: [
            ["Acelerómetro", "OK"],
            ["Giroscopio", "OK"],
            ["Proximidad", "OK"],
            ["Brújula", "OK"],
          ],
        },
        {
          title: "Pantalla y táctil",
          rows: [
            ["Prueba de colores", "0 píxeles muertos"],
            ["Cuadrícula táctil", "1 zona muerta (esquina superior derecha)"],
          ],
        },
        {
          title: "Activación y operador",
          rows: [
            ["Estado de activación", "Activado"],
            ["Operador", "Libre"],
          ],
        },
      ],
      jsonTitle: "JSON en bruto (extracto ilustrativo)",
      exportNote: "En el Diag: Exportar → HTML (imprimible) o JSON.",
    },
    integration: {
      title: "Del sofá del cliente al banco de trabajo",
      lead: "Con el módulo de recepción de diagnósticos (Pro) activado por quien repara, el Diag deja de ser solo una herramienta y pasa a ser la puerta de entrada.",
      steps: [
        { title: "El cliente escanea en casa", text: "Descarga el Diag (gratis), conecta el móvil y hace el escaneo." },
        { title: "Escribe el código que le dieron", text: "El diagnóstico viaja a OficinaOS Cloud. Nada sale del PC sin este clic." },
        { title: "Llega a OficinaOS como pre-check", text: "Aparece en la cola de Pedidos, listo para convertir en reparación — o para valorar un usado antes de comprarlo." },
      ],
      uses: "Casos de uso: prediagnóstico antes de que venga el cliente, valoración de usados para compraventa y grading con datos objetivos.",
      queue: {
        title: "Pedidos",
        caption: "Recreación ilustrativa de la cola de Pedidos de OficinaOS con un diagnóstico enviado por un cliente (datos de ejemplo).",
        item: "Diagnóstico enviado por el cliente",
        meta: "iPhone 13 · batería 87 % · 1 zona táctil muerta",
        tag: "Diag",
        action: "Convertir en reparación",
      },
      proLink: "Ver los módulos Pro",
      docsLink: "Cómo funciona el envío (guía)",
    },
    compat: {
      title: "Compatibilidad",
      lead: "Un PC con Windows 10 u 11 y un cable de datos. El resto depende del móvil.",
      readTitle: "Lo que lee el escaneo",
      readCaption: "Lo que lee el escaneo del Diag en Android y en iPhone/iPad",
      readHead: ["Datos", "Android", "iPhone/iPad"],
      readRows: [
        ["Modelo, número de serie, versión del sistema", "✓", "✓"],
        ["Batería — nivel, temperatura, ciclos", "✓", "✓"],
        ["Batería — capacidad real frente a la de diseño", "donde el fabricante lo expone", "✓"],
        ["Almacenamiento y RAM", "✓", "✓"],
        ["Sensores", "✓", "✓"],
        ["Root / bootloader desbloqueado", "✓", "—"],
        ["Estado de activación / operador", "—", "✓"],
      ],
      reqTitle: "Lo que necesitas",
      reqCaption: "Requisitos del Diag por plataforma",
      reqHead: ["", "Android", "iPhone/iPad"],
      reqRows: [
        ["En el móvil", "Activar «Depuración USB» en las opciones de desarrollador", "Aceptar «Confiar en este ordenador»"],
        ["En el PC", "Nada — adb viene incluido", "Driver USB de Apple (iTunes o la app «Dispositivos Apple»)"],
        ["Extra", "Cable de datos (no solo de carga)", "Cerrar la app Fotos de Windows antes del escaneo"],
      ],
      scrollLabel: "Tabla con desplazamiento horizontal",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿El Diag es gratis de verdad?", a: "Sí. El escaneo, la prueba de pantalla y táctil, la exportación y el historial son gratis, sin cuenta y sin límite. El código es abierto (MIT). Solo el envío a quien repara y el informe en lenguaje sencillo son módulos Pro — y los activa quien repara, no el cliente." },
        { q: "¿Necesita internet?", a: "No. El escaneo se ejecuta 100 % en el PC. Solo se conecta si el usuario elige «Enviar a la tienda», «Informe IA» o «Enviar log» — y el destino es siempre el servidor de OficinaOS." },
        { q: "¿Funciona en Mac o Linux?", a: "No: el Diag es una app de Windows (10 u 11). El móvil puede ser Android, iPhone o iPad." },
        { q: "¿Está en la Microsoft Store?", a: "Todavía no. Por ahora se distribuye como ZIP portátil en GitHub. Como el ejecutable aún no tiene firma de código, Windows puede mostrar el aviso SmartScreen la primera vez: «Más información» → «Ejecutar de todas formas»." },
        { q: "No detecta el móvil. ¿Y ahora?", a: "Comprueba que el cable es de datos (no solo de carga) y prueba otro puerto USB. Android: «Depuración USB» activada y la autorización aceptada en el móvil. iPhone: «Confiar en este ordenador» aceptado, driver de Apple instalado y la app Fotos cerrada. Mantén la pantalla desbloqueada durante el escaneo." },
        { q: "¿Se guardan los datos del móvil?", a: "Solo en tu PC, en el historial local del Diag. No se envían a nadie sin una acción tuya, y la IA (cuando se usa) no entrena modelos con ellos." },
      ],
    },
    download: {
      title: "Descargar el Diag",
      lead: "ZIP portátil para Windows 10/11 — no necesita instalación.",
      button: "Descargar ZIP para Windows",
      buttonFallback: "Ver la última versión en GitHub",
      version: "Versión",
      released: "Publicada el",
      size: "Tamaño",
      sums: "Checksums (SHA256SUMS.txt)",
      steps: [
        "Extrae la carpeta entera — OficinaDiag.exe necesita los archivos que vienen al lado.",
        "Abre OficinaDiag.exe. Si Windows avisa: «Más información» → «Ejecutar de todas formas» (solo la primera vez).",
        "Conecta el móvil por cable y sigue las indicaciones en pantalla.",
      ],
      source: "Código fuente en GitHub",
      docs: "Documentación completa del Diag",
      store: "Todavía no está en la Microsoft Store.",
    },
    productLink: "Conocer OficinaOS Diag",
    docsLink: "Documentación completa",
  },
  proPage: {
    metaTitle: "OficinaOS Pro — WhatsApp, SMS, portal e IA para talleres, desde 39 €/mes",
    metaDesc:
      "WhatsApp y SMS con asistente de IA, portal del cliente, facturación, escaparate online e informes IA en el plan base, hasta 3 tiendas. Libro de horas y Balcão IA como extras. 14 días gratis.",
    hero: {
      label: "OficinaOS Pro",
      title: "Todo lo que tu taller necesita más allá del mostrador.",
      subtitle:
        "El programa sigue siendo gratis. El Pro lo conecta a internet: responde a los clientes por WhatsApp y SMS, muestra el estado de las reparaciones y factura. ¿Necesitas el registro de jornada del equipo o una bandeja de entrada con IA? Añade solo esos extras.",
      priceLine: "Desde {price}/mes · hasta {shops} tiendas · {days} días gratis",
      cta: "Probar {days} días gratis",
      ctaSecondary: "Ver qué está incluido",
      frameTitle: "Ajustes — Cloud",
      frameCaption:
        "Recreación ilustrativa de la pestaña Cloud en los ajustes de OficinaOS, con datos de ejemplo: conectada a OficinaOS Cloud, con el plan Pro y los módulos activos.",
      status: "Conectado a OficinaOS Cloud · Plan Pro",
      sync: "Última sincronización: hace 1 min",
      modulesTitle: "Incluido en tu plan",
      modules: ["WhatsApp y SMS con IA", "Portal del cliente", "Informes IA del Diag", "Facturación certificada", "Escaparate online"],
      more: "+ {rest} módulos",
      active: "Activo",
      offline: "Sin internet, todo lo demás sigue funcionando en la red de la tienda.",
    },
    core: {
      title: "El programa es gratis. Siempre.",
      lead: "El Pro no le quita nada al programa que descargas. OficinaOS sigue siendo gratuito y de código abierto: sin límites, sin cuentas y sin periodo de prueba.",
      items: [
        "Reparaciones, presupuestos, clientes, stock y caja",
        "En tu PC, funcionando sin internet",
        "Código abierto, licencia MIT",
        "Página pública de seguimiento y respuesta a presupuestos",
        "OficinaOS Diag — diagnóstico por cable, gratis",
      ],
      note: "Los mensajes a los clientes (WhatsApp y SMS) son del Pro: el programa gratis no envía ni recibe mensajes.",
      link: "Descargar OficinaOS",
    },
    benefits: {
      title: "Qué cambia en tu tienda",
      lead: "Menos tiempo al teléfono, más tiempo en el banco de trabajo.",
      items: [
        { title: "Se acabaron los «¿ya está listo?»", text: "El cliente pregunta por WhatsApp o SMS y el asistente responde al momento con el estado real de la reparación — incluso con la tienda cerrada." },
        { title: "Presupuestos aprobados más rápido", text: "El cliente aprueba con un «SÍ» o en un enlace, a cualquier hora. La aprobación entra en la app con fecha y hora." },
        { title: "No se pierde ningún mensaje", text: "Con el extra Balcão IA, WhatsApp y SMS quedan en una sola bandeja de entrada: la IA resume y prepara respuestas, y una persona las aprueba antes de enviarlas." },
        { title: "Registro de jornada sin papel", text: "Con el extra Libro de horas, los empleados fichan por WhatsApp. Registros inalterables durante 5 años, listos para la inspección de trabajo (ACT)." },
        { title: "Factura certificada al terminar la reparación", text: "De la venta o la reparación a la factura de InvoiceXpress, sin escribirlo todo dos veces. Solo Portugal." },
        { title: "Clientes que vuelven", text: "Escaparate online con reservas, recordatorios de recogida y mensajes a clientes que hace tiempo que no aparecen." },
      ],
    },
    groups: {
      title: "Todo lo que está incluido",
      lead: "{included} módulos incluidos en el plan base, en tres grupos. Solo el Libro de horas y Balcão IA son extras.",
      extraBadge: "Extra",
      more: "Guía",
      items: [
        {
          title: "Hablar con clientes",
          text: "El cliente sabe en qué punto está la reparación y aprueba el presupuesto sin llamar. El asistente de IA solo responde con lo que la tienda le permite decir y pasa a una persona cuando no sabe.",
          ui: {
            title: "WhatsApp",
            caption: "Conversación de ejemplo con el asistente de WhatsApp: el cliente aprueba un presupuesto respondiendo SÍ.",
            messages: [
              ["in", "Hola, ¿ya hay presupuesto para el iPhone?"],
              ["out", "REP-2614 · iPhone 13: cambiar pantalla — 129,00 €. Responde SÍ para aprobar o NO para rechazar."],
              ["in", "SÍ"],
              ["out", "Presupuesto aprobado. Te avisamos cuando esté listo."],
            ],
          },
        },
        {
          title: "Vender y facturar",
          text: "Del mostrador a la factura certificada, y un escaparate online cuyas reservas entran en la app.",
          ui: {
            title: "Venta",
            caption: "Venta de ejemplo en OficinaOS con la factura-recibo emitida a través de InvoiceXpress.",
            lines: [
              ["Cambio de pantalla · iPhone 13", "129.00"],
              ["Protector de cristal", "9.90"],
            ],
            total: "Total (IVA incl.)",
            issued: "Factura-recibo emitida · InvoiceXpress",
            reservation: "Nueva reserva del escaparate",
            reservationItem: "Funda iPhone 13 — en Pedidos",
          },
        },
        {
          title: "Gestionar y crecer",
          text: "Compara tus precios con el mercado, ve varias tiendas en un panel, recibe diagnósticos hechos en casa y registra la jornada del equipo.",
          ui: {
            title: "Precios de mercado",
            caption: "Tabla de ejemplo de precios de mercado: mediana, rango y número de tiendas junto a tu precio.",
            head: ["Artículo", "Mediana", "Rango", "El tuyo"],
            rows: [
              ["Pantalla iPhone 13", "129", "99–159", "7", "135"],
              ["Batería iPhone 12", "59", "45–75", "5", "55"],
              ["Conector Galaxy A52", "45", "35–60", "3", ""],
            ],
            shops: "tiendas",
            note: "Un precio solo aparece cuando lo comparten 3 o más tiendas.",
          },
        },
      ],
    },
    cloud: {
      title: "La Cloud es el motor del Pro",
      lead: "OficinaOS Cloud es el puente entre la app de tu PC y el exterior. No es otro programa que aprender: se conecta una vez y trabaja entre bastidores.",
      steps: [
        { title: "Empareja una vez", text: "Crea una cuenta en cloud.oficinaos.app y pega el código de emparejamiento en Ajustes → Cloud." },
        { title: "El plan activa los módulos", text: "Con el Pro activo, los módulos del plan (y los extras que elijas) quedan disponibles en el servidor — sin archivos de licencia ni claves que instalar." },
        { title: "La app se sincroniza sola", text: "Cada ~2 minutos envía y recibe lo que necesitan los módulos — los mensajes de los clientes siguen un ciclo rápido de ~12 segundos. El PC nunca queda expuesto a internet." },
      ],
      diagram: { pc: "OficinaOS en tu PC", cloud: "OficinaOS Cloud", out: "Clientes y servicios", sync: "cada ~2 min" },
      dataTitle: "Qué va a la Cloud",
      dataText: "Solo los datos que necesita cada módulo — por ejemplo, el resumen redactado de una reparación para el portal. Sin Pro, nada sale del PC.",
      dataLink: "Privacidad, módulo a módulo",
      offline: "Sin emparejar, OficinaOS sigue funcionando en la red local — los módulos Pro simplemente no aparecen.",
      login: "¿Ya tienes cuenta? Entrar en OficinaOS Cloud",
    },
    pricing: {
      title: "Una base completa. Extras solo si los necesitas.",
      lead: "La base ya trae casi todo. Solo eliges si quieres la inteligencia artificial incluida — y añades los extras que te hagan falta.",
      planName: "OficinaOS Pro base",
      perMonth: "/mes",
      vat: "+ IVA · por cuenta, no por tienda",
      optionAi: { title: "Con IA incluida", text: "Nosotros nos encargamos del modelo de IA. No necesitas cuenta en ningún sitio." },
      optionByok: { title: "Sin IA incluida", text: "Conecta tu propia clave de IA (OpenAI, Anthropic, Gemini…) y págala al proveedor — o usa el Pro sin IA." },
      recommended: "Más sencillo",
      includedTitle: "Incluido en la base",
      included: [
        "{included} módulos: mensajes, portal, facturación, escaparate y más",
        "SMS y WhatsApp con envío y respuesta (conexión rápida por QR)",
        "Informes IA de OficinaOS Diag",
        "Hasta {shops} tiendas en la misma cuenta",
        "{conversations} conversaciones con IA al mes (con IA incluida)",
        "Sin permanencia — cancela cuando quieras",
      ],
      cta: "Probar {days} días gratis",
      conversationNote: "Una conversación son todos los mensajes de un cliente durante 24 horas: diez mensajes del mismo cliente la misma noche cuentan como una.",
      founder: {
        title: "Precio de fundador",
        text: "Los primeros {slots} clientes pagan {price}/mes por la base con IA incluida durante {months} meses.",
        cta: "Quiero ser fundador",
      },
      annual: {
        title: "Plan anual: elige tu oferta",
        optionSetup: { title: "Lo configuramos todo por ti", text: "Puesta en marcha asistida dedicada, hasta {hours} horas (valor {value}), de regalo." },
        optionMonths: { title: "{months} meses gratis", text: "Pagas 10 meses y usas 12." },
      },
      extras: {
        title: "Extras, solo si los necesitas",
        caption: "Extras del plan OficinaOS Pro",
        head: ["Extra", "Precio", "Qué añade"],
        rows: [
          ["Libro de horas", "{ponto1}/mes hasta {p1} empleados · {ponto2} hasta {p2} · {ponto3} hasta {p3}", "Los empleados fichan por WhatsApp o SMS; registros inalterables, listos para la inspección de trabajo (ACT)."],
          ["Balcão IA", "{balcaoAi}/mes con IA · {balcaoByok} con tu propia clave (misma opción de IA que la base)", "Bandeja de entrada única de WhatsApp y SMS, con un asistente de IA que resume y prepara respuestas para que el equipo las apruebe."],
          ["WhatsApp oficial de Meta", "{waMonthly}/mes + {activation} de activación", "Sin riesgo de bloqueo, botones en los mensajes y nombre de empresa verificado."],
          ["Tienda adicional (a partir de la {nextShop}.ª)", "{extraShop}/mes", "Cadenas con más de {shops} tiendas."],
          ["Paquete de conversaciones", "{packPrice} por +{packConversations}", "Meses con mucho movimiento; vale solo ese mes."],
        ],
        metaNote: "En el WhatsApp oficial, Meta cobra los mensajes directamente a tu empresa, en tu tarjeta. Incluye {metaFree} respuestas gratis al mes por número — una tienda pequeña rara vez pasa de ahí. Nosotros no cobramos nada encima.",
      },
      bundle: {
        badge: "Ahorras {saving} al mes",
        title: "Pro Completo",
        text: "Base con IA incluida + Libro de horas (hasta {pontoUpTo} empleados) + Balcão IA.",
        instead: "en vez de {full}",
        cta: "Quiero el Pro Completo",
      },
      scrollLabel: "Tabla con desplazamiento horizontal",
    },
    services: {
      title: "¿Prefieres que nos encarguemos de todo?",
      lead: "El Pro se configura solo en pocos minutos. Pero, si lo prefieres, instalamos, importamos y formamos — sin sorpresas en la factura.",
      caption: "Servicios que se pagan aparte",
      head: ["Servicio", "Precio", "Qué incluye"],
      rows: [
        ["Instalación en tu PC o en tu VPS", "{installation}", "Instalación + {supportHours} h de soporte dedicado en los primeros {supportDays} días. Presencial: desplazamiento aparte. La VPS la pagas tú a tu proveedor."],
        ["Importación de datos de otro programa", "desde {importFrom}", "Clientes y reparaciones desde Excel/CSV ({importFrom}) o desde otro programa (previo análisis). Primero hacemos una prueba gratis con una muestra."],
        ["Puesta en marcha asistida, formación y soporte", "{hourly}/hora", "Configuración contigo, formación del equipo o ayuda a medida. En bloques de {block} min, mínimo {minimum} min."],
        ["Alojamiento en nuestra VPS", "{hosting}", "Servidor en la UE con actualizaciones, seguridad y copias de seguridad diarias incluidas."],
      ],
      hostingPrice: "{withPro}/mes con el Pro · {withoutPro}/mes sin el Pro",
      tbd: "por anunciar",
      note: "La instalación y los servicios también sirven para quien solo quiere OficinaOS gratis instalado.",
      scrollLabel: "Tabla con desplazamiento horizontal",
    },
    otherBusinesses: {
      title: "¿No tienes un taller?",
      text: "Dos módulos del Pro también estarán disponibles por separado para cualquier empresa — restaurantes, tiendas, clínicas, servicios. Ya puedes apuntarte a la lista de espera.",
      more: "Saber más",
    },
    form: { title: "Empezar los {days} días gratis" },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿OficinaOS va a dejar de ser gratis?", a: "No. El programa es de código abierto (MIT) y el núcleo nunca queda detrás de un pago. El Pro añade lo que necesita internet: mensajes, portal, IA, registro de jornada y facturación." },
        { q: "¿Qué está incluido y qué es extra?", a: "La base incluye casi todo: mensajes por SMS y WhatsApp, portal del cliente, facturación, escaparate online, informes IA y más. Solo tres cosas son extras: el Libro de horas, Balcão IA y el WhatsApp oficial de Meta. Si quieres los dos primeros, el paquete Pro Completo sale más barato." },
        { q: "¿Qué es «sin IA incluida»?", a: "Puedes conectar tu propia cuenta de IA (OpenAI, Anthropic, Gemini…) y pagar la IA directamente a ese proveedor — o usar el Pro sin IA: el asistente responde solo con reglas (estado de la reparación, presupuestos, códigos). Si no sabes qué elegir, elige «con IA incluida»." },
        { q: "¿Y si paso de las conversaciones incluidas?", a: "El asistente sigue pasando los mensajes al equipo, sin responder con IA. Puedes comprar un paquete de conversaciones para ese mes o hablar con nosotros para un plan a medida." },
        { q: "¿Necesito el WhatsApp oficial de Meta?", a: "No. Por defecto conectamos el WhatsApp de la tienda por QR, sin coste por mensaje. Es una conexión no oficial, con un pequeño riesgo de bloqueo que te explicamos antes. Si no quieres ningún riesgo, activa el WhatsApp oficial (extra), y el SMS queda siempre como reserva." },
        { q: "Tengo varias tiendas. ¿Pago por cada una?", a: "No. El plan es por cuenta e incluye hasta 3 tiendas. A partir de la 4.ª, cada tienda adicional tiene un pequeño coste mensual." },
        { q: "¿Qué pasa si desconecto la Cloud?", a: "La app sigue funcionando en la red local con todos tus datos; los módulos Pro dejan de aparecer. Al desconectar, los datos de tu tienda guardados en la Cloud se borran. Los registros del libro de horas siguen disponibles en la app, como exige la ley." },
        { q: "Ya estoy en el piloto. ¿Qué cambia?", a: "Quien entró en el piloto como beta tester mantiene 3 meses gratis del OficinaOS Pro base. Los extras (libro de horas, Balcão IA, WhatsApp oficial) se pagan aparte. Quien llega ahora tiene 14 días gratis." },
      ],
    },
  },
  pontoHero: {
    titleA: "Fichar por WhatsApp.",
    titleB: "Sin apps, sin reloj, sin papel.",
    proofs: ["QR que cambia cada 30 segundos", "Confirma la red de la tienda", "Registros guardados 5 años"],
    caption: "Recreación ilustrativa con datos de ejemplo: la pantalla de fichaje de la tienda, el fichaje en el móvil y el panel del responsable.",
    screen: {
      shop: "Taller Central",
      title: "Fichaje",
      scan: "Apunta la cámara del móvil",
      codeLabel: "¿Sin cámara? Código",
      changesIn: "Cambia en",
      toast: "Rui Mendes · entrada registrada",
    },
    phone: {
      detected: "QR de la tienda reconocido",
      contact: "Taller Central",
      contactSub: "Registro horario",
      draft: "ENTRADA · Taller Central · #4821",
      reply: "Entrada registrada a las 09:02.",
      replySub: "Buen trabajo, Rui. Para la pausa, escribe PAUSA.",
      composer: "Mensaje",
    },
    panel: {
      title: "Ahora en la empresa",
      newRow: ["Rui Mendes", "Entrada 09:02", "Aprobado"],
      rows: [
        ["Ana Costa", "Entrada 08:56", "Aprobado"],
        ["Bruno Sá", "Entrada 08:58", "Aprobado"],
        ["Carla Dias", "Fuera · 08:40", "Por validar"],
      ],
    },
  },
  pontoPage: {
    waitlist: {
      note: "Solo usamos estos datos para contactarte sobre Livro de Ponto.",
      shopPlaceholder: "ej.: Café Central",
    },
    problem: {
      eyebrow: "El problema",
      title: "El registro horario es obligatorio. Y suele dar trabajo.",
      lead: "Las empresas tienen que registrar las entradas, salidas y pausas de cada trabajador y conservar esos registros durante años. En la práctica, acaba en una de estas:",
      items: [
        { title: "Hoja de papel", text: "Se olvida, se tacha, se pierde. Y es difícil demostrar que no se ha modificado." },
        { title: "Reloj de fichar", text: "Hay que comprarlo o alquilarlo, instalarlo y mantenerlo. Y no sirve para quien trabaja fuera." },
        { title: "Apps de fichaje", text: "Cada empleado instala una app, crea una cuenta y recuerda la contraseña. Muchos acaban por no usarla." },
      ],
    },
    steps: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos. El primer fichaje tarda segundos.",
      items: [
        {
          title: "Abre el enlace de tu tienda en cualquier aparato",
          text: "El ordenador del mostrador, un móvil antiguo, una tablet o la tele: sirve cualquier aparato con internet que ya tengas. Aparece un QR que cambia solo cada 30 segundos. No hay que comprar nada.",
          note: "¿No tienes ningún aparato? Imprime el cartel con el QR y pégalo en la puerta.",
        },
        {
          title: "El empleado lee el QR y pulsa enviar",
          text: "Apunta la cámara, WhatsApp se abre con el mensaje ya escrito y pulsa enviar. Listo.",
          note: "Unos 3 segundos.",
        },
        {
          title: "Tú lo ves todo en el panel",
          text: "Quién está ahora en la empresa, las horas de cada uno, retrasos y olvidos. A final de mes, exportas en PDF o Excel para tu gestor.",
          note: "En el móvil o en el ordenador.",
        },
      ],
      devices: ["Ordenador del mostrador", "Tablet", "Móvil antiguo", "Tele"],
      link: "oficinaos.app/p/taller-central",
      sent: "Enviado",
      dash: {
        title: "Ahora en la empresa",
        month: "Noviembre · horas de hoy",
        export: ["PDF", "Excel"],
        rows: [
          ["Ana Costa", "08:56", "6 h 12"],
          ["Bruno Sá", "08:58", "6 h 05"],
          ["Rui Mendes", "09:02", "5 h 58"],
        ],
      },
    },
    employee: {
      eyebrow: "Lo que ve el empleado",
      title: "Una conversación normal. Sin comandos que memorizar.",
      lead: "Conectado al Wi-Fi de la empresa, es solo esto. Con datos móviles, el sistema pide la ubicación con un toque.",
      chat: [
        ["in", "ENTRADA · Taller Central · #K7Q2"],
        ["out", "✅ Entrada registrada a las 09:02, Rui. ¡Buen trabajo!"],
      ],
      buttons: ["Pausa", "Salida"],
      tips: [
        { title: "Pausas", text: "Toca «Pausa» y después «Vuelvo»." },
        { title: "Salida", text: "Toca «Salida» y recibe el total del día." },
        { title: "Horas de la semana", text: "Escribe «horas»." },
      ],
      note: "Si escribe «he llegado» o «voy a comer», el sistema lo entiende. No hace falta escribir en mayúsculas.",
    },
    sms: {
      eyebrow: "Reserva por SMS",
      title: "¿Sin WhatsApp? El fichaje sigue por SMS.",
      lead: "WhatsApp es el camino más rápido, pero no el único. Un móvil Android de la empresa, con tarjeta SIM, recibe los fichajes por SMS. Nadie se queda sin fichar.",
      points: [
        { title: "Para quien no usa WhatsApp", text: "Lee el QR y envía por SMS el código que aparece. Funciona en cualquier móvil, incluso en los más sencillos." },
        { title: "Reserva si WhatsApp falla", text: "Si el WhatsApp de la empresa se cae o se bloquea, los empleados siguen fichando por SMS. Se cambia el número sin perder registros." },
        { title: "Registros por validar", text: "El SMS no envía ubicación, así que estos registros quedan «por validar». Los confirmas con un clic." },
        { title: "¿Sin móvil?", text: "En la pantalla de la tienda, el empleado elige su nombre y escribe un PIN personal." },
      ],
      chat: [
        ["in", "ENTRADA 4821"],
        ["out", "Entrada registrada a las 09:02, Carla. Queda por validar (SMS sin ubicación)."],
      ],
      phone: "SMS · Móvil de la empresa",
      cost: "Los SMS salen del móvil de la empresa: el coste es el de tu tarifa.",
    },
    trust: {
      eyebrow: "Registros fiables",
      title: "Tres pruebas en cada fichaje. Sin invadir la privacidad de nadie.",
      lead: "Un registro horario solo vale si es difícil hacer trampa.",
      items: [
        { title: "El QR cambia cada 30 segundos", text: "Una foto del QR no sirve más tarde, ni desde casa." },
        { title: "Sabemos si el móvil está en la red de la empresa", text: "Conectado al Wi-Fi de la empresa, el registro queda confirmado automáticamente." },
        { title: "Fuera del Wi-Fi, pedimos la ubicación", text: "Solo en ese momento, nunca durante el día, y solo la ubicación real del móvil. A más de 100 m de la empresa, el registro queda «por validar» y tú decides." },
      ],
      serverTime: "La hora es siempre la de nuestro servidor, no la del móvil. Nadie ficha «a las 9» si llegó a las 9:40.",
    },
    benefits: {
      eyebrow: "Ventajas",
      title: "Por qué es diferente",
      items: [
        { title: "Sin instalar nada", text: "Usa el WhatsApp que tus empleados ya tienen. Sin cuentas ni contraseñas." },
        { title: "Sin comprar equipos", text: "Usa un aparato que ya tienes, o un QR impreso." },
        { title: "Quien no tiene móvil también ficha", text: "Elige su nombre en la pantalla y escribe un PIN." },
        { title: "Funciona sin WhatsApp", text: "Quien no usa WhatsApp ficha por SMS." },
        { title: "Trabajo fuera incluido", text: "Comerciales, técnicos y equipos de obra escriben «entrada», comparten la ubicación y, si quieres, una foto. También sirve como prueba de visita a clientes." },
        { title: "Listo para inspecciones", text: "Registros que no se pueden borrar ni modificar. Correcciones en el historial, con quién y por qué. Guardados durante años y exportados con un clic." },
        { title: "Avisos automáticos", text: "¿Olvidó fichar la salida? El sistema le pregunta a la hora que definas y lo registra con su confirmación." },
      ],
    },
    privacy: {
      title: "Privacidad de tus empleados",
      items: [
        "No guardamos fotos: se quedan en el WhatsApp de la empresa, o en tu Google Drive u OneDrive si lo prefieres.",
        "Ubicación solo en el momento del fichaje. Nunca seguimos a nadie durante el día.",
        "Sin huellas dactilares ni reconocimiento facial.",
        "Cada empleado puede consultar sus registros cuando quiera.",
        "Hoja informativa para los trabajadores lista para imprimir y firmar, como pide el RGPD.",
      ],
    },
    needs: {
      title: "Qué necesitas para empezar",
      items: [
        { what: "Un número de WhatsApp para la empresa", level: "Obligatorio", why: "Los empleados envían a ese número. Puede ser un móvil con WhatsApp Business que ya tengas." },
        { what: "Un aparato con internet en la tienda", level: "Recomendado", why: "Para mostrar el QR que cambia solo. Sirve un ordenador, un móvil antiguo, una tablet o una tele. Sin aparato, imprimes el QR." },
        { what: "Un móvil Android con tarjeta SIM", level: "Solo para SMS", why: "Para quien no tiene WhatsApp, y como reserva si WhatsApp falla." },
      ],
      note: "Los empleados solo necesitan su propio móvil, con WhatsApp o SMS. Quien no tiene móvil usa un PIN en la pantalla.",
    },
    compare: {
      title: "Comparado con lo que existe",
      head: ["", "Papel", "Reloj de fichar", "Apps de fichaje", "Livro de Ponto"],
      rows: [
        ["Instalar algo", "Nada", "Aparato en la pared", "App en cada móvil", "Nada: usa un aparato que ya tienes"],
        ["Trabajo fuera", "Difícil", "No", "Sí", "Sí"],
        ["Prueba de presencia", "Ninguna", "Sí, en el aparato", "GPS", "QR que cambia cada 30 s + red de la empresa"],
        ["Funciona por WhatsApp", "No", "No", "Rara vez, en planes caros", "Sí, siempre"],
        ["Funciona por SMS", "No", "No", "No", "Sí"],
        ["Registros para inspección", "Frágiles", "Sí", "Sí", "Sí, inalterables"],
      ],
    },
    forWhom: {
      title: "Para quién es",
      yesTitle: "Hecho para empresas de 1 a 30 personas",
      yes: ["Restaurantes, cafeterías y pastelerías", "Talleres y tiendas de reparación", "Comercio y tiendas", "Limpieza y mantenimiento", "Construcción y obras", "Clínicas y salones", "Comerciales y técnicos en la calle"],
      noTitle: "Quizá no sea para ti",
      no: "Si necesitas gestión completa de nóminas, turnos complejos con cientos de personas o integración con grandes sistemas de RR. HH., un software de RR. HH. completo te servirá mejor.",
    },
  },
  modulePages: {
    ponto: {
      metaTitle: "Libro de horas por WhatsApp — sin apps, sin reloj, sin papel | OficinaOS",
      metaDesc:
        "Los empleados fichan por WhatsApp o por SMS, con un QR en la puerta. Registros inalterables durante 5 años, listos para la inspección de trabajo (ACT). Lista de espera abierta.",
      hero: {
        label: "Libro de horas",
        badge: "Próximamente para todas las empresas",
        title: "Fichar por WhatsApp. Sin apps, sin reloj, sin papel.",
        subtitle:
          "El empleado escanea un QR en la puerta y envía el mensaje que ya viene escrito. Tú ves en el móvil o en el ordenador quién ha llegado, a qué hora y dónde estaba.",
        cta: "Apuntarme a la lista de espera",
        ctaSecondary: "Ver cómo funciona",
        proNote: "¿Tienes un taller de reparación? El Libro de horas ya está disponible como extra de",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Libro de horas",
        caption: "Conversación de ejemplo: el empleado registra la entrada escaneando el QR y compartiendo su ubicación.",
        messages: [
          ["in", "ENTRADA · Oficina Central · #4821"],
          ["out", "¡Hola, Rui! Toca para enviar tu ubicación. 📍"],
          ["in", "📍 Ubicación compartida"],
          ["out", "✅ Entrada registrada a las 09:02. ¡Buen trabajo! Para la pausa, escribe PAUSA."],
        ],
        note: "No hace falta memorizar comandos ni escribir en mayúsculas: «ya he llegado» o «me voy a comer» también funcionan.",
      },
      problem: {
        title: "El registro de horas es obligatorio. Y suele dar trabajo.",
        lead: "En Portugal, todas las empresas tienen que registrar las entradas, salidas y pausas de cada trabajador y guardar esos registros durante 5 años (Código del Trabajo portugués, art. 202). En la práctica, acaba siendo una de estas:",
        items: [
          { title: "Hoja de papel", text: "Se olvida, se tacha, se pierde — y es difícil demostrar que no se ha modificado." },
          { title: "Reloj de fichar", text: "Hay que comprarlo o alquilarlo, instalarlo y mantenerlo. Y no sirve para quien trabaja fuera." },
          { title: "Apps de fichaje", text: "Cada empleado instala una app, crea una cuenta y se acuerda de la contraseña. Muchos acaban por no usarla." },
        ],
      },
      steps: {
        title: "Cómo funciona",
        lead: "Tres pasos. El primer registro tarda segundos.",
        items: [
          { title: "Pega el QR en la puerta", text: "Imprime el cartel con el QR de tu empresa (viene listo) y pégalo en la entrada. No necesitas tablet, pantalla ni reloj." },
          { title: "El empleado escanea y envía", text: "Apunta con la cámara, WhatsApp se abre con el mensaje ya escrito, pulsa enviar y comparte su ubicación con un toque. Pausa, regreso y salida son una sola palabra." },
          { title: "Tú lo ves todo en el panel", text: "Quién está ahora en la empresa, las horas de cada uno, retrasos y olvidos. A final de mes, lo exportas en PDF para tu gestor." },
        ],
      },
      benefits: {
        title: "Por qué es diferente",
        items: [
          { title: "Sin instalar nada", text: "Usa el WhatsApp que los empleados ya tienen. Sin cuentas ni contraseñas." },
          { title: "Sin comprar equipos", text: "Basta con un QR impreso." },
          { title: "Funciona sin WhatsApp", text: "Quien no usa WhatsApp ficha por SMS, con el código que aparece al escanear el QR." },
          { title: "Trabajo externo incluido", text: "Comerciales y técnicos registran dónde están, con ubicación y, si quieres, una foto — que también sirve como prueba de visita." },
          { title: "Listo para inspecciones", text: "Registros que no se pueden borrar ni modificar; las correcciones quedan en el historial con quién y por qué; 5 años guardados." },
          { title: "Avisos automáticos", text: "¿Se le ha olvidado registrar la salida? El sistema se lo pregunta y la registra con su confirmación." },
        ],
      },
      trust: {
        title: "Por qué puedes confiar en los registros",
        lead: "Un registro de horas solo vale si es difícil hacer trampa. Combinamos varias pruebas, sin invadir la privacidad de nadie.",
        items: [
          { title: "El código caduca en 2 minutos y solo sirve una vez", text: "Escanear el QR genera un código nuevo. Una foto del QR hecha ayer no registra nada hoy." },
          { title: "Ubicación en el momento del registro", text: "Solo en ese momento, nunca durante el día. A más de 100 m de la empresa, el registro queda «por validar» y tú decides." },
          { title: "La red de la empresa como prueba extra", text: "Si el móvil está conectado al wifi de la empresa, queda registrado como prueba adicional." },
          { title: "La hora es la de nuestro servidor", text: "Nunca la del móvil ni la escrita en el mensaje. Nadie registra «a las 9» si llegó a las 9:40." },
        ],
      },
      privacy: {
        title: "La privacidad de tus empleados",
        items: [
          "Ubicación solo en el momento del registro — nunca seguimos a nadie.",
          "Sin huellas dactilares ni reconocimiento facial.",
          "Fotos solo si la empresa las pide, y nunca guardadas en nuestros servidores.",
          "Cada empleado puede consultar sus registros.",
          "Hoja informativa para los trabajadores lista para imprimir, como exige el RGPD.",
        ],
      },
      forWhom: {
        title: "Para quién es",
        yesTitle: "Hecho para empresas de 1 a 30 personas",
        yes: ["Restaurantes y cafeterías", "Talleres y reparaciones", "Comercio y tiendas", "Limpieza y mantenimiento", "Construcción y obras", "Clínicas y salones", "Equipos en la calle"],
        noTitle: "Quizá no sea para ti",
        no: "Si necesitas una gestión completa de nóminas, turnos complejos con cientos de personas o integración con grandes sistemas de RR. HH., un software de RR. HH. completo te servirá mejor.",
      },
      needs: {
        title: "Qué necesitas para empezar",
        head: ["Qué", "¿Hace falta?", "Para qué"],
        rows: [
          ["Un número de WhatsApp para la empresa", "Sí", "Es a ese número al que los empleados envían los mensajes. Puede ser un móvil con WhatsApp Business que ya tengas."],
          ["Una impresora", "Sí", "Para imprimir el cartel con el QR (A4)."],
          ["Un móvil Android con tarjeta SIM", "Solo para SMS", "Para quien no tiene WhatsApp, y como reserva si WhatsApp falla."],
        ],
        note: "Los empleados solo necesitan su propio móvil.",
        scrollLabel: "Tabla con desplazamiento horizontal",
      },
      pricing: {
        title: "Cuánto cuesta",
        lead: "Precio sencillo según el número de empleados, sin mínimos y sin permanencia.",
        standaloneTitle: "Para cualquier empresa",
        standaloneText: "Precio por anunciar en el lanzamiento. Quien se apunte a la lista de espera recibe primero las condiciones de lanzamiento.",
        proTitle: "Para talleres de reparación",
        proText: "Extra de OficinaOS Pro, desde {pontoFrom}/mes hasta {pontoUpTo} empleados. El Pro base cuesta desde {proPrice}/mes, con {days} días gratis.",
        proLink: "Conocer OficinaOS Pro",
        note: "Los SMS salen del móvil de la empresa: el coste es el de tu tarifa.",
      },
      waitlist: {
        title: "Apúntate a la lista de espera del Libro de horas",
        subtitle: "Te avisamos en cuanto esté disponible para tu empresa — y te ayudamos a ponerlo en marcha. Sin compromiso.",
        button: "Apuntarme a la lista de espera",
      },
      faq: {
        title: "Preguntas frecuentes",
        items: [
          { q: "¿Es legal fichar por WhatsApp?", a: "La ley exige que el registro exista, indique entradas, salidas y pausas, esté accesible y se guarde 5 años. El Libro de horas está hecho para eso. Te recomendamos confirmar con tu gestor o asesor jurídico cómo lo aplicas." },
          { q: "¿Y si un empleado no tiene WhatsApp?", a: "Ficha por SMS, con el código que aparece al escanear el QR. Esos registros quedan «por validar», porque el SMS no envía la ubicación, y los confirmas con un clic." },
          { q: "¿Qué WhatsApp se usa?", a: "Por defecto, conectamos el WhatsApp de la empresa como WhatsApp Web, escaneando un QR — sin coste por mensaje. Es una conexión no oficial: en el fichaje el riesgo de bloqueo es bajo, porque son tus empleados quienes escriben. Si ocurre, se cambia de número sin perder registros y el fichaje sigue por SMS. También puedes usar el WhatsApp Business oficial de Meta." },
          { q: "¿Puedo corregir un registro?", a: "Sí. La corrección queda como una línea nueva, con quién la hizo y por qué. El registro original nunca se borra — eso es lo que le da valor al registro en una inspección." },
          { q: "¿Los empleados pueden hacer trampa?", a: "Es muy difícil: el código caduca y solo sirve una vez, la ubicación se comprueba y la hora es la del servidor. Lo que no podemos confirmar queda marcado para validar." },
          { q: "Ya uso OficinaOS. ¿Cómo lo activo?", a: "Es un extra de OficinaOS Pro: no necesitas la lista de espera. Consulta la guía del Libro de horas." },
        ],
      },
    },
    atendimento: {
      metaTitle: "Atención IA en WhatsApp — responde a los clientes incluso con el negocio cerrado | OficinaOS",
      metaDesc:
        "Un asistente que responde a los clientes por WhatsApp y SMS: horarios, precios, direcciones y dudas. Cuando no sabe, pasa la conversación a una persona. Lista de espera abierta.",
      hero: {
        label: "Atención IA",
        badge: "Próximamente para todas las empresas",
        title: "Un asistente que responde a tus clientes por WhatsApp. Incluso con el negocio cerrado.",
        subtitle:
          "Responde al momento sobre horarios, precios, direcciones y preguntas frecuentes. Cuando no sabe, pasa la conversación a una persona de tu equipo. En el número de WhatsApp que tu empresa ya usa.",
        cta: "Apuntarme a la lista de espera",
        ctaSecondary: "Ver cómo funciona",
        proNote: "¿Tienes un taller de reparación? El asistente de WhatsApp y SMS — que conoce el estado de cada reparación — ya está incluido en",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Restaurante (ejemplo)",
        caption: "Conversación de ejemplo: un cliente pregunta el horario y pide mesa fuera de horas; el asistente responde y pasa la petición al equipo.",
        messages: [
          ["in", "Buenas noches, ¿abrís mañana? ¿Y tenéis mesa para 6?"],
          ["out", "¡Buenas noches! Mañana, sábado, abrimos de 12:00 a 15:00 y de 19:00 a 23:00. 😊 Para 6 personas, un compañero confirmará la reserva. ¿Para qué hora sería?"],
          ["in", "20:30"],
          ["out", "Apuntado: 6 personas, sábado a las 20:30. El equipo te lo confirmará por aquí en cuanto abra. ¡Gracias!"],
        ],
        note: "El asistente siempre se presenta como asistente virtual y nunca se inventa nada: lo que no está en la ficha de la empresa pasa a una persona.",
      },
      problem: {
        title: "Mensajes sin respuesta son clientes perdidos",
        lead: "Los clientes escriben a cualquier hora y esperan una respuesta rápida. Sin ayuda, pasa esto:",
        items: [
          { title: "Pierdes clientes fuera de horas", text: "Quien pregunta a las 22:00 «¿abrís mañana?» y no recibe respuesta se lo pregunta a la competencia." },
          { title: "El equipo responde siempre lo mismo", text: "«¿Qué horario tenéis?», «¿Hacéis entregas?», «¿Cuánto cuesta?» — decenas de veces al día, interrumpiendo el trabajo." },
          { title: "Los mensajes se pierden", text: "Nadie sabe quién ha respondido ya, y el cliente se queda esperando." },
        ],
      },
      steps: {
        title: "Cómo funciona",
        lead: "Configurado en minutos, sin rellenar formularios.",
        items: [
          { title: "Conecta el WhatsApp de la empresa", text: "Escanea un QR con el móvil de la empresa, como en WhatsApp Web. El número sigue siendo tuyo. También existe la conexión oficial de Meta." },
          { title: "El asistente aprende cómo es tu empresa", text: "Dile el nombre de la empresa: lee tu web y tu perfil, redacta la ficha (horario, dirección, servicios, precios) y te hace media docena de preguntas sobre lo que falta. Nada se activa sin tu aprobación." },
          { title: "Responde, y el equipo se encarga del resto", text: "El asistente responde a lo que está en la ficha. Lo que no sabe, o lo que necesita a una persona, pasa al equipo con un aviso en el móvil." },
        ],
      },
      benefits: {
        title: "Qué ganas",
        items: [
          { title: "Responde las 24 horas", text: "Noches, fines de semana y festivos. El cliente siempre tiene respuesta." },
          { title: "Menos interrupciones", text: "Las preguntas repetidas dejan de llegar al equipo." },
          { title: "Nadie se queda sin respuesta", text: "Lo que el asistente no sabe pasa a una persona, con aviso." },
          { title: "En tu número", text: "Los clientes escriben al WhatsApp de siempre." },
          { title: "También por SMS", text: "Los clientes sin WhatsApp reciben respuesta por SMS; si WhatsApp falla, el SMS garantiza los avisos." },
          { title: "Sigue aprendiendo", text: "Cuando el equipo responde a una pregunta nueva, el asistente propone guardarla para la próxima vez." },
        ],
      },
      trust: {
        title: "Qué hace — y qué no hace",
        lead: "Un asistente útil es un asistente que conoce sus límites.",
        items: [
          { title: "Responde solo con lo que la empresa ha aprobado", text: "Horarios, dirección, servicios, precios orientativos, condiciones y preguntas frecuentes de tu ficha." },
          { title: "Recoge peticiones, no las confirma", text: "Reservas, presupuestos y contactos pasan al equipo: quien confirma es siempre una persona." },
          { title: "Nunca se inventa nada", text: "Sin precios, plazos ni promesas fuera de la ficha. Ante la duda, dice que el equipo responderá." },
          { title: "Nunca finge ser una persona", text: "Se presenta como asistente virtual, y el cliente puede pedir hablar con alguien en cualquier momento." },
        ],
      },
      privacy: {
        title: "Los datos de tus clientes",
        items: [
          "La IA solo ve la ficha de la empresa y la conversación con ese cliente.",
          "Las conversaciones no se usan para entrenar modelos de IA.",
          "Servidores en la Unión Europea, separados por empresa.",
          "Puedes revisar todas las conversaciones en el panel y tomar el control de cualquiera.",
        ],
      },
      forWhom: {
        title: "Para quién es",
        yesTitle: "Para negocios que reciben mensajes todos los días",
        yes: ["Restaurantes", "Tiendas y comercio", "Clínicas y salones", "Alojamientos turísticos", "Talleres y servicios", "Gimnasios"],
        noTitle: "Quizá no sea para ti",
        no: "Si recibes pocos mensajes a la semana, responder a mano sigue siendo lo más sencillo. Si necesitas un centro de atención con decenas de operadores, una plataforma de contact center te servirá mejor.",
      },
      needs: {
        title: "Qué necesitas para empezar",
        head: ["Qué", "¿Hace falta?", "Para qué"],
        rows: [
          ["Un móvil con el WhatsApp de la empresa", "Sí (conexión rápida)", "El asistente responde en ese número. Queda conectado a internet."],
          ["Los datos de la empresa en Meta", "Solo con WhatsApp oficial", "NIF, dirección y un número para verificar. Nosotros nos encargamos del resto."],
          ["Un móvil Android con tarjeta SIM", "Solo para SMS", "Para clientes sin WhatsApp, y como reserva."],
        ],
        note: "No necesitas web ni tienda online — pero, si las tienes, el asistente aprende de ellas.",
        scrollLabel: "Tabla con desplazamiento horizontal",
      },
      pricing: {
        title: "Cuánto cuesta",
        lead: "Cuota mensual fija con conversaciones incluidas, sin coste por mensaje en la conexión rápida y sin permanencia.",
        standaloneTitle: "Para cualquier empresa",
        standaloneText: "Precio por anunciar en el lanzamiento, con la opción de usar tu propia clave de IA. Quien se apunte a la lista de espera recibe primero las condiciones de lanzamiento.",
        proTitle: "Para talleres de reparación",
        proText: "El asistente de WhatsApp y SMS ya está incluido en OficinaOS Pro, desde {proPrice}/mes, con {days} días gratis.",
        proLink: "Conocer OficinaOS Pro",
        note: "Con el WhatsApp oficial de Meta, Meta cobra los mensajes directamente a tu empresa, con 1000 respuestas gratis al mes.",
      },
      waitlist: {
        title: "Apúntate a la lista de espera de Atención IA",
        subtitle: "Te avisamos en cuanto esté disponible para tu empresa — y te ayudamos a configurarlo. Sin compromiso.",
        button: "Apuntarme a la lista de espera",
      },
      faq: {
        title: "Preguntas frecuentes",
        items: [
          { q: "¿El asistente puede dar respuestas equivocadas?", a: "Puede equivocarse, como cualquier persona. Por eso solo responde con lo que está en tu ficha, nunca se inventa precios ni plazos y pasa al equipo cuando tiene dudas. Puedes revisar todas las conversaciones y mejorar la ficha." },
          { q: "¿Los clientes saben que están hablando con una máquina?", a: "Sí. El asistente se presenta como asistente virtual, y el cliente puede pedir hablar con una persona en cualquier momento." },
          { q: "¿Qué WhatsApp se usa?", a: "Por defecto, la conexión rápida: conectamos el WhatsApp de la empresa escaneando un QR, sin coste por mensaje. Es no oficial, con un pequeño riesgo de bloqueo que reducimos (solo responde a quien escribe, nunca envía mensajes masivos, ritmo humano). Si no quieres ningún riesgo, usa el WhatsApp oficial de Meta." },
          { q: "¿El equipo puede seguir respondiendo?", a: "Sí. Puedes tomar el control de cualquier conversación en cualquier momento, y el asistente deja de responder en esa conversación." },
          { q: "¿Funciona con mi programa de gestión?", a: "Para preguntas generales no hace falta integración. Para consultar pedidos o servicios, hacemos la integración a medida." },
          { q: "Tengo un taller. ¿Necesito esto?", a: "No: OficinaOS Pro ya incluye el asistente de WhatsApp y SMS, y ese conoce el estado de cada reparación." },
        ],
      },
    },
  },
  pricingPage: {
    navLabel: "Precios",
    metaTitle: "Precios — OficinaOS gratis, OficinaOS Pro desde 39 €/mes, extras y servicios",
    metaDesc:
      "Todos los precios de OficinaOS en un solo lugar: programa gratis, OficinaOS Pro con o sin IA incluida, extras (Libro de horas, Balcão IA, WhatsApp oficial), servicios y calculadora.",
    hero: {
      title: "Precios sencillos, sin sorpresas",
      lead: "El programa es gratis. OficinaOS Pro tiene una base con casi todo y extras solo para quien los necesita. Haz las cuentas con la calculadora.",
    },
    jump: { label: "Ir a", calc: "Calculadora", plans: "OficinaOS y Pro", extras: "Extras", services: "Servicios", modules: "Otras empresas" },
    calc: {
      title: "Calcula tu precio",
      lead: "Elige lo que necesitas. El total se actualiza al momento.",
      typeLabel: "Tu negocio",
      typeShop: "Taller o tienda de reparación",
      typeOther: "Otro tipo de empresa",
      aiLabel: "Inteligencia artificial",
      shopsLabel: "Número de tiendas",
      pontoLabel: "Libro de horas",
      pontoNone: "No lo necesito",
      pontoTier: "Hasta {n} empleados",
      extrasLabel: "Otros extras",
      balcaoLabel: "Balcão IA — bandeja de entrada con asistente de IA para el equipo",
      waLabel: "WhatsApp oficial de Meta — sin riesgo de bloqueo",
      monthlyLabel: "Total al mes",
      firstMonthLabel: "El primer mes, con la activación del WhatsApp oficial:",
      bundleApplied: "Paquete Pro Completo aplicado",
      noscript: "Activa JavaScript para usar la calculadora; los precios están en las tablas de abajo.",
      otherTitle: "Para tu empresa: lista de espera",
      otherText: "El Libro de horas y la Atención IA estarán disponibles, por separado, para cualquier empresa. Los precios se anunciarán en el lanzamiento — apúntate a la lista de espera para recibirlos primero.",
      lines: {
        baseAi: "OficinaOS Pro base (con IA)",
        baseOwn: "OficinaOS Pro base (sin IA incluida)",
        shops: "Tiendas adicionales ({n})",
        ponto: "Libro de horas (hasta {n} empleados)",
        balcao: "Balcão IA",
        wa: "WhatsApp oficial",
        bundle: "Descuento Pro Completo",
      },
    },
    plans: {
      title: "OficinaOS y OficinaOS Pro",
      lead: "El programa es gratis para siempre. Pro añade lo que necesita internet.",
      head: ["Plan", "Precio/mes", "Para quién"],
      rows: [
        ["OficinaOS", "0 €", "Cualquier taller: reparaciones, presupuestos, stock y caja, en tu PC. Sin mensajes a los clientes."],
        ["OficinaOS Pro base — sin IA incluida", "{proByok}", "Mensajes, portal, facturación y más, con tu propia clave de IA o sin IA."],
        ["OficinaOS Pro base — con IA incluida", "{proAi}", "Lo mismo, con el asistente de IA incluido (3.000 conversaciones al mes)."],
        ["Pro Completo", "{bundle}", "Base con IA + Libro de horas (hasta 5 empleados) + Balcão IA."],
      ],
      more: "Ver todo lo que incluye Pro",
    },
    faq: {
      title: "Preguntas sobre precios",
      items: [
        { q: "¿Los precios incluyen IVA?", a: "No. Todos los precios son sin IVA. Las cuotas mensuales son por cuenta (no por tienda); los servicios (instalación, importación, horas) se pagan una vez o por hora." },
        { q: "¿Hay permanencia?", a: "No. Cancelas cuando quieras. En el plan anual eliges una oferta: la configuración hecha por nosotros o dos meses gratis." },
        { q: "¿Cómo pago?", a: "Durante el lanzamiento, activamos Pro contigo y te enviamos la factura. Los 14 días gratis no piden tarjeta." },
        { q: "¿Y si necesito algo diferente?", a: "Más tiendas, más conversaciones, otra IA o instalación en tu ordenador: escríbenos y te hacemos una propuesta a medida." },
      ],
    },
  },
  tradePage: {
    metaTitle: "OficinaOS Trade — piezas y equipos entre profesionales",
    metaDesc:
      "Red B2B donde técnicos y talleres verificados compran y venden móviles, piezas y lotes. Sin particulares ni comisiones. En toda la UE.",
    hero: {
      label: "OficinaOS Trade",
      badge: "Gratis en el lanzamiento",
      title: "Piezas y equipos, de profesional a profesional.",
      subtitle:
        "La red B2B donde técnicos, talleres y revendedores verificados compran y venden móviles, ordenadores, piezas y lotes entre sí. Sin particulares, sin mínimo de compra y sin comisión por operación.",
      cta: "Solicitar acceso — es gratis",
      ctaSecondary: "Ver el mercado",
      note: "Solo empresas verificadas · Toda la Unión Europea",
      frameTitle: "Mercado",
      frameCaption:
        "Recreación ilustrativa de la búsqueda de OficinaOS Trade con datos de ejemplo: la frase «10 pantallas iPhone 13 en Madrid, originales» se convierte en filtros (pieza, pantalla, original nueva, iPhone 13, Madrid, stock de al menos 10) y aparecen tres anuncios compatibles, con el precio reservado a miembros verificados.",
      query: "10 pantallas iPhone 13 en Madrid, originales",
      searchButton: "Buscar",
      aiApplied: "Filtros sugeridos por la IA a partir de su frase.",
      aiBeta: "beta",
      aiUndo: "Buscar solo el texto",
      chips: ["Pieza", "Pantalla", "Original nueva", "iPhone 13", "Madrid", "stock ≥ 10"],
      results: [
        ["Pantalla iPhone 13 OLED", "Pieza · Original nueva · Nuevo", "Madrid", "×12"],
        ["Pantallas iPhone 13 · lote", "Lote · Original nueva · Nuevo", "Madrid", "×25"],
        ["Pantalla iPhone 13 con marco", "Pieza · Original nueva · Nuevo", "Madrid", "×10"],
      ],
      priceLock: "Precio visible para miembros verificados",
    },
    how: {
      title: "Cómo funciona",
      lead: "De la solicitud de acceso a la operación cerrada, en tres pasos.",
      steps: [
        {
          title: "Solicite acceso con su empresa",
          text: "En España y en el resto de la UE, el NIF-IVA intracomunitario comprobado en VIES y el documento de registro de la empresa. En Portugal, el NIF y el código de la certidão permanente, o el alta de actividad si trabaja por cuenta propia. Algunas solicitudes se aprueban al momento; el resto las revisa una persona.",
        },
        {
          title: "Publique lo que tiene, pida lo que le falta",
          text: "Equipos completos, piezas, unidades «para piezas» y lotes. O cree una solicitud «Busco»: quien tiene stock compatible recibe el aviso y usted recibe las alertas.",
        },
        {
          title: "Proponga y cierre con registro",
          text: "Propuesta, contrapropuesta y acuerdo quedan registrados con los datos para la factura. El pago es directo entre las empresas y las valoraciones solo se abren tras la recepción.",
        },
      ],
      frame: {
        title: "Acuerdos",
        caption:
          "Recreación ilustrativa de un acuerdo en OficinaOS Trade con datos de ejemplo: 12 pantallas iPhone 13 OLED, con los pasos aceptado, pagado y enviado completados; el siguiente paso del comprador es confirmar la recepción.",
        deal: "Pantalla iPhone 13 OLED · ×12",
        sides: "Vendedor ⇄ Comprador",
        steps: ["Aceptado", "Pagado", "Enviado", "Recibido", "Cerrado"],
        yourTurn: "El siguiente paso es suyo",
        action: "Confirmar recepción",
        explainer: "El pago va directo a la contraparte — la plataforma no mueve dinero.",
      },
    },
    catalog: {
      title: "Equipos, piezas y lotes",
      lead: "Cada anuncio dice qué es, en qué estado está y cuántas unidades hay, con los mismos términos para toda la red.",
      groups: [
        { title: "Equipos", items: ["Móvil", "Tablet", "Portátil", "Sobremesa", "Reloj", "Consola"] },
        { title: "Piezas", items: ["Pantalla", "Batería", "Placa", "Cámara", "Tapa trasera", "Conector de carga", "Altavoz", "Chasis"] },
        { title: "Calidad de la pieza", items: ["Original nueva", "Original recuperada", "Service pack", "Compatible premium", "Compatible"] },
        { title: "Estado", items: ["Nuevo", "Como nuevo", "Buen estado", "Aceptable", "Para piezas"] },
      ],
      volume:
        "Para volumen: lotes, tramos de precio por cantidad (1, 10+, 50+), cantidad mínima y plazo de envío — o recogida en mano. Sin mínimo de compra: se puede operar desde una unidad.",
    },
    trust: {
      title: "Solo entran profesionales",
      lead: "Lo que separa Trade de un grupo de WhatsApp o de una web de anuncios.",
      items: [
        { title: "Solo empresas verificadas", text: "Cada miembro es una empresa o un profesional dado de alta, comprobado por su número fiscal y por documento. Sin particulares." },
        { title: "Precios solo para verificados", text: "Quien está fuera ve que hay stock, pero nunca el precio ni quién vende." },
        { title: "Contactos fuera de los anuncios", text: "Teléfonos, emails e IBAN escritos en un anuncio quedan ocultos para quien aún no está verificado." },
        { title: "Periodo de prueba", text: "Los miembros nuevos empiezan con un límite de propuestas abiertas y un tope por operación." },
        { title: "Valoraciones tras recibir", text: "Solo se valora después de la recepción. Si algo sale mal, se abre una disputa y la moderación media — las valoraciones quedan bloqueadas hasta resolverla." },
        { title: "Denuncias con consecuencias", text: "Fraude, equipo robado o información incorrecta: la denuncia va a moderación, y las denuncias repetidas de miembros verificados suspenden la cuenta hasta su revisión." },
      ],
      note: "El IMEI nunca aparece completo: solo se guarda como hash, con los 4 últimos dígitos. La cuenta se bloquea tras intentos de acceso fallidos, la contraseña se recupera con un enlace de un solo uso y puede exportar o eliminar sus datos (RGPD).",
    },
    tools: {
      title: "Pensado para volumen",
      lead: "Menos formularios, más stock publicado.",
      beta: "beta",
      items: [
        { title: "Publicar en 30 s", text: "Foto, modelo, estado y precio. El resto sale de su último anuncio.", beta: false },
        { title: "Rellenar con IA", text: "La IA sugiere los campos a partir de las fotos o de una frase. No se publica nada sin su confirmación.", beta: true },
        { title: "Búsqueda en lenguaje natural", text: "Escriba como habla: la frase se convierte en filtros que puede quitar uno a uno.", beta: true },
        { title: "Importar y editar en tabla", text: "CSV o XLSX para crear o actualizar anuncios en lote, y edición masiva de precios, cantidades y tramos.", beta: false },
        { title: "Solicitudes «Busco» con alertas", text: "Diga qué busca y hasta qué precio. Quien tiene stock compatible recibe el aviso.", beta: false },
        { title: "Agentes IA y API", text: "Los miembros verificados pueden conectar ChatGPT, Claude o su propio agente por MCP, o usar claves API.", beta: false },
      ],
      frame: {
        title: "Publicar en 30 s",
        caption:
          "Recreación ilustrativa del formulario rápido de OficinaOS Trade con datos de ejemplo: a partir de una foto, la IA rellenó cinco campos (pieza, pantalla, iPhone 13, original nueva, 10 unidades), marcados para confirmar antes de publicar.",
        photo: "Foto 1",
        assist: "Rellenar con IA",
        fields: [
          ["Tipo de anuncio", "Pieza"],
          ["Pieza", "Pantalla"],
          ["Modelo", "iPhone 13"],
          ["Calidad", "Original nueva"],
          ["Cantidad", "10"],
        ],
        aiTag: "IA",
        done: "He rellenado 5 campos, marcados con IA. Revíselos antes de publicar.",
        publish: "Publicar",
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Cuánto cuesta?", a: "Nada durante el lanzamiento. Después habrá un plan gratis para miembros verificados y un Pro por suscripción mensual. No hay comisión por operación." },
        { q: "¿Dónde está disponible?", a: "En toda la Unión Europea: pueden solicitarlo empresas de cualquiera de los 27 países de la UE. La app está en portugués, español e inglés." },
        { q: "Trabajo por cuenta propia. ¿Puedo entrar?", a: "Sí. Trade es para técnicos independientes, talleres y revendedores. En Portugal, quien trabaja como empresario individual usa el alta de actividad en lugar de la certidão permanente." },
        { q: "¿Quién ve mis precios?", a: "Solo los miembros verificados. Quien está fuera ve que hay stock, pero nunca el precio ni quién vende." },
        { q: "¿Cómo se paga?", a: "Directamente entre empresas — la plataforma no mueve dinero. Trade registra la propuesta y el acuerdo con los datos para la factura, y las valoraciones solo cuentan tras la recepción." },
        { q: "¿Puedo vender a particulares?", a: "No. Trade es solo entre profesionales." },
        { q: "¿Necesito usar OficinaOS?", a: "No. Trade es un producto aparte: cualquier empresa se registra directamente, use o no OficinaOS." },
      ],
    },
    cta: {
      title: "Entre en la red",
      lead: "Gratis durante el lanzamiento para técnicos, talleres y revendedores verificados en toda la Unión Europea.",
      primary: "Solicitar acceso — es gratis",
      secondary: "Ver el mercado",
      member: "¿Ya es miembro?",
      signin: "Entrar en Trade",
    },
  },
  footer: {
    license: "Licencia MIT",
    credits: "Basado en el proyecto de código abierto",
    rights: "Software libre para técnicos, talleres y revendedores.",
    contact: "Contacto",
    community: "Comunidad",
    privacy: "Privacidad",
    terms: "Términos",
    madeBy: "Hecho por",
    madeIn: "en Portugal",
    tagline: "Software libre para quien repara, diagnostica y revende tecnología.",
    columns: { products: "Productos", resources: "Recursos", community: "Comunidad", project: "Proyecto" },
    guide: "Guía completa",
    updates: "Novedades",
    install: "Instalar",
    releases: "Versiones y notas de lanzamiento",
    source: "Código fuente",
    designedBy: "Diseñado y desarrollado por",
    externalHint: "se abre en otra pestaña",
  },
};

// Páginas de contenido SEO (casos de uso y comparaciones), misma estructura que `t.seoPage`.
// No forman parte de `Copy` — las páginas en src/pages/es/ las importan directamente.
export const seoPages = {
  softwareAssistenciaTecnica: {
    metaTitle: "Software para servicio técnico — gratis y en español",
    metaDesc:
      "Programa de gestión para servicio técnico de móviles: fichas de reparación, presupuestos, stock y caja. Gratis, con los datos en el PC de la tienda.",
    badge: "Software libre · Hecho en Portugal",
    title: "Software para servicios técnicos de móviles",
    subtitle:
      "Fichas de reparación, presupuestos que el cliente aprueba en su móvil, stock y caja — en un programa gratis que corre en el PC de la tienda, incluso sin internet.",
    ctaTitle: "¿Listo para probarlo?",
    ctaText:
      "Descarga, instala en el PC de la tienda y haz la primera ficha hoy. Sin cuenta, sin tarjeta, sin cuotas mensuales.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    answer: "OficinaOS es un programa gratis (licencia MIT) para gestionar un servicio técnico de móviles: fichas de reparación, presupuestos aprobados online, stock, caja y seguimiento por el cliente — corre en el PC de la tienda y funciona sin internet.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿OficinaOS es realmente gratis?", a: "Sí. La licencia es MIT: el núcleo — reparaciones, presupuestos, stock, TPV y copias de seguridad — es gratuito para siempre, sin cuenta obligatoria. OficinaOS Pro es un plan opcional." },
      { q: "¿Funciona sin internet?", a: "Sí. La aplicación corre en un PC dentro de la tienda y sirve a los demás dispositivos por la red local. Si internet falla, la tienda sigue trabajando." },
      { q: "¿Dónde quedan los datos de mis clientes?", a: "En el PC de tu tienda. No hay telemetría y nada sale de la red local a menos que actives un módulo Pro — lo que simplifica el cumplimiento del RGPD." },
    ],
    sections: [
      {
        heading: "Lo que un servicio técnico necesita cada día",
        paragraphs: [
          "Un servicio técnico vive de órdenes de trabajo: cada equipo que entra necesita ficha, presupuesto, piezas reservadas y un estado que el cliente pueda consultar. OficinaOS cubre ese ciclo completo, de la recepción a la entrega.",
        ],
        list: [
          "Ficha de entrada con marca, modelo, IMEI, estado y accesorios, firmada por el cliente",
          "Presupuestos con piezas y mano de obra, aprobados o rechazados en la página de seguimiento",
          "Estados de reparación claros para quien está en el banco, con técnico asignado",
          "Stock con alertas de reposición y piezas descontadas automáticamente",
          "Caja / TPV para vender accesorios y registrar efectivo, tarjeta y Bizum",
          "Ticket con QR de seguimiento y garantía; factura certificada con el módulo Pro",
          "SMS automáticos al cliente cuando la reparación está lista (módulo Pro)",
        ],
      },
      {
        heading: "Por qué es diferente de los programas habituales",
        paragraphs: [
          "Los programas de servicio técnico más conocidos son servicios en la nube, con cuota mensual por puesto y los datos de los clientes en los servidores del proveedor. OficinaOS es software libre (licencia MIT) instalado en el PC de la tienda: gratis para siempre, sin telemetría, y los datos de los clientes quedan dentro de la tienda.",
          "Los módulos Pro opcionales — portal del cliente en la nube, bot de WhatsApp, tienda online, precios de mercado, multi-tienda — forman parte de OficinaOS Pro, un plan opcional. El núcleo diario nunca queda detrás de un pago.",
        ],
        links: [
          { label: "Módulos Pro", href: "/es/pro" },
          { label: "Política de privacidad", href: "/es/privacy" },
        ],
      },
      {
        heading: "Funciona sin internet",
        paragraphs: [
          "La aplicación corre en un PC dentro de la tienda y sirve a los demás dispositivos por la red local — móviles, tablets y el PC de recepción abren la dirección en el navegador sin instalar nada. Si internet falla, la tienda sigue trabajando.",
          "En Windows 10/11 el instalador lo hace todo; también hay paquete portátil para correr desde una carpeta (o USB) e imagen Docker para Linux y macOS.",
        ],
        links: [
          { label: "Guía de instalación paso a paso", href: "/es/docs" },
          { label: "Novedades y versiones", href: "/es/updates" },
        ],
      },
    ],
  },
  paraTecnicosIndependentes: {
    metaTitle: "Software para técnico de reparación independiente — gratis",
    metaDesc:
      "Para quien repara móviles solo: fichas de clientes, presupuestos y seguimiento en el móvil, gratis y sin cuota mensual. Corre en un PC Windows.",
    badge: "Caso de uso · Técnico independiente",
    title: "Reparar solo no significa gestionar solo",
    subtitle:
      "Si trabajas por tu cuenta — en casa, en un espacio compartido o en un mercado — OficinaOS te da fichas, presupuestos y una página de seguimiento profesional, gratis.",
    ctaTitle: "Pruébalo en tu próxima reparación",
    ctaText:
      "Instálalo en tu PC y haz la primera ficha hoy. Sin cuenta, sin tarjeta, sin cuotas mensuales.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    answer: "Para un técnico de reparación independiente, OficinaOS da fichas de clientes, presupuestos y una página de seguimiento profesional — gratis, en un PC Windows, sin cuota mensual.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Funciona en un PC normal?", a: "Sí. Corre en un PC Windows — probablemente el que ya tienes en el banco. Los clientes no instalan nada: siguen el estado en el navegador del móvil." },
      { q: "¿Cuánto cuesta para un técnico solo?", a: "Cero. La licencia es MIT y el uso diario es gratuito. Los módulos Pro opcionales se añaden solo cuando tengan sentido." },
      { q: "¿Y si abro una tienda con empleados?", a: "No necesitas cambiar de programa: el mismo OficinaOS sirve varios puestos en la red local, con perfiles de permisos por persona." },
    ],
    sections: [
      {
        heading: "Menos papel, menos llamadas",
        paragraphs: [
          "Quien trabaja solo pierde tiempo respondiendo a «¿ya está listo?» y buscando fichas en papel o en WhatsApp. OficinaOS guarda cada reparación con cliente, equipo, estado y presupuesto — y el cliente lo sigue todo en una página pública, sin llamarte.",
        ],
        list: [
          "Ficha completa por reparación: cliente, IMEI, estado y accesorios",
          "Presupuesto aprobado por el cliente en la página de seguimiento, con registro de la hora",
          "Página de seguimiento por reparación — gratis en la red de la tienda; fuera de ella, con el módulo Pro",
          "Historial buscable: clientes habituales y reparaciones anteriores aparecen enseguida",
          "Ticket con QR de seguimiento y garantía en la entrega",
        ],
      },
      {
        heading: "Profesional sin costes fijos",
        paragraphs: [
          "Para un técnico independiente, una cuota de 20–60 € es una parte real de los ingresos. OficinaOS es gratis (licencia MIT): las mismas funciones del día a día que los programas de pago, sin cuenta obligatoria ni telemetría.",
          "Corre en un PC Windows — probablemente el que ya tienes en el banco — y los clientes no instalan nada: siguen el estado en el navegador del móvil.",
        ],
      },
      {
        heading: "Crece cuando crezcas",
        paragraphs: [
          "Si mañana abres tienda o contratas a alguien, no necesitas cambiar de programa: el mismo OficinaOS sirve varios puestos en la red local, con perfiles de permisos por persona. Y los módulos Pro opcionales — bot de WhatsApp, tienda online, facturación certificada — se añaden cuando tengan sentido.",
        ],
        links: [
          { label: "Módulos Pro", href: "/es/pro" },
          { label: "Documentación", href: "/es/docs" },
        ],
      },
    ],
  },
  deixarExcelPapel: {
    metaTitle: "Dejar el Excel y el papel en tu taller — cómo y por qué",
    metaDesc:
      "Comparado con papel y Excel, un programa de gestión da al taller fichas buscables, presupuestos aprobados online y menos llamadas. OficinaOS es gratis.",
    badge: "Comparación · Papel/Excel vs programa",
    title: "Del papel y del Excel a un programa de gestión",
    subtitle:
      "El papel no avisa al cliente, el Excel no guarda quién aprobó el presupuesto, y ambos cuestan horas. Mira qué cambia en la práctica — y cuánto cuesta cambiar (nada).",
    ctaTitle: "Cambia en una tarde",
    ctaText:
      "Instala OficinaOS en el PC de la tienda y haz la primera ficha hoy. Sin cuenta, sin tarjeta, sin cuotas mensuales.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    answer: "Migrar del papel y del Excel a OficinaOS cuesta una tarde: se instala en el PC de la tienda y las fichas nuevas pasan a entrar en el programa. El cliente pasa a ver el estado de la reparación solo y el presupuesto queda aprobado con registro.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Tengo que importar los registros antiguos?", a: "No. No hay importación obligatoria — las fichas nuevas entran en el programa y los registros antiguos pueden quedar en papel." },
      { q: "¿Los demás dispositivos de la tienda necesitan instalar algo?", a: "No. Móviles, tablets y el PC de recepción abren el programa en el navegador por la red local." },
      { q: "¿Qué gano en el día a día?", a: "Fichas buscables por cliente, IMEI o fecha; presupuestos aprobados online con registro de la hora; y menos llamadas de «¿ya está listo?»." },
    ],
    sections: [
      {
        heading: "Lo que el papel y el Excel no hacen",
        paragraphs: [
          "El papel y el Excel «funcionan» porque no cuestan dinero — pero cobran en tiempo y en errores. Estos son los puntos donde un taller pierde más:",
        ],
        list: [
          "El cliente llama para preguntar el estado; cada llamada interrumpe una reparación",
          "El presupuesto queda aprobado «por teléfono» — sin registro de cuándo ni de quién",
          "Fichas buscables por memoria o carpeta, no por cliente, IMEI o fecha",
          "El stock baja cuando se usa la pieza — pero nadie lo registra, y la reposición falla",
          "No hay historial fiable de márgenes, ingresos o tiempo medio de reparación",
        ],
      },
      {
        heading: "Cara a cara",
        paragraphs: [],
        table: {
          head: ["", "Papel / Excel", "OficinaOS"],
          rows: [
            ["Estado de la reparación", "El cliente telefonea", "Página pública que el cliente consulta solo"],
            ["Aprobación del presupuesto", "Verbal, sin registro", "Online, con fecha y hora registradas"],
            ["Buscar una ficha", "Hojear carpetas", "Por cliente, equipo, IMEI o fecha"],
            ["Stock de piezas", "Recontar a mano", "Descontado en la reparación, con alertas de reposición"],
            ["Caja del día", "Contar al cerrar", "Registrada en el TPV, por método de pago"],
            ["Coste", "«Gratis», caro en tiempo", "Gratis (MIT)"],
          ],
        },
      },
      {
        heading: "La migración en la práctica",
        paragraphs: [
          "No hay importación obligatoria ni formación: se instala en el PC de la tienda en minutos y las fichas nuevas pasan a entrar en el programa. Los registros antiguos pueden quedar en papel — lo importante es que las reparaciones de mañana ya nazcan organizadas.",
          "Los demás dispositivos de la tienda (móviles, tablets, el PC de recepción) abren el programa en el navegador por la red local, sin instalar nada — y funciona incluso sin internet.",
        ],
        links: [
          { label: "Guía de instalación paso a paso", href: "/es/docs" },
          { label: "Software para servicio técnico", href: "/es/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  softwarePagoVsOficinaOS: {
    metaTitle: "Programa con cuota mensual u OficinaOS gratis — comparación",
    metaDesc:
      "Software de gestión para talleres: 20–60 €/mes en la nube vs OficinaOS gratis en tu PC. Compara coste, datos de los clientes y funcionamiento sin internet.",
    badge: "Comparación · Cuota vs gratis",
    title: "¿Programa con cuota mensual u OficinaOS gratis?",
    subtitle:
      "La mayoría de los programas para talleres cobra por puesto cada mes. OficinaOS es software libre instalado en tu PC. Compara las diferencias que cuentan.",
    ctaTitle: "Compara con lo que pagas hoy",
    ctaText:
      "Descarga y pruébalo junto al programa actual. Sin cuenta, sin tarjeta, sin cuotas mensuales.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    answer: "Un SaaS típico cobra 20–60 € al mes por puesto y guarda los datos en la nube del proveedor. OficinaOS es gratis (MIT), corre en el PC de la tienda y los datos de los clientes quedan ahí — los módulos Pro son opcionales.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Cuál es la diferencia de coste real?", a: "Los programas SaaS para talleres cuestan típicamente 20–60 €/mes por puesto, y las funciones de cara al cliente quedan en planes más caros. El núcleo de OficinaOS cuesta 0 €." },
      { q: "¿Mis datos salen de la tienda?", a: "No. La base de datos queda en el PC de la tienda — sin telemetría y sin subcontratados, a menos que actives un módulo Pro." },
      { q: "¿Y si internet falla?", a: "La tienda sigue trabajando: la aplicación corre localmente y sirve a los dispositivos por la red interna." },
    ],
    sections: [
      {
        heading: "El modelo de coste",
        paragraphs: [
          "Los programas habituales para servicio técnico son SaaS: cuota mensual por puesto o por técnico, típicamente 20–60 €/mes, y las funciones de cara al cliente — portal, notificaciones — entran en planes más caros. Al cabo de un año son cientos de euros, todos los años.",
          "OficinaOS es licencia MIT: la aplicación completa — reparaciones, presupuestos, stock, TPV, copias de seguridad — es gratuita para siempre, para un puesto o diez. Los módulos Pro (portal en la nube, bot de WhatsApp, tienda online, multi-tienda) forman parte de OficinaOS Pro, un plan opcional, para quien los necesite.",
        ],
      },
      {
        heading: "Dónde quedan los datos de tus clientes",
        paragraphs: [
          "En un SaaS, los datos de tus clientes viven en los servidores del proveedor — con subcontratados y, muchas veces, transferencias fuera de la UE que declarar en el RGPD. En OficinaOS, la base de datos está en el PC de tu tienda: no hay telemetría y nada sale de la red local a menos que actives un módulo Pro.",
          "Para la mayoría de las tiendas esto simplifica el cumplimiento: menos subcontratados, menos transferencias, y la tienda sigue funcionando si internet falla.",
        ],
        links: [{ label: "Política de privacidad", href: "/es/privacy" }],
      },
      {
        heading: "Cara a cara",
        paragraphs: [],
        table: {
          head: ["", "SaaS típico", "OficinaOS"],
          rows: [
            ["Coste", "20–60 €/mes por puesto", "Gratis (MIT); módulos Pro opcionales"],
            ["Datos de los clientes", "En la nube del proveedor", "En el PC de tu tienda"],
            ["Funciona sin internet", "Normalmente no", "Sí — sirve a la tienda por la red local"],
            ["Seguir la reparación", "A veces, en planes caros", "Página pública incluida, gratis"],
            ["Código abierto", "Raramente", "MIT — el programa es tuyo"],
            ["Dependencia", "Cuota continua", "Código abierto — te vas cuando quieras"],
          ],
        },
      },
      {
        heading: "Cuándo el Pro tiene sentido",
        paragraphs: [
          "Los módulos Pro añaden lo que realmente necesita salir de la tienda: portal del cliente en la nube, bot de WhatsApp, facturación certificada (solo Portugal), tienda online, precios de mercado, multi-tienda y remarketing. Están incluidos en OficinaOS Pro, un plan opcional con 14 días gratis.",
        ],
        links: [
          { label: "Módulos Pro", href: "/es/pro" },
          { label: "Documentación", href: "/es/docs" },
        ],
      },
    ],
  },
  softwareDeGestaoOficina: {
    metaTitle: "Software de gestión para taller — gratis y de código abierto",
    metaDesc:
      "OficinaOS es un programa de gestión de taller gratis (MIT): fichas de reparación, clientes, presupuestos y seguimiento en la red de la tienda.",
    badge: "Guía · Gestión de taller",
    title: "Un programa de gestión que no cobra por existir",
    subtitle:
      "OficinaOS es el software de gestión de tu taller de reparación: cada reparación con cliente, equipo, estado y presupuesto — gratis, offline-first y de código abierto.",
    ctaTitle: "Instálalo hoy mismo",
    ctaText:
      "Descarga el instalador Windows o corre `docker compose up` en Linux. Primera ficha en minutos.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la guía de instalación",
    answer: "OficinaOS es un software de gestión de taller de reparación gratuito (licencia MIT): cada reparación tiene cliente, equipo, estado y presupuesto, con seguimiento en el móvil del cliente — offline-first y de código abierto.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Qué sustituye en el día a día?", a: "El cuaderno y el Excel: fichas buscables con fotos, IMEI, estado, presupuesto e historial del cliente, más ticket con QR y garantía." },
      { q: "¿Sirve para varios puestos?", a: "Sí — varios puestos en la misma red local, con perfiles de permisos por persona." },
      { q: "¿Es realmente gratuito?", a: "Sí, licencia MIT y código abierto, sin cuenta obligatoria ni telemetría. Los datos quedan en el PC de la tienda." },
    ],
    sections: [
      {
        heading: "Lo que el programa hace por ti",
        paragraphs: [
          "Un taller vive de fichas: quién entregó qué, cuándo, por cuánto. OficinaOS sustituye el cuaderno y el Excel por fichas buscables con fotos, IMEI, estado, presupuesto e historial del cliente.",
        ],
        list: [
          "Ficha por reparación con cliente, equipo y estado",
          "Presupuesto con aprobación del cliente registrada",
          "Ticket con QR de seguimiento y garantía",
          "Varios puestos en la misma red local, con perfiles de permisos",
          "Seguimiento de la reparación en el móvil del cliente — gratis en la red de la tienda",
        ],
      },
      {
        heading: "Gratis de verdad, sin asteriscos",
        paragraphs: [
          "Licencia MIT, código abierto, sin cuenta obligatoria ni telemetría. Los datos quedan en el PC de tu tienda — no en la nube de un proveedor que puede subir el precio mañana.",
          "Los módulos Pro opcionales (facturación certificada, bot de WhatsApp, tienda online) se añaden cuando tengan sentido — nunca para desbloquear lo básico.",
        ],
        links: [
          { label: "Software de pago vs OficinaOS", href: "/es/software-pago-vs-oficinaos" },
          { label: "Dejar el Excel y el papel", href: "/es/deixar-excel-papel" },
          { label: "Documentación", href: "/es/docs" },
        ],
      },
    ],
  },
  rastrearReparacaoCliente: {
    metaTitle: "El cliente sigue la reparación online — menos llamadas",
    metaDesc:
      "Página de seguimiento por reparación: el cliente ve el estado en su móvil sin llamar a la tienda. Gratis en la red local con OficinaOS.",
    badge: "Caso de uso · Seguimiento",
    title: "«¿Ya está listo?» deja de ser tu teléfono sonando",
    subtitle:
      "Cada reparación gana una página de seguimiento con estado en tiempo real. El cliente la sigue por el QR del ticket o por el enlace — gratis en la red de la tienda; fuera de ella, con el módulo Pro.",
    ctaTitle: "Menos llamadas desde la primera ficha",
    ctaText: "Gratis, sin cuenta, sin tarjeta.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Cómo funciona el portal",
    ctaSecondaryHref: "/docs/portal",
    answer: "Cada reparación gana una página de seguimiento con estado en tiempo real: el cliente la sigue por el QR del ticket o por el enlace, sin llamar a la tienda. Gratis en la red de la tienda; fuera de ella, con el módulo Pro.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿El cliente necesita instalar alguna app?", a: "No. Abre la página de seguimiento en el navegador del móvil y ve el estado — recibida, en diagnóstico, en reparación, lista." },
      { q: "¿La aprobación del presupuesto queda registrada?", a: "Sí. El cliente aprueba en la propia página y la ficha guarda la hora y el valor aprobado." },
      { q: "¿Funciona fuera de la red de la tienda?", a: "En la red local es gratis; el acceso desde fuera exige el módulo Pro (portal del cliente en la nube)." },
    ],
    sections: [
      {
        heading: "Cómo funciona",
        paragraphs: [
          "Al crear la ficha, el programa genera un enlace y un QR de seguimiento. El cliente abre la página en su móvil y ve el estado de la reparación — recibida, en diagnóstico, en reparación, lista — sin instalar nada.",
        ],
        list: [
          "QR en el ticket entregado en recepción",
          "Estado actualizado en tiempo real por ti en la ficha",
          "Aprobación del presupuesto en la propia página, con registro de la hora",
          "Gratis en la red de la tienda; acceso desde fuera exige el módulo Pro",
        ],
        links: [{ label: "Guía del portal del cliente", href: "/es/docs" }],
      },
      {
        heading: "El efecto en la tienda",
        paragraphs: [
          "Cada llamada «¿ya está?» cuesta 2-3 minutos de banco. En una tienda con 20 reparaciones abiertas son horas por semana. La página de seguimiento responde antes de que el cliente llame.",
        ],
        table: {
          head: ["", "Sin seguimiento", "Con OficinaOS"],
          rows: [
            ["El cliente sabe el estado", "Llama a la tienda", "Lo ve en su móvil"],
            ["Aprobación del presupuesto", "Llamada o mensaje", "Botón en la página, con registro"],
            ["Confianza", "«Estoy en ello»", "Estado real visible"],
          ],
        },
      },
    ],
  },
  orcamentosAprovadosOnline: {
    metaTitle: "Presupuestos aprobados online — con registro y hora",
    metaDesc:
      "Presupuestos de reparación aprobados por el cliente en la página de seguimiento, con registro de la hora y del valor. Sin llamadas ni capturas de WhatsApp.",
    badge: "Caso de uso · Presupuestos",
    title: "Presupuesto aprobado es presupuesto registrado",
    subtitle:
      "En vez de «aprobar por teléfono y olvidar», el cliente aprueba el presupuesto en la página de seguimiento — y la aprobación queda registrada con hora y valor en la ficha.",
    ctaTitle: "Pruébalo en el próximo presupuesto",
    ctaText: "Gratis y sin cuota mensual.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Ver la documentación",
    answer: "Con OficinaOS, el cliente aprueba el presupuesto en la página de seguimiento — y la aprobación queda registrada en la ficha con hora y valor, en vez de una llamada sin registro.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Qué pasa si el precio cambia a mitad de la reparación?", a: "El presupuesto actualizado vuelve a la página y el cliente aprueba de nuevo — la nueva aprobación queda registrada con hora y valor." },
      { q: "¿Hay registro para disputas?", a: "Sí. El ticket con QR y la garantía referencian la misma ficha donde se aprobó el presupuesto." },
      { q: "¿Necesito internet en la tienda?", a: "La red local basta; la aprobación desde fuera de la tienda exige el módulo Pro." },
    ],
    sections: [
      {
        heading: "Por qué «aprobado por teléfono» no basta",
        paragraphs: [
          "Cuando el precio cambia — pieza más cara, problema mayor — la aprobación verbal desaparece. Con OficinaOS, el cliente ve el presupuesto en la página y pulsa aprobar: la ficha guarda la hora y el valor aprobado.",
        ],
        list: [
          "Valor y descripción visibles en la página de seguimiento",
          "Aprobación con registro de hora en la ficha",
          "Historial por cliente y por reparación",
          "Funciona en la red de la tienda; desde fuera, con el módulo Pro",
        ],
      },
      {
        heading: "Menos disputas en la entrega",
        paragraphs: [
          "El ticket con QR y la garantía entregada al final referencian la misma ficha donde se aprobó el presupuesto. Si hay duda, ambos tienen el mismo registro.",
        ],
        links: [
          { label: "El cliente sigue la reparación", href: "/es/rastrear-reparacao-cliente" },
          { label: "Software para servicio técnico", href: "/es/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  alternativasSoftwareOficina: {
    metaTitle: "Alternativas a software caro para taller de reparación",
    metaDesc:
      "RepairDesk, Fixably y otros programas cobran 20–150 €/mes. OficinaOS da lo esencial gratis: fichas, presupuestos y seguimiento — compara.",
    badge: "Comparación · Alternativas",
    title: "Antes de pagar una cuota mensual, compara",
    subtitle:
      "Los programas para talleres de reparación cobran por puesto y por mes. OficinaOS cobra cero por lo esencial — y el código es abierto.",
    ctaTitle: "Compara con lo que tienes hoy",
    ctaText: "Descarga y pruébalo con tus propias reparaciones — gratis.",
    ctaPrimary: "Descargar gratis",
    ctaSecondary: "Módulos Pro",
    ctaSecondaryHref: "/pro",
    answer: "Herramientas como RepairDesk o Fixably parten de ~20–60 €/mes por puesto. OficinaOS cubre lo esencial — fichas, presupuestos y seguimiento — gratuitamente, con código abierto y datos en el PC de la tienda.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿OficinaOS hace lo mismo que RepairDesk?", a: "En lo esencial sí: fichas, presupuestos, stock, TPV y seguimiento del cliente. Facturación certificada, tienda online y bot de WhatsApp son módulos Pro opcionales." },
      { q: "¿Y el código?", a: "Es abierto (MIT) — puedes verlo, adaptarlo y no quedas preso a una suscripción." },
      { q: "¿Cuándo compensa un SaaS?", a: "Si gestionas varias tiendas o necesitas un ERP con soporte dedicado. Para la mayoría de los talleres, lo esencial gratis basta." },
    ],
    sections: [
      {
        heading: "Lo que cobra el mercado",
        paragraphs: [
          "RepairDesk, Fixably y similares parten de ~20–60 €/mes por puesto; funciones como SMS y portales quedan en planes más caros. Para una tienda pequeña son 240–720 € al año antes de facturar un euro.",
        ],
        table: {
          head: ["", "SaaS típico", "OficinaOS"],
          rows: [
            ["Precio del núcleo", "20–60 €/mes por puesto", "0 € (MIT)"],
            ["Dónde quedan los datos", "Nube del proveedor", "PC de tu tienda"],
            ["Funciona sin internet", "Normalmente no", "Sí"],
            ["Portal del cliente", "Plan de pago", "Gratis en la red; fuera con Pro"],
            ["Código abierto", "Raramente", "MIT"],
          ],
        },
      },
      {
        heading: "Cuándo el pago tiene sentido",
        paragraphs: [
          "Si necesitas facturación certificada, tienda online, bot de WhatsApp o un portal del cliente accesible desde fuera de la tienda, los módulos Pro cubren eso — opcionales, sin obligar a cambiar el núcleo gratis.",
          "Si gestionas varias tiendas o necesitas un ERP completo, un SaaS con soporte dedicado puede compensar. Para la mayoría de los talleres, lo esencial gratis basta.",
        ],
        links: [
          { label: "Software de pago vs OficinaOS", href: "/es/software-pago-vs-oficinaos" },
          { label: "Módulos Pro", href: "/es/pro" },
        ],
      },
    ],
  },
};
