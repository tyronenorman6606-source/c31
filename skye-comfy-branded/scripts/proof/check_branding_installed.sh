#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
COMFY_DIR="${COMFY_DIR:-$ROOT_DIR/workspace/ComfyUI}"
TARGET="$COMFY_DIR/custom_nodes/skye_brand"

[ -f "$TARGET/__init__.py" ] || { echo "Missing skye_brand __init__.py"; exit 1; }
[ -f "$TARGET/web/skye_brand.js" ] || { echo "Missing skye_brand.js"; exit 1; }
[ -f "$TARGET/web/skye_brand.css" ] || { echo "Missing skye_brand.css"; exit 1; }
grep -q "SkyeForge Visual Engine" "$TARGET/web/skye_brand.js" || { echo "Brand string not found"; exit 1; }

echo "✅ Branding extension files are installed."
