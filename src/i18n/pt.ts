import {
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  RELEASES_URL,
} from "./utils";

type DocsSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  code?: string;
  links?: { label: string; href: string }[];
};

export const lang = "pt-PT";
export const locale = "pt";
export const ogLocale = "pt_PT";

export const t = {
  meta: {
    title: "OficinaOS — Gestão de oficina gratuita e self-hosted",
    description:
      "Sistema de gestão gratuito e open source (MIT) para oficinas de reparação de telemóveis. Corre num PC dentro da loja — os dados dos seus clientes nunca saem da sua rede.",
  },
  nav: {
    features: "Funcionalidades",
    pro: "Módulos Pro",
    install: "Instalar",
    docs: "Guia",
    github: "GitHub",
  },
  hero: {
    badge: "Gratuito · MIT · Self-hosted",
    title: "A sua oficina, organizada.",
    titleAccent: "Os seus dados, na loja.",
    subtitle:
      "O OficinaOS é um sistema de gestão gratuito e open source para oficinas de reparação de telemóveis. Corre num computador dentro da loja — reparações, stock, caixa e dados dos clientes nunca saem da vossa rede local.",
    ctaPrimary: "Ver no GitHub",
    ctaSecondary: "Guia de instalação",
    chips: ["Sem subscrições", "Funciona na rede local", "Web + Android"],
  },
  features: {
    title: "Tudo o que uma oficina precisa",
    subtitle:
      "Feito para o balcão, a bancada e o back-office — numa única app.",
    items: [
      {
        title: "Fluxo de reparações",
        desc: "Da receção à entrega: estados, prioridades, técnico atribuído, fotos e cronologia completa de cada reparação.",
      },
      {
        title: "Ponto de venda",
        desc: "Venda peças e acessórios ao balcão, com sessões de caixa, talões e registo de pagamentos.",
      },
      {
        title: "Stock e peças",
        desc: "Inventário com alertas de stock baixo, fornecedores e peças associadas a cada reparação.",
      },
      {
        title: "Página de acompanhamento",
        desc: "O cliente vê o estado da reparação no telemóvel com um código — sem conta e sem instalar nada.",
      },
      {
        title: "Aprovação de orçamentos",
        desc: "Envie orçamentos e o cliente aprova ou recusa diretamente na página de acompanhamento, com registo datado.",
      },
      {
        title: "Notificações",
        desc: "Notificações na app e por WhatsApp mantêm a equipa e os clientes informados.",
      },
      {
        title: "Interface multilingue",
        desc: "Disponível em português europeu, inglês, francês e espanhol.",
      },
      {
        title: "App Android",
        desc: "A mesma app em tablets Android no balcão — sem código separado.",
      },
      {
        title: "Cópias de segurança",
        desc: "Backups locais da base de dados com um comando — os dados são vossos.",
      },
    ],
  },
  screenshots: {
    title: "Veja em ação",
    subtitle: "Capturas de ecrã reais da app a correr numa oficina.",
    items: ["Painel de reparações", "Detalhe da reparação", "Página do cliente"],
    comingSoon: "Captura em breve",
  },
  pro: {
    badge: "Em desenvolvimento",
    title: "Módulos Pro",
    subtitle:
      "Módulos pagos e opcionais, em desenvolvimento ativo. O núcleo continua gratuito e MIT — para sempre.",
    items: [
      {
        title: "Automação de balcão",
        desc: "Atualizações automáticas por WhatsApp e recibos digitais — menos chamadas de «já está pronto?».",
      },
      {
        title: "Diagnóstico de bancada",
        desc: "Diagnóstico por cabo ao equipamento, com relatórios assistidos por IA.",
      },
      {
        title: "Certificação de usados",
        desc: "Ciclos de bateria, estado de bloqueio e grading para compra e venda — certificados A/B/C.",
      },
    ],
    waitlist: {
      title: "Lista de espera",
      subtitle: "Receba novidades quando os módulos Pro forem lançados.",
      placeholder: "voce@sualoja.pt",
      button: "Notificar-me",
      buttonGithub: "Seguir no GitHub",
      note: "Formulário estático — sem conta. Só enviamos novidades sobre os módulos Pro.",
      noteGithub:
        "Segue o repositório no GitHub — os lançamentos dos módulos Pro são anunciados em releases.",
    },
  },
  install: {
    title: "A funcionar em minutos",
    subtitle:
      "Um PC na loja, Docker, um comando. Depois da instalação, funciona offline na rede local.",
    steps: [
      {
        title: "Obter o código",
        desc: "Clone o repositório ou descarregue o instalador nas Releases.",
      },
      {
        title: "Arrancar com Docker",
        desc: "docker compose up -d sobe a app e a base de dados em contentores.",
      },
      {
        title: "Abrir no browser",
        desc: "http://localhost:4000 no PC — ou o IP da rede local noutros dispositivos.",
      },
    ],
    guideLink: "Guia de instalação completo",
    releasesLink: "Instalador para Windows (Releases)",
  },
  docs: {
    title: "Instalação e acesso",
    subtitle:
      "Do PC da loja ao telemóvel do cliente — todos os caminhos, passo a passo.",
    sections: <DocsSection[]>[
      {
        heading: "Instalação em minutos",
        paragraphs: [
          "No Windows, descarregue o instalador ZIP, extraia e execute INSTALAR.bat — instala o Docker se faltar, gera as palavras-passe e arranca tudo sozinho. Uso diário: INICIAR.bat / PARAR.bat.",
          "Em Linux/Mac ou por código-fonte, quatro comandos chegam:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guia de instalação completo", href: INSTALL_URL },
          { label: "Instalador para Windows", href: RELEASES_URL },
        ],
      },
      {
        heading: "Na loja — rede local",
        paragraphs: [
          "Um PC corre o servidor e a base de dados; todos os outros dispositivos abrem a app no browser, sem instalar nada:",
          "Use sempre o mesmo endereço que está em APP_URL no ficheiro .env. Funciona sem internet para o uso do dia a dia.",
        ],
        code: "http://192.168.1.33:4000   # o IP do PC-servidor",
        links: [],
      },
      {
        heading: "Telemóvel e tablet — ícone no ecrã (PWA)",
        paragraphs: [
          "O OficinaOS é uma PWA: pode ficar com ícone próprio e abrir em ecrã cheio, sem barra do browser.",
        ],
        list: [
          "iPhone/iPad: Safari → Partilhar → «Adicionar ao ecrã principal» — fica uma app standalone, mesmo em HTTP na rede da loja",
          "Android na loja: menu ⋮ do Chrome → «Adicionar ao ecrã principal» (atalho)",
          "Android com acesso HTTPS (túnel): o Chrome oferece «Instalar aplicação» — instalação nativa real",
          "Opcional: APK Android nativo via Capacitor (câmara integrada nas fichas) — ver docs/mobile-access.md",
        ],
        links: [
          {
            label: "Guia móvel completo",
            href: DOCS_MOBILE_URL,
          },
        ],
      },
      {
        heading: "Acesso remoto — Cloudflare Tunnel",
        paragraphs: [
          "Com o PC da loja ligado, um Cloudflare Tunnel gratuito expõe a app em HTTPS — sem abrir portas no router, sem IP público, funciona mesmo com CGNAT.",
          "Dá acesso remoto à equipa e activa os links públicos dos clientes: tracking, aprovação de orçamentos, pedido de avaliação e QR de garantia.",
        ],
        list: [
          "Cloudflare Zero Trust → Networks → Tunnels → criar túnel e copiar o token",
          "Hostname público (ex.: oficina.oseudominio.pt) → serviço http://app:4000",
          "No .env: TUNNEL_TOKEN=<token> e adicionar o hostname a EXTRA_TRUSTED_ORIGINS",
          "docker compose --profile tunnel up -d (ou COMPOSE_PROFILES=tunnel nas instalações)",
          "Definições → Loja → URL base de tracking → o hostname público",
        ],
        code: "TUNNEL_TOKEN=eyJh…\nEXTRA_TRUSTED_ORIGINS=https://oficina.oseudominio.pt",
        links: [
          { label: "Guia completo de acesso remoto", href: DOCS_REMOTE_URL },
        ],
      },
      {
        heading: "Privacidade por defeito",
        paragraphs: [
          "O túnel é opcional: a app continua 100% funcional na rede local sem internet. Os dados dos clientes ficam na loja — a Cloudflare apenas transporta tráfego encriptado quando o túnel está ligado.",
          "Para uma barreira extra à frente do login, o Cloudflare Access (grátis) permite exigir email + código — mantendo os caminhos públicos (/tracking, /pre-check) abertos aos clientes.",
        ],
        links: [],
      },
    ],
  },
  footer: {
    license: "Licença MIT",
    fork: "Fork de Reparilo",
    rights: "Software livre para oficinas independentes.",
  },
};

export type Copy = typeof t;
