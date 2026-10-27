// Estrelas do repositório, lidas UMA vez por build (API pública do GitHub).
// Falha de rede, rate-limit ou timeout → null, e o nav mostra «Código aberto».
// Em CI, GITHUB_TOKEN (se existir) evita o limite de 60 pedidos/hora.
const REPO_API = "https://api.github.com/repos/braindeadpt/OficinaOS";

/** Abaixo disto o número não ajuda como prova social: mostra-se «Código aberto». */
export const STARS_MIN_TO_SHOW = 50;

let cached: Promise<number | null> | undefined;

export function getRepoStars(): Promise<number | null> {
  cached ??= (async () => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(REPO_API, {
        signal: AbortSignal.timeout(4000),
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "oficinaos-website-build",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) return null;
      const json = (await res.json()) as { stargazers_count?: unknown };
      return typeof json.stargazers_count === "number" ? json.stargazers_count : null;
    } catch {
      return null;
    }
  })();
  return cached;
}
