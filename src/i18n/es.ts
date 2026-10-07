import type { Copy } from "./pt";
import {
  BACKUP_DOCS_URL,
  DIAG_REPO_URL,
  DIAG_STORE_URL,
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
  },
  hero: {
    badge: "Gratis para siempre · Tus datos se quedan en tu tienda",
    title: "Menos llamadas de «¿ya está listo?».",
    titleAccent: "Tu tienda de reparaciones, organizada.",
    subtitle:
      "Recepción, presupuestos, stock y caja en un solo programa, instalado en el PC de la tienda. Tus clientes pueden seguir la reparación desde el móvil y tu equipo siempre sabe qué toca hacer.",
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Ver cómo funciona",
    downloadNote: "Gratis · Windows 10/11 · instalación guiada",
    chips: ["Sin cuotas mensuales", "Funciona sin internet", "En PC, tablet y móvil"],
    techNote: "Para técnicos: código abierto (licencia MIT), Linux/macOS con Docker —",
    techLink: "ver instalación avanzada",
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
        title: "App Android",
        desc: "La misma app en tablets Android en el mostrador — sin código separado.",
      },
      {
        title: "Copias de seguridad",
        desc: "Backups locales de la base de datos con un comando — los datos son tuyos.",
      },
    ],
  },
  screenshots: {
    title: "Míralo en acción",
    subtitle: "Capturas reales de la app funcionando en un taller.",
    items: ["Panel de reparaciones", "Detalle del trabajo", "Página del cliente"],
    comingSoon: "Captura próximamente",
  },
  pro: {
    badge: "Beta — gratis para tiendas piloto",
    title: "Módulos Pro",
    subtitle:
      "Funciones opcionales que necesitan «llegar a internet», a través de OficinaOS Cloud. Ya están disponibles en beta y, durante la beta, las tiendas piloto las usan gratis. El núcleo sigue siendo gratuito y MIT — para siempre.",
    statusLabel: "Beta",
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
        "Déjanos los datos de tu tienda y te contactamos para activar los módulos. Sin compromiso.",
      email: "Email",
      emailPlaceholder: "tu@tutaller.es",
      shop: "Nombre de la tienda",
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
      "Instalación, uso diario, copias de seguridad y resolución de problemas — paso a paso, sin necesidad de saber de tecnología.",
    toc: "En esta guía",
    backToGuide: "Guía completa",
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
          "Los módulos Pro están en beta: durante este periodo, las tiendas piloto los usan gratis mientras medimos el valor real que aportan al mostrador. Cuando se anuncien los precios serán suscripciones mensuales sencillas — sin permanencia ni costes ocultos.",
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
          "Notas honestas: la respuesta puede tardar hasta ~2 minutos (ciclo de sincronización); el alta usa la WhatsApp Business Platform oficial de Meta y la primera tienda la acompañamos nosotros.",
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
            "Tras el alta en Meta (acompañada por nosotros en la primera tienda), la configuración en la app son 4 campos:",
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
          heading: "Instalación — Microsoft Store",
          paragraphs: [
            "La forma más sencilla: instala desde la Microsoft Store — un clic, sin aviso SmartScreen y con actualizaciones automáticas. Gratis.",
            "Alternativa portátil: descarga el zip, extrae la carpeta entera (el exe necesita los archivos de al lado) y ejecuta OficinaDiag.exe — Windows puede mostrar el aviso SmartScreen en la primera ejecución: «Más información» → «Ejecutar de todas formas».",
          ],
          links: [
            { label: "Microsoft Store", href: DIAG_STORE_URL },
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
  footer: {
    license: "Licencia MIT",
    credits: "Basado en el proyecto de código abierto",
    rights: "Software libre para talleres independientes.",
    contact: "Contacto",
    community: "Comunidad",
    privacy: "Privacidad"
  },
};
