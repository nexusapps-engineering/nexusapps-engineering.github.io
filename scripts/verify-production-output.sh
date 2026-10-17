#!/bin/sh
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
node scripts/verify-production-output.mjs "${1:-.}"
