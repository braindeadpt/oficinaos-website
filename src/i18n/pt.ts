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

export type DocsSection = {
  heading: string;
  /** Âncora estável — preserva links #antigos quando o slug do título muda. */
  id?: string;
  paragraphs: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  code?: string;
  links?: { label: string; href: string }[];
  images?: { src: string; alt: string; caption?: string }[];
};

export type DocPage = {
  title: string;
  subtitle: string;
  sections: DocsSection[];
};

export const lang = "pt-PT";
export const locale = "pt";
export const ogLocale = "pt_PT";

export const t = {
  meta: {
    title: "OficinaOS — gestão grátis para oficinas de reparação",
    description:
      "Reparações, orçamentos, stock e caixa num só programa, grátis e no PC da loja. Sem mensalidades e sem os dados dos seus clientes saírem da loja.",
  },
  nav: {
    features: "Funcionalidades",
    diag: "Diagnóstico",
    pro: "Módulos Pro",
    install: "Instalar",
    docs: "Guia",
    updates: "Novidades",
    github: "GitHub",
    githubLabel: "Código-fonte no GitHub",
    menuLabel: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    download: "Descarregar",
    language: "Idioma",
    products: "Produtos",
    productsMenuLabel: "Produtos OficinaOS",
    productItems: {
      os: { name: "OficinaOS", desc: "Reparações, clientes, stock e caixa num só programa. Grátis." },
      diag: { name: "Diag", desc: "Diagnóstico de telemóveis por cabo, com relatório para o cliente." },
      pro: { name: "Pro", desc: "Um plano com tudo: WhatsApp e SMS com IA, portal, ponto e faturação." },
      trade: { name: "Trade", desc: "Compra e venda de peças e equipamentos entre profissionais." },
    },
    openSource: "Código aberto",
    githubStars: "estrelas no GitHub",
    languageMenuLabel: "Escolher idioma",
    languageNames: { pt: "Português", en: "English", es: "Español" },
    skipToContent: "Saltar para o conteúdo",
    theme: { label: "Tema", system: "automático", light: "claro", dark: "escuro" },
  },
  hero: {
    badge: "Grátis para sempre · Os dados ficam na sua loja",
    title: "Menos telefonemas de «já está pronto?».",
    titleAccent: "A sua loja de reparações, organizada.",
    subtitle:
      "Programa grátis para lojas de reparação de telemóveis. Receção, orçamentos, stock e caixa num só programa, instalado no PC da loja. Os clientes podem acompanhar a reparação no telemóvel e a equipa sabe sempre o que há para fazer.",
    footerLabel: "Programa para lojas de reparação",
    ctaPrimary: "Descarregar para Windows",
    ctaSecondary: "Ver como funciona",
    downloadNote: "Grátis · Windows 10/11 · instalação guiada — se o SmartScreen avisar, é normal: programa novo sem reputação. «Mais informações» → «Executar mesmo assim»",
    chips: ["Sem mensalidades", "Funciona sem internet", "No PC, tablet e telemóvel"],
    techNote: "Para técnicos: código aberto (licença MIT), Linux/macOS com Docker —",
    techLink: "ver instalação avançada",
    videoLabel: "Ver a apresentação em vídeo",
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
        desc: "Alertas na app — e mensagens WhatsApp/SMS aos clientes com os módulos Pro.",
      },
      {
        title: "Interface multilingue",
        desc: "Disponível em português europeu, inglês, francês e espanhol.",
      },
      {
        title: "Funciona no telemóvel",
        desc: "Abra no browser de qualquer telemóvel ou tablet, na rede da loja, e adicione ao ecrã principal. Sem instalar nada.",
      },
      {
        title: "Cópias de segurança",
        desc: "Cópias de segurança da base de dados no próprio PC — os dados são seus.",
      },
    ],
  },
  screenshots: {
    title: "Veja em ação",
    subtitle:
      "O fluxo completo num minuto: check-in, orçamento e aprovação no telemóvel.",
    videoAria: "Vídeo de demonstração do OficinaOS",
  },
  pro: {
    badge: "Novo · 14 dias grátis",
    title: "OficinaOS Pro",
    subtitle:
      "O programa que descarrega é e será sempre gratuito e open source (licença MIT) — nunca será pago. O Pro é um plano opcional, com todos os módulos incluídos, para o que precisa de «chegar à internet» através da OficinaOS Cloud: mensagens aos clientes, portal, IA, ponto e faturação.",
    statusLabel: "Pro",
    teaser:
      "WhatsApp e SMS com assistente de IA, portal do cliente, Balcão IA, livro de ponto, faturação certificada e montra online — tudo num só plano, por cima do programa grátis.",
    more: "Conhecer o Pro",
    ctaBeta: "Experimentar 14 dias grátis",
    groups: ["Falar com clientes", "Vender e faturar", "Gerir e crescer"],
    cloudEngine: "A OficinaOS Cloud é o motor do Pro: liga a app à internet só para o que os módulos precisam.",
    modules: [
      { title: "Portal do cliente", desc: "Link público por reparação, com estado e resposta a orçamentos.", href: "/docs/portal/" },
      { title: "Bot de WhatsApp", desc: "O cliente pergunta pelo WhatsApp e recebe o estado real da reparação.", href: "/docs/whatsapp/" },
      { title: "Canal SMS", desc: "O mesmo assistente por SMS, com um telemóvel Android na loja.", href: "/docs/sms/" },
      { title: "Receção de diagnósticos", desc: "O cliente faz o diagnóstico em casa com o Diag e envia-o à loja.", href: "/docs/diag/" },
      { title: "Relatórios IA", desc: "O diagnóstico técnico explicado em linguagem simples.", href: "/docs/diag/" },
      { title: "Faturação (InvoiceXpress)", desc: "Faturas certificadas a partir da venda ou da reparação — só Portugal.", href: "/docs/invoicing/" },
      { title: "Montra online", desc: "Página pública com artigos do catálogo; os clientes reservam e o pedido entra na app.", href: "/docs/storefront/" },
      { title: "Procuro-peça", desc: "Quadro entre lojas OficinaOS para pedir e oferecer peças.", href: "/docs/market/" },
      { title: "Preços de mercado", desc: "Compare os seus preços com a mediana anónima de outras lojas.", href: "/docs/market-prices/" },
      { title: "Multi-loja", desc: "Receita e reparações de todas as suas lojas num só painel.", href: "/docs/multi-shop/" },
      { title: "Remarketing WhatsApp", desc: "Mensagem automática a clientes sem reparações há algum tempo.", href: "/docs/remarketing/" },
      { title: "Balcão IA", desc: "Caixa de entrada unificada de WhatsApp e SMS com um assistente de IA para a equipa — lê, resume e prepara respostas que um humano aprova.", href: "/docs/#modulos-pro-como-funcionam" },
      { title: "Livro de Ponto", desc: "Livro de ponto por WhatsApp e SMS — QR fixo na loja, registo com prova de localização no WhatsApp e painel de horas para a ACT.", href: "/docs/ponto/" },
    ],
    signup: {
      title: "Experimentar o OficinaOS Pro",
      subtitle:
        "Deixe o seu contacto: ajudamos a emparelhar e ativamos os 14 dias grátis. Sem compromisso e sem cartão. Se quiser ser um dos fundadores, diga-nos na mensagem.",
      email: "Email",
      emailPlaceholder: "voce@exemplo.pt",
      shop: "Nome do negócio",
      shopPlaceholder: "ex.: Repara Já",
      city: "Cidade",
      cityPlaceholder: "ex.: Braga",
      phone: "Telefone",
      phonePlaceholder: "ex.: 912 345 678",
      optional: "opcional",
      languageLabel: "Idioma",
      button: "Pedir os 14 dias grátis",
      mailSubject: "OficinaOS Pro — pedido de experiência grátis",
      note: "Usamos estes dados só para o contactar sobre o OficinaOS Pro.",
      noteMailto:
        "Ao enviar, abre-se o seu programa de email com os dados preenchidos — basta carregar em Enviar.",
      cloudText: "Já tem conta na OficinaOS Cloud?",
      cloudLink: "Entrar em cloud.oficinaos.app",
      sending: "A enviar…",
      success: "Pedido recebido — falamos consigo em breve.",
      errorInvalid:
        "Não conseguimos registar o pedido — verifique os dados e tente outra vez.",
      errorRate: "Demasiados pedidos — tente novamente daqui a uma hora.",
    },
  },
  diag: {
    badge: "Ferramenta gratuita",
    title: "OficinaOS Diag — diagnóstico por cabo",
    subtitle:
      "App Windows gratuita que lê qualquer Android ou iPhone ligado por USB: saúde da bateria, ecrã, sensores e armazenamento.",
    customerTitle: "Sou cliente",
    customerItems: [
      "Descarregue, ligue o telemóvel por cabo e veja bateria, ecrã e sensores — sem conta e sem instalação.",
      "Teste o ecrã e o toque no próprio telemóvel (cores e grelha de toque).",
      "Exporte o relatório em HTML/JSON — ou envie-o à sua oficina com o código que ela lhe deu.",
    ],
    shopTitle: "Tenho uma oficina",
    shopItems: [
      "O cliente usa a ferramenta em casa, grátis — e envia o diagnóstico com o código da sua loja.",
      "O relatório aterra na app como pré-check (Pedidos), pronto a converter em reparação — módulo Pro.",
      "Com relatórios IA, o mesmo diagnóstico gera um texto em linguagem simples para entregar ao cliente.",
    ],
    cta: "Descarregar para Windows",
    repoLink: "Código-fonte no GitHub",
    note: "Windows 10/11 · gratuito · sem conta. Android via depuração USB; iPhone via «Confiar neste computador».",
  },
  privacy: {
    badge: "RGPD",
    title: "Os dados ficam na loja.",
    subtitle:
      "A app corre num PC dentro da loja e não tem telemetria: por defeito, nenhum dado sai da loja. Cada módulo opcional que envia dados está declarado abaixo.",
    cards: [
      {
        title: "Tudo local por defeito",
        desc: "Clientes, reparações, stock e caixa vivem no PC da loja. Sem módulos Pro ligados, não recebemos nenhum dado da loja.",
      },
      {
        title: "A Cloud é opcional",
        desc: "Os módulos Pro, as contas na OficinaOS Cloud e o envio de logs do Diag usam os nossos servidores. Só são usados se a loja (ou o cliente, no Diag) os ligar.",
      },
      {
        title: "Extras declarados",
        desc: "WhatsApp, acesso remoto, IA e Cloud são opt-in — documentados item a item, prontos para o registo de tratamento (Art. 30).",
      },
    ],
    tableTitle: "Quando liga um módulo opcional, é isto que sai:",
    table: [
      {
        name: "OficinaOS Cloud (módulos Pro)",
        to: "Servidores OficinaOS",
        what: "Conta e emparelhamento; dados de cada módulo ativo — páginas do portal (com nome do cliente), mensagens WhatsApp recebidas, reservas da montra, diagnósticos enviados, totais diários (multi-loja) e preços partilhados. O token Meta da loja fica cifrado na Cloud para o envio de WhatsApp",
      },
      {
        name: "Relatórios IA (Pro)",
        to: "Fornecedor de IA da Cloud",
        what: "Os dados do diagnóstico e as notas que pedem o relatório",
      },
      {
        name: "Envio de log do Diag",
        to: "Servidores OficinaOS",
        what: "Só quando se carrega em «Enviar log»: o fim do ficheiro diag.log",
      },
      {
        name: "Notificações e bot WhatsApp",
        to: "Meta, via relay da OficinaOS Cloud",
        what: "Nº de telefone do cliente + texto da mensagem — transitam pela Cloud sem ficarem guardados nem registados (logs só com id, estado e telefone mascarado)",
      },
      {
        name: "SMS e bot SMS (Pro)",
        to: "OficinaOS Cloud → telemóvel Android da loja",
        what: "Credenciais do device + nº de telefone do cliente + texto da mensagem — transitam pela Cloud; corpos de mensagens não são registados",
      },
      {
        name: "Balcão IA (Pro)",
        to: "OficinaOS Cloud → fornecedor de IA que a loja escolher",
        what: "Resultados das ferramentas da caixa de entrada transitam pela Cloud sem ficarem guardados nem registados; tokens pessoais MCP ficam só como hash; a chave de IA da loja fica cifrada",
      },
      {
        name: "Livro de Ponto (Pro)",
        to: "OficinaOS Cloud → canais Pro (WhatsApp/SMS)",
        what: "Localização no momento do registo e fotos de prova de externos transitam pelos canais de mensagens — a Cloud não as guarda; o livro de ponto fica na app da loja",
      },
      {
        name: "Acesso remoto e links ao cliente",
        to: "Cloudflare",
        what: "O tráfego das páginas em trânsito",
      },
      {
        name: "Analista IA",
        to: "O fornecedor que configurar",
        what: "As perguntas que fizer à IA",
      },
    ],
    cloudPrivacyLink: "Política de privacidade da OficinaOS Cloud",
    tableNote:
      "Ver o detalhe completo no repositório — incluindo o que nunca sai.",
  },
  terms: {
    badge: "Legal",
    title: "Termos e condições",
    subtitle:
      "O essencial, em linguagem simples: o OficinaOS é software livre, os dados são seus e os serviços pagos são sempre opcionais.",
    sections: [
      {
        heading: "Software livre (MIT)",
        body: "O OficinaOS é distribuído sob a licença MIT: pode usar, copiar, modificar e redistribuir, inclusive comercialmente. O código-fonte completo está no GitHub. É um fork de Reparilo — o nome «Reparilo» não está coberto pela licença e não pode ser reutilizado noutras distribuições.",
      },
      {
        heading: "Sem garantia",
        body: "O software é fornecido «tal como está», sem garantia de qualquer tipo. A app faz backups automáticos, mas verificar que os backups existem e guardar cópias fora do PC é responsabilidade da loja.",
      },
      {
        heading: "Os seus dados",
        body: "A app corre num PC dentro da loja e os dados dos seus clientes ficam lá. A loja é a responsável pelo tratamento desses dados (RGPD): quem os recolhe, por quanto tempo os guarda e quem pode ver. Nós não temos acesso — nem pedimos.",
      },
      {
        heading: "Módulos Pro e OficinaOS Cloud",
        body: "O núcleo é grátis para sempre. Os módulos Pro são serviços opcionais pagos, ativados por servidor na OficinaOS Cloud, e regem-se pelos termos apresentados na subscrição. Desligar um módulo não apaga os dados locais — são seus.",
      },
      {
        heading: "Serviços de terceiros, custos e uso razoável",
        body: "As mensagens usam redes e serviços que não controlamos: tarifários de SMS/SIM, provider SMS, Meta (WhatsApp Business Platform) e gateways não-oficiais (Evolution API). Tarifas e custos por mensagem — SMS da operadora, créditos de provider, modelos Meta — são sempre da conta e da responsabilidade da loja. O transporte Evolution é não-oficial: a Meta pode limitar ou banir o número e esse risco é integralmente da loja (a app pede a aceitação de um termo próprio antes de ativar o bot). As funcionalidades que dependem de SIM/provider têm limites de uso razoável (ex.: flood control por número) — são para notificações e respostas de serviço, não para campanhas em massa; abuso pode violar o fair-use da operadora/provider e suspender o módulo.",
      },
      {
        heading: "Este site",
        body: "O site usa Cloudflare Web Analytics: estatísticas de visitas sem cookies, sem fingerprinting e sem dados pessoais — por isso não tem banner de cookies.",
      },
      {
        heading: "Lei aplicável",
        body: "Estes termos regem-se pela lei portuguesa. Dúvidas ou problemas: fale connosco pelo email de contacto no rodapé antes de qualquer disputa — resolvemos quase tudo a conversar.",
      },
    ],
  },
  install: {
    title: "A funcionar em minutos",
    subtitle:
      "Um PC Windows na loja e um instalador. Depois da instalação, funciona offline na rede local.",
    steps: [
      {
        title: "Descarregar o instalador",
        desc: "Descarregue o OficinaOS-Setup.exe — um instalador Windows normal, sem Docker.",
      },
      {
        title: "Duplo clique no instalador",
        desc: "Pede administrador uma só vez (serviços e firewall) e faz tudo sozinho. Se o SmartScreen avisar: «Mais informações» → «Executar mesmo assim».",
      },
      {
        title: "Abrir no browser",
        desc: "No fim abre http://localhost:4000 e fica um ícone na bandeja. Nos outros dispositivos da loja: http://oficinaos.local:4000 — ou leia o QR code na página Ajuda.",
      },
    ],
    downloadButton: "Descarregar para Windows",
    dockerLink: "Instalação avançada (Docker)",
    portableLink: "Versão portátil (sem administrador)",
    downloadNote: "Windows 10/11 64-bit · grátis · corre como serviço, sem Docker · última versão no GitHub",
    advanced: {
      badge: "Avançado",
      title: "Linux e macOS — Docker manual",
      desc: "Não há instalador automático para Linux nem macOS. Com o Docker instalado, a app arranca com estes comandos:",
      commentGet: "obter o código e a configuração",
      commentStart: "arrancar com docker (o seed só na 1ª vez)",
      commentOpen: "depois, abrir no browser",
      note: "Edite o .env antes de arrancar (palavra-passe inicial do admin e APP_URL). Detalhes no guia de instalação.",
    },
    guideLink: "Guia de instalação completo",
    releasesLink: "Todas as versões (Releases)",
  },
  docs: {
    title: "Guia completo",
    subtitle:
      "Para técnicos, lojas de reparação e revendedores: instalação, dia a dia, backups e resolução de problemas — passo a passo.",
    toc: "Neste guia",
    backToGuide: "Guia completo",
    ui: {
      navLabel: "Documentação",
      menu: "Menu da documentação",
      breadcrumb: "Caminho",
      groups: ["Começar", "Dia a dia", "Impressão", "Módulos Pro", "Ajuda"],
      modules: "Guias dos módulos",
      onThisPage: "Nesta página",
      search: "Pesquisar na documentação",
      searchShort: "Pesquisar",
      searchPlaceholder: "Pesquisar no guia… (ex.: backups, impressora, IVA)",
      searchHint: "Escreva para pesquisar nos títulos e secções de todos os guias.",
      searchEmpty: "Sem resultados para «{q}». Experimente outra palavra ou menos palavras.",
      searchOne: "1 resultado",
      searchMany: "{n} resultados",
      searchError: "Não foi possível carregar a pesquisa. Use o menu da documentação.",
      searchKeys: "↑ ↓ para escolher · Enter para abrir · Esc para fechar",
      close: "Fechar",
      copy: "Copiar",
      copied: "Copiado",
      copyLabel: "Copiar comandos",
    },
    sections: [
      {
        heading: "O que vem na app (grátis, MIT)",
        paragraphs: [
          "Tudo o que uma oficina usa no dia a dia, sem subscrição nem limites:",
        ],
        table: {
          head: ["Menu", "O que inclui"],
          rows: [
            ["Painel", "Resumo do dia — reparações abertas, prioridades e alertas (vista diferente para dono, técnico e balcão)"],
            ["Reparações", "Fichas com código único (REP-…), estados (receção → pronto → entregue), timeline, notas internas e ao cliente, fotos e prazo"],
            ["Pedidos", "Fila de entrada — pedidos e diagnósticos enviados por clientes, prontos a converter em reparação"],
            ["Devoluções", "Gestão de devoluções ligadas a vendas e reparações"],
            ["Clientes", "Fichas com histórico de reparações, pesquisa por nome/telefone/IMEI, consentimentos"],
            ["Inventário de peças", "Stock, alertas de mínimos, fornecedores, peças associadas a reparações"],
            ["POS de balcão", "Venda de peças e acessórios, sessões de caixa, talões e registo de pagamentos"],
            ["Serviços de reparação", "Catálogo de reparações com preços — a «tabela de preços» da loja"],
            ["Orçamentos", "Versões enviadas ao cliente, resposta aceite/recusada com registo datado, histórico completo"],
            ["Notificações", "Alertas na app, modelos de mensagem editáveis e fila de envio — envio WhatsApp/SMS com módulo Pro"],
            ["Relatórios", "Vendas, reparações e margens por período — com página de impressão A4"],
            ["Impressão", "Talões e etiquetas configuráveis — rolo 58/80 mm, A4, secções opcionais e impressão direta em térmicas de rede"],
            ["Analista de IA", "Perguntas sobre os dados da loja em linguagem natural"],
            ["Tracking do cliente", "Página pública na rede da loja para o cliente seguir a reparação — grátis em LAN"],
            ["Utilizadores", "Vários funcionários com perfis e permissões por função"],
            ["Idiomas", "Português, inglês, francês e espanhol"],
          ],
        },
        images: [
          {
            src: "/screenshots/dashboard.webp",
            alt: "Painel de reparações do OficinaOS",
            caption: "O painel — as reparações do dia de relance",
          },
          {
            src: "/screenshots/job-detail.webp",
            alt: "Ficha de reparação com estados, orçamento e timeline",
            caption: "A ficha — estados, orçamento e cronologia completa",
          },
          {
            src: "/screenshots/tracking.webp",
            alt: "Página de acompanhamento que o cliente vê no telemóvel",
            caption: "A página de tracking que o cliente abre no telemóvel",
          },
        ],
        links: [],
      },
      {
        heading: "Três formas de instalar",
        paragraphs: [
          "O OficinaOS é sempre o mesmo programa — a diferença está em como é arrancado no PC da loja. Há três caminhos:",
          "OficinaOS-Setup.exe (recomendado) — um instalador Windows normal, sem Docker: corre como serviço, arranca com o PC, cria a regra de firewall, faz backup diário automático e deixa um ícone na bandeja. É o caminho certo para o PC da loja.",
          "Modo portátil — um pacote único com tudo embutido (a app, a base de dados PostgreSQL e o runtime), sem instalação e sem serviços Windows. Existe para as situações em que o instalador não serve: PCs onde não tens a password de administrador, quem prefere não instalar nada no sistema, e como fallback se o instalador falhar numa máquina concreta (antivírus, políticas da empresa).",
          "Docker — para um NAS, um servidor dedicado, Linux ou macOS, ou para quem já usa Docker.",
        ],
        table: {
          head: ["", "Setup.exe (recomendado)", "Portátil", "Docker"],
          rows: [
            ["Quando usar", "PC da loja — quase sempre", "Sem admin, sem instalar nada, ou instalador falha", "NAS, servidor, Linux/macOS"],
            ["Requer administrador", "Sim, durante a instalação", "Não", "Sim, na instalação do Docker"],
            ["Download", "~339 MB", "~540 MB", "~1 GB (Docker + app)"],
            ["Arranque com o PC", "Automático (serviço Windows)", "Opcional — tarefa agendada, perguntado na 1ª execução", "Automático"],
            ["Se a app crashar", "Reinicia sozinha", "Reinicia sozinha (wrapper)", "Reinicia sozinha"],
            ["Backups", "Diário automático às 03:30", "A cada arranque + BACKUP.bat", "Diário automático (a cada 24h)"],
            ["Backups fora do PC", "Copiar a pasta de backups", "Copiar a pasta de backups", "Suportado (rclone → S3/B2/GCS)"],
            ["Atualizações", "Botão «Atualizar» na app (~100 MB) ou Setup por cima", "Botão «Atualizar» na app ou ATUALIZAR.bat", "ATUALIZAR.bat — só descarrega o que mudou"],
            ["Acesso remoto (HTTPS)", "Cloudflare Tunnel instalado à parte", "Cloudflare Tunnel instalado à parte", "Cloudflare Tunnel incluído"],
          ],
        },
        links: [
          { label: "Guia de instalação", href: INSTALL_URL },
          { label: "Documentação do modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Instalação — OficinaOS-Setup.exe (uma vez, ~10 minutos)",
        paragraphs: [
          "Descarregue o OficinaOS-Setup.exe na página de releases e faça duplo clique. Se o Windows Defender SmartScreen avisar: «Mais informações» → «Executar mesmo assim».",
          "Pede administrador uma só vez (serviços, firewall e a tarefa de backup) e faz tudo sozinho. No fim o browser abre em http://localhost:4000. No primeiro acesso a app mostra o ecrã de configuração inicial — crias o utilizador administrador e a palavra-passe.",
          "Fica um ícone na bandeja junto ao relógio: abrir a app, ver o estado, parar/arrancar, fazer backup. Noutros aparelhos da loja: http://oficinaos.local:4000 — ou o QR code na página Ajuda.",
          "Em Linux ou macOS não há instalador — usa-se o Docker manualmente:",
        ],
        images: [
          {
            src: "/screenshots/smartscreen-pt.webp",
            alt: "Aviso SmartScreen do Windows — «Mais informações» e depois «Executar mesmo assim»",
            caption: "O instalador ainda não é assinado — o Windows pode mostrar este aviso. «Mais informações» → «Executar mesmo assim».",
          },
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guia de instalação completo", href: INSTALL_URL },
          { label: "Descarregar OficinaOS-Setup.exe", href: SETUP_EXE_URL },
        ],
      },
      {
        heading: "Modo portátil — sem admin, sem instalar nada",
        paragraphs: [
          "Para quando o instalador não é opção: não tens a password de administrador do PC, não queres que nada fique instalado no sistema, ou o instalador/serviços foram bloqueados naquela máquina (antivírus, políticas da empresa).",
          "Descarrega oficinaos-portable.zip, extrai para uma pasta e corre INICIAR.bat. A app é exatamente a mesma — mesmo código, mesma base de dados PostgreSQL, mesmas funcionalidades — e também tem o botão «Atualizar» dentro da app.",
          "Duas diferenças práticas face ao Setup.exe: o arranque automático é uma tarefa agendada opcional (o INICIAR.bat pergunta na 1ª execução) em vez de um serviço; e como ninguém abre a firewall por ti, o Windows pergunta uma vez se permite a ligação — escolhe «Permitir» para os tablets da loja ligarem.",
          "Se chegaste aqui por causa do erro «virtualization support not detected» do caminho Docker, o portátil resolve — mas nesse caso o Setup.exe é ainda mais simples, porque também não precisa de Docker.",
        ],
        links: [
          { label: "Descarregar pacote portátil", href: PORTABLE_ZIP_URL },
          { label: "Como o portátil funciona por dentro", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Dia a dia — ligar, desligar, ficheiros",
        paragraphs: [
          "Depois de instalado, o dia a dia resume-se a duplo clique num ficheiro. Os nomes são iguais nos dois modos — só muda a pasta onde estão:",
        ],
        table: {
          head: ["Ficheiro", "Para quê"],
          rows: [
            ["INICIAR.bat", "Ligar o OficinaOS — abre o browser no fim"],
            ["PARAR.bat", "Desligar — os dados ficam guardados"],
            ["ATUALIZAR.bat", "Atualizar para a versão mais recente"],
            ["BACKUP.bat", "(só portátil) Backup manual da base de dados"],
            ["RESTAURAR.bat", "(só portátil) Repor a base de dados a partir de um backup"],
          ],
        },
        list: [
          "Instalação por Setup.exe: o serviço corre sozinho — parar/arrancar e backup manual pelo ícone na bandeja.",
          "Modo Docker: na pasta onde extraiu o instalador.",
          "Modo portátil: dentro da pasta oficinaos-portable — os dados vivem em data\\, os backups em app\\uploads\\backups.",
          "Outros dispositivos da loja (tablet, telemóvel, outro PC) não instalam nada — abrem http://<IP-do-PC>:4000 no browser.",
        ],
        links: [],
      },
      {
        heading: "Backups e restauro",
        paragraphs: [
          "Os backups são ficheiros comprimidos (.sql.gz) com a base de dados inteira. A app mostra o estado do último backup em Definições → Loja → Backups — funciona igual em todos os modos.",
          "Na instalação por Setup.exe uma tarefa agendada faz backup diário às 03:30 para C:\\ProgramData\\OficinaOS\\backups. No modo Docker um serviço dedicado faz um backup a cada 24 horas, guarda 14 dias, e opcionalmente copia para armazenamento externo (S3, Backblaze, etc.) e testa o restauro automaticamente.",
          "No modo portátil o backup corre a cada arranque e com BACKUP.bat. Restaurar é com RESTAURAR.bat (repor um ficheiro de backups). Como não há cópia fora do PC automática, copie a pasta app\\uploads\\backups para um disco externo ou pen — backups no mesmo disco não protegem contra avaria, roubo ou ransomware.",
        ],
        links: [
          { label: "Backups e restore (Docker)", href: BACKUP_DOCS_URL },
          { label: "Backups no modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Atualizações",
        paragraphs: [
          "A app avisa no topo quando existe versão nova. Nas instalações por Setup.exe e no modo portátil, o dono da loja tem um botão «Atualizar» no aviso — descarrega só a parte da app (~100 MB) com verificação SHA-256, faz backup da base de dados antes e repõe a versão anterior sozinho se a nova não arrancar. A app fica offline ~1-2 minutos durante a troca.",
          "À mão também funciona: o Setup.exe da versão nova por cima, ou ATUALIZAR.bat no portátil e no Docker. No Docker pode ainda ativar-se atualização 100% automática (Watchtower) — as migrações da base de dados correm sempre sozinhas.",
        ],
        links: [{ label: "Todas as releases", href: RELEASES_URL }],
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
      {
        heading: "Impressão — talões e etiquetas",
        paragraphs: [
          "O OficinaOS imprime os três documentos do dia a dia diretamente da ficha ou do ecrã de venda: o talão da reparação para o cliente, o talão de venda do POS e a etiqueta que se cola no equipamento.",
          "Tudo se configura em Definições → Loja → Impressão — as escolhas aplicam-se a todos os documentos a partir desse momento:",
        ],
        table: {
          head: ["Opção", "Escolhas"],
          rows: [
            ["Papel do talão", "Rolo térmico 58 mm · Rolo térmico 80 mm · Folha A4 (documento completo, tipo fatura)"],
            ["Secções do talão", "Ligar/desligar cada bloco: IMEI, problema reportado, assinatura do cliente, QR de tracking, garantia"],
            ["Etiqueta do equipamento", "40×20 mm · 57×32 mm · 62×29 mm"],
            ["Método de impressão", "Caixa de diálogo Imprimir — qualquer impressora instalada — ou térmica de rede ESC/POS — direto, sem diálogo"],
          ],
        },
      },
      {
        heading: "Dois métodos de impressão",
        paragraphs: [
          "Caixa de diálogo Imprimir (predefinição): o documento abre num separador novo e usa o diálogo de impressão do sistema. Funciona com qualquer impressora instalada — USB, rede, Bluetooth — e até com «Guardar como PDF». As etiquetas seguem sempre este caminho: as etiqueteiras falam outras linguagens (ZPL/TSPL) e o browser trata do driver.",
          "Impressora térmica de rede (ESC/POS): a app envia o talão diretamente para a impressora pela rede da loja — um clique e sai o talão, sem diálogo. Serve para térmicas ligadas por cabo ou Wi-Fi (Epson TM, Star, Xprinter e compatíveis ESC/POS). O texto usa a página de código CP850 — acentos corretos — e o QR de tracking é impresso pelos comandos nativos da impressora, sem drivers.",
        ],
        list: [
          "Ativar (uma vez): Definições → Loja → Impressão → Método «Impressora térmica de rede» → indicar IP e porta (quase sempre 9100) → «Enviar ticket de teste»",
          "Descobrir o IP: na maioria das térmicas, ligar com o botão FEED premido imprime um autoteste com o IP; também aparece na lista de dispositivos do router",
          "Fixar o IP no router (reserva DHCP) — sem isso a impressora pode mudar de endereço e deixar de imprimir",
          "Com papel A4 configurado ou impressora só USB, o caminho é a caixa de diálogo — ESC/POS é só para rolos térmicos na rede",
        ],
      },
      {
        heading: "Impressão — problemas comuns",
        paragraphs: ["As situações mais frequentes:"],
        table: {
          head: ["Sintoma", "O que fazer"],
          rows: [
            ["«Não foi possível aceder à impressora»", "Confirmar que está ligada e na mesma rede da loja; rever IP e porta; repetir o «ticket de teste»"],
            ["«Nenhuma impressora de rede configurada»", "Indicar IP + porta em Definições → Loja → Impressão — ou mudar o método para «Caixa de diálogo Imprimir»"],
            ["A impressora mudou de IP", "Criar uma reserva DHCP no router e atualizar o IP nas definições"],
            ["Talão cortado ou margens erradas", "Na caixa de diálogo: escolher o papel certo (58 mm, 80 mm ou A4), margens «Nenhuma» e escala 100%"],
            ["O separador do talão não abre", "Permitir pop-ups para o endereço da app e imprimir outra vez"],
            ["Impressora só liga por USB", "Usar o método «Caixa de diálogo Imprimir» — ESC/POS precisa de uma impressora na rede"],
          ],
        },
      },
      {
        heading: "Módulos Pro — como funcionam",
        paragraphs: [
          "Os módulos Pro são funcionalidades que precisam de «chegar à internet». A app continua 100% local e gratuita; quando a loja quer alcance remoto, emparelha a app com a OficinaOS Cloud — o nosso serviço que faz de ponte entre a app da loja e o exterior, sem expor o PC da loja.",
          "A loja cria uma conta na Cloud e emparelha a app com um código (uma vez). Cada módulo é ativado do lado do servidor — sem ficheiros de licença. A app sincroniza com a Cloud a cada ~2 minutos para enviar e receber — as filas de mensagens (WhatsApp/SMS) têm um ciclo rápido próprio de ~12 segundos, para as respostas do bot chegarem em segundos.",
          "Sem emparelhamento, tudo continua a funcionar na rede local — os módulos Pro simplesmente não aparecem.",
          "Todos os canais de mensagens — SMS e WhatsApp, em qualquer transporte (rede local ou Cloud) — são módulos Pro: a app gratuita não envia nem recebe mensagens. Os cartões das definições ficam visíveis, mas ao clicar mostram «Esta opção existe apenas no OficinaOS Pro.»",
        ],
        table: {
          head: ["Módulo", "O que o cliente da loja ganha"],
          rows: [
            ["Portal do cliente", "Link público com o estado da reparação e botões para aceitar/recusar orçamento — sem ligar à loja"],
            ["Bot de WhatsApp", "Escreve para o WhatsApp da loja e recebe o estado da reparação automaticamente; aprova orçamentos com SIM/NÃO"],
            ["Canal SMS", "O mesmo assistente por SMS — telemóvel Android ligado à Cloud (funciona com o PC desligado e serve várias lojas) ou na rede local"],
            ["Balcão IA", "Caixa de entrada unificada de WhatsApp e SMS, com IA a ajudar a equipa a ler, resumir e preparar respostas"],
            ["Diagnóstico à distância", "Faz o diagnóstico do telemóvel em casa (oficinaos-diag, grátis) e envia à loja com um código"],
            ["Relatórios IA", "Relatório do diagnóstico escrito em linguagem simples, pronto a entregar"],
            ["Faturação certificada", "Fatura ou fatura-recibo legal emitida diretamente da reparação ou venda — via InvoiceXpress, com a conta da própria loja — só Portugal"],
            ["Montra online", "Página pública com artigos do catálogo da loja; o cliente reserva e a reserva entra na fila de Pedidos"],
            ["Procuro-peça", "Quadro entre lojas OficinaOS para pedir peças e responder «tenho» — o negócio acerta-se entre lojas"],
            ["Preços de mercado", "Mediana anónima dos preços de reparações e peças de outras lojas, para comparar com os seus"],
            ["Multi-loja", "Receita e reparações de todas as lojas do mesmo dono num só painel na OficinaOS Cloud"],
            ["Remarketing WhatsApp", "Mensagem automática a clientes com consentimento cuja última reparação já foi há algum tempo"],
            ["Livro de Ponto", "Livro de ponto da equipa por WhatsApp e SMS — entrada, pausas e saída com prova de localização no WhatsApp; painel de horas e exportação para a ACT"],
          ],
        },
        links: [],
      },
      {
        heading: "Preços",
        paragraphs: [
          "A app completa é gratuita e open source (MIT) — sem limites, sem contas, sem período de teste. Para sempre.",
          "O Pro é um só plano, o OficinaOS Pro, com todos os módulos incluídos — não há módulos para escolher nem para pagar à parte. Há duas mensalidades, conforme a IA venha incluída ou use a sua própria chave de IA, e 14 dias grátis. Preços, extras e serviços estão na página do OficinaOS Pro. Sem fidelização e sem custos escondidos.",
          "* Nota WhatsApp: a ligação rápida por QR não tem custos por mensagem. No WhatsApp oficial da Meta (extra), a Meta cobra as mensagens diretamente à loja, com 1.000 respostas grátis por mês e por número — custo da Meta, não nosso.",
        ],
        table: {
          head: ["O quê", "Estado", "Preço"],
          rows: [
            ["App completa (core)", "Grátis para sempre", "0 €"],
            ["OficinaOS Diag (ferramenta)", "Grátis para sempre", "0 €"],
            ["Portal do cliente", "Disponível", "Incluído no Pro"],
            ["Bot de WhatsApp", "Disponível", "Incluído no Pro*"],
            ["Canal SMS (gateway Android)", "Disponível", "Incluído no Pro. O tarifário do SIM é da loja"],
            ["Balcão IA", "Disponível", "Incluído no Pro"],
            ["Receção de diagnósticos", "Disponível", "Incluído no Pro"],
            ["Relatórios IA", "Disponível", "Incluído no Pro"],
            ["Faturação (InvoiceXpress)", "Disponível", "Incluído no Pro. A conta InvoiceXpress é da loja e tem o custo próprio do serviço deles"],
            ["Montra online (+ personalização)", "Disponível", "Incluído no Pro"],
            ["Procuro-peça", "Disponível", "Incluído no Pro"],
            ["Preços de mercado", "Disponível", "Incluído no Pro"],
            ["Multi-loja", "Disponível", "Incluído no Pro (até 3 lojas; lojas adicionais com custo mensal)"],
            ["Remarketing WhatsApp", "Disponível", "Incluído no Pro*"],
            ["Livro de Ponto", "Disponível", "Incluído no Pro"],
          ],
        },
        links: [],
      },
      {
        heading: "Portal do cliente (Pro)",
        paragraphs: [
          "Com o módulo ativo, cada reparação ganha um botão «Public link» na página de detalhe. Ao clicar, a app publica na Cloud um snapshot redigido do trabalho — estado, dispositivo, orçamento, prazo e timeline — e copia o link.",
          "O link é segredo por trabalho (um código aleatório de 32 caracteres): quem o tem vê a página. Envia-se ao cliente por SMS, WhatsApp ou impresso no registo. A página atualiza sozinha quando o estado muda na app.",
          "Se houver um orçamento pendente, o cliente aceita ou recusa diretamente na página — a resposta entra na app pelo fluxo normal de orçamentos, com notificação ao staff.",
        ],
        links: [
          { label: "Guia detalhado do portal", href: "/docs/portal" },
        ],
      },
      {
        heading: "Bot de WhatsApp (Pro)",
        paragraphs: [
          "O cliente escreve para o número de WhatsApp da loja e o bot responde com dados reais da ficha — sem ninguém pegar no telemóvel. Funciona com o próprio número da loja (o WhatsApp Business do telemóvel continua a funcionar em paralelo).",
          "Notas honestas: a resposta chega em ~10–15 segundos (poller rápido de mensagens); o setup usa a WhatsApp Business Platform oficial da Meta e, durante o beta, ajudamos na configuração. Existe também o transporte Evolution (não-oficial — envio e bot são ambos Pro) — ver o guia.",
        ],
        table: {
          head: ["O cliente escreve", "O bot responde"],
          rows: [
            ["«está pronto?» ou qualquer texto", "Estado da reparação + previsão"],
            ["«orçamento» / «preço»", "Valor do orçamento + instruções para responder"],
            ["SIM / aceito", "Aprova o orçamento pendente (mesmo fluxo do balcão)"],
            ["NÃO / recuso", "Recusa o orçamento"],
            ["Código da reparação (REP-…)", "Estado desse trabalho"],
            ["«ajuda», áudio ou imagem", "Encaminha ao staff com aviso na app"],
          ],
        },
        links: [
          { label: "Guia detalhado do bot", href: "/docs/whatsapp" },
        ],
      },
      {
        heading: "Canal SMS (Pro)",
        id: "canal-sms-gratis-no-core",
        paragraphs: [
          "O mesmo assistente automático, mas por SMS — para lojas que não querem (ou ainda não têm) a conta empresarial da Meta. Um telemóvel Android com SIM faz de ponte: ligado à OficinaOS Cloud envia e recebe mesmo com o PC desligado (e pode servir várias lojas do mesmo dono); na rede local fica como transporte alternativo de envio.",
          "Sem contas Meta, sem aprovações de modelos e sem custo por mensagem — só o tarifário do SIM da loja (cartões com SMS incluídos tornam o custo marginal zero). Precisa do módulo SMS (Pro): sem ele a app não envia nem recebe mensagens.",
        ],
        links: [
          { label: "Guia detalhado do canal SMS", href: "/docs/sms" },
        ],
      },
      {
        heading: "Diagnósticos enviados por clientes (Pro)",
        paragraphs: [
          "A ferramenta oficinaos-diag é gratuita para qualquer pessoa: o cliente descarrega, liga o telemóvel ao PC por cabo e o programa lê bateria, ecrã, sensores e armazenamento.",
          "Com o módulo ativo, a loja recebe esses diagnósticos diretamente na app (fila de pedidos), prontos a converter em reparação — o cliente só precisa do código da loja. O módulo de relatórios IA transforma os dados técnicos num texto simples para entregar ao cliente.",
        ],
        links: [
          { label: "Guia completo do Diag", href: "/docs/diag" },
          { label: "Sobre o oficinaos-diag", href: DIAG_REPO_URL },
        ],
      },
      {
        heading: "Faturação certificada (Pro)",
        paragraphs: [
          "A app emite documentos fiscais legais diretamente da venda ou da reparação — fatura-recibo quando o cliente tem NIF, fatura simplificada quando não tem. A emissão é feita via InvoiceXpress com a conta da própria loja: a chave API fica guardada encriptada no PC da loja e a app fala diretamente com o InvoiceXpress — a OficinaOS Cloud só controla o acesso ao módulo, nunca vê os documentos. Só para lojas em Portugal.",
        ],
        links: [
          { label: "Guia detalhado da faturação", href: "/docs/invoicing" },
        ],
      },
      {
        heading: "Montra, procuro-peça, preços, multi-loja e remarketing (Pro)",
        paragraphs: [
          "Mais cinco módulos Pro, todos incluídos no plano e ativados na conta OficinaOS Cloud. Cada um tem um guia curto:",
        ],
        table: {
          head: ["Módulo", "Para quê"],
          rows: [
            ["Montra online", "Página pública com os artigos que escolher do catálogo — o cliente reserva e o pedido aparece em Pedidos"],
            ["Procuro-peça", "Pedir uma peça às outras lojas OficinaOS ou responder aos pedidos delas"],
            ["Preços de mercado", "Ver a mediana anónima dos preços de outras lojas ao lado dos seus"],
            ["Multi-loja", "Painel com a receita e as reparações de todas as suas lojas"],
            ["Remarketing WhatsApp", "Mensagem automática a clientes que não voltam há algum tempo"],
          ],
        },
        links: [
          { label: "Guia da montra online", href: "/docs/storefront/" },
          { label: "Guia do procuro-peça", href: "/docs/market/" },
          { label: "Guia dos preços de mercado", href: "/docs/market-prices/" },
          { label: "Guia do multi-loja", href: "/docs/multi-shop/" },
          { label: "Guia do remarketing", href: "/docs/remarketing/" },
        ],
      },
      {
        heading: "Livro de ponto (Pro)",
        paragraphs: [
          "O módulo Livro de Ponto transforma o WhatsApp ou SMS da loja num livro de ponto: um QR fixo à entrada e comandos de entrada, pausa, regresso e saída com prova de localização no WhatsApp — com um painel de horas e exportação para a ACT.",
          "Honestamente: ajuda a loja a cumprir o Código do Trabalho — a decisão e a responsabilidade legal são da loja.",
        ],
        links: [
          { label: "Guia do livro de ponto", href: "/docs/ponto/" },
        ],
      },
      {
        heading: "Problemas comuns",
        paragraphs: [
          "As situações mais frequentes e a resolução de cada uma:",
        ],
        table: {
          head: ["Sintoma", "O que fazer"],
          rows: [
            ["SmartScreen avisa ao instalar", "«Mais informações» → «Executar mesmo assim» — é um ficheiro novo sem reputação, não um vírus"],
            ["«Virtualization support not detected»", "O instalador oferece as duas opções: ativar na BIOS ou usar o modo portátil"],
            ["O Windows pede para reiniciar durante a instalação", "Reiniciar e correr INSTALAR.bat outra vez — é normal na instalação do Docker"],
            ["Firewall do Windows pergunta", "Escolher «Permitir» em rede privada"],
            ["Página em branco / não abre", "Ctrl+F5; confirmar que o endereço é http:// (não https://)"],
            ["«Invalid username or password»", "O login é por utilizador (admin), não por email"],
            ["O PC mudou de IP e os outros dispositivos não ligam", "Atualizar APP_URL no .env (Docker) ou apagar .env e correr INSTALAR.bat de novo"],
            ["Porta 4000 ocupada (portátil)", "Mudar PORT em app\\.env"],
            ["Postgres não arranca (portátil)", "Ver data\\postgres.log; porta 5433 ocupada → mudar em data\\postgresql.conf e no .env"],
            ["Desinstalar tudo", "PARAR.bat + apagar a pasta (modo portátil); docker compose down -v + apagar a pasta (Docker). Atenção: apaga a base de dados — fazer backup antes"],
          ],
        },
        links: [{ label: "Troubleshooting completo", href: INSTALL_URL }],
      },
      {
        heading: "Perguntas frequentes",
        paragraphs: ["As dúvidas que ouvimos mais vezes:"],
        table: {
          head: ["Pergunta", "Resposta"],
          rows: [
            ["Preciso de internet?", "Não para o uso diário — a app corre toda na rede da loja. Só para atualizações e módulos Pro."],
            ["Os dados dos clientes vão para algum servidor?", "Não por defeito — a app não tem telemetria. Com módulos Pro, a OficinaOS Cloud recebe só os dados de que cada módulo precisa (por exemplo, páginas do portal, mensagens, reservas e diagnósticos enviados), nunca custos internos nem notas internas. O detalhe está na política de privacidade da Cloud (cloud.oficinaos.app/privacy)."],
            ["Funciona no telemóvel?", "Sim — na Wi-Fi da loja qualquer aparelho abre no browser; fora da loja com o acesso remoto (Cloudflare Tunnel)."],
            ["O cliente tem de instalar alguma coisa?", "Não — o portal abre num link no browser; o bot responde no WhatsApp normal dele."],
            ["Quanto custa?", "A app completa é gratuita (licença MIT). O OficinaOS Pro é um plano opcional, com todos os módulos incluídos e 14 dias grátis."],
            ["Várias lojas / filiais?", "Cada loja tem a sua instalação. Com o módulo Pro Multi-loja, o dono vê a receita e as reparações de todas as lojas num só painel na OficinaOS Cloud."],
            ["E se o PC avariar?", "Backups diários automáticos; restaurar noutro PC é copiar o backup e correr o instalador."],
            ["Mac ou Linux?", "Sim, via Docker manual — o instalador automático é só Windows."],
            ["Dá para importar dados de outro sistema?", "Clientes e catálogo por CSV; contacte-nos para migrações assistidas."],
          ],
        },
        links: [],
      },
      {
        heading: "Documentação completa",
        paragraphs: [
          "Este guia cobre o essencial. O repositório no GitHub tem a documentação técnica completa — instalação detalhada, acesso remoto, telemóveis, backups com cópia externa e o funcionamento interno do pacote portátil:",
        ],
        links: [
          { label: "Guia de instalação (INSTALL.md)", href: INSTALL_URL },
          { label: "Modo portátil — internals", href: PORTABLE_DOCS_URL },
          { label: "Acesso remoto (Cloudflare Tunnel)", href: DOCS_REMOTE_URL },
          { label: "Telemóveis e tablets", href: DOCS_MOBILE_URL },
          { label: "Repositório no GitHub", href: REPO_URL },
        ],
      },
    ],
  },
  moduleDocs: {
    portal: {
      title: "Portal do cliente",
      subtitle:
        "Um link público por reparação — o cliente vê o estado em tempo real e responde a orçamentos sem ligar para a loja.",
      sections: [
        {
          heading: "O que o cliente vê",
          paragraphs: [
            "Ao publicar uma reparação, a app cria uma página pública na OficinaOS Cloud com um resumo redigido da ficha. A página atualiza-se sozinha sempre que o estado muda na app — o cliente abre o link no telemóvel e vê sempre a versão mais recente.",
            "O que a página mostra:",
          ],
          list: [
            "Estado atual da reparação com descrição em linguagem simples",
            "Equipamento e previsão de conclusão",
            "Cronologia dos eventos (recebido, em reparação, pronto…)",
            "Orçamento pendente, com botões «Aceitar» e «Recusar»",
          ],
          links: [],
        },
        {
          heading: "O que nunca sai da loja",
          paragraphs: [
            "O portal publica um snapshot redigido — só o que o cliente precisa de ver. Nunca aparecem no portal: custos internos e margens, notas internas do staff, dados de outros clientes, contactos da equipa, nem o histórico de outras reparações.",
            "O link é um segredo por reparação (um código aleatório de 32 caracteres): quem o tem, vê a página — por isso envia-se apenas ao cliente dessa reparação. Remover o link na ficha apaga a página pública.",
          ],
          links: [],
        },
        {
          heading: "Ativar o módulo (uma vez)",
          paragraphs: [
            "O portal precisa da OficinaOS Cloud — o serviço que faz de ponte entre a app da loja e a internet, sem expor o PC da loja.",
          ],
          list: [
            "Criar conta na OficinaOS Cloud (cloud.oficinaos.app) — ou receber o código de emparelhamento da equipa",
            "Na app: Definições → separador Cloud → colar o código de emparelhamento → «Ligar»",
            "O módulo portal é ativado na conta Cloud (no beta, por nós); a app sincroniza sozinha",
            "A partir daí, cada ficha de reparação passa a ter o botão «Link público»",
          ],
          links: [],
        },
        {
          heading: "Dia a dia — publicar e partilhar",
          paragraphs: [
            "Na ficha da reparação, o botão «Link público» publica o snapshot e copia o link. Envia-se ao cliente por SMS, WhatsApp ou impresso no registo de entrada — e pronto.",
            "Quando o estado muda na app, a próxima sincronização (até ~2 minutos) atualiza a página. O botão «Remover link público» apaga a página quando já não for precisa.",
            "Se houver orçamento pendente, o cliente responde na própria página: «Aceitar» ou «Recusar» entra na app pelo fluxo normal de orçamentos — com registo datado e notificação ao staff, exatamente como uma resposta ao balcão.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Até ~2 minutos de atraso entre mudar o estado e a página atualizar (ciclo de sincronização)",
            "Precisa de internet na loja — sem ligação, a página fica congelada no último estado publicado",
            "O link é o único controlo de acesso: se o cliente o reencaminhar, outras pessoas veem essa reparação (nada mais)",
            "Sem o módulo, o tracking na rede local continua a funcionar grátis — o portal só acrescenta o acesso de fora",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    whatsapp: {
      title: "Bot de WhatsApp",
      subtitle:
        "O cliente escreve para o WhatsApp da loja e recebe o estado real da reparação — incluindo aprovar orçamentos com «SIM».",
      sections: [
        {
          heading: "O que o bot responde",
          paragraphs: [
            "O bot identifica o cliente pelo número de telefone e a reparação pelo contexto. Cada mensagem é independente — o cliente não precisa de «iniciar sessão» nem seguir menus:",
          ],
          table: {
            head: ["O cliente escreve", "O bot responde"],
            rows: [
              ["«está pronto?» ou qualquer texto", "Estado da reparação + previsão de entrega"],
              ["«orçamento» / «preço» / «quanto»", "Valor do orçamento pendente + instruções"],
              ["SIM / aceito / ok", "Aprova o orçamento pendente — mesmo fluxo do balcão"],
              ["NÃO / recuso", "Recusa o orçamento"],
              ["Código da reparação (REP-…)", "Estado dessa reparação específica"],
              ["«ajuda» / «humano», áudio ou imagem", "Encaminha ao staff — com notificação na app"],
              ["Número sem ficha", "Mensagem simpática com os contactos da loja"],
            ],
          },
          links: [],
        },
        {
          heading: "Sem o módulo",
          paragraphs: [
            "Sem o módulo whatsapp-bot ativo, a app não envia nem recebe nada por WhatsApp — em nenhum transporte (relay Cloud, Meta direto ou Evolution). Os cartões das definições ficam visíveis, mas ao clicar mostram «Esta opção existe apenas no OficinaOS Pro.»",
          ],
          links: [],
        },
        {
          heading: "Como decide a resposta",
          paragraphs: [
            "O bot procura a ficha do cliente pelos últimos 9 dígitos do número — robusto a +351, espaços e formatos diferentes. Com uma reparação ativa, o contexto é óbvio e responde diretamente; com várias, lista os códigos para o cliente escolher.",
            "«Reparação ativa» inclui todas que ainda não foram entregues, devolvidas ou canceladas — incluindo as prontas a levantar, que são exatamente as que geram a pergunta «já está?».",
            "O que o bot não resolve escala para pessoas: «ajuda», «humano», áudios, imagens e perguntas fora do padrão geram notificação na app com o texto do cliente — a equipa responde manualmente.",
          ],
          links: [],
        },
        {
          heading: "O que é preciso (Meta)",
          paragraphs: [
            "O módulo usa a WhatsApp Business Platform oficial da Meta — não há gambiarras nem risco de ban do número. Os requisitos:",
          ],
          list: [
            "Uma app Meta (developers.facebook.com) com o produto WhatsApp — a app OficinaOS já existe e aguarda a aprovação da Meta",
            "O número da loja no WhatsApp Business — a coexistence permite manter a app no telemóvel e ligar a API ao mesmo tempo",
            "Um token permanente de system user com as permissões whatsapp_business_messaging + whatsapp_business_management",
            "O webhook apontado à OficinaOS Cloud — já configurado do nosso lado",
          ],
          links: [],
        },
        {
          heading: "Configuração na app (por loja)",
          paragraphs: [
            "Depois do onboarding Meta (durante o beta, ajudamos nesse passo), a configuração na app são 4 campos:",
          ],
          list: [
            "Menu → Notificações → Setup → secção WhatsApp",
            "Business ID + Phone Number ID — fornecidos no onboarding",
            "API Token — o token permanente do system user (a app envia-o uma vez para a Cloud, onde fica cifrado — os envios saem pelo relay e o token não volta a ser pedido)",
            "Enabled ligado — a app regista o phone_number_id e as credenciais na Cloud sozinha e o bot fica ativo",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Respostas do bot chegam em ~10–15 segundos — a app consulta a fila de mensagens da Cloud num poller rápido, separado da sincronização de ~2 minutos",
            "Responder a quem escreve dentro da janela de 24h é grátis; iniciar conversas («a sua reparação está pronta») fora dessa janela sai por modelos aprovados na Meta — a app cria e submete os modelos automaticamente e mostra o estado (aprovado/em revisão/rejeitado) nas definições; os envios por modelo têm custo da Meta",
            "Quando as regras não chegam, o bot pode usar IA (Pro): só vê a ficha pública do cliente (estado, previsão, orçamento — nunca dados internos nem de outros clientes) e o conteúdo não é registado na Cloud. «PARAR»/«STOP» desliga o consentimento do cliente na hora",
            "Flood control: máximo 20 mensagens/hora por número — protege contra spam",
            "Áudios e imagens não são interpretados — vão para humano",
            "Em modo teste, só os números verificados na Meta recebem respostas — em produção não há esse limite",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Alternativa: WhatsApp via Evolution (Pro)",
          paragraphs: [
            "Para lojas que não querem a conta empresarial da Meta, a app também fala com um gateway «Evolution API» local — um transporte não-oficial que emula o WhatsApp Web. Envio e receção são Pro; o bot de resposta exige ainda aceitar um termo de responsabilidade próprio nas definições.",
            "Honestamente: por ser não-oficial, a Meta pode suspender/banir o número — o risco é da loja. Por isso o bot Evolution é deliberadamente conservador: ignora grupos/broadcasts/mensagens não-texto e números sem ficha, responde no máximo ~10 vezes/hora por número com teto diário, espera 3–8 s com «a escrever…» antes de responder, e suspende-se sozinho se a sessão for bloqueada (o dono reativa re-aceitando o termo).",
          ],
          links: [],
        },
        {
          heading: "Se o bot ficar calado",
          table: {
            head: ["Sintoma", "O que verificar"],
            rows: [
              ["Cliente não recebe resposta", "Token Meta ainda válido? (tokens temporários expiram em 24h — usar o de system user)"],
              ["Mensagem nem chega à app", "Módulo whatsapp-bot ativo na Cloud? phone_number_id correto nas definições?"],
              ["Bot responde mas Meta bloqueia", "Em modo teste, o destinatário está verificado? Em produção, é a janela de 24h"],
              ["«SIM» não faz nada", "Há orçamento enviado e pendente nessa ficha? (o bot só age sobre orçamentos por responder)"],
              ["Orçamento certo, resposta errada", "Telefone da ficha do cliente tem os mesmos últimos 9 dígitos?"],
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
        "A ferramenta Windows gratuita que lê qualquer Android ou iPhone por cabo — scan local sempre grátis; envio à loja e relatórios IA são módulos Pro.",
      sections: [
        {
          heading: "Instalar",
          paragraphs: [
            "O Diag distribui-se como ZIP portátil no GitHub, grátis. Ainda não está na Microsoft Store: a submissão aguarda aprovação da Microsoft.",
            "Descarrega o zip, extrai a pasta inteira (o exe precisa dos ficheiros ao lado) e corre OficinaDiag.exe — o Windows pode mostrar o aviso SmartScreen na primeira execução: «Mais informações» → «Executar mesmo assim».",
          ],
          links: [
            { label: "ZIP portátil (GitHub)", href: DIAG_ZIP_URL },
            { label: "Código-fonte no GitHub", href: DIAG_REPO_URL },
          ],
        },
        {
          heading: "Idioma e temas",
          paragraphs: [
            "O Diag fala português e inglês — nas Opções (⚙) escolhe-se o idioma, guardado junto ao exe.",
            "Três temas ao gosto do utilizador: Terminal (o visual retro original), Windows 95 e Moderno. A escolha fica guardada e aplica-se em tempo real.",
          ],
          links: [],
        },
        {
          heading: "O que o scan lê — grátis",
          paragraphs: [
            "Liga o telemóvel por cabo USB e o scan corre 100% no PC — nada é enviado a lado nenhum:",
          ],
          table: {
            head: ["Dados", "Android", "iPhone/iPad"],
            rows: [
              ["Modelo, número de série, versão do OS", "✓", "✓"],
              ["Bateria — nível, temperatura, ciclos", "✓", "✓"],
              ["Bateria — capacidade real vs design", "onde o fabricante expõe", "✓"],
              ["Armazenamento e RAM", "✓", "✓"],
              ["Sensores", "✓", "✓"],
              ["Root / bootloader desbloqueado", "✓", "—"],
              ["Estado de ativação / operadora", "—", "✓"],
            ],
          },
          links: [],
        },
        {
          heading: "Teste de ecrã e toque no telemóvel",
          paragraphs: [
            "A app serve uma página de teste na rede local: no Android abre sozinha via adb, no iPhone lê-se um QR code. O cliente corre os testes de cores e a grelha de toque no próprio telemóvel.",
            "Os resultados voltam ao PC — pixeis mortos e zonas de toque mortas ficam registados no relatório. É o teste de ecrã objetivo que antes se fazia «a olho».",
          ],
          links: [],
        },
        {
          heading: "Exportar e histórico",
          paragraphs: [
            "Cada scan pode ser exportado como relatório HTML (visual retro, imprimível → PDF para entregar ao cliente) e como JSON bruto com todos os dados.",
            "O histórico fica no PC (%APPDATA%\\OficinaDiag) — dá para comparar a saúde da bateria de um equipamento ao longo do tempo, útil em garantias e usados.",
          ],
          links: [],
        },
        {
          heading: "Requisitos por plataforma",
          table: {
            head: ["", "Android", "iPhone/iPad"],
            rows: [
              ["No telefone", "Ativar «Depuração USB» nas opções de programador", "Aceitar «Confiar neste computador»"],
              ["No PC", "Nada — o adb vem embutido", "Driver USB da Apple (iTunes ou app «Apple Devices»)"],
              ["Extra", "Cabo de dados (não só de carga)", "Fechar a app Fotos do Windows antes do scan"],
            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Enviar à loja — módulo diag-intake",
          paragraphs: [
            "O cliente corre o scan em casa, mete o código da loja e o diagnóstico viaja para a OficinaOS Cloud, de onde a app da loja o recolhe. Na loja aparece como um pedido na fila de Pedidos — pré-check pronto a converter em reparação.",
            "Casos de uso: pré-diagnóstico antes de o cliente vir à loja, avaliação de usados para compra/venda, e grading com dados objetivos (ciclos de bateria, ecrã, sensores).",
          ],
          links: [],
        },
        {
          heading: "Relatório IA — módulo ai-reports",
          paragraphs: [
            "Com o módulo ativo, os dados técnicos brutos do scan transformam-se num relatório em linguagem simples para o cliente — «a bateria está a 78% da capacidade original, recomenda-se substituição».",
            "A geração corre na OficinaOS Cloud com a chave do servidor — nada corre no PC do cliente e os dados não são usados para treino de modelos.",
          ],
          links: [],
        },
        {
          heading: "Privacidade",
          paragraphs: [
            "O scan é 100% local por defeito — nada sai do PC sem o utilizador escolher «Enviar à loja» ou «Relatório IA». O destino é sempre o servidor OficinaOS, nunca terceiros.",
            "Em caso de problemas, o botão «Enviar log» envia a cauda do ficheiro diag.log (só linhas técnicas da app) para análise — também opt-in, nada automático.",
          ],
          links: [],
        },
        {
          heading: "Se não detetar o telefone",
          table: {
            head: ["Sintoma", "O que verificar"],
            rows: [
              ["Nada acontece ao ligar o cabo", "O cabo é de dados? (cabos só de carga não servem) — experimentar outra porta USB"],
              ["Android não aparece", "«Depuração USB» ativa nas opções de programador? Prompt de autorização aceite no telefone?"],
              ["iPhone não aparece", "«Confiar neste computador» aceite? Driver Apple instalado (iTunes/Apple Devices)? App Fotos fechada?"],
              ["Scan falha a meio", "Ecrã do telefone desbloqueado e acordado durante o scan"],
              ["Dúvidas persistentes", "Ficheiro %APPDATA%\\OficinaDiag\\diag.log — ou botão «Enviar log» na app"],
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
        "Notificações e assistente automático por SMS (módulo Pro) — por um Android com SIM ligado à OficinaOS Cloud, ou na rede local da loja.",
      sections: [
        {
          heading: "O que o módulo faz",
          paragraphs: [
            "Com o canal SMS ativo, a app usa um telemóvel Android na loja como «gateway»: as notificações aos clientes (reparação pronta, orçamento enviado, lembretes) saem por SMS pela rede móvel normal — e as respostas dos clientes entram na app e recebem resposta automática.",
            "É o mesmo assistente do WhatsApp, com os mesmos comandos — o cliente escreve «estado» e recebe o ponto da reparação, escreve «orçamento» e recebe o valor, responde SIM ou NÃO para aprovar ou recusar. A diferença: não precisa de conta Meta, de modelos aprovados, nem de internet no telemóvel do cliente.",
            "Sem o módulo SMS ativo, a app não envia nem recebe nada por este canal — em nenhum transporte. O cartão das definições fica visível, mas ao clicar mostra «Esta opção existe apenas no OficinaOS Pro.»",
          ],
          table: {
            head: ["O cliente escreve", "O bot responde"],
            rows: [
              ["«está pronto?» ou qualquer texto", "Estado da reparação + previsão de entrega"],
              ["«orçamento» / «preço»", "Valor do orçamento pendente + instruções"],
              ["SIM", "Aprova o orçamento pendente — mesmo fluxo do balcão"],
              ["NÃO", "Recusa o orçamento"],
              ["Código da reparação (REP-…)", "Estado dessa reparação específica"],
              ["Número sem ficha", "Mensagem simpática com os contactos da loja"],
            ],
          },
          links: [],
        },
        {
          heading: "Escolher o transporte — dois caminhos (ambos Pro)",
          id: "escolher-o-transporte-tres-caminhos",
          paragraphs: [
            "Os dois transportes precisam do módulo SMS (Pro) — sem ele a app não envia nem recebe. A diferença está no caminho que os SMS fazem:",
          ],
          table: {
            head: ["Transporte", "Custo", "Envio", "Respostas do cliente", "Para quem"],
            rows: [
              ["Android ligado à Cloud", "Módulo SMS + tarifário do SIM da loja", "✅ — mesmo com o PC desligado", "✅ — respostas e relatórios via Cloud; um telemóvel pode servir várias lojas", "A maioria das lojas — e donos com várias lojas"],
              ["Android na rede local (fallback)", "Módulo SMS + tarifário do SIM da loja", "✅ — pelo PC da loja", "Receção via Cloud quando configurada", "Loja sem telemóvel ligado à Cloud, ou como reserva"],
            ],
          },
          links: [],
        },
        {
          heading: "Transporte Android — o que é preciso",
          list: [
            "O módulo SMS (Pro) ativo — sem ele a app não envia nem recebe mensagens",
            "Um telemóvel Android — pode ser um equipamento antigo; fica sempre na loja",
            "Um cartão SIM ativo — idealmente com SMS incluídos no tarifário (o custo das mensagens é da operadora)",
            "A app gratuita «SMS Gateway for Android» (sms-gate.app), da Play Store ou do site oficial",
            "Para o caminho Cloud: o telemóvel com internet; para o caminho local: o telemóvel e o PC do OficinaOS na mesma rede Wi-Fi/LAN",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Android ligado à Cloud (Pro)",
          paragraphs: [
            "Com o módulo SMS ativo, o mesmo telemóvel Android pode ligar-se à OficinaOS Cloud em vez do PC da loja: na app «SMS Gateway for Android» use o modo Cloud/Private Server com os dados que a app mostra nas definições (URL do servidor, utilizador e palavra-passe do device). A partir daí a Cloud passa a entregar os SMS para envio diretamente ao telemóvel — os envios e as respostas dos clientes funcionam mesmo com o PC da loja desligado, e a app recolhe tudo quando volta a ligar (poller de ~12 segundos).",
            "Um device pode servir várias lojas do mesmo dono: a Cloud mantém uma tabela de encaminhamento (SmsRoute) que decide de que loja é cada resposta — primeiro pelo código REP-… na mensagem, depois pela loja que falou por último com aquele número, e por fim a loja padrão.",
            "«Loja fechada»: se a app estiver offline há mais de ~5 minutos e chegar um SMS, a Cloud responde automaticamente «Recebemos a sua mensagem. A loja responde assim que abrir.» (máx. 1 por número a cada 12 h).",
          ],
          links: [
            { label: "SMS Gateway for Android (site oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Relatórios de entrega (só transporte Cloud)",
          paragraphs: [
            "Cada SMS enviado via Cloud recebe do telemóvel um evento de estado (enviado/entregue/falhado) que a Cloud reencaminha à app — a entrada na fila de notificações (Notificações → Outbox) passa de «Enviado» para «Entregue», ou para «Falhado» com o motivo da operadora. É a forma de saber que o cliente recebeu mesmo a mensagem.",
          ],
          links: [],
        },
        {
          heading: "Instalação — passo a passo",
          id: "instalacao-passo-a-passo-5-minutos",
          paragraphs: [
            "1. No telemóvel Android, instale «SMS Gateway for Android» (sms-gate.app) a partir da Play Store ou do site oficial.",
            "2. Caminho Cloud (recomendado — envio e receção, mesmo com o PC desligado): ligue um device na sua conta OficinaOS Cloud e, na app do telemóvel, use o modo Cloud/Private Server com os dados que o OficinaOS mostra em Notificações → Canais → bloco «SMS Pro» — incluindo o webhook URL a registar na app do telemóvel para as respostas dos clientes.",
            "3. Caminho rede local (envio, como fallback): na app do telemóvel ative o modo «Local Server» — a app mostra o endereço local (ex.: 192.168.1.50:8080), um nome de utilizador e uma palavra-passe. O telemóvel e o PC têm de estar na mesma rede Wi-Fi.",
            "4. Na app OficinaOS: Menu → Notificações → Canais → secção SMS — no modo local, preencha o «URL do gateway» (http:// + endereço), o utilizador e a palavra-passe do telemóvel e guarde.",
            "5. Carregue em «Enviar SMS de teste», indique o seu próprio número e confirme que a mensagem chega.",
          ],
          links: [
            { label: "SMS Gateway for Android (site oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Manter o gateway fiável",
          list: [
            "Deixe o telemóvel sempre ligado ao carregador — o gateway é ele; desligado, os SMS não saem",
            "Nas definições do Android, exclua «SMS Gateway» da otimização de bateria (Bateria → Otimização → «Não otimizar») para o Android não o suspender",
            "No router da loja, reserve o IP do telemóvel (reserva DHCP) — se o IP mudar, a configuração deixa de apontar para o sítio certo",
            "Se a loja tiver uma rede Wi-Fi de convidados separada, o telemóvel tem de estar na rede principal — a mesma do PC",
            "Teste rápido de saúde: a app chama GET /health no gateway a cada envio; se falhar, a notificação fica na fila e tenta de novo",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Privacidade — o que sai e o que fica",
          paragraphs: [
            "No transporte da rede local, o envio é direto — a app fala com o gateway do telemóvel sem intermediários. A receção das respostas dos clientes é feita pela OficinaOS Cloud (o telemóvel reencaminha os SMS que recebe) — sem essa ligação não há receção por este transporte. O SMS em si viaja sempre pela rede móvel da operadora, como qualquer SMS.",
            "No transporte Cloud, as credenciais do device e o texto das mensagens passam pela OficinaOS Cloud (é ela que envia e recebe) — as credenciais ficam encriptadas (AES-256-GCM) e os corpos das mensagens nunca são registados. A palavra-passe do gateway local fica encriptada na app e nunca volta a aparecer nos campos — só se substitui.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Flood control: máximo 20 mensagens por hora por número — protege contra spam acidental",
            "O custo por SMS é do tarifário do SIM da loja — com SMS incluídos o custo marginal é zero, mas convém confirmar com a operadora",
            "SMS com acentos (ç, ã, é…) consomem mais do limite de 160 caracteres — os modelos devem ser curtos",
            "Uso automatizado intensivo pode violar o fair-use do tarifário — o módulo é para notificações e respostas, não para campanhas em massa",
            "SMS não é WhatsApp: sem imagens, sem botões, texto simples — mas funciona em qualquer telemóvel, até nos mais antigos",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Resolução de problemas",
          table: {
            head: ["Sintoma", "O que verificar"],
            rows: [
              ["SMS de teste não chega", "URL correto (http:// + IP:porta)? Número de destino com indicativo (ex.: +351…)? Saldo/SMS disponíveis no SIM?"],
              ["«Falha na ligação ao gateway»", "O telemóvel está ligado e na mesma Wi-Fi do PC? O IP não mudou (ver na app do telemóvel)?"],
              ["Erro de autenticação", "Utilizador e palavra-passe exatamente como na app do telemóvel (são gerados por ela, não é o utilizador que os escolhe)"],
              ["Cliente responde e nada acontece", "No caminho Cloud: o webhook URL está registado na app do telemóvel? O device aparece ligado no bloco «SMS Pro»? O módulo SMS está ativo?"],
              ["Funcionava e parou", "Otimização de bateria do Android suspendeu a app? O IP do telemóvel mudou?"],
            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Segurança",
          list: [
            "Nunca exponha a porta do gateway (ex.: 8080) à internet — é só para a rede interna da loja",
            "Mantenha o telemóvel e o PC na rede de confiança da loja — não na Wi-Fi de clientes/convidados",
            "Se trocar de telemóvel ou de SIM, repita a configuração — no caminho Cloud, registe também o webhook URL na app do novo telemóvel",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    invoicing: {
      title: "Faturação certificada",
      subtitle:
        "Faturas e faturas-recibo legais emitidas diretamente da venda ou da reparação — via InvoiceXpress, com a conta e a chave da própria loja.",
      sections: [
        {
          heading: "Só para Portugal",
          paragraphs: [
            "O módulo emite documentos através do InvoiceXpress, um serviço de faturação certificado para Portugal, e as taxas de IVA disponíveis na app são as de Portugal continental (IVA23, IVA13, IVA6 e IVA0). Lojas noutros países, incluindo Espanha, ainda não podem usar este módulo para faturação legal.",
          ],
          links: [],
        },
        {
          heading: "O que o módulo faz",
          paragraphs: [
            "Com a faturação ativa, cada venda do POS e cada reparação entregue ganham um botão «Emitir documento». A app envia os dados ao InvoiceXpress e o documento fiscal sai numerado e certificado — fatura-recibo quando o cliente tem NIF, fatura simplificada («Consumidor final») quando não tem.",
            "O permalink do documento fica registado na ficha — dá para abrir o PDF oficial do InvoiceXpress a partir da app e entregar ao cliente.",
          ],
          table: {
            head: ["Situação", "Documento emitido"],
            rows: [
              ["Cliente com NIF na ficha", "Fatura-recibo (FR) — documento completo"],
              ["Cliente sem NIF", "Fatura simplificada (FS) — «Consumidor final»"],
              ["Venda no POS", "Documento com as linhas dos artigos vendidos"],
              ["Reparação entregue", "Documento com as reparações e peças da ficha"],
            ],
          },
          links: [],
        },
        {
          heading: "O que é preciso",
          list: [
            "Uma conta InvoiceXpress da loja (o serviço deles tem o custo próprio — independente do OficinaOS)",
            "A chave API da conta — cria-se nas definições do InvoiceXpress",
            "A taxa de IVA predefinida da loja — IVA23, IVA13, IVA6 ou IVA0",
            "O módulo invoicing ativo na conta OficinaOS Cloud (no beta, ativamos nós)",
          ],
          paragraphs: [],
          links: [
            { label: "InvoiceXpress (site oficial)", href: "https://invoicexpress.com" },
          ],
        },
        {
          heading: "Configuração — passo a passo (~5 minutos)",
          paragraphs: [
            "1. No InvoiceXpress, entre na conta da loja e gere uma chave API (nas definições de API da conta).",
            "2. No OficinaOS: Definições → separador Cloud → secção «Faturação (InvoiceXpress)» (aparece com a app emparelhada e o módulo ativo).",
            "3. Em «Conta InvoiceXpress» escreva o subdomínio da conta — o que aparece antes de .app.invoicexpress.com.",
            "4. Cole a chave API e escolha a taxa de IVA predefinida (ex.: IVA23).",
            "5. Ligue «Ativar faturação» e guarde.",
            "6. Teste com uma venda ou reparação de valor simbólico e confirme que o documento aparece no InvoiceXpress.",
          ],
          links: [],
        },
        {
          heading: "Preços com IVA incluído",
          paragraphs: [
            "Os preços da loja são finais (IVA já incluído). A app calcula o valor líquido de cada linha a partir da taxa configurada e envia-o ao InvoiceXpress — o total do documento bate certo com o que o cliente pagou.",
          ],
          links: [],
        },
        {
          heading: "Privacidade — o que sai e o que fica",
          paragraphs: [
            "A chave API fica guardada encriptada (AES-256) no PC da loja e nunca é mostrada novamente — só se substitui. A app fala diretamente com o InvoiceXpress: os documentos e os dados fiscais não passam pela OficinaOS Cloud — a Cloud só confirma que o módulo está ativo.",
            "Emitir um documento é irreversível (é um documento legal numerado) — a app bloqueia dupla emissão da mesma venda ou reparação.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Requer a conta InvoiceXpress da loja — o custo desse serviço é da loja, separado do OficinaOS",
            "Só Portugal: o InvoiceXpress e as taxas de IVA disponíveis são portugueses — noutros países o módulo não emite documentos fiscais válidos",
            "Documentos emitidos não são apagados pela app — anulações/credit notes fazem-se no InvoiceXpress",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    storefront: {
      title: "Montra online",
      subtitle:
        "Uma página pública com artigos do seu catálogo — o cliente vê o preço e reserva, e a reserva entra na app como pedido.",
      sections: [
        {
          heading: "O que o módulo faz",
          paragraphs: [
            "A app envia para a OficinaOS Cloud os artigos que marcar como «listados online», e a Cloud mostra-os numa página pública da loja (cloud.oficinaos.app/loja/<endereço>). Cada artigo aparece com nome, categoria e preço; os artigos sem stock deixam de aparecer.",
            "O cliente escolhe um artigo e reserva-o com o nome, o telefone e uma nota opcional. A reserva chega à app na sincronização seguinte e entra na fila de Pedidos («Reserva loja online: …»), com notificação ao dono e ao balcão. Não há pagamento online: a venda faz-se na loja.",
          ],
          links: [],
        },
        {
          heading: "Ativar e publicar",
          list: [
            "Emparelhar a app com a OficinaOS Cloud (Definições → separador Cloud) e ter o módulo storefront ativo (no beta, ativamos nós)",
            "Em Definições → separador Cloud aparece a secção «Loja online»: escolha o endereço da página, uma breve descrição e o email de contacto público",
            "Ligue «Publicado» e guarde — o link da página aparece no topo da secção",
            "A morada e o telefone mostrados na página vêm das definições da loja",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Escolher os artigos",
          paragraphs: [
            "No inventário de peças, edite o artigo e ligue «Listar na loja online». O preço mostrado é o preço unitário do catálogo. Quando o stock muda (vendas no POS, peças usadas em reparações, movimentos de stock), a página atualiza-se na sincronização seguinte (até ~2 minutos).",
          ],
          links: [],
        },
        {
          heading: "Personalização — módulo storefront-plus",
          list: [
            "Cor de destaque da página",
            "Logótipo da loja (PNG, JPEG ou WebP, até 200 KB)",
            "Dois layouts: Vitrine (cartões) ou Compacto (lista)",
          ],
          paragraphs: [
            "Sem este módulo, a página usa o aspeto predefinido.",
          ],
          links: [],
        },
        {
          heading: "Privacidade — o que sai e o que fica",
          paragraphs: [
            "Vão para a Cloud os artigos listados (nome, categoria, preço e se há stock) e os contactos públicos da loja. As reservas — nome, telefone e nota do cliente — são guardadas na Cloud e entregues à app.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Até ~2 minutos entre mudar o catálogo e a página atualizar",
            "Só reservas: sem pagamento nem envio",
            "Máximo de 500 artigos listados",
            "A página só mostra se há stock, não a quantidade",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    market: {
      title: "Procuro-peça",
      subtitle:
        "Um quadro partilhado entre lojas OficinaOS: publique a peça de que precisa ou responda «tenho» aos pedidos de outras lojas.",
      sections: [
        {
          heading: "Como funciona",
          paragraphs: [
            "No menu, «Procuro-peça» abre o quadro com os pedidos abertos das outras lojas, e o separador «Os meus pedidos» mostra os seus. As outras lojas veem só o nome da sua loja e o pedido.",
            "Quem tem a peça carrega em «Tenho» e envia uma resposta com nota, preço e contacto. Só a loja que fez o pedido vê as respostas. O negócio acerta-se diretamente entre lojas, fora do OficinaOS.",
          ],
          links: [],
        },
        {
          heading: "Publicar um pedido",
          list: [
            "«Novo pedido» → o que procura (ex.: ecrã iPhone 12)",
            "Tipo de peça e estado (qualquer, nova, OEM/original ou usada)",
            "Marca, modelo, preço máximo e notas — opcionais",
            "Quando arranjar a peça, carregue em «Já arranjei»; ou em «Fechar» para retirar o pedido. Um pedido fechado não volta a abrir — publica-se outro",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "O que é preciso",
          list: [
            "App emparelhada com a OficinaOS Cloud",
            "O módulo market ativo na conta (no beta, ativamos nós)",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "O quadro mostra os 100 pedidos abertos mais recentes",
            "Até 30 pedidos e 60 respostas por hora, por loja",
            "Sem pagamentos nem garantias na plataforma — confirme a peça diretamente com a outra loja",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    marketPrices: {
      title: "Preços de mercado",
      subtitle:
        "Compare os preços das suas reparações e peças com a mediana anónima de outras lojas OficinaOS.",
      sections: [
        {
          heading: "O que mostra",
          paragraphs: [
            "Em «Preços de mercado» (menu), cada linha mostra um artigo com a mediana de mercado, o intervalo (mínimo–máximo) e quantas lojas contribuíram. Quando o nome coincide com um artigo do seu catálogo, aparece também «O seu preço». Pode filtrar por reparações ou peças.",
            "Um benchmark só aparece quando pelo menos 3 lojas partilham um preço para o mesmo artigo.",
          ],
          links: [],
        },
        {
          heading: "Partilhar os seus preços (opcional)",
          paragraphs: [
            "Ligar «Partilhar os seus preços anonimamente» envia para a Cloud o nome, a categoria e o preço dos artigos ativos dos seus catálogos de reparações e de peças. Sempre que o catálogo muda, o envio repete-se e substitui o anterior.",
            "Desligar a partilha apaga da Cloud todos os preços que a loja enviou. Pode ver os benchmarks sem partilhar.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Os artigos são comparados pelo nome (sem acentos, maiúsculas ou pontuação) — nomes diferentes para a mesma reparação não se juntam",
            "Com poucas lojas, os extremos do intervalo são preços reais de lojas concretas (sem indicar quais)",
            "Precisa da app emparelhada e do módulo market-prices ativo",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    multiShop: {
      title: "Multi-loja",
      subtitle:
        "Para quem tem mais do que uma loja: a receita e as reparações de todas, lado a lado, no painel da OficinaOS Cloud.",
      sections: [
        {
          heading: "Como funciona",
          paragraphs: [
            "Cada loja continua a ter a sua instalação do OficinaOS, com os seus dados no PC da loja. Com o módulo ativo, cada instalação envia à Cloud um resumo diário só com totais, e o dono vê o conjunto ao entrar em cloud.oficinaos.app.",
            "No beta, as lojas adicionais são associadas à sua conta por nós; depois, cada loja emparelha a sua app com um código gerado no painel.",
          ],
          links: [],
        },
        {
          heading: "O que o painel mostra",
          list: [
            "Receita dos últimos 7 e 30 dias, somando todas as lojas",
            "Reparações entregues nos últimos 30 dias e reparações em curso",
            "Gráfico da receita diária dos últimos 30 dias",
            "Tabela por loja: receita, reparações, vendas, em curso e última sincronização",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "O que sai da loja",
          paragraphs: [
            "Só números, por dia: receita (pagamentos de vendas e reparações), reparações abertas e entregues, número e valor das vendas, reparações em curso e clientes novos. Nunca saem nomes, contactos nem reparações individuais. O envio acontece em cada sincronização (~2 minutos) e recalcula também o dia anterior.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "«Entregues» conta as reparações com estado Entregue cuja última alteração foi nesse dia — é uma aproximação",
            "Uma loja com a app desligada não envia dados até voltar a ligar",
            "O painel está em português",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    remarketing: {
      title: "Remarketing WhatsApp",
      subtitle:
        "Uma mensagem automática pelo WhatsApp da loja aos clientes cuja última reparação já foi há algum tempo.",
      sections: [
        {
          heading: "Quem recebe",
          list: [
            "Clientes que aceitaram mensagens automáticas (consentimento na ficha do cliente)",
            "Com pelo menos uma reparação entregue, sendo a última há mais do que o número de dias definido (90 por defeito)",
            "Que não receberam esta mensagem dentro do intervalo mínimo definido (180 dias por defeito)",
          ],
          paragraphs: [
            "A app verifica de hora a hora e envia no máximo 10 mensagens de cada vez.",
          ],
          links: [],
        },
        {
          heading: "O que é preciso",
          list: [
            "WhatsApp configurado na app (Business ID, Phone Number ID e token) — o mesmo do bot de WhatsApp",
            "Um modelo de mensagem criado e APROVADO na sua conta Meta Business, no idioma português (pt)",
            "O módulo remarketing ativo na conta OficinaOS Cloud (no beta, ativamos nós)",
          ],
          paragraphs: [],
          links: [{ label: "Guia do bot de WhatsApp", href: "/docs/whatsapp/" }],
        },
        {
          heading: "Configurar",
          paragraphs: [
            "Menu → Notificações → Canais → secção WhatsApp → «Remarketing automático». Defina «Inativo há (dias)», «Repita no máximo a cada (dias)» e o nome do modelo Meta (por defeito oficinaos_remarketing).",
            "O modelo recebe duas variáveis: {{1}} é o primeiro nome do cliente e {{2}} o nome da loja. Corpo sugerido: «Olá {{1}}! Já passou algum tempo desde a sua última reparação na {{2}}. Se o seu equipamento precisa de atenção, estamos aqui para ajudar.»",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "São mensagens iniciadas pela loja: a Meta cobra cada mensagem modelo — custo da Meta, não nosso",
            "Só WhatsApp, não SMS",
            "O modelo é enviado sempre em português (pt)",
            "Se um envio falhar (por exemplo, modelo não aprovado), esse cliente só volta a ser tentado depois do intervalo mínimo",
            "A app tem de estar ligada para as verificações correrem",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    aiAnalyst: {
      title: "Analista de IA",
      subtitle:
        "Perguntas sobre os dados da loja em linguagem natural — o analista responde lendo a base de dados local, com a chave de IA da própria loja.",
      sections: [
        {
          heading: "O que o analista faz",
          paragraphs: [
            "É um chat dentro da app: escreve-se uma pergunta em linguagem corrente e o analista responde consultando a base de dados da loja em tempo real. Para perguntas de dados, o modelo gera SQL de leitura e corre-o contra a base local — a resposta vem dos números reais, não de um resumo desatualizado.",
            "Exemplos do que pergunta:",
          ],
          list: [
            "«Quantas reparações fechámos esta semana e qual o valor médio?»",
            "«Que peças estão abaixo do stock mínimo?»",
            "«Mostra os orçamentos pendentes há mais de 5 dias»",
            "«Qual o técnico com mais entregas este mês?»",
          ],
          links: [],
        },
        {
          heading: "O que sai da loja — e para onde",
          paragraphs: [
            "O analista não é um módulo Pro — é funcionalidade do núcleo, grátis, e a OficinaOS Cloud não vê nada. As perguntas e os dados necessários para responder vão diretamente da app para o fornecedor de IA que a loja configurar (OpenAI, Google Gemini, Mistral ou um endpoint próprio). A chave de API é da loja, fica encriptada na app e nunca volta a aparecer escrita no ecrã.",
            "Como as respostas podem incluir dados de clientes (nomes, telefones, histórico de reparações), o acesso ao analista fica restrito ao perfil de dono — os outros perfis não veem o módulo. Para o registo RGPD, o fornecedor escolhido é o subcontratante: com dados europeus, um endpoint europeu ou com cláusulas adequadas é a escolha mais simples de justificar.",
          ],
          links: [],
        },
        {
          heading: "Configurar (uma vez)",
          paragraphs: [
            "1. Consiga uma chave de API do fornecedor escolhido (OpenAI, Gemini, Mistral — ou um endpoint compatível com a API da OpenAI, como uma instância local).",
            "2. Na app: Definições → Analista de IA. Escolha o fornecedor ou «Personalizado» e indique o endpoint se for o caso.",
            "3. Cole a chave de API e escolha o modelo — os modelos pequenos (ex.: gpt-4o-mini) chegam para a maioria das perguntas e custam cêntimos por mês numa loja normal.",
            "4. Ative o módulo. Só o perfil de dono consegue ver e configurar o analista — se outro perfil precisar dele, essa decisão é sua e revê-se nas permissões.",
          ],
          links: [],
        },
        {
          heading: "Dia a dia — chat, memórias e instruções",
          paragraphs: [
            "Cada conversa fica guardada no histórico e pode ser retomada ou apagada (individualmente ou em massa). Duas ferramentas afinam o comportamento sem código:",
          ],
          list: [
            "Memórias (até 20 ativas): factos que o analista deve lembrar sempre — «o IVA é 23%», «trabalhamos com estas três marcas»",
            "Instruções (até 10 ativas): regras da casa — «responde sempre em pt-PT», «valores monetários em euros com duas casas»",
          ],
          links: [],
        },
        {
          heading: "Privacidade e segurança por dentro",
          paragraphs: [
            "O SQL que o modelo gera não corre com as credenciais da app: a app provisiona um role Postgres dedicado só de leitura (analyst_ro_…) — uma tentativa de escrita falha na base de dados, não só na validação. Se o role não estiver provisionado, a ferramenta de dados recusa-se em vez de cair para uma ligação privilegiada.",
            "Na prática: o analista lê, não escreve — não consegue alterar reparações, preços ou clientes. Ainda assim, trate as respostas como ponto de partida: para valores que movem decisões (fecho de caixa, margens), confirme nos Relatórios.",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Só leitura — não executa ações, não altera dados",
            "A qualidade da resposta é a qualidade dos dados: fichas incompletas dão respostas incompletas",
            "Modelos pequenos enganam-se em SQL complexo — perguntas muito elaboradas podem precisar de reformular",
            "O custo é da chave da loja — o fornecedor cobra por utilização (consulte os preços dele)",
            "Sem acesso à internet não funciona — o endpoint do fornecedor tem de estar alcançável",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Se o analista não responder",
          paragraphs: [
            "Por ordem de probabilidade:",
          ],
          list: [
            "Módulo desligado — Definições → Analista de IA, confirme «Ativo»",
            "Chave de API inválida ou sem saldo — o erro do fornecedor aparece no chat; valide a chave na consola do fornecedor",
            "Nome do modelo errado — em «Personalizado» o nome tem de ser o exato do fornecedor",
            "Endpoint inacessível — em instalações sem internet ou com firewall restritiva, o fornecedor não é alcançável",
            "Role de leitura por provisionar — nos logs da app aparece um aviso de provisionamento; um restart da app resolve a maioria dos casos",
          ],
          links: [],
        },
      ],
    },
    ponto: {
      title: "Livro de ponto",
      subtitle:
        "Registo de horas da equipa por WhatsApp e SMS — um QR fixo na loja, comandos com prova de localização no WhatsApp e um painel de horas para a ACT.",
      sections: [
        {
          heading: "Como funciona",
          paragraphs: [
            "A loja imprime um QR fixo (nas Definições) e afixa-o à entrada. O funcionário lê o QR — abre uma página com um código de uso único — e envia a mensagem pelo WhatsApp da loja, o mesmo número dos canais Pro. O bot pede a localização e regista o ponto.",
            "A hora é sempre a do servidor — nunca a que está escrita na mensagem nem a do telemóvel. Pelo WhatsApp, sem localização não há registo; por SMS (só para funcionários marcados «sem WhatsApp») o registo fica sempre por validar.",
          ],
          table: {
            head: ["O funcionário escreve", "O que fica registado"],
            rows: [
              ["ENTRADA (depois do QR)", "Código válido + localização dentro do raio da loja (100 m por defeito, configurável) → aprovado; fora do raio → por validar"],
              ["PAUSA / VOLTEI / SAIDA", "Só a localização — a entrada desse dia já provou quem é; fora do raio → por validar"],
              ["ESTADO", "Horas de hoje e da semana, e os registos por validar desse funcionário"],
              ["Externos (comerciais, técnicos ao domicílio)", "Localização + foto, sem raio; aprovados automaticamente por defeito — a loja pode passar a «por validar»"],
              ["SMS", "Os mesmos comandos por texto; sempre por validar — o SMS não transporta localização"],
            ],
          },
          links: [],
        },
        {
          heading: "O que é preciso",
          list: [
            "Pelo menos um canal Pro de receção ativo — WhatsApp (oficial ou Evolution) ou SMS; o ponto não recebe mensagens sozinho",
            "O módulo ponto ativo na conta OficinaOS Cloud (no beta, ativamos nós)",
            "A app emparelhada com a Cloud (Definições → separador Cloud)",
            "Cada funcionário com o telefone registado nas Definições — interno, externo ou «sem WhatsApp»",
          ],
          paragraphs: [],
          links: [
            { label: "Guia do bot de WhatsApp", href: "/docs/whatsapp/" },
            { label: "Guia do canal SMS", href: "/docs/sms/" },
          ],
        },
        {
          heading: "O painel — de «quem está» às horas do mês",
          paragraphs: [
            "O menu «Livro de Ponto» mostra quem está a trabalhar e o que precisa de atenção:",
          ],
          list: [
            "Agora — quem está, quem está em pausa, quem saiu",
            "Por validar — cada registo com mapa, raio, foto, hora e motivo; aprovar ou recusar com nota",
            "Horas — por dia, semana e mês, com atrasos e horas extra",
            "Esquecimentos — saídas em falta: o bot pergunta ao trabalhador pelo WhatsApp ou SMS; sem resposta em 60 minutos, o proprietário e a receção recebem um aviso na app",
            "Exportar — PDF ou Excel por período e funcionário, para o contabilista e a ACT, com as correções à vista",
          ],
          links: [],
        },
        {
          heading: "Um registo que não se apaga",
          paragraphs: [
            "Cada registo é uma linha nova e nunca é alterado nem apagado — uma correção é outra linha que aponta para a original. O histórico fica guardado 5 anos (Código do Trabalho, art. 202.º), acessível e consultável pela ACT, e o trabalhador pode pedir os seus registos.",
            "As fotos de prova de externos são apagadas automaticamente aos 90 dias — o registo fica, marcado como «foto expirada».",
          ],
          links: [],
        },
        {
          heading: "RGPD e Código do Trabalho — o que a loja deve fazer",
          paragraphs: [
            "O módulo ajuda a loja a cumprir o Código do Trabalho — não garante conformidade: a decisão e a responsabilidade são da loja. Em concreto:",
          ],
          list: [
            "Informar os trabalhadores por escrito — as Definições têm um modelo imprimível para assinatura",
            "Localização só no momento do registo — nunca contínua; sem biometria",
            "As fotos de externos ficam 90 dias; os registos, 5 anos",
            "Avaliar a necessidade de uma avaliação de impacto (AIPD) antes de avançar — a localização de trabalhadores pede cuidado redobrado",
          ],
          links: [],
        },
        {
          heading: "Definições — ativar, QR e funcionários",
          paragraphs: [
            "Tudo se configura em Definições: ativar o módulo, marcar a localização da loja num mapa e o raio (100 m por defeito), imprimir o QR em PDF, registar os telefones dos funcionários e afixar o texto de informação aos trabalhadores.",
          ],
          links: [],
        },
      ],
    },
  },
  updates: {
    title: "Novidades",
    subtitle:
      "O que mudou no OficinaOS — funcionalidades novas, melhorias e módulos Pro. Atualizado a cada lançamento.",
    free: "Grátis",
    pro: "Pro",
  },
  seoPage: {
    metaTitle:
      "Software para lojas de reparação de telemóveis — grátis",
    metaDesc:
      "Programa de gestão para oficinas de reparação de telemóveis: receções, orçamentos, stock, POS e backups. Grátis, com os dados na loja.",
    badge: "Software livre · Feito em Portugal",
    title: "Software de gestão para lojas de reparação de telemóveis",
    subtitle:
      "O programa gratuito que substitui o papel, o Excel e os telefonemas de «já está pronto?» — feito para oficinas independentes em Portugal.",
    ctaTitle: "Pronto para experimentar?",
    ctaText:
      "Descarregue, instale no PC da loja e faça o primeiro check-in hoje. Sem conta, sem cartão, sem mensalidades.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    // DocsSection[] explícito: sem anotação, Copy["seoPage"]["sections"] fica
    // a união exata dos literais abaixo e qualquer página nova com outra
    // combinação (table sem links, links sem list, …) rebenta o typecheck.
    sections: [
      {
        heading: "O que o programa faz",
        paragraphs: [
          "O OficinaOS cobre o dia a dia completo de uma loja de reparações — do momento em que o cliente entra até ao levantamento do aparelho:",
        ],
        list: [
          "Check-in da reparação com marca, modelo, IMEI, estado e acessórios que ficam",
          "Orçamentos com peças e mão de obra — o cliente aprova ou recusa no próprio telemóvel",
          "Página pública de acompanhamento: o cliente vê o estado em tempo real sem ligar",
          "Gestão de stock com alertas de reposição e histórico de peças usadas",
          "Caixa / POS para vender acessórios e registar pagamentos MB Way, numerário e cartão",
          "Receitas, margens e tempo médio de reparação num painel diário",
          "SMS automáticos ao cliente quando a reparação fica pronta (módulo Pro, via telemóvel Android)",
          "Backups diários automáticos da base de dados",
        ],
      },
      {
        heading: "Grátis, sem asteriscos",
        paragraphs: [
          "A maioria dos programas para oficinas cobra mensalidades por posto ou por técnico. O OficinaOS é software livre (licença MIT): a aplicação completa — reparações, orçamentos, stock, POS, backups — é gratuita para sempre, para uma loja ou para dez postos.",
          "Os módulos Pro opcionais (portal do cliente na cloud, bot de WhatsApp, loja online, preços de mercado, multi-loja) fazem parte do OficinaOS Pro, um plano opcional com tudo incluído, para quem precisar deles. O núcleo que usa todos os dias nunca fica atrás de um pagamento.",
        ],
        links: [
          { label: "Código-fonte no GitHub", href: "https://github.com/braindeadpt/OficinaOS" },
          { label: "Módulos Pro", href: "/#pro" },
        ],
      },
      {
        heading: "Os dados dos seus clientes ficam na sua loja",
        paragraphs: [
          "A aplicação corre no PC da loja e guarda tudo numa base de dados local. Não há telemetria, não há conta obrigatória, e os dados dos seus clientes — nomes, telefones, histórico de reparações — não saem da rede da loja a menos que ative um módulo Pro.",
          "Para a maioria das lojas isto resolve o RGPD por si: não há subcontratantes, não há transferências internacionais, e se a internet falhar a loja continua a funcionar.",
        ],
        links: [{ label: "Política de privacidade", href: "/privacy" }],
      },
      {
        heading: "Comparado com o que usa hoje",
        paragraphs: [],
        table: {
          head: ["", "Papel e Excel", "Software com mensalidade", "OficinaOS"],
          rows: [
            ["Custo", "«Grátis», mas caro em tempo perdido", "20–60 €/mês por posto", "Grátis (MIT)"],
            ["O cliente acompanha a reparação?", "Não — telefona à loja", "Às vezes, pago", "Sim — na loja grátis; fora dela com Pro"],
            ["Onde ficam os dados", "Na gaveta / num ficheiro", "Na cloud do fornecedor", "No PC da sua loja"],
            ["Funciona sem internet", "Sim", "Normalmente não", "Sim"],
            ["Em português", "—", "Raramente", "Interface e ajuda em PT-PT"],
          ],
        },
        links: [
          { label: "Software para assistência técnica", href: "/software-assistencia-tecnica" },
          { label: "Para técnicos independentes", href: "/para-tecnicos-independentes" },
          { label: "Deixar o Excel e o papel", href: "/deixar-excel-papel" },
          { label: "Software pago vs OficinaOS", href: "/software-pago-vs-oficinaos" },
        ],
      },
      {
        heading: "Pronto numa tarde",
        paragraphs: [
          "No Windows 10/11 basta correr o instalador: ele trata de tudo, cria o serviço e deixa um ícone na bandeja. Os outros dispositivos da loja — telemóveis, tablets, o PC da receção — abrem o endereço local no browser, sem instalar nada.",
          "Em alternativa, o pacote portátil corre de uma pasta (pen USB incluída) sem instalar nada, e há imagem Docker para Linux e macOS.",
        ],
        links: [
          { label: "Guia de instalação passo a passo", href: "/docs" },
          { label: "Novidades e versões", href: "/updates" },
        ],
      },
    ] as DocsSection[],
  },
  home: {
    hero: {
      title: "Cada reparação organizada, da entrada à entrega.",
      subtitle:
        "Software grátis e de código aberto para técnicos independentes, oficinas e revendedores. Receção, orçamentos, stock e caixa no seu PC — e o cliente acompanha a reparação no telemóvel, sem telefonar.",
      ctaWin: "Descarregar para Windows",
      ctaDesktop: "Instalar com Docker",
      ctaMobile: "Ver como instalar",
      ctaSecondary: "Ver como funciona",
      noteWin: "Grátis · Windows 10/11 · instalação guiada",
      noteDesktop: "Linux e macOS com Docker · ou instale num PC Windows",
      noteMobile: "Instala-se num PC Windows; depois abre no telemóvel, pelo browser.",
      trust: ["Código aberto (MIT)", "Funciona sem internet", "Os dados ficam no seu PC"],
      versionLabel: "Versão",
      frameTitle: "Reparações",
      frameCaption:
        "Lista de reparações da OficinaOS recriada em HTML, com dados de exemplo: a reparação do iPhone 13 passa de «Em reparação» a «Pronto» e o cliente é avisado.",
      toast: "Cliente avisado: «O seu iPhone 13 está pronto.»",
    },
    tour: {
      title: "Da entrada à entrega, em cinco passos",
      lead: "O mesmo fluxo serve uma loja com balcão, um técnico que trabalha sozinho ou um revendedor que recebe equipamentos de outros profissionais.",
      stepLabel: "Passo",
      steps: [
        {
          title: "O cliente entra",
          text: "Ficha nova em segundos: nome, contacto e equipamento. Clientes habituais e revendedores aparecem logo, com o histórico.",
        },
        {
          title: "IMEI e estado do equipamento",
          text: "Registe o IMEI ou o n.º de série, os acessórios que ficam e o estado em que chegou. O cliente assina e fica tudo pesquisável.",
        },
        {
          title: "Orçamento aprovado no telemóvel",
          text: "Peças e mão de obra num orçamento que o cliente aprova ou recusa na página de acompanhamento — com registo da hora.",
        },
        {
          title: "Reparação",
          text: "Estados claros para quem está na bancada, técnico atribuído e peças descontadas do stock. O cliente vê o progresso sem ligar.",
        },
        {
          title: "Entrega e talão",
          text: "Pagamento na caixa e talão com QR de acompanhamento e garantia. Fatura certificada com o módulo Pro (InvoiceXpress, só em Portugal).",
        },
      ],
      ui: {
        intake: {
          title: "Nova reparação",
          fields: [
            ["Cliente", "Ana Marques"],
            ["Telemóvel", "912 345 678"],
            ["Equipamento", "iPhone 13 · 128 GB"],
            ["Problema", "Ecrã partido, o toque falha em baixo"],
          ],
          hint: "Cliente habitual · 3 reparações anteriores",
        },
        device: {
          imeiLabel: "IMEI",
          accessoriesLabel: "Fica com o equipamento",
          accessories: ["Capa"],
          conditionLabel: "Estado à entrada",
          condition: "Ecrã estilhaçado · riscos na traseira",
          signature: "Assinado pelo cliente",
        },
        quote: {
          title: "Orçamento",
          lines: [
            ["Ecrã OLED (compatível)", 109],
            ["Mão de obra", 20],
          ],
          total: "Total",
          approved: "Aprovado pelo cliente",
          when: "Hoje, 11:02 · na página de acompanhamento",
        },
        repair: {
          times: ["10:42", "11:05", "15:30"],
          tech: "Técnico",
          techName: "Rui",
          stockLabel: "Ecrã iPhone 13 (OLED)",
          stockUnit: "em stock",
        },
        receipt: {
          title: "Talão",
          line: "Reparação R-2614 · iPhone 13",
          paid: "Pago · MB Way",
          warranty: "QR de acompanhamento e garantia",
          invoice: "Fatura certificada (Pro)",
        },
      },
    },
    video: {
      title: "Prefere ver?",
      lead: "O fluxo completo num minuto: receção, orçamento e aprovação no telemóvel.",
      play: "Ver o vídeo de demonstração (1 min)",
      youtube: "Apresentação narrada no YouTube",
    },
    ecosystem: {
      title: "Uma família de ferramentas à volta da bancada",
      lead: "A OficinaOS começou na gestão de reparações e está a crescer: diagnóstico por cabo, módulos online e um mercado entre profissionais. O núcleo continua grátis.",
      listLabel: "Produtos OficinaOS",
      os: {
        title: "Reparações, clientes, stock e caixa",
        text: "Grátis para sempre, código aberto e instalada no seu PC. Para o PC, o tablet e o telemóvel da equipa.",
      },
      diag: {
        title: "Diagnóstico por cabo, com relatório",
        text: "App Windows grátis que lê Android e iPhone por USB: bateria, ecrã, sensores e armazenamento.",
        battery: "Saúde da bateria",
        cycles: "ciclos",
      },
      pro: {
        title: "Módulos online, com a Cloud como motor",
        text: "Portal do cliente, WhatsApp, faturação e montra online. Opcionais, ligados um a um.",
        bubble: "Olá Ana, o seu iPhone 13 está pronto. Pode levantar até às 19h.",
        via: "via OficinaOS Cloud",
      },
      trade: {
        title: "Compra e venda entre profissionais",
        text: "Peças, lotes e equipamentos entre técnicos, oficinas e revendedores verificados.",
        rows: [
          ["Ecrãs OLED iPhone 13 · lote de 5", "Lisboa"],
          ["Galaxy S22 para peças", "Porto"],
        ],
        price: "Preço para profissionais",
      },
    },
    privacy: {
      title: "Os seus dados ficam consigo",
      lead: "A OficinaOS corre no seu PC ou no seu servidor, sem telemetria e sem conta obrigatória. Nada sai sem ser você a ligar.",
      localTitle: "No seu PC",
      local: ["Clientes e contactos", "Reparações e histórico", "Stock, vendas e caixa", "Cópias de segurança automáticas"],
      optionalTitle: "Só se ligar",
      optional: ["OficinaOS Cloud (módulos Pro)", "Mensagens por WhatsApp e SMS", "Relatórios com IA", "Acesso remoto (Cloudflare)"],
      points: [
        ["Self-hosted", "Instalador para Windows ou Docker no seu próprio servidor. Funciona na rede local, mesmo sem internet."],
        ["Código aberto", "Licença MIT: pode ler, auditar e alterar tudo o que a app faz."],
        ["RGPD sem surpresas", "Cada módulo opcional declara o que envia e para onde, pronto para o registo de tratamento."],
      ],
      link: "Ver o que sai, módulo a módulo",
    },
    changelog: {
      title: "Novidades",
      lead: "O que mudou nas últimas versões.",
      all: "Ver todas as novidades",
    },
    cta: {
      title: "Instale hoje e registe a primeira reparação",
      lead: "Sem conta, sem cartão, sem mensalidades. Se o Windows mostrar um aviso, a página de download explica o que fazer.",
      docker: "Instalação com Docker",
      portable: "Versão portátil",
      guide: "Guia de instalação",
      published: "publicada a",
    },
  },
  download: {
    metaTitle: "Descarregar a OficinaOS — Windows e Docker",
    metaDesc:
      "Descarregue a OficinaOS para Windows 10/11, confirme o SHA-256 e passe o aviso do SmartScreen. Docker para Linux e macOS.",
    title: "Descarregar a OficinaOS",
    lead: "Grátis e de código aberto. Instale num PC Windows ou num servidor com Docker — depois, a equipa abre a app no browser de qualquer PC, tablet ou telemóvel da rede.",
    latest: "Última versão",
    published: "publicada a",
    unknownVersion: "A versão mais recente está sempre no GitHub.",
    starting: "A transferência deve começar dentro de segundos. Se não começar, use o botão «Descarregar».",
    winTitle: "Windows 10 e 11",
    winText: "Instalador guiado: cria o serviço, abre a firewall e deixa um ícone na bandeja. Sem Docker.",
    winButton: "Descarregar",
    winReq: "Windows 10/11 de 64 bits · pede administrador uma vez",
    checksumTitle: "Confirmar o ficheiro (SHA-256)",
    checksumText: "Depois de descarregar, compare o resultado deste comando no PowerShell com o valor abaixo. Se for igual, o ficheiro é exatamente o publicado no GitHub.",
    checksumMissing: "Não foi possível ler o checksum desta versão durante a publicação do site. Os ficheiros .sha256 estão junto de cada versão no GitHub.",
    copy: "Copiar",
    copied: "Copiado",
    stepsTitle: "Depois de descarregar",
    steps: [
      {
        title: "Abra o OficinaOS-Setup.exe",
        text: "Está na pasta Transferências. Faça duplo clique.",
      },
      {
        title: "Se o Windows mostrar «O Windows protegeu o seu PC»",
        text: "Clique em «Mais informações» e depois em «Executar mesmo assim». O aviso aparece porque o instalador ainda não tem assinatura digital e o Windows não o conhece. Não é um vírus: o código está todo no GitHub e pode confirmar o ficheiro com o SHA-256.",
      },
      {
        title: "Aceite o pedido de administrador",
        text: "Só uma vez, para instalar o serviço, a firewall e a tarefa de cópias de segurança. O resto é automático.",
      },
      {
        title: "Entre na app",
        text: "No fim abre-se o browser em http://localhost:4000. No primeiro acesso a app mostra o ecrã de configuração inicial — crias o utilizador administrador e a palavra-passe. Nos outros dispositivos da rede: http://oficinaos.local:4000.",
      },
    ],
    smartscreen: {
      caption: "Recriação do aviso do Microsoft Defender SmartScreen, em dois passos: primeiro «Mais informações», depois «Executar mesmo assim».",
      step1: "1.º ecrã",
      step2: "2.º ecrã",
      heading: "O Windows protegeu o seu PC",
      body: "O Microsoft Defender SmartScreen impediu o arranque de uma aplicação não reconhecida. Executar esta aplicação poderá colocar o PC em risco.",
      moreInfo: "Mais informações",
      appLabel: "Aplicação:",
      publisherLabel: "Fabricante:",
      publisher: "Fabricante desconhecido",
      run: "Executar mesmo assim",
      dontRun: "Não executar",
    },
    dockerTitle: "Linux, macOS ou servidor — Docker",
    dockerText: "Não há instalador para Linux nem macOS. Com o Docker instalado, a app arranca com estes comandos:",
    portableTitle: "Sem administrador?",
    portableText: "A versão portátil corre a partir de uma pasta (até de uma pen USB), sem instalar nada.",
    portableLink: "Descarregar a versão portátil (.zip)",
    helpTitle: "Precisa de ajuda?",
    helpGuide: "Guia de instalação passo a passo",
    helpDiscord: "Perguntar no Discord",
    helpReleases: "Notas de lançamento e todas as versões",
    mobileTitle: "Está no telemóvel?",
    mobileText: "A OficinaOS instala-se num PC Windows (ou num servidor). Depois, o telemóvel e o tablet abrem a app pelo browser, na rede da loja — sem instalar nada.",
  },
  ui: {
    frame: {
      appTitle: "OficinaOS",
      caption: "Interface da OficinaOS recriada em HTML, com dados de exemplo.",
    },
    repairList: {
      title: "Reparações",
      active: "ativas",
      search: "Pesquisar por IMEI, cliente ou n.º",
      newRepair: "Nova reparação",
      cols: { id: "N.º", device: "Equipamento", customer: "Cliente", imei: "IMEI / N.º de série", status: "Estado", total: "Valor" },
      rows: [
        { id: "R-2614", device: "iPhone 13", issue: "Ecrã partido", customer: "Ana Marques", imei: "356938108542176", status: "in-repair", total: 129, when: "Hoje, 10:42" },
        { id: "R-2613", device: "Galaxy S22", issue: "Não carrega", customer: "Rui Teixeira", imei: "352094117730258", status: "waiting-for-parts", total: 45, when: "Hoje, 09:15" },
        { id: "R-2611", device: "Redmi Note 12", issue: "Bateria a inchar", customer: "Marta Lopes", imei: "868123056649912", status: "done", total: 39.9, when: "Ontem, 17:30" },
        { id: "R-2609", device: "iPad 9.ª geração", issue: "Vidro do ecrã", customer: "Oficina Norte (revenda)", imei: "DMPXK2J9Q1GC", status: "intake", total: 89, when: "Ontem, 16:05" },
        { id: "R-2604", device: "Pixel 7", issue: "Câmara traseira", customer: "João Pires", imei: "357812094418360", status: "delivered", total: 74.5, when: "23/10, 12:20" },
      ],
    },
    status: {
      intake: "Receção",
      "waiting-for-parts": "A aguardar peças",
      "in-repair": "Em reparação",
      "on-hold": "Em espera",
      done: "Pronto",
      delivered: "Entregue",
      returned: "Devolvido",
      cancelled: "Cancelado",
    },
  },
  diagPage: {
    metaTitle: "OficinaOS Diag — diagnóstico de telemóveis por cabo, grátis",
    metaDesc:
      "App Windows grátis que lê Android e iPhone por USB: bateria, ecrã, toque e sensores, com relatório HTML/JSON. Sem conta nem internet.",
    hero: {
      label: "OficinaOS Diag",
      title: "Ligue o cabo. O relatório faz o resto.",
      subtitle:
        "App Windows grátis que lê qualquer Android ou iPhone por USB: bateria, ecrã e toque, sensores e armazenamento. Tudo corre no PC, sem conta.",
      cta: "Descarregar para Windows",
      ctaSecondary: "Ver um relatório de exemplo",
      note: "Windows 10/11 · grátis · sem conta · código aberto (MIT)",
      frameTitle: "Scan USB",
      frameCaption:
        "Recriação ilustrativa de um scan do OficinaOS Diag com dados de exemplo: um iPhone 13 ligado por USB, os testes a completarem-se e o relatório pronto a exportar.",
      device: "iPhone 13 · 128 GB",
      connected: "Ligado por USB",
      trusted: "«Confiar neste computador» aceite",
      tests: [
        ["Identificação", "iOS 18.1 · série lida"],
        ["Bateria", "87 % da capacidade · 412 ciclos"],
        ["Armazenamento e RAM", "56,6 de 128 GB usados"],
        ["Sensores", "4 de 4 a responder"],
        ["Ecrã e toque", "0 pixeis mortos · 1 zona morta"],
        ["Ativação e operadora", "Ativado"],
      ],
      reportReady: "Relatório pronto",
      export: "Exportar HTML · JSON",
    },
    caps: {
      title: "O que o Diag faz — grátis, sempre",
      lead: "Sem conta e sem servidor: o scan corre 100% no PC. Dois extras opcionais ligam-no a quem repara.",
      free: [
        { title: "Scan por USB", text: "Modelo, número de série, versão do sistema, bateria (nível, temperatura, ciclos e capacidade real vs. de origem), armazenamento, RAM e sensores." },
        { title: "Teste de ecrã e toque", text: "A app serve uma página de teste na rede local — no Android abre sozinha, no iPhone lê-se um QR code. Pixeis mortos e zonas de toque mortas ficam no relatório." },
        { title: "Relatório HTML e JSON", text: "Cada scan exporta um relatório imprimível (dá para PDF e entregar ao cliente) e o JSON bruto com todos os dados." },
        { title: "Histórico no PC", text: "Os scans anteriores ficam guardados localmente — compare a saúde da bateria do mesmo equipamento ao longo do tempo, útil em garantias e usados." },
        { title: "Android e iPhone", text: "Android com o adb já incluído (nada a instalar no PC). iPhone e iPad com o driver USB da Apple." },
        { title: "Português e inglês, três temas", text: "Terminal (o visual retro original), Windows 95 e Moderno. A escolha fica guardada." },
      ],
      proTitle: "Com o Pro de quem repara",
      pro: [
        { title: "Enviar a quem repara", text: "O cliente faz o scan em casa, escreve o código que lhe deram e o diagnóstico chega à OficinaOS como pré-check." },
        { title: "Relatório em linguagem simples", text: "Os dados técnicos viram um texto claro para o cliente — «a bateria está a 78% da capacidade original, recomenda-se substituição»." },
      ],
      proBadge: "Pro",
    },
    report: {
      title: "Explore um relatório de exemplo",
      lead: "É isto que o Diag entrega no fim de cada scan. Abra cada secção — os números são de exemplo.",
      docTitle: "Relatório de diagnóstico",
      docMeta: "iPhone 13 · scan de exemplo",
      summaryLabel: "Resumo",
      summary: [
        ["Bateria", "87 %", "da capacidade de origem"],
        ["Ecrã", "0", "pixeis mortos"],
        ["Toque", "1", "zona morta"],
        ["Sensores", "4/4", "a responder"],
      ],
      sections: [
        {
          title: "Equipamento",
          rows: [
            ["Modelo", "iPhone 13 (A2633)"],
            ["Número de série", "F2LX••••Q6R"],
            ["Sistema", "iOS 18.1"],
          ],
        },
        {
          title: "Bateria",
          rows: [
            ["Nível", "64 %"],
            ["Temperatura", "31,2 °C"],
            ["Ciclos de carga", "412"],
            ["Capacidade real / de origem", "2 808 / 3 227 mAh (87 %)"],
          ],
        },
        {
          title: "Armazenamento e RAM",
          rows: [
            ["Armazenamento", "56,6 GB usados de 128 GB"],
            ["RAM", "4 GB"],
          ],
        },
        {
          title: "Sensores",
          rows: [
            ["Acelerómetro", "OK"],
            ["Giroscópio", "OK"],
            ["Proximidade", "OK"],
            ["Bússola", "OK"],
          ],
        },
        {
          title: "Ecrã e toque",
          rows: [
            ["Teste de cores", "0 pixeis mortos"],
            ["Grelha de toque", "1 zona morta (canto superior direito)"],
          ],
        },
        {
          title: "Ativação e operadora",
          rows: [
            ["Estado de ativação", "Ativado"],
            ["Operadora", "Livre"],
          ],
        },
      ],
      jsonTitle: "JSON bruto (excerto ilustrativo)",
      exportNote: "No Diag: Exportar → HTML (imprimível) ou JSON.",
    },
    integration: {
      title: "Do sofá do cliente para a bancada",
      lead: "Com o módulo de receção de diagnósticos (Pro) ativo do lado de quem repara, o Diag deixa de ser só uma ferramenta: passa a ser a porta de entrada.",
      steps: [
        { title: "O cliente faz o scan em casa", text: "Descarrega o Diag (grátis), liga o telemóvel e corre o scan." },
        { title: "Escreve o código que lhe deram", text: "O diagnóstico viaja para a OficinaOS Cloud. Nada sai do PC sem este clique." },
        { title: "Chega à OficinaOS como pré-check", text: "Aparece na fila de Pedidos, pronto a converter em reparação — ou a avaliar um usado para compra." },
      ],
      uses: "Casos de uso: pré-diagnóstico antes de o cliente vir, avaliação de usados para compra e venda, e grading com dados objetivos.",
      queue: {
        title: "Pedidos",
        caption: "Recriação ilustrativa da fila de Pedidos da OficinaOS com um diagnóstico enviado por um cliente (dados de exemplo).",
        item: "Diagnóstico enviado pelo cliente",
        meta: "iPhone 13 · bateria 87 % · 1 zona de toque morta",
        tag: "Diag",
        action: "Converter em reparação",
      },
      proLink: "Ver os módulos Pro",
      docsLink: "Como funciona o envio (guia)",
    },
    compat: {
      title: "Compatibilidade",
      lead: "Um PC com Windows 10 ou 11 e um cabo de dados. O resto depende do telemóvel.",
      readTitle: "O que o scan lê",
      readCaption: "O que o scan do Diag lê em Android e em iPhone/iPad",
      readHead: ["Dados", "Android", "iPhone/iPad"],
      readRows: [
        ["Modelo, número de série, versão do sistema", "✓", "✓"],
        ["Bateria — nível, temperatura, ciclos", "✓", "✓"],
        ["Bateria — capacidade real vs. de origem", "onde o fabricante expõe", "✓"],
        ["Armazenamento e RAM", "✓", "✓"],
        ["Sensores", "✓", "✓"],
        ["Root / bootloader desbloqueado", "✓", "—"],
        ["Estado de ativação / operadora", "—", "✓"],
      ],
      reqTitle: "O que é preciso",
      reqCaption: "Requisitos do Diag por plataforma",
      reqHead: ["", "Android", "iPhone/iPad"],
      reqRows: [
        ["No telemóvel", "Ativar «Depuração USB» nas opções de programador", "Aceitar «Confiar neste computador»"],
        ["No PC", "Nada — o adb vem incluído", "Driver USB da Apple (iTunes ou app «Apple Devices»)"],
        ["Extra", "Cabo de dados (não só de carga)", "Fechar a app Fotos do Windows antes do scan"],
      ],
      scrollLabel: "Tabela com scroll horizontal",
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        { q: "O Diag é mesmo grátis?", a: "Sim. O scan, o teste de ecrã e toque, a exportação e o histórico são grátis, sem conta e sem limite. O código é aberto (MIT). Só o envio a quem repara e o relatório em linguagem simples são módulos Pro — e são ativados do lado de quem repara, não do cliente." },
        { q: "Precisa de internet?", a: "Não. O scan corre 100% no PC. Só há ligação à internet se o utilizador escolher «Enviar à loja», «Relatório IA» ou «Enviar log» — e o destino é sempre o servidor OficinaOS." },
        { q: "Funciona em Mac ou Linux?", a: "Não: o Diag é uma app Windows (10 ou 11). O telemóvel pode ser Android, iPhone ou iPad." },
        { q: "Está na Microsoft Store?", a: "Ainda não. Por agora distribui-se como ZIP portátil no GitHub. Como o executável ainda não tem assinatura de código, o Windows pode mostrar o aviso SmartScreen na primeira vez: «Mais informações» → «Executar mesmo assim»." },
        { q: "O telemóvel não é detetado. E agora?", a: "Confirme que o cabo é de dados (não só de carga) e experimente outra porta USB. Android: «Depuração USB» ativa e o pedido de autorização aceite no telemóvel. iPhone: «Confiar neste computador» aceite, driver da Apple instalado e app Fotos fechada. Mantenha o ecrã desbloqueado durante o scan." },
        { q: "Os dados do telemóvel ficam guardados?", a: "Só no seu PC, no histórico local do Diag. Não são enviados a ninguém sem uma ação sua, e a IA (quando usada) não treina modelos com eles." },
      ],
    },
    download: {
      title: "Descarregar o Diag",
      lead: "ZIP portátil para Windows 10/11 — não precisa de instalação.",
      button: "Descarregar ZIP para Windows",
      buttonFallback: "Ver a última versão no GitHub",
      version: "Versão",
      released: "Publicada a",
      size: "Tamanho",
      sums: "Checksums (SHA256SUMS.txt)",
      steps: [
        "Extraia a pasta inteira — o OficinaDiag.exe precisa dos ficheiros que vêm ao lado.",
        "Abra o OficinaDiag.exe. Se o Windows avisar: «Mais informações» → «Executar mesmo assim» (só na primeira vez).",
        "Ligue o telemóvel por cabo e siga as indicações no ecrã.",
      ],
      source: "Código-fonte no GitHub",
      docs: "Documentação completa do Diag",
      store: "Ainda não está na Microsoft Store.",
    },
    productLink: "Conhecer o OficinaOS Diag",
    docsLink: "Documentação completa",
  },
  proPage: {
    metaTitle: "OficinaOS Pro — tudo incluído num só plano, a partir de 39 €/mês",
    metaDesc:
      "WhatsApp e SMS com assistente de IA, portal do cliente, Balcão IA, livro de ponto, faturação e montra online — todos os módulos num só plano, até 3 lojas. 14 dias grátis.",
    hero: {
      label: "OficinaOS Pro",
      title: "Tudo o que a sua oficina precisa fora do balcão. Num só plano.",
      subtitle:
        "O programa continua grátis. O Pro liga-o à internet: responde aos clientes no WhatsApp e por SMS, mostra o estado das reparações, regista o ponto da equipa e fatura — tudo incluído, sem escolher módulos.",
      priceLine: "Desde {price}/mês · até {shops} lojas · {days} dias grátis",
      cta: "Experimentar {days} dias grátis",
      ctaSecondary: "Ver o que está incluído",
      frameTitle: "Definições — Cloud",
      frameCaption:
        "Recriação ilustrativa do separador Cloud nas definições da OficinaOS, com dados de exemplo: ligada à OficinaOS Cloud, com o plano Pro e os módulos ativos.",
      status: "Ligado à OficinaOS Cloud · Plano Pro",
      sync: "Última sincronização: há 1 min",
      modulesTitle: "Incluído no seu plano",
      modules: ["WhatsApp e SMS com IA", "Portal do cliente", "Balcão IA", "Livro de Ponto", "Faturação certificada"],
      more: "+ {rest} módulos",
      active: "Ativo",
      offline: "Sem internet, tudo o resto continua a funcionar na rede da loja.",
    },
    core: {
      title: "O programa é grátis. Sempre.",
      lead: "O Pro não tira nada ao programa que descarrega. A OficinaOS continua gratuita e de código aberto: sem limites, sem contas e sem período de teste.",
      items: [
        "Reparações, orçamentos, clientes, stock e caixa",
        "No seu PC, a funcionar sem internet",
        "Código aberto, licença MIT",
        "Página pública de acompanhamento e resposta a orçamentos",
        "OficinaOS Diag — diagnóstico por cabo, grátis",
      ],
      note: "As mensagens aos clientes (WhatsApp e SMS) são do Pro: o programa grátis não envia nem recebe mensagens.",
      link: "Descarregar a OficinaOS",
    },
    benefits: {
      title: "O que muda na sua loja",
      lead: "Menos tempo ao telefone, mais tempo na bancada.",
      items: [
        { title: "Acabam os «já está pronto?»", text: "O cliente pergunta no WhatsApp ou por SMS e o assistente responde na hora com o estado real da reparação — mesmo com a loja fechada." },
        { title: "Orçamentos aprovados mais depressa", text: "O cliente aprova com um «SIM» ou num link, a qualquer hora. A aprovação entra na app com data e hora." },
        { title: "Nenhuma mensagem se perde", text: "WhatsApp e SMS numa só caixa de entrada. O Balcão IA resume e prepara respostas; um humano aprova antes de enviar." },
        { title: "Ponto da equipa sem papel", text: "Os funcionários picam o ponto pelo WhatsApp. Registos inalteráveis durante 5 anos, prontos para a ACT." },
        { title: "Fatura certificada no fim da reparação", text: "Da venda ou da reparação para a fatura InvoiceXpress, sem escrever tudo duas vezes. Só Portugal." },
        { title: "Clientes que voltam", text: "Montra online com reservas, lembretes de recolha e mensagens a clientes que não aparecem há algum tempo." },
      ],
    },
    groups: {
      title: "Tudo o que está incluído",
      lead: "{count} módulos em três grupos — todos incluídos no plano Pro. Não há módulos para escolher nem para pagar à parte.",
      more: "Guia",
      items: [
        {
          title: "Falar com clientes",
          text: "O cliente sabe em que ponto está a reparação e aprova o orçamento sem telefonar. O assistente de IA responde só com o que a loja deixa dizer e passa a uma pessoa quando não sabe.",
          ui: {
            title: "WhatsApp",
            caption: "Conversa de exemplo com o assistente de WhatsApp: o cliente aprova um orçamento respondendo SIM.",
            messages: [
              ["in", "Olá, o iPhone já tem orçamento?"],
              ["out", "REP-2614 · iPhone 13: substituir ecrã — 129,00 €. Responda SIM para aprovar ou NÃO para recusar."],
              ["in", "SIM"],
              ["out", "Orçamento aprovado. Avisamos quando estiver pronto."],
            ],
          },
        },
        {
          title: "Vender e faturar",
          text: "Do balcão à fatura certificada, e uma montra online cujas reservas entram na app.",
          ui: {
            title: "Venda",
            caption: "Venda de exemplo na OficinaOS com a fatura-recibo emitida via InvoiceXpress.",
            lines: [
              ["Substituição de ecrã · iPhone 13", "129.00"],
              ["Película de vidro", "9.90"],
            ],
            total: "Total (IVA incl.)",
            issued: "Fatura-recibo emitida · InvoiceXpress",
            reservation: "Nova reserva da montra",
            reservationItem: "Capa iPhone 13 — em Pedidos",
          },
        },
        {
          title: "Gerir e crescer",
          text: "Compare os seus preços com o mercado, veja várias lojas num painel, receba diagnósticos feitos em casa e registe o ponto da equipa.",
          ui: {
            title: "Preços de mercado",
            caption: "Tabela de exemplo dos preços de mercado: mediana, intervalo e número de lojas ao lado do seu preço.",
            head: ["Artigo", "Mediana", "Intervalo", "O seu"],
            rows: [
              ["Ecrã iPhone 13", "129", "99–159", "7", "135"],
              ["Bateria iPhone 12", "59", "45–75", "5", "55"],
              ["Conector Galaxy A52", "45", "35–60", "3", ""],
            ],
            shops: "lojas",
            note: "Um preço só aparece quando 3 ou mais lojas o partilham.",
          },
        },
      ],
    },
    cloud: {
      title: "A Cloud é o motor do Pro",
      lead: "A OficinaOS Cloud é a ponte entre a app no seu PC e o exterior. Não é outro programa para aprender: liga-se uma vez e trabalha nos bastidores.",
      steps: [
        { title: "Emparelhe uma vez", text: "Crie conta em cloud.oficinaos.app e cole o código de emparelhamento em Definições → Cloud." },
        { title: "O plano ativa tudo", text: "Com o Pro ativo, todos os módulos ficam disponíveis do lado do servidor — sem ficheiros de licença nem chaves para instalar." },
        { title: "A app sincroniza sozinha", text: "A cada ~2 minutos envia e recebe o que os módulos precisam — as mensagens dos clientes seguem um ciclo rápido de ~12 segundos. O PC nunca fica exposto à internet." },
      ],
      diagram: { pc: "A OficinaOS no seu PC", cloud: "OficinaOS Cloud", out: "Clientes e serviços", sync: "a cada ~2 min" },
      dataTitle: "O que vai para a Cloud",
      dataText: "Só os dados que cada módulo precisa — por exemplo, o resumo redigido de uma reparação para o portal. Sem Pro, nada sai do PC.",
      dataLink: "Privacidade, módulo a módulo",
      offline: "Sem emparelhamento, a OficinaOS funciona na mesma na rede local — os módulos Pro simplesmente não aparecem.",
      login: "Já tem conta? Entrar na OficinaOS Cloud",
    },
    pricing: {
      title: "Um plano. Tudo incluído.",
      lead: "Escolha só como quer a inteligência artificial: incluída por nós, ou com a sua própria chave. O resto é igual.",
      planName: "OficinaOS Pro",
      perMonth: "/mês",
      vat: "+ IVA · por conta, não por loja",
      optionAi: { title: "Com IA incluída", text: "Nós tratamos do modelo de IA. Não precisa de conta em lado nenhum." },
      optionByok: { title: "Com a sua chave de IA", text: "Liga a sua conta OpenAI, Anthropic ou Gemini e paga a IA diretamente ao fornecedor." },
      recommended: "Mais simples",
      includedTitle: "Incluído nos dois",
      included: [
        "Todos os {count} módulos Pro",
        "Até {shops} lojas na mesma conta",
        "{conversations} conversas com IA por mês, partilhadas pelas lojas",
        "WhatsApp e SMS (ligação rápida por QR e telemóvel Android da loja)",
        "Suporte em português",
        "Sem fidelização — cancela quando quiser",
      ],
      cta: "Experimentar {days} dias grátis",
      conversationNote: "Uma conversa são todas as mensagens de um cliente durante 24 horas: dez mensagens do mesmo cliente na mesma noite contam como uma.",
      founder: {
        title: "Preço de fundador",
        text: "Os primeiros {slots} clientes pagam {price}/mês com IA incluída durante {months} meses.",
        cta: "Quero ser fundador",
      },
      annual: {
        title: "Plano anual: escolha a sua oferta",
        optionSetup: { title: "Configuramos tudo por si", text: "Arranque assistido dedicado, até {hours} horas (valor {value}), oferecido." },
        optionMonths: { title: "{months} meses grátis", text: "Paga 10 meses e usa 12." },
      },
      extras: {
        title: "Extras, só se precisar",
        caption: "Extras opcionais do plano Pro",
        head: ["Extra", "Preço", "Para quê"],
        rows: [
          ["Loja adicional (a partir da {nextShop}.ª)", "{extraShop}/mês", "Redes com mais de {shops} lojas"],
          ["Pacote de conversas", "{packPrice} por +{packConversations}", "Meses com muito movimento; vale só nesse mês"],
          ["WhatsApp oficial da Meta", "{activation} de ativação", "Sem risco de bloqueio, botões nas mensagens e nome verificado"],
        ],
        metaNote: "No WhatsApp oficial, a Meta cobra as mensagens diretamente à sua empresa, no seu cartão. Inclui {metaFree} respostas grátis por mês e por número — uma loja pequena raramente passa disso. Nós não cobramos nada por cima.",
      },
      scrollLabel: "Tabela com scroll horizontal",
    },
    services: {
      title: "Prefere que tratemos de tudo?",
      lead: "O Pro configura-se sozinho em poucos minutos. Mas, se preferir, instalamos, importamos e ensinamos — sem surpresas na fatura.",
      caption: "Serviços pagos à parte",
      head: ["Serviço", "Preço", "O que inclui"],
      rows: [
        ["Instalação no seu PC ou na sua VPS", "{installation}", "Instalação + {supportHours} h de suporte dedicado nos primeiros {supportDays} dias. Presencial: deslocação à parte. A VPS é paga por si ao seu fornecedor."],
        ["Importação de dados de outro programa", "desde {importFrom}", "Clientes e reparações de Excel/CSV ({importFrom}) ou de outro programa (sob análise). Primeiro fazemos um teste grátis com uma amostra."],
        ["Arranque assistido, formação e suporte", "{hourly}/hora", "Configuração consigo, formação da equipa ou ajuda à medida. Em blocos de {block} min, mínimo {minimum} min."],
        ["Alojamento na nossa VPS", "{hosting}", "Servidor na UE com atualizações, segurança e cópias de segurança diárias incluídas."],
      ],
      tbd: "a anunciar",
      note: "A instalação e os serviços também se aplicam a quem só quer a OficinaOS grátis instalada.",
      scrollLabel: "Tabela com scroll horizontal",
    },
    form: { title: "Começar os {days} dias grátis" },
    faq: {
      title: "Perguntas frequentes",
      items: [
        { q: "A OficinaOS vai deixar de ser grátis?", a: "Não. O programa é de código aberto (MIT) e o núcleo nunca fica atrás de um pagamento. O Pro acrescenta o que precisa de internet: mensagens, portal, IA, ponto e faturação." },
        { q: "Tenho de escolher módulos?", a: "Não. O plano Pro inclui todos os módulos. Use os que lhe fazem falta; os outros ficam lá para quando precisar." },
        { q: "O que é «com a sua chave de IA»?", a: "Se já tem conta num fornecedor de IA (OpenAI, Anthropic, Gemini…), pode ligá-la e paga a IA diretamente a esse fornecedor. Por isso o plano fica mais barato. Se não sabe o que isto é, escolha «com IA incluída»." },
        { q: "E se passar das conversas incluídas?", a: "O assistente continua a passar as mensagens à equipa, sem responder com IA. Pode comprar um pacote de conversas para esse mês ou falar connosco para um plano à medida." },
        { q: "Preciso do WhatsApp oficial da Meta?", a: "Não. Por defeito ligamos o WhatsApp da loja por QR, sem custos por mensagem. É uma ligação não oficial, com um pequeno risco de bloqueio que explicamos antes. Se não quer risco nenhum, ative o WhatsApp oficial (extra), e o SMS fica sempre como reserva." },
        { q: "Tenho várias lojas. Pago por cada uma?", a: "Não. O plano é por conta e inclui até 3 lojas. A partir da 4.ª, cada loja adicional tem um custo mensal pequeno." },
        { q: "O que acontece se desligar a Cloud?", a: "A app continua a funcionar na rede local com todos os seus dados; os módulos Pro deixam de aparecer. Ao desligar, os dados da loja guardados na Cloud são apagados. Os registos do livro de ponto continuam consultáveis na app, como a lei exige." },
        { q: "Já estou no piloto. O que muda?", a: "Nada para já: quem entrou no piloto mantém os 90 dias grátis de todos os módulos quando o Pro arrancar." },
      ],
    },
  },
  modulePages: {
    ponto: {
      metaTitle: "Livro de Ponto pelo WhatsApp — sem apps, sem relógio, sem papel | OficinaOS",
      metaDesc:
        "Os funcionários picam o ponto pelo WhatsApp ou por SMS, com um QR à porta. Registos inalteráveis durante 5 anos, prontos para a ACT. Lista de espera aberta.",
      hero: {
        label: "Livro de Ponto",
        badge: "Em breve para todas as empresas",
        title: "Picar o ponto pelo WhatsApp. Sem apps, sem relógio, sem papel.",
        subtitle:
          "O funcionário lê um QR à porta e envia a mensagem que já vem escrita. Você vê no telemóvel ou no computador quem chegou, a que horas e onde estava.",
        cta: "Entrar na lista de espera",
        ctaSecondary: "Ver como funciona",
        proNote: "Tem uma oficina de reparação? O Livro de Ponto já está incluído no",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Livro de Ponto",
        caption: "Conversa de exemplo: o funcionário regista a entrada lendo o QR e partilhando a localização.",
        messages: [
          ["in", "ENTRADA · Oficina Central · #4821"],
          ["out", "Olá Rui! Toque para enviar a sua localização. 📍"],
          ["in", "📍 Localização partilhada"],
          ["out", "✅ Entrada registada às 09:02. Bom trabalho! Para a pausa, escreva PAUSA."],
        ],
        note: "Não é preciso decorar comandos nem escrever em maiúsculas: «cheguei» ou «vou almoçar» também funcionam.",
      },
      problem: {
        title: "O registo de horas é obrigatório. E costuma dar trabalho.",
        lead: "Em Portugal, todas as empresas têm de registar as entradas, saídas e intervalos de cada trabalhador e guardar esses registos durante 5 anos (Código do Trabalho, art. 202.º). Na prática, acaba numa destas:",
        items: [
          { title: "Folha de papel", text: "Esquece-se, rasura-se, perde-se — e é difícil provar que não foi alterada." },
          { title: "Relógio de ponto", text: "É preciso comprá-lo ou alugá-lo, instalá-lo e mantê-lo. E não serve para quem trabalha fora." },
          { title: "Apps de ponto", text: "Cada funcionário instala uma app, cria conta e lembra-se da password. Muitos acabam por não a usar." },
        ],
      },
      steps: {
        title: "Como funciona",
        lead: "Três passos. O primeiro registo demora segundos.",
        items: [
          { title: "Cole o QR à porta", text: "Imprima o cartaz com o QR da sua empresa (vem pronto) e cole-o na entrada. Não precisa de tablet, ecrã nem relógio." },
          { title: "O funcionário lê e envia", text: "Aponta a câmara, o WhatsApp abre com a mensagem já escrita, carrega em enviar e partilha a localização com um toque. Pausa, regresso e saída são uma palavra." },
          { title: "Você vê tudo no painel", text: "Quem está na empresa agora, as horas de cada um, atrasos e esquecimentos. No fim do mês, exporta em PDF para o contabilista." },
        ],
      },
      benefits: {
        title: "Porque é diferente",
        items: [
          { title: "Sem instalar nada", text: "Usa o WhatsApp que os funcionários já têm. Sem contas nem passwords." },
          { title: "Sem comprar equipamento", text: "Basta um QR impresso." },
          { title: "Funciona sem WhatsApp", text: "Quem não usa WhatsApp regista por SMS, com o código que aparece ao ler o QR." },
          { title: "Trabalho externo incluído", text: "Comerciais e técnicos registam onde estão, com localização e, se quiser, uma fotografia — que também serve de prova de visita." },
          { title: "Pronto para inspeções", text: "Registos que não se podem apagar nem alterar; correções ficam no histórico com quem e porquê; 5 anos guardados." },
          { title: "Avisos automáticos", text: "Esqueceu-se de registar a saída? O sistema pergunta-lhe e regista com a confirmação dele." },
        ],
      },
      trust: {
        title: "Porque pode confiar nos registos",
        lead: "Um registo de ponto só vale se for difícil fazer batota. Juntamos várias provas, sem invadir a privacidade de ninguém.",
        items: [
          { title: "O código expira em 2 minutos e só serve uma vez", text: "Ler o QR gera um código novo. Uma fotografia do QR tirada ontem não regista nada hoje." },
          { title: "Localização no momento do registo", text: "Só nesse momento, nunca durante o dia. A mais de 100 m da empresa, o registo fica «por validar» e você decide." },
          { title: "Rede da empresa como prova extra", text: "Se o telemóvel estiver ligado ao Wi-Fi da empresa, fica registado como prova adicional." },
          { title: "A hora é a do nosso servidor", text: "Nunca a do telemóvel nem a escrita na mensagem. Ninguém regista «às 9h» se chegou às 9h40." },
        ],
      },
      privacy: {
        title: "Privacidade dos seus funcionários",
        items: [
          "Localização só no momento do registo — nunca acompanhamos ninguém.",
          "Sem impressões digitais nem reconhecimento facial.",
          "Fotografias só se a empresa as pedir, e nunca guardadas nos nossos servidores.",
          "Cada funcionário pode consultar os seus registos.",
          "Folha de informação aos trabalhadores pronta a imprimir, como pede o RGPD.",
        ],
      },
      forWhom: {
        title: "Para quem é",
        yesTitle: "Feito para empresas de 1 a 30 pessoas",
        yes: ["Restaurantes e cafés", "Oficinas e reparações", "Comércio e lojas", "Limpezas e manutenção", "Construção e obras", "Clínicas e salões", "Equipas na rua"],
        noTitle: "Talvez não seja para si",
        no: "Se precisa de gestão completa de salários, turnos complexos com centenas de pessoas ou integração com grandes sistemas de RH, um software de RH completo serve-o melhor.",
      },
      needs: {
        title: "O que precisa para começar",
        head: ["O quê", "É preciso?", "Para quê"],
        rows: [
          ["Um número de WhatsApp para a empresa", "Sim", "É para esse número que os funcionários enviam. Pode ser um telemóvel com WhatsApp Business que já tenha."],
          ["Uma impressora", "Sim", "Para imprimir o cartaz com o QR (A4)."],
          ["Um telemóvel Android com cartão SIM", "Só para SMS", "Para quem não tem WhatsApp, e como reserva se o WhatsApp falhar."],
        ],
        note: "Os funcionários só precisam do telemóvel deles.",
        scrollLabel: "Tabela com scroll horizontal",
      },
      pricing: {
        title: "Quanto custa",
        lead: "Preço simples por número de funcionários, sem mínimos e sem fidelização.",
        standaloneTitle: "Para qualquer empresa",
        standaloneText: "Preço a anunciar no lançamento. Quem entrar na lista de espera recebe primeiro as condições de lançamento.",
        proTitle: "Para oficinas de reparação",
        proText: "Já incluído no OficinaOS Pro, a partir de {proPrice}/mês, com {days} dias grátis.",
        proLink: "Conhecer o OficinaOS Pro",
        note: "Os SMS saem do telemóvel da empresa: o custo é o do seu tarifário.",
      },
      waitlist: {
        title: "Entrar na lista de espera do Livro de Ponto",
        subtitle: "Avisamos assim que estiver disponível para a sua empresa — e ajudamos a pôr a funcionar. Sem compromisso.",
        button: "Entrar na lista de espera",
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          { q: "É legal registar o ponto pelo WhatsApp?", a: "A lei exige que o registo exista, indique entradas, saídas e intervalos, esteja acessível e seja guardado 5 anos. O Livro de Ponto foi feito para isso. Recomendamos confirmar com o seu contabilista ou jurista a forma como o aplica." },
          { q: "E se um funcionário não tiver WhatsApp?", a: "Regista por SMS, com o código que aparece ao ler o QR. Esses registos ficam «por validar», porque a SMS não envia localização, e confirma-os com um clique." },
          { q: "Que WhatsApp é usado?", a: "Por defeito, ligamos o WhatsApp da empresa como o WhatsApp Web, lendo um QR — sem custos por mensagem. É uma ligação não oficial: no ponto o risco de bloqueio é baixo, porque são os seus funcionários que escrevem. Se acontecer, troca-se o número sem perder registos e o ponto continua por SMS. Também pode usar o WhatsApp Business oficial da Meta." },
          { q: "Posso corrigir um registo?", a: "Sim. A correção fica como uma linha nova, com quem corrigiu e porquê. O registo original nunca se apaga — é isso que dá valor ao registo numa inspeção." },
          { q: "Os funcionários conseguem fazer batota?", a: "É muito difícil: o código expira e só serve uma vez, a localização é verificada e a hora é a do servidor. O que não conseguimos confirmar fica marcado para validar." },
          { q: "Já uso a OficinaOS. Como ativo?", a: "Está incluído no OficinaOS Pro: não precisa da lista de espera. Veja o guia do Livro de Ponto." },
        ],
      },
    },
    atendimento: {
      metaTitle: "Atendimento IA no WhatsApp — responde aos clientes mesmo fechado | OficinaOS",
      metaDesc:
        "Um assistente que responde aos clientes no WhatsApp e por SMS: horários, preços, moradas e dúvidas. Quando não sabe, passa a uma pessoa. Lista de espera aberta.",
      hero: {
        label: "Atendimento IA",
        badge: "Em breve para todas as empresas",
        title: "Um assistente que responde aos seus clientes no WhatsApp. Mesmo quando está fechado.",
        subtitle:
          "Responde na hora a horários, preços, moradas e dúvidas frequentes. Quando não sabe, passa a conversa a uma pessoa da sua equipa. No número de WhatsApp que a sua empresa já usa.",
        cta: "Entrar na lista de espera",
        ctaSecondary: "Ver como funciona",
        proNote: "Tem uma oficina de reparação? O assistente de WhatsApp e SMS — que sabe o estado de cada reparação — já está incluído no",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Restaurante (exemplo)",
        caption: "Conversa de exemplo: um cliente pergunta o horário e pede mesa fora de horas; o assistente responde e passa o pedido à equipa.",
        messages: [
          ["in", "Boa noite, estão abertos amanhã? E fazem mesa para 6?"],
          ["out", "Boa noite! Amanhã, sábado, estamos abertos das 12h às 15h e das 19h às 23h. 😊 Para 6 pessoas, um colega confirma a reserva. Para que hora seria?"],
          ["in", "20h30"],
          ["out", "Anotado: 6 pessoas, sábado às 20h30. A equipa vai confirmar-lhe por aqui assim que abrir. Obrigado!"],
        ],
        note: "O assistente apresenta-se sempre como assistente virtual e nunca inventa: o que não está na ficha da empresa vai para uma pessoa.",
      },
      problem: {
        title: "Mensagens sem resposta são clientes perdidos",
        lead: "Os clientes escrevem a qualquer hora e esperam resposta rápida. Sem ajuda, acontece isto:",
        items: [
          { title: "Perde clientes fora de horas", text: "Quem pergunta às 22h «estão abertos amanhã?» e não recebe resposta pergunta ao concorrente." },
          { title: "A equipa responde sempre ao mesmo", text: "«Qual é o horário?», «Fazem entregas?», «Quanto custa?» — dezenas de vezes por dia, a interromper o trabalho." },
          { title: "As mensagens perdem-se", text: "Ninguém sabe quem já respondeu, e o cliente fica à espera." },
        ],
      },
      steps: {
        title: "Como funciona",
        lead: "Configurado em minutos, sem preencher formulários.",
        items: [
          { title: "Liga o WhatsApp da empresa", text: "Lê um QR com o telemóvel da empresa, como no WhatsApp Web. O número continua a ser o seu. Também há a ligação oficial da Meta." },
          { title: "O assistente aprende a sua empresa", text: "Diz-lhe o nome da empresa: ele lê o seu site e o seu perfil, escreve a ficha (horário, morada, serviços, preços) e faz-lhe meia dúzia de perguntas sobre o que falta. Nada fica ativo sem a sua aprovação." },
          { title: "Responde, e a equipa trata do resto", text: "O assistente responde ao que está na ficha. O que não sabe, ou o que precisa de uma pessoa, passa à equipa com um aviso no telemóvel." },
        ],
      },
      benefits: {
        title: "O que ganha",
        items: [
          { title: "Responde 24 horas por dia", text: "Noites, fins de semana e feriados. O cliente tem sempre resposta." },
          { title: "Menos interrupções", text: "As perguntas repetidas deixam de chegar à equipa." },
          { title: "Ninguém fica sem resposta", text: "O que o assistente não sabe vai para uma pessoa, com aviso." },
          { title: "No seu número", text: "Os clientes escrevem para o WhatsApp de sempre." },
          { title: "Também por SMS", text: "Clientes sem WhatsApp recebem resposta por SMS; se o WhatsApp falhar, o SMS assegura os avisos." },
          { title: "Continua a aprender", text: "Quando a equipa responde a uma pergunta nova, o assistente sugere guardá-la para a próxima vez." },
        ],
      },
      trust: {
        title: "O que faz — e o que não faz",
        lead: "Um assistente útil é um assistente que conhece os seus limites.",
        items: [
          { title: "Responde só com o que a empresa aprovou", text: "Horários, morada, serviços, preços indicativos, condições e perguntas frequentes da sua ficha." },
          { title: "Recolhe pedidos, não os confirma", text: "Reservas, orçamentos e contactos passam à equipa: quem confirma é sempre uma pessoa." },
          { title: "Nunca inventa", text: "Sem preços, prazos ou promessas fora da ficha. Na dúvida, diz que a equipa responde." },
          { title: "Nunca finge ser uma pessoa", text: "Apresenta-se como assistente virtual, e o cliente pode pedir para falar com alguém a qualquer momento." },
        ],
      },
      privacy: {
        title: "Os dados dos seus clientes",
        items: [
          "A IA só vê a ficha da empresa e a conversa com aquele cliente.",
          "As conversas não são usadas para treinar modelos de IA.",
          "Servidores na União Europeia, separados por empresa.",
          "Pode rever todas as conversas no painel e assumir qualquer uma.",
        ],
      },
      forWhom: {
        title: "Para quem é",
        yesTitle: "Para negócios que recebem mensagens todos os dias",
        yes: ["Restaurantes", "Lojas e comércio", "Clínicas e salões", "Alojamento local", "Oficinas e serviços", "Ginásios"],
        noTitle: "Talvez não seja para si",
        no: "Se recebe poucas mensagens por semana, responder à mão continua a ser o mais simples. Se precisa de um centro de contacto com dezenas de operadores, uma plataforma de contact center serve-o melhor.",
      },
      needs: {
        title: "O que precisa para começar",
        head: ["O quê", "É preciso?", "Para quê"],
        rows: [
          ["Um telemóvel com o WhatsApp da empresa", "Sim (ligação rápida)", "O assistente responde nesse número. Fica ligado à internet."],
          ["Os dados da empresa na Meta", "Só no WhatsApp oficial", "NIF, morada e um número para verificar. Tratamos do resto."],
          ["Um telemóvel Android com cartão SIM", "Só para SMS", "Para clientes sem WhatsApp, e como reserva."],
        ],
        note: "Não precisa de site nem de loja online — mas, se tiver, o assistente aprende com eles.",
        scrollLabel: "Tabela com scroll horizontal",
      },
      pricing: {
        title: "Quanto custa",
        lead: "Mensalidade fixa com conversas incluídas, sem custos por mensagem na ligação rápida e sem fidelização.",
        standaloneTitle: "Para qualquer empresa",
        standaloneText: "Preço a anunciar no lançamento, com a opção de usar a sua própria chave de IA. Quem entrar na lista de espera recebe primeiro as condições de lançamento.",
        proTitle: "Para oficinas de reparação",
        proText: "O assistente de WhatsApp e SMS já está incluído no OficinaOS Pro, a partir de {proPrice}/mês, com {days} dias grátis.",
        proLink: "Conhecer o OficinaOS Pro",
        note: "No WhatsApp oficial da Meta, a Meta cobra as mensagens diretamente à sua empresa, com 1.000 respostas grátis por mês.",
      },
      waitlist: {
        title: "Entrar na lista de espera do Atendimento IA",
        subtitle: "Avisamos assim que estiver disponível para a sua empresa — e ajudamos a configurar. Sem compromisso.",
        button: "Entrar na lista de espera",
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          { q: "O assistente pode dar respostas erradas?", a: "Pode enganar-se, como qualquer pessoa. Por isso só responde com o que está na sua ficha, nunca inventa preços nem prazos e passa à equipa quando tem dúvidas. Pode rever todas as conversas e melhorar a ficha." },
          { q: "Os clientes sabem que estão a falar com uma máquina?", a: "Sim. O assistente apresenta-se como assistente virtual, e o cliente pode pedir para falar com uma pessoa a qualquer momento." },
          { q: "Que WhatsApp é usado?", a: "Por defeito, a ligação rápida: ligamos o WhatsApp da empresa lendo um QR, sem custos por mensagem. É não oficial, com um pequeno risco de bloqueio que reduzimos (só responde a quem escreve, nunca envia em massa, ritmo humano). Se não quer risco nenhum, use o WhatsApp oficial da Meta." },
          { q: "A equipa continua a poder responder?", a: "Sim. Pode assumir qualquer conversa a qualquer momento, e o assistente deixa de responder nessa conversa." },
          { q: "Funciona com o meu programa de gestão?", a: "Para perguntas gerais não precisa de integração. Para consultar encomendas ou serviços, fazemos a integração à medida." },
          { q: "Tenho uma oficina. Preciso disto?", a: "Não: o OficinaOS Pro já inclui o assistente de WhatsApp e SMS, e esse sabe o estado de cada reparação." },
        ],
      },
    },
  },
  tradePage: {
    metaTitle: "OficinaOS Trade — peças e equipamentos entre profissionais",
    metaDesc:
      "Rede B2B onde técnicos e lojas verificados compram e vendem telemóveis, peças e lotes. Sem particulares nem comissões. Em toda a UE.",
    hero: {
      label: "OficinaOS Trade",
      badge: "Grátis no lançamento",
      title: "Peças e equipamentos, de profissional para profissional.",
      subtitle:
        "A rede B2B onde técnicos, oficinas e revendedores verificados compram e vendem telemóveis, computadores, peças e lotes entre si. Sem particulares, sem mínimos de compra e sem comissão por negócio.",
      cta: "Candidatar-me — é grátis",
      ctaSecondary: "Ver o mercado",
      note: "Só empresas verificadas · Toda a União Europeia",
      frameTitle: "Mercado",
      frameCaption:
        "Recriação ilustrativa da pesquisa do OficinaOS Trade com dados de exemplo: a frase «10 ecrãs iPhone 13 no Porto, originais» é convertida em filtros (peça, ecrã, original nova, iPhone 13, Porto, stock de pelo menos 10) e aparecem três anúncios compatíveis, com o preço reservado a membros verificados.",
      query: "10 ecrãs iPhone 13 no Porto, originais",
      searchButton: "Pesquisar",
      aiApplied: "Filtros sugeridos pela IA a partir da sua frase.",
      aiBeta: "beta",
      aiUndo: "Pesquisar só o texto",
      chips: ["Peça", "Ecrã", "Original nova", "iPhone 13", "Porto", "stock ≥ 10"],
      results: [
        ["Ecrã iPhone 13 OLED", "Peça · Original nova · Novo", "Porto", "×12"],
        ["Ecrãs iPhone 13 · lote", "Lote · Original nova · Novo", "Porto", "×25"],
        ["Ecrã iPhone 13 com moldura", "Peça · Original nova · Novo", "Porto", "×10"],
      ],
      priceLock: "Preço para membros verificados",
    },
    how: {
      title: "Como funciona",
      lead: "Do pedido de adesão ao negócio fechado, em três passos.",
      steps: [
        {
          title: "Candidate-se com a sua empresa",
          text: "Em Portugal, NIF e código da certidão permanente — ou o comprovativo de início de atividade, se trabalha por conta própria. Nos restantes países da UE, número de IVA intracomunitário confirmado no VIES e o documento de registo da empresa. Algumas candidaturas têm resposta imediata; as restantes são revistas por uma pessoa.",
        },
        {
          title: "Publique o que tem, peça o que lhe falta",
          text: "Equipamentos inteiros, peças, «para peças» e lotes. Ou crie um pedido «Procuro»: quem tem stock compatível é avisado e você recebe os alertas.",
        },
        {
          title: "Proponha e feche com registo",
          text: "Proposta, contraproposta e acordo ficam registados com os dados para a fatura. O pagamento é direto entre as empresas e as avaliações só abrem depois da receção.",
        },
      ],
      frame: {
        title: "Acordos",
        caption:
          "Recriação ilustrativa de um acordo no OficinaOS Trade com dados de exemplo: ecrãs iPhone 13 OLED, 12 unidades, nos passos aceite, pago e enviado; o próximo passo do comprador é confirmar a receção.",
        deal: "Ecrã iPhone 13 OLED · ×12",
        sides: "Vendedor ⇄ Comprador",
        steps: ["Aceite", "Pago", "Enviado", "Recebido", "Fechado"],
        yourTurn: "O próximo passo é seu",
        action: "Confirmar receção",
        explainer: "O pagamento é direto à contraparte — a plataforma não move dinheiro.",
      },
    },
    catalog: {
      title: "Equipamentos, peças e lotes",
      lead: "Cada anúncio diz o que é, em que estado está e quanto há, com os mesmos termos para toda a rede.",
      groups: [
        { title: "Equipamentos", items: ["Telemóvel", "Tablet", "Portátil", "Computador", "Relógio", "Consola"] },
        { title: "Peças", items: ["Ecrã", "Bateria", "Placa", "Câmara", "Tampa traseira", "Conector de carga", "Altifalante", "Chassis"] },
        { title: "Qualidade da peça", items: ["Original nova", "Original recuperada", "Service pack", "Compatível premium", "Compatível"] },
        { title: "Estado", items: ["Novo", "Como novo", "Bom estado", "Razoável", "Para peças"] },
      ],
      volume:
        "Para volume: lotes, escalões de preço por quantidade (1, 10+, 50+), quantidade mínima e prazo de envio — ou levantamento em mão. Sem mínimo de compra: dá para negociar desde uma unidade.",
    },
    trust: {
      title: "Só entra quem é profissional",
      lead: "O que separa o Trade de um grupo de WhatsApp ou de um site de classificados.",
      items: [
        { title: "Só empresas verificadas", text: "Cada membro é uma empresa ou um profissional com atividade aberta, confirmado pelo NIF e por documento. Sem particulares." },
        { title: "Preços só para verificados", text: "Quem está de fora vê que existe stock, mas nunca o preço nem quem vende." },
        { title: "Contactos fora das descrições", text: "Telefones, emails e IBAN escritos num anúncio ficam ocultos para quem ainda não está verificado." },
        { title: "Período probatório", text: "Membros novos começam com um limite de propostas abertas e um teto por negócio." },
        { title: "Avaliações depois de receber", text: "Só se avalia depois da receção. Se algo correr mal, abre-se uma disputa e a moderação medeia — as avaliações ficam bloqueadas até resolver." },
        { title: "Denúncias com consequência", text: "Fraude, equipamento furtado ou informação incorreta: a denúncia vai para a moderação, e denúncias repetidas de membros verificados suspendem a conta até revisão." },
      ],
      note: "O IMEI nunca aparece completo: fica guardado só como hash, com os últimos 4 dígitos. A conta tem bloqueio após tentativas de login falhadas, recuperação de password com link de uso único e exportação ou eliminação dos seus dados (RGPD).",
    },
    tools: {
      title: "Para quem mexe em volume",
      lead: "Menos formulário, mais stock publicado.",
      beta: "beta",
      items: [
        { title: "Publicar em 30 s", text: "Foto, modelo, estado e preço. O resto vem do seu último anúncio.", beta: false },
        { title: "Preencher com IA", text: "A IA sugere os campos a partir das fotos ou de uma frase. Nada é publicado sem a sua confirmação.", beta: true },
        { title: "Pesquisa em linguagem natural", text: "Escreva como fala: a frase vira filtros que pode remover um a um.", beta: true },
        { title: "Importar e editar em tabela", text: "CSV ou XLSX para criar ou atualizar anúncios em lote, e edição em massa de preços, quantidades e escalões.", beta: false },
        { title: "Pedidos «Procuro» com alertas", text: "Diga o que procura e até que preço. Quem tem stock compatível é avisado.", beta: false },
        { title: "Agentes IA e API", text: "Membros verificados podem ligar o ChatGPT, o Claude ou o seu próprio agente por MCP, ou usar chaves API.", beta: false },
      ],
      frame: {
        title: "Publicar em 30 s",
        caption:
          "Recriação ilustrativa do formulário rápido do OficinaOS Trade com dados de exemplo: a partir de uma foto, a IA preencheu cinco campos (peça, ecrã, iPhone 13, original nova, 10 unidades), marcados para confirmação antes de publicar.",
        photo: "Foto 1",
        assist: "Preencher com IA",
        fields: [
          ["Tipo de anúncio", "Peça"],
          ["Peça", "Ecrã"],
          ["Modelo", "iPhone 13"],
          ["Qualidade", "Original nova"],
          ["Quantidade", "10"],
        ],
        aiTag: "IA",
        done: "Preenchi 5 campos, marcados com IA. Confirme antes de publicar.",
        publish: "Publicar",
      },
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        { q: "Quanto custa?", a: "Nada durante o lançamento. Depois haverá um plano grátis para membros verificados e um Pro por subscrição mensal. Não há comissão por negócio." },
        { q: "Onde está disponível?", a: "Em toda a União Europeia: podem candidatar-se empresas de qualquer um dos 27 países da UE. A app está em português, espanhol e inglês." },
        { q: "Trabalho por conta própria. Posso entrar?", a: "Sim. O Trade é para técnicos independentes, oficinas e revendedores. Em Portugal, quem trabalha como empresário em nome individual usa o comprovativo de início de atividade em vez da certidão permanente." },
        { q: "Quem vê os meus preços?", a: "Só membros verificados. Quem está de fora vê que existe stock, mas nunca o preço nem quem vende." },
        { q: "Como é o pagamento?", a: "Direto entre as empresas — a plataforma não move dinheiro. O Trade regista a proposta e o acordo com os dados para a fatura, e as avaliações só contam depois da receção." },
        { q: "Posso vender a particulares?", a: "Não. O Trade é só entre profissionais." },
        { q: "Preciso de usar a OficinaOS?", a: "Não. O Trade é um produto à parte: qualquer empresa se regista diretamente, use ou não a OficinaOS." },
      ],
    },
    cta: {
      title: "Entre na rede",
      lead: "Grátis durante o lançamento para técnicos, oficinas e revendedores verificados em toda a União Europeia.",
      primary: "Candidatar-me — é grátis",
      secondary: "Ver o mercado",
      member: "Já é membro?",
      signin: "Entrar no Trade",
    },
  },
  footer: {
    license: "Licença MIT",
    credits: "Baseado no projeto de código aberto",
    rights: "Software livre para técnicos, oficinas e revendedores.",
    contact: "Contacto",
    community: "Comunidade",
    privacy: "Privacidade",
    terms: "Termos",
    madeBy: "Feito por",
    madeIn: "em Portugal",
    tagline: "Software livre para quem repara, diagnostica e revende tecnologia.",
    columns: { products: "Produtos", resources: "Recursos", community: "Comunidade", project: "Projeto" },
    guide: "Guia completo",
    updates: "Novidades",
    install: "Instalar",
    releases: "Versões e notas de lançamento",
    source: "Código-fonte",
    designedBy: "Desenhado e desenvolvido por",
    externalHint: "abre noutro separador",
  },
};

export type Copy = typeof t;

// Páginas de conteúdo SEO em pt (só existem no locale por omissão): casos de uso e
// comparações, com a mesma estrutura de `t.seoPage`. Não fazem parte de `Copy` —
// en/es não precisam de traduzi-las.
export const seoPages = {
  softwareAssistenciaTecnica: {
    metaTitle: "Software para assistência técnica — grátis e em português",
    metaDesc:
      "Programa de gestão para assistência técnica de telemóveis: fichas de reparação, orçamentos, stock e caixa. Grátis, com os dados no PC da loja.",
    badge: "Software livre · Feito em Portugal",
    title: "Software para assistência técnica de telemóveis",
    subtitle:
      "Fichas de reparação, orçamentos que o cliente aprova no telemóvel, stock e caixa — num programa grátis que corre no PC da loja, mesmo sem internet.",
    ctaTitle: "Pronto para experimentar?",
    ctaText:
      "Descarregue, instale no PC da loja e faça a primeira ficha hoje. Sem conta, sem cartão, sem mensalidades.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    answer: "O OficinaOS é um programa grátis (licença MIT) para gerir uma assistência técnica de telemóveis: fichas de reparação, orçamentos aprovados online, stock, caixa e acompanhamento pelo cliente — corre no PC da loja e funciona sem internet.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "O OficinaOS é mesmo grátis?", a: "Sim. A licença é MIT: o núcleo — reparações, orçamentos, stock, POS e backups — é gratuito para sempre, sem conta obrigatória. O OficinaOS Pro é um plano opcional com todos os módulos incluídos." },
      { q: "Funciona sem internet?", a: "Sim. A aplicação corre num PC dentro da loja e serve os outros dispositivos pela rede local. Se a internet falhar, a loja continua a trabalhar." },
      { q: "Onde ficam os dados dos meus clientes?", a: "No PC da sua loja. Não há telemetria e nada sai da rede local a menos que ative um módulo Pro — o que simplifica a conformidade com o RGPD." },
    ],
    sections: [
      {
        heading: "O que uma assistência técnica precisa todos os dias",
        paragraphs: [
          "Uma assistência técnica vive de ordens de trabalho: cada equipamento que entra precisa de ficha, orçamento, peças reservadas e um estado que o cliente consiga consultar. O OficinaOS cobre esse ciclo completo, da receção ao levantamento.",
        ],
        list: [
          "Ficha de entrada com marca, modelo, IMEI, estado e acessórios, assinada pelo cliente",
          "Orçamentos com peças e mão de obra, aprovados ou recusados na página de acompanhamento",
          "Estados de reparação claros para quem está na bancada, com técnico atribuído",
          "Stock com alertas de reposição e peças descontadas automaticamente",
          "Caixa / POS para vender acessórios e registar MB Way, numerário e cartão",
          "Talão com QR de acompanhamento e garantia; fatura certificada com o módulo Pro",
          "SMS automáticos ao cliente quando a reparação fica pronta (módulo Pro)",
        ],
      },
      {
        heading: "Porque é diferente dos programas habituais",
        paragraphs: [
          "Os programas de assistência técnica mais conhecidos são serviços na cloud, com mensalidade por posto e os dados dos clientes nos servidores do fornecedor. O OficinaOS é software livre (licença MIT) instalado no PC da loja: grátis para sempre, sem telemetria, e os dados dos clientes ficam dentro da loja.",
          "Os módulos Pro opcionais — portal do cliente na cloud, bot de WhatsApp, loja online, preços de mercado, multi-loja — fazem parte do OficinaOS Pro, um plano opcional com tudo incluído. O núcleo diário nunca fica atrás de um pagamento.",
        ],
        links: [
          { label: "Módulos Pro", href: "/pro" },
          { label: "Política de privacidade", href: "/privacy" },
        ],
      },
      {
        heading: "Funciona sem internet",
        paragraphs: [
          "A aplicação corre num PC dentro da loja e serve os outros dispositivos pela rede local — telemóveis, tablets e o PC da receção abrem o endereço no browser sem instalar nada. Se a internet falhar, a loja continua a trabalhar.",
          "No Windows 10/11 o instalador trata de tudo; há também pacote portátil para correr de uma pasta (ou pen USB) e imagem Docker para Linux e macOS.",
        ],
        links: [
          { label: "Guia de instalação passo a passo", href: "/docs" },
          { label: "Novidades e versões", href: "/updates" },
        ],
      },
    ],
  },
  paraTecnicosIndependentes: {
    metaTitle: "Software para técnico de reparação independente — grátis",
    metaDesc:
      "Para quem repara telemóveis sozinho: fichas de clientes, orçamentos e acompanhamento no telemóvel, grátis e sem mensalidade. Corre num PC Windows.",
    badge: "Caso de uso · Técnico independente",
    title: "Reparar sozinho não tem de ser gerir sozinho",
    subtitle:
      "Se trabalha por conta própria — em casa, num espaço partilhado ou numa banca — o OficinaOS dá-lhe fichas, orçamentos e uma página de acompanhamento profissional, grátis.",
    ctaTitle: "Experimente na próxima reparação",
    ctaText:
      "Instale no seu PC e faça a primeira ficha hoje. Sem conta, sem cartão, sem mensalidades.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    answer: "Para um técnico de reparação independente, o OficinaOS dá fichas de clientes, orçamentos e uma página de acompanhamento profissional — grátis, num PC Windows, sem mensalidade.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Funciona num PC normal?", a: "Sim. Corre num PC Windows — o mesmo que provavelmente já tem na bancada. Os clientes não instalam nada: acompanham pelo browser do telemóvel." },
      { q: "Quanto custa para um técnico sozinho?", a: "Zero. A licença é MIT e o uso diário é gratuito. Os módulos Pro opcionais só se acrescentam quando fizerem sentido." },
      { q: "E se eu abrir uma loja com funcionários?", a: "Não precisa de mudar de programa: o mesmo OficinaOS serve vários postos na rede local, com perfis de permissões por pessoa." },
    ],
    sections: [
      {
        heading: "Menos papel, menos telefonemas",
        paragraphs: [
          "Quem trabalha sozinho perde tempo a responder a «já está pronto?» e a procurar fichas em papel ou no WhatsApp. O OficinaOS guarda cada reparação com cliente, equipamento, estado e orçamento — e o cliente acompanha tudo numa página pública, sem lhe ligar.",
        ],
        list: [
          "Ficha completa por reparação: cliente, IMEI, estado e acessórios",
          "Orçamento aprovado pelo cliente na página de acompanhamento, com registo da hora",
          "Página de acompanhamento por reparação — grátis na rede da loja; fora dela, com o módulo Pro",
          "Histórico pesquisável: clientes habituais e reparações anteriores aparecem logo",
          "Talão com QR de acompanhamento e garantia na entrega",
        ],
      },
      {
        heading: "Profissional sem custos fixos",
        paragraphs: [
          "Para um técnico independente, uma mensalidade de 20–60 € é uma fatia real da receita. O OficinaOS é grátis (licença MIT): tem as mesmas funcionalidades do dia a dia que os programas pagos, sem conta obrigatória nem telemetria.",
          "Corre num PC Windows — o mesmo que provavelmente já tem na bancada — e os clientes não instalam nada: acompanham pelo browser do telemóvel.",
        ],
      },
      {
        heading: "Cresce quando crescer",
        paragraphs: [
          "Se amanhã abrir loja ou contratar alguém, não precisa de mudar de programa: o mesmo OficinaOS serve vários postos na rede local, com perfis de permissões para cada pessoa. E os módulos Pro opcionais — bot de WhatsApp, loja online, faturação certificada — acrescentam-se quando fizerem sentido.",
        ],
        links: [
          { label: "Módulos Pro", href: "/pro" },
          { label: "Documentação", href: "/docs" },
        ],
      },
    ],
  },
  deixarExcelPapel: {
    metaTitle: "Sair do Excel e do papel na sua oficina — como e porquê",
    metaDesc:
      "Comparado com papel e Excel, um programa de gestão dá à oficina fichas pesquisáveis, orçamentos aprovados online e menos telefonemas. O OficinaOS é grátis.",
    badge: "Comparação · Papel/Excel vs programa",
    title: "Do papel e do Excel para um programa de gestão",
    subtitle:
      "O papel não avisa o cliente, o Excel não guarda quem aprovou o orçamento, e ambos custam horas. Veja o que muda na prática — e quanto custa mudar (nada).",
    ctaTitle: "Mude numa tarde",
    ctaText:
      "Instale o OficinaOS no PC da loja e faça a primeira ficha hoje. Sem conta, sem cartão, sem mensalidades.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    answer: "Migrar do papel e do Excel para o OficinaOS custa uma tarde: instala-se no PC da loja e as fichas novas passam a entrar no programa. O cliente passa a ver o estado da reparação sozinho e o orçamento fica aprovado com registo.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Tenho de importar os registos antigos?", a: "Não. Não há importação obrigatória — as fichas novas entram no programa e os registos antigos podem ficar no papel." },
      { q: "Os outros dispositivos da loja precisam de instalar alguma coisa?", a: "Não. Telemóveis, tablets e o PC da receção abrem o programa no browser pela rede local." },
      { q: "O que ganho no dia a dia?", a: "Fichas pesquisáveis por cliente, IMEI ou data; orçamentos aprovados online com registo da hora; e menos chamadas «já está pronto?»." },
    ],
    sections: [
      {
        heading: "O que o papel e o Excel não fazem",
        paragraphs: [
          "Papel e Excel «funcionam» porque não custam dinheiro — mas cobram em tempo e em erros. Estes são os pontos onde uma oficina perde mais:",
        ],
        list: [
          "O cliente liga para perguntar o estado; cada chamada interrompe uma reparação",
          "O orçamento fica aprovado «por telefone» — sem registo de quando e por quem",
          "Fichas pesquisáveis por memória ou por pasta, não por cliente, IMEI ou data",
          "O stock desce quando a peça é usada — mas ninguém o regista, e a reposição falha",
          "Não há histórico fiável de margens, receitas ou tempo médio de reparação",
        ],
      },
      {
        heading: "Lado a lado",
        paragraphs: [],
        table: {
          head: ["", "Papel / Excel", "OficinaOS"],
          rows: [
            ["Estado da reparação", "O cliente telefona", "Página pública que o cliente consulta sozinho"],
            ["Aprovação do orçamento", "Verbal, sem registo", "Online, com data e hora registadas"],
            ["Pesquisar uma ficha", "Folhear pastas", "Por cliente, equipamento, IMEI ou data"],
            ["Stock de peças", "Recontar à mão", "Descontado na reparação, com alertas de reposição"],
            ["Caixa do dia", "Contar ao fim do dia", "Registado no POS, por método de pagamento"],
            ["Custo", "«Grátis», caro em tempo", "Grátis (MIT)"],
          ],
        },
      },
      {
        heading: "A migração em prática",
        paragraphs: [
          "Não há importação obrigatória nem formação: instala-se no PC da loja em minutos e as fichas novas passam a entrar no programa. Os registos antigos podem ficar no papel — o que interessa é que as reparações de amanhã já nasçam organizadas.",
          "Os outros dispositivos da loja (telemóveis, tablets, o PC da receção) abrem o programa no browser pela rede local, sem instalar nada — e funciona mesmo sem internet.",
        ],
        links: [
          { label: "Guia de instalação passo a passo", href: "/docs" },
          { label: "Software para assistência técnica", href: "/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  softwarePagoVsOficinaOS: {
    metaTitle: "Programa com mensalidade ou OficinaOS grátis — comparação",
    metaDesc:
      "Software de gestão para oficinas: 20–60 €/mês na cloud vs OficinaOS grátis no seu PC. Compare custo, dados dos clientes e funcionamento sem internet.",
    badge: "Comparação · Mensalidade vs grátis",
    title: "Programa com mensalidade ou OficinaOS grátis?",
    subtitle:
      "A maioria dos programas para oficinas cobra por posto todos os meses. O OficinaOS é software livre instalado no seu PC. Compare as diferenças que contam.",
    ctaTitle: "Compare com o que paga hoje",
    ctaText:
      "Descarregue e teste ao lado do programa atual. Sem conta, sem cartão, sem mensalidades.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    answer: "Um programa SaaS típico cobra 20–60 € por mês por posto e guarda os dados na cloud do fornecedor. O OficinaOS é grátis (MIT), corre no PC da loja e os dados dos clientes ficam lá — os módulos Pro são opcionais.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Qual é a diferença de custo real?", a: "Os programas SaaS para oficinas custam tipicamente 20–60 €/mês por posto, e as funcionalidades de cliente ficam em planos mais caros. O núcleo do OficinaOS custa 0 €." },
      { q: "Os meus dados saem da loja?", a: "Não. A base de dados fica no PC da loja — sem telemetria e sem subcontratantes, a menos que ative um módulo Pro." },
      { q: "E se a internet falhar?", a: "A loja continua a trabalhar: a aplicação corre localmente e serve os dispositivos pela rede interna." },
    ],
    sections: [
      {
        heading: "O modelo de custo",
        paragraphs: [
          "Os programas habituais para assistência técnica são SaaS: mensalidade por posto ou por técnico, tipicamente 20–60 €/mês, e as funcionalidades de cliente — portal, notificações — entram em planos mais caros. Ao fim de um ano são centenas de euros, todos os anos.",
          "O OficinaOS é licença MIT: a aplicação completa — reparações, orçamentos, stock, POS, backups — é gratuita para sempre, para um posto ou dez. Os módulos Pro (portal na cloud, bot de WhatsApp, loja online, multi-loja) fazem parte do OficinaOS Pro, um plano opcional com tudo incluído, para quem precisar deles.",
        ],
      },
      {
        heading: "Onde ficam os dados dos seus clientes",
        paragraphs: [
          "Num SaaS, os dados dos seus clientes vivem nos servidores do fornecedor — com subcontratantes e, muitas vezes, transferências fora da UE a declarar no RGPD. No OficinaOS, a base de dados está no PC da sua loja: não há telemetria e nada sai da rede local a menos que ative um módulo Pro.",
          "Para a maioria das lojas isto simplifica a conformidade: menos subcontratantes, menos transferências, e a loja continua a funcionar se a internet falhar.",
        ],
        links: [{ label: "Política de privacidade", href: "/privacy" }],
      },
      {
        heading: "Lado a lado",
        paragraphs: [],
        table: {
          head: ["", "Programa SaaS típico", "OficinaOS"],
          rows: [
            ["Custo", "20–60 €/mês por posto", "Grátis (MIT); módulos Pro opcionais"],
            ["Dados dos clientes", "Na cloud do fornecedor", "No PC da sua loja"],
            ["Funciona sem internet", "Normalmente não", "Sim — serve a loja pela rede local"],
            ["Acompanhar a reparação", "Às vezes, em planos caros", "Página pública incluída, grátis"],
            ["Em português", "Raramente", "Interface e documentação em PT-PT"],
            ["Fidelização", "Mensalidade contínua", "Código aberto — o programa é seu"],
          ],
        },
      },
      {
        heading: "Quando o Pro faz sentido",
        paragraphs: [
          "Os módulos Pro acrescentam o que precisa mesmo de sair da loja: portal do cliente na cloud, bot de WhatsApp, faturação certificada InvoiceXpress (só Portugal), loja online, preços de mercado, multi-loja e remarketing. Estão todos incluídos no OficinaOS Pro, um plano opcional com 14 dias grátis.",
        ],
        links: [
          { label: "Módulos Pro", href: "/pro" },
          { label: "Documentação", href: "/docs" },
        ],
      },
    ],
  },
  softwareDeGestaoOficina: {
    metaTitle: "Software de gestão para oficina — grátis e em português",
    metaDesc:
      "O OficinaOS é um programa de gestão de oficina grátis (MIT): fichas de reparação, clientes, orçamentos e acompanhamento na rede da loja, em PT-PT.",
    badge: "Guia · Gestão de oficina",
    title: "Um programa de gestão que não cobra por existir",
    subtitle:
      "O OficinaOS é o software de gestão da sua oficina de reparação: cada reparação com cliente, equipamento, estado e orçamento — grátis, offline-first e em português.",
    ctaTitle: "Instale ainda hoje",
    ctaText:
      "Descarregue o instalador Windows ou corra `docker compose up` no Linux. Primeira ficha em minutos.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver o guia de instalação",
    answer: "O OficinaOS é um software de gestão de oficina de reparação gratuito (licença MIT): cada reparação tem cliente, equipamento, estado e orçamento, com acompanhamento no telemóvel do cliente — offline-first e em português.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "O que substitui no dia a dia?", a: "O caderno e o Excel: fichas pesquisáveis com fotos, IMEI, estado, orçamento e histórico do cliente, mais talão com QR e garantia." },
      { q: "Serve para vários postos?", a: "Sim — vários postos na mesma rede local, com perfis de permissões por pessoa." },
      { q: "É mesmo gratuito?", a: "Sim, licença MIT e código aberto, sem conta obrigatória nem telemetria. Os dados ficam no PC da loja." },
    ],
    sections: [
      {
        heading: "O que o programa faz por si",
        paragraphs: [
          "Uma oficina vive de fichas: quem entregou o quê, quando, por quanto. O OficinaOS substitui o caderno e o Excel por fichas pesquisáveis com fotos, IMEI, estado, orçamento e histórico do cliente.",
        ],
        list: [
          "Ficha por reparação com cliente, equipamento e estado",
          "Orçamento com aprovação do cliente registada",
          "Talão com QR de acompanhamento e garantia",
          "Vários postos na mesma rede local, com perfis de permissões",
          "Acompanhamento da reparação no telemóvel do cliente — grátis na rede da loja",
        ],
      },
      {
        heading: "Grátis de verdade, sem asteriscos",
        paragraphs: [
          "Licença MIT, código aberto, sem conta obrigatória nem telemetria. Os dados ficam no PC da sua loja — não na cloud de um fornecedor que pode subir o preço amanhã.",
          "Os módulos Pro opcionais (faturação certificada, bot de WhatsApp, loja online) acrescentam-se quando fizerem sentido — nunca para desbloquear o básico.",
        ],
        links: [
          { label: "Software pago vs OficinaOS", href: "/software-pago-vs-oficinaos" },
          { label: "Deixar o Excel e o papel", href: "/deixar-excel-papel" },
          { label: "Documentação", href: "/docs" },
        ],
      },
    ],
  },
  rastrearReparacaoCliente: {
    metaTitle: "Cliente acompanha a reparação online — menos telefonemas",
    metaDesc:
      "Página de acompanhamento por reparação: o cliente vê o estado no telemóvel sem ligar à loja. Grátis na rede local com o OficinaOS.",
    badge: "Caso de uso · Acompanhamento",
    title: "«Já está pronto?» deixa de ser o seu telefone a tocar",
    subtitle:
      "Cada reparação ganha uma página de acompanhamento com estado em tempo real. O cliente segue pelo QR do talão ou pelo link — na rede da loja é grátis; fora dela, com o módulo Pro.",
    ctaTitle: "Menos chamadas desde a primeira ficha",
    ctaText: "Grátis, sem conta, sem cartão.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Como funciona o portal",
    ctaSecondaryHref: "/docs/portal",
    answer: "Cada reparação ganha uma página de acompanhamento com estado em tempo real: o cliente segue pelo QR do talão ou pelo link, sem ligar à loja. Grátis na rede da loja; fora dela, com o módulo Pro.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "O cliente precisa de instalar alguma app?", a: "Não. Abre a página de acompanhamento no browser do telemóvel e vê o estado — recebida, em diagnóstico, em reparação, pronta." },
      { q: "A aprovação do orçamento fica registada?", a: "Sim. O cliente aprova na própria página e a ficha guarda a hora e o valor aprovado." },
      { q: "Funciona fora da rede da loja?", a: "Na rede local é grátis; acesso de fora exige o módulo Pro (portal do cliente na cloud)." },
    ],
    sections: [
      {
        heading: "Como funciona",
        paragraphs: [
          "Ao criar a ficha, o programa gera um link e um QR de acompanhamento. O cliente abre a página no telemóvel e vê o estado da reparação — recebida, em diagnóstico, em reparação, pronta — sem instalar nada.",
        ],
        list: [
          "QR no talão entregue na receção",
          "Estado atualizado em tempo real por si na ficha",
          "Aprovação de orçamento na própria página, com registo da hora",
          "Na rede da loja é grátis; acesso de fora exige o módulo Pro",
        ],
        links: [{ label: "Guia do portal do cliente", href: "/docs" }],
      },
      {
        heading: "O efeito na loja",
        paragraphs: [
          "Cada chamada «já está?» custa 2-3 minutos de bancada. Numa loja com 20 reparações abertas, são horas por semana. A página de acompanhamento responde antes de o cliente ligar.",
        ],
        table: {
          head: ["", "Sem acompanhamento", "Com OficinaOS"],
          rows: [
            ["Cliente sabe o estado", "Liga à loja", "Vê no telemóvel"],
            ["Aprovação de orçamento", "Chamada ou mensagem", "Botão na página, com registo"],
            ["Confiança", "«Estou a tratar»", "Estado real visível"],
          ],
        },
      },
    ],
  },
  orcamentosAprovadosOnline: {
    metaTitle: "Orçamentos aprovados online — com registo e hora",
    metaDesc:
      "Orçamentos de reparação aprovados pelo cliente na página de acompanhamento, com registo da hora e do valor. Sem chamadas nem prints de WhatsApp.",
    badge: "Caso de uso · Orçamentos",
    title: "Orçamento aprovado é orçamento registado",
    subtitle:
      "Em vez de «aprova por telefone e esquece», o cliente aprova o orçamento na página de acompanhamento — e a aprovação fica registada com hora e valor na ficha.",
    ctaTitle: "Teste no próximo orçamento",
    ctaText: "Grátis e sem mensalidade.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Ver documentação",
    answer: "Com o OficinaOS, o cliente aprova o orçamento na página de acompanhamento — e a aprovação fica registada na ficha com hora e valor, em vez de uma conversa por telefone sem registo.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "O que acontece se o preço mudar a meio da reparação?", a: "O orçamento atualizado volta à página e o cliente aprova de novo — a nova aprovação fica registada com hora e valor." },
      { q: "Há registo para disputas?", a: "Sim. O talão com QR e a garantia referenciam a mesma ficha onde o orçamento foi aprovado." },
      { q: "Preciso de internet na loja?", a: "A rede local basta; a aprovação de fora da loja exige o módulo Pro." },
    ],
    sections: [
      {
        heading: "Porque «aprovado por telefone» não chega",
        paragraphs: [
          "Quando o preço muda — peça mais cara, problema maior — a aprovação verbal desaparece. Com o OficinaOS, o cliente vê o orçamento na página e carrega em aprovar: a ficha guarda a hora e o valor aprovado.",
        ],
        list: [
          "Valor e descrição visíveis na página de acompanhamento",
          "Aprovação com registo de hora na ficha",
          "Histórico por cliente e por reparação",
          "Funciona na rede da loja; de fora, com o módulo Pro",
        ],
      },
      {
        heading: "Menos disputas na entrega",
        paragraphs: [
          "O talão com QR e a garantia entregue no fim referencia a mesma ficha onde o orçamento foi aprovado. Se houver dúvida, ambos têm o mesmo registo.",
        ],
        links: [
          { label: "Cliente acompanha a reparação", href: "/rastrear-reparacao-cliente" },
          { label: "Software de assistência técnica", href: "/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  alternativasSoftwareOficina: {
    metaTitle: "Alternativas a software caro para oficina de reparação",
    metaDesc:
      "RepairDesk, Fixably e outros programas cobram 20–150 €/mês. O OficinaOS dá o essencial grátis: fichas, orçamentos e acompanhamento — compare.",
    badge: "Comparação · Alternativas",
    title: "Antes de pagar uma mensalidade, compare",
    subtitle:
      "Os programas para oficinas de reparação cobram por posto e por mês. O OficinaOS cobra zero pelo essencial — e o código é aberto.",
    ctaTitle: "Compare com o que tem hoje",
    ctaText: "Descarregue e teste com as suas próprias reparações — grátis.",
    ctaPrimary: "Descarregar grátis",
    ctaSecondary: "Módulos Pro",
    ctaSecondaryHref: "/pro",
    answer: "Ferramentas como RepairDesk ou Fixably partem de ~20–60 €/mês por posto. O OficinaOS cobre o essencial — fichas, orçamentos e acompanhamento — gratuitamente, com código aberto e dados no PC da loja.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "O OficinaOS faz o mesmo que o RepairDesk?", a: "No essencial sim: fichas, orçamentos, stock, POS e acompanhamento do cliente. Faturação certificada, loja online e bot de WhatsApp são módulos Pro opcionais." },
      { q: "E o código?", a: "É aberto (MIT) — pode ver, adaptar e não fica preso a uma subscrição." },
      { q: "Quando compensa um SaaS?", a: "Se gerir várias lojas ou precisar de um ERP com suporte dedicado. Para a maioria das oficinas, o essencial grátis chega." },
    ],
    sections: [
      {
        heading: "O que custa o mercado",
        paragraphs: [
          "RepairDesk, Fixably e afins partem de ~20–60 €/mês por posto; funcionalidades como SMS e portais ficam em planos mais caros. Para uma loja pequena, são 240–720 € por ano antes de faturar um euro.",
        ],
        table: {
          head: ["", "SaaS típico", "OficinaOS"],
          rows: [
            ["Preço do núcleo", "20–60 €/mês por posto", "0 € (MIT)"],
            ["Onde ficam os dados", "Cloud do fornecedor", "PC da sua loja"],
            ["Funciona sem internet", "Normalmente não", "Sim"],
            ["Portal do cliente", "Plano pago", "Grátis na rede; fora com Pro"],
            ["Em português", "Raramente", "PT-PT nativo"],
          ],
        },
      },
      {
        heading: "Quando o pago faz sentido",
        paragraphs: [
          "Se precisa de faturação certificada, loja online, bot de WhatsApp ou portal do cliente acessível de fora da loja, os módulos Pro cobrem isso — opcionais, sem obrigar a trocar o núcleo grátis.",
          "Se gerir várias lojas ou precisar de um ERP completo, um SaaS com suporte dedicado pode compensar. Para a maioria das oficinas portuguesas, o essencial grátis chega.",
        ],
        links: [
          { label: "Software pago vs OficinaOS", href: "/software-pago-vs-oficinaos" },
          { label: "Módulos Pro", href: "/pro" },
        ],
      },
    ],
  },
};

export type SeoPageCopy = Copy["seoPage"];
