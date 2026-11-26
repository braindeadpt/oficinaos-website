"""Gera as imagens de partilha simples (1200×630) para as páginas sem imagem própria.

Uso (na raiz do site), sempre que um título mude ou haja páginas novas:
    (atalho: bun run og — faz os passos 1 a 3)
    bun run build                    # 1. gera dist/ (de onde se lê o título de cada página)
    python tools/gen-og.py           # 2. escreve public/og/pages/<chave>-<hash>.jpg e manifest.json
    bun run build                    # 3. o Base.astro aponta cada página para a sua imagem
    python tools/gen-og.py --check   # (a CI corre isto: falha se algum título mudou sem regenerar)
    python tools/gen-og.py --published   # DEPOIS de publicar o site (bun run deploy já o faz)

Retenção: uma imagem que deixa de estar em uso fica «pendente» em manifest._retired (sem data).
A contagem dos 30 dias só começa quando se publica (--published marca a data) e só depois disso a
imagem é apagada numa geração seguinte. Se ninguém marcar a publicação, nada é apagado.

A chave de cada página é o caminho sem barras nas pontas, com "/" trocado por "-" ("" → "home").
O nome do ficheiro leva um hash do conteúdo (título, etiqueta, língua, versão do modelo): quando o
texto muda, o URL muda, e as plataformas (WhatsApp, Facebook, LinkedIn) não servem a imagem antiga
da cache. O Base.astro lê o URL de public/og/pages/manifest.json.
Páginas com imagem própria (ogImage no Base) e a 404 ficam de fora.
Python 3.9+. Gerar precisa de Pillow e fontTools (com brotli ou brotlicffi); o --check só precisa da biblioteca padrão.
"""

from __future__ import annotations  # anotações não avaliadas: carrega mesmo em Python antigo

import hashlib
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
OUT = ROOT / "public" / "og" / "pages"
W, H = 1200, 630

INK = (20, 23, 26)
INK2 = (91, 99, 107)
INK3 = (138, 146, 154)
BG = (246, 246, 243)
OK = (11, 143, 99)
OK_SOFT = (223, 245, 234)
DOT = (215, 217, 212)

# páginas com imagem própria (ogImage) — não gerar
SKIP = {"livro-de-ponto", "atendimento-ia"}

EYEBROW = {
    "docs": {"pt": "Guia", "en": "Guide", "es": "Guía"},
    "precos": {"pt": "Preços", "en": "Pricing", "es": "Precios"},
    "pro": {"pt": "OficinaOS Pro", "en": "OficinaOS Pro", "es": "OficinaOS Pro"},
    "diag": {"pt": "OficinaOS Diag", "en": "OficinaOS Diag", "es": "OficinaOS Diag"},
    "trade": {"pt": "OficinaOS Trade", "en": "OficinaOS Trade", "es": "OficinaOS Trade"},
    "download": {"pt": "Descarregar", "en": "Download", "es": "Descargar"},
    "updates": {"pt": "Novidades", "en": "What's new", "es": "Novedades"},
    "privacy": {"pt": "Privacidade", "en": "Privacy", "es": "Privacidad"},
    "terms": {"pt": "Termos", "en": "Terms", "es": "Términos"},
}
DEFAULT_EYEBROW = {
    "pt": "Programa para lojas de reparação",
    "en": "Software for repair shops",
    "es": "Programa para talleres de reparación",
}


TEMPLATE_VERSION = "1"  # subir quando o desenho das imagens mudar (força URLs novos)
RETAIN_DAYS = 30  # imagens antigas ficam este tempo DEPOIS DA PUBLICAÇÃO: previsões em cache não dão 404
RECOVER = "bun run og"  # escolhe o Python certo (tools/py.mjs) e faz build → gerar → build


def font_from_woff2(name: str) -> Path:
    """Converte uma fonte .woff2 do site para .ttf (o Pillow não lê woff2)."""
    src = ROOT / "public" / "fonts" / f"{name}.woff2"
    dst = ROOT / "node_modules" / ".cache" / "og-fonts" / f"{name}.ttf"
    if not dst.exists():
        from fontTools.ttLib import TTFont

        dst.parent.mkdir(parents=True, exist_ok=True)
        f = TTFont(str(src))
        f.flavor = None
        f.save(str(dst))
    return dst


