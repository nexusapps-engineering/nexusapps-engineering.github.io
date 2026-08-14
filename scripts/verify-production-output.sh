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

test -s index.html || {
  echo "Production check failed: index.html is missing or empty." >&2
  exit 1
}

if grep -q '/src/main.tsx' index.html; then
  echo "Production check failed: index.html points to the source entrypoint." >&2
  exit 1
fi

grep -Eq 'src="/assets/[^"[:space:]]+\.js"' index.html || {
  echo "Production check failed: index.html has no built JavaScript entrypoint." >&2
  exit 1
}

grep -Eq 'href="/assets/[^"[:space:]]+\.css"' index.html || {
  echo "Production check failed: index.html has no built stylesheet." >&2
  exit 1
}

for asset in $(grep -oE '/assets/[^"[:space:]]+' index.html || true); do
  asset_path=${asset#/}
  test -f "$asset_path" || {
    echo "Production check failed: missing published asset $asset_path." >&2
    exit 1
  }
done

for page in $PAGES; do
  test -s "$page" || {
    echo "Production check failed: missing page $page." >&2
    exit 1
  }

  if [ -f "dist/$page" ] && ! cmp -s "$page" "dist/$page"; then
    echo "Production check failed: $page differs from the build output." >&2
    exit 1
  fi
done

if [ -f dist/index.html ] && ! cmp -s index.html dist/index.html; then
  echo "Production check failed: root index.html differs from dist/index.html." >&2
  exit 1
fi

echo "Production output verified: built entrypoints and referenced assets are present."
