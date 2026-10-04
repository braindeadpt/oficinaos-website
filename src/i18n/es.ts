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
} from "./utils";

export const lang = "es";
export const locale = "es";
export const ogLocale = "es_ES";

export const t: Copy = {
  meta: {
    title: "OficinaOS — Gestión de taller gratuita y self-hosted",
    description:
      "Sistema de gestión gratuito y open source (MIT) para talleres de reparación de móviles. Funciona en un equipo dentro de tu tienda — los datos de tus clientes nunca salen de tu red.",
  },
  nav: {
    features: "Funcionalidades",
    diag: "Diagnóstico",
    pro: "Módulos Pro",
    install: "Instalar",
    docs: "Guía",
    github: "GitHub",
  },
  hero: {
    badge: "Gratuito · MIT · Self-hosted",
    title: "Tu taller, organizado.",
    titleAccent: "Tus datos, en tu tienda.",
    subtitle:
      "OficinaOS es un sistema de gestión gratuito y open source para talleres de reparación de móviles. Funciona en un ordenador dentro de la tienda — reparaciones, stock, caja y datos de clientes nunca salen de tu red local.",
    ctaPrimary: "Ver en GitHub",
    ctaSecondary: "Guía de instalación",
    chips: ["Sin suscripciones", "Funciona en tu red local", "Web + Android"],
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
    badge: "En desarrollo",
    title: "Módulos Pro",
    subtitle:
      "Módulos opcionales de pago, en desarrollo activo. El núcleo sigue siendo gratuito y MIT — para siempre.",
    items: [
      {
        title: "Automatización de mostrador",
        desc: "Actualizaciones automáticas por WhatsApp y recibos digitales — menos llamadas de «¿ya está?».",
      },
      {
        title: "Diagnóstico de banco",
        desc: "Diagnóstico por cable del dispositivo, con informes asistidos por IA.",
      },
      {
        title: "Certificación de usados",
        desc: "Ciclos de batería, estado de bloqueo y grading para compra/venta — certificados A/B/C.",
      },
    ],
    waitlist: {
      title: "Lista de espera",
      subtitle: "Te avisamos cuando se lancen los módulos Pro.",
      placeholder: "tu@tutaller.es",
      button: "Avísame",
      buttonGithub: "Seguir en GitHub",
      note: "Formulario estático — sin cuenta. Solo escribimos sobre los lanzamientos Pro.",
      noteGithub:
        "Sigue el repositorio en GitHub — los lanzamientos de módulos Pro se anuncian en releases.",
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
      "OficinaOS se ejecuta en un PC dentro de la tienda — no hay servidores nuestros, ni cuenta nuestra, ni telemetría.",
    cards: [
      {
        title: "Todo local por defecto",
        desc: "Clientes, reparaciones, stock y caja viven en el PC de la tienda. Como nunca tocamos los datos, ni siquiera hace falta un acuerdo de encargo de tratamiento (art. 28) con nosotros.",
      },
      {
        title: "Sin transferencias internacionales",
        desc: "Por defecto nada sale de la tienda — a diferencia de los sistemas en la nube, no hay datos de clientes en servidores de terceros.",
      },
      {
        title: "Extras opcionales y declarados",
        desc: "WhatsApp, acceso remoto e IA son opt-in — documentados ítem a ítem, listos para el registro de actividades de tratamiento (art. 30).",
      },
    ],
    tableTitle: "Cuando activas un módulo opcional, esto es todo lo que sale:",
    table: [
      {
        name: "Notificaciones WhatsApp",
        to: "Meta",
        what: "Nº de teléfono del cliente + estado de la reparación",
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
    tableNote:
      "Ver el detalle completo — incluido lo que nunca sale — en el repositorio.",
  },
  install: {
    title: "En marcha en minutos",
    subtitle:
      "Un PC en la tienda, Docker, un comando. Tras la instalación, funciona offline en tu red local.",
    steps: [
      {
        title: "Obtén el código",
        desc: "Clona el repositorio o descarga el instalador desde Releases.",
      },
      {
        title: "Arranca con Docker",
        desc: "docker compose up -d levanta la app y la base de datos en contenedores.",
      },
      {
        title: "Abre en el navegador",
        desc: "http://localhost:4000 en el PC — o la IP local desde cualquier dispositivo.",
      },
    ],
    guideLink: "Guía de instalación completa",
    releasesLink: "Instalador para Windows (Releases)",
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
            src: "/screenshots/dashboard.png",
            alt: "Panel de reparaciones de OficinaOS",
            caption: "El panel — las reparaciones del día de un vistazo",
          },
          {
            src: "/screenshots/job-detail.png",
            alt: "Ficha de reparación con estados, presupuesto y línea de tiempo",
            caption: "La ficha — estados, presupuesto y cronología completa",
          },
          {
            src: "/screenshots/tracking.png",
            alt: "Página de seguimiento que el cliente ve en el móvil",
            caption: "La página de seguimiento que el cliente abre en el móvil",
          },
        ],
        links: [],
      },
      {
        heading: "Dos formas de instalar",
        paragraphs: [
          "OficinaOS es siempre el mismo programa — la diferencia está en cómo se ejecuta en el PC de la tienda. El instalador elige el camino correcto solo, pero conviene entender los dos:",
          "Docker es la forma normal y recomendada: un programa gratuito que empaqueta la app y la base de datos en «contenedores» aislados. Necesita una función del procesador llamada virtualización — la mayoría de los PCs la tienen, pero algunos la traen desactivada en la BIOS o no la soportan.",
          "El modo portátil existe para esos PCs: trae todo en un único paquete (la app, la base de datos PostgreSQL y el runtime), sin Docker, sin virtualización y sin servicios de Windows.",
        ],
        table: {
          head: ["", "Docker (recomendado)", "Portátil (alternativa)"],
          rows: [
            ["Cuándo usarlo", "Siempre que sea posible", "PCs sin virtualización (VT-x/SVM)"],
            ["Requisitos", "Docker Desktop + virtualización en BIOS", "Cualquier Windows 10/11 64-bit"],
            ["Descarga", "~1 GB (Docker + app)", "~540 MB (todo incluido)"],
            ["Arranque con el PC", "Automático", "Automático (opcional, se pregunta la 1ª vez)"],
            ["Si la app falla", "Se reinicia sola", "Se reinicia sola (wrapper)"],
            ["Copias de seguridad", "Diarias, automáticas (cada 24h)", "En cada arranque + BACKUP.bat manual"],
            ["Copias fuera del PC", "Soportado (rclone → S3/B2/GCS)", "Manual — copiar la carpeta de backups"],
            ["Actualizaciones", "Solo descarga lo que cambió; automático opcional", "Descarga el paquete entero; siempre manual"],
            ["Acceso remoto (HTTPS)", "Cloudflare Tunnel incluido", "Cloudflare Tunnel instalado aparte"],
          ],
        },
        links: [
          { label: "Guía de instalación", href: INSTALL_URL },
          { label: "Documentación del modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Instalación normal — Docker (una vez, ~10 minutos)",
        paragraphs: [
          "Descarga el instalador ZIP, extráelo en una carpeta (ej.: C:\\OficinaOS) y haz doble clic en INSTALAR.bat. Si Windows Defender SmartScreen avisa: «Más información» → «Ejecutar de todas formas».",
          "El instalador lo hace todo: comprueba si el PC puede ejecutar Docker, instala Docker Desktop si falta, genera las contraseñas y secretos, descarga la app y la arranca. Si pide reiniciar, reinicia y ejecuta INSTALAR.bat otra vez.",
          "Al final el navegador se abre en http://localhost:4000. Primer acceso: usuario admin, contraseña braindead — la app obliga a cambiar ambos.",
          "En Linux o Mac no hay instalador automático — se usa Docker directamente:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guía de instalación completa", href: INSTALL_URL },
          { label: "Descargar instalador (oficinaos-install.zip)", href: INSTALL_ZIP_URL },
        ],
      },
      {
        heading: "El error «virtualization support not detected»",
        paragraphs: [
          "Si el PC no puede ejecutar Docker, el instalador lo detecta antes de intentarlo y ofrece dos opciones:",
        ],
        list: [
          "Activarlo en la BIOS — reiniciar, pulsar F2/F10/DEL/ESC al arrancar, buscar «Intel VT-x», «Virtualization Technology» o «SVM Mode», activar y guardar (F10). Después funciona el camino Docker normal.",
          "Instalación portátil — el instalador descarga oficinaos-portable.zip (~540 MB) y arranca sin Docker: la misma app, la misma base de datos, las mismas funciones.",
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
          "Modo Docker: en la carpeta donde extrajiste el instalador.",
          "Modo portátil: dentro de la carpeta oficinaos-portable — los datos viven en data\\, las copias en app\\uploads\\backups.",
          "Otros dispositivos de la tienda (tablet, móvil, otro PC) no instalan nada — abren http://<IP-del-PC>:4000 en el navegador.",
        ],
        links: [],
      },
      {
        heading: "Copias de seguridad y restauración",
        paragraphs: [
          "Las copias son archivos comprimidos (.sql.gz) con toda la base de datos. La app muestra el estado de la última copia en Ajustes → Tienda → Copias de seguridad — funciona igual en los dos modos.",
          "En modo Docker un servicio dedicado hace una copia cada 24 horas, guarda 14 días, y opcionalmente copia a almacenamiento externo (S3, Backblaze, etc.) y prueba la restauración automáticamente.",
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
          "La app avisa arriba cuando hay una versión nueva. Para actualizar basta doble clic en ATUALIZAR.bat — hace copia, descarga la versión nueva y reinicia. Las migraciones de la base de datos corren solas.",
          "Diferencia práctica: en Docker solo se descarga lo que cambió; en portátil se descarga el paquete entero (~540 MB). En Docker puedes activar actualizaciones 100% automáticas (Watchtower).",
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
            ["Recepción de diagnósticos", "Disponible (beta)", "Por anunciar — gratis en beta"],
            ["Informes IA", "Disponible (beta)", "Por anunciar — por informe"],
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
        heading: "Diagnósticos enviados por clientes (Pro)",
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
            ["¿Los datos de los clientes van a algún servidor?", "No por defecto. Con módulos Pro, Cloud solo retransmite copias redactadas y mensajes — sin costes internos ni datos privados."],
            ["¿Funciona en el móvil?", "Sí — en el Wi-Fi de la tienda cualquier aparato lo abre en el navegador; fuera de la tienda con el acceso remoto (Cloudflare Tunnel)."],
            ["¿El cliente tiene que instalar algo?", "No — el portal abre como un enlace en su navegador; el bot responde en su WhatsApp normal."],
            ["¿Cuánto cuesta?", "La app completa es gratuita (licencia MIT). Los módulos Pro son suscripciones opcionales, en beta."],
            ["¿Varias tiendas / sucursales?", "No — OficinaOS está pensado para una ubicación por instalación."],
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
            "API Token — el token permanente del system user (la app lo guarda cifrado)",
            "Enabled activado — la app registra el phone_number_id en Cloud sola y el bot queda activo",
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
          heading: "Descargar y ejecutar",
          paragraphs: [
            "App Windows portátil con estética de terminal retro: descarga el zip, extrae la carpeta entera (el exe necesita los archivos de al lado) y ejecuta OficinaDiag.exe. Sin cuenta, sin instalación, sin suscripción.",
            "Windows puede mostrar el aviso SmartScreen en la primera ejecución — es normal en un programa nuevo sin certificado de firma: «Más información» → «Ejecutar de todas formas».",
          ],
          links: [
            { label: "Descargar oficinaos-diag (Windows)", href: DIAG_ZIP_URL },
            { label: "Código fuente en GitHub", href: DIAG_REPO_URL },
          ],
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
              ["Root / bootloader desbloqueado", "✓", "—"],
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
  },
  footer: {
    license: "Licencia MIT",
    fork: "Fork de Reparilo",
    rights: "Software libre para talleres independientes.",
  },
};
