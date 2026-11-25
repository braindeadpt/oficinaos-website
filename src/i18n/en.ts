import type { Copy } from "./pt";
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

export const lang = "en";
export const locale = "en";
export const ogLocale = "en_US";

export const t: Copy = {
  meta: {
    title: "OficinaOS — Free software for phone repair shops",
    description:
      "Repairs, quotes, stock and till in one free program that runs on your shop's PC. No monthly fees, and your customers' data never leaves the shop.",
  },
  nav: {
    features: "Features",
    diag: "Diagnostics",
    pro: "Pro modules",
    install: "Install",
    docs: "Guide",
    updates: "What's new",
    github: "GitHub",
    githubLabel: "Source code on GitHub",
    menuLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    download: "Download",
    language: "Language",
    products: "Products",
    productsMenuLabel: "OficinaOS products",
    forBusinesses: "For any business",
    moduleItems: { ponto: "Clock in over WhatsApp, with a QR code at the door.", atendimento: "An AI assistant that answers customers on WhatsApp." },
    productItems: {
      os: { name: "OficinaOS", desc: "Repairs, customers, stock and till in one app. Free." },
      diag: { name: "Diag", desc: "Phone diagnostics over USB, with a report for the customer." },
      pro: { name: "Pro", desc: "WhatsApp and SMS with AI, customer portal, invoicing and more. Extras as you need them." },
      trade: { name: "Trade", desc: "Buy and sell parts and devices between professionals." },
    },
    openSource: "Open source",
    githubStars: "stars on GitHub",
    languageMenuLabel: "Choose language",
    languageNames: { pt: "Português", en: "English", es: "Español" },
    skipToContent: "Skip to content",
    theme: { label: "Theme", system: "automatic", light: "light", dark: "dark" },
  },
  hero: {
    badge: "Free forever · Your data stays in your shop",
    title: "Fewer “is it ready yet?” calls.",
    titleAccent: "Your repair shop, organised.",
    subtitle:
      "Free software for phone repair shops. Check-in, quotes, stock and till in one program, installed on your shop's PC. Customers can follow their repair on their phone and your team always knows what's next.",
    footerLabel: "Software for repair shops",
    ctaPrimary: "Download for Windows",
    ctaSecondary: "See how it works",
    downloadNote: "Free · Windows 10/11 · guided install — if SmartScreen warns, that's normal for a new program: click «More info» → «Run anyway»",
    chips: ["No monthly fees", "Works without internet", "On PC, tablet and phone"],
    techNote: "For technicians: open source (MIT licence), Linux/macOS with Docker —",
    techLink: "see advanced install",
    videoLabel: "Watch the video presentation",
  },
  features: {
    title: "Everything a repair shop needs",
    subtitle:
      "Built for the counter, the bench and the back office — in a single app.",
    items: [
      {
        title: "Repair job workflow",
        desc: "From intake to delivery: statuses, priorities, assigned technician, photos and a full timeline per job.",
      },
      {
        title: "Point of sale",
        desc: "Sell parts and accessories over the counter, with cash sessions, receipts and payment tracking.",
      },
      {
        title: "Stock & parts",
        desc: "Inventory with low-stock alerts, suppliers and parts linked to each repair.",
      },
      {
        title: "Customer tracking page",
        desc: "Customers check repair status from their phone with a code — no account, nothing to install.",
      },
      {
        title: "Customer quote approval",
        desc: "Send quotes and let customers approve or decline right on the tracking page, with a timestamped record.",
      },
      {
        title: "Notifications",
        desc: "In-app alerts — and WhatsApp/SMS messages to customers with the Pro modules.",
      },
      {
        title: "Multilingual interface",
        desc: "Available in European Portuguese, English, French and Spanish.",
      },
      {
        title: "Works on your phone",
        desc: "Open it in any phone or tablet browser on the shop network and add it to your home screen. Nothing to install.",
      },
      {
        title: "Backups",
        desc: "One-command local backups of the entire database — your data, your copies.",
      },
    ],
  },
  screenshots: {
    title: "See it in action",
    subtitle:
      "The full flow in one minute: check-in, quote and approval on the phone.",
    videoAria: "OficinaOS demo video",
  },
  pro: {
    badge: "New · 14 days free",
    title: "OficinaOS Pro",
    subtitle:
      "The program you download is and always will be free and open source (MIT licence) — it will never be paid. Pro is an optional plan for whatever needs to “reach the internet” through OficinaOS Cloud: customer messaging, portal, AI and invoicing — plus, as extras, the time clock and Balcão IA.",
    statusLabel: "Pro",
    teaser:
      "WhatsApp and SMS with an AI assistant, customer portal, certified invoicing, online storefront and AI reports in one plan — with the time clock and Balcão IA as extras, on top of the free app.",
    more: "Explore Pro",
    ctaBeta: "Try 14 days free",
    groups: ["Talk to customers", "Sell and invoice", "Run and grow"],
    cloudEngine: "OficinaOS Cloud is the engine behind Pro: it connects the app to the internet only for what the modules need.",
    modules: [
      { title: "Customer portal", desc: "A public link per repair, with status and quote replies.", href: "/docs/portal/" },
      { title: "WhatsApp bot", desc: "Customers ask on WhatsApp and get the repair's real status.", href: "/docs/whatsapp/" },
      { title: "SMS channel", desc: "The same assistant over SMS, through an Android phone in the shop.", href: "/docs/sms/" },
      { title: "Diagnostics intake", desc: "Customers run the Diag at home and send the result to the shop.", href: "/docs/diag/" },
      { title: "AI reports", desc: "The technical diagnostic explained in plain language.", href: "/docs/diag/" },
      { title: "Invoicing (InvoiceXpress)", desc: "Certified invoices from a sale or repair — Portugal only.", href: "/docs/invoicing/" },
      { title: "Online storefront", desc: "A public page with catalogue items; customers reserve and the request lands in the app.", href: "/docs/storefront/" },
      { title: "Parts wanted", desc: "A board between OficinaOS shops to request and offer parts.", href: "/docs/market/" },
      { title: "Market prices", desc: "Compare your prices with the anonymous median of other shops.", href: "/docs/market-prices/" },
      { title: "Multi-shop", desc: "Revenue and repairs from all your shops on one dashboard.", href: "/docs/multi-shop/" },
      { title: "WhatsApp remarketing", desc: "An automatic message to customers who haven't been back in a while.", href: "/docs/remarketing/" },
      { title: "Balcão IA", desc: "A unified WhatsApp and SMS inbox with an AI assistant for the team — reads, summarises and drafts replies a human approves.", href: "/docs/#pro-modules-how-it-works" },
      { title: "Time clock", desc: "Time clock over WhatsApp and SMS — fixed QR in the shop, location-proven records on WhatsApp and an hours dashboard for labour inspections.", href: "/docs/ponto/" },
    ],
    signup: {
      title: "Try OficinaOS Pro",
      subtitle:
        "Leave your details: we'll help you pair and start your 14 days free. No commitment and no card. We'll get back to you shortly.",
      email: "Email",
      emailPlaceholder: "you@example.com",
      shop: "Business name",
      shopPlaceholder: "e.g. Fix It Fast",
      city: "City",
      cityPlaceholder: "e.g. Porto",
      phone: "Phone",
      phonePlaceholder: "e.g. +351 912 345 678",
      optional: "optional",
      languageLabel: "Language",
      founderLabel: "I want to be one of the founders (special price for 12 months)",
      button: "Get my 14 days free",
      mailSubject: "OficinaOS Pro — free trial request",
      note: "We only use these details to contact you about OficinaOS Pro.",
      noteMailto:
        "Submitting opens your email app with the details filled in — just press Send.",
      cloudText: "Already have an OficinaOS Cloud account?",
      cloudLink: "Sign in at cloud.oficinaos.app",
      sending: "Sending…",
      success: "Request received — we'll be in touch soon.",
      errorInvalid:
        "We couldn't register your request — check the details and try again.",
      errorRate: "Too many requests — please try again in an hour.",
    },
  },
  diag: {
    badge: "Free tool",
    title: "OficinaOS Diag — cable diagnostics",
    subtitle:
      "Free Windows app that reads any Android or iPhone over USB: battery health, screen, sensors and storage.",
    customerTitle: "I'm a customer",
    customerItems: [
      "Download, plug in your phone and check battery, screen and sensors — no account, no install.",
      "Test the screen and touch on the phone itself (colors and touch grid).",
      "Export the report as HTML/JSON — or send it to your repair shop with the code they gave you.",
    ],
    shopTitle: "I run a repair shop",
    shopItems: [
      "Customers run the tool at home for free — and send the diagnostic with your shop code.",
      "The report lands in the app as a pre-check (Requests), ready to convert into a job — Pro module.",
      "With AI reports, the same diagnostic produces a plain-language summary to hand to the customer.",
    ],
    cta: "Download for Windows",
    repoLink: "Source on GitHub",
    note: "Windows 10/11 · free · no account. Android via USB debugging; iPhone via \"Trust this computer\".",
  },
  privacy: {
    badge: "GDPR",
    title: "Your data stays in the shop.",
    subtitle:
      "The app runs on a PC inside the shop with no telemetry: by default, no customer data leaves the shop. Every optional module that sends data is declared below.",
    cards: [
      {
        title: "Everything local by default",
        desc: "Customers, repairs, stock and till live on the shop's PC. With no Pro modules switched on, we receive no data from the shop.",
      },
      {
        title: "The Cloud is optional",
        desc: "Pro modules, OficinaOS Cloud accounts and Diag log uploads use our servers. They are only used if the shop (or the customer, in the Diag) turns them on.",
      },
      {
        title: "Declared extras",
        desc: "WhatsApp, remote access, AI and the Cloud are opt-in — documented item by item, ready for your records of processing (Art. 30).",
      },
    ],
    tableTitle: "When you switch an optional module on, this is what leaves:",
    table: [
      {
        name: "OficinaOS Cloud (Pro modules)",
        to: "OficinaOS servers",
        what: "Account and pairing; each active module's data — portal pages (with the customer's name), incoming WhatsApp messages, storefront reservations, submitted diagnostics, daily totals (multi-shop) and shared prices. The shop's Meta token is stored encrypted on the Cloud to send WhatsApp on its behalf",
      },
      {
        name: "AI reports (Pro)",
        to: "The Cloud's AI provider",
        what: "The diagnostic data and notes the report is generated from",
      },
      {
        name: "Diag log upload",
        to: "OficinaOS servers",
        what: "Only when you press “Send log”: the tail of the diag.log file",
      },
      {
        name: "WhatsApp notifications & bot",
        to: "Meta, via the OficinaOS Cloud relay",
        what: "Customer phone number + message text — they transit through the Cloud without being stored or logged (logs only carry id, status and masked phone)",
      },
      {
        name: "SMS & SMS bot (Pro)",
        to: "OficinaOS Cloud → the shop's Android phone",
        what: "Device credentials + customer phone number + message text — they transit through the Cloud; message bodies are not logged",
      },
      {
        name: "Balcão IA (Pro)",
        to: "OficinaOS Cloud → the AI provider the shop chooses",
        what: "Inbox tool results transit through the Cloud without being stored or logged; personal MCP tokens are kept as hashes only; the shop's AI key stays encrypted",
      },
      {
        name: "Time clock (Pro)",
        to: "OficinaOS Cloud → Pro channels (WhatsApp/SMS)",
        what: "Location at the moment of recording and external proof photos transit the messaging channels — the Cloud doesn't store them; the time clock stays in the shop's app",
      },
      {
        name: "Remote access & customer links",
        to: "Cloudflare",
        what: "The pages' traffic in transit",
      },
      {
        name: "AI analyst",
        to: "Whichever provider you configure",
        what: "The questions you ask the AI",
      },
    ],
    cloudPrivacyLink: "OficinaOS Cloud privacy policy",
    tableNote:
      "See the full detail — including what never leaves — in the repository.",
  },
  terms: {
    badge: "Legal",
    title: "Terms and conditions",
    subtitle:
      "The essentials, in plain language: OficinaOS is free software, the data is yours and paid services are always optional.",
    sections: [
      {
        heading: "Free software (MIT)",
        body: "OficinaOS is distributed under the MIT license: you may use, copy, modify and redistribute it, including commercially. The full source code is on GitHub. It is a fork of Reparilo — the name «Reparilo» is not covered by the license and may not be reused in other distributions.",
      },
      {
        heading: "No warranty",
        body: "The software is provided «as is», without warranty of any kind. The app makes automatic backups, but checking that backups exist and keeping copies off the PC is the shop's responsibility.",
      },
      {
        heading: "Your data",
        body: "The app runs on a PC inside the shop and your customers' data stays there. The shop is the data controller (GDPR): it decides what is collected, how long it is kept and who can see it. We have no access — and don't ask for any.",
      },
      {
        heading: "Pro modules and OficinaOS Cloud",
        body: "The core is free forever. Pro modules are optional paid services, activated server-side through OficinaOS Cloud, and are governed by the terms shown at subscription. Turning off a module does not delete local data — it is yours.",
      },
      {
        heading: "Third-party services, costs and fair use",
        body: "Messaging rides networks and services we don't control: SIM/SMS tariffs, SMS providers, Meta (WhatsApp Business Platform) and unofficial gateways (Evolution API). Per-message costs — carrier SMS, provider credits, Meta template fees — always belong to the shop's own accounts and responsibility. The Evolution transport is unofficial: Meta may restrict or ban the number and that risk is entirely the shop's (the app requires accepting a dedicated disclaimer before enabling the bot). SIM/provider-backed features carry fair-use limits (e.g. per-number flood control) — they are for service notifications and replies, not bulk campaigns; abuse can breach the carrier/provider fair-use policy and suspend the module.",
      },
      {
        heading: "This website",
        body: "This site uses Cloudflare Web Analytics: visit statistics without cookies, without fingerprinting and without personal data — which is why there is no cookie banner.",
      },
      {
        heading: "Governing law",
        body: "These terms are governed by Portuguese law. Questions or problems: talk to us via the contact email in the footer before any dispute — we solve almost everything by talking.",
      },
    ],
  },
  install: {
    title: "Running in minutes",
    subtitle:
      "One Windows PC in the shop and an installer. After install it works offline on your local network.",
    steps: [
      {
        title: "Download the installer",
        desc: "Download OficinaOS-Setup.exe — a regular Windows installer, no Docker needed.",
      },
      {
        title: "Double-click the installer",
        desc: "It asks for admin once (services and firewall) and does everything itself. If SmartScreen warns: “More info” → “Run anyway”.",
      },
      {
        title: "Open in the browser",
        desc: "When it finishes, http://localhost:4000 opens and a tray icon stays running. On other devices in the shop: http://oficinaos.local:4000 — or scan the QR code on the Help page.",
      },
    ],
    downloadButton: "Download for Windows",
    dockerLink: "Advanced install (Docker)",
    portableLink: "Portable version (no admin)",
    downloadNote: "Windows 10/11 64-bit · free · runs as a service, no Docker · latest release on GitHub",
    advanced: {
      badge: "Advanced",
      title: "Linux and macOS — manual Docker",
      desc: "There's no automatic installer for Linux or macOS. With Docker installed, the app starts with these commands:",
      commentGet: "get the code and the config",
      commentStart: "start with docker (seed only the first time)",
      commentOpen: "then open in the browser",
      note: "Edit .env before starting (initial admin password and APP_URL). Details in the installation guide.",
    },
    guideLink: "Full installation guide",
    releasesLink: "All versions (Releases)",
  },
  docs: {
    title: "Full guide",
    subtitle:
      "For technicians, repair shops and resellers: install, daily use, backups and troubleshooting — step by step, no technical background needed.",
    toc: "In this guide",
    backToGuide: "Full guide",
    ui: {
      navLabel: "Documentation",
      menu: "Documentation menu",
      breadcrumb: "Breadcrumb",
      groups: ["Get started", "Day to day", "Printing", "Pro modules", "Help"],
      modules: "Module guides",
      onThisPage: "On this page",
      search: "Search the documentation",
      searchShort: "Search",
      searchPlaceholder: "Search the guide… (e.g. backups, printer, VAT)",
      searchHint: "Type to search the titles and sections of every guide.",
      searchEmpty: "No results for “{q}”. Try another word or fewer words.",
      searchOne: "1 result",
      searchMany: "{n} results",
      searchError: "Search couldn't be loaded. Use the documentation menu instead.",
      searchKeys: "↑ ↓ to choose · Enter to open · Esc to close",
      close: "Close",
      copy: "Copy",
      copied: "Copied",
      copyLabel: "Copy commands",
    },
    sections: [
      {
        heading: "What's in the app (free, MIT)",
        paragraphs: [
          "Everything a repair shop uses day to day, with no subscription or limits:",
        ],
        table: {
          head: ["Menu", "What's included"],
          rows: [
            ["Dashboard", "The day at a glance — open repairs, priorities and alerts (different view for owner, technician and front desk)"],
            ["Repairs", "Job cards with unique code (REP-…), statuses (intake → done → delivered), timeline, internal and customer-visible notes, photos and due date"],
            ["Requests", "Intake queue — customer-sent requests and diagnostics, ready to convert into a job"],
            ["Returns", "Return handling linked to sales and repairs"],
            ["Customers", "Records with repair history, search by name/phone/IMEI, consents"],
            ["Parts inventory", "Stock, low-stock alerts, suppliers, parts linked to repairs"],
            ["Counter POS", "Sell parts and accessories, cash sessions, receipts and payment records"],
            ["Repair services", "Repair catalog with prices — the shop's price list"],
            ["Quotes", "Versioned quotes sent to the customer, approve/decline responses with dated record, full history"],
            ["Notifications", "In-app alerts, editable message templates and send queue — WhatsApp/SMS sending with a Pro module"],
            ["Reports", "Sales, repairs and margins per period — with an A4 print page"],
            ["Printing", "Configurable receipts and labels — 58/80 mm roll, A4, optional sections and direct printing to network thermal printers"],
            ["AI analyst", "Questions about the shop's data in plain language"],
            ["Customer tracking", "Public page on the shop's network for customers to follow their repair — free on LAN"],
            ["Users", "Multiple staff members with roles and per-function permissions"],
            ["Languages", "Portuguese, English, French and Spanish"],
          ],
        },
        images: [
          {
            src: "/screenshots/dashboard.webp",
            alt: "OficinaOS repair dashboard",
            caption: "The dashboard — the day's repairs at a glance",
          },
          {
            src: "/screenshots/job-detail.webp",
            alt: "Repair job card with statuses, quote and timeline",
            caption: "The job card — statuses, quote and full timeline",
          },
          {
            src: "/screenshots/tracking.webp",
            alt: "Customer tracking page on a phone",
            caption: "The tracking page the customer opens on their phone",
          },
        ],
        links: [],
      },
      {
        heading: "Three ways to install",
        paragraphs: [
          "OficinaOS is always the same program — what differs is how it runs on the shop PC. There are three paths:",
          "OficinaOS-Setup.exe (recommended) — a normal Windows installer, no Docker: runs as a service, starts with the PC, creates the firewall rule, does automatic daily backups and leaves a tray icon. The right path for the shop PC.",
          "Portable mode — a single bundle with everything inside (the app, the PostgreSQL database and the runtime), with no installation and no Windows services. It exists for the cases where the installer doesn't fit: PCs where you don't have the admin password, people who'd rather not install anything on the system, and as a fallback if the installer fails on a specific machine (antivirus, company policies).",
          "Docker — for a NAS, a dedicated server, Linux or macOS, or for people who already use Docker.",
        ],
        table: {
          head: ["", "Setup.exe (recommended)", "Portable", "Docker"],
          rows: [
            ["When to use", "Shop PC — almost always", "No admin, no install, or installer fails", "NAS, server, Linux/macOS"],
            ["Requires admin", "Yes, during install", "No", "Yes, when installing Docker"],
            ["Download", "~339 MB", "~540 MB", "~1 GB (Docker + app)"],
            ["Boot with the PC", "Automatic (Windows service)", "Optional — scheduled task, asked on first run", "Automatic"],
            ["If the app crashes", "Restarts by itself", "Restarts by itself (wrapper)", "Restarts by itself"],
            ["Backups", "Automatic daily at 03:30", "At every startup + BACKUP.bat", "Automatic daily (every 24h)"],
            ["Off-PC backups", "Copy the backups folder", "Copy the backups folder", "Supported (rclone → S3/B2/GCS)"],
            ["Updates", "«Update» button in the app (~100 MB) or Setup over the top", "«Update» button in the app or ATUALIZAR.bat", "ATUALIZAR.bat — downloads only what changed"],
            ["Remote access (HTTPS)", "Cloudflare Tunnel installed separately", "Cloudflare Tunnel installed separately", "Cloudflare Tunnel included"],
          ],
        },
        links: [
          { label: "Installation guide", href: INSTALL_URL },
          { label: "Portable mode documentation", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Install — OficinaOS-Setup.exe (once, ~10 minutes)",
        paragraphs: [
          "Download OficinaOS-Setup.exe from the releases page and double-click it. If Windows SmartScreen warns: «More info» → «Run anyway».",
          "It asks for admin once (services, firewall and the backup task) and does everything by itself. At the end the browser opens at http://localhost:4000. On first access the app shows the initial setup screen — you create the admin user and password.",
          "A tray icon stays next to the clock: open the app, check status, stop/start, run a backup. On other shop devices: http://oficinaos.local:4000 — or the QR code on the Help page.",
          "On Linux or macOS there's no installer — Docker is used directly:",
        ],
        images: [
          {
            src: "/screenshots/smartscreen-en.webp",
            alt: "Windows SmartScreen warning — «More info» then «Run anyway»",
            caption: "The installer isn't signed yet — Windows may show this warning. «More info» → «Run anyway».",
          },
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Full installation guide", href: INSTALL_URL },
          { label: "Download OficinaOS-Setup.exe", href: SETUP_EXE_URL },
        ],
      },
      {
        heading: "Portable mode — no admin, nothing installed",
        paragraphs: [
          "For when the installer isn't an option: you don't have the PC's admin password, you'd rather nothing get installed on the system, or the installer/services were blocked on that machine (antivirus, company policies).",
          "Download oficinaos-portable.zip, extract to a folder and run INICIAR.bat. The app is exactly the same — same code, same PostgreSQL database, same features — and it also has the in-app «Update» button.",
          "Two practical differences versus Setup.exe: autostart is an optional scheduled task (INICIAR.bat asks on first run) instead of a service; and since nobody opens the firewall for you, Windows asks once whether to allow the connection — choose «Allow» so the shop's tablets can connect.",
          "If you arrived here because of the Docker path's «virtualization support not detected» error, portable mode fixes it — but in that case Setup.exe is even simpler, since it doesn't need Docker either.",
        ],
        links: [
          { label: "Download the portable bundle", href: PORTABLE_ZIP_URL },
          { label: "How portable mode works inside", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Day to day — start, stop, files",
        paragraphs: [
          "Once installed, daily use is a double click on a file. The names are the same in both modes — only the folder changes:",
        ],
        table: {
          head: ["File", "What it does"],
          rows: [
            ["INICIAR.bat", "Start OficinaOS — opens the browser when ready"],
            ["PARAR.bat", "Stop — data stays saved"],
            ["ATUALIZAR.bat", "Update to the latest version"],
            ["BACKUP.bat", "(portable only) Manual database backup"],
            ["RESTAURAR.bat", "(portable only) Restore the database from a backup"],
          ],
        },
        list: [
          "Setup.exe install: the service runs by itself — stop/start and manual backup via the tray icon.",
          "Docker mode: in the folder where you extracted the installer.",
          "Portable mode: inside the oficinaos-portable folder — data lives in data\\, backups in app\\uploads\\backups.",
          "Other shop devices (tablet, phone, another PC) install nothing — they open http://<PC-IP>:4000 in a browser.",
        ],
        links: [],
      },
      {
        heading: "Backups and restore",
        paragraphs: [
          "Backups are compressed files (.sql.gz) containing the whole database. The app shows the last backup status under Settings → Shop → Backups — it works the same in every mode.",
          "With a Setup.exe install a scheduled task backs up daily at 03:30 to C:\\ProgramData\\OficinaOS\\backups. In Docker mode a dedicated service backs up every 24 hours, keeps 14 days, and can optionally copy to external storage (S3, Backblaze, etc.) and automatically verify restores.",
          "In portable mode the backup runs at every startup and via BACKUP.bat. Restoring is done with RESTAURAR.bat (pick a file from backups). Since there's no automatic off-PC copy, copy the app\\uploads\\backups folder to an external drive or USB stick — backups on the same disk don't protect against failure, theft or ransomware.",
        ],
        links: [
          { label: "Backups & restore (Docker)", href: BACKUP_DOCS_URL },
          { label: "Backups in portable mode", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "The app shows a banner when a new version exists. On Setup.exe installs and in portable mode, the shop owner gets an «Update» button on that banner — it downloads only the app payload (~100 MB) with SHA-256 verification, backs up the database first and restores the previous version by itself if the new one fails to start. The app is offline ~1-2 minutes during the swap.",
          "Manually also works: run the new Setup.exe over the top, or ATUALIZAR.bat in portable and Docker modes. Docker can also update fully automatically (Watchtower) — database migrations always run by themselves.",
        ],
        links: [{ label: "All releases", href: RELEASES_URL }],
      },
      {
        heading: "In the shop — phones, tablets and PCs",
        paragraphs: [
          "Any device on the shop's Wi-Fi opens the app in a browser — nothing to install. Just type the address the setup gives you and log in:",
          "Works without internet for daily use. Bookmark the address — it never changes.",
        ],
        code: "http://192.168.1.33:4000   # the server PC's address",
        links: [],
      },
      {
        heading: "Icon on the phone's home screen",
        paragraphs: [
          "To open with one tap, like a normal app — takes 10 seconds:",
        ],
        list: [
          "iPhone/iPad: Safari → Share button → “Add to Home Screen”",
          "Android: Chrome → ⋮ menu → “Add to Home Screen”",
          "With remote access on, Android may even offer “Install app” — a real install",
        ],
        links: [{ label: "Mobile guide", href: DOCS_MOBILE_URL }],
      },
      {
        heading: "Outside the shop — remote access",
        paragraphs: [
          "With the shop PC on, a free Cloudflare Tunnel gives the shop its own https:// address — no router changes, works with any ISP, even the ones blocking ports (CGNAT).",
          "It lets staff check the app from anywhere and makes customer links — tracking, quotes, warranty QR — open everywhere.",
        ],
        list: [
          "Create a free Cloudflare account + a domain (~$10/year)",
          "In the Zero Trust dashboard: create the tunnel and copy the token",
          "Two lines in the .env file and restart the app",
          "In the app: Settings → Shop → Tracking base URL → the public address",
        ],
        links: [{ label: "Step-by-step guide", href: DOCS_REMOTE_URL }],
      },
      {
        heading: "Private by default",
        paragraphs: [
          "The tunnel is optional: the app keeps working 100% on the local network even without internet. Customer data stays in the shop — Cloudflare only carries encrypted traffic while the tunnel is on.",
          "Anyone wanting an extra barrier can enable Cloudflare Access (free): email + code before the login, while customer-facing public pages stay open.",
        ],
        links: [],
      },
      {
        heading: "Printing — receipts and labels",
        paragraphs: [
          "OficinaOS prints the three everyday documents straight from the job page or the sale screen: the repair receipt for the customer, the POS sale receipt and the label that goes on the device.",
          "Everything is configured under Settings → Shop → Printing — the choices apply to every document from then on:",
        ],
        table: {
          head: ["Option", "Choices"],
          rows: [
            ["Receipt paper", "58 mm thermal roll · 80 mm thermal roll · A4 sheet (full, invoice-style document)"],
            ["Receipt sections", "Toggle each block: IMEI, reported problem, customer signature, tracking QR, warranty"],
            ["Device label", "40×20 mm · 57×32 mm · 62×29 mm"],
            ["Print method", "Print dialog — any installed printer — or ESC/POS network thermal printer — direct, no dialog"],
          ],
        },
      },
      {
        heading: "Two ways to print",
        paragraphs: [
          "Print dialog (default): the document opens in a new tab and uses the operating system's print dialog. It works with any installed printer — USB, network, Bluetooth — and even «Save as PDF». Labels always take this path: label printers speak other languages (ZPL/TSPL) and the browser handles the driver.",
          "Network thermal printer (ESC/POS): the app sends the receipt straight to the printer over the shop network — one click and the ticket comes out, no dialog. For thermal printers connected by cable or Wi-Fi (Epson TM, Star, Xprinter and other ESC/POS-compatible models). Text uses the CP850 code page — correct accents — and the tracking QR is printed with the printer's native commands, no drivers needed.",
        ],
        list: [
          "Enable (once): Settings → Shop → Printing → Method «Network thermal printer» → enter IP and port (almost always 9100) → «Send test ticket»",
          "Find the IP: on most thermal printers, powering on with the FEED button held prints a self-test with the IP; it also shows in the router's device list",
          "Reserve the IP on the router (DHCP reservation) — otherwise the printer may change address and stop printing",
          "With the A4 paper preset or a USB-only printer, the print dialog is the path — ESC/POS is for thermal rolls on the network only",
        ],
      },
      {
        heading: "Printing — common problems",
        paragraphs: ["The most frequent situations:"],
        table: {
          head: ["Symptom", "What to do"],
          rows: [
            ["«Could not reach the printer»", "Check it is powered on and on the shop network; review IP and port; retry «Send test ticket»"],
            ["«No network printer configured»", "Set IP + port under Settings → Shop → Printing — or switch the method back to «Print dialog»"],
            ["The printer's IP changed", "Set a DHCP reservation on the router and update the IP in settings"],
            ["Receipt cut off or wrong margins", "In the print dialog: pick the right paper (58 mm, 80 mm or A4), margins «None», scale 100%"],
            ["The receipt tab doesn't open", "Allow pop-ups for the app address and print again"],
            ["USB-only printer", "Use the «Print dialog» method — ESC/POS needs a printer on the network"],
          ],
        },
      },
      {
        heading: "Pro modules — how it works",
        paragraphs: [
          "Pro modules are features that need to reach the internet. The app stays 100% local and free; when a shop wants remote reach, it pairs the app with OficinaOS Cloud — our service that bridges the shop's app to the outside world without exposing the shop's computer.",
          "The shop creates a Cloud account and pairs the app with a code (once). Each module is switched on server-side — no license files. The app syncs with the Cloud every ~2 minutes to send and receive — the message queues (WhatsApp/SMS) have their own fast ~12-second cycle, so bot replies arrive in seconds.",
          "Without pairing, everything keeps working on the local network — Pro modules simply don't appear.",
          "All messaging channels — SMS and WhatsApp, on any transport (local network or Cloud) — are Pro modules: the free app neither sends nor receives messages. The settings cards stay visible, but clicking them shows “This option only exists in OficinaOS Pro.”",
        ],
        table: {
          head: ["Module", "What the shop's customer gets"],
          rows: [
            ["Customer portal", "Public link with repair status and approve/decline quote buttons — no need to call the shop"],
            ["WhatsApp bot", "Messages the shop's WhatsApp and gets the repair status automatically; approves quotes with YES/NO"],
            ["SMS channel", "The same assistant over SMS — an Android phone attached to the Cloud (works with the PC off and can serve several shops) or on the local network"],
            ["Balcão IA", "A unified WhatsApp and SMS inbox, with AI helping the team read, summarise and draft replies"],
            ["Remote diagnostics", "Runs the phone diagnostic at home (oficinaos-diag, free) and sends it to the shop with a code"],
            ["AI reports", "Diagnostic report written in plain language, ready to hand to the customer"],
            ["Certified invoicing", "Legal invoice or invoice-receipt issued straight from the repair or sale — via InvoiceXpress, on the shop's own account — Portugal only"],
            ["Online storefront", "A public page with items from the shop's catalogue; the customer reserves and the reservation lands in the Requests queue"],
            ["Parts wanted", "A board between OficinaOS shops to request parts and reply “I have it” — the deal is settled between shops"],
            ["Market prices", "The anonymous median of other shops' repair and part prices, to compare with your own"],
            ["Multi-shop", "Revenue and repairs from every shop of the same owner on one OficinaOS Cloud dashboard"],
            ["WhatsApp remarketing", "An automatic message to consenting customers whose last repair was a while ago"],
            ["Time clock", "Staff time clock over WhatsApp and SMS — clock-in, breaks and clock-out proven by location on WhatsApp; hours dashboard and export for labour inspections"],
          ],
        },
        links: [],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "The full app is free and open source (MIT) — no limits, no accounts, no trial period. Forever.",
          "Pro is one plan, OficinaOS Pro, with a base that already includes almost every module and two monthly prices (with or without AI included), with a 14-day free trial. The time clock, Balcão IA and official WhatsApp are extras. Prices, extras and services are on the OficinaOS Pro page. No lock-in, no hidden costs.",
          "* WhatsApp note: the quick QR connection has no per-message cost. With official Meta WhatsApp (extra), Meta bills messages directly to the shop, with 1,000 free replies per month per number — Meta's cost, not ours.",
        ],
        table: {
          head: ["What", "Status", "Price"],
          rows: [
            ["Full app (core)", "Free forever", "€0"],
            ["OficinaOS Diag (tool)", "Free forever", "€0"],
            ["Customer portal", "Available", "Included in Pro"],
            ["WhatsApp bot", "Available", "Included in Pro*"],
            ["SMS channel (Android gateway)", "Available", "Included in Pro. The SIM plan is the shop's"],
            ["Balcão IA", "Available", "Pro extra"],
            ["Diagnostics intake", "Available", "Included in Pro"],
            ["AI reports", "Available", "Included in Pro"],
            ["Invoicing (InvoiceXpress)", "Available", "Included in Pro. The InvoiceXpress account is the shop's own and carries its own service cost"],
            ["Online storefront (+ customisation)", "Available", "Included in Pro"],
            ["Parts wanted", "Available", "Included in Pro"],
            ["Market prices", "Available", "Included in Pro"],
            ["Multi-shop", "Available", "Included in Pro (up to 3 shops; additional shops at a monthly cost)"],
            ["WhatsApp remarketing", "Available", "Included in Pro*"],
            ["Time clock", "Available", "Pro extra"],
          ],
        },
        links: [],
      },
      {
        heading: "Customer portal (Pro)",
        paragraphs: [
          "With the module active, every repair gets a «Public link» button on its detail page. Clicking it publishes a redacted snapshot to the Cloud — status, device, quote, due date and timeline — and copies the link.",
          "The link is a per-job secret (a random 32-character code): whoever has it sees the page. Send it to the customer by SMS, WhatsApp or print it on the intake slip. The page updates itself when the status changes in the app.",
          "If a quote is pending, the customer accepts or declines it right on the page — the answer flows into the app through the normal quote flow, with a staff notification.",
        ],
        links: [
          { label: "Detailed portal guide", href: "/en/docs/portal" },
        ],
      },
      {
        heading: "WhatsApp bot (Pro)",
        paragraphs: [
          "The customer texts the shop's WhatsApp number and the bot replies with real job data — nobody picks up the phone. It works on the shop's own number (the WhatsApp Business app on the phone keeps working in parallel).",
          "Honest notes: replies arrive in ~10–15 seconds (fast message poller); setup uses Meta's official WhatsApp Business Platform and during the beta we help with the setup. There's also the Evolution transport (unofficial — sending and the bot are both Pro) — see the guide.",
        ],
        table: {
          head: ["Customer writes", "Bot replies"],
          rows: [
            ["«is it ready?» or any text", "Repair status + due date"],
            ["«quote» / «price»", "Quote amount + how to answer"],
            ["YES / accept", "Approves the pending quote (same flow as at the counter)"],
            ["NO / decline", "Declines the quote"],
            ["Repair code (REP-…)", "Status of that job"],
            ["«help», audio or image", "Escalates to staff with an in-app alert"],
          ],
        },
        links: [
          { label: "Detailed bot guide", href: "/en/docs/whatsapp" },
        ],
      },
      {
        heading: "SMS channel (Pro)",
        id: "sms-channel-free-in-core",
        paragraphs: [
          "The same automatic assistant, but over SMS — for shops that don't want (or don't yet have) a Meta business account. An Android phone with a SIM acts as the bridge: attached to OficinaOS Cloud it sends and receives even with the PC off (and can serve several shops of the same owner); on the local network it stays as an alternative sending transport.",
          "No Meta accounts, no template approvals, no per-message cost — only the shop SIM's plan (plans with bundled SMS make the marginal cost zero). It needs the SMS module (Pro): without it the app neither sends nor receives messages.",
        ],
        links: [
          { label: "Detailed SMS channel guide", href: "/en/docs/sms" },
        ],
      },
      {
        heading: "Customer-sent diagnostics (Pro)",
        paragraphs: [
          "The oficinaos-diag tool is free for anyone: the customer downloads it, plugs the phone into a PC and it reads battery, screen, sensors and storage.",
          "With the module active, the shop receives those diagnostics right in the app (intake queue), ready to convert into a repair — the customer only needs the shop's code. The AI reports module turns the technical data into plain-language text to hand to the customer.",
        ],
        links: [
          { label: "Full Diag guide", href: "/en/docs/diag" },
          { label: "About oficinaos-diag", href: DIAG_REPO_URL },
        ],
      },
      {
        heading: "Certified invoicing (Pro)",
        paragraphs: [
          "The app issues legal tax documents straight from the sale or the delivered repair — invoice-receipt when the customer has a tax number, simplified invoice when they don't. Issuing goes through InvoiceXpress on the shop's own account: the API key stays encrypted on the shop PC and the app talks directly to InvoiceXpress — the OficinaOS Cloud only controls module access and never sees the documents. Portugal only.",
        ],
        links: [
          { label: "Detailed invoicing guide", href: "/en/docs/invoicing" },
        ],
      },
      {
        heading: "Storefront, parts wanted, prices, multi-shop and remarketing (Pro)",
        paragraphs: [
          "Five more Pro modules, included in the base plan and switched on in the OficinaOS Cloud account. Each has a short guide:",
        ],
        table: {
          head: ["Module", "What for"],
          rows: [
            ["Online storefront", "A public page with the catalogue items you choose — customers reserve and the request shows up in Requests"],
            ["Parts wanted", "Ask other OficinaOS shops for a part, or answer their requests"],
            ["Market prices", "See the anonymous median of other shops' prices next to yours"],
            ["Multi-shop", "A dashboard with revenue and repairs from all your shops"],
            ["WhatsApp remarketing", "An automatic message to customers who haven't been back in a while"],
          ],
        },
        links: [
          { label: "Online storefront guide", href: "/en/docs/storefront/" },
          { label: "Parts wanted guide", href: "/en/docs/market/" },
          { label: "Market prices guide", href: "/en/docs/market-prices/" },
          { label: "Multi-shop guide", href: "/en/docs/multi-shop/" },
          { label: "Remarketing guide", href: "/en/docs/remarketing/" },
        ],
      },
      {
        heading: "Time clock (Pro)",
        paragraphs: [
          "The time clock module turns the shop's WhatsApp or SMS into a time clock: a fixed QR code by the door and clock-in, break, back and clock-out commands proven by location on WhatsApp — with an hours dashboard and export for labour inspections.",
          "Honestly: it helps the shop comply with labour law — the decision and the legal responsibility are the shop's.",
        ],
        links: [
          { label: "Time clock guide", href: "/en/docs/ponto" },
        ],
      },
      {
        heading: "Common problems",
        paragraphs: ["The most frequent situations and how to solve each:"],
        table: {
          head: ["Symptom", "What to do"],
          rows: [
            ["SmartScreen warns during install", "«More info» → «Run anyway» — it's a new file without reputation, not a virus"],
            ["«Virtualization support not detected»", "The installer offers both options: enable in BIOS or use portable mode"],
            ["Windows asks to reboot during install", "Reboot and run INSTALAR.bat again — normal during Docker setup"],
            ["Windows Firewall prompt", "Choose «Allow» on private network"],
            ["Blank page / won't open", "Ctrl+F5; make sure the address is http:// (not https://)"],
            ["«Invalid username or password»", "Login is by username (admin), not email"],
            ["PC changed IP and other devices can't connect", "Update APP_URL in .env (Docker) or delete .env and run INSTALAR.bat again"],
            ["Port 4000 in use (portable)", "Change PORT in app\\.env"],
            ["Postgres won't start (portable)", "Check data\\postgres.log; port 5433 in use → change it in data\\postgresql.conf and in .env"],
            ["Uninstall everything", "PARAR.bat + delete the folder (portable); docker compose down -v + delete the folder (Docker). Warning: deletes the database — back up first"],
          ],
        },
        links: [{ label: "Full troubleshooting", href: INSTALL_URL }],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: ["The questions we hear most often:"],
        table: {
          head: ["Question", "Answer"],
          rows: [
            ["Do I need internet?", "Not for daily use — the app runs fully on the shop's network. Only for updates and Pro modules."],
            ["Does customer data go to a server?", "Not by default — the app has no telemetry. With Pro modules, OficinaOS Cloud receives only the data each module needs (e.g. portal pages, messages, reservations and submitted diagnostics), never internal costs or internal notes. The details are in the Cloud privacy policy (cloud.oficinaos.app/privacy)."],
            ["Does it work on phones?", "Yes — on the shop's Wi-Fi any device opens it in a browser; outside the shop via remote access (Cloudflare Tunnel)."],
            ["Does the customer install anything?", "No — the portal opens as a link in their browser; the bot replies on their normal WhatsApp."],
            ["How much does it cost?", "The full app is free (MIT license). OficinaOS Pro is an optional plan, with a 14-day free trial."],
            ["Multiple shops / branches?", "Each shop has its own install. With the Multi-shop Pro module, the owner sees revenue and repairs from every shop on one OficinaOS Cloud dashboard."],
            ["What if the PC dies?", "Automatic daily backups; restoring on another PC is copying the backup and rerunning the installer."],
            ["Mac or Linux?", "Yes, via manual Docker — the automatic installer is Windows-only."],
            ["Can I import data from another system?", "Customers and catalog via CSV; contact us for assisted migrations."],
          ],
        },
        links: [],
      },
      {
        heading: "Full documentation",
        paragraphs: [
          "This guide covers the essentials. The GitHub repository has the complete technical documentation — detailed install, remote access, mobile devices, backups with off-site copies and how the portable bundle works inside:",
        ],
        links: [
          { label: "Installation guide (INSTALL.md)", href: INSTALL_URL },
          { label: "Portable mode internals", href: PORTABLE_DOCS_URL },
          { label: "Remote access (Cloudflare Tunnel)", href: DOCS_REMOTE_URL },
          { label: "Phones and tablets", href: DOCS_MOBILE_URL },
          { label: "GitHub repository", href: REPO_URL },
        ],
      },
    ],
  },
  moduleDocs: {
    portal: {
      title: "Customer portal",
      subtitle:
        "A public link per repair — the customer sees live status and answers quotes without calling the shop.",
      sections: [
        {
          heading: "What the customer sees",
          paragraphs: [
            "Publishing a repair creates a public page on OficinaOS Cloud with a redacted summary of the job. The page updates itself whenever the status changes in the app — the customer opens the link on their phone and always sees the latest version.",
            "What the page shows:",
          ],
          list: [
            "Current repair status in plain language",
            "Device and expected completion date",
            "Timeline of events (received, in repair, ready…)",
            "Pending quote with «Accept» and «Decline» buttons",
          ],
          links: [],
        },
        {
          heading: "What never leaves the shop",
          paragraphs: [
            "The portal publishes a redacted snapshot — only what the customer needs to see. Never on the portal: internal costs and margins, staff-only notes, other customers' data, team contact details, or history of other repairs.",
            "The link is a per-repair secret (a random 32-character code): whoever has it sees the page — so send it only to that repair's customer. Removing the link on the job card deletes the public page.",
          ],
          links: [],
        },
        {
          heading: "Enabling the module (once)",
          paragraphs: [
            "The portal needs OficinaOS Cloud — the service that bridges the shop's app to the internet without exposing the shop PC.",
          ],
          list: [
            "Create an OficinaOS Cloud account (cloud.oficinaos.app) — or get a pairing code from our team",
            "In the app: Settings → Cloud tab → paste the pairing code → «Connect»",
            "The portal module is switched on in the Cloud account (during beta, by us); the app syncs by itself",
            "From then on, every job card gets a «Public link» button",
          ],
          links: [],
        },
        {
          heading: "Day to day — publish and share",
          paragraphs: [
            "On the job card, the «Public link» button publishes the snapshot and copies the link. Send it to the customer by SMS, WhatsApp or printed on the intake slip — done.",
            "When the status changes in the app, the next sync (up to ~2 minutes) updates the page. The «Remove public link» button deletes the page when it's no longer needed.",
            "If a quote is pending, the customer answers on the page itself: «Accept» or «Decline» flows into the app through the normal quote flow — dated record and staff notification, exactly like an answer at the counter.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Up to ~2 minutes between a status change and the page updating (sync cycle)",
            "Needs internet at the shop — offline, the page freezes at the last published state",
            "The link is the only access control: if the customer forwards it, others see that repair (nothing more)",
            "Without the module, LAN tracking keeps working for free — the portal only adds outside access",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    whatsapp: {
      title: "WhatsApp bot",
      subtitle:
        "Customers text the shop's WhatsApp and get the real repair status back — including approving quotes with «YES».",
      sections: [
        {
          heading: "What the bot answers",
          paragraphs: [
            "The bot identifies the customer by phone number and the repair by context. Every message is independent — no login, no menus:",
          ],
          table: {
            head: ["Customer writes", "Bot replies"],
            rows: [
              ["«is it ready?» or any text", "Repair status + expected date"],
              ["«quote» / «price» / «how much»", "Pending quote amount + how to answer"],
              ["YES / accept / ok", "Approves the pending quote — same flow as the counter"],
              ["NO / decline", "Declines the quote"],
              ["Repair code (REP-…)", "Status of that specific job"],
              ["«help» / «human», audio or image", "Escalates to staff — with an in-app notification"],
              ["Number with no record", "Friendly reply with the shop's contacts"],
            ],
          },
          links: [],
        },
        {
          heading: "Without the module",
          paragraphs: [
            "Without the whatsapp-bot module active, the app neither sends nor receives anything on WhatsApp — on any transport (Cloud relay, direct Meta or Evolution). The settings cards stay visible, but clicking them shows “This option only exists in OficinaOS Pro.”",
          ],
          links: [],
        },
        {
          heading: "How it picks the answer",
          paragraphs: [
            "The bot finds the customer record by the last 9 digits of the phone number — robust to +351 prefixes, spaces and different formats. With one active repair, context is obvious and it answers directly; with several, it lists the codes for the customer to pick.",
            "«Active repair» means everything not yet delivered, returned or cancelled — including jobs ready for pickup, which are exactly the ones generating «is it ready?» messages.",
            "What the bot can't solve escalates to people: «help», «human», audio, images and off-pattern questions create an in-app notification with the customer's text — the team replies manually.",
          ],
          links: [],
        },
        {
          heading: "What's needed (Meta)",
          paragraphs: [
            "The module uses Meta's official WhatsApp Business Platform — no workarounds, no ban risk for the shop's number. Requirements:",
          ],
          list: [
            "A Meta app (developers.facebook.com) with the WhatsApp product — the OficinaOS app already exists and is awaiting Meta's approval",
            "The shop's number on WhatsApp Business — coexistence keeps the phone app working while the API connects in parallel",
            "A permanent system-user token with whatsapp_business_messaging + whatsapp_business_management permissions",
            "The webhook pointed at OficinaOS Cloud — already configured on our side",
          ],
          links: [],
        },
        {
          heading: "Setup in the app (per shop)",
          paragraphs: [
            "After Meta onboarding (during the beta we help with this step), the app-side setup is 4 fields:",
          ],
          list: [
            "Menu → Notifications → Setup → WhatsApp section",
            "Business ID + Phone Number ID — provided during onboarding",
            "API Token — the permanent system-user token (the app uploads it once to the Cloud, where it's stored encrypted — sends then go through the relay and the token is never asked for again)",
            "Enable — the app registers the phone_number_id and credentials with the Cloud by itself and the bot goes live",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Bot replies arrive in ~10–15 seconds — the app polls the Cloud message queue on a fast poller, separate from the ~2-minute sync",
            "Replying inside the 24-hour window is free; starting conversations («your repair is ready») outside it goes out as Meta-approved templates — the app creates and submits them automatically and shows each template's status (approved/in review/rejected) in settings; template sends carry Meta's per-message fee",
            "When rules aren't enough, the bot can use AI (Pro): it only sees the customer's public job card (status, ETA, quote — never internal data or other customers) and message content is never logged in the Cloud. «PARAR»/«STOP» withdraws the customer's consent immediately",
            "Flood control: max 20 messages/hour per number — spam protection",
            "Audio and images aren't interpreted — they go to a human",
            "In test mode only Meta-verified numbers get replies — in production there's no such limit",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Alternative: WhatsApp via Evolution (Pro)",
          paragraphs: [
            "For shops that don't want a Meta business account, the app can also talk to a local «Evolution API» gateway — an unofficial transport emulating WhatsApp Web. Sending and receiving are Pro; the reply bot also requires accepting its own disclaimer in settings.",
            "Honest notes: being unofficial, Meta may suspend or ban the number — that risk is the shop's. So the Evolution bot is deliberately conservative: it ignores groups/broadcasts/non-text and numbers with no record, answers at most ~10 times/hour per number with a daily cap, waits 3–8 s showing «typing…» before replying, and suspends itself if the session gets blocked (the owner re-enables by re-accepting the disclaimer).",
          ],
          links: [],
        },
        {
          heading: "If the bot goes quiet",
          table: {
            head: ["Symptom", "What to check"],
            rows: [
              ["Customer gets no reply", "Is the Meta token still valid? (temporary tokens expire in 24h — use a system-user token)"],
              ["Message never reaches the app", "Is the whatsapp-bot module active in the Cloud? Correct phone_number_id in settings?"],
              ["Bot replies but Meta blocks", "In test mode, is the recipient verified? In production, it's the 24h window"],
              ["«YES» does nothing", "Is there a sent, pending quote on that job? (the bot only acts on unanswered quotes)"],
              ["Right quote, wrong reply", "Does the customer record's phone share the same last 9 digits?"],
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
        "The free Windows tool that reads any Android or iPhone over USB — local scans are always free; send-to-shop and AI reports are Pro modules.",
      sections: [
        {
          heading: "Install",
          paragraphs: [
            "Diag ships as a free portable ZIP on GitHub. It isn't on the Microsoft Store yet: the submission is awaiting Microsoft's approval.",
            "Download the zip, extract the whole folder (the exe needs the files next to it) and run OficinaDiag.exe — Windows may show a SmartScreen warning on first run: «More info» → «Run anyway».",
          ],
          links: [
            { label: "Portable ZIP (GitHub)", href: DIAG_ZIP_URL },
            { label: "Source code on GitHub", href: DIAG_REPO_URL },
          ],
        },
        {
          heading: "Language and themes",
          paragraphs: [
            "Diag speaks Portuguese and English — pick the language in Options (⚙), saved next to the exe.",
            "Three themes to choose from: Terminal (the original retro look), Windows 95 and Modern. The choice is saved and applies instantly.",
          ],
          links: [],
        },
        {
          heading: "What the scan reads — free",
          paragraphs: [
            "Plug the phone in over USB and the scan runs 100% on the PC — nothing is sent anywhere:",
          ],
          table: {
            head: ["Data", "Android", "iPhone/iPad"],
            rows: [
              ["Model, serial number, OS version", "✓", "✓"],
              ["Battery — level, temperature, cycles", "✓", "✓"],
              ["Battery — real vs design capacity", "where the manufacturer exposes it", "✓"],
              ["Storage and RAM", "✓", "✓"],
              ["Sensors", "✓", "✓"],
              ["Root / unlocked bootloader", "✓", "—"],
              ["Activation / carrier status", "—", "✓"],
            ],
          },
          links: [],
        },
        {
          heading: "Screen & touch test on the phone",
          paragraphs: [
            "The app serves a test page on the local network: on Android it opens by itself via adb, on iPhone you scan a QR code. The customer runs the color tests and the touch grid on the phone itself.",
            "Results come back to the PC — dead pixels and dead touch zones are recorded in the report. It's the objective screen test that used to be done «by eye».",
          ],
          links: [],
        },
        {
          heading: "Export and history",
          paragraphs: [
            "Every scan can be exported as an HTML report (retro look, printable → PDF to hand to the customer) and as raw JSON with all data.",
            "History stays on the PC (%APPDATA%\\OficinaDiag) — compare a device's battery health over time, useful for warranties and used-device grading.",
          ],
          links: [],
        },
        {
          heading: "Requirements per platform",
          table: {
            head: ["", "Android", "iPhone/iPad"],
            rows: [
              ["On the phone", "Enable «USB debugging» in developer options", "Accept «Trust this computer»"],
              ["On the PC", "Nothing — adb is bundled", "Apple USB driver (iTunes or «Apple Devices» app)"],
              ["Extra", "A data cable (not charge-only)", "Close the Windows Photos app before scanning"],
            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Send to shop — diag-intake module",
          paragraphs: [
            "The customer runs the scan at home, enters the shop code and the diagnostic travels to OficinaOS Cloud, where the shop's app picks it up. In the shop it appears as a request in the Requests queue — a pre-check ready to convert into a repair.",
            "Use cases: pre-diagnosis before the customer visits, evaluating used devices for buy/sell, and grading with objective data (battery cycles, screen, sensors).",
          ],
          links: [],
        },
        {
          heading: "AI report — ai-reports module",
          paragraphs: [
            "With the module active, the raw technical scan data turns into a plain-language report for the customer — «the battery is at 78% of original capacity, replacement recommended».",
            "Generation runs on OficinaOS Cloud with the server key — nothing runs on the customer's PC and the data isn't used to train models.",
          ],
          links: [],
        },
        {
          heading: "Privacy",
          paragraphs: [
            "Scans are 100% local by default — nothing leaves the PC unless the user chooses «Send to shop» or «AI report». The destination is always the OficinaOS server, never third parties.",
            "For troubleshooting, the «Send log» button sends the tail of the diag.log file (app technical lines only) for analysis — also opt-in, nothing automatic.",
          ],
          links: [],
        },
        {
          heading: "If the phone isn't detected",
          table: {
            head: ["Symptom", "What to check"],
            rows: [
              ["Nothing happens when plugging in", "Is it a data cable? (charge-only cables won't work) — try another USB port"],
              ["Android doesn't show up", "«USB debugging» enabled in developer options? Authorization prompt accepted on the phone?"],
              ["iPhone doesn't show up", "«Trust this computer» accepted? Apple driver installed (iTunes/Apple Devices)? Photos app closed?"],
              ["Scan fails halfway", "Keep the phone's screen unlocked and awake during the scan"],
              ["Persistent issues", "File %APPDATA%\\OficinaDiag\\diag.log — or the «Send log» button in the app"],
            ],
          },
          paragraphs: [],
          links: [],
        },
      ],
    },
    sms: {
      title: "SMS channel",
      subtitle:
        "Notifications and the automatic assistant over SMS (Pro module) — via an Android phone with a SIM attached to OficinaOS Cloud, or on the shop's local network.",
      sections: [
        {
          heading: "What the module does",
          paragraphs: [
            "With the SMS channel active, the app uses an Android phone in the shop as a «gateway»: customer notifications (repair ready, quote sent, reminders) go out as SMS over the normal mobile network — and customer replies come into the app and get an automatic answer.",
            "It's the same assistant as WhatsApp, with the same commands — the customer texts «status» and gets the repair progress, texts «quote» and gets the amount, replies YES or NO to approve or decline. The difference: no Meta account, no approved templates, and no internet needed on the customer's phone.",
            "Without the SMS module active, the app neither sends nor receives anything on this channel — on any transport. The settings card stays visible, but clicking it shows “This option only exists in OficinaOS Pro.”",
          ],
          table: {
            head: ["Customer texts", "Bot replies"],
            rows: [
              ["«is it ready?» or any text", "Repair status + due date"],
              ["«quote» / «price»", "Pending quote amount + how to answer"],
              ["YES", "Approves the pending quote — same flow as at the counter"],
              ["NO", "Declines the quote"],
              ["Repair code (REP-…)", "Status of that specific job"],
              ["Number with no job on file", "Friendly message with the shop's contacts"],
            ],
          },
          links: [],
        },
        {
          heading: "Choosing the transport — two paths (both Pro)",
          id: "choosing-the-transport-three-paths",
          paragraphs: [
            "Both transports need the SMS module (Pro) — without it the app neither sends nor receives. The difference is the path the SMS take:",
          ],
          table: {
            head: ["Transport", "Cost", "Sending", "Customer replies", "Best for"],
            rows: [
              ["Android attached to Cloud", "SMS module + the shop SIM's tariff", "✅ — even with the PC off", "✅ — replies and reports via Cloud; one phone can serve several shops", "Most shops — and owners with several shops"],
              ["Android on the local network (fallback)", "SMS module + the shop SIM's tariff", "✅ — through the shop PC", "Inbound via Cloud when configured", "Shops with no Cloud-attached phone, or as a backup"],
            ],
          },
          links: [],
        },
        {
          heading: "Android transport — what you need",
          list: [
            "The SMS module (Pro) active — without it the app neither sends nor receives messages",
            "An Android phone — an old one is fine; it stays in the shop permanently",
            "An active SIM card — ideally with SMS bundled in the plan (message cost is the carrier's)",
            "The free «SMS Gateway for Android» app (sms-gate.app), from the Play Store or the official site",
            "For the Cloud path: the phone with internet access; for the local path: the phone and the OficinaOS PC on the same Wi-Fi/LAN",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Android attached to Cloud (Pro)",
          paragraphs: [
            "With the SMS module active, the same Android phone can attach to OficinaOS Cloud instead of the shop PC: in the «SMS Gateway for Android» app use Cloud/Private Server mode with the details the app shows in settings (server URL, device user and password). From then on the Cloud delivers outbound SMS straight to the phone — sending and customer replies keep working even with the shop PC off, and the app collects everything when it comes back (a ~12-second poller).",
            "One device can serve several shops of the same owner: the Cloud keeps a routing table (SmsRoute) that decides which shop each reply belongs to — first by the REP-… code in the message, then by the shop that last messaged that number, and finally the default shop.",
            "«Shop closed»: if the app has been offline for more than ~5 minutes when an SMS arrives, the Cloud auto-replies “We received your message. The shop will reply as soon as it opens.” (max. 1 per number every 12 h).",
          ],
          links: [
            { label: "SMS Gateway for Android (official site)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Delivery reports (Cloud transport only)",
          paragraphs: [
            "Every SMS sent via Cloud gets a status event from the phone (sent/delivered/failed), which the Cloud forwards to the app — the notification outbox entry (Notifications → Outbox) moves from «Sent» to «Delivered», or to «Failed» with the carrier's reason. That's how you know the customer actually received the message.",
          ],
          links: [],
        },
        {
          heading: "Setup — step by step",
          id: "setup-step-by-step-5-minutes",
          paragraphs: [
            "1. On the Android phone, install «SMS Gateway for Android» (sms-gate.app) from the Play Store or the official site.",
            "2. Cloud path (recommended — sending and receiving, even with the PC off): attach a device in your OficinaOS Cloud account and, on the phone app, use Cloud/Private Server mode with the details OficinaOS shows in Notifications → Channels → «SMS Pro» block — including the webhook URL to register in the phone app for customer replies.",
            "3. Local network path (sending, as fallback): in the phone app enable «Local Server» — it shows the local address (e.g. 192.168.1.50:8080), a username and a password. The phone and the PC must be on the same Wi-Fi.",
            "4. In the OficinaOS app: Menu → Notifications → Channels → SMS section — in local mode, fill the «Gateway URL» (http:// + address), the phone's username and password, and save.",
            "5. Press «Send test SMS», enter your own number and confirm the message arrives.",
          ],
          links: [
            { label: "SMS Gateway for Android (official site)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "Keeping the gateway reliable",
          list: [
            "Keep the phone always on the charger — it is the gateway; powered off, no SMS goes out",
            "In Android settings, exclude «SMS Gateway» from battery optimization (Battery → Optimization → «Don't optimize») so Android doesn't suspend it",
            "In the shop router, reserve the phone's IP (DHCP reservation) — if the IP changes, the configuration points at the wrong place",
            "If the shop has a separate guest Wi-Fi, the phone must be on the main network — the same one as the PC",
            "Quick health check: the app calls GET /health on the gateway on each send; if it fails, the notification stays queued and retries",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Privacy — what leaves and what stays",
          paragraphs: [
            "On the local-network transport, sending is direct — the app talks to the phone gateway with no intermediaries. Customer replies are received through OficinaOS Cloud (the phone forwards the SMS it gets) — without that link this transport has no inbound. The SMS itself always travels over the carrier's mobile network, like any SMS.",
            "On the Cloud transport, device credentials and message text pass through OficinaOS Cloud (it is what sends and receives) — credentials are stored encrypted (AES-256-GCM) and message bodies are never logged. The local gateway password is stored encrypted in the app and never shown again in the fields — you can only replace it.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Flood control: max 20 messages per hour per number — protects against accidental spam",
            "Per-SMS cost comes from the shop SIM's plan — bundled SMS makes the marginal cost zero, but confirm with the carrier",
            "SMS with accents (ç, ã, é…) count against more of the 160-character limit — keep templates short",
            "Intensive automated use may breach the plan's fair-use policy — the module is for notifications and replies, not mass campaigns",
            "SMS isn't WhatsApp: no images, no buttons, plain text — but it works on any phone, even the oldest",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Troubleshooting",
          table: {
            head: ["Symptom", "What to check"],
            rows: [
              ["Test SMS doesn't arrive", "Correct URL (http:// + IP:port)? Destination number with country code (e.g. +351…)? SMS credit on the SIM?"],
              ["«Gateway connection failed»", "Is the phone powered on and on the same Wi-Fi as the PC? Has its IP changed (check the phone app)?"],
              ["Authentication error", "Username and password exactly as shown in the phone app (it generates them, you don't choose them)"],
              ["Customer replies and nothing happens", "On the Cloud path: is the webhook URL registered in the phone app? Does the device show as connected in the «SMS Pro» block? Is the SMS module active?"],
              ["It worked and stopped", "Did Android battery optimization suspend the app? Did the phone's IP change?"],
            ],
          },
          paragraphs: [],
          links: [],
        },
        {
          heading: "Security",
          list: [
            "Never expose the gateway port (e.g. 8080) to the internet — it's for the shop's internal network only",
            "Keep the phone and PC on the shop's trusted network — not the customer/guest Wi-Fi",
            "If you swap the phone or SIM, redo the configuration — on the Cloud path, also register the webhook URL in the new phone's app",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    invoicing: {
      title: "Certified invoicing",
      subtitle:
        "Legal invoices and invoice-receipts issued straight from the sale or the repair — via InvoiceXpress, on the shop's own account and API key.",
      sections: [
        {
          heading: "Portugal only",
          paragraphs: [
            "The module issues documents through InvoiceXpress, a certified invoicing service for Portugal, and the VAT rates available in the app are mainland Portugal's (IVA23, IVA13, IVA6 and IVA0). Shops in other countries, including Spain, can't use this module for legal invoicing yet.",
          ],
          links: [],
        },
        {
          heading: "What the module does",
          paragraphs: [
            "With invoicing active, every POS sale and every delivered repair gets an «Issue document» button. The app sends the data to InvoiceXpress and the tax document comes out numbered and certified — an invoice-receipt when the customer has a tax number, a simplified invoice («final consumer») when they don't.",
            "The document permalink is saved on the record — you can open the official InvoiceXpress PDF from the app and hand it to the customer.",
          ],
          table: {
            head: ["Situation", "Document issued"],
            rows: [
              ["Customer with tax number on file", "Invoice-receipt (FR) — full document"],
              ["Customer without tax number", "Simplified invoice (FS) — «final consumer»"],
              ["POS sale", "Document listing the sold items"],
              ["Delivered repair", "Document listing the repair lines and parts"],
            ],
          },
          links: [],
        },
        {
          heading: "What you need",
          list: [
            "The shop's own InvoiceXpress account (their service has its own cost — separate from OficinaOS)",
            "The account API key — created in the InvoiceXpress settings",
            "The shop's default VAT rate — IVA23, IVA13, IVA6 or IVA0",
            "The invoicing module active on the OficinaOS Cloud account (during beta, we enable it)",
          ],
          paragraphs: [],
          links: [
            { label: "InvoiceXpress (official site)", href: "https://invoicexpress.com" },
          ],
        },
        {
          heading: "Setup — step by step (~5 minutes)",
          paragraphs: [
            "1. In InvoiceXpress, log into the shop's account and generate an API key (in the account's API settings).",
            "2. In OficinaOS: Settings → Cloud tab → “Invoicing (InvoiceXpress)” section (shown once the app is paired and the module is active).",
            "3. Under «InvoiceXpress account» type the account subdomain — whatever appears before .app.invoicexpress.com.",
            "4. Paste the API key and pick the default VAT rate (e.g. IVA23).",
            "5. Switch on «Enable invoicing» and save.",
            "6. Test with a small sale or repair and confirm the document shows up in InvoiceXpress.",
          ],
          links: [],
        },
        {
          heading: "Prices include VAT",
          paragraphs: [
            "Shop prices are final (VAT already included). The app computes each line's net amount from the configured rate and sends it to InvoiceXpress — the document total matches what the customer paid.",
          ],
          links: [],
        },
        {
          heading: "Privacy — what leaves and what stays",
          paragraphs: [
            "The API key is stored encrypted (AES-256) on the shop PC and is never shown again — only replaced. The app talks directly to InvoiceXpress: documents and tax data never pass through the OficinaOS Cloud — the Cloud only confirms the module is active.",
            "Issuing a document is irreversible (it's a numbered legal document) — the app blocks double-issuing the same sale or repair.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Requires the shop's own InvoiceXpress account — that service's cost belongs to the shop, separate from OficinaOS",
            "Portugal only: InvoiceXpress and the available VAT rates are Portuguese — in other countries the module does not issue valid tax documents",
            "Issued documents aren't deleted by the app — cancellations/credit notes are done in InvoiceXpress",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    storefront: {
      title: "Online storefront",
      subtitle:
        "A public page with items from your catalogue — customers see the price and reserve, and the reservation lands in the app as a request.",
      sections: [
        {
          heading: "What the module does",
          paragraphs: [
            "The app sends the items you mark as “listed online” to OficinaOS Cloud, which shows them on the shop's public page (cloud.oficinaos.app/loja/<address>). Each item shows its name, category and price; out-of-stock items drop off the page.",
            "The customer picks an item and reserves it with their name, phone and an optional note. The reservation reaches the app on the next sync and lands in the Requests queue (“Reserva loja online: …”), with a notification to the owner and front desk. There's no online payment: the sale happens in the shop.",
          ],
          links: [],
        },
        {
          heading: "Switch it on and publish",
          list: [
            "Pair the app with OficinaOS Cloud (Settings → Cloud tab) and have the storefront module active (during the beta, we switch it on)",
            "Settings → Cloud tab now shows an “Online store” section: choose the page address, a short description and the public contact email",
            "Turn on “Published” and save — the page link appears at the top of the section",
            "The address and phone shown on the page come from the shop settings",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Choosing the items",
          paragraphs: [
            "In the parts inventory, edit the item and turn on “List on the online store”. The price shown is the catalogue unit price. When stock changes (POS sales, parts used in repairs, stock movements), the page updates on the next sync (up to ~2 minutes).",
          ],
          links: [],
        },
        {
          heading: "Customisation — storefront-plus module",
          list: [
            "Page accent colour",
            "Shop logo (PNG, JPEG or WebP, up to 200 KB)",
            "Two layouts: Showcase (cards) or Compact (list)",
          ],
          paragraphs: [
            "Without this module, the page uses the default look.",
          ],
          links: [],
        },
        {
          heading: "Privacy — what leaves and what stays",
          paragraphs: [
            "The Cloud receives the listed items (name, category, price and whether in stock) and the shop's public contacts. Reservations — the customer's name, phone and note — are stored on the Cloud and delivered to the app.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Up to ~2 minutes between changing the catalogue and the page updating",
            "Reservations only: no payment or shipping",
            "Up to 500 listed items",
            "The page only shows whether an item is in stock, not the quantity",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    market: {
      title: "Parts wanted",
      subtitle:
        "A shared board between OficinaOS shops: post the part you need, or reply “I have it” to other shops' requests.",
      sections: [
        {
          heading: "How it works",
          paragraphs: [
            "In the menu, “Procuro-peça” (parts wanted) opens the board with other shops' open requests, and the “My requests” tab shows yours. Other shops only see your shop's name and the request.",
            "A shop that has the part presses “I have it” and sends a reply with a note, price and contact. Only the shop that posted the request sees the replies. The deal is settled directly between shops, outside OficinaOS.",
          ],
          links: [],
        },
        {
          heading: "Posting a request",
          list: [
            "“New request” → what you're looking for (e.g. iPhone 12 screen)",
            "Part type and condition (any, new, OEM/original or used)",
            "Brand, model, maximum price and notes — optional",
            "Once you've found the part, press “Found it”; or “Close” to withdraw the request. A closed request can't be reopened — post a new one",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "What you need",
          list: [
            "The app paired with OficinaOS Cloud",
            "The market module active on the account (during the beta, we switch it on)",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "The board shows the 100 most recent open requests",
            "Up to 30 requests and 60 replies per hour, per shop",
            "No payments or guarantees on the platform — confirm the part directly with the other shop",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    marketPrices: {
      title: "Market prices",
      subtitle:
        "Compare your repair and part prices with the anonymous median of other OficinaOS shops.",
      sections: [
        {
          heading: "What it shows",
          paragraphs: [
            "Under “Market prices” (menu), each row shows an item with the market median, the range (minimum–maximum) and how many shops contributed. When the name matches an item in your catalogue, “Your price” appears too. You can filter by repairs or parts.",
            "A benchmark only appears once at least 3 shops share a price for the same item.",
          ],
          links: [],
        },
        {
          heading: "Sharing your prices (optional)",
          paragraphs: [
            "Turning on “Share your prices anonymously” sends the Cloud the name, category and price of the active items in your repair and parts catalogues. Whenever the catalogue changes, it's sent again and replaces the previous copy.",
            "Turning sharing off deletes every price the shop sent from the Cloud. You can view the benchmarks without sharing.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Items are matched by name (ignoring accents, case and punctuation) — different names for the same repair aren't grouped",
            "With few shops, the ends of the range are real prices from specific shops (without saying which)",
            "Needs the app paired and the market-prices module active",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    multiShop: {
      title: "Multi-shop",
      subtitle:
        "For owners of more than one shop: revenue and repairs from all of them, side by side, on the OficinaOS Cloud dashboard.",
      sections: [
        {
          heading: "How it works",
          paragraphs: [
            "Each shop keeps its own OficinaOS install, with its data on the shop's PC. With the module active, each install sends the Cloud a daily summary of totals only, and the owner sees them together by signing in at cloud.oficinaos.app.",
            "During the beta, we link additional shops to your account; each shop then pairs its app with a code generated on the dashboard.",
          ],
          links: [],
        },
        {
          heading: "What the dashboard shows",
          list: [
            "Revenue over the last 7 and 30 days, across all shops",
            "Repairs delivered in the last 30 days and repairs in progress",
            "A chart of daily revenue over the last 30 days",
            "A per-shop table: revenue, repairs, sales, in progress and last sync",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "What leaves the shop",
          paragraphs: [
            "Numbers only, per day: revenue (payments for sales and repairs), repairs opened and delivered, number and value of sales, repairs in progress and new customers. Names, contacts and individual repairs never leave. It's sent on every sync (~2 minutes) and also recalculates the previous day.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "“Delivered” counts repairs in Delivered status whose last change was that day — an approximation",
            "A shop whose app is off sends nothing until it's back on",
            "The dashboard is in Portuguese",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    remarketing: {
      title: "WhatsApp remarketing",
      subtitle:
        "An automatic message from the shop's WhatsApp to customers whose last repair was a while ago.",
      sections: [
        {
          heading: "Who receives it",
          list: [
            "Customers who agreed to automatic messages (consent on the customer record)",
            "With at least one delivered repair, the latest more than the set number of days ago (90 by default)",
            "Who haven't received this message within the set minimum gap (180 days by default)",
          ],
          paragraphs: [
            "The app checks every hour and sends at most 10 messages per run.",
          ],
          links: [],
        },
        {
          heading: "What you need",
          list: [
            "WhatsApp set up in the app (Business ID, Phone Number ID and token) — the same as the WhatsApp bot",
            "A message template created and APPROVED in your Meta Business account, in Portuguese (pt)",
            "The remarketing module active on the OficinaOS Cloud account (during the beta, we switch it on)",
          ],
          paragraphs: [],
          links: [{ label: "WhatsApp bot guide", href: "/en/docs/whatsapp/" }],
        },
        {
          heading: "Setting it up",
          paragraphs: [
            "Menu → Notifications → Channels → WhatsApp section → automatic remarketing. Set the idle days, the minimum gap between messages and the Meta template name (oficinaos_remarketing by default).",
            "The template gets two variables: {{1}} is the customer's first name and {{2}} the shop's name. The app suggests a Portuguese body along the lines of: “Hi {{1}}! It's been a while since your last repair at {{2}}. If your device needs attention, we're here to help.”",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "These are shop-initiated messages: Meta charges for each template message — Meta's cost, not ours",
            "WhatsApp only, not SMS",
            "The template is always sent in Portuguese (pt)",
            "If a send fails (e.g. template not approved), that customer is only retried after the minimum gap",
            "The app must be running for the checks to happen",
          ],
          paragraphs: [],
          links: [],
        },
      ],
    },
    aiAnalyst: {
      title: "AI Analyst",
      subtitle:
        "Questions about your shop's data in natural language — the analyst answers by reading the local database, using the shop's own AI key.",
      sections: [
        {
          heading: "What the analyst does",
          paragraphs: [
            "It's a chat inside the app: you write a question in everyday language and the analyst answers by querying the shop's database in real time. For data questions, the model generates read-only SQL and runs it against the local database — the answer comes from real numbers, not a stale summary.",
            "Examples of what you can ask:",
          ],
          list: [
            "\"How many repairs did we close this week and what's the average value?\"",
            "\"Which parts are below minimum stock?\"",
            "\"Show quotes pending for more than 5 days\"",
            "\"Which technician has the most deliveries this month?\"",
          ],
          links: [],
        },
        {
          heading: "What leaves the shop — and where it goes",
          paragraphs: [
            "The analyst isn't a Pro module — it's a core feature, free, and OficinaOS Cloud sees none of it. Your questions and the data needed to answer go straight from the app to the AI provider the shop configured (OpenAI, Google Gemini, Mistral or a custom endpoint). The API key belongs to the shop, is stored encrypted in the app and is never shown again.",
            "Because answers can include customer data (names, phones, repair history), analyst access is restricted to the owner profile — other profiles don't see the module. For your GDPR records, the provider you choose is the sub-processor: for European data, an EU endpoint or one with adequate clauses is the easiest choice to justify.",
          ],
          links: [],
        },
        {
          heading: "Set up (once)",
          paragraphs: [
            "1. Get an API key from the chosen provider (OpenAI, Gemini, Mistral — or an OpenAI-compatible endpoint, such as a local instance).",
            "2. In the app: Settings → AI Analyst. Pick the provider or \"Custom\" and enter the endpoint if needed.",
            "3. Paste the API key and pick the model — small models (e.g. gpt-4o-mini) handle most questions and cost cents a month for a typical shop.",
            "4. Enable the module. Only the owner profile can see and configure the analyst — if another profile needs it, that's your call and it lives in Permissions.",
          ],
          links: [],
        },
        {
          heading: "Day to day — chat, memories and instructions",
          paragraphs: [
            "Every conversation is saved to history and can be resumed or deleted (individually or in bulk). Two tools tune the behaviour without code:",
          ],
          list: [
            "Memories (up to 20 active): facts the analyst should always remember — \"our VAT is 23%\", \"we work with these three brands\"",
            "Instructions (up to 10 active): house rules — \"always answer in European Portuguese\", \"money values in euros with two decimals\"",
          ],
          links: [],
        },
        {
          heading: "Privacy and security on the inside",
          paragraphs: [
            "The SQL the model generates doesn't run with the app's credentials: the app provisions a dedicated read-only Postgres role (analyst_ro_…) — a write attempt fails at the database, not just at validation. If the role isn't provisioned, the data tool refuses instead of falling back to a privileged connection.",
            "In practice: the analyst reads, it doesn't write — it can't change repairs, prices or customers. Still, treat answers as a starting point: for numbers that drive decisions (cash closing, margins), confirm in Reports.",
          ],
          links: [],
        },
        {
          heading: "Honest limits",
          list: [
            "Read-only — it takes no actions and changes no data",
            "Answer quality is data quality: incomplete records give incomplete answers",
            "Small models get complex SQL wrong — very elaborate questions may need rephrasing",
            "The cost is on the shop's key — the provider bills per use (check their pricing)",
            "No internet, no analyst — the provider endpoint has to be reachable",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "If the analyst doesn't answer",
          paragraphs: [
            "In order of likelihood:",
          ],
          list: [
            "Module off — Settings → AI Analyst, check \"Enabled\"",
            "Invalid or out-of-credit API key — the provider error shows in the chat; validate the key in the provider console",
            "Wrong model name — under \"Custom\" the name must match the provider's exactly",
            "Unreachable endpoint — on installs without internet or behind a restrictive firewall, the provider can't be reached",
            "Read-only role not provisioned — the app log shows a provisioning warning; an app restart fixes most cases",
          ],
          links: [],
        },
      ],
    },
    ponto: {
      title: "Time clock",
      subtitle:
        "Staff hours tracking over WhatsApp and SMS — a fixed QR code in the shop, commands proven by location on WhatsApp and an hours dashboard for labour inspections.",
      sections: [
        {
          heading: "How it works",
          paragraphs: [
            "The shop prints a fixed QR code (in Settings) and puts it by the door. The worker scans the QR — it opens a page with a single-use code — and sends the message to the shop's WhatsApp number, the same number as the Pro channels. The bot asks for their location and records the punch.",
            "The time is always the server's — never the one written in the message or the phone's. Over WhatsApp, no location means no record; over SMS (only for workers marked «no WhatsApp») the record is always pending review.",
          ],
          table: {
            head: ["The worker writes", "What gets recorded"],
            rows: [
              ["ENTRADA (after the QR)", "Valid code + location inside the shop radius (100 m by default, configurable) → approved; outside the radius → pending review"],
              ["PAUSA / VOLTEI / SAIDA", "Location only — that day's entry already proved who it is; outside the radius → pending review"],
              ["ESTADO", "Today's and this week's hours, plus that worker's records pending review"],
              ["External workers (sales reps, field technicians)", "Location + photo, no radius; auto-approved by default — the shop can switch to «pending review»"],
              ["SMS", "The same commands as text; always pending review — SMS carries no location"],
            ],
          },
          links: [],
        },
        {
          heading: "What you need",
          list: [
            "At least one active Pro receiving channel — WhatsApp (official or Evolution) or SMS; the time clock doesn't receive messages on its own",
            "The ponto module active on the OficinaOS Cloud account (during the beta, we switch it on)",
            "The app paired with the Cloud (Settings → Cloud tab)",
            "Each worker's phone registered in Settings — internal, external or «no WhatsApp»",
          ],
          paragraphs: [],
          links: [
            { label: "WhatsApp bot guide", href: "/en/docs/whatsapp/" },
            { label: "SMS channel guide", href: "/en/docs/sms/" },
          ],
        },
        {
          heading: "The dashboard — from «who's in» to the month's hours",
          paragraphs: [
            "The «Time clock» menu shows who's working and what needs attention:",
          ],
          list: [
            "Now — who's in, who's on break, who's left",
            "Pending review — each record with map, radius, photo, time and reason; approve or reject with a note",
            "Hours — by day, week and month, with lateness and overtime",
            "Missing punches — forgotten clock-outs: the bot asks the worker over WhatsApp or SMS; with no answer within 60 minutes, the owner and front desk get an in-app alert",
            "Export — PDF or Excel by period and worker, for the accountant and labour inspections, with corrections visible",
          ],
          links: [],
        },
        {
          heading: "A record that can't be erased",
          paragraphs: [
            "Every record is a new line that is never edited or deleted — a correction is another line pointing at the original. The history is kept for 5 years (Portuguese Labour Code, art. 202), open to labour inspections, and the worker can request their own records.",
            "External proof photos are deleted automatically after 90 days — the record stays, marked «photo expired».",
          ],
          links: [],
        },
        {
          heading: "GDPR and labour law — what the shop must do",
          paragraphs: [
            "The module helps the shop comply with labour law — it doesn't guarantee compliance: the decision and the responsibility are the shop's. In practice:",
          ],
          list: [
            "Inform workers in writing — Settings has a printable template for signature",
            "Location only at the moment of recording — never continuous; no biometrics",
            "External photos are kept 90 days; records, 5 years",
            "Consider a data protection impact assessment (DPIA) before switching on — tracking workers' location deserves extra care",
          ],
          links: [],
        },
        {
          heading: "Settings — switch on, QR and workers",
          paragraphs: [
            "Everything is configured in Settings: enable the module, mark the shop's location on a map and the radius (100 m by default), print the QR as PDF, register workers' phone numbers and post the workers' information text.",
          ],
          links: [],
        },
      ],
    },
  },
  updates: {
    title: "What's new",
    subtitle:
      "What's changed in OficinaOS — new features, improvements and Pro modules. Updated with every release.",
    free: "Free",
    pro: "Pro",
  },
  seoPage: {
    metaTitle: "Repair shop management software — free, no monthly fees",
    metaDesc:
      "Free management software for phone repair shops: check-ins, quotes approved on the customer's phone, stock, POS and backups. Runs on the shop's own PC.",
    badge: "Open source · Made in Portugal",
    title: "Management software for phone repair shops",
    subtitle:
      "The free app that replaces paper, spreadsheets and \"is it ready yet?\" phone calls — built for independent repair shops.",
    ctaTitle: "Ready to try it?",
    ctaText:
      "Download, install on the shop PC and do your first check-in today. No account, no card, no monthly fees.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "OficinaOS covers the whole day of a repair shop — from the moment a customer walks in until they pick up the device:",
        ],
        list: [
          "Repair check-in with brand, model, IMEI, condition and accessories left behind",
          "Quotes with parts and labour — the customer approves or declines on their own phone",
          "Public tracking page: the customer sees live status without calling the shop",
          "Stock management with reorder alerts and per-part history",
          "POS / till for accessories and payments (cash, card, MB Way)",
          "Revenue, margins and average repair time on a daily dashboard",
          "Automatic SMS to the customer when the repair is ready (Pro module, via an Android phone)",
          "Automatic daily database backups",
        ],
      },
      {
        heading: "Free, no asterisks",
        paragraphs: [
          "Most repair shop software charges monthly per seat or per technician. OficinaOS is open source (MIT licence): the full app — repairs, quotes, stock, POS, backups — is free forever, for one shop or ten workstations.",
          "Optional Pro modules (cloud customer portal, WhatsApp bot, online storefront, market prices, multi-shop) are part of OficinaOS Pro, an optional all-inclusive plan, for shops that need them. The core you use every day is never behind a paywall.",
        ],
        links: [
          { label: "Source code on GitHub", href: "https://github.com/braindeadpt/OficinaOS" },
          { label: "Pro modules", href: "/en/#pro" },
        ],
      },
      {
        heading: "Your customers' data stays in your shop",
        paragraphs: [
          "The app runs on the shop's PC and keeps everything in a local database. No telemetry, no mandatory account, and customer data — names, phones, repair history — never leaves the shop network unless you enable a Pro module.",
          "For most shops this settles most of GDPR: no subprocessors, no international transfers, and if the internet goes down the shop keeps working.",
        ],
        links: [{ label: "Privacy policy", href: "/en/privacy" }],
      },
      {
        heading: "Compared to what you use today",
        paragraphs: [],
        table: {
          head: ["", "Paper and spreadsheets", "Subscription software", "OficinaOS"],
          rows: [
            ["Cost", "'Free' but expensive in lost time", "€20–60/month per seat", "Free (MIT)"],
            ["Customer tracks the repair?", "No — they call the shop", "Sometimes, paid", "Yes, free public page"],
            ["Where data lives", "In a drawer / a file", "In the vendor's cloud", "On your shop PC"],
            ["Works without internet", "Yes", "Usually no", "Yes"],
            ["In your language", "—", "Rarely", "UI and help in EN, PT, ES"],
          ],
        },
      },
      {
        heading: "Up and running in an afternoon",
        paragraphs: [
          "On Windows 10/11 just run the installer: it sets everything up, creates the service and leaves a tray icon. The other devices in the shop — phones, tablets, the front-desk PC — just open the local address in a browser, nothing to install.",
          "Alternatively, the portable package runs from a folder (even a USB stick) with no installation, and there's a Docker image for Linux and macOS.",
        ],
        links: [
          { label: "Step-by-step install guide", href: "/en/docs" },
          { label: "News and releases", href: "/en/updates" },
        ],
      },
    ],
  },
  home: {
    fork: {
      title: "Do you run a repair shop?",
      yesLabel: "Yes, I run a repair shop",
      yesTitle: "OficinaOS: the free software for your shop",
      yesText: "Repairs, quotes, customers, stock and till in one program, free. And, whenever you like, OficinaOS Pro connects you to your customers on WhatsApp and by SMS.",
      yesCta: "See how it works",
      yesPro: "Discover OficinaOS Pro",
      noLabel: "No, I run another kind of business",
      noTitle: "Modules for any business",
      noNote: "Coming soon for every business — you can already join the waiting list.",
    },
    hero: {
      title: "Every repair organised, from drop-off to pick-up.",
      subtitle:
        "Free, open-source software for independent technicians, repair shops and resellers. Check-in, quotes, stock and till on your own PC — and customers follow their repair on their phone instead of calling.",
      ctaWin: "Download for Windows",
      ctaDesktop: "Install with Docker",
      ctaMobile: "See how to install",
      ctaSecondary: "See how it works",
      noteWin: "Free · Windows 10/11 · guided install",
      noteDesktop: "Linux and macOS with Docker · or install on a Windows PC",
      noteMobile: "It installs on a Windows PC; then your phone opens it in the browser.",
      trust: ["Open source (MIT)", "Works without internet", "Your data stays on your PC"],
      versionLabel: "Version",
      frameTitle: "Repairs",
      frameCaption:
        "OficinaOS repair list recreated in HTML with sample data: the iPhone 13 repair goes from «In repair» to «Ready» and the customer is notified.",
      toast: "Customer notified: «Your iPhone 13 is ready.»",
    },
    tour: {
      title: "From drop-off to pick-up, in five steps",
      lead: "The same flow works for a shop with a counter, a technician working alone, or a reseller taking in devices from other professionals.",
      stepLabel: "Step",
      steps: [
        {
          title: "The customer walks in",
          text: "A new ticket in seconds: name, contact and device. Returning customers and resellers show up straight away, with their history.",
        },
        {
          title: "IMEI and device condition",
          text: "Record the IMEI or serial number, the accessories left with it and the condition it arrived in. The customer signs and it's all searchable.",
        },
        {
          title: "Quote approved on their phone",
          text: "Parts and labour in a quote the customer approves or declines on the tracking page — with a timestamp.",
        },
        {
          title: "Repair",
          text: "Clear statuses for whoever is at the bench, an assigned technician and parts taken out of stock. The customer sees progress without calling.",
        },
        {
          title: "Pick-up and receipt",
          text: "Payment at the till and a receipt with a tracking QR code and warranty. Certified invoices with the Pro module (InvoiceXpress, Portugal only).",
        },
      ],
      ui: {
        intake: {
          title: "New repair",
          fields: [
            ["Customer", "Anna Marsh"],
            ["Phone", "07700 900123"],
            ["Device", "iPhone 13 · 128 GB"],
            ["Problem", "Cracked screen, touch fails at the bottom"],
          ],
          hint: "Returning customer · 3 previous repairs",
        },
        device: {
          imeiLabel: "IMEI",
          accessoriesLabel: "Left with the device",
          accessories: ["Case"],
          conditionLabel: "Condition on arrival",
          condition: "Shattered screen · scratches on the back",
          signature: "Signed by the customer",
        },
        quote: {
          title: "Quote",
          lines: [
            ["OLED screen (compatible)", 109],
            ["Labour", 20],
          ],
          total: "Total",
          approved: "Approved by the customer",
          when: "Today, 11:02 · on the tracking page",
        },
        repair: {
          times: ["10:42", "11:05", "15:30"],
          tech: "Technician",
          techName: "Rui",
          stockLabel: "iPhone 13 screen (OLED)",
          stockUnit: "in stock",
        },
        receipt: {
          title: "Receipt",
          line: "Repair R-2614 · iPhone 13",
          paid: "Paid · card",
          warranty: "Tracking QR and warranty",
          invoice: "Certified invoice (Pro)",
        },
      },
    },
    video: {
      title: "Rather watch?",
      lead: "The whole flow in one minute: check-in, quote and approval on the customer's phone.",
      play: "Play the demo video (1 min)",
      youtube: "Narrated presentation on YouTube (Portuguese)",
    },
    ecosystem: {
      title: "A family of tools built around the bench",
      lead: "OficinaOS started as repair management and it's growing: cable diagnostics, online modules and a marketplace between professionals. The core stays free.",
      listLabel: "OficinaOS products",
      os: {
        title: "Repairs, customers, stock and till",
        text: "Free forever, open source and installed on your PC. For your team's PC, tablet and phone.",
      },
      diag: {
        title: "Cable diagnostics, with a report",
        text: "Free Windows app that reads Android and iPhone over USB: battery, screen, sensors and storage.",
        battery: "Battery health",
        cycles: "cycles",
      },
      pro: {
        title: "Online modules, powered by the Cloud",
        text: "Customer portal, WhatsApp, invoicing and an online storefront. Optional, switched on one by one.",
        bubble: "Hi Anna, your iPhone 13 is ready. You can pick it up until 7 pm.",
        via: "via OficinaOS Cloud",
      },
      trade: {
        title: "Buying and selling between professionals",
        text: "Parts, lots and devices between verified technicians, repair shops and resellers.",
        rows: [
          ["iPhone 13 OLED screens · lot of 5", "Lisbon"],
          ["Galaxy S22 for parts", "Porto"],
        ],
        price: "Price for professionals",
      },
    },
    privacy: {
      title: "Your data stays with you",
      lead: "OficinaOS runs on your PC or your own server, with no telemetry and no account required. Nothing leaves unless you switch it on.",
      localTitle: "On your PC",
      local: ["Customers and contacts", "Repairs and history", "Stock, sales and till", "Automatic backups"],
      optionalTitle: "Only if you switch it on",
      optional: ["OficinaOS Cloud (Pro modules)", "WhatsApp and SMS messages", "AI reports", "Remote access (Cloudflare)"],
      points: [
        ["Self-hosted", "Windows installer or Docker on your own server. Works on the local network, even offline."],
        ["Open source", "MIT licence: you can read, audit and change everything the app does."],
        ["GDPR without surprises", "Every optional module declares what it sends and where, ready for your records of processing."],
      ],
      link: "See what leaves, module by module",
    },
    changelog: {
      title: "What's new",
      lead: "What changed in the latest releases.",
      all: "See all updates",
    },
    cta: {
      title: "Install today and log your first repair",
      lead: "No account, no card, no monthly fees. If Windows shows a warning, the download page explains what to do.",
      docker: "Install with Docker",
      portable: "Portable version",
      guide: "Installation guide",
      published: "released on",
    },
  },
  download: {
    metaTitle: "Download OficinaOS — Windows and Docker",
    metaDesc:
      "Download the latest OficinaOS for Windows 10/11, verify the SHA-256 and see how to get past the SmartScreen warning. Docker alternative for Linux and macOS.",
    title: "Download OficinaOS",
    lead: "Free and open source. Install it on a Windows PC or on a server with Docker — then your team opens the app in the browser of any PC, tablet or phone on the network.",
    latest: "Latest version",
    published: "released on",
    unknownVersion: "The latest version is always on GitHub.",
    starting: "Your download should start in a few seconds. If it doesn't, use the «Download» button.",
    winTitle: "Windows 10 and 11",
    winText: "Guided installer: it sets up the service, opens the firewall and adds a tray icon. No Docker needed.",
    winButton: "Download",
    winReq: "Windows 10/11 64-bit · asks for admin once",
    checksumTitle: "Verify the file (SHA-256)",
    checksumText: "After downloading, compare the output of this PowerShell command with the value below. If they match, the file is exactly the one published on GitHub.",
    checksumMissing: "We couldn't read this version's checksum when the site was published. The .sha256 files sit next to each release on GitHub.",
    copy: "Copy",
    copied: "Copied",
    stepsTitle: "After downloading",
    steps: [
      {
        title: "Open OficinaOS-Setup.exe",
        text: "It's in your Downloads folder. Double-click it.",
      },
      {
        title: "If Windows says «Windows protected your PC»",
        text: "Click «More info» and then «Run anyway». The warning shows because the installer isn't digitally signed yet, so Windows doesn't recognise it. It's not a virus: all the code is on GitHub and you can verify the file with the SHA-256.",
      },
      {
        title: "Accept the administrator prompt",
        text: "Only once, to install the service, the firewall rule and the backup task. Everything else is automatic.",
      },
      {
        title: "Sign in to the app",
        text: "At the end your browser opens http://localhost:4000. On first access the app shows the initial setup screen — you create the admin user and password. On other devices on the network: http://oficinaos.local:4000.",
      },
    ],
    smartscreen: {
      caption: "Recreation of the Microsoft Defender SmartScreen warning in two steps: first «More info», then «Run anyway».",
      step1: "Screen 1",
      step2: "Screen 2",
      heading: "Windows protected your PC",
      body: "Microsoft Defender SmartScreen prevented an unrecognised app from starting. Running this app might put your PC at risk.",
      moreInfo: "More info",
      appLabel: "App:",
      publisherLabel: "Publisher:",
      publisher: "Unknown publisher",
      run: "Run anyway",
      dontRun: "Don't run",
    },
    dockerTitle: "Linux, macOS or a server — Docker",
    dockerText: "There's no installer for Linux or macOS. With Docker installed, the app starts with these commands:",
    portableTitle: "No admin rights?",
    portableText: "The portable version runs from a folder (even a USB stick), without installing anything.",
    portableLink: "Download the portable version (.zip)",
    helpTitle: "Need help?",
    helpGuide: "Step-by-step installation guide",
    helpDiscord: "Ask on Discord",
    helpReleases: "Release notes and all versions",
    mobileTitle: "On your phone?",
    mobileText: "OficinaOS installs on a Windows PC (or a server). Then phones and tablets open the app in the browser, on the shop's network — nothing to install.",
  },
  ui: {
    frame: {
      appTitle: "OficinaOS",
      caption: "The OficinaOS interface recreated in HTML, with sample data.",
    },
    repairList: {
      title: "Repairs",
      active: "active",
      search: "Search by IMEI, customer or no.",
      newRepair: "New repair",
      cols: { id: "No.", device: "Device", customer: "Customer", imei: "IMEI / Serial no.", status: "Status", total: "Total" },
      rows: [
        { id: "R-2614", device: "iPhone 13", issue: "Cracked screen", customer: "Ana Marques", imei: "356938108542176", status: "in-repair", total: 129, when: "Today, 10:42" },
        { id: "R-2613", device: "Galaxy S22", issue: "Won't charge", customer: "Rui Teixeira", imei: "352094117730258", status: "waiting-for-parts", total: 45, when: "Today, 09:15" },
        { id: "R-2611", device: "Redmi Note 12", issue: "Swollen battery", customer: "Marta Lopes", imei: "868123056649912", status: "done", total: 39.9, when: "Yesterday, 17:30" },
        { id: "R-2609", device: "iPad (9th gen)", issue: "Screen glass", customer: "Oficina Norte (reseller)", imei: "DMPXK2J9Q1GC", status: "intake", total: 89, when: "Yesterday, 16:05" },
        { id: "R-2604", device: "Pixel 7", issue: "Rear camera", customer: "João Pires", imei: "357812094418360", status: "delivered", total: 74.5, when: "23 Oct, 12:20" },
      ],
    },
    status: {
      intake: "Received",
      "waiting-for-parts": "Waiting for parts",
      "in-repair": "In repair",
      "on-hold": "On hold",
      done: "Ready",
      delivered: "Delivered",
      returned: "Returned",
      cancelled: "Cancelled",
    },
  },
  diagPage: {
    metaTitle: "OficinaOS Diag — free phone diagnostics over USB",
    metaDesc:
      "Free, open-source Windows app that reads Android and iPhone over USB: battery, screen, touch and sensors, with an HTML/JSON report.",
    hero: {
      label: "OficinaOS Diag",
      title: "Plug in the cable. The report writes itself.",
      subtitle:
        "Free Windows app that reads any Android or iPhone over USB: battery, screen and touch, sensors and storage. Everything runs on the PC, no account.",
      cta: "Download for Windows",
      ctaSecondary: "See a sample report",
      note: "Windows 10/11 · free · no account · open source (MIT)",
      frameTitle: "USB scan",
      frameCaption:
        "Illustrative recreation of an OficinaOS Diag scan with sample data: an iPhone 13 connected over USB, the tests completing and the report ready to export.",
      device: "iPhone 13 · 128 GB",
      connected: "Connected over USB",
      trusted: "“Trust This Computer” accepted",
      tests: [
        ["Identification", "iOS 18.1 · serial read"],
        ["Battery", "87% of capacity · 412 cycles"],
        ["Storage and RAM", "56.6 of 128 GB used"],
        ["Sensors", "4 of 4 responding"],
        ["Screen and touch", "0 dead pixels · 1 dead zone"],
        ["Activation and carrier", "Activated"],
      ],
      reportReady: "Report ready",
      export: "Export HTML · JSON",
    },
    caps: {
      title: "What Diag does — free, always",
      lead: "No account and no server: the scan runs 100% on the PC. Two optional extras connect it to whoever does the repair.",
      free: [
        { title: "USB scan", text: "Model, serial number, OS version, battery (level, temperature, cycles and real vs. design capacity), storage, RAM and sensors." },
        { title: "Screen and touch test", text: "The app serves a test page on the local network — Android opens it by itself, iPhone scans a QR code. Dead pixels and dead touch zones go into the report." },
        { title: "HTML and JSON report", text: "Every scan exports a printable report (save as PDF and hand it to the customer) plus the raw JSON with all the data." },
        { title: "History on the PC", text: "Previous scans stay on the PC — compare the battery health of the same device over time, handy for warranties and used devices." },
        { title: "Android and iPhone", text: "Android with adb built in (nothing to install on the PC). iPhone and iPad with Apple's USB driver." },
        { title: "Portuguese and English, three themes", text: "Terminal (the original retro look), Windows 95 and Modern. Your choice is remembered." },
      ],
      proTitle: "With the repairer's Pro",
      pro: [
        { title: "Send to the repairer", text: "The customer runs the scan at home, types the code they were given and the diagnosis reaches OficinaOS as a pre-check." },
        { title: "Plain-language report", text: "The technical data becomes a clear text for the customer — “the battery is at 78% of its original capacity, replacement recommended”." },
      ],
      proBadge: "Pro",
    },
    report: {
      title: "Explore a sample report",
      lead: "This is what Diag hands you at the end of every scan. Open each section — the numbers are sample data.",
      docTitle: "Diagnostic report",
      docMeta: "iPhone 13 · sample scan",
      summaryLabel: "Summary",
      summary: [
        ["Battery", "87%", "of design capacity"],
        ["Screen", "0", "dead pixels"],
        ["Touch", "1", "dead zone"],
        ["Sensors", "4/4", "responding"],
      ],
      sections: [
        {
          title: "Device",
          rows: [
            ["Model", "iPhone 13 (A2633)"],
            ["Serial number", "F2LX••••Q6R"],
            ["System", "iOS 18.1"],
          ],
        },
        {
          title: "Battery",
          rows: [
            ["Level", "64%"],
            ["Temperature", "31.2 °C"],
            ["Charge cycles", "412"],
            ["Real / design capacity", "2,808 / 3,227 mAh (87%)"],
          ],
        },
        {
          title: "Storage and RAM",
          rows: [
            ["Storage", "56.6 GB used of 128 GB"],
            ["RAM", "4 GB"],
          ],
        },
        {
          title: "Sensors",
          rows: [
            ["Accelerometer", "OK"],
            ["Gyroscope", "OK"],
            ["Proximity", "OK"],
            ["Compass", "OK"],
          ],
        },
        {
          title: "Screen and touch",
          rows: [
            ["Colour test", "0 dead pixels"],
            ["Touch grid", "1 dead zone (top-right corner)"],
          ],
        },
        {
          title: "Activation and carrier",
          rows: [
            ["Activation state", "Activated"],
            ["Carrier", "Unlocked"],
          ],
        },
      ],
      jsonTitle: "Raw JSON (illustrative excerpt)",
      exportNote: "In Diag: Export → HTML (printable) or JSON.",
    },
    integration: {
      title: "From the customer's sofa to the bench",
      lead: "With the diagnostics intake module (Pro) switched on by the repairer, Diag stops being just a tool and becomes the front door.",
      steps: [
        { title: "The customer scans at home", text: "Downloads Diag (free), connects the phone and runs the scan." },
        { title: "Types the code they were given", text: "The diagnosis travels to OficinaOS Cloud. Nothing leaves the PC without this click." },
        { title: "It lands in OficinaOS as a pre-check", text: "It shows up in the Requests queue, ready to turn into a repair — or to value a used device for purchase." },
      ],
      uses: "Use cases: pre-diagnosis before the customer comes in, valuing used devices for buy and sell, and grading with objective data.",
      queue: {
        title: "Requests",
        caption: "Illustrative recreation of the OficinaOS Requests queue with a diagnosis sent by a customer (sample data).",
        item: "Diagnosis sent by the customer",
        meta: "iPhone 13 · battery 87% · 1 dead touch zone",
        tag: "Diag",
        action: "Convert into a repair",
      },
      proLink: "See the Pro modules",
      docsLink: "How sending works (guide)",
    },
    compat: {
      title: "Compatibility",
      lead: "A PC with Windows 10 or 11 and a data cable. The rest depends on the phone.",
      readTitle: "What the scan reads",
      readCaption: "What the Diag scan reads on Android and on iPhone/iPad",
      readHead: ["Data", "Android", "iPhone/iPad"],
      readRows: [
        ["Model, serial number, OS version", "✓", "✓"],
        ["Battery — level, temperature, cycles", "✓", "✓"],
        ["Battery — real vs. design capacity", "where the manufacturer exposes it", "✓"],
        ["Storage and RAM", "✓", "✓"],
        ["Sensors", "✓", "✓"],
        ["Root / unlocked bootloader", "✓", "—"],
        ["Activation state / carrier", "—", "✓"],
      ],
      reqTitle: "What you need",
      reqCaption: "Diag requirements by platform",
      reqHead: ["", "Android", "iPhone/iPad"],
      reqRows: [
        ["On the phone", "Turn on “USB debugging” in developer options", "Accept “Trust This Computer”"],
        ["On the PC", "Nothing — adb is built in", "Apple USB driver (iTunes or the “Apple Devices” app)"],
        ["Extra", "A data cable (not charge-only)", "Close the Windows Photos app before scanning"],
      ],
      scrollLabel: "Horizontally scrollable table",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Is Diag really free?", a: "Yes. The scan, the screen and touch test, export and history are free, with no account and no limit. The code is open source (MIT). Only sending to a repairer and the plain-language report are Pro modules — switched on by the repairer, not the customer." },
        { q: "Does it need internet?", a: "No. The scan runs 100% on the PC. It only goes online if the user chooses “Send to shop”, “AI report” or “Send log” — and the destination is always the OficinaOS server." },
        { q: "Does it run on Mac or Linux?", a: "No: Diag is a Windows app (10 or 11). The phone can be Android, iPhone or iPad." },
        { q: "Is it on the Microsoft Store?", a: "Not yet. For now it ships as a portable ZIP on GitHub. Because the executable isn't code-signed yet, Windows may show the SmartScreen warning the first time: “More info” → “Run anyway”." },
        { q: "The phone isn't detected. What now?", a: "Check that the cable is a data cable (not charge-only) and try another USB port. Android: “USB debugging” on and the authorisation prompt accepted on the phone. iPhone: “Trust This Computer” accepted, Apple driver installed and the Photos app closed. Keep the screen unlocked during the scan." },
        { q: "Is the phone's data stored?", a: "Only on your PC, in Diag's local history. It isn't sent to anyone without an action from you, and the AI (when used) doesn't train models on it." },
      ],
    },
    download: {
      title: "Download Diag",
      lead: "Portable ZIP for Windows 10/11 — no installation needed.",
      button: "Download ZIP for Windows",
      buttonFallback: "See the latest version on GitHub",
      version: "Version",
      released: "Published",
      size: "Size",
      sums: "Checksums (SHA256SUMS.txt)",
      steps: [
        "Extract the whole folder — OficinaDiag.exe needs the files next to it.",
        "Open OficinaDiag.exe. If Windows warns you: “More info” → “Run anyway” (first time only).",
        "Connect the phone by cable and follow the on-screen steps.",
      ],
      source: "Source code on GitHub",
      docs: "Full Diag documentation",
      store: "Not on the Microsoft Store yet.",
    },
    productLink: "About OficinaOS Diag",
    docsLink: "Full documentation",
  },
  proPage: {
    metaTitle: "OficinaOS Pro — WhatsApp, SMS, portal and AI for repair shops, from €39/month",
    metaDesc:
      "WhatsApp and SMS with an AI assistant, customer portal, invoicing, online storefront and AI reports in the base plan, for up to 3 shops. Time clock and Balcão IA as extras. 14 days free.",
    hero: {
      label: "OficinaOS Pro",
      title: "Everything your shop needs beyond the counter.",
      subtitle:
        "The app stays free. Pro connects it to the internet: it answers customers on WhatsApp and by SMS, shows repair status and issues invoices. Need a staff time clock or an AI-powered inbox? Just add those extras.",
      priceLine: "From {price}/month · up to {shops} shops · {days} days free",
      cta: "Try {days} days free",
      ctaSecondary: "See what's included",
      frameTitle: "Settings — Cloud",
      frameCaption:
        "Illustrative recreation of the Cloud tab in OficinaOS settings, with sample data: connected to OficinaOS Cloud, on the Pro plan, with the modules active.",
      status: "Connected to OficinaOS Cloud · Pro plan",
      sync: "Last sync: 1 min ago",
      modulesTitle: "Included in your plan",
      modules: ["WhatsApp and SMS with AI", "Customer portal", "Diag AI reports", "Certified invoicing", "Online storefront"],
      more: "+ {rest} modules",
      active: "Active",
      offline: "Without internet, everything else keeps working on the shop's network.",
    },
    core: {
      title: "The app is free. Always.",
      lead: "Pro takes nothing away from the app you download. OficinaOS stays free and open source: no limits, no accounts and no trial period.",
      items: [
        "Repairs, quotes, customers, stock and till",
        "On your PC, working without internet",
        "Open source, MIT licence",
        "Public tracking page and quote replies",
        "OficinaOS Diag — cable diagnostics, free",
      ],
      note: "Customer messaging (WhatsApp and SMS) is part of Pro: the free app doesn't send or receive messages.",
      link: "Download OficinaOS",
    },
    benefits: {
      title: "What changes in your shop",
      lead: "Less time on the phone, more time at the bench.",
      items: [
        { title: "No more “is it ready yet?”", text: "Customers ask on WhatsApp or by SMS and the assistant replies instantly with the repair's real status — even when the shop is closed." },
        { title: "Quotes approved faster", text: "Customers approve with a “YES” or through a link, at any time. The approval lands in the app with the date and time." },
        { title: "No message gets lost", text: "With the Balcão IA extra, WhatsApp and SMS land in a single inbox: the AI summarises and drafts replies, and a human approves before anything is sent." },
        { title: "Paper-free staff time clock", text: "With the Time clock extra, staff clock in and out over WhatsApp. Tamper-proof records kept for 5 years, ready for the labour inspectorate (ACT)." },
        { title: "A certified invoice when the repair is done", text: "From the sale or repair straight to the InvoiceXpress invoice, without typing everything twice. Portugal only." },
        { title: "Customers who come back", text: "An online storefront with reservations, pickup reminders and messages to customers you haven't seen in a while." },
      ],
    },
    groups: {
      title: "Everything that's included",
      lead: "{included} modules included in the base plan, in three groups. Only the Time clock and Balcão IA are extras.",
      extraBadge: "Extra",
      more: "Guide",
      items: [
        {
          title: "Talk to customers",
          text: "Customers know where their repair stands and approve the quote without calling. The AI assistant only says what the shop allows and hands over to a person when it doesn't know.",
          ui: {
            title: "WhatsApp",
            caption: "Sample conversation with the WhatsApp assistant: the customer approves a quote by replying YES.",
            messages: [
              ["in", "Hi, is there a quote for the iPhone yet?"],
              ["out", "REP-2614 · iPhone 13: replace screen — €129.00. Reply YES to approve or NO to decline."],
              ["in", "YES"],
              ["out", "Quote approved. We'll let you know when it's ready."],
            ],
          },
        },
        {
          title: "Sell and invoice",
          text: "From the counter to a certified invoice, plus an online storefront whose reservations land in the app.",
          ui: {
            title: "Sale",
            caption: "Sample sale in OficinaOS with the invoice-receipt issued through InvoiceXpress.",
            lines: [
              ["Screen replacement · iPhone 13", "129.00"],
              ["Tempered glass", "9.90"],
            ],
            total: "Total (VAT incl.)",
            issued: "Invoice-receipt issued · InvoiceXpress",
            reservation: "New storefront reservation",
            reservationItem: "iPhone 13 case — in Requests",
          },
        },
        {
          title: "Manage and grow",
          text: "Compare your prices with the market, see several shops in one dashboard, receive diagnostics done at home and record your team's hours.",
          ui: {
            title: "Market prices",
            caption: "Sample market prices table: median, range and number of shops next to your own price.",
            head: ["Item", "Median", "Range", "Yours"],
            rows: [
              ["iPhone 13 screen", "129", "99–159", "7", "135"],
              ["iPhone 12 battery", "59", "45–75", "5", "55"],
              ["Galaxy A52 connector", "45", "35–60", "3", ""],
            ],
            shops: "shops",
            note: "A price only shows when 3 or more shops share it.",
          },
        },
      ],
    },
    cloud: {
      title: "Cloud is the engine of Pro",
      lead: "OficinaOS Cloud is the bridge between the app on your PC and the outside world. It isn't another program to learn: you connect it once and it works behind the scenes.",
      steps: [
        { title: "Pair once", text: "Create an account at cloud.oficinaos.app and paste the pairing code in Settings → Cloud." },
        { title: "The plan switches the modules on", text: "With Pro active, the plan's modules (and any extras you choose) become available on the server side — no licence files or keys to install." },
        { title: "The app syncs by itself", text: "Every ~2 minutes it sends and receives what the modules need — customer messages follow a fast ~12-second cycle. The PC is never exposed to the internet." },
      ],
      diagram: { pc: "OficinaOS on your PC", cloud: "OficinaOS Cloud", out: "Customers and services", sync: "every ~2 min" },
      dataTitle: "What goes to the Cloud",
      dataText: "Only the data each module needs — for example, the redacted summary of a repair for the portal. Without Pro, nothing leaves the PC.",
      dataLink: "Privacy, module by module",
      offline: "Without pairing, OficinaOS still works on the local network — the Pro modules simply don't appear.",
      login: "Already have an account? Sign in to OficinaOS Cloud",
    },
    pricing: {
      title: "A complete base. Extras only if you need them.",
      lead: "The base already covers almost everything. Just choose whether you want the artificial intelligence included — and add the extras you need.",
      planName: "OficinaOS Pro base",
      perMonth: "/month",
      vat: "+ VAT · per account, not per shop",
      optionAi: { title: "With AI included", text: "We take care of the AI model. You don't need an account anywhere." },
      optionByok: { title: "Without AI included", text: "Connect your own AI key (OpenAI, Anthropic, Gemini…) and pay the provider directly — or use Pro without AI." },
      recommended: "Simplest",
      includedTitle: "Included in the base",
      included: [
        "{included} modules: messaging, portal, invoicing, storefront and more",
        "SMS and WhatsApp, sending and replying (quick QR connection)",
        "OficinaOS Diag AI reports",
        "Up to {shops} shops on the same account",
        "{conversations} AI conversations per month (with AI included)",
        "No lock-in — cancel whenever you like",
      ],
      cta: "Try {days} days free",
      conversationNote: "A conversation is every message from one customer within 24 hours: ten messages from the same customer on the same evening count as one.",
      founder: {
        title: "Founder pricing",
        text: "The first {slots} customers pay {price}/month for the base with AI included for {months} months.",
        cta: "I want to be a founder",
      },
      annual: {
        title: "Annual plan: choose your offer",
        optionSetup: { title: "We set everything up for you", text: "Dedicated assisted onboarding, up to {hours} hours (worth {value}), on us." },
        optionMonths: { title: "{months} months free", text: "Pay for 10 months, use 12." },
      },
      extras: {
        title: "Extras, only if you need them",
        caption: "Extras for the OficinaOS Pro plan",
        head: ["Extra", "Price", "What it adds"],
        rows: [
          ["Time clock", "{ponto1}/month up to {p1} employees · {ponto2} up to {p2} · {ponto3} up to {p3}", "Staff clock in and out over WhatsApp or SMS; tamper-proof records, ready for the labour inspectorate (ACT)."],
          ["Balcão IA", "{balcaoAi}/month with AI · {balcaoByok} with your own key (same AI option as the base)", "A single WhatsApp and SMS inbox, with an AI assistant that summarises and drafts replies for the team to approve."],
          ["Official Meta WhatsApp", "{waMonthly}/month + {activation} activation", "No risk of being blocked, buttons in messages and a verified business name."],
          ["Additional shop (from shop no. {nextShop})", "{extraShop}/month", "Chains with more than {shops} shops."],
          ["Conversation pack", "{packPrice} for +{packConversations}", "Very busy months; valid for that month only."],
        ],
        metaNote: "With official WhatsApp, Meta charges for messages directly to your business, on your card. It includes {metaFree} free replies per month per number — a small shop rarely goes over that. We don't charge anything on top.",
      },
      bundle: {
        badge: "Save {saving} a month",
        title: "Pro Complete",
        text: "Base with AI included + Time clock (up to {pontoUpTo} employees) + Balcão IA.",
        instead: "instead of {full}",
        cta: "I want Pro Complete",
      },
      scrollLabel: "Horizontally scrollable table",
    },
    services: {
      title: "Would you rather we handled everything?",
      lead: "Pro sets itself up in a few minutes. But if you prefer, we install, import and train — with no surprises on the invoice.",
      caption: "Services charged separately",
      head: ["Service", "Price", "What's included"],
      rows: [
        ["Installation on your PC or your VPS", "{installation}", "Installation + {supportHours} h of dedicated support in the first {supportDays} days. On-site: travel charged separately. You pay your VPS provider directly."],
        ["Data import from another program", "from {importFrom}", "Customers and repairs from Excel/CSV ({importFrom}) or from another program (subject to review). We start with a free test on a sample."],
        ["Assisted onboarding, training and support", "{hourly}/hour", "Setup alongside you, team training or tailored help. In {block}-minute blocks, minimum {minimum} min."],
        ["Hosting on our VPS", "{hosting}", "EU server with updates, security and daily backups included."],
      ],
      hostingPrice: "{withPro}/month with Pro · {withoutPro}/month without Pro",
      tbd: "to be announced",
      note: "Installation and services are also available if you only want the free OficinaOS installed.",
      scrollLabel: "Horizontally scrollable table",
    },
    otherBusinesses: {
      title: "Not a repair shop?",
      text: "Two Pro modules will also be available on their own for any business — restaurants, shops, clinics, services. You can join the waiting list now.",
      more: "Learn more",
    },
    form: { title: "Start your {days} days free" },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Will OficinaOS stop being free?", a: "No. The app is open source (MIT) and the core never goes behind a paywall. Pro adds what needs the internet: messaging, portal, AI, time clock and invoicing." },
        { q: "What's included and what's extra?", a: "The base includes almost everything: SMS and WhatsApp messaging, customer portal, invoicing, online storefront, AI reports and more. Only three things are extras: the Time clock, Balcão IA and official Meta WhatsApp. If you want the first two, the Pro Complete bundle works out cheaper." },
        { q: "What does “without AI included” mean?", a: "You can connect your own AI account (OpenAI, Anthropic, Gemini…) and pay for the AI directly to that provider — or use Pro without AI: the assistant replies using rules only (repair status, quotes, codes). If you're not sure which to choose, choose “with AI included”." },
        { q: "What if I go over the included conversations?", a: "The assistant keeps passing messages to your team, without replying with AI. You can buy a conversation pack for that month or talk to us about a tailored plan." },
        { q: "Do I need the official Meta WhatsApp?", a: "No. By default we connect the shop's WhatsApp by QR code, with no per-message costs. It's an unofficial connection, with a small risk of being blocked that we explain beforehand. If you want no risk at all, switch on official WhatsApp (extra), and SMS always stays as a fallback." },
        { q: "I have several shops. Do I pay for each one?", a: "No. The plan is per account and includes up to 3 shops. From the 4th shop on, each additional shop has a small monthly cost." },
        { q: "What happens if I disconnect the Cloud?", a: "The app keeps working on the local network with all your data; the Pro modules stop appearing. When you disconnect, your shop's data stored in the Cloud is deleted. Time clock records remain available in the app, as the law requires." },
        { q: "I'm already in the pilot. What changes?", a: "Beta testers who joined the pilot keep 3 months of OficinaOS Pro base free. Extras (time clock, Balcão IA, official WhatsApp) are paid separately. New customers get 14 days free." },
      ],
    },
  },
  pontoHero: {
    demoPause: "Pause the demo",
    demoPlay: "Resume the demo",
    titleA: "Clock in over WhatsApp.",
    titleB: "No apps, no time clock, no paper.",
    proofs: ["QR code that changes every 30 seconds", "Checks the shop's network", "Records kept for 5 years"],
    caption: "Illustrative recreation with sample data: the shop's clock-in screen, the check-in on the phone and the manager's dashboard.",
    screen: {
      shop: "Central Workshop",
      title: "Time clock",
      scan: "Point your phone camera here",
      codeLabel: "No camera? Code",
      changesIn: "Changes in",
      toast: "Rui Mendes · clocked in",
    },
    phone: {
      detected: "Shop QR recognised",
      contact: "Central Workshop",
      contactSub: "Time clock",
      draft: "IN · Central Workshop · #4821",
      reply: "Clocked in at 09:02.",
      replySub: "Have a good day, Rui. For your break, type BREAK.",
      composer: "Message",
    },
    panel: {
      title: "In right now",
      newRow: ["Rui Mendes", "In 09:02", "Approved"],
      rows: [
        ["Ana Costa", "In 08:56", "Approved"],
        ["Bruno Sá", "In 08:58", "Approved"],
        ["Carla Dias", "Off-site · 08:40", "To review"],
      ],
    },
  },
  pontoPage: {
    waitlist: {
      note: "We only use these details to contact you about Livro de Ponto.",
      shopPlaceholder: "e.g. Central Café",
    },
    problem: {
      eyebrow: "The problem",
      title: "Recording working hours is mandatory. And it's usually a hassle.",
      lead: "In Portugal, every company must record each worker's start, end and break times and keep those records for 5 years (Labour Code, art. 202). In practice, it ends up as one of these:",
      items: [
        { title: "Paper sheet", text: "Forgotten, scribbled over, lost. And hard to prove it wasn't changed." },
        { title: "Time clock", text: "You have to buy or rent it, install it and maintain it. And it doesn't work for people who work off-site." },
        { title: "Time-tracking apps", text: "Each employee installs an app, creates an account and remembers a password. Many end up not using it." },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Three steps. The first check-in takes seconds.",
      items: [
        {
          title: "Open your shop's link on any device",
          text: "The counter computer, an old phone, a tablet or the TV: any device with internet you already have will do. A QR code appears and changes by itself every 30 seconds. Nothing to buy.",
          note: "No device at all? Print the poster with the QR code and stick it by the door.",
        },
        {
          title: "The employee scans the QR code and taps send",
          text: "Point the camera, WhatsApp opens with the message already written, tap send. Done.",
          note: "About 3 seconds.",
        },
        {
          title: "You see everything on the dashboard",
          text: "Who is in right now, everyone's hours, late arrivals and missed check-outs. At the end of the month, export to PDF or Excel for your accountant.",
          note: "On your phone or computer.",
        },
      ],
      devices: ["Counter computer", "Tablet", "Old phone", "TV"],
      link: "oficinaos.app/p/central-workshop",
      sent: "Sent",
      dash: {
        title: "In right now",
        month: "November · today's hours",
        export: ["PDF", "Excel"],
        rows: [
          ["Ana Costa", "08:56", "6 h 12"],
          ["Bruno Sá", "08:58", "6 h 05"],
          ["Rui Mendes", "09:02", "5 h 58"],
        ],
      },
    },
    employee: {
      eyebrow: "What the employee sees",
      title: "A normal conversation. No commands to memorise.",
      lead: "On the company Wi-Fi, that's all. On mobile data, the system asks for the location with one tap.",
      chat: [
        ["in", "IN · Central Workshop · #K7Q2"],
        ["out", "✅ Clocked in at 09:02, Rui. Have a good day!"],
      ],
      buttons: ["Break", "Out"],
      tips: [
        { title: "Breaks", text: "Tap «Break» and then «Back»." },
        { title: "Clocking out", text: "Tap «Out» and get the day's total." },
        { title: "Hours this week", text: "Type «hours»." },
      ],
      note: "Typing «I'm here» or «going to lunch» works too. No need for capital letters.",
    },
    sms: {
      eyebrow: "SMS backup",
      title: "No WhatsApp? Clocking in carries on by SMS.",
      lead: "WhatsApp is the fastest way, but not the only one. A company Android phone with a SIM card receives check-ins by SMS. Nobody is left unable to clock in.",
      points: [
        { title: "For people who don't use WhatsApp", text: "Send by SMS the 4-digit code shown on the shop screen. Works on any phone, even the simplest ones." },
        { title: "Backup if WhatsApp fails", text: "If the company's WhatsApp goes down or gets blocked, employees keep clocking in by SMS. The number can be changed without losing records." },
        { title: "Records to review", text: "SMS doesn't send a location, so these records are marked «to review». Confirm them with one click." },
        { title: "No phone at all?", text: "On the shop screen, the employee picks their name and enters a personal PIN." },
      ],
      chat: [
        ["in", "IN 4821"],
        ["out", "Clocked in at 09:02, Carla. Marked to review (SMS has no location)."],
      ],
      phone: "SMS · Company phone",
      cost: "SMS messages are sent from the company phone: the cost is that of your mobile plan.",
    },
    trust: {
      eyebrow: "Records you can trust",
      title: "Three proofs on every check-in. Without invading anyone's privacy.",
      lead: "A time record is only worth something if cheating is hard.",
      items: [
        { title: "The QR code changes every 30 seconds", text: "A photo of the QR code is useless later, or at home." },
        { title: "We know if the phone is on the company network", text: "On the company Wi-Fi, the record is confirmed automatically." },
        { title: "Off the Wi-Fi, we ask for the location", text: "Only at that moment, never during the day, and only the phone's real location. More than 100 m from the company, the record is marked «to review» and you decide." },
      ],
      serverTime: "The time always comes from our server, not the phone. Nobody records «9:00» if they arrived at 9:40.",
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why it's different",
      items: [
        { title: "Nothing to install", text: "Uses the WhatsApp your employees already have. No accounts or passwords." },
        { title: "No equipment to buy", text: "Use a device you already have, or a printed QR code." },
        { title: "No phone? They can still clock in", text: "Pick the name on the screen and enter a PIN." },
        { title: "Works without WhatsApp", text: "People who don't use WhatsApp clock in by SMS." },
        { title: "Off-site work included", text: "Sales reps, technicians and site crews type «in», share their location and, if you want, a photo. It also serves as proof of a customer visit." },
        { title: "Ready for inspections", text: "Records that can't be deleted or changed. Corrections in the history, with who and why. Kept 5 years, exported in one click." },
        { title: "Automatic reminders", text: "Forgot to clock out? The system asks them at the time you set and records it with their confirmation." },
      ],
    },
    privacy: {
      title: "Your employees' privacy",
      items: [
        "We don't store photos: they stay in the company's WhatsApp, or in your Google Drive or OneDrive if you prefer.",
        "Location only at the moment of the check-in. We never track anyone during the day.",
        "No fingerprints or facial recognition.",
        "Each employee can see their own records whenever they want.",
        "Employee information sheet ready to print and sign, as GDPR requires.",
      ],
    },
    needs: {
      title: "What you need to get started",
      items: [
        { what: "A WhatsApp number for the company", level: "Required", why: "Employees send their check-ins to this number. It can be a phone with WhatsApp Business you already have." },
        { what: "A device with internet in the shop", level: "Recommended", why: "To show the QR code that changes by itself. A computer, an old phone, a tablet or a TV will do. No device? Print the QR code." },
        { what: "An Android phone with a SIM card", level: "SMS only", why: "For people without WhatsApp, and as a backup if WhatsApp fails." },
      ],
      note: "Employees only need their own phone, with WhatsApp or SMS. Anyone without a phone uses a PIN on the screen.",
    },
    compare: {
      title: "Compared with the alternatives",
      head: ["", "Paper", "Time clock", "Time apps", "Livro de Ponto"],
      rows: [
        ["Something to install", "Nothing", "Device on the wall", "App on every phone", "Nothing: uses a device you have"],
        ["Off-site work", "Hard", "No", "Yes", "Yes"],
        ["Proof of presence", "None", "Yes, on the device", "GPS", "QR changing every 30 s + company network"],
        ["Works over WhatsApp", "No", "No", "Rarely, on pricey plans", "Yes, always"],
        ["Works over SMS", "No", "No", "No", "Yes"],
        ["Records for inspections", "Fragile", "Yes", "Yes", "Yes, unalterable"],
      ],
    },
    forWhom: {
      title: "Who it's for",
      yesTitle: "Made for companies of 1 to 30 people",
      yes: ["Restaurants, cafés and bakeries", "Workshops and repair shops", "Retail and shops", "Cleaning and maintenance", "Construction", "Clinics and salons", "Field sales and technicians"],
      noTitle: "Maybe not for you",
      no: "If you need full payroll, complex shifts for hundreds of people or integration with large HR systems, a full HR suite will serve you better.",
    },
  },
  modulePages: {
    ponto: {
      metaTitle: "Time clock over WhatsApp — no apps, no clocking machine, no paper | OficinaOS",
      metaDesc:
        "Staff clock in over WhatsApp or by SMS, using a QR code at the door. Tamper-proof records kept for 5 years, ready for the labour inspectorate (ACT). Waiting list open.",
      hero: {
        label: "Time clock",
        badge: "Coming soon for every business",
        title: "Clock in over WhatsApp. No apps, no clocking machine, no paper.",
        subtitle:
          "Staff scan a QR code at the door and send the message that's already written for them. You see on your phone or computer who arrived, at what time and where they were.",
        cta: "Join the waiting list",
        ctaSecondary: "See how it works",
        proNote: "Run a repair shop? The Time clock is already available as an extra for",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Time clock",
        caption: "Sample conversation: an employee clocks in by scanning the QR code and sharing their location.",
        messages: [
          ["in", "ENTRADA · Oficina Central · #4821"],
          ["out", "Hi Rui! Tap to send your location. 📍"],
          ["in", "📍 Location shared"],
          ["out", "✅ Clocked in at 09:02. Have a good day! For your break, type PAUSA."],
        ],
        note: "No commands to memorise and no need for capital letters: «I'm here» or «going to lunch» work too.",
      },
      problem: {
        title: "Recording working hours is mandatory. And it's usually a hassle.",
        lead: "In Portugal, every business must record each worker's start and finish times and breaks, and keep those records for 5 years (Portuguese Labour Code, art. 202). In practice, it ends up as one of these:",
        items: [
          { title: "Paper sheet", text: "It gets forgotten, scribbled over, lost — and it's hard to prove it wasn't altered." },
          { title: "Clocking machine", text: "You have to buy or rent it, install it and maintain it. And it's no use for staff who work off-site." },
          { title: "Time clock apps", text: "Every employee installs an app, creates an account and remembers a password. Many end up not using it." },
        ],
      },
      steps: {
        title: "How it works",
        lead: "Three steps. The first record takes seconds.",
        items: [
          { title: "Put the QR code on the door", text: "Print the poster with your business's QR code (it comes ready-made) and stick it at the entrance. No tablet, screen or clock needed." },
          { title: "The employee scans and sends", text: "They point the camera, WhatsApp opens with the message already written, they tap send and share their location with one tap. Break, return and clock-out are a single word." },
          { title: "You see everything in the dashboard", text: "Who's at work right now, everyone's hours, late arrivals and missed records. At the end of the month, export a PDF for your accountant." },
        ],
      },
      benefits: {
        title: "Why it's different",
        items: [
          { title: "Nothing to install", text: "It uses the WhatsApp your staff already have. No accounts or passwords." },
          { title: "No equipment to buy", text: "A printed QR code is all it takes." },
          { title: "Works without WhatsApp", text: "Staff who don't use WhatsApp clock in by SMS, with the code shown when they scan the QR code." },
          { title: "Off-site work included", text: "Sales reps and technicians record where they are, with location and, if you wish, a photo — which also serves as proof of visit." },
          { title: "Ready for inspections", text: "Records that can't be deleted or altered; corrections stay in the history with who made them and why; kept for 5 years." },
          { title: "Automatic reminders", text: "Forgot to clock out? The system asks them and records it once they confirm." },
        ],
      },
      trust: {
        title: "Why you can trust the records",
        lead: "A time record is only worth something if it's hard to cheat. We combine several kinds of proof, without invading anyone's privacy.",
        items: [
          { title: "The code expires in 2 minutes and works only once", text: "Scanning the QR code generates a new code. A photo of the QR code taken yesterday records nothing today." },
          { title: "Location at the moment of the record", text: "Only at that moment, never during the day. More than 100 m from the business, the record is marked «to be validated» and you decide." },
          { title: "The business's network as extra proof", text: "If the phone is connected to the business's Wi-Fi, that's recorded as additional proof." },
          { title: "The time comes from our server", text: "Never from the phone or from what's typed in the message. Nobody can record «9:00» if they arrived at 9:40." },
        ],
      },
      privacy: {
        title: "Your employees' privacy",
        items: [
          "Location only at the moment of the record — we never track anyone.",
          "No fingerprints or facial recognition.",
          "Photos only if the business asks for them, and never stored on our servers.",
          "Every employee can view their own records.",
          "Information sheet for workers ready to print, as the GDPR requires.",
        ],
      },
      forWhom: {
        title: "Who it's for",
        yesTitle: "Made for businesses with 1 to 30 people",
        yes: ["Restaurants and cafés", "Workshops and repairs", "Shops and retail", "Cleaning and maintenance", "Building and construction", "Clinics and salons", "Field teams"],
        noTitle: "Maybe not for you",
        no: "If you need full payroll management, complex shifts for hundreds of people or integration with large HR systems, a full HR software package will suit you better.",
      },
      needs: {
        title: "What you need to get started",
        head: ["What", "Required?", "What for"],
        rows: [
          ["A WhatsApp number for the business", "Yes", "That's the number staff send to. It can be a phone with WhatsApp Business you already have."],
          ["A printer", "Yes", "To print the poster with the QR code (A4)."],
          ["An Android phone with a SIM card", "Only for SMS", "For staff without WhatsApp, and as a backup if WhatsApp fails."],
        ],
        note: "Your staff only need their own phones.",
        scrollLabel: "Horizontally scrolling table",
      },
      pricing: {
        title: "How much it costs",
        lead: "Simple pricing by number of employees, with no minimums and no lock-in.",
        standaloneTitle: "For any business",
        standaloneText: "Price to be announced at launch. People on the waiting list get the launch terms first.",
        proTitle: "For repair shops",
        proText: "An OficinaOS Pro extra, from {pontoFrom}/month for up to {pontoUpTo} employees. The Pro base costs from {proPrice}/month, with {days} days free.",
        proLink: "Discover OficinaOS Pro",
        note: "SMS messages are sent from the business's phone: the cost is whatever your mobile plan charges.",
      },
      waitlist: {
        title: "Join the Time clock waiting list",
        subtitle: "We'll let you know as soon as it's available for your business — and help you get it up and running. No commitment.",
        button: "Join the waiting list",
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          { q: "Is it legal to clock in over WhatsApp?", a: "The law requires the record to exist, show start and finish times and breaks, be accessible and be kept for 5 years. The Time clock was built for exactly that. We recommend checking with your accountant or legal adviser how you apply it." },
          { q: "What if an employee doesn't have WhatsApp?", a: "They clock in by SMS, with the code shown when they scan the QR code. Those records are marked «to be validated», because SMS doesn't send a location, and you confirm them with one click." },
          { q: "Which WhatsApp is used?", a: "By default, we connect the business's WhatsApp the way WhatsApp Web does, by scanning a QR code — with no per-message costs. It's an unofficial connection: for the time clock the risk of a ban is low, because it's your own staff who write in. If it happens, you switch number without losing any records and clocking in carries on by SMS. You can also use Meta's official WhatsApp Business." },
          { q: "Can I correct a record?", a: "Yes. The correction is added as a new line, with who corrected it and why. The original record is never deleted — that's what gives the record its value in an inspection." },
          { q: "Can staff cheat?", a: "It's very hard: the code expires and works only once, the location is checked and the time comes from the server. Anything we can't confirm is flagged for validation." },
          { q: "I already use OficinaOS. How do I turn it on?", a: "It's an OficinaOS Pro extra: you don't need the waiting list. See the Time clock guide." },
        ],
      },
    },
    atendimento: {
      metaTitle: "AI customer service on WhatsApp — replies to customers even when you're closed | OficinaOS",
      metaDesc:
        "An assistant that answers your customers on WhatsApp and by SMS: opening hours, prices, addresses and questions. When it doesn't know, it hands over to a person. Waiting list open.",
      hero: {
        label: "AI customer service",
        badge: "Coming soon for every business",
        title: "An assistant that answers your customers on WhatsApp. Even when you're closed.",
        subtitle:
          "It replies instantly about opening hours, prices, addresses and frequently asked questions. When it doesn't know, it hands the conversation to someone on your team. On the WhatsApp number your business already uses.",
        cta: "Join the waiting list",
        ctaSecondary: "See how it works",
        proNote: "Run a repair shop? The WhatsApp and SMS assistant — which knows the status of every repair — is already included in",
        proLink: "OficinaOS Pro.",
      },
      chat: {
        title: "WhatsApp — Restaurant (example)",
        caption: "Sample conversation: a customer asks about opening hours and requests a table out of hours; the assistant replies and passes the request to the team.",
        messages: [
          ["in", "Good evening, are you open tomorrow? And can you do a table for 6?"],
          ["out", "Good evening! Tomorrow, Saturday, we're open from 12 pm to 3 pm and from 7 pm to 11 pm. 😊 For 6 people, a colleague will confirm the booking. What time would it be for?"],
          ["in", "8:30 pm"],
          ["out", "Noted: 6 people, Saturday at 8:30 pm. The team will confirm with you here as soon as we open. Thank you!"],
        ],
        note: "The assistant always introduces itself as a virtual assistant and never makes things up: anything that isn't in the business profile goes to a person.",
      },
      problem: {
        title: "Unanswered messages are lost customers",
        lead: "Customers write at any time and expect a quick reply. Without help, this is what happens:",
        items: [
          { title: "You lose customers out of hours", text: "Someone who asks «are you open tomorrow?» at 10 pm and gets no reply asks a competitor instead." },
          { title: "The team keeps answering the same thing", text: "«What are your opening hours?», «Do you deliver?», «How much is it?» — dozens of times a day, interrupting their work." },
          { title: "Messages get lost", text: "Nobody knows who has already replied, and the customer is left waiting." },
        ],
      },
      steps: {
        title: "How it works",
        lead: "Set up in minutes, without filling in forms.",
        items: [
          { title: "Connect the business's WhatsApp", text: "Scan a QR code with the business phone, as with WhatsApp Web. The number stays yours. There's also Meta's official connection." },
          { title: "The assistant learns about your business", text: "Tell it your business's name: it reads your website and your profile, writes the business profile (opening hours, address, services, prices) and asks you a handful of questions about what's missing. Nothing goes live without your approval." },
          { title: "It replies, and the team handles the rest", text: "The assistant answers what's in the profile. Anything it doesn't know, or that needs a person, goes to the team with a notification on their phone." },
        ],
      },
      benefits: {
        title: "What you gain",
        items: [
          { title: "Replies 24 hours a day", text: "Nights, weekends and bank holidays. Customers always get an answer." },
          { title: "Fewer interruptions", text: "Repeated questions no longer reach the team." },
          { title: "Nobody goes unanswered", text: "Anything the assistant doesn't know goes to a person, with a notification." },
          { title: "On your own number", text: "Customers write to the same WhatsApp as always." },
          { title: "By SMS too", text: "Customers without WhatsApp get replies by SMS; if WhatsApp fails, SMS makes sure notifications still go out." },
          { title: "Keeps learning", text: "When the team answers a new question, the assistant suggests saving it for next time." },
        ],
      },
      trust: {
        title: "What it does — and what it doesn't",
        lead: "A useful assistant is one that knows its limits.",
        items: [
          { title: "Only answers with what the business has approved", text: "Opening hours, address, services, indicative prices, terms and frequently asked questions from your profile." },
          { title: "Takes requests, doesn't confirm them", text: "Bookings, quotes and contact requests go to the team: it's always a person who confirms." },
          { title: "Never makes things up", text: "No prices, timescales or promises beyond the profile. When in doubt, it says the team will reply." },
          { title: "Never pretends to be a person", text: "It introduces itself as a virtual assistant, and customers can ask to speak to someone at any time." },
        ],
      },
      privacy: {
        title: "Your customers' data",
        items: [
          "The AI only sees the business profile and the conversation with that customer.",
          "Conversations aren't used to train AI models.",
          "Servers in the European Union, kept separate for each business.",
          "You can review every conversation in the dashboard and take over any of them.",
        ],
      },
      forWhom: {
        title: "Who it's for",
        yesTitle: "For businesses that get messages every day",
        yes: ["Restaurants", "Shops and retail", "Clinics and salons", "Holiday lets", "Workshops and services", "Gyms"],
        noTitle: "Maybe not for you",
        no: "If you get only a few messages a week, answering by hand is still the simplest option. If you need a contact centre with dozens of agents, a contact centre platform will suit you better.",
      },
      needs: {
        title: "What you need to get started",
        head: ["What", "Required?", "What for"],
        rows: [
          ["A phone with the business's WhatsApp", "Yes (quick connection)", "The assistant replies on that number. It stays connected to the internet."],
          ["Your business details with Meta", "Only for official WhatsApp", "Tax number, address and a number to verify. We handle the rest."],
          ["An Android phone with a SIM card", "Only for SMS", "For customers without WhatsApp, and as a backup."],
        ],
        note: "You don't need a website or an online shop — but if you have them, the assistant learns from them.",
        scrollLabel: "Horizontally scrolling table",
      },
      pricing: {
        title: "How much it costs",
        lead: "A fixed monthly fee with conversations included, no per-message costs on the quick connection and no lock-in.",
        standaloneTitle: "For any business",
        standaloneText: "Price to be announced at launch, with the option to use your own AI key. People on the waiting list get the launch terms first.",
        proTitle: "For repair shops",
        proText: "The WhatsApp and SMS assistant is already included in OficinaOS Pro, from {proPrice}/month, with {days} days free.",
        proLink: "Discover OficinaOS Pro",
        note: "On Meta's official WhatsApp, Meta charges your business for messages directly, with 1,000 free replies a month.",
      },
      waitlist: {
        title: "Join the AI customer service waiting list",
        subtitle: "We'll let you know as soon as it's available for your business — and help you set it up. No commitment.",
        button: "Join the waiting list",
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          { q: "Can the assistant give wrong answers?", a: "It can make mistakes, like anyone. That's why it only answers with what's in your profile, never makes up prices or timescales and hands over to the team when in doubt. You can review every conversation and improve the profile." },
          { q: "Do customers know they're talking to a machine?", a: "Yes. The assistant introduces itself as a virtual assistant, and customers can ask to speak to a person at any time." },
          { q: "Which WhatsApp is used?", a: "By default, the quick connection: we connect the business's WhatsApp by scanning a QR code, with no per-message costs. It's unofficial, with a small risk of a ban that we keep down (it only replies to people who write in, never sends in bulk, human pace). If you want no risk at all, use Meta's official WhatsApp." },
          { q: "Can the team still reply?", a: "Yes. You can take over any conversation at any time, and the assistant stops replying in that conversation." },
          { q: "Does it work with my management software?", a: "For general questions you don't need an integration. To look up orders or services, we build a custom integration." },
          { q: "I run a repair shop. Do I need this?", a: "No: OficinaOS Pro already includes the WhatsApp and SMS assistant, and that one knows the status of every repair." },
        ],
      },
    },
  },
  pricingPage: {
    navLabel: "Pricing",
    metaTitle: "Pricing — OficinaOS free, OficinaOS Pro from €39/month, extras and services",
    metaDesc:
      "All OficinaOS prices in one place: free software, OficinaOS Pro with or without AI included, extras (Time clock, Balcão IA, official WhatsApp), services and calculator.",
    hero: {
      title: "Simple pricing, no surprises",
      lead: "The software is free. OficinaOS Pro has a base with almost everything and extras only for those who need them. Do the maths with the calculator.",
    },
    jump: { label: "Jump to", calc: "Calculator", plans: "OficinaOS and Pro", extras: "Extras", services: "Services", modules: "Other businesses" },
    calc: {
      title: "Work out your price",
      lead: "Choose what you need. The total updates instantly.",
      typeLabel: "Your business",
      typeShop: "Repair shop",
      typeOther: "Another kind of business",
      aiLabel: "Artificial intelligence",
      shopsLabel: "Number of shops",
      pontoLabel: "Time clock",
      pontoNone: "I don't need it",
      pontoTier: "Up to {n} employees",
      extrasLabel: "Other extras",
      balcaoLabel: "Balcão IA — inbox with an AI assistant for the team",
      waLabel: "Official WhatsApp from Meta — no risk of being blocked",
      monthlyLabel: "Total per month",
      firstMonthLabel: "In the first month, with official WhatsApp activation:",
      bundleApplied: "Pro Complete bundle applied",
      noscript: "Enable JavaScript to use the calculator; prices are in the tables below.",
      otherTitle: "For your business: waiting list",
      otherText: "The Time clock and AI customer service will be available on their own for any business. Prices will be announced at launch — join the waiting list to get them first.",
      lines: {
        baseAi: "OficinaOS Pro base (with AI)",
        baseOwn: "OficinaOS Pro base (no AI included)",
        shops: "Additional shops ({n})",
        ponto: "Time clock (up to {n} employees)",
        balcao: "Balcão IA",
        wa: "Official WhatsApp",
        bundle: "Pro Complete discount",
      },
    },
    plans: {
      title: "OficinaOS and OficinaOS Pro",
      lead: "The software is free forever. Pro adds what needs the internet.",
      head: ["Plan", "Price/month", "Who it's for"],
      rows: [
        ["OficinaOS", "€0", "Any repair shop: repairs, quotes, stock and till, on your PC. No messages to customers."],
        ["OficinaOS Pro base — no AI included", "{proByok}", "Messages, portal, invoicing and more, with your own AI key or without AI."],
        ["OficinaOS Pro base — with AI included", "{proAi}", "The same, with the AI assistant included (3,000 conversations per month)."],
        ["Pro Complete", "{bundle}", "Base with AI + Time clock (up to 5 employees) + Balcão IA."],
      ],
      more: "See everything Pro includes",
    },
    faq: {
      title: "Pricing questions",
      items: [
        { q: "Do prices include VAT?", a: "No. All prices exclude VAT. Monthly fees are per account (not per shop); services (installation, data import, hours) are paid once or by the hour." },
        { q: "Is there a minimum term?", a: "No. Cancel whenever you like. On the annual plan you choose one offer: setup done by us or two months free." },
        { q: "How do I pay?", a: "During the launch, we activate Pro with you and send you the invoice. The 14 free days don't require a card." },
        { q: "What if I need something different?", a: "More shops, more conversations, a different AI or installation on your own computer: get in touch and we'll put together a tailored proposal." },
      ],
    },
  },
  tradePage: {
    metaTitle: "OficinaOS Trade — parts and devices between professionals",
    metaDesc:
      "B2B network where verified technicians and shops buy and sell phones, parts and lots. No consumers, no commissions. Across the EU.",
    hero: {
      label: "OficinaOS Trade",
      badge: "Free at launch",
      title: "Parts and devices, from pro to pro.",
      subtitle:
        "The B2B network where verified technicians, repair shops and resellers buy and sell phones, computers, parts and lots with each other. No consumers, no minimum order and no per-deal commission.",
      cta: "Apply — it's free",
      ctaSecondary: "Browse the market",
      note: "Verified businesses only · Across the European Union",
      frameTitle: "Market",
      frameCaption:
        "Illustrative recreation of OficinaOS Trade search with sample data: the phrase «10 iPhone 13 screens in Porto, original» becomes filters (part, screen, original new, iPhone 13, Porto, stock of at least 10) and three matching listings appear, with the price reserved for verified members.",
      query: "10 iPhone 13 screens in Porto, original",
      searchButton: "Search",
      aiApplied: "Filters suggested by AI from your phrase.",
      aiBeta: "beta",
      aiUndo: "Search the text only",
      chips: ["Part", "Screen", "Original new", "iPhone 13", "Porto", "stock ≥ 10"],
      results: [
        ["iPhone 13 OLED screen", "Part · Original new · New", "Porto", "×12"],
        ["iPhone 13 screens · lot", "Lot · Original new · New", "Porto", "×25"],
        ["iPhone 13 screen with frame", "Part · Original new · New", "Porto", "×10"],
      ],
      priceLock: "Price visible to verified members",
    },
    how: {
      title: "How it works",
      lead: "From application to closed deal, in three steps.",
      steps: [
        {
          title: "Apply with your business",
          text: "In Portugal, your NIF and permanent-certificate code — or your start-of-activity proof if you're self-employed. Elsewhere in the EU, your intra-community VAT number checked against VIES plus your company registration document. Some applications are approved straight away; the rest are reviewed by a person.",
        },
        {
          title: "List what you have, request what you need",
          text: "Whole devices, parts, «for parts» units and lots. Or post a wanted request: sellers with matching stock are notified and you get the alerts.",
        },
        {
          title: "Make an offer and close on the record",
          text: "Offer, counter-offer and agreement are recorded with invoicing details. Payment goes directly between businesses, and reviews only open after delivery.",
        },
      ],
      frame: {
        title: "Agreements",
        caption:
          "Illustrative recreation of an OficinaOS Trade agreement with sample data: 12 iPhone 13 OLED screens, past the accepted, paid and shipped steps; the buyer's next step is to confirm receipt.",
        deal: "iPhone 13 OLED screen · ×12",
        sides: "Seller ⇄ Buyer",
        steps: ["Accepted", "Paid", "Shipped", "Received", "Closed"],
        yourTurn: "The next step is yours",
        action: "Confirm receipt",
        explainer: "Payment goes directly to the counterparty — the platform never moves money.",
      },
    },
    catalog: {
      title: "Devices, parts and lots",
      lead: "Every listing says what it is, what condition it's in and how many there are, in the same terms across the network.",
      groups: [
        { title: "Devices", items: ["Phone", "Tablet", "Laptop", "Desktop", "Watch", "Console"] },
        { title: "Parts", items: ["Screen", "Battery", "Board", "Camera", "Back cover", "Charging port", "Speaker", "Housing"] },
        { title: "Part quality", items: ["Original new", "Original pulled", "Service pack", "Aftermarket premium", "Aftermarket"] },
        { title: "Condition", items: ["New", "Like new", "Good", "Fair", "For parts"] },
      ],
      volume:
        "For volume: lots, quantity price tiers (1, 10+, 50+), minimum order and shipping lead time — or local pickup. No minimum purchase: you can trade a single unit.",
    },
    trust: {
      title: "Professionals only",
      lead: "What sets Trade apart from a WhatsApp group or a classifieds site.",
      items: [
        { title: "Verified businesses only", text: "Every member is a company or a registered self-employed professional, checked by tax number and document. No consumers." },
        { title: "Prices for verified members", text: "Outsiders can see stock exists, never the price or the seller." },
        { title: "Contacts kept out of listings", text: "Phone numbers, emails and IBANs written into a listing are hidden from anyone not yet verified." },
        { title: "Probation period", text: "New members start with a cap on open offers and a ceiling per deal." },
        { title: "Reviews after delivery", text: "You can only review after receipt. If something goes wrong, open a dispute and moderation mediates — reviews stay locked until it's resolved." },
        { title: "Reports that count", text: "Fraud, a stolen device or wrong information: the report goes to moderation, and repeated reports from verified members suspend the account until it's reviewed." },
      ],
      note: "The IMEI never appears in full: it is stored only as a hash, with the last 4 digits. Accounts lock after repeated failed sign-ins, password recovery uses a single-use link, and you can export or delete your data (GDPR).",
    },
    tools: {
      title: "Built for volume",
      lead: "Less form-filling, more stock listed.",
      beta: "beta",
      items: [
        { title: "Publish in 30 s", text: "Photo, model, condition and price. The rest comes from your last listing.", beta: false },
        { title: "Fill in with AI", text: "AI suggests the fields from your photos or a sentence. Nothing is published until you confirm.", beta: true },
        { title: "Plain-language search", text: "Type the way you talk: the phrase becomes filters you can remove one by one.", beta: true },
        { title: "Import and edit in a grid", text: "CSV or XLSX to create or update listings in bulk, plus bulk edits to prices, quantities and tiers.", beta: false },
        { title: "Wanted requests with alerts", text: "Say what you're looking for and your price ceiling. Sellers with matching stock are notified.", beta: false },
        { title: "AI agents and API", text: "Verified members can connect ChatGPT, Claude or their own agent over MCP, or use API keys.", beta: false },
      ],
      frame: {
        title: "Publish in 30 s",
        caption:
          "Illustrative recreation of the OficinaOS Trade quick-publish form with sample data: from one photo, AI filled five fields (part, screen, iPhone 13, original new, 10 units), flagged for confirmation before publishing.",
        photo: "Photo 1",
        assist: "Fill in with AI",
        fields: [
          ["Listing type", "Part"],
          ["Part", "Screen"],
          ["Model", "iPhone 13"],
          ["Quality", "Original new"],
          ["Quantity", "10"],
        ],
        aiTag: "AI",
        done: "Filled 5 fields, marked AI. Check them before publishing.",
        publish: "Publish",
      },
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How much does it cost?", a: "Nothing during launch. After that there will be a free plan for verified members and a monthly Pro subscription. There is no per-deal commission." },
        { q: "Where is it available?", a: "Across the whole European Union: businesses based in any of the 27 EU countries can apply. The app is available in Portuguese, Spanish and English." },
        { q: "I'm self-employed. Can I join?", a: "Yes. Trade is for independent technicians, repair shops and resellers. In Portugal, sole traders use their start-of-activity proof instead of the permanent certificate." },
        { q: "Who sees my prices?", a: "Only verified members. Outsiders can see stock exists, never the price or the seller." },
        { q: "How does payment work?", a: "Directly between businesses — the platform never moves money. Trade records the offer and agreement with invoicing details, and reviews only count after delivery." },
        { q: "Can I sell to consumers?", a: "No. Trade is between professionals only." },
        { q: "Do I need to use OficinaOS?", a: "No. Trade is a separate product: any business can sign up directly, whether or not it uses OficinaOS." },
      ],
    },
    cta: {
      title: "Join the network",
      lead: "Free during launch for verified technicians, repair shops and resellers across the European Union.",
      primary: "Apply — it's free",
      secondary: "Browse the market",
      member: "Already a member?",
      signin: "Sign in to Trade",
    },
  },
  footer: {
    license: "MIT License",
    credits: "Based on the open-source project",
    rights: "Free software for technicians, repair shops and resellers.",
    contact: "Contact",
    community: "Community",
    privacy: "Privacy",
    terms: "Terms",
    madeBy: "Made by",
    madeIn: "in Portugal",
    tagline: "Free software for people who repair, diagnose and resell tech.",
    columns: { products: "Products", resources: "Resources", community: "Community", project: "Project" },
    guide: "Full guide",
    updates: "What's new",
    install: "Install",
    releases: "Releases and notes",
    source: "Source code",
    designedBy: "Designed and built by",
    externalHint: "opens in a new tab",
  },
};

// SEO content pages (use cases and comparisons), same shape as `t.seoPage`.
// Not part of `Copy` — imported directly by the pages under src/pages/en/.
export const seoPages = {
  softwareAssistenciaTecnica: {
    metaTitle: "Repair service management software — free, in English",
    metaDesc:
      "Management software for phone repair service: repair tickets, quotes, stock and till. Free forever, with customer data staying on the shop PC.",
    badge: "Free software · Made in Portugal",
    title: "Software for phone repair service centres",
    subtitle:
      "Repair tickets, quotes the customer approves on their phone, stock and till — in a free app that runs on the shop PC, even with no internet.",
    ctaTitle: "Ready to try it?",
    ctaText:
      "Download, install on the shop PC and do your first ticket today. No account, no card, no monthly fees.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    answer: "OficinaOS is free software (MIT licence) for running a phone repair service: repair tickets, online quote approvals, stock, till and customer tracking — it runs on the shop PC and works without internet.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is OficinaOS really free?", a: "Yes. The licence is MIT: the core — repairs, quotes, stock, POS and backups — is free forever, with no mandatory account. OficinaOS Pro is an optional plan." },
      { q: "Does it work without internet?", a: "Yes. The app runs on a PC inside the shop and serves other devices over the local network. If the internet goes down, the shop keeps working." },
      { q: "Where does my customers' data live?", a: "On the shop PC. There is no telemetry and nothing leaves the local network unless you enable a Pro module — which simplifies GDPR compliance." },
    ],
    sections: [
      {
        heading: "What a repair service needs every day",
        paragraphs: [
          "A repair service lives on work orders: every device that comes in needs a ticket, a quote, reserved parts and a status the customer can check. OficinaOS covers that whole cycle, from drop-off to pick-up.",
        ],
        list: [
          "Intake ticket with brand, model, IMEI, condition and accessories, signed by the customer",
          "Quotes with parts and labour, approved or declined on the tracking page",
          "Clear repair statuses for the bench, with an assigned technician",
          "Stock with reorder alerts and parts deducted automatically",
          "Till / POS for selling accessories, recording cash, card and MB Way",
          "Receipt with tracking QR and warranty; certified invoices with the Pro module",
          "Automatic SMS to the customer when the repair is ready (Pro module)",
        ],
      },
      {
        heading: "Why it's different from the usual software",
        paragraphs: [
          "The best-known repair service software is cloud SaaS, with a monthly fee per seat and customer data on the vendor's servers. OficinaOS is free software (MIT licence) installed on the shop PC: free forever, no telemetry, and customer data stays inside the shop.",
          "Optional Pro modules — cloud customer portal, WhatsApp bot, online storefront, market prices, multi-shop — are part of OficinaOS Pro, an optional all-inclusive plan. The daily core is never behind a payment.",
        ],
        links: [
          { label: "Pro modules", href: "/en/pro" },
          { label: "Privacy policy", href: "/en/privacy" },
        ],
      },
      {
        heading: "Works without internet",
        paragraphs: [
          "The app runs on a PC inside the shop and serves the other devices over the local network — phones, tablets and the front-desk PC open the address in the browser, nothing to install. If the internet goes down, the shop keeps working.",
          "On Windows 10/11 the installer handles everything; there's also a portable package that runs from a folder (or USB stick) and a Docker image for Linux and macOS.",
        ],
        links: [
          { label: "Step-by-step install guide", href: "/en/docs" },
          { label: "News and releases", href: "/en/updates" },
        ],
      },
    ],
  },
  paraTecnicosIndependentes: {
    metaTitle: "Software for independent repair technicians — free",
    metaDesc:
      "For people who repair phones on their own: customer tickets, quotes and phone-based tracking, free with no monthly fee. Runs on a Windows PC.",
    badge: "Use case · Independent technician",
    title: "Repairing alone doesn't mean managing alone",
    subtitle:
      "If you work for yourself — at home, in a shared space or at a market stall — OficinaOS gives you tickets, quotes and a professional tracking page, free.",
    ctaTitle: "Try it on your next repair",
    ctaText:
      "Install it on your PC and do your first ticket today. No account, no card, no monthly fees.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    answer: "For an independent repair technician, OficinaOS provides customer tickets, quotes and a professional tracking page — free, on a Windows PC, with no monthly fee.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does it run on a normal PC?", a: "Yes. It runs on a Windows PC — probably the one already on your bench. Customers install nothing: they follow along in their phone's browser." },
      { q: "What does it cost for a solo technician?", a: "Zero. The licence is MIT and daily use is free. Optional Pro modules are added only when they make sense." },
      { q: "What if I open a shop with staff?", a: "You don't switch software: the same OficinaOS serves several workstations on the local network, with permission profiles per person." },
    ],
    sections: [
      {
        heading: "Less paper, fewer phone calls",
        paragraphs: [
          "Working alone means losing time answering \"is it ready yet?\" and digging through paper tickets or WhatsApp. OficinaOS keeps every repair with customer, device, status and quote — and the customer follows it all on a public page without calling you.",
        ],
        list: [
          "Full ticket per repair: customer, IMEI, condition and accessories",
          "Quote approved by the customer on the tracking page, with timestamp",
          "Tracking page per repair — free on the shop network; outside it, with the Pro module",
          "Searchable history: returning customers and previous repairs appear instantly",
          "Receipt with tracking QR and warranty on handover",
        ],
      },
      {
        heading: "Professional with no fixed costs",
        paragraphs: [
          "For an independent technician, a €20–60 monthly fee is a real slice of revenue. OficinaOS is free (MIT licence): the same everyday features as paid software, with no mandatory account or telemetry.",
          "It runs on a Windows PC — probably the one already on your bench — and customers install nothing: they follow along in their phone's browser.",
        ],
      },
      {
        heading: "It grows when you grow",
        paragraphs: [
          "If you open a shop or hire someone tomorrow, you don't switch software: the same OficinaOS serves several workstations on the local network, with permission profiles per person. And the optional Pro modules — WhatsApp bot, online storefront, certified invoicing — get added when they make sense.",
        ],
        links: [
          { label: "Pro modules", href: "/en/pro" },
          { label: "Documentation", href: "/en/docs" },
        ],
      },
    ],
  },
  deixarExcelPapel: {
    metaTitle: "Leaving Excel and paper behind in your repair shop",
    metaDesc:
      "Compared to paper and Excel, management software gives a repair shop searchable tickets, online quote approvals and fewer phone calls. OficinaOS is free.",
    badge: "Comparison · Paper/Excel vs software",
    title: "From paper and Excel to management software",
    subtitle:
      "Paper doesn't notify the customer, Excel doesn't record who approved the quote, and both cost hours. See what changes in practice — and what it costs to switch (nothing).",
    ctaTitle: "Switch in an afternoon",
    ctaText:
      "Install OficinaOS on the shop PC and do your first ticket today. No account, no card, no monthly fees.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    answer: "Migrating from paper and Excel to OficinaOS takes an afternoon: install it on the shop PC and new tickets start going into the app. The customer checks the repair status themselves and the quote is approved with a record.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Do I have to import old records?", a: "No. There is no mandatory import — new tickets go into the app and old records can stay on paper." },
      { q: "Do other devices in the shop need to install anything?", a: "No. Phones, tablets and the front-desk PC open the app in the browser over the local network." },
      { q: "What do I gain day to day?", a: "Searchable tickets by customer, IMEI or date; quotes approved online with a timestamp; and fewer 'is it ready?' calls." },
    ],
    sections: [
      {
        heading: "What paper and Excel don't do",
        paragraphs: [
          "Paper and Excel \"work\" because they cost nothing — but they charge in time and errors. These are the points where a repair shop loses the most:",
        ],
        list: [
          "The customer calls to ask the status; every call interrupts a repair",
          "The quote gets approved \"on the phone\" — no record of when or by whom",
          "Tickets searched by memory or folder, not by customer, IMEI or date",
          "Stock goes down when a part is used — but nobody records it and reordering fails",
          "No reliable history of margins, revenue or average repair time",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: [],
        table: {
          head: ["", "Paper / Excel", "OficinaOS"],
          rows: [
            ["Repair status", "The customer calls", "Public page the customer checks themselves"],
            ["Quote approval", "Verbal, unrecorded", "Online, with date and time logged"],
            ["Finding a ticket", "Flipping through folders", "By customer, device, IMEI or date"],
            ["Parts stock", "Manual recount", "Deducted on repair, with reorder alerts"],
            ["Day's till", "Counting at close", "Logged in the POS, per payment method"],
            ["Cost", "\"Free\", expensive in time", "Free (MIT)"],
          ],
        },
      },
      {
        heading: "The migration in practice",
        paragraphs: [
          "There's no mandatory import or training: it installs on the shop PC in minutes and new tickets start going into the app. Old records can stay on paper — what matters is that tomorrow's repairs are already organised.",
          "The other devices in the shop (phones, tablets, the front-desk PC) open the app in the browser over the local network, nothing to install — and it works even without internet.",
        ],
        links: [
          { label: "Step-by-step install guide", href: "/en/docs" },
          { label: "Repair service software", href: "/en/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  softwarePagoVsOficinaOS: {
    metaTitle: "Monthly-fee software or free OficinaOS — comparison",
    metaDesc:
      "Repair shop management software: €20–60/month in the cloud vs OficinaOS free on your PC. Compare cost, customer data and working offline.",
    badge: "Comparison · Subscription vs free",
    title: "Monthly-fee software or free OficinaOS?",
    subtitle:
      "Most repair shop software charges per seat every month. OficinaOS is free software installed on your PC. Compare the differences that matter.",
    ctaTitle: "Compare with what you pay today",
    ctaText:
      "Download and test it alongside your current software. No account, no card, no monthly fees.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    answer: "A typical SaaS charges €20–60 per month per seat and keeps data in the vendor's cloud. OficinaOS is free (MIT), runs on the shop PC and customer data stays there — Pro modules are optional.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "What's the real cost difference?", a: "Repair shop SaaS typically costs €20–60/month per seat, with customer features in pricier plans. The OficinaOS core costs €0." },
      { q: "Does my data leave the shop?", a: "No. The database stays on the shop PC — no telemetry and no subprocessors unless you enable a Pro module." },
      { q: "What if the internet goes down?", a: "The shop keeps working: the app runs locally and serves devices over the internal network." },
    ],
    sections: [
      {
        heading: "The cost model",
        paragraphs: [
          "The usual repair service software is SaaS: monthly fee per seat or technician, typically €20–60/month, and customer-facing features — portal, notifications — sit in pricier plans. Over a year that's hundreds of euros, every year.",
          "OficinaOS is MIT-licensed: the full app — repairs, quotes, stock, POS, backups — is free forever, for one seat or ten. Pro modules (cloud portal, WhatsApp bot, online storefront, multi-shop) are part of OficinaOS Pro, an optional all-inclusive plan, for whoever needs them.",
        ],
      },
      {
        heading: "Where your customers' data lives",
        paragraphs: [
          "In a SaaS, your customers' data lives on the vendor's servers — with subprocessors and often transfers outside the EU to declare under GDPR. In OficinaOS, the database is on your shop PC: no telemetry and nothing leaves the local network unless you enable a Pro module.",
          "For most shops this simplifies compliance: fewer subprocessors, fewer transfers, and the shop keeps working if the internet goes down.",
        ],
        links: [{ label: "Privacy policy", href: "/en/privacy" }],
      },
      {
        heading: "Side by side",
        paragraphs: [],
        table: {
          head: ["", "Typical SaaS", "OficinaOS"],
          rows: [
            ["Cost", "€20–60/month per seat", "Free (MIT); optional Pro modules"],
            ["Customer data", "In the vendor's cloud", "On your shop PC"],
            ["Works without internet", "Usually not", "Yes — serves the shop over LAN"],
            ["Repair tracking", "Sometimes, in expensive plans", "Free public page included"],
            ["Open code", "Rarely", "MIT — the software is yours"],
            ["Lock-in", "Ongoing subscription", "Open source — walk away anytime"],
          ],
        },
      },
      {
        heading: "When Pro makes sense",
        paragraphs: [
          "Pro modules add what genuinely needs to leave the shop: cloud customer portal, WhatsApp bot, certified invoicing (Portugal only), online storefront, market prices, multi-shop and remarketing. They're included in OficinaOS Pro, an optional plan with a 14-day free trial.",
        ],
        links: [
          { label: "Pro modules", href: "/en/pro" },
          { label: "Documentation", href: "/en/docs" },
        ],
      },
    ],
  },
  softwareDeGestaoOficina: {
    metaTitle: "Repair shop management software — free and open source",
    metaDesc:
      "OficinaOS is free repair shop management software (MIT): repair tickets, customers, quotes and tracking on the shop's own network.",
    badge: "Guide · Shop management",
    title: "Management software that doesn't charge for existing",
    subtitle:
      "OficinaOS is the management software for your repair shop: every repair with customer, device, status and quote — free, offline-first and open source.",
    ctaTitle: "Install it today",
    ctaText:
      "Download the Windows installer or run `docker compose up` on Linux. First ticket in minutes.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the install guide",
    answer: "OficinaOS is free repair shop management software (MIT licence): every repair carries customer, device, status and quote, with tracking on the customer's phone — offline-first and open source.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "What does it replace day to day?", a: "The notebook and the spreadsheet: searchable tickets with photos, IMEI, status, quote and customer history, plus a receipt with QR and warranty." },
      { q: "Does it serve several workstations?", a: "Yes — several workstations on the same local network, with permission profiles per person." },
      { q: "Is it genuinely free?", a: "Yes, MIT licence and open source, with no mandatory account or telemetry. Data stays on the shop PC." },
    ],
    sections: [
      {
        heading: "What the software does for you",
        paragraphs: [
          "A repair shop runs on tickets: who dropped off what, when, for how much. OficinaOS replaces the notebook and the spreadsheet with searchable tickets carrying photos, IMEI, status, quote and customer history.",
        ],
        list: [
          "Ticket per repair with customer, device and status",
          "Quote with recorded customer approval",
          "Receipt with tracking QR and warranty",
          "Several workstations on the same local network, with permission profiles",
          "Repair tracking on the customer's phone — free on the shop network",
        ],
      },
      {
        heading: "Genuinely free, no asterisks",
        paragraphs: [
          "MIT licence, open source, no mandatory account or telemetry. Your data stays on the shop PC — not in a vendor's cloud that can raise the price tomorrow.",
          "Optional Pro modules (certified invoicing, WhatsApp bot, online storefront) get added when they make sense — never to unlock the basics.",
        ],
        links: [
          { label: "Paid software vs OficinaOS", href: "/en/software-pago-vs-oficinaos" },
          { label: "Leaving Excel and paper", href: "/en/deixar-excel-papel" },
          { label: "Documentation", href: "/en/docs" },
        ],
      },
    ],
  },
  rastrearReparacaoCliente: {
    metaTitle: "Customer tracks the repair online — fewer phone calls",
    metaDesc:
      "Tracking page per repair: the customer sees live status on their phone without calling the shop. Free on the local network with OficinaOS.",
    badge: "Use case · Tracking",
    title: "\"Is it ready yet?\" stops being your phone ringing",
    subtitle:
      "Every repair gets a tracking page with live status. The customer follows it via the receipt QR or the link — free on the shop network; outside it, with the Pro module.",
    ctaTitle: "Fewer calls from the first ticket",
    ctaText: "Free, no account, no card.",
    ctaPrimary: "Download free",
    ctaSecondary: "How the portal works",
    ctaSecondaryHref: "/docs/portal",
    answer: "Every repair gets a tracking page with live status: the customer follows it via the receipt QR or the link, without calling the shop. Free on the shop network; outside it, with the Pro module.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does the customer need to install an app?", a: "No. They open the tracking page in the phone's browser and see the status — received, in diagnosis, in repair, ready." },
      { q: "Is the quote approval recorded?", a: "Yes. The customer approves on the page itself and the ticket stores the time and approved value." },
      { q: "Does it work outside the shop network?", a: "On the local network it's free; outside access requires the Pro module (cloud customer portal)." },
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "When you create the ticket, the app generates a tracking link and QR. The customer opens the page on their phone and sees the repair status — received, in diagnosis, in repair, ready — without installing anything.",
        ],
        list: [
          "QR on the receipt handed over at the counter",
          "Status updated in real time by you on the ticket",
          "Quote approval on the page itself, with timestamp",
          "Free on the shop network; outside access requires the Pro module",
        ],
        links: [{ label: "Customer portal guide", href: "/en/docs" }],
      },
      {
        heading: "The effect on the shop",
        paragraphs: [
          "Every \"is it ready?\" call costs 2-3 minutes of bench time. In a shop with 20 open repairs that's hours a week. The tracking page answers before the customer calls.",
        ],
        table: {
          head: ["", "Without tracking", "With OficinaOS"],
          rows: [
            ["Customer knows the status", "Calls the shop", "Sees it on their phone"],
            ["Quote approval", "Call or message", "Button on the page, logged"],
            ["Trust", "\"I'm on it\"", "Real status visible"],
          ],
        },
      },
    ],
  },
  orcamentosAprovadosOnline: {
    metaTitle: "Quotes approved online — logged with time and value",
    metaDesc:
      "Repair quotes approved by the customer on the tracking page, with time and value logged. No calls, no WhatsApp screenshots.",
    badge: "Use case · Quotes",
    title: "An approved quote is a logged quote",
    subtitle:
      "Instead of \"approve on the phone and forget\", the customer approves the quote on the tracking page — and the approval is logged on the ticket with time and value.",
    ctaTitle: "Test it on the next quote",
    ctaText: "Free, no monthly fee.",
    ctaPrimary: "Download free",
    ctaSecondary: "Read the documentation",
    answer: "With OficinaOS, the customer approves the quote on the tracking page — and the approval is logged on the ticket with time and value, instead of an unrecorded phone call.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "What happens if the price changes mid-repair?", a: "The updated quote goes back to the page and the customer approves again — the new approval is logged with time and value." },
      { q: "Is there a record for disputes?", a: "Yes. The QR receipt and warranty reference the same ticket where the quote was approved." },
      { q: "Do I need internet in the shop?", a: "The local network is enough; approval from outside the shop requires the Pro module." },
    ],
    sections: [
      {
        heading: "Why \"approved on the phone\" isn't enough",
        paragraphs: [
          "When the price changes — pricier part, bigger problem — the verbal approval vanishes. With OficinaOS, the customer sees the quote on the page and taps approve: the ticket stores the time and the approved value.",
        ],
        list: [
          "Value and description visible on the tracking page",
          "Approval with timestamp logged on the ticket",
          "History per customer and per repair",
          "Works on the shop network; from outside, with the Pro module",
        ],
      },
      {
        heading: "Fewer disputes at handover",
        paragraphs: [
          "The QR receipt and the warranty handed over at the end reference the same ticket where the quote was approved. If there's a question, both sides have the same record.",
        ],
        links: [
          { label: "Customer tracks the repair", href: "/en/rastrear-reparacao-cliente" },
          { label: "Repair service software", href: "/en/software-assistencia-tecnica" },
        ],
      },
    ],
  },
  alternativasSoftwareOficina: {
    metaTitle: "Alternatives to expensive repair shop software",
    metaDesc:
      "RepairDesk, Fixably and similar software charge €20–150/month. OficinaOS gives you the essentials free: tickets, quotes and tracking — compare.",
    badge: "Comparison · Alternatives",
    title: "Before paying a monthly fee, compare",
    subtitle:
      "Repair shop software charges per seat and per month. OficinaOS charges zero for the essentials — and the code is open.",
    ctaTitle: "Compare with what you have today",
    ctaText: "Download and test it with your own repairs — free.",
    ctaPrimary: "Download free",
    ctaSecondary: "Pro modules",
    ctaSecondaryHref: "/pro",
    answer: "Tools like RepairDesk or Fixably start at ~€20–60/month per seat. OficinaOS covers the essentials — tickets, quotes and tracking — for free, with open code and data on the shop PC.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does OficinaOS do what RepairDesk does?", a: "For the essentials, yes: tickets, quotes, stock, POS and customer tracking. Certified invoicing, online storefront and the WhatsApp bot are optional Pro modules." },
      { q: "What about the code?", a: "It's open (MIT) — you can inspect it, adapt it and never get locked into a subscription." },
      { q: "When does a SaaS pay off?", a: "If you run several shops or need an ERP with dedicated support. For most repair shops, the free essentials are enough." },
    ],
    sections: [
      {
        heading: "What the market charges",
        paragraphs: [
          "RepairDesk, Fixably and the like start at ~€20–60/month per seat; features like SMS and portals sit in pricier plans. For a small shop that's €240–720 a year before invoicing a single euro.",
        ],
        table: {
          head: ["", "Typical SaaS", "OficinaOS"],
          rows: [
            ["Core price", "€20–60/month per seat", "€0 (MIT)"],
            ["Where data lives", "Vendor's cloud", "Your shop PC"],
            ["Works without internet", "Usually not", "Yes"],
            ["Customer portal", "Paid plan", "Free on the network; outside with Pro"],
            ["Open source", "Rarely", "MIT"],
          ],
        },
      },
      {
        heading: "When paid makes sense",
        paragraphs: [
          "If you need certified invoicing, an online storefront, a WhatsApp bot or a customer portal reachable from outside the shop, the Pro modules cover that — optional, without forcing you to swap the free core.",
          "If you run several shops or need a full ERP, a SaaS with dedicated support may pay off. For most repair shops, the free essentials are enough.",
        ],
        links: [
          { label: "Paid software vs OficinaOS", href: "/en/software-pago-vs-oficinaos" },
          { label: "Pro modules", href: "/en/pro" },
        ],
      },
    ],
  },
};
