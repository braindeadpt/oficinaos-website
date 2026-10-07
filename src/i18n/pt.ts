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
} from "./utils";

export type DocsSection = {
  heading: string;
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
    title: "OficinaOS — Programa gratuito para lojas de reparação de telemóveis",
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
  },
  hero: {
    badge: "Grátis para sempre · Os dados ficam na sua loja",
    title: "Menos telefonemas de «já está pronto?».",
    titleAccent: "A sua loja de reparações, organizada.",
    subtitle:
      "Receção, orçamentos, stock e caixa num só programa, instalado no PC da loja. Os clientes podem acompanhar a reparação no telemóvel e a equipa sabe sempre o que há para fazer.",
    ctaPrimary: "Descarregar para Windows",
    ctaSecondary: "Ver como funciona",
    downloadNote: "Grátis · Windows 10/11 · instalação guiada",
    chips: ["Sem mensalidades", "Funciona sem internet", "No PC, tablet e telemóvel"],
    techNote: "Para técnicos: código aberto (licença MIT), Linux/macOS com Docker —",
    techLink: "ver instalação avançada",
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
        desc: "Cópias de segurança da base de dados no próprio PC — os dados são seus.",
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
    badge: "Beta — grátis para lojas piloto",
    title: "Módulos Pro",
    subtitle:
      "Funcionalidades opcionais que precisam de «chegar à internet», através da OficinaOS Cloud. Já estão disponíveis em beta e, durante o beta, as lojas piloto usam-nas gratuitamente. O núcleo continua gratuito e MIT — para sempre.",
    statusLabel: "Beta",
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
    ],
    signup: {
      title: "Quero entrar no beta Pro",
      subtitle:
        "Deixe o contacto da loja e falamos consigo para ativar os módulos. Sem compromisso.",
      email: "Email",
      emailPlaceholder: "voce@sualoja.pt",
      shop: "Nome da loja",
      shopPlaceholder: "ex.: Repara Já",
      city: "Cidade",
      cityPlaceholder: "ex.: Braga",
      phone: "Telefone",
      phonePlaceholder: "ex.: 912 345 678",
      optional: "opcional",
      languageLabel: "Idioma",
      button: "Pedir acesso ao beta",
      mailSubject: "Beta OficinaOS Pro — pedido de acesso",
      note: "Usamos estes dados só para o contactar sobre o beta Pro.",
      noteMailto:
        "Ao enviar, abre-se o seu programa de email com os dados preenchidos — basta carregar em Enviar.",
      cloudText: "Já tem conta na OficinaOS Cloud?",
      cloudLink: "Entrar em cloud.oficinaos.app",
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
      "A app corre num PC dentro da loja e não tem telemetria: por defeito, nenhum dado dos seus clientes sai da loja. Só os módulos opcionais — incluindo a OficinaOS Cloud (Pro) — enviam dados para fora, e cada um está declarado abaixo.",
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
        what: "Conta e emparelhamento; dados de cada módulo ativo — páginas do portal (com nome do cliente), mensagens WhatsApp recebidas, reservas da montra, diagnósticos enviados, totais diários (multi-loja) e preços partilhados",
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
        name: "Notificações WhatsApp",
        to: "Meta",
        what: "Nº de telefone do cliente + estado da reparação",
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
      "Instalação, dia a dia, backups e resolução de problemas — explicado passo a passo, sem precisar de perceber de tecnologia.",
    toc: "Neste guia",
    backToGuide: "Guia completo",
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
            ["Notificações", "Alertas na app, modelos de mensagem editáveis e fila de envio WhatsApp/SMS"],
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
            src: "/screenshots/dashboard.png",
            alt: "Painel de reparações do OficinaOS",
            caption: "O painel — as reparações do dia de relance",
          },
          {
            src: "/screenshots/job-detail.png",
            alt: "Ficha de reparação com estados, orçamento e timeline",
            caption: "A ficha — estados, orçamento e cronologia completa",
          },
          {
            src: "/screenshots/tracking.png",
            alt: "Página de acompanhamento que o cliente vê no telemóvel",
            caption: "A página de tracking que o cliente abre no telemóvel",
          },
        ],
        links: [],
      },
      {
        heading: "Duas formas de instalar",
        paragraphs: [
          "O OficinaOS é sempre o mesmo programa — a diferença está em como é arrancado no PC da loja. O instalador escolhe o caminho certo sozinho, mas convém perceber os dois:",
          "Docker é a forma normal e recomendada: um programa gratuito que embala a app e a base de dados em «contentores» isolados. Precisa de uma funcionalidade do processador chamada virtualização — a maioria dos PCs a tem, mas alguns trazem-na desligada na BIOS ou não a suportam.",
          "O modo portátil existe para esses PCs: traz tudo embutido num pacote único (a app, a base de dados PostgreSQL e o runtime), sem Docker, sem virtualização e sem serviços Windows.",
        ],
        table: {
          head: ["", "Docker (recomendado)", "Portátil (fallback)"],
          rows: [
            ["Quando usar", "Sempre que possível", "PCs sem virtualização (VT-x/SVM)"],
            ["Requisitos", "Docker Desktop + virtualização na BIOS", "Qualquer Windows 10/11 64-bit"],
            ["Download", "~1 GB (Docker + app)", "~540 MB (tudo embutido)"],
            ["Arranque com o PC", "Automático", "Automático (opcional, perguntado na 1ª execução)"],
            ["Se a app crashar", "Reinicia sozinha", "Reinicia sozinha (wrapper)"],
            ["Backups", "Diários, automáticos (a cada 24h)", "A cada arranque + BACKUP.bat manual"],
            ["Backups fora do PC", "Suportado (rclone → S3/B2/GCS)", "Manual — copiar a pasta de backups"],
            ["Atualizações", "Só descarrega o que mudou; automático opcional", "Descarrega o pacote inteiro; sempre manual"],
            ["Acesso remoto (HTTPS)", "Cloudflare Tunnel incluído", "Cloudflare Tunnel instalado à parte"],
          ],
        },
        links: [
          { label: "Guia de instalação", href: INSTALL_URL },
          { label: "Documentação do modo portátil", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Instalação normal — Docker (uma vez, ~10 minutos)",
        paragraphs: [
          "Descarregue o instalador ZIP, extraia para uma pasta (ex.: C:\\OficinaOS) e faça duplo clique em INSTALAR.bat. Se o Windows Defender SmartScreen avisar: «Mais informações» → «Executar mesmo assim».",
          "O instalador faz tudo sozinho: verifica se o PC consegue correr Docker, instala o Docker Desktop se faltar, gera as palavras-passe e segredos, descarrega a app e arranca. Se pedir para reiniciar, reinicie e corra INSTALAR.bat outra vez.",
          "No fim o browser abre em http://localhost:4000. Primeiro login: utilizador admin, palavra-passe braindead — a app obriga a mudar ambos.",
          "Em Linux ou Mac não há instalador automático — usa-se Docker manualmente:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Guia de instalação completo", href: INSTALL_URL },
          { label: "Descarregar instalador (oficinaos-install.zip)", href: INSTALL_ZIP_URL },
        ],
      },
      {
        heading: "Erro «virtualization support not detected»",
        paragraphs: [
          "Se o PC não consegue correr Docker, o instalador deteta isso antes de tentar e apresenta duas opções:",
        ],
        list: [
          "Ativar na BIOS — reiniciar, premir F2/F10/DEL/ESC no arranque, procurar «Intel VT-x», «Virtualization Technology» ou «SVM Mode», ativar e gravar (F10). Depois o caminho Docker normal funciona.",
          "Instalação portátil — o instalador descarrega oficinaos-portable.zip (~540 MB) e arranca sem Docker: a mesma app, a mesma base de dados, as mesmas funcionalidades.",
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
          "Modo Docker: na pasta onde extraiu o instalador.",
          "Modo portátil: dentro da pasta oficinaos-portable — os dados vivem em data\\, os backups em app\\uploads\\backups.",
          "Outros dispositivos da loja (tablet, telemóvel, outro PC) não instalam nada — abrem http://<IP-do-PC>:4000 no browser.",
        ],
        links: [],
      },
      {
        heading: "Backups e restauro",
        paragraphs: [
          "Os backups são ficheiros comprimidos (.sql.gz) com a base de dados inteira. A app mostra o estado do último backup em Definições → Loja → Backups — funciona igual nos dois modos.",
          "No modo Docker um serviço dedicado faz um backup a cada 24 horas, guarda 14 dias, e opcionalmente copia para armazenamento externo (S3, Backblaze, etc.) e testa o restauro automaticamente.",
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
          "A app avisa no topo quando existe versão nova. Para atualizar, basta duplo clique em ATUALIZAR.bat — faz backup, descarrega a versão nova e reinicia. As migrações da base de dados correm sozinhas.",
          "Diferença prática: no Docker só se descarrega o que mudou; no portátil descarrega-se o pacote inteiro (~540 MB). No modo Docker pode ainda ativar atualizações 100% automáticas (Watchtower).",
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
          "A loja cria uma conta na Cloud e emparelha a app com um código (uma vez). Cada módulo é ativado do lado do servidor — sem ficheiros de licença. A app sincroniza com a Cloud a cada ~2 minutos para enviar e receber.",
          "Sem emparelhamento, tudo continua a funcionar na rede local — os módulos Pro simplesmente não aparecem.",
        ],
        table: {
          head: ["Módulo", "O que o cliente da loja ganha"],
          rows: [
            ["Portal do cliente", "Link público com o estado da reparação e botões para aceitar/recusar orçamento — sem ligar à loja"],
            ["Bot de WhatsApp", "Escreve para o WhatsApp da loja e recebe o estado da reparação automaticamente; aprova orçamentos com SIM/NÃO"],
            ["Canal SMS", "O mesmo assistente por SMS — um telemóvel Android com SIM na loja envia e recebe, sem Meta nem custos por mensagem"],
            ["Diagnóstico à distância", "Faz o diagnóstico do telemóvel em casa (oficinaos-diag, grátis) e envia à loja com um código"],
            ["Relatórios IA", "Relatório do diagnóstico escrito em linguagem simples, pronto a entregar"],
            ["Faturação certificada", "Fatura ou fatura-recibo legal emitida diretamente da reparação ou venda — via InvoiceXpress, com a conta da própria loja — só Portugal"],
            ["Montra online", "Página pública com artigos do catálogo da loja; o cliente reserva e a reserva entra na fila de Pedidos"],
            ["Procuro-peça", "Quadro entre lojas OficinaOS para pedir peças e responder «tenho» — o negócio acerta-se entre lojas"],
            ["Preços de mercado", "Mediana anónima dos preços de reparações e peças de outras lojas, para comparar com os seus"],
            ["Multi-loja", "Receita e reparações de todas as lojas do mesmo dono num só painel na OficinaOS Cloud"],
            ["Remarketing WhatsApp", "Mensagem automática a clientes com consentimento cuja última reparação já foi há algum tempo"],
          ],
        },
        links: [],
      },
      {
        heading: "Preços",
        paragraphs: [
          "A app completa é gratuita e open source (MIT) — sem limites, sem contas, sem período de teste. Para sempre.",
          "Os módulos Pro estão em beta: durante este período, as lojas piloto usam-nos gratuitamente enquanto medimos o valor real que trazem ao balcão. Quando os preços forem anunciados serão subscrições mensais simples — sem fidelização e sem custos escondidos.",
          "* Nota WhatsApp: responder a clientes dentro da janela de 24h é grátis. Para notificações proativas («está pronta») fora dessa janela, a Meta cobra pequenos valores por mensagem modelo — custo da Meta, não nosso.",
        ],
        table: {
          head: ["O quê", "Estado", "Preço"],
          rows: [
            ["App completa (core)", "Grátis para sempre", "0 €"],
            ["OficinaOS Diag (ferramenta)", "Grátis para sempre", "0 €"],
            ["Portal do cliente", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Bot de WhatsApp", "Disponível (beta)", "A anunciar — grátis no beta*"],
            ["Canal SMS", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Receção de diagnósticos", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Relatórios IA", "Disponível (beta)", "A anunciar — por relatório"],
            ["Faturação (InvoiceXpress)", "Disponível (beta)", "A anunciar — grátis no beta. A conta InvoiceXpress é da loja e tem o custo próprio do serviço deles"],
            ["Montra online (+ personalização)", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Procuro-peça", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Preços de mercado", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Multi-loja", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Remarketing WhatsApp", "Disponível (beta)", "A anunciar — grátis no beta. As mensagens modelo têm o custo da Meta*"],
          ],
        },
        links: [],
      },
      {
        heading: "Portal do cliente (Pro)",
        paragraphs: [
          "Com o módulo ativo, cada reparação ganha um botão «Public link» na página de detalhe. Ao clicar, a app publica na Cloud um snapshot redigido do trabalho — estado, dispositivo, orçamento, prazo e timeline — e copia o link.",
          "O link é segredo por trabalho (um código aleatório de 16 caracteres): quem o tem vê a página. Envia-se ao cliente por SMS, WhatsApp ou impresso no registo. A página atualiza sozinha quando o estado muda na app.",
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
          "Notas honestas: a resposta pode demorar até ~2 minutos (ciclo de sincronização); o setup usa a WhatsApp Business Platform oficial da Meta e é assistido por nós na primeira loja.",
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
        paragraphs: [
          "O mesmo assistente automático, mas por SMS — para lojas que não querem (ou ainda não têm) a conta empresarial da Meta. Um telemóvel Android com SIM fica na loja a fazer de ponte: a app envia e recebe SMS através dele, pela rede móvel normal.",
          "Sem contas Meta, sem aprovações de modelos e sem custo por mensagem — só o tarifário do SIM da loja (cartões com SMS incluídos tornam o custo marginal zero). O setup são ~5 minutos e está explicado passo a passo no guia.",
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
          "Mais cinco módulos Pro, todos em beta e ativados na conta OficinaOS Cloud. Cada um tem um guia curto:",
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
            ["Quanto custa?", "A app completa é gratuita (licença MIT). Os módulos Pro são subscrições opcionais em beta."],
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
            "O link é um segredo por reparação (um código aleatório de 16 caracteres): quem o tem, vê a página — por isso envia-se apenas ao cliente dessa reparação. Remover o link na ficha apaga a página pública.",
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
            "Uma app Meta (developers.facebook.com) com o produto WhatsApp — a nossa app OficinaOS já existe e está publicada",
            "O número da loja no WhatsApp Business — a coexistence permite manter a app no telemóvel e ligar a API ao mesmo tempo",
            "Um token permanente de system user com as permissões whatsapp_business_messaging + whatsapp_business_management",
            "O webhook apontado à OficinaOS Cloud — já configurado do nosso lado",
          ],
          links: [],
        },
        {
          heading: "Configuração na app (por loja)",
          paragraphs: [
            "Depois do onboarding Meta (assistido por nós na primeira loja), a configuração na app são 4 campos:",
          ],
          list: [
            "Menu → Notificações → Setup → secção WhatsApp",
            "Business ID + Phone Number ID — fornecidos no onboarding",
            "API Token — o token permanente do system user (a app guarda-o encriptado)",
            "Enabled ligado — a app regista o phone_number_id na Cloud sozinha e o bot fica ativo",
          ],
          links: [],
        },
        {
          heading: "Limites honestos",
          list: [
            "Respostas podem demorar até ~2 minutos (ciclo de sincronização) — não é instantâneo",
            "Responder a quem escreve é grátis; iniciar conversas («a sua reparação está pronta») precisa de modelos aprovados na Meta e tem custo por mensagem",
            "Flood control: máximo 20 mensagens/hora por número — protege contra spam",
            "Áudios e imagens não são interpretados — vão para humano",
            "Em modo teste, só os números verificados na Meta recebem respostas — em produção não há esse limite",
          ],
          paragraphs: [],
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
          heading: "Instalar — Microsoft Store",
          paragraphs: [
            "A forma mais simples: instale pela Microsoft Store — um clique, sem aviso SmartScreen e com atualizações automáticas. Grátis.",
            "Alternativa portátil: descarrega o zip, extrai a pasta inteira (o exe precisa dos ficheiros ao lado) e corre OficinaDiag.exe — o Windows pode mostrar o aviso SmartScreen na primeira execução: «Mais informações» → «Executar mesmo assim».",
          ],
          links: [
            { label: "Microsoft Store", href: DIAG_STORE_URL },
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
        "Notificações e assistente automático por SMS, através de um telemóvel Android com SIM na loja — sem Meta, sem custo por mensagem.",
      sections: [
        {
          heading: "O que o módulo faz",
          paragraphs: [
            "Com o canal SMS ativo, a app usa um telemóvel Android na loja como «gateway»: as notificações aos clientes (reparação pronta, orçamento enviado, lembretes) saem por SMS pela rede móvel normal — e as respostas dos clientes entram na app e recebem resposta automática.",
            "É o mesmo assistente do WhatsApp, com os mesmos comandos — o cliente escreve «estado» e recebe o ponto da reparação, escreve «orçamento» e recebe o valor, responde SIM ou NÃO para aprovar ou recusar. A diferença: não precisa de conta Meta, de modelos aprovados, nem de internet no telemóvel do cliente.",
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
          heading: "O que é preciso",
          list: [
            "Um telemóvel Android — pode ser um equipamento antigo; fica sempre na loja",
            "Um cartão SIM ativo — idealmente com SMS incluídos no tarifário (o custo das mensagens é da operadora)",
            "A app gratuita «SMS Gateway for Android» (sms-gate.app), da Play Store ou do site oficial",
            "O telemóvel e o PC do OficinaOS na mesma rede Wi-Fi/LAN",
            "O módulo sms ativo na conta OficinaOS Cloud (no beta, ativamos nós)",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Instalação — passo a passo (~5 minutos)",
          paragraphs: [
            "1. No telemóvel Android, instale «SMS Gateway for Android» (sms-gate.app) a partir da Play Store ou do site oficial.",
            "2. Abra a app e ative o modo «Local Server» (Servidor Local). A app mostra três coisas: o endereço local (ex.: 192.168.1.50:8080), um nome de utilizador e uma palavra-passe.",
            "3. Confirme que o telemóvel está ligado à mesma rede Wi-Fi do PC onde corre o OficinaOS.",
            "4. No PC, na app OficinaOS: Menu → Notificações → Canais → secção SMS.",
            "5. No campo «URL do gateway», escreva http:// seguido do endereço que a app do telemóvel mostra — por exemplo http://192.168.1.50:8080.",
            "6. Preencha o utilizador e a palavra-passe exatamente como aparecem no telemóvel e guarda.",
            "7. Carregue em «Enviar SMS de teste», indique o seu próprio número e confirme que a mensagem chega.",
            "8. Por fim, carregue em «Registar webhook no telemóvel» — isto diz à app do telemóvel para onde enviar os SMS recebidos dos clientes.",
          ],
          links: [
            { label: "SMS Gateway for Android (site oficial)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "O detalhe do webhook — porque não pode ser localhost",
          paragraphs: [
            "O botão «Registar webhook» ensina a app do telemóvel a reencaminhar os SMS recebidos para o PC da loja. Para isso, a OficinaOS precisa de saber o seu próprio endereço na rede — e descobre-o a partir do endereço que usa no browser.",
            "Se abrir a app em http://localhost:4000, o webhook fica registado como «localhost» — que para o telemóvel significa ele próprio, não o PC. O registo falha ou fica a apontar para o sítio errado.",
            "Abra a app pelo endereço de rede do PC (ex.: http://192.168.1.20:4000 — o mesmo que usa noutros dispositivos da loja) antes de carregar em «Registar webhook». A app avisa se estiver em localhost.",
          ],
          links: [],
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
            "A conversa entre a app e o telemóvel acontece toda dentro da rede da loja (LAN) — nada passa pela OficinaOS Cloud nem por servidores externos. O SMS em si viaja pela rede móvel da operadora, como qualquer SMS.",
            "A palavra-passe do gateway fica guardada na app encriptada (AES-256-GCM) e nunca volta a aparecer nos campos — só se substitui.",
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
              ["Cliente responde e nada acontece", "O webhook está registado? (botão «Registar webhook») — e foi registado com a app aberta pelo IP de rede, não localhost?"],
              ["Funcionava e parou", "Otimização de bateria do Android suspendeu a app? O IP do telemóvel mudou?"],
              ["«Módulo não disponível»", "O entitlement sms está ativo na conta Cloud e a app já sincronizou (até ~2 min)?"],
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
            "Se trocar de telemóvel ou de SIM, repita a configuração e registe o webhook outra vez",
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
  },
  updates: {
    title: "Novidades",
    subtitle:
      "O que mudou no OficinaOS — funcionalidades novas, melhorias e módulos Pro. Atualizado a cada lançamento.",
    free: "Grátis",
    pro: "Pro",
  },
  footer: {
    license: "Licença MIT",
    credits: "Baseado no projeto de código aberto",
    rights: "Software livre para oficinas independentes.",
    contact: "Contacto",
    community: "Comunidade"
  },
};

export type Copy = typeof t;
