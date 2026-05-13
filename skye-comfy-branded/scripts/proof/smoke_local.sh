#!/usr/bin/env bash
set -euo pipefail
URL="${COMFY_URL:-http://127.0.0.1:8188}"

echo "Checking ComfyUI backend at $URL"
if command -v curl >/dev/null 2>&1; then
  curl -fsS "$URL/system_stats" >/tmp/skye-comfy-system-stats.json
  test -s /tmp/skye-comfy-system-stats.json
  echo "✅ /system_stats responded."
else
  python3 - <<PY
import json, urllib.request
url = "$URL/system_stats"
with urllib.request.urlopen(url, timeout=10) as r:
    data = r.read()
assert data
print("✅ /system_stats responded.")
PY
fi
