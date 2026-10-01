import type { Copy } from "./pt";
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
    pro: "Pro modules",
    install: "Install",
    docs: "Guide",
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
    sections: [
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
  footer: {
    license: "MIT License",
    fork: "Fork of Reparilo",
    rights: "Free software for independent repair shops.",
  },
};
