// Conteúdo técnico trilingue (PT-PT / EN / ES) da página /engineering/.
// Factos estritamente públicos e verificáveis — sem segredos nem detalhes internos de operação.
import type { Locale } from "../i18n/utils";
import type { ProductId } from "../lib/products";

export interface EngineeringCopy {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  titleA: string;
  titleB: string;
  lead: string;
  stats: readonly { value: string; label: string; detail: string }[];
  archTitle: string;
  archLead: string;
  repos: readonly {
    id: ProductId;
    name: string;
    role: string;
    stack: string;
    desc: string;
    linkLabel: string;
    hrefKind: "app-repo" | "pro-page" | "diag-repo" | "site-repo";
  }[];
  flowLabel: string;
  flowNodes: readonly { title: string; sub: string }[];
  decisionsTitle: string;
  decisionsLead: string;
  decisions: readonly { tag: string; title: string; text: string }[];
  stackTitle: string;
  stackLead: string;
  stackGroups: readonly { title: string; items: readonly string[] }[];
  authorEyebrow: string;
  authorRole: string;
  authorNote: string;
  ctaGithub: string;
  ctaLinkedin: string;
  ctaSource: string;
  ctaContact: string;
}

export const ENGINEERING: Record<Locale, EngineeringCopy> = {
  pt: {
    metaTitle: "Engenharia e Arquitetura — OficinaOS",
    metaDesc:
      "Como o ecossistema OficinaOS foi arquitetado: 4 repositórios desacoplados, desenho local-first, segurança por omissão, testes automatizados e web estática ≥ 95 no Lighthouse.",
    eyebrow: "Engenharia · Arquitetura do Ecossistema",
    titleA: "Construído como produto real,",
    titleB: "do balcão à edge.",
    lead: "O OficinaOS não é um monolito frágil — é um ecossistema de quatro repositórios focados, desenhados para oficinas que precisam de trabalhar sem internet e de privacidade verificável.",
    stats: [
      { value: "4", label: "Repositórios", detail: "App · Cloud · Diag · Website" },
      { value: "≥ 95", label: "Lighthouse CI", detail: "Performance, A11y, SEO e Boas práticas" },
      { value: "MIT", label: "Código aberto", detail: "App, Diag e Website em código aberto; a Cloud é um serviço gerido opcional" },
      { value: "0", label: "Frameworks JS no site", detail: "Astro estático + CSS nativo" },
    ],
    archTitle: "Quatro peças independentes, fronteiras claras",
    archLead:
      "Cada repositório tem um papel único, ciclo de lançamento próprio e contrato de comunicação explícito.",
    repos: [
      {
        id: "os",
        name: "OficinaOS · App da Loja",
        role: "Self-hosted · Local-first",
        stack: "Bun · TypeScript · React · Prisma · PostgreSQL",
        desc: "Corre no PC da loja (instalador Windows, portátil ou Docker). Gere reparações, orçamentos, stock, caixa e clientes integralmente offline, com controlo de acessos por papel e migrações automáticas.",
        linkLabel: "Ver repositório",
        hrefKind: "app-repo",
      },
      {
        id: "pro",
        name: "OficinaOS Cloud",
        role: "Relay opcional & Portal público",
        stack: "Bun · TypeScript · PostgreSQL · AES-256-GCM",
        desc: "Serviço gerido opcional que assegura o portal público de acompanhamento, assinatura remota, relay WhatsApp/SMS e licenciamento. A loja inicia sempre a ligação por polling autenticado — zero portas abertas na oficina.",
        linkLabel: "Ver arquitetura Pro",
        hrefKind: "pro-page",
      },
      {
        id: "diag",
        name: "OficinaOS Diag",
        role: "Diagnóstico USB nativo",
        stack: ".NET · C# · ADB / USB · Windows",
        desc: "Aplicação desktop nativa que lê saúde de bateria, ciclos, ecrã, toque, sensores e armazenamento de Android e iPhone por cabo USB, podendo anexar o relatório diretamente à ficha de reparação.",
        linkLabel: "Ver repositório",
        hrefKind: "diag-repo",
      },
      {
        id: "trade",
        name: "OficinaOS Website & Docs",
        role: "Edge estático trilingue",
        stack: "Astro 5 · Tailwind v4 · Cloudflare Workers",
        desc: "100+ páginas estáticas em PT-PT, EN e ES com pesquisa de documentação no cliente, CSP gerada por hash SHA-256 por rota, View Transitions nativas e auditoria Lighthouse automática em cada PR.",
        linkLabel: "Ver repositório",
        hrefKind: "site-repo",
      },
    ],
    flowLabel: "Fronteiras de confiança e fluxo de dados",
    flowNodes: [
      { title: "Rede local da loja", sub: "PostgreSQL + App + Diag USB (funciona offline)" },
      { title: "Polling autenticado HTTPS", sub: "Ligação de saída iniciada pela loja que envia e recebe dados — zero portas abertas" },
      { title: "Cloud Relay & Edge", sub: "Portal /t/:token · Assinatura · WhatsApp/SMS cifrado" },
    ],
    decisionsTitle: "Decisões de engenharia",
    decisionsLead:
      "Escolhas concretas para manter fiabilidade operacional, privacidade real e baixo custo de manutenção.",
    decisions: [
      {
        tag: "Arquitetura",
        title: "Local-first sem portas abertas",
        text: "Os dados dos clientes ficam na base de dados da própria oficina. Mesmo com a internet em baixo, o balcão não para; quando a Cloud está ligada, a comunicação é sempre iniciada de dentro para fora.",
      },
      {
        tag: "Segurança",
        title: "Cifra de credenciais e mínimo privilégio",
        text: "Tokens Meta WhatsApp são cifrados com AES-256-GCM (chave fora da BD), validados antes de substituir e revogáveis com eliminação efetiva auditada. Páginas públicas usam vistas redigidas sem IDs internos.",
      },
      {
        tag: "Web Security",
        title: "CSP fail-closed por hash SHA-256",
        text: "Em build time, o gerador de cabeçalhos calcula os hashes exatos de cada script inline por rota e emite style-src 'self' sem unsafe-inline, respeitando os limites do runtime Cloudflare Workers.",
      },
      {
        tag: "Qualidade",
        title: "CI rigoroso e testes de backup/restore",
        text: "Pipelines automatizados validam linting sem avisos, typechecking estrito, suites de testes unitários e de integração, testes reais de backup/restore de PostgreSQL e Lighthouse CI ≥ 95.",
      },
      {
        tag: "Interface",
        title: "Fluidez em CSS nativo",
        text: "Animações guiadas por scroll (animation-timeline), @view-transition, Popover/Anchor API nativos e prefers-reduced-motion respeitado — experiência tátil sem arrastar frameworks pesados.",
      },
      {
        tag: "Acessibilidade & i18n",
        title: "WCAG AA e três idiomas de raiz",
        text: "Contraste verificado em modo claro e escuro, navegação completa por teclado com padrões WAI-ARIA, rotas canónicas e hreflang consistentes em PT-PT, EN e ES.",
      },
    ],
    stackTitle: "Stack por camada",
    stackLead: "Tecnologias escolhidas pela produtividade, desempenho previsível e longevidade.",
    stackGroups: [
      { title: "Runtime & Dados", items: ["Bun", "TypeScript", "PostgreSQL 16", "Prisma ORM"] },
      { title: "Web & Interface", items: ["React", "Astro 5", "Tailwind CSS v4", "CSS View Transitions"] },
      { title: "Desktop & Hardware", items: [".NET / C#", "ADB / USB", "Windows Installer", "Docker Compose"] },
      { title: "Edge, Segurança & CI", items: ["Cloudflare Workers", "AES-256-GCM", "CSP por SHA-256", "GitHub Actions · LHCI"] },
    ],
    authorEyebrow: "Autoria",
    authorRole: "Criador e arquiteto do ecossistema OficinaOS",
    authorNote: "Todo o código da app da loja, do diagnóstico USB e deste site está aberto no GitHub para inspeção.",
    ctaGithub: "Perfil GitHub",
    ctaLinkedin: "LinkedIn",
    ctaSource: "Código-fonte",
    ctaContact: "Contacto",
  },

  en: {
    metaTitle: "Engineering & Architecture — OficinaOS",
    metaDesc:
      "How the OficinaOS ecosystem is architected: 4 decoupled repositories, local-first design, security by default, automated CI testing and a ≥ 95 Lighthouse static web platform.",
    eyebrow: "Engineering · Ecosystem Architecture",
    titleA: "Built like a real product,",
    titleB: "from bench to edge.",
    lead: "OficinaOS is not a brittle monolith — it is an ecosystem of four focused repositories engineered for repair shops that need offline reliability and verifiable privacy.",
    stats: [
      { value: "4", label: "Repositories", detail: "App · Cloud · Diag · Website" },
      { value: "≥ 95", label: "Lighthouse CI", detail: "Performance, A11y, SEO & Best Practices" },
      { value: "MIT", label: "Open source", detail: "App, Diag and Website are open source; Cloud is an optional managed service" },
      { value: "0", label: "Site JS frameworks", detail: "Static Astro + native CSS" },
    ],
    archTitle: "Four independent pieces, clear boundaries",
    archLead:
      "Each repository owns a single responsibility, an independent release cycle and an explicit communication contract.",
    repos: [
      {
        id: "os",
        name: "OficinaOS · Shop App",
        role: "Self-hosted · Local-first",
        stack: "Bun · TypeScript · React · Prisma · PostgreSQL",
        desc: "Runs on the shop's own computer (Windows installer, portable bundle or Docker). Handles repairs, quotes, inventory, till and customers fully offline with role-based access and automated migrations.",
        linkLabel: "View repository",
        hrefKind: "app-repo",
      },
      {
        id: "pro",
        name: "OficinaOS Cloud",
        role: "Optional relay & Public portal",
        stack: "Bun · TypeScript · PostgreSQL · AES-256-GCM",
        desc: "Optional managed relay powering the customer tracking portal, remote signatures, WhatsApp/SMS delivery and licensing. The shop always initiates outbound authenticated polling — zero open ports on the LAN.",
        linkLabel: "Explore Pro architecture",
        hrefKind: "pro-page",
      },
      {
        id: "diag",
        name: "OficinaOS Diag",
        role: "Native USB diagnostics",
        stack: ".NET · C# · ADB / USB · Windows",
        desc: "Native desktop tool reading battery health, cycle count, display, touch, sensors and storage from Android and iPhone over USB, with optional one-click attachment to the repair ticket.",
        linkLabel: "View repository",
        hrefKind: "diag-repo",
      },
      {
        id: "trade",
        name: "OficinaOS Website & Docs",
        role: "Trilingual static edge",
        stack: "Astro 5 · Tailwind v4 · Cloudflare Workers",
        desc: "100+ static pages in PT-PT, EN and ES with client-side docs search, per-route SHA-256 Content-Security-Policy generation, native View Transitions and automated Lighthouse CI on every PR.",
        linkLabel: "View repository",
        hrefKind: "site-repo",
      },
    ],
    flowLabel: "Trust boundaries and data flow",
    flowNodes: [
      { title: "Shop LAN", sub: "PostgreSQL + App + USB Diag (works offline)" },
      { title: "Authenticated HTTPS polling", sub: "Outbound-only connection initiated by the shop to send and receive data — zero open ports" },
      { title: "Cloud Relay & Edge", sub: "Portal /t/:token · Signatures · Encrypted WhatsApp/SMS" },
    ],
    decisionsTitle: "Engineering decisions",
    decisionsLead:
      "Concrete choices made for operational reliability, verifiable privacy and sustainable maintenance.",
    decisions: [
      {
        tag: "Architecture",
        title: "Local-first with zero open ports",
        text: "Customer records live in the shop's own database. Even if the internet drops, the counter keeps running; when Cloud features are enabled, sync is strictly outbound-initiated.",
      },
      {
        tag: "Security",
        title: "Encrypted credentials & least privilege",
        text: "Meta WhatsApp tokens are encrypted at rest with AES-256-GCM (key outside the DB), validated before rotation and hard-deleted with audit trails on revocation. Public views strip internal IDs.",
      },
      {
        tag: "Web Security",
        title: "Fail-closed SHA-256 CSP",
        text: "At build time, the header generator hashes every inline script per route and emits strict style-src 'self' without unsafe-inline or tracking scripts, within Cloudflare Workers header budgets.",
      },
      {
        tag: "Quality",
        title: "Strict CI & backup/restore round-trips",
        text: "Automated pipelines enforce zero-warning linting, strict TypeScript checking, unit and integration test suites, real PostgreSQL backup/restore round-trips and Lighthouse CI ≥ 95.",
      },
      {
        tag: "Interface",
        title: "Fluid motion in native CSS",
        text: "Scroll-driven CSS animations (animation-timeline), @view-transition, native Popover/Anchor APIs and prefers-reduced-motion support — tactile UI without heavy client runtimes.",
      },
      {
        tag: "Accessibility & i18n",
        title: "WCAG AA and trilingual by design",
        text: "Verified light and dark contrast, full keyboard navigation with WAI-ARIA patterns, canonical routes and consistent hreflang alternates across PT-PT, EN and ES.",
      },
    ],
    stackTitle: "Stack by layer",
    stackLead: "Technologies chosen for productivity, predictable performance and long-term maintainability.",
    stackGroups: [
      { title: "Runtime & Data", items: ["Bun", "TypeScript", "PostgreSQL 16", "Prisma ORM"] },
      { title: "Web & Interface", items: ["React", "Astro 5", "Tailwind CSS v4", "CSS View Transitions"] },
      { title: "Desktop & Hardware", items: [".NET / C#", "ADB / USB", "Windows Installer", "Docker Compose"] },
      { title: "Edge, Security & CI", items: ["Cloudflare Workers", "AES-256-GCM", "SHA-256 CSP", "GitHub Actions · LHCI"] },
    ],
    authorEyebrow: "Authorship",
    authorRole: "Creator and architect of the OficinaOS ecosystem",
    authorNote: "The shop app, USB diagnostics tool and this website are all open on GitHub for inspection.",
    ctaGithub: "GitHub profile",
    ctaLinkedin: "LinkedIn",
    ctaSource: "Source code",
    ctaContact: "Contact",
  },

  es: {
    metaTitle: "Ingeniería y Arquitectura — OficinaOS",
    metaDesc:
      "Cómo está diseñado el ecosistema OficinaOS: 4 repositorios desacoplados, arquitectura local-first, seguridad por defecto, pruebas automatizadas y web estática ≥ 95 en Lighthouse.",
    eyebrow: "Ingeniería · Arquitectura del Ecosistema",
    titleA: "Construido como producto real,",
    titleB: "del mostrador al edge.",
    lead: "OficinaOS no es un monolito frágil — es un ecosistema de cuatro repositorios enfocados, diseñados para talleres que necesitan trabajar sin internet y con privacidad verificable.",
    stats: [
      { value: "4", label: "Repositorios", detail: "App · Cloud · Diag · Website" },
      { value: "≥ 95", label: "Lighthouse CI", detail: "Rendimiento, A11y, SEO y Buenas prácticas" },
      { value: "MIT", label: "Código abierto", detail: "App, Diag y Website en código abierto; la Cloud es un servicio gestionado opcional" },
      { value: "0", label: "Frameworks JS en la web", detail: "Astro estático + CSS nativo" },
    ],
    archTitle: "Cuatro piezas independientes, fronteras claras",
    archLead:
      "Cada repositorio tiene una responsabilidad única, ciclo de publicación propio y contrato de comunicación explícito.",
    repos: [
      {
        id: "os",
        name: "OficinaOS · App del Taller",
        role: "Autoalojada · Local-first",
        stack: "Bun · TypeScript · React · Prisma · PostgreSQL",
        desc: "Corre en el PC del taller (instalador Windows, portátil o Docker). Gestiona reparaciones, presupuestos, stock, caja y clientes sin conexión, con control de acceso por rol y migraciones automáticas.",
        linkLabel: "Ver repositorio",
        hrefKind: "app-repo",
      },
      {
        id: "pro",
        name: "OficinaOS Cloud",
        role: "Relay opcional y Portal público",
        stack: "Bun · TypeScript · PostgreSQL · AES-256-GCM",
        desc: "Servicio gestionado opcional que impulsa el portal de seguimiento, firma remota, relay de WhatsApp/SMS y licencias. El taller siempre inicia el polling autenticado de salida — cero puertos abiertos en la LAN.",
        linkLabel: "Ver arquitectura Pro",
        hrefKind: "pro-page",
      },
      {
        id: "diag",
        name: "OficinaOS Diag",
        role: "Diagnóstico USB nativo",
        stack: ".NET · C# · ADB / USB · Windows",
        desc: "Aplicación de escritorio nativa que lee salud de batería, ciclos, pantalla, táctil, sensores y almacenamiento de Android y iPhone por cable USB, adjuntando el informe a la ficha de reparación.",
        linkLabel: "Ver repositorio",
        hrefKind: "diag-repo",
      },
      {
        id: "trade",
        name: "OficinaOS Website y Docs",
        role: "Edge estático trilingüe",
        stack: "Astro 5 · Tailwind v4 · Cloudflare Workers",
        desc: "Más de 100 páginas estáticas en PT-PT, EN y ES con búsqueda local de documentación, CSP generada por hash SHA-256 por ruta, View Transitions nativas y Lighthouse CI automático en cada PR.",
        linkLabel: "Ver repositorio",
        hrefKind: "site-repo",
      },
    ],
    flowLabel: "Fronteras de confianza y flujo de datos",
    flowNodes: [
      { title: "Red local del taller", sub: "PostgreSQL + App + Diag USB (funciona offline)" },
      { title: "Polling autenticado HTTPS", sub: "Conexión saliente iniciada por el taller que envía y recibe datos — cero puertos abiertos" },
      { title: "Cloud Relay y Edge", sub: "Portal /t/:token · Firmas · WhatsApp/SMS cifrado" },
    ],
    decisionsTitle: "Decisiones de ingeniería",
    decisionsLead:
      "Elecciones concretas para lograr fiabilidad operativa, privacidad verificable y mantenimiento sostenible.",
    decisions: [
      {
        tag: "Arquitectura",
        title: "Local-first sin puertos abiertos",
        text: "Los datos de los clientes viven en la base de datos del propio taller. Aunque caiga internet, el mostrador sigue trabajando; si se activa la Cloud, la sincronización es siempre saliente.",
      },
      {
        tag: "Seguridad",
        title: "Cifrado de credenciales y mínimo privilegio",
        text: "Los tokens de Meta WhatsApp se cifran en reposo con AES-256-GCM (clave fuera de la BD), se validan antes de rotar y se eliminan con auditoría al revocar. Las vistas públicas omiten IDs internos.",
      },
      {
        tag: "Seguridad Web",
        title: "CSP fail-closed por hash SHA-256",
        text: "En tiempo de compilación, el generador calcula los hashes exactos de cada script inline por ruta y emite style-src 'self' sin unsafe-inline ni rastreadores, respetando los límites de Cloudflare Workers.",
      },
      {
        tag: "Calidad",
        title: "CI estricto y pruebas de backup/restore",
        text: "Pipelines automatizados exigen linting sin avisos, TypeScript estricto, pruebas unitarias y de integración, verificación real de backup/restore de PostgreSQL y Lighthouse CI ≥ 95.",
      },
      {
        tag: "Interfaz",
        title: "Fluidez en CSS nativo",
        text: "Animaciones ligadas al scroll (animation-timeline), @view-transition, Popover/Anchor API nativos y soporte completo de prefers-reduced-motion sin cargar frameworks pesados.",
      },
      {
        tag: "Accesibilidad e i18n",
        title: "WCAG AA y trilingüe desde el inicio",
        text: "Contraste verificado en modo claro y oscuro, navegación completa por teclado con patrones WAI-ARIA, rutas canónicas y hreflang coherentes en PT-PT, EN y ES.",
      },
    ],
    stackTitle: "Stack por capa",
    stackLead: "Tecnologías elegidas por productividad, rendimiento predecible y longevidad.",
    stackGroups: [
      { title: "Runtime y Datos", items: ["Bun", "TypeScript", "PostgreSQL 16", "Prisma ORM"] },
      { title: "Web e Interfaz", items: ["React", "Astro 5", "Tailwind CSS v4", "CSS View Transitions"] },
      { title: "Escritorio y Hardware", items: [".NET / C#", "ADB / USB", "Windows Installer", "Docker Compose"] },
      { title: "Edge, Seguridad y CI", items: ["Cloudflare Workers", "AES-256-GCM", "CSP por SHA-256", "GitHub Actions · LHCI"] },
    ],
    authorEyebrow: "Autoría",
    authorRole: "Creador y arquitecto del ecosistema OficinaOS",
    authorNote: "El código de la app del taller, del diagnóstico USB y de este sitio está abierto en GitHub para inspección.",
    ctaGithub: "Perfil de GitHub",
    ctaLinkedin: "LinkedIn",
    ctaSource: "Código fuente",
    ctaContact: "Contacto",
  },
};
