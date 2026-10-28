import type { Copy } from "./pt";
import {
  BACKUP_DOCS_URL,
  DIAG_REPO_URL,
  DIAG_ZIP_URL,
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  INSTALL_ZIP_URL,
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
    productItems: {
      os: { name: "OficinaOS", desc: "Repairs, customers, stock and till in one app. Free." },
      diag: { name: "Diag", desc: "Phone diagnostics over USB, with a report for the customer." },
      pro: { name: "Pro", desc: "Optional modules: WhatsApp, customer portal, invoicing and Cloud." },
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
        desc: "In-app and WhatsApp notifications keep your team and your customers in the loop.",
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
    badge: "Beta — free in the pilot programme",
    title: "Pro modules",
    subtitle:
      "The program you download is and always will be free and open source (MIT license) — it will never be paid. Pro modules are optional add-ons that need to “reach the internet”, through OficinaOS Cloud. They're in beta: beta testers get 90 days free on every module when Pro launches.",
    statusLabel: "Beta",
    teaser:
      "Customer portal, WhatsApp, certified invoicing, online storefront and more — optional modules on top of the free app, for independent technicians, repair shops and resellers.",
    more: "Explore Pro",
    ctaBeta: "Request beta access",
    groups: ["Talk to customers", "Sell and invoice", "Run and grow"],
    cloudEngine: "OficinaOS Cloud is the engine behind these modules: it connects the app to the internet only for what you switch on.",
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
    ],
    signup: {
      title: "Join the Pro beta",
      subtitle:
        "Leave your details and we'll get in touch to switch the modules on. No commitment — pilot members get 90 days free on all Pro modules when Pro launches.",
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
      button: "Request beta access",
      mailSubject: "OficinaOS Pro beta — access request",
      note: "We only use these details to contact you about the Pro beta.",
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
      "The app runs on a PC inside the shop and has no telemetry: by default, none of your customers' data leaves the shop. Only optional modules — including OficinaOS Cloud (Pro) — send data out, and each one is declared below.",
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
            ["Notifications", "In-app alerts, editable message templates and WhatsApp/SMS send queue"],
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
          "It asks for admin once (services, firewall and the backup task) and does everything by itself. At the end the browser opens at http://localhost:4000. First login: user admin, password braindead — the app forces you to change both.",
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
          "The shop creates a Cloud account and pairs the app with a code (once). Each module is switched on server-side — no license files. The app syncs with the Cloud every ~2 minutes to send and receive.",
          "Without pairing, everything keeps working on the local network — Pro modules simply don't appear.",
        ],
        table: {
          head: ["Module", "What the shop's customer gets"],
          rows: [
            ["Customer portal", "Public link with repair status and approve/decline quote buttons — no need to call the shop"],
            ["WhatsApp bot", "Messages the shop's WhatsApp and gets the repair status automatically; approves quotes with YES/NO"],
            ["Remote diagnostics", "Runs the phone diagnostic at home (oficinaos-diag, free) and sends it to the shop with a code"],
            ["AI reports", "Diagnostic report written in plain language, ready to hand to the customer"],
            ["Certified invoicing", "Legal invoice or invoice-receipt issued straight from the repair or sale — via InvoiceXpress, on the shop's own account — Portugal only"],
            ["Online storefront", "A public page with items from the shop's catalogue; the customer reserves and the reservation lands in the Requests queue"],
            ["Parts wanted", "A board between OficinaOS shops to request parts and reply “I have it” — the deal is settled between shops"],
            ["Market prices", "The anonymous median of other shops' repair and part prices, to compare with your own"],
            ["Multi-shop", "Revenue and repairs from every shop of the same owner on one OficinaOS Cloud dashboard"],
            ["WhatsApp remarketing", "An automatic message to consenting customers whose last repair was a while ago"],
          ],
        },
        links: [],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "The full app is free and open source (MIT) — no limits, no accounts, no trial period. Forever.",
          "Pro modules are in beta: during this period they're free while we measure the real value they bring to the counter. When prices are announced they'll be simple monthly subscriptions — no lock-in, no hidden costs.",
          "* WhatsApp note: replying to customers within the 24-hour window is free. Proactive notifications («it's ready») outside that window need Meta-approved templates, which carry small per-message fees — Meta's cost, not ours.",
        ],
        table: {
          head: ["What", "Status", "Price"],
          rows: [
            ["Full app (core)", "Free forever", "€0"],
            ["OficinaOS Diag (tool)", "Free forever", "€0"],
            ["Customer portal", "Available (beta)", "TBA — free during beta"],
            ["WhatsApp bot", "Available (beta)", "TBA — free during beta*"],
            ["SMS channel (Android gateway)", "Included in core", "€0 — free"],
            ["Diagnostics intake", "Available (beta)", "TBA — free during beta"],
            ["AI reports", "Available (beta)", "TBA — per report"],
            ["Invoicing (InvoiceXpress)", "Available (beta)", "TBA — free during beta. The InvoiceXpress account is the shop's own and carries its own service cost"],
            ["Online storefront (+ customisation)", "Available (beta)", "TBA — free during beta"],
            ["Parts wanted", "Available (beta)", "TBA — free during beta"],
            ["Market prices", "Available (beta)", "TBA — free during beta"],
            ["Multi-shop", "Available (beta)", "TBA — free during beta"],
            ["WhatsApp remarketing", "Available (beta)", "TBA — free during beta. Template messages carry Meta's cost*"],
          ],
        },
        links: [],
      },
      {
        heading: "Customer portal (Pro)",
        paragraphs: [
          "With the module active, every repair gets a «Public link» button on its detail page. Clicking it publishes a redacted snapshot to the Cloud — status, device, quote, due date and timeline — and copies the link.",
          "The link is a per-job secret (a random 16-character code): whoever has it sees the page. Send it to the customer by SMS, WhatsApp or print it on the intake slip. The page updates itself when the status changes in the app.",
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
          "Honest notes: replies can take up to ~2 minutes (sync cycle); setup uses Meta's official WhatsApp Business Platform and during the beta we help with the setup.",
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
        heading: "SMS channel (free in core)",
        paragraphs: [
          "The same automatic assistant, but over SMS — for shops that don't want (or don't yet have) a Meta business account. An Android phone with a SIM stays in the shop acting as the bridge: the app sends and receives SMS through it, over the normal mobile network. It's free and needs no Cloud — everything happens on the shop network.",
          "No Meta accounts, no template approvals, no per-message cost — only the shop SIM's plan (plans with bundled SMS make the marginal cost zero). Setup takes ~5 minutes and the guide walks through it step by step.",
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
          "Five more Pro modules, all in beta and switched on in the OficinaOS Cloud account. Each has a short guide:",
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
            ["How much does it cost?", "The full app is free (MIT license). Pro modules are optional subscriptions, in beta."],
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
            "The link is a per-repair secret (a random 16-character code): whoever has it sees the page — so send it only to that repair's customer. Removing the link on the job card deletes the public page.",
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
            "Replies can take up to ~2 minutes (sync cycle) — not instant",
            "Replying to customers is free; starting conversations («your repair is ready») needs Meta-approved templates with per-message fees",
            "Flood control: max 20 messages/hour per number — spam protection",
            "Audio and images aren't interpreted — they go to a human",
            "In test mode only Meta-verified numbers get replies — in production there's no such limit",
          ],
          paragraphs: [],
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
        "Notifications and the automatic assistant over SMS, through an Android phone with a SIM in the shop — no Meta, no per-message cost.",
      sections: [
        {
          heading: "What the module does",
          paragraphs: [
            "With the SMS channel active, the app uses an Android phone in the shop as a «gateway»: customer notifications (repair ready, quote sent, reminders) go out as SMS over the normal mobile network — and customer replies come into the app and get an automatic answer.",
            "It's the same assistant as WhatsApp, with the same commands — the customer texts «status» and gets the repair progress, texts «quote» and gets the amount, replies YES or NO to approve or decline. The difference: no Meta account, no approved templates, and no internet needed on the customer's phone.",
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
          heading: "What you need",
          list: [
            "An Android phone — an old one is fine; it stays in the shop permanently",
            "An active SIM card — ideally with SMS bundled in the plan (message cost is the carrier's)",
            "The free «SMS Gateway for Android» app (sms-gate.app), from the Play Store or the official site",
            "The phone and the OficinaOS PC on the same Wi-Fi/LAN",
            "Nothing else — the SMS channel is free and needs no Cloud account or modules",
          ],
          paragraphs: [],
          links: [],
        },
        {
          heading: "Setup — step by step (~5 minutes)",
          paragraphs: [
            "1. On the Android phone, install «SMS Gateway for Android» (sms-gate.app) from the Play Store or the official site.",
            "2. Open the app and enable «Local Server» mode. The app shows three things: the local address (e.g. 192.168.1.50:8080), a username and a password.",
            "3. Make sure the phone is on the same Wi-Fi network as the PC running OficinaOS.",
            "4. On the PC, in the OficinaOS app: Menu → Notifications → Channels → SMS section.",
            "5. In the «Gateway URL» field, type http:// followed by the address shown on the phone — e.g. http://192.168.1.50:8080.",
            "6. Fill in the username and password exactly as shown on the phone, then save.",
            "7. Press «Send test SMS», enter your own number and confirm the message arrives.",
            "8. Finally, press «Register webhook on phone» — this tells the phone app where to forward SMS received from customers.",
          ],
          links: [
            { label: "SMS Gateway for Android (official site)", href: "https://sms-gate.app" },
          ],
        },
        {
          heading: "The webhook detail — why localhost won't work",
          paragraphs: [
            "The «Register webhook» button teaches the phone app where to forward incoming SMS — the shop PC. To do that, OficinaOS needs to know its own network address, which it discovers from the address you use in the browser.",
            "If you open the app at http://localhost:4000, the webhook gets registered as «localhost» — which to the phone means itself, not the PC. Registration fails or points at the wrong place.",
            "Open the app using the PC's network address (e.g. http://192.168.1.20:4000 — the same one you use on other shop devices) before pressing «Register webhook». The app warns you if you're on localhost.",
          ],
          links: [],
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
            "The conversation between the app and the phone happens entirely inside the shop network (LAN) — nothing goes through OficinaOS Cloud or external servers. The SMS itself travels over the carrier's mobile network, like any SMS.",
            "The gateway password is stored encrypted (AES-256-GCM) and never shown again in the fields — you can only replace it.",
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
              ["Customer replies and nothing happens", "Is the webhook registered? («Register webhook» button) — and was it registered with the app opened via the network IP, not localhost?"],
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
            "If you swap the phone or SIM, redo the configuration and register the webhook again",
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
          "Automatic SMS to the customer when the repair is ready (via an Android phone in the shop)",
          "Automatic daily database backups",
        ],
      },
      {
        heading: "Free, no asterisks",
        paragraphs: [
          "Most repair shop software charges monthly per seat or per technician. OficinaOS is open source (MIT licence): the full app — repairs, quotes, stock, POS, backups — is free forever, for one shop or ten workstations.",
          "Optional Pro modules (cloud customer portal, WhatsApp bot, online storefront, market prices, multi-shop) are beta subscriptions for shops that need them. The core you use every day is never behind a paywall.",
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
        text: "At the end your browser opens http://localhost:4000. First sign-in: user admin, password braindead — the app makes you change both. On other devices on the network: http://oficinaos.local:4000.",
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
      "Free, open-source Windows app that reads Android and iPhone over USB: battery, screen, touch, sensors and storage, with an HTML/JSON report. No account, no internet.",
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
    metaTitle: "OficinaOS Pro — online modules for technicians, repair shops and resellers",
    metaDesc:
      "Customer portal, WhatsApp, certified invoicing, online storefront and more — optional modules on top of free OficinaOS, powered by OficinaOS Cloud. In beta.",
    hero: {
      label: "OficinaOS Pro",
      title: "The app is free. Pro takes it beyond the counter.",
      subtitle:
        "Optional modules for independent technicians, repair shops and resellers: talk to customers, sell and invoice, manage and grow. Switch them on one by one; OficinaOS Cloud bridges to the internet.",
      cta: "Request pilot access",
      ctaSecondary: "See the modules",
      frameTitle: "Settings — Cloud",
      frameCaption:
        "Illustrative recreation of the Cloud tab in OficinaOS settings, with sample data: connected to OficinaOS Cloud, synced a minute ago, with three active modules.",
      status: "Connected to OficinaOS Cloud",
      sync: "Last sync: 1 min ago",
      modulesTitle: "Active modules",
      modules: ["Customer portal", "WhatsApp bot", "Invoicing (InvoiceXpress)"],
      active: "Active",
      offline: "Without a connection, everything else keeps working on the local network.",
    },
    core: {
      title: "The core is free. Always.",
      lead: "Pro takes nothing away from the app you download. OficinaOS is and will stay free and open source — no limits, no accounts, no trial period.",
      items: [
        "Repairs, quotes, customers, stock and till",
        "On your PC, working without internet",
        "Open source, MIT licence",
        "SMS channel with an Android phone in the shop — free, no Cloud",
        "OficinaOS Diag — cable diagnostics, free",
      ],
      link: "Download OficinaOS",
    },
    groups: {
      title: "Modules by what you want to solve",
      lead: "Eleven modules in three groups. All optional, all in beta.",
      smsNote: "free, in the core",
      more: "Guide",
      items: [
        {
          title: "Talk to customers",
          text: "Customers know where their repair stands and approve the quote without calling.",
          ui: {
            title: "WhatsApp",
            caption: "Sample conversation with the WhatsApp bot: the customer approves a quote by replying YES.",
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
          text: "Compare your prices with the market, see several shops in one dashboard and receive diagnostics done at home.",
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
        { title: "Pair once", text: "Create an account at cloud.oficinaos.app (or get a code from the team) and paste the pairing code in Settings → Cloud." },
        { title: "Switch on only what you need", text: "Each module is enabled on the server side, with no licence files. During the beta, we enable them for you." },
        { title: "The app syncs by itself", text: "Every ~2 minutes it sends and receives what the active modules need. The PC is never exposed to the internet." },
      ],
      diagram: { pc: "OficinaOS on your PC", cloud: "OficinaOS Cloud", out: "Customers and services", sync: "every ~2 min" },
      dataTitle: "What goes to the Cloud",
      dataText: "Only the data each active module needs — for example, the redacted summary of a repair for the portal. With no modules active, nothing leaves the PC.",
      dataLink: "Privacy, module by module",
      offline: "Without pairing, OficinaOS still works on the local network — the Pro modules simply don't appear.",
      login: "Already have an account? Sign in to OficinaOS Cloud",
    },
    pricing: {
      title: "Pricing: where it really stands",
      lead: "Pro is in beta. During the pilot, the modules are free while we measure the real value they bring. No prices have been announced yet — and we don't make them up here.",
      caption: "Status and price of each part of OficinaOS",
      head: ["What", "Status", "Price"],
      rows: [
        ["Full app (core)", "Free forever", "€0"],
        ["OficinaOS Diag", "Free forever", "€0"],
        ["SMS channel (Android in the shop)", "In the core", "€0"],
        ["Pro modules (portal, WhatsApp, invoicing, storefront…)", "Beta", "To be announced — free in the pilot"],
        ["AI reports", "Beta", "To be announced — per report"],
      ],
      notes: [
        "When prices are announced, they'll be simple monthly subscriptions — no lock-in and no hidden costs.",
        "Pilot members get 90 days of every module free when Pro launches.",
        "Third-party costs aren't ours: the InvoiceXpress account is yours; WhatsApp template messages outside the 24 h window are charged by Meta.",
      ],
      scrollLabel: "Horizontally scrollable table",
    },
    form: { title: "Join the Pro pilot" },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Will OficinaOS stop being free?", a: "No. The app is open source (MIT) and the core never goes behind a paywall. Pro only adds what needs the internet." },
        { q: "Do I need Pro to use OficinaOS?", a: "No. Repairs, quotes, customers, stock, till and the SMS channel work without Pro and without internet." },
        { q: "Is Pro only for shops?", a: "No. It's for anyone who repairs, diagnoses or resells: independent technicians, repair shops and resellers. Certified invoicing is Portugal-only." },
        { q: "What happens if I disconnect the Cloud?", a: "The app keeps working on the local network with all your data; the Pro modules stop appearing. Turning off price sharing deletes the prices you sent from the Cloud." },
        { q: "How do I join the pilot?", a: "Leave your details in the form. We'll get in touch, help you pair and switch on the modules that make sense." },
      ],
    },
  },
  tradePage: {
    metaTitle: "OficinaOS Trade — parts and devices between professionals",
    metaDesc:
      "B2B network where verified technicians, repair shops and resellers buy and sell phones, computers, parts and lots. No consumers, no minimums and no per-deal commission. Portugal and Spain.",
    hero: {
      label: "OficinaOS Trade",
      badge: "Free at launch",
      title: "Parts and devices, from pro to pro.",
      subtitle:
        "The B2B network where verified technicians, repair shops and resellers buy and sell phones, computers, parts and lots with each other. No consumers, no minimum order and no per-deal commission.",
      cta: "Apply — it's free",
      ctaSecondary: "Browse the market",
      note: "Verified businesses only · Portugal and Spain",
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
          text: "In Portugal, your NIF and permanent-certificate code — or your start-of-activity proof if you're self-employed. In Spain, your VAT number checked against VIES plus your registration document. Some applications are approved straight away; the rest are reviewed by a person.",
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
        { q: "Where is it available?", a: "In Portugal and Spain, for businesses based in those two countries. The app is available in Portuguese, Spanish and English." },
        { q: "I'm self-employed. Can I join?", a: "Yes. Trade is for independent technicians, repair shops and resellers. In Portugal, sole traders use their start-of-activity proof instead of the permanent certificate." },
        { q: "Who sees my prices?", a: "Only verified members. Outsiders can see stock exists, never the price or the seller." },
        { q: "How does payment work?", a: "Directly between businesses — the platform never moves money. Trade records the offer and agreement with invoicing details, and reviews only count after delivery." },
        { q: "Can I sell to consumers?", a: "No. Trade is between professionals only." },
        { q: "Do I need to use OficinaOS?", a: "No. Trade is a separate product: any business can sign up directly, whether or not it uses OficinaOS." },
      ],
    },
    cta: {
      title: "Join the network",
      lead: "Free during launch for verified technicians, repair shops and resellers in Portugal and Spain.",
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
