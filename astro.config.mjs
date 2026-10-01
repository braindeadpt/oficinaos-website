// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Deployed as a GitHub Pages project site:
//   https://braindeadpt.github.io/oficinaos-website
// Moving to a custom domain or a root deploy? Set `base: "/"`, update `site`
// and the Sitemap URL in public/robots.txt.
export default defineConfig({
  site: "https://braindeadpt.github.io",
  base: "/oficinaos-website",
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
