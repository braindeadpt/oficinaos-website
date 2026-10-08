#!/usr/bin/env bash
# Submit URLs to IndexNow (Bing + partners) after deploy.
# Usage: tools/indexnow.sh [url ...]
#   no args  -> submits the main pages
#   with args-> submits the given absolute URLs
set -euo pipefail

KEY="0e8ba7d12b3c70961fad7560523fc3ed"
HOST="oficinaos.app"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

if [ "$#" -gt 0 ]; then
  URLS=("$@")
else
  URLS=(
    "https://${HOST}/"
    "https://${HOST}/en/"
    "https://${HOST}/es/"
    "https://${HOST}/docs/"
    "https://${HOST}/software-reparacao-telemoveis/"
    "https://${HOST}/en/software-reparacao-telemoveis/"
    "https://${HOST}/es/software-reparacao-telemoveis/"
  )
fi

URL_LIST=$(printf '"%s",' "${URLS[@]}")
URL_LIST="[${URL_LIST%,}]"

curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":${URL_LIST}}" \
  -w "\nHTTP %{http_code}\n"
