#!/bin/sh

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT_DIR"

PAGES="
index.html
asorocket/privacy-policy/index.html
asorocket/terms-of-use/index.html
clearwave/privacy-policy/index.html
clearwave/terms-of-use/index.html
visuallabx/privacy-policy/index.html
visuallabx/terms-of-use/index.html
photocamai/privacy-policy/index.html
photocamai/terms-of-use/index.html
wallpapers/privacy-policy/index.html
wallpapers/terms-of-use/index.html
retrocamneo/privacy-policy/index.html
retrocamneo/terms-of-use/index.html
"

BACKUP_DIR=$(mktemp -d)

restore_pages() {
  for page in $PAGES; do
    cp -f "$BACKUP_DIR/$page" "$ROOT_DIR/$page"
  done
}

trap restore_pages EXIT INT TERM

for page in $PAGES; do
  mkdir -p "$BACKUP_DIR/$(dirname "$page")"
  cp -f "$ROOT_DIR/$page" "$BACKUP_DIR/$page"
done

cp -f index.source.html index.html
sh ./scripts/sync-legal-html.sh
vite build
