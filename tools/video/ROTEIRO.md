# Roteiro — vídeo demo OficinaOS (~62 s)

Ficheiro final: `public/video/oficinaos-demo.mp4` (1920×864, 62 s, ~11 MB, sem
voz — pensado para autoplay muted no site e legendas em overlay).

## Estrutura

| # | Tempo | Frame | Texto |
|---|-------|-------|-------|
| 1 | 0:00–0:04 | Card título | **OficinaOS** — «Menos telefonemas de "já está pronto?"» |
| 2 | 0:04–0:14 | Dashboard real | Painel com reparações ativas, receita, gráfico semanal |
| 3 | 0:14–0:16 | Card passo 1 | «Check-in em segundos» |
| 4 | 0:16–0:26 | Modal Novo check-in | Cliente + aparelho + avaria num só ecrã |
| 5 | 0:26–0:29 | Card passo 2 | «Orçamento enviado com um clique» |
| 6 | 0:29–0:38 | Detalhe da reparação | Orçamento v1 aprovado, pagamentos, saldo |
| 7 | 0:38–0:41 | Card passo 3 | «O cliente aprova no telemóvel» |
| 8 | 0:41–0:49 | Telemóvel — tracking | Página pública do cliente: «Aprovar orçamento / Recusar» |
| 9 | 0:49–0:54 | Telemóvel — aprovado | «✓ Aprovou este orçamento» |
| 10 | 0:54–0:59 | Card RGPD | «Os dados ficam na loja» |
| 11 | 0:59–1:06 | Card final | **oficinaos.app** — Grátis · open source · instala em 5 minutos |

Transições: crossfade 0,6 s; zoom Ken Burns subtil (1,00→1,07) em cada frame.

## Como foi produzido (reproduzível)

1. **Dataset demo** — `scripts/seed-demo.ts` + `seed-demo-user.ts` no repo da
   app (`docker exec` + `bun`, ver commits em main). Clientes/reparações são
   fictícios — nunca usar dados reais em material público.
2. **Frames** — capturas da app a correr em `localhost:4000` via Kimi
   WebBridge (sessão `video`): dashboard, modal «Novo check-in» preenchido,
   detalhe com orçamento APROVADO, página `/tracking` verificada
   (jobCode + últimos 4 dígitos) antes e depois de «Aprovar orçamento».
3. **Telemóvel** — crop da coluna central (620 px) dentro de um bezel CSS
   (`phone.html`), com `object-fit: contain` e fundo igual ao da página —
   a app serve `frame-ancestors 'none'`, iframe direto não é opção.
4. **Cards** — `card.html` parametrizado por query string
   (`?logo=&t=&s=&b=&step=`), screenshots via WebBridge.
5. **Montagem** — `build.py`: zoompan + xfade por segmento, fade in/out,
   `libx264 -crf 18 -preset slow`, faixa de áudio silenciosa AAC.

Fontes em `%TEMP%\oficinaos-video\` (frames, `phone.html`, `card.html`,
`build.py`). Para refazer: repetir capturas na instância demo e correr
`python build.py`.

## Legendas / voiceover (opcional, para versão futura com som)

> «Cliente chega com o ecrã partido. Em trinta segundos está registado.
> O orçamento sai num clique — e o cliente aprova no telemóvel dele,
> sem telefonemas, sem espera à porta. Os dados? Ficam na vossa loja.
> OficinaOS — grátis, open source, instala em cinco minutos.»
