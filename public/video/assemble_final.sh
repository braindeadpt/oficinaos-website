#!/usr/bin/env bash
set -euo pipefail
ROOT="/home/ubuntu/oficinaos_video"
cd "$ROOT"

mix_one() {
  local input="$1" output="$2"
  ffmpeg -y -v error \
    -i "$input" -i assets/locucao_ptpt.wav -stream_loop -1 -i assets/musica_instrumental.wav \
    -filter_complex "[1:a]loudnorm=I=-16:TP=-1.5:LRA=7[voice];[2:a]atrim=0:45,volume=0.105,afade=t=out:st=42:d=3[music];[voice][music]amix=inputs=2:duration=longest:normalize=0,atrim=0:45[a]" \
    -map 0:v:0 -map "[a]" -c:v copy -c:a aac -b:a 192k -movflags +faststart -shortest "$output"
}

burn_one() {
  local input="$1" output="$2" style="$3"
  ffmpeg -y -v error -i "$input" \
    -vf "subtitles=output/oficinaos_ptPT.srt:force_style='${style}'" \
    -c:v libx264 -preset medium -crf 18 -c:a copy -movflags +faststart "$output"
}

mix_one output/oficinaos_16x9.mp4 output/oficinaos_16x9_com_audio.mp4
mix_one output/oficinaos_9x16.mp4 output/oficinaos_9x16_com_audio.mp4
burn_one output/oficinaos_16x9_com_audio.mp4 output/oficinaos_16x9_legendas.mp4 "FontName=Noto Sans,FontSize=16,PrimaryColour=&H00FFFFFF,OutlineColour=&HAA0F172A,BorderStyle=1,Outline=1.0,Shadow=0.3,Alignment=2,MarginV=20"
burn_one output/oficinaos_9x16_com_audio.mp4 output/oficinaos_9x16_legendas.mp4 "FontName=Noto Sans,FontSize=10,PrimaryColour=&H00FFFFFF,OutlineColour=&HAA0F172A,BorderStyle=1,Outline=0.8,Shadow=0.2,Alignment=2,MarginV=35"

mv -f output/oficinaos_16x9_com_audio.mp4 output/oficinaos_16x9.mp4
mv -f output/oficinaos_9x16_com_audio.mp4 output/oficinaos_9x16.mp4

echo 'Final assembly completed.'
