// Última versão da OficinaOS (GitHub Releases de braindeadpt/OficinaOS), lida UMA vez por build.
// Falha de rede, rate-limit ou timeout → o site sai na mesma, sem número de versão nem checksum
// (os links caem para /releases/latest/download/…). Nunca rebenta o build.
//
// 1.º a API (dá data, tamanho e o digest SHA-256 de cada asset; GITHUB_TOKEN em CI evita o
//     limite de 60 pedidos/hora);
// 2.º se a API falhar, github.com sem API: o redirect de /releases/latest dá a tag e o
//     OficinaOS-Setup.exe.sha256 publicado junto da versão dá o checksum.
import { REPO_URL, SETUP_EXE_URL } from "../i18n/utils";

const API = "https://api.github.com/repos/braindeadpt/OficinaOS/releases/latest";
const EXE = "OficinaOS-Setup.exe";
const TIMEOUT = 5000;

export interface ReleaseInfo {
  /** Ex.: "v1.0.21" */
  version: string;
  /** ISO 8601, ou null se só a tag for conhecida. */
  date: string | null;
  /** Página da versão no GitHub. */
  url: string;
  /** Instalador desta versão (URL com a tag, para bater certo com o checksum). */
  exeUrl: string;
  exeSize: number | null;
  /** SHA-256 em hexadecimal minúsculo, ou null. */
  sha256: string | null;
}

const isHex64 = (s: unknown): s is string => typeof s === "string" && /^[a-f0-9]{64}$/i.test(s);

async function fromApi(): Promise<ReleaseInfo | null> {
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
    assets?: { name: string; size: number; digest?: string; browser_download_url: string }[];
  };
  if (!json.tag_name) return null;
  const exe = json.assets?.find((a) => a.name === EXE);
  let sha256: string | null = null;
  const digest = exe?.digest?.replace(/^sha256:/, "");
  if (isHex64(digest)) sha256 = digest.toLowerCase();
  else {
    const side = json.assets?.find((a) => a.name === `${EXE}.sha256`);
    if (side) sha256 = await readSha(side.browser_download_url);
  }
  return {
    version: json.tag_name,
    date: json.published_at ?? null,
    url: json.html_url ?? `${REPO_URL}/releases/tag/${json.tag_name}`,
    exeUrl: exe?.browser_download_url ?? SETUP_EXE_URL,
    exeSize: exe?.size ?? null,
    sha256,
  };
}

async function readSha(url: string): Promise<string | null> {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT), redirect: "follow" });
  if (!res.ok) return null;
  const first = (await res.text()).trim().split(/\s+/)[0];
  return isHex64(first) ? first.toLowerCase() : null;
}

async function fromWeb(): Promise<ReleaseInfo | null> {
  const res = await fetch(`${REPO_URL}/releases/latest`, {
    signal: AbortSignal.timeout(TIMEOUT),
    redirect: "manual",
  });
  const tag = res.headers.get("location")?.match(/\/releases\/tag\/([^/?#]+)$/)?.[1];
  if (!tag) return null;
  const base = `${REPO_URL}/releases/download/${tag}`;
  return {
    version: decodeURIComponent(tag),
    date: null,
    url: `${REPO_URL}/releases/tag/${tag}`,
    exeUrl: `${base}/${EXE}`,
    exeSize: null,
    sha256: await readSha(`${base}/${EXE}.sha256`).catch(() => null),
  };
}

let cached: Promise<ReleaseInfo | null> | undefined;

export function getLatestRelease(): Promise<ReleaseInfo | null> {
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

/** 294188132 → «281 MB» (MiB, como o Explorador do Windows). */
export function formatSize(bytes: number | null, locale: string): string | null {
  if (!bytes) return null;
  const mb = bytes / 1024 / 1024;
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(mb)} MB`;
}

export function formatDate(iso: string | null, locale: string): string | null {
  if (!iso) return null;
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Lisbon" }).format(new Date(iso));
}
