import type { Copy } from "./pt";
import {
  DOCS_MOBILE_URL,
  DOCS_REMOTE_URL,
  INSTALL_URL,
  RELEASES_URL,
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
    title: "Installation and access",
    subtitle:
      "From the shop PC to the phone — simple, even if you're not technical.",
    sections: [
      {
        heading: "Install (once, ~10 minutes)",
        paragraphs: [
          "On Windows it's a double click: download the ZIP installer, extract and run INSTALAR.bat — it installs Docker if missing, generates the passwords and starts everything by itself. Daily use: INICIAR.bat / PARAR.bat.",
          "On Linux, Mac or from source, four commands are enough:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Full installation guide", href: INSTALL_URL },
          { label: "Windows installer", href: RELEASES_URL },
        ],
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
    ],
  },
  footer: {
    license: "MIT License",
    fork: "Fork of Reparilo",
    rights: "Free software for independent repair shops.",
  },
};
