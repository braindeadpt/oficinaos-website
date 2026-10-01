import type { Copy } from "./pt";

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
        desc: "Available in European Portuguese, English and French.",
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
  footer: {
    license: "MIT License",
    fork: "Fork of Reparilo",
    rights: "Free software for independent repair shops.",
  },
};
