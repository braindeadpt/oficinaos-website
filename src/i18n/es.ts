import type { Copy } from "./pt";

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
        desc: "Disponible en portugués europeo, inglés y francés.",
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
  footer: {
    license: "Licencia MIT",
    fork: "Fork de Reparilo",
    rights: "Software libre para talleres independientes.",
  },
};
