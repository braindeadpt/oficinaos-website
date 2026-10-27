// Última versão do OficinaOS Diag (GitHub Releases de braindeadpt/oficinaos-diag), lida UMA vez
// por build. Os nomes dos assets levam a versão (oficinaos-diag-v0.3.0-win-x64.zip), por isso não
// há URL fixo /latest/download/: sem API, o link cai para a página /releases/latest.
// Falha de rede, rate-limit ou timeout → a página sai na mesma, sem versão. Nunca rebenta o build.
import { DIAG_REPO_URL, DIAG_ZIP_URL } from "../i18n/utils";

const API = "https://api.github.com/repos/braindeadpt/oficinaos-diag/releases/latest";
const TIMEOUT = 5000;

export interface DiagRelease {
  version: string;
  date: string | null;
  /** Página da versão no GitHub. */
  url: string;
  /** ZIP portátil desta versão (ou a página da versão, se o asset não for encontrado). */
  zipUrl: string;
  zipSize: number | null;
  /** SHA256SUMS.txt publicado junto da versão, se existir. */
  sumsUrl: string | null;
}

async function fromApi(): Promise<DiagRelease | null> {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(API, {
    signal: AbortSignal.timeout(TIMEOUT),
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "oficinaos-website-build",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as {
    tag_name?: string;
    published_at?: string;
    html_url?: string;
    assets?: { name: string; size: number; browser_download_url: string }[];
  };
  if (!json.tag_name) return null;
  const url = json.html_url ?? `${DIAG_REPO_URL}/releases/tag/${json.tag_name}`;
  const zip = json.assets?.find((a) => /win-x64\.zip$/i.test(a.name));
  const sums = json.assets?.find((a) => a.name === "SHA256SUMS.txt");
  return {
    version: json.tag_name,
    date: json.published_at ?? null,
    url,
    zipUrl: zip?.browser_download_url ?? url,
    zipSize: zip?.size ?? null,
    sumsUrl: sums?.browser_download_url ?? null,
  };
}

async function fromWeb(): Promise<DiagRelease | null> {
  const res = await fetch(`${DIAG_REPO_URL}/releases/latest`, {
    signal: AbortSignal.timeout(TIMEOUT),
    redirect: "manual",
  });
  const tag = res.headers.get("location")?.match(/\/releases\/tag\/([^/?#]+)$/)?.[1];
  if (!tag) return null;
  const url = `${DIAG_REPO_URL}/releases/tag/${tag}`;
  return { version: decodeURIComponent(tag), date: null, url, zipUrl: url, zipSize: null, sumsUrl: null };
}

let cached: Promise<DiagRelease | null> | undefined;

export function getDiagRelease(): Promise<DiagRelease | null> {
  cached ??= (async () => {
    try {
      const api = await fromApi();
      if (api) return api;
    } catch {
      /* cai para o caminho sem API */
    }
    try {
      return await fromWeb();
    } catch {
      return null;
    }
  })();
  return cached;
}

/** Sem informação de versão: a página «última versão» do GitHub. */
export const DIAG_FALLBACK_URL = DIAG_ZIP_URL;
