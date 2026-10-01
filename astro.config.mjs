// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Deployed on GitHub Pages behind the custom domain:
//   https://oficinaos.app
export default defineConfig({
  site: "https://oficinaos.app",
  base: "/",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "pt",
        locales: { pt: "pt-PT", en: "en", es: "es" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
