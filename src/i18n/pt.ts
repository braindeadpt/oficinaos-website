import {
  BACKUP_DOCS_URL,
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  INSTALL_ZIP_URL,
  PORTABLE_DOCS_URL,
  PORTABLE_ZIP_URL,
  RELEASES_URL,
  REPO_URL,
} from "./utils";

type DocsSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
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
    diag: "Diagnóstico",
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
    sections: [
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
  footer: {
    license: "Licença MIT",
    fork: "Fork de Reparilo",
    rights: "Software livre para oficinas independentes.",
  },
};

export type Copy = typeof t;
