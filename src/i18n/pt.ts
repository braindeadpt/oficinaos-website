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
        desc: "Disponível em português europeu, inglês e francês.",
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
    subtitle:
      "Capturas de ecrã reais em breve — enquanto isso, clone o repositório e veja ao vivo.",
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
      note: "Formulário estático — sem conta. Só enviamos novidades sobre os módulos Pro.",
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
  footer: {
    license: "Licença MIT",
    fork: "Fork de Reparilo",
    rights: "Software livre para oficinas independentes.",
  },
};

export type Copy = typeof t;
