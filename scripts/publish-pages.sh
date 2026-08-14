#!/bin/sh

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT_DIR"

PAGES="
asorocket/privacy-policy
asorocket/terms-of-use
clearwave/privacy-policy
clearwave/terms-of-use
visuallabx/privacy-policy
visuallabx/terms-of-use
photocamai/privacy-policy
photocamai/terms-of-use
wallpapers/privacy-policy
wallpapers/terms-of-use
retrocamneo/privacy-policy
retrocamneo/terms-of-use
"

test -s dist/index.html
cp -f dist/index.html ./index.html
mkdir -p assets
cp -f dist/assets/* ./assets

for page in $PAGES; do
  mkdir -p "$page"
  cp -f "dist/$page/index.html" "$page/index.html"
done

touch .nojekyll
sh ./scripts/verify-production-output.sh
