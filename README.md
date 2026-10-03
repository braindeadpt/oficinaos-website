# oficinaos-website

Marketing site for **[OficinaOS](https://github.com/braindeadpt/OficinaOS)** — a free, MIT-licensed, self-hosted management system for phone repair shops.

Static site built with [Astro](https://astro.build) + Tailwind CSS v4.

> **Ecosystem:** this is 1 of 4 repos (shop app `reparilo`, `oficinaos-cloud`,
> this website, `oficinaos-diag`). The canonical map — data flows, module IDs,
> where each thing lives — is
> [`reparilo/docs/ecosystem.md`](https://github.com/braindeadpt/OficinaOS/blob/main/docs/ecosystem.md).
> **This site is the user-facing documentation** — `/docs` + `/docs/{portal,whatsapp,diag}`
> in pt/en/es — repo `.md` files are technical reference only.

Locales: `pt` (default, served at `/`), `en` (`/en/`), `es` (`/es/`).

## Commands

```bash
bun install        # or: npm install
bun run dev        # dev server
bun run build      # static output → dist/
bun run preview    # preview the production build
```

## Editing copy

Every string lives in `src/i18n/{pt,en,es}.ts`. Pages are thin wrappers that
pass the copy object into `src/components/*` — edit the i18n files, not the
markup.

## Waitlist form

The Pro-modules waitlist posts to [Formspree](https://formspree.io). Create a
free form there and replace `YOUR_FORM_ID` in `src/components/Pro.astro`, or
point the form `action` at a `mailto:` address for a zero-service fallback.

## Screenshots

The screenshots section renders placeholder frames. Replace them with real
images in `public/` when ready.

## Deploy

Configured for GitHub Pages at `https://braindeadpt.github.io/oficinaos-website`
(see `site` + `base` in `astro.config.mjs`). For a custom domain or a root
deploy, set `base: "/"`, update `site`, and fix the Sitemap URL in
`public/robots.txt`.

## License

MIT — see [LICENSE](LICENSE). OficinaOS is a fork of
[Reparilo](https://github.com/cranknet/reparilo).
