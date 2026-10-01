import type { Copy } from "./pt";
import {
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  RELEASES_URL,
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
    title: "Instalación y acceso",
    subtitle:
      "Del PC de la tienda al móvil del cliente — todos los caminos, paso a paso.",
    sections: [
      {
        heading: "Instalación en minutos",
        paragraphs: [
          "En Windows, descarga el instalador ZIP, extráelo y ejecuta INSTALAR.bat — instala Docker si falta, genera las contraseñas y arranca todo solo. Uso diario: INICIAR.bat / PARAR.bat.",
          "En Linux/Mac o desde el código fuente, bastan cuatro comandos:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guía de instalación completa", href: INSTALL_URL },
          { label: "Instalador para Windows", href: RELEASES_URL },
        ],
      },
      {
        heading: "En la tienda — red local",
        paragraphs: [
          "Un PC ejecuta el servidor y la base de datos; los demás dispositivos abren la app en el navegador, sin instalar nada:",
          "Usa siempre la misma dirección configurada como APP_URL en el archivo .env. Funciona sin internet para el uso diario.",
        ],
        code: "http://192.168.1.33:4000   # la IP del PC servidor",
        links: [],
      },
      {
        heading: "Móvil y tablet — icono en pantalla (PWA)",
        paragraphs: [
          "OficinaOS es una PWA: puede tener icono propio y abrirse a pantalla completa, sin barra del navegador.",
        ],
        list: [
          "iPhone/iPad: Safari → Compartir → «Añadir a pantalla de inicio» — app independiente, incluso en HTTP en la red local",
          "Android en la tienda: menú ⋮ de Chrome → «Añadir a pantalla de inicio» (acceso directo)",
          "Android con HTTPS (túnel): Chrome ofrece «Instalar aplicación» — instalación real",
          "Opcional: APK Android nativo vía Capacitor (cámara integrada en las fichas) — ver docs/mobile-access.md",
        ],
        links: [{ label: "Guía móvil completa", href: DOCS_MOBILE_URL }],
      },
      {
        heading: "Acceso remoto — Cloudflare Tunnel",
        paragraphs: [
          "Con el PC de la tienda encendido, un Cloudflare Tunnel gratuito expone la app en HTTPS — sin abrir puertos en el router, sin IP pública, funciona incluso con CGNAT.",
          "Da acceso remoto al equipo y activa los enlaces públicos de los clientes: seguimiento, aprobación de presupuestos, solicitud de evaluación y QR de garantía.",
        ],
        list: [
          "Cloudflare Zero Trust → Networks → Tunnels → crear túnel y copiar el token",
          "Hostname público (ej.: oficina.tudominio.com) → servicio http://app:4000",
          "En .env: TUNNEL_TOKEN=<token> y añadir el hostname a EXTRA_TRUSTED_ORIGINS",
          "docker compose --profile tunnel up -d (o COMPOSE_PROFILES=tunnel en instalaciones)",
          "Ajustes → Tienda → URL base de seguimiento → el hostname público",
        ],
        code: "TUNNEL_TOKEN=eyJh…\nEXTRA_TRUSTED_ORIGINS=https://oficina.tudominio.com",
        links: [
          { label: "Guía completa de acceso remoto", href: DOCS_REMOTE_URL },
        ],
      },
      {
        heading: "Privado por defecto",
        paragraphs: [
          "El túnel es opcional: la app sigue funcionando al 100% en la red local sin internet. Los datos de los clientes se quedan en la tienda — Cloudflare solo transporta tráfico cifrado mientras el túnel está activo.",
          "Para una barrera extra antes del login, Cloudflare Access (gratis) puede exigir email + código — manteniendo las rutas públicas (/tracking, /pre-check) abiertas a los clientes.",
        ],
        links: [],
      },
    ],
  },
  footer: {
    license: "Licencia MIT",
    fork: "Fork de Reparilo",
    rights: "Software libre para talleres independientes.",
  },
};
