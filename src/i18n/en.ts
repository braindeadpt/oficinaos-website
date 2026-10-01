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
      "From the shop PC to the customer's phone — every path, step by step.",
    sections: [
      {
        heading: "Up and running in minutes",
        paragraphs: [
          "On Windows, download the ZIP installer, extract and run INSTALAR.bat — it installs Docker if missing, generates passwords and starts everything by itself. Daily use: INICIAR.bat / PARAR.bat.",
          "On Linux/Mac or from source, four commands are enough:",
        ],
        code: "git clone https://github.com/braindeadpt/OficinaOS.git\ncd OficinaOS && cp .env.example .env\ndocker compose up -d\ndocker compose exec app bun run db:seed",
        links: [
          { label: "Full installation guide", href: INSTALL_URL },
          { label: "Windows installer", href: RELEASES_URL },
        ],
      },
      {
        heading: "In the shop — local network",
        paragraphs: [
          "One PC runs the server and database; every other device opens the app in a browser — nothing to install:",
          "Always use the same address configured as APP_URL in the .env file. Works without internet for daily use.",
        ],
        code: "http://192.168.1.33:4000   # the server PC's IP",
        links: [],
      },
      {
        heading: "Phone and tablet — home screen icon (PWA)",
        paragraphs: [
          "OficinaOS is a PWA: it gets its own icon and opens full-screen, with no browser bar.",
        ],
        list: [
          "iPhone/iPad: Safari → Share → “Add to Home Screen” — standalone app, even over LAN HTTP",
          "Android in the shop: Chrome menu ⋮ → “Add to Home Screen” (shortcut)",
          "Android over HTTPS (tunnel): Chrome offers “Install app” — a real native-style install",
          "Optional: native Android APK via Capacitor (camera integration in job cards) — see docs/mobile-access.md",
        ],
        links: [{ label: "Full mobile guide", href: DOCS_MOBILE_URL }],
      },
      {
        heading: "Remote access — Cloudflare Tunnel",
        paragraphs: [
          "With the shop PC on, a free Cloudflare Tunnel exposes the app over HTTPS — no router port-forwarding, no public IP needed, works behind CGNAT.",
          "It gives staff remote access and enables public customer links: tracking, quote approval, pre-check requests and warranty QR codes.",
        ],
        list: [
          "Cloudflare Zero Trust → Networks → Tunnels → create a tunnel and copy the token",
          "Public hostname (e.g. oficina.yourdomain.com) → service http://app:4000",
          "In .env: TUNNEL_TOKEN=<token> and add the hostname to EXTRA_TRUSTED_ORIGINS",
          "docker compose --profile tunnel up -d (or COMPOSE_PROFILES=tunnel on installed deployments)",
          "Settings → Shop → Tracking base URL → the public hostname",
        ],
        code: "TUNNEL_TOKEN=eyJh…\nEXTRA_TRUSTED_ORIGINS=https://oficina.yourdomain.com",
        links: [{ label: "Full remote access guide", href: DOCS_REMOTE_URL }],
      },
      {
        heading: "Private by default",
        paragraphs: [
          "The tunnel is optional: the app stays 100% functional on the local network without internet. Customer data stays in the shop — Cloudflare only carries encrypted traffic while the tunnel is on.",
          "For an extra barrier before the login page, Cloudflare Access (free) can require email + code — while keeping public paths (/tracking, /pre-check) open to customers.",
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