def load(name: str, size: int, weight: int):
    from PIL import ImageFont

    f = ImageFont.truetype(str(font_from_woff2(name)), size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def wrap(draw, text: str, font, width: int) -> list[str]:
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= width:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def page_text(path: Path) -> tuple[str, str]:
    raw = path.read_text(encoding="utf-8")
    lang = (re.search(r'<html[^>]*lang="([a-zA-Z-]+)"', raw) or [None, "pt"])[1][:2]
    m = re.search(r"<h1[^>]*>(.*?)</h1>", raw, re.S)
    if m:
        title = re.sub(r"<[^>]+>", " ", m.group(1))
    else:
        title = re.search(r"<title>(.*?)</title>", raw, re.S).group(1).split("|")[0]
    title = re.sub(r"\s+", " ", html.unescape(title)).strip()
    return lang if lang in ("pt", "en", "es") else "pt", title


def render(lang: str, eyebrow: str, title: str):
    from PIL import Image, ImageDraw

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    # grelha de pontos, discreta, à direita
    for y in range(40, H, 28):
        for x in range(760, W, 28):
            d.ellipse((x - 1.2, y - 1.2, x + 1.2, y + 1.2), fill=DOT)
    # marca
    d.rounded_rectangle((64, 58, 106, 100), radius=11, fill=INK)
    d.rounded_rectangle((77, 71, 93, 87), radius=4, outline=(255, 255, 255), width=3)
    d.text((122, 79), "OficinaOS", font=load("inter-latin", 30, 650), fill=INK, anchor="lm")
    # etiqueta
    d.ellipse((64, 176, 78, 190), fill=OK)
    d.ellipse((58, 170, 84, 196), outline=OK_SOFT, width=4)
    d.text((98, 183), eyebrow, font=load("inter-latin", 28, 600), fill=INK2, anchor="lm")
    # título (encolhe até caber em 4 linhas)
    for size in (68, 62, 56, 50, 46, 42):
        f = load("manrope-latin", size, 800)
        lines = wrap(d, title, f, 1000)
        if len(lines) <= 4:
            break
    lines = lines[:4]
    y = 228
    for ln in lines:
        d.text((62, y), ln, font=f, fill=INK)
        y += int(size * 1.08)
    # rodapé
    d.line((64, 548, 1136, 548), fill=(226, 227, 222), width=2)
    d.text((64, 580), "oficinaos.app", font=load("inter-latin", 26, 600), fill=INK, anchor="lm")
    return img


def pages():
    """(chave, língua, etiqueta, título) de cada página construída que leva imagem gerada."""
    for p in sorted(DIST.rglob("index.html")):
        rel = p.parent.relative_to(DIST).as_posix()
        if rel == ".":
            rel = ""
        parts = [x for x in rel.split("/") if x]
        if parts and parts[0] in ("en", "es"):
            section = parts[1] if len(parts) > 1 else ""
        else:
            section = parts[0] if parts else ""
        if section in SKIP or section.startswith("["):
            continue
        key = "-".join(parts) or "home"
        lang, title = page_text(p)
        yield key, lang, EYEBROW.get(section, DEFAULT_EYEBROW)[lang], title


def digest(lang: str, eyebrow: str, title: str) -> str:
    return hashlib.sha256(f"{TEMPLATE_VERSION}|{lang}|{eyebrow}|{title}".encode()).hexdigest()[:10]


def built_pages() -> list:
    """Lista as páginas construídas; termina com erro se não houver build (nunca apaga nada às cegas)."""
    if not DIST.exists():
        sys.exit(f"Sem dist/: corre primeiro `bun run build` (recuperação completa: {RECOVER}).")
    found = list(pages())
    if not found:
        sys.exit(f"dist/ não tem páginas elegíveis: corre `bun run build` (recuperação completa: {RECOVER}).")
    return found


def main() -> None:
    import datetime

    manifest_path = OUT / "manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8")) if manifest_path.exists() else {}
    if "--published" in sys.argv:
        # marca a data de publicação nas imagens retiradas que ainda estavam pendentes
        retired = manifest.get("_retired", {})
        stamped = [k for k, v in retired.items() if not v]
        for k in stamped:
            retired[k] = datetime.date.today().isoformat()
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=1, sort_keys=True), encoding="utf-8")
        print(f"{len(stamped)} imagens antigas marcadas como publicadas (apagadas daqui a {RETAIN_DAYS} dias).")
        return
    found = built_pages()
    if "--check" in sys.argv:
        bad = []
        for k, lang, eb, t in found:
            h = digest(lang, eb, t)
            entry = manifest.get(k, {})
            if entry.get("hash") != h or entry.get("file") != f"{k}-{h}.jpg" or not (OUT / f"{k}-{h}.jpg").is_file():
                bad.append(k)
        if bad:
            print(f"Imagens de partilha desatualizadas ou em falta: {', '.join(bad)}. Corre: {RECOVER}")
            sys.exit(1)
        print("Imagens de partilha em dia.")
        return
    OUT.mkdir(parents=True, exist_ok=True)
    today = datetime.date.today()
    retired = dict(manifest.get("_retired", {}))
    new = {}
    for key, lang, eyebrow, title in found:
        h = digest(lang, eyebrow, title)
        name = f"{key}-{h}.jpg"
        if not (OUT / name).exists():
            render(lang, eyebrow, title).save(OUT / name, quality=86, optimize=True, progressive=True)
        new[key] = {"file": name, "hash": h, "title": title}
        retired.pop(name, None)
    live = {v["file"] for v in new.values()}
    for f in OUT.glob("*.jpg"):
        if f.name in live:
            continue
        # nova retirada fica pendente (None) até se marcar a publicação; só depois conta o prazo
        since = retired.setdefault(f.name, None)
        if since and (today - datetime.date.fromisoformat(since)).days > RETAIN_DAYS:
            f.unlink()
            retired.pop(f.name)
    retired = {k: v for k, v in retired.items() if (OUT / k).exists()}
    if retired:
        new["_retired"] = retired
    manifest_path.write_text(json.dumps(new, ensure_ascii=False, indent=1, sort_keys=True), encoding="utf-8")
    pending = sum(1 for v in retired.values() if not v)
    print(f"{len(live)} imagens em {OUT.relative_to(ROOT)} ({len(retired)} antigas retidas, {pending} à espera da publicação)")


if __name__ == "__main__":
    main()
