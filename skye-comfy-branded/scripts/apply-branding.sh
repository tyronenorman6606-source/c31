#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMFY_DIR="${COMFY_DIR:-$ROOT_DIR/workspace/ComfyUI}"
SOURCE_DIR="$ROOT_DIR/branding/custom_nodes/skye_brand"
TARGET_DIR="$COMFY_DIR/custom_nodes/skye_brand"

if [ ! -d "$COMFY_DIR" ]; then
  echo "ComfyUI folder not found at $COMFY_DIR"
  echo "Run scripts/bootstrap.sh first or set COMFY_DIR=/path/to/ComfyUI"
  exit 1
fi

mkdir -p "$COMFY_DIR/custom_nodes"
rm -rf "$TARGET_DIR"
cp -R "$SOURCE_DIR" "$TARGET_DIR"

echo "✅ Branding copied to $TARGET_DIR"
