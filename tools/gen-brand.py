"""Gera os recursos raster da marca reproduzíveis a partir de brandlogo.draw_squircle.

Reproduzíveis (saem deste script, bit a bit determinístico):
- public/brand/avatar.png — squircle 756 px centrado em 1080×1080 sobre o fundo
  claro do site (#f4f8ff); é o avatar das redes sociais.
- public/apple-touch-icon.png — squircle 180×180 full-bleed com cantos
  transparentes (o iOS aplica a sua própria máscara por cima).

NÃO reproduzíveis por script — proveniência documentada:
- public/brand/fb-cover-{pt,en,es,fr}.png — composições de marketing da marca
  anterior (grelha, badge, lockup, títulos e pills). No rebrand #47 o logótipo
  foi substituído no mesmo sítio, com textos e layout intactos: são edições
  raster de um original que nunca existiu como código. Refazê-las do zero é
  trabalho de design (composição nova), não de engenharia — até lá, editam-se
  em cima dos PNG versionados.
- public/brand/oficinaos-{lockup-dark,lockup-light,symbol}.svg e favicon.svg —
  vetoriais, versionados como fonte; não precisam de geração.
- public/favicon.ico — exportado uma vez do symbol (16/32 px); qualquer editor
  o regenera a partir do SVG se a marca mudar.

Uso: python3 tools/gen-brand.py [--check]
  sem argumentos: escreve os PNG por cima dos versionados
  --check: compara sem escrever e sai com erro se divergirem (para CI futuro)
"""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BG = (244, 248, 255)  # #f4f8ff — fundo claro do site


def render_avatar(px: int = 1080, side: int = 760):
    from PIL import Image

    from brandlogo import draw_squircle

    img = Image.new("RGB", (px, px), BG)
    sq = draw_squircle(side)
    img.paste(sq, ((px - side) // 2, (px - side) // 2), sq)
    return img


def render_touch_icon(px: int = 180):
    from brandlogo import draw_squircle

    return draw_squircle(px)


TARGETS = {
    "public/brand/avatar.png": render_avatar,
    "public/apple-touch-icon.png": render_touch_icon,
}


def main() -> int:
    check = "--check" in sys.argv
    falhas = []
    for rel, render in TARGETS.items():
        dst = ROOT / rel
        novo = render()
        if check and dst.exists():
            from PIL import Image, ImageChops

            atual = Image.open(dst).convert(novo.mode)
            if atual.size == novo.size and ImageChops.difference(atual, novo).getbbox() is None:
                print(f"[ok] {rel}")
                continue
            falhas.append(rel)
            print(f"[difere] {rel}")
        elif not check:
            novo.save(dst)
            print(f"[escrito] {rel}")
        else:
            falhas.append(rel)
            print(f"[em falta] {rel}")
    return 1 if falhas else 0


if __name__ == "__main__":
    sys.exit(main())
