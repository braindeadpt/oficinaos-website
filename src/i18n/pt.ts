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
    title: "OficinaOS — Gestão de oficina gratuita e self-hosted",
    description:
      "Sistema de gestão gratuito e open source (MIT) para oficinas de reparação de telemóveis. Corre num PC dentro da loja — os dados dos seus clientes nunca saem da sua rede.",
  },
  nav: {
    features: "Funcionalidades",
    diag: "Diagnóstico",
    pro: "Módulos Pro",
    install: "Instalar",
    docs: "Guia",
    updates: "Novidades",
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
      "O OficinaOS corre num PC dentro da loja — não há servidores nossos, nem conta nossa, nem telemetria.",
    cards: [
      {
        title: "Tudo local por defeito",
        desc: "Clientes, reparações, stock e caixa vivem no PC da loja. Como nunca tocamos nos dados, nem sequer é preciso um acordo de subcontratação (Art. 28) connosco.",
      },
      {
        title: "Sem transferências internacionais",
        desc: "Por defeito nada sai da loja — ao contrário de sistemas na cloud, não há dados de clientes em servidores de terceiros.",
      },
      {
        title: "Extras opcionais e declarados",
        desc: "WhatsApp, acesso remoto e IA são opt-in — e documentados item a item, prontos para o registo de tratamento (Art. 30).",
      },
    ],
    tableTitle: "Quando liga um módulo opcional, é só isto que sai:",
    table: [
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
    tableNote:
      "Ver o detalhe completo no repositório — incluindo o que nunca sai.",
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
            ["Diagnóstico à distância", "Faz o diagnóstico do telemóvel em casa (oficinaos-diag, grátis) e envia à loja com um código"],
            ["Relatórios IA", "Relatório do diagnóstico escrito em linguagem simples, pronto a entregar"],
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
            ["Receção de diagnósticos", "Disponível (beta)", "A anunciar — grátis no beta"],
            ["Relatórios IA", "Disponível (beta)", "A anunciar — por relatório"],
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
            ["Os dados dos clientes vão para algum servidor?", "Não por defeito. Com módulos Pro, a Cloud retransmite apenas snapshots redigidos e mensagens — sem custos internos nem dados privados."],
            ["Funciona no telemóvel?", "Sim — na Wi-Fi da loja qualquer aparelho abre no browser; fora da loja com o acesso remoto (Cloudflare Tunnel)."],
            ["O cliente tem de instalar alguma coisa?", "Não — o portal abre num link no browser; o bot responde no WhatsApp normal dele."],
            ["Quanto custa?", "A app completa é gratuita (licença MIT). Os módulos Pro são subscrições opcionais em beta."],
            ["Várias lojas / filiais?", "Não — o OficinaOS é desenhado para uma localização por instalação."],
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
            "Responder a quem escreve é grátis; iniciar conversas («a tua reparação está pronta») precisa de modelos aprovados na Meta e tem custo por mensagem",
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
    fork: "Fork de Reparilo",
    rights: "Software livre para oficinas independentes.",
    contact: "Contacto",
  },
};

export type Copy = typeof t;
