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
      "Do PC da loja ao telemóvel — simples, mesmo sem perceber de tecnologia.",
    sections: [
      {
        heading: "Instalar (uma vez, ~10 minutos)",
        paragraphs: [
          "No Windows é duplo clique: descarregue o instalador ZIP, extraia e execute INSTALAR.bat — instala o Docker se faltar, gera as palavras-passe e arranca tudo sozinho. No dia a dia usa INICIAR.bat / PARAR.bat.",
          "Em Linux, Mac ou pelo código-fonte, quatro comandos chegam:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guia de instalação completo", href: INSTALL_URL },
          { label: "Instalador para Windows", href: RELEASES_URL },
        ],
      },
      {
        heading: "Na loja — telemóveis, tablets e PCs",
        paragraphs: [
          "Qualquer aparelho ligado à Wi-Fi da loja abre a app no browser — sem instalar nada. Basta escrever o endereço que a instalação dá e fazer login:",
          "Funciona sem internet para o uso do dia a dia. Guarde o endereço nos favoritos — é sempre o mesmo.",
        ],
        code: "http://192.168.1.33:4000   # o endereço do PC-servidor",
        links: [],
      },
      {
        heading: "Ícone no ecrã do telemóvel",
        paragraphs: [
          "Para abrir com um toque, como uma app normal — demora 10 segundos:",
        ],
        list: [
          "iPhone/iPad: Safari → botão Partilhar → «Adicionar ao ecrã principal»",
          "Android: Chrome → menu ⋮ → «Adicionar ao ecrã principal»",
          "Com acesso remoto ligado, o Android chega a oferecer «Instalar aplicação» — instalação real",
        ],
        links: [{ label: "Guia para telemóveis", href: DOCS_MOBILE_URL }],
      },
      {
        heading: "Fora da loja — acesso remoto",
        paragraphs: [
          "Com o PC da loja ligado, um Cloudflare Tunnel gratuito dá à loja um endereço https:// próprio — sem mexer no router, funciona com qualquer operadora, mesmo as que bloqueiam portas (CGNAT).",
          "Serve para a equipa consultar a app fora da loja e para os links dos clientes — tracking, orçamentos, QR de garantia — abrirem em qualquer lado.",
        ],
        list: [
          "Criar conta grátis na Cloudflare + um domínio (~10 €/ano)",
          "No painel Zero Trust: criar o túnel e copiar o token",
          "Duas linhas no ficheiro .env e reiniciar a app",
          "Na app: Definições → Loja → URL base de tracking → o endereço público",
        ],
        links: [
          { label: "Guia passo a passo", href: DOCS_REMOTE_URL },
        ],
      },
      {
        heading: "Privado por defeito",
        paragraphs: [
          "O túnel é opcional: a app funciona a 100% na rede local mesmo sem internet. Os dados dos clientes ficam na loja — a Cloudflare apenas transporta o tráfego encriptado quando o túnel está ligado.",
          "Quem quiser uma barreira extra pode ativar o Cloudflare Access (grátis): email + código antes do login, mantendo as páginas públicas dos clientes abertas.",
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
