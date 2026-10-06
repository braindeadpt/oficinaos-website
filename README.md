# oficinaos-website

Marketing site for **[OficinaOS](https://github.com/braindeadpt/OficinaOS)** — a free, MIT-licensed, self-hosted management system for phone repair shops.

Static site built with [Astro](https://astro.build) + Tailwind CSS v4.

> **Ecosystem:** this is 1 of 4 repos (shop app `reparilo`, `oficinaos-cloud`,
> this website, `oficinaos-diag`). The canonical map — data flows, module IDs,
> where each thing lives — is
> [`reparilo/docs/ecosystem.md`](https://github.com/braindeadpt/OficinaOS/blob/main/docs/ecosystem.md).
> **This site is the user-facing documentation** — `/docs` +
> `/docs/{portal,whatsapp,sms,diag,invoicing}` in pt/en/es — repo `.md` files
> are technical reference only.

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

The Pro-modules waitlist can post to [Formspree](https://formspree.io) — set
`FORMSPREE_ID` in `src/components/Pro.astro`. While empty, the section falls
back to a GitHub CTA (watching the repo notifies followers of releases).

## Screenshots

Real screenshots live in `public/screenshots/` (dashboard, job detail,
tracking) — referenced from the docs copy in `src/i18n/*.ts`. Replace the
files to update the site; keep the same filenames.

## Deploy

GitHub Pages with the custom domain `oficinaos.app` — `public/CNAME` carries
the domain and `.github/workflows/deploy.yml` builds + deploys on push to
`main`. `site`/`base` in `astro.config.mjs` already point at the domain.

## License

MIT — see [LICENSE](LICENSE). OficinaOS is a fork of
[Reparilo](https://github.com/cranknet/reparilo).
