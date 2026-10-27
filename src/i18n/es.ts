import type { Copy } from "./pt";
import {
  BACKUP_DOCS_URL,
  DIAG_REPO_URL,
  DIAG_ZIP_URL,
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  INSTALL_ZIP_URL,
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
    title: "OficinaOS — Programa gratuito para tiendas de reparación de móviles",
    description:
      "Reparaciones, presupuestos, stock y caja en un solo programa, gratis y en el PC de tu tienda. Sin cuotas mensuales y sin que los datos de tus clientes salgan de la tienda.",
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
    productItems: {
      os: { name: "OficinaOS", desc: "Reparaciones, clientes, stock y caja en un solo programa. Gratis." },
      diag: { name: "Diag", desc: "Diagnóstico de móviles por cable, con informe para el cliente." },
      pro: { name: "Pro", desc: "Módulos opcionales: WhatsApp, portal del cliente, facturación y Cloud." },
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
        desc: "Notificaciones en la app y por WhatsApp mantienen informados al equipo y a los clientes.",
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
    badge: "Beta — gratis en el programa piloto",
    title: "Módulos Pro",
    subtitle:
      "El programa que descargas es y será siempre gratuito y open source (licencia MIT) — nunca será de pago. Los módulos Pro son add-ons opcionales que necesitan «llegar a internet», a través de OficinaOS Cloud. Están en beta: los beta testers tienen 90 días gratis de todos los módulos cuando el Pro arranque.",
    statusLabel: "Beta",
    teaser:
      "Portal del cliente, WhatsApp, facturación certificada, escaparate online y más — módulos opcionales sobre el programa gratis, para técnicos independientes, talleres y revendedores.",
    more: "Conocer el Pro",
    ctaBeta: "Solicitar acceso a la beta",
    groups: ["Hablar con clientes", "Vender y facturar", "Gestionar y crecer"],
    cloudEngine: "OficinaOS Cloud es el motor de estos módulos: conecta la app a internet solo para lo que actives.",
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
    ],
    signup: {
      title: "Quiero entrar en la beta Pro",
      subtitle:
        "Déjanos tus datos y te contactamos para activar los módulos. Sin compromiso — quien entra en el piloto tiene 90 días gratis de todos los módulos Pro cuando arranque el Pro.",
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
      button: "Solicitar acceso a la beta",
      mailSubject: "Beta OficinaOS Pro — solicitud de acceso",
      note: "Solo usamos estos datos para contactarte sobre la beta Pro.",
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
      "La app se ejecuta en un PC dentro de la tienda y no tiene telemetría: por defecto, ningún dato de tus clientes sale de la tienda. Solo los módulos opcionales — incluida OficinaOS Cloud (Pro) — envían datos fuera, y cada uno está declarado abajo.",
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
      "Para técnicos, tiendas de reparación y revendedores: instalación, uso diario, copias de seguridad y resolución de problemas — paso a paso, sin necesidad de saber de tecnología.",
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
            ["Notificaciones", "Alertas en la app, plantillas de mensaje editables y cola de envío WhatsApp/SMS"],
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
          "Pide administrador una sola vez (servicios, firewall y la tarea de copias) y lo hace todo solo. Al final el navegador se abre en http://localhost:4000. Primer acceso: usuario admin, contraseña braindead — la app obliga a cambiar ambos.",
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
          "La tienda crea una cuenta en Cloud y empareja la app con un código (una vez). Cada módulo se activa del lado del servidor — sin archivos de licencia. La app se sincroniza con Cloud cada ~2 minutos para enviar y recibir.",
          "Sin emparejamiento, todo sigue funcionando en la red local — los módulos Pro simplemente no aparecen.",
        ],
        table: {
          head: ["Módulo", "Lo que gana el cliente de la tienda"],
          rows: [
            ["Portal del cliente", "Enlace público con el estado de la reparación y botones para aceptar/rechazar el presupuesto — sin llamar a la tienda"],
            ["Bot de WhatsApp", "Escribe al WhatsApp de la tienda y recibe el estado de la reparación automáticamente; aprueba presupuestos con SÍ/NO"],
            ["Diagnóstico a distancia", "Hace el diagnóstico del móvil en casa (oficinaos-diag, gratis) y lo envía a la tienda con un código"],
            ["Informes IA", "Informe del diagnóstico escrito en lenguaje sencillo, listo para entregar"],
            ["Facturación certificada", "Factura o factura-recibo legal emitida directamente desde la reparación o la venta — vía InvoiceXpress, con la cuenta de la propia tienda — solo Portugal"],
            ["Escaparate online", "Página pública con artículos del catálogo de la tienda; el cliente reserva y la reserva entra en la cola de Pedidos"],
            ["Busco pieza", "Tablón entre tiendas OficinaOS para pedir piezas y responder «la tengo» — el trato se cierra entre tiendas"],
            ["Precios de mercado", "La mediana anónima de los precios de reparaciones y piezas de otras tiendas, para compararla con los tuyos"],
            ["Multitienda", "Ingresos y reparaciones de todas las tiendas del mismo dueño en un solo panel de OficinaOS Cloud"],
            ["Remarketing por WhatsApp", "Mensaje automático a clientes con consentimiento cuya última reparación fue hace tiempo"],
          ],
        },
        links: [],
      },
      {
        heading: "Precios",
        paragraphs: [
          "La app completa es gratuita y open source (MIT) — sin límites, sin cuentas, sin periodo de prueba. Para siempre.",
          "Los módulos Pro están en beta: durante este periodo son gratis mientras medimos el valor real que aportan al mostrador. Cuando se anuncien los precios serán suscripciones mensuales sencillas — sin permanencia ni costes ocultos.",
          "* Nota WhatsApp: responder a clientes dentro de la ventana de 24h es gratis. Para notificaciones proactivas («está lista») fuera de esa ventana, Meta cobra pequeños importes por mensaje plantilla — coste de Meta, no nuestro.",
        ],
        table: {
          head: ["Qué", "Estado", "Precio"],
          rows: [
            ["App completa (core)", "Gratis para siempre", "0 €"],
            ["OficinaOS Diag (herramienta)", "Gratis para siempre", "0 €"],
            ["Portal del cliente", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Bot de WhatsApp", "Disponible (beta)", "Por anunciar — gratis en beta*"],
            ["Canal SMS (pasarela Android)", "Incluido en el core", "0 € — gratis"],
            ["Recepción de diagnósticos", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Informes IA", "Disponible (beta)", "Por anunciar — por informe"],
            ["Facturación (InvoiceXpress)", "Disponible (beta)", "Por anunciar — gratis en beta. La cuenta de InvoiceXpress es de la tienda y tiene el coste propio del servicio"],
            ["Escaparate online (+ personalización)", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Busco pieza", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Precios de mercado", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Multitienda", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Remarketing por WhatsApp", "Disponible (beta)", "Por anunciar — gratis en beta. Los mensajes plantilla tienen el coste de Meta*"],
          ],
        },
        links: [],
      },
      {
        heading: "Portal del cliente (Pro)",
        paragraphs: [
          "Con el módulo activo, cada reparación gana un botón «Public link» en su página de detalle. Al pulsarlo, la app publica en Cloud una copia redactada del trabajo — estado, dispositivo, presupuesto, fecha prevista y línea de tiempo — y copia el enlace.",
          "El enlace es un secreto por trabajo (un código aleatorio de 16 caracteres): quien lo tiene ve la página. Se envía al cliente por SMS, WhatsApp o impreso en el registro. La página se actualiza sola cuando cambia el estado en la app.",
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
          "Notas honestas: la respuesta puede tardar hasta ~2 minutos (ciclo de sincronización); el alta usa la WhatsApp Business Platform oficial de Meta y durante la beta te ayudamos con la configuración.",
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
        heading: "Canal SMS (gratis en el core)",
        paragraphs: [
          "El mismo asistente automático, pero por SMS — para tiendas que no quieren (o aún no tienen) la cuenta empresarial de Meta. Un móvil Android con SIM se queda en la tienda haciendo de puente: la app envía y recibe SMS a través de él, por la red móvil normal. Es gratuito y no necesita Cloud — todo ocurre en la red de la tienda.",
          "Sin cuentas Meta, sin aprobaciones de plantillas y sin coste por mensaje — solo la tarifa del SIM de la tienda (las tarifas con SMS incluidos hacen el coste marginal cero). La configuración tarda ~5 minutos y la guía la explica paso a paso.",
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
          "Cinco módulos Pro más, todos en beta y activados en la cuenta de OficinaOS Cloud. Cada uno tiene una guía breve:",
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
            ["¿Cuánto cuesta?", "La app completa es gratuita (licencia MIT). Los módulos Pro son suscripciones opcionales, en beta."],
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
            "El enlace es un secreto por reparación (un código aleatorio de 16 caracteres): quien lo tiene ve la página — por eso se envía solo al cliente de esa reparación. Quitar el enlace en la ficha borra la página pública.",
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
            "Una app Meta (developers.facebook.com) con el producto WhatsApp — nuestra app OficinaOS ya existe y está publicada",
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
            "Las respuestas pueden tardar hasta ~2 minutos (ciclo de sincronización) — no es instantáneo",
            "Responder a quien escribe es gratis; iniciar conversaciones («tu reparación está lista») requiere plantillas aprobadas en Meta con coste por mensaje",
            "Control de flood: máximo 20 mensajes/hora por número — protección contra spam",
            "Audios e imágenes no se interpretan — van a un humano",
            "En modo prueba solo responde a números verificados en Meta — en producción no hay ese límite",
          ],
          paragraphs: [],
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
        "Notificaciones y asistente automático por SMS, a través de un móvil Android con SIM en la tienda — sin Meta, sin coste por mensaje.",
      sections: [
        {
          heading: "Qué hace el módulo",
          paragraphs: [
            "Con el canal SMS activo, la app usa un móvil Android en la tienda como «pasarela»: las notificaciones a clientes (reparación lista, presupuesto enviado, recordatorios) salen por SMS por la red móvil normal — y las respuestas de los clientes entran en la app y reciben respuesta automática.",
            "Es el mismo asistente del WhatsApp, con los mismos comandos — el cliente escribe «estado» y recibe el punto de la reparación, escribe «presupuesto» y recibe el importe, responde SÍ o NO para aprobar o rechazar. La diferencia: no necesita cuenta Meta, ni plantillas aprobadas, ni internet en el móvil del cliente.",
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
          heading: "Qué se necesita",
          list: [
            "Un móvil Android — puede ser un equipo antiguo; se queda siempre en la tienda",
            "Una tarjeta SIM activa — idealmente con SMS incluidos en la tarifa (el coste de los mensajes es del operador)",
            "La app gratuita «SMS Gateway for Android» (sms-gate.app), de la Play Store o del sitio oficial",
            "El móvil y el PC de OficinaOS en la misma red Wi-Fi/LAN",
            "Nada más — el canal SMS es gratuito y no necesita cuenta Cloud ni módulos",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Instalación — paso a paso (~5 minutos)",
          paragraphs: [
            "1. En el móvil Android, instala «SMS Gateway for Android» (sms-gate.app) desde la Play Store o el sitio oficial.",
            "2. Abre la app y activa el modo «Local Server» (Servidor Local). La app muestra tres cosas: la dirección local (ej.: 192.168.1.50:8080), un nombre de usuario y una contraseña.",
            "3. Confirma que el móvil está conectado a la misma red Wi-Fi que el PC donde corre OficinaOS.",
            "4. En el PC, en la app OficinaOS: Menú → Notificaciones → Canales → sección SMS.",
            "5. En el campo «URL de la pasarela», escribe http:// seguido de la dirección que muestra la app del móvil — por ejemplo http://192.168.1.50:8080.",
            "6. Rellena el usuario y la contraseña exactamente como aparecen en el móvil y guarda.",
            "7. Pulsa «Enviar SMS de prueba», pon tu propio número y confirma que llega el mensaje.",
            "8. Por último, pulsa «Registrar webhook en el móvil» — esto le dice a la app del móvil a dónde enviar los SMS recibidos de los clientes.",
          ],
          links: [
            { label: "SMS Gateway for Android (sitio oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "El detalle del webhook — por qué no puede ser localhost",
          paragraphs: [
            "El botón «Registrar webhook» le enseña a la app del móvil a reenviar los SMS recibidos al PC de la tienda. Para ello, OficinaOS necesita saber su propia dirección en la red — y la descubre a partir de la dirección que usas en el navegador.",
            "Si abres la app en http://localhost:4000, el webhook queda registrado como «localhost» — que para el móvil significa él mismo, no el PC. El registro falla o apunta al sitio equivocado.",
            "Abre la app por la dirección de red del PC (ej.: http://192.168.1.20:4000 — la misma que usas en otros dispositivos de la tienda) antes de pulsar «Registrar webhook». La app te avisa si estás en localhost.",
          ],
          links: [],
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
            "La conversación entre la app y el móvil ocurre toda dentro de la red de la tienda (LAN) — nada pasa por OficinaOS Cloud ni por servidores externos. El SMS en sí viaja por la red móvil del operador, como cualquier SMS.",
            "La contraseña de la pasarela queda guardada en la app cifrada (AES-256-GCM) y nunca vuelve a aparecer en los campos — solo se sustituye.",
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
              ["El cliente responde y no pasa nada", "¿Está registrado el webhook? (botón «Registrar webhook») — ¿y se registró con la app abierta por la IP de red, no localhost?"],
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
            "Si cambias el móvil o el SIM, repite la configuración y registra el webhook otra vez",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    invoicing: {
      title: "Facturación certificada",
      subtitle:
        "Solo para tiendas en Portugal: facturas y facturas-recibo legales emitidas directamente desde la venta o la reparación — vía InvoiceXpress, con la cuenta y la clave de la propia tienda.",
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
  },
  updates: {
    title: "Novedades",
    subtitle:
      "Lo que ha cambiado en OficinaOS — funciones nuevas, mejoras y módulos Pro. Actualizado con cada lanzamiento.",
    free: "Gratis",
    pro: "Pro",
  },
  seoPage: {
    metaTitle: "Software para tienda de reparación de móviles — gratis, sin cuotas",
    metaDesc:
      "Programa de gestión para talleres de reparación de móviles: recepciones, presupuestos aprobados desde el móvil del cliente, stock, TPV y copias de seguridad. Gratis y con los datos en el PC de la tienda.",
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
          "SMS automáticos al cliente cuando la reparación está lista (con un móvil Android en la tienda)",
          "Copias de seguridad diarias automáticas de la base de datos",
        ],
      },
      {
        heading: "Gratis, sin asteriscos",
        paragraphs: [
          "La mayoría de los programas para talleres cobra cuotas mensuales por puesto o por técnico. OficinaOS es software libre (licencia MIT): la aplicación completa — reparaciones, presupuestos, stock, TPV, copias de seguridad — es gratuita para siempre, para una tienda o para diez puestos.",
          "Los módulos Pro opcionales (portal del cliente en la nube, bot de WhatsApp, tienda online, precios de mercado, multi-tienda) son suscripciones en beta para quien los necesite. El núcleo que usas cada día nunca queda detrás de un pago.",
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
      "Descarga la última versión de OficinaOS para Windows 10/11, comprueba el SHA-256 y mira cómo pasar el aviso de SmartScreen. Alternativa con Docker para Linux y macOS.",
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
        text: "Al terminar se abre el navegador en http://localhost:4000. Primer acceso: usuario admin, contraseña braindead — la app obliga a cambiar los dos. En otros dispositivos de la red: http://oficinaos.local:4000.",
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
      "App Windows gratuita y de código abierto que lee Android e iPhone por USB: batería, pantalla, táctil, sensores y almacenamiento, con informe HTML/JSON. Sin cuenta y sin internet.",
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
    metaTitle: "OficinaOS Pro — módulos online para técnicos, talleres y revendedores",
    metaDesc:
      "Portal del cliente, WhatsApp, facturación certificada, escaparate online y más — módulos opcionales sobre OficinaOS gratis, con OficinaOS Cloud como motor. En beta.",
    hero: {
      label: "OficinaOS Pro",
      title: "El programa es gratis. El Pro lo lleva más allá del mostrador.",
      subtitle:
        "Módulos opcionales para técnicos independientes, talleres y revendedores: hablar con clientes, vender y facturar, gestionar y crecer. Actívalos uno a uno; OficinaOS Cloud hace de puente con internet.",
      cta: "Solicitar acceso al piloto",
      ctaSecondary: "Ver los módulos",
      frameTitle: "Ajustes — Cloud",
      frameCaption:
        "Recreación ilustrativa de la pestaña Cloud en los ajustes de OficinaOS, con datos de ejemplo: conectada a OficinaOS Cloud, sincronizada hace un minuto y con tres módulos activos.",
      status: "Conectado a OficinaOS Cloud",
      sync: "Última sincronización: hace 1 min",
      modulesTitle: "Módulos activos",
      modules: ["Portal del cliente", "Bot de WhatsApp", "Facturación (InvoiceXpress)"],
      active: "Activo",
      offline: "Sin conexión, todo lo demás sigue funcionando en la red local.",
    },
    core: {
      title: "El núcleo es gratis. Siempre.",
      lead: "El Pro no le quita nada al programa que descargas. OficinaOS es y seguirá siendo gratuito y de código abierto — sin límites, sin cuentas, sin periodo de prueba.",
      items: [
        "Reparaciones, presupuestos, clientes, stock y caja",
        "En tu PC, funcionando sin internet",
        "Código abierto, licencia MIT",
        "Canal SMS con un Android en la tienda — gratis, sin Cloud",
        "OficinaOS Diag — diagnóstico por cable, gratis",
      ],
      link: "Descargar OficinaOS",
    },
    groups: {
      title: "Módulos según lo que quieres resolver",
      lead: "Once módulos en tres grupos. Todos opcionales, todos en beta.",
      smsNote: "gratis, en el núcleo",
      more: "Guía",
      items: [
        {
          title: "Hablar con clientes",
          text: "El cliente sabe en qué punto está la reparación y aprueba el presupuesto sin llamar.",
          ui: {
            title: "WhatsApp",
            caption: "Conversación de ejemplo con el bot de WhatsApp: el cliente aprueba un presupuesto respondiendo SÍ.",
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
          text: "Compara tus precios con el mercado, ve varias tiendas en un panel y recibe diagnósticos hechos en casa.",
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
        { title: "Empareja una vez", text: "Crea una cuenta en cloud.oficinaos.app (o recibe el código del equipo) y pega el código de emparejamiento en Ajustes → Cloud." },
        { title: "Activa solo lo que necesitas", text: "Cada módulo se activa en el servidor, sin archivos de licencia. En la beta, los activamos nosotros." },
        { title: "La app se sincroniza sola", text: "Cada ~2 minutos envía y recibe lo que necesitan los módulos activos. El PC nunca queda expuesto a internet." },
      ],
      diagram: { pc: "OficinaOS en tu PC", cloud: "OficinaOS Cloud", out: "Clientes y servicios", sync: "cada ~2 min" },
      dataTitle: "Qué va a la Cloud",
      dataText: "Solo los datos que necesita cada módulo activo — por ejemplo, el resumen redactado de una reparación para el portal. Sin módulos activos, nada sale del PC.",
      dataLink: "Privacidad, módulo a módulo",
      offline: "Sin emparejar, OficinaOS sigue funcionando en la red local — los módulos Pro simplemente no aparecen.",
      login: "¿Ya tienes cuenta? Entrar en OficinaOS Cloud",
    },
    pricing: {
      title: "Precios: el estado real",
      lead: "El Pro está en beta. Durante el piloto, los módulos son gratis mientras medimos el valor real que aportan. Aún no hay precios anunciados — y no nos los inventamos aquí.",
      caption: "Estado y precio de cada parte de OficinaOS",
      head: ["Qué", "Estado", "Precio"],
      rows: [
        ["App completa (núcleo)", "Gratis para siempre", "0 €"],
        ["OficinaOS Diag", "Gratis para siempre", "0 €"],
        ["Canal SMS (Android en la tienda)", "En el núcleo", "0 €"],
        ["Módulos Pro (portal, WhatsApp, facturación, escaparate…)", "Beta", "Por anunciar — gratis en el piloto"],
        ["Informes IA", "Beta", "Por anunciar — por informe"],
      ],
      notes: [
        "Cuando se anuncien los precios, serán suscripciones mensuales sencillas — sin permanencia y sin costes ocultos.",
        "Quien entre en el piloto tendrá 90 días gratis de todos los módulos cuando arranque el Pro.",
        "Los costes de terceros no son nuestros: la cuenta de InvoiceXpress es tuya; los mensajes de plantilla de WhatsApp fuera de la ventana de 24 h los cobra Meta.",
      ],
      scrollLabel: "Tabla con desplazamiento horizontal",
    },
    form: { title: "Entrar en el piloto Pro" },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿OficinaOS va a dejar de ser gratis?", a: "No. El programa es de código abierto (MIT) y el núcleo nunca queda detrás de un pago. El Pro solo añade lo que necesita internet." },
        { q: "¿Necesito el Pro para usar OficinaOS?", a: "No. Reparaciones, presupuestos, clientes, stock, caja y el canal SMS funcionan sin Pro y sin internet." },
        { q: "¿El Pro es solo para tiendas?", a: "No. Es para quien repara, diagnostica o revende: técnicos independientes, talleres y revendedores. La facturación certificada es solo para Portugal." },
        { q: "¿Qué pasa si desconecto la Cloud?", a: "La app sigue funcionando en la red local con todos tus datos; los módulos Pro dejan de aparecer. Desactivar la compartición de precios borra de la Cloud los precios enviados." },
        { q: "¿Cómo entro en el piloto?", a: "Deja tus datos en el formulario. Te contactamos, te ayudamos a emparejar y activamos los módulos que tengan sentido." },
      ],
    },
  },
  tradePage: {
    metaTitle: "OficinaOS Trade — piezas y equipos entre profesionales",
    metaDesc:
      "Red B2B donde técnicos, talleres y revendedores verificados compran y venden móviles, ordenadores, piezas y lotes. Sin particulares, sin mínimos y sin comisión por operación. Portugal y España.",
    hero: {
      label: "OficinaOS Trade",
      badge: "Gratis en el lanzamiento",
      title: "Piezas y equipos, de profesional a profesional.",
      subtitle:
        "La red B2B donde técnicos, talleres y revendedores verificados compran y venden móviles, ordenadores, piezas y lotes entre sí. Sin particulares, sin mínimo de compra y sin comisión por operación.",
      cta: "Solicitar acceso — es gratis",
      ctaSecondary: "Ver el mercado",
      note: "Solo empresas verificadas · Portugal y España",
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
          text: "En España, el NIF-IVA comprobado en VIES y el documento de registro de la empresa. En Portugal, el NIF y el código de la certidão permanente, o el alta de actividad si trabaja por cuenta propia. Algunas solicitudes se aprueban al momento; el resto las revisa una persona.",
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
        { q: "¿Dónde está disponible?", a: "En Portugal y España, para empresas de esos dos países. La app está en portugués, español e inglés." },
        { q: "Trabajo por cuenta propia. ¿Puedo entrar?", a: "Sí. Trade es para técnicos independientes, talleres y revendedores. En Portugal, quien trabaja como empresario individual usa el alta de actividad en lugar de la certidão permanente." },
        { q: "¿Quién ve mis precios?", a: "Solo los miembros verificados. Quien está fuera ve que hay stock, pero nunca el precio ni quién vende." },
        { q: "¿Cómo se paga?", a: "Directamente entre empresas — la plataforma no mueve dinero. Trade registra la propuesta y el acuerdo con los datos para la factura, y las valoraciones solo cuentan tras la recepción." },
        { q: "¿Puedo vender a particulares?", a: "No. Trade es solo entre profesionales." },
        { q: "¿Necesito usar OficinaOS?", a: "No. Trade es un producto aparte: cualquier empresa se registra directamente, use o no OficinaOS." },
      ],
    },
    cta: {
      title: "Entre en la red",
      lead: "Gratis durante el lanzamiento para técnicos, talleres y revendedores verificados en Portugal y España.",
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
