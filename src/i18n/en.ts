import type { Copy } from "./pt";
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
        title: "Android app — coming soon",
        desc: "Works today on any phone or tablet browser as an installable PWA; the native Android app is on the way.",
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
    badge: "Beta — free for pilot shops",
    title: "Pro modules",
    subtitle:
      "Optional features that need to “reach the internet”, through OficinaOS Cloud. They are already available in beta, and pilot shops use them for free during the beta. The core stays free and MIT-licensed — forever.",
    statusLabel: "Beta",
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
        "Leave your shop's details and we'll get in touch to switch the modules on. No commitment.",
      email: "Email",
      emailPlaceholder: "you@yourshop.com",
      shop: "Shop name",
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
      "Install, daily use, backups and troubleshooting — step by step, no technical background needed.",
    toc: "In this guide",
    backToGuide: "Full guide",
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
          "Pro modules are in beta: during this period, pilot shops use them for free while we measure the real value they bring to the counter. When prices are announced they'll be simple monthly subscriptions — no lock-in, no hidden costs.",
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
          "Honest notes: replies can take up to ~2 minutes (sync cycle); setup uses Meta's official WhatsApp Business Platform and we assist the first shop's onboarding.",
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
            "A Meta app (developers.facebook.com) with the WhatsApp product — our OficinaOS app already exists and is published",
            "The shop's number on WhatsApp Business — coexistence keeps the phone app working while the API connects in parallel",
            "A permanent system-user token with whatsapp_business_messaging + whatsapp_business_management permissions",
            "The webhook pointed at OficinaOS Cloud — already configured on our side",
          ],
          links: [],
        },
        {
          heading: "Setup in the app (per shop)",
          paragraphs: [
            "After Meta onboarding (we assist the first shop), the app-side setup is 4 fields:",
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
          heading: "Install — Microsoft Store",
          paragraphs: [
            "The easiest way: install from the Microsoft Store — one click, no SmartScreen warning, automatic updates. Free.",
            "Portable alternative: download the zip, extract the whole folder (the exe needs the files next to it) and run OficinaDiag.exe — Windows may show a SmartScreen warning on first run: «More info» → «Run anyway».",
          ],
          links: [
            { label: "Microsoft Store", href: DIAG_STORE_URL },
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
  footer: {
    license: "MIT License",
    credits: "Based on the open-source project",
    rights: "Free software for independent repair shops.",
    contact: "Contact",
    community: "Community",
    privacy: "Privacy",
    terms: "Terms",
    madeBy: "Made by",
    madeIn: "in Portugal"
  },
};
