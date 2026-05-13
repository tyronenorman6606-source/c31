#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKSPACE_DIR="$ROOT_DIR/workspace"
COMFY_DIR="$WORKSPACE_DIR/ComfyUI"
UPSTREAM_REPO="${COMFY_UPSTREAM_REPO:-https://github.com/comfy-org/ComfyUI.git}"
UPSTREAM_REF="${COMFY_UPSTREAM_REF:-master}"

mkdir -p "$WORKSPACE_DIR"

if ! command -v git >/dev/null 2>&1; then
  echo "git is required. Install git and rerun."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required. Install Python 3.10+ and rerun."
  exit 1
fi

if [ ! -d "$COMFY_DIR/.git" ]; then
  echo "Cloning official ComfyUI from $UPSTREAM_REPO"
  git clone --depth 1 --branch "$UPSTREAM_REF" "$UPSTREAM_REPO" "$COMFY_DIR" || {
    echo "Branch $UPSTREAM_REF failed. Retrying default branch."
    git clone --depth 1 "$UPSTREAM_REPO" "$COMFY_DIR"
  }
else
  echo "ComfyUI already exists. Pulling latest changes."
  git -C "$COMFY_DIR" pull --ff-only || true
fi

cd "$COMFY_DIR"
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip wheel setuptools
pip install -r requirements.txt

bash "$ROOT_DIR/scripts/apply-branding.sh"

mkdir -p \
  "$COMFY_DIR/models/checkpoints" \
  "$COMFY_DIR/models/loras" \
  "$COMFY_DIR/models/controlnet" \
  "$COMFY_DIR/models/vae" \
  "$COMFY_DIR/models/upscale_models" \
  "$COMFY_DIR/models/clip" \
  "$COMFY_DIR/models/unet" \
  "$COMFY_DIR/input" \
  "$COMFY_DIR/output"

cat > "$COMFY_DIR/SKYE_BRANDED_START.md" <<'MARKDOWN'
# SkyeForge Visual Engine Start

Run:

```bash
source venv/bin/activate
python main.py --listen 0.0.0.0 --port 8188
```

Then open:

```text
http://localhost:8188
```
MARKDOWN

echo "✅ SkyeForge Visual Engine wrapper installed."
echo "Next: cd $COMFY_DIR && source venv/bin/activate && python main.py --listen 0.0.0.0 --port 8188"
