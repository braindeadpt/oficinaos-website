# Baseline Search Console — 21/11/2026

Dados recolhidos do GSC (propriedade `sc-domain:oficinaos.app`, verificada por
DNS TXT) para a continuação do trabalho SEO. Screenshots nesta pasta:
`gsc-pages.png`, `gsc-reasons3.png`, `gsc-perf.png`, `gsc-perf-q2.png`.

## Sitemap

- `https://oficinaos.app/sitemap-index.xml` — re-submetido 21/11, última
  leitura 21/11, estado **Sucesso**, 60 páginas descobertas.

## Indexação (atualizado 16/11)

**72 indexadas / 126 não indexadas** — motivos quase todos benignos:

| Motivo | Páginas |
|---|---|
| Alternativa com etiqueta canónica correta | 77 (variantes /en/ /es/ — correto) |
| Com redirecionamento | 31 |
| Não encontrado (404) | 6 |
| Bloqueada por pedido não autorizado (401) | 6 |
| Bloqueada por robots.txt | 3 |
| Duplicada sem canónica escolhida | 2 |
| Rastreada — ainda não indexada | 1 |
| Detetada — ainda não indexada | 0 |

## Desempenho (3 meses, pesquisa Web)

- **106 cliques · 421 impressões · CTR 25,2% · posição média 6,7**
- Pico ~9 cliques/dia no fim de outubro.

## Consultas — leitura crítica

As top-10 são **100% tráfego de marca** (22 queries no total, todas variações):

| Consulta | Cliques | Impressões |
|---|---|---|
| oficina os | 13 | 25 |
| oficinaos | 12 | 18 |
| oficinaos diag | 7 | 17 |
| os oficina | 1 | 2 |
| canal sms | 0 | 8 |
| oficina android | 0 | 2 |
| o diag | 0 | 2 |
| fosmoficina | 0 | 2 |
| in-office diagnostics | 0 | 2 |
| diag os | 0 | 1 |

**Zero tráfego de descoberta** — ninguém chega por termos genéricos
("software reparação telemóveis", "programa oficina", …). É exatamente o
gap que as landing pages novas atacam; medir de novo em 2-4 semanas.

## Deploy / notas operacionais

- O deploy é `wrangler deploy` (version_upload) — **não existe Workers
  Builds**; o commit "retrigger cloudflare workers build" não tem efeito.
- `dist/_headers` é gerado por `tools/gen-headers.mjs` com CSP **por path**
  (cada página só com os seus hashes) — a linha global excedia o limite de
  2000 chars da Cloudflare (erro 100324) e fazia o deploy falhar.
- Build local precisa de `PUBLIC_BETA_FORM_ENDPOINT=https://cloud.oficinaos.app/beta-signup`
  (GitHub var) — sem ele o form de beta regride para mailto.
- `public/0e8ba7d12b3c70961fad7560523fc3ed.txt` — chave IndexNow.
