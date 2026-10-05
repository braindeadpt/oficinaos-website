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
} from "./utils";

export const lang = "en";
export const locale = "en";
export const ogLocale = "en_US";

export const t: Copy = {
  meta: {
    title: "OficinaOS — Free, self-hosted repair shop management",
    description:
      "Free, open-source (MIT) management system for phone repair shops. Runs on a computer inside your shop — customer data never leaves your network.",
  },
  nav: {
    features: "Features",
    diag: "Diagnostics",
    pro: "Pro modules",
    install: "Install",
    docs: "Guide",
    updates: "What's new",
    github: "GitHub",
  },
  hero: {
    badge: "Free · MIT · Self-hosted",
    title: "Your repair shop, managed.",
    titleAccent: "Your data, in your shop.",
    subtitle:
      "OficinaOS is a free, open-source management system for phone repair shops. It runs on a computer inside your store — jobs, stock, POS and customer data never leave your local network.",
    ctaPrimary: "View on GitHub",
    ctaSecondary: "Install guide",
    chips: ["No subscriptions", "Runs on your LAN", "Web + Android"],
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
        title: "Android app",
        desc: "The same app on Android tablets at the counter — no separate codebase.",
      },
      {
        title: "Backups",
        desc: "One-command local backups of the entire database — your data, your copies.",
      },
    ],
  },
  screenshots: {
    title: "See it in action",
    subtitle: "Real screenshots from the app running in a shop.",
    items: ["Jobs board", "Job detail", "Customer tracking"],
    comingSoon: "Screenshot coming soon",
  },
  pro: {
    badge: "In development",
    title: "Pro modules",
    subtitle:
      "Optional paid modules, in active development. The core stays free and MIT-licensed — forever.",
    items: [
      {
        title: "Counter automation",
        desc: "Automatic WhatsApp status updates and digital receipts — fewer “is it ready?” calls.",
      },
      {
        title: "Bench diagnostics",
        desc: "Cable-connected device diagnostics with AI-assisted reports.",
      },
      {
        title: "Used-device certification",
        desc: "Battery cycles, lock status and grading for buy/sell/trade-in — A/B/C certificates.",
      },
    ],
    waitlist: {
      title: "Join the waitlist",
      subtitle: "Get notified when the Pro modules launch.",
      placeholder: "you@yourshop.com",
      button: "Notify me",
      buttonGithub: "Follow on GitHub",
      note: "Static form — no account needed. We only email about Pro launches.",
      noteGithub:
        "Follow the repo on GitHub — Pro module launches are announced as releases.",
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
      "OficinaOS runs on a PC inside the shop — no servers of ours, no account of ours, no telemetry.",
    cards: [
      {
        title: "Everything local by default",
        desc: "Customers, repairs, stock and till live on the shop's PC. Since we never touch the data, no processor agreement (Art. 28) with us is even needed.",
      },
      {
        title: "No international transfers",
        desc: "By default nothing leaves the shop — unlike cloud systems, no customer data sits on third-party servers.",
      },
      {
        title: "Optional extras, declared",
        desc: "WhatsApp, remote access and AI are opt-in — documented item by item, ready for your records of processing (Art. 30).",
      },
    ],
    tableTitle: "When you switch an optional module on, this is all that leaves:",
    table: [
      {
        name: "WhatsApp notifications",
        to: "Meta",
        what: "Customer phone number + repair status",
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
    tableNote:
      "See the full detail — including what never leaves — in the repository.",
  },
  install: {
    title: "Running in minutes",
    subtitle:
      "One PC in the shop, Docker, one command. After install it works offline on your local network.",
    steps: [
      {
        title: "Get the code",
        desc: "Clone the repository or grab the installer from Releases.",
      },
      {
        title: "Start with Docker",
        desc: "docker compose up -d brings up the app and database in containers.",
      },
      {
        title: "Open in the browser",
        desc: "http://localhost:4000 on the PC — or its LAN IP from any device.",
      },
    ],
    guideLink: "Full installation guide",
    releasesLink: "Windows installer (Releases)",
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
            src: "/screenshots/dashboard.png",
            alt: "OficinaOS repair dashboard",
            caption: "The dashboard — the day's repairs at a glance",
          },
          {
            src: "/screenshots/job-detail.png",
            alt: "Repair job card with statuses, quote and timeline",
            caption: "The job card — statuses, quote and full timeline",
          },
          {
            src: "/screenshots/tracking.png",
            alt: "Customer tracking page on a phone",
            caption: "The tracking page the customer opens on their phone",
          },
        ],
        links: [],
      },
      {
        heading: "Two ways to install",
        paragraphs: [
          "OficinaOS is always the same program — what differs is how it runs on the shop PC. The installer picks the right path automatically, but it helps to understand both:",
          "Docker is the normal, recommended way: a free program that packages the app and database in isolated «containers». It needs a processor feature called virtualization — most PCs have it, but some ship with it disabled in the BIOS or don't support it at all.",
          "Portable mode exists for those PCs: a single bundle with everything inside (the app, the PostgreSQL database and the runtime) — no Docker, no virtualization, no Windows services.",
        ],
        table: {
          head: ["", "Docker (recommended)", "Portable (fallback)"],
          rows: [
            ["When to use", "Whenever possible", "PCs without virtualization (VT-x/SVM)"],
            ["Requirements", "Docker Desktop + BIOS virtualization", "Any Windows 10/11 64-bit"],
            ["Download", "~1 GB (Docker + app)", "~540 MB (all-in-one)"],
            ["Boot with the PC", "Automatic", "Automatic (optional, asked on first run)"],
            ["If the app crashes", "Restarts by itself", "Restarts by itself (wrapper)"],
            ["Backups", "Daily, automatic (every 24h)", "At every startup + manual BACKUP.bat"],
            ["Off-PC backups", "Supported (rclone → S3/B2/GCS)", "Manual — copy the backups folder"],
            ["Updates", "Downloads only what changed; optional auto-update", "Downloads the whole bundle; always manual"],
            ["Remote access (HTTPS)", "Cloudflare Tunnel included", "Cloudflare Tunnel installed separately"],
          ],
        },
        links: [
          { label: "Installation guide", href: INSTALL_URL },
          { label: "Portable mode documentation", href: PORTABLE_DOCS_URL },
        ],
      },
      {
        heading: "Normal install — Docker (once, ~10 minutes)",
        paragraphs: [
          "Download the installer ZIP, extract to a folder (e.g. C:\\OficinaOS) and double-click INSTALAR.bat. If Windows SmartScreen warns: «More info» → «Run anyway».",
          "The installer does everything: checks whether the PC can run Docker, installs Docker Desktop if missing, generates passwords and secrets, downloads the app and starts it. If it asks for a reboot, reboot and run INSTALAR.bat again.",
          "At the end the browser opens at http://localhost:4000. First login: user admin, password braindead — the app forces you to change both.",
          "On Linux or Mac there's no auto-installer — Docker is used directly:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Full installation guide", href: INSTALL_URL },
          { label: "Download installer (oficinaos-install.zip)", href: INSTALL_ZIP_URL },
        ],
      },
      {
        heading: "The «virtualization support not detected» error",
        paragraphs: [
          "If the PC can't run Docker, the installer detects it before trying and offers two options:",
        ],
        list: [
          "Enable it in the BIOS — reboot, press F2/F10/DEL/ESC at startup, look for «Intel VT-x», «Virtualization Technology» or «SVM Mode», enable and save (F10). The normal Docker path then works.",
          "Portable install — the installer downloads oficinaos-portable.zip (~540 MB) and runs without Docker: same app, same database, same features.",
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
          "Docker mode: in the folder where you extracted the installer.",
          "Portable mode: inside the oficinaos-portable folder — data lives in data\\, backups in app\\uploads\\backups.",
          "Other shop devices (tablet, phone, another PC) install nothing — they open http://<PC-IP>:4000 in a browser.",
        ],
        links: [],
      },
      {
        heading: "Backups and restore",
        paragraphs: [
          "Backups are compressed files (.sql.gz) containing the whole database. The app shows the last backup status under Settings → Shop → Backups — it works the same in both modes.",
          "In Docker mode a dedicated service backs up every 24 hours, keeps 14 days, and can optionally copy to external storage (S3, Backblaze, etc.) and automatically verify restores.",
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
          "The app shows a banner when a new version exists. To update, double-click ATUALIZAR.bat — it backs up, downloads the new version and restarts. Database migrations run by themselves.",
          "Practical difference: Docker only downloads what changed; portable re-downloads the whole bundle (~540 MB). Docker can also update fully automatically (Watchtower).",
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
            ["Diagnostics intake", "Available (beta)", "TBA — free during beta"],
            ["AI reports", "Available (beta)", "TBA — per report"],
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
            ["Does customer data go to a server?", "Not by default. With Pro modules, the Cloud only relays redacted snapshots and messages — no internal costs or private data."],
            ["Does it work on phones?", "Yes — on the shop's Wi-Fi any device opens it in a browser; outside the shop via remote access (Cloudflare Tunnel)."],
            ["Does the customer install anything?", "No — the portal opens as a link in their browser; the bot replies on their normal WhatsApp."],
            ["How much does it cost?", "The full app is free (MIT license). Pro modules are optional subscriptions, in beta."],
            ["Multiple shops / branches?", "No — OficinaOS is designed for one location per install."],
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
            "API Token — the permanent system-user token (the app stores it encrypted)",
            "Enable — the app registers the phone_number_id with the Cloud by itself and the bot goes live",
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
  },
  updates: {
    title: "What's new",
    subtitle:
      "What's changed in OficinaOS — new features, improvements and Pro modules. Updated with every release.",
    free: "Free",
    pro: "Pro",
  },
  footer: {
    license: "MIT License",
    fork: "Fork of Reparilo",
    rights: "Free software for independent repair shops.",
    contact: "Contact",
  },
};
