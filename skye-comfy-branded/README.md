# SkyeForge Visual Engine — Branded ComfyUI Distribution

A Skyes Over London branded deployment wrapper for ComfyUI. This package does not vendor the full upstream ComfyUI source. It pulls the official repository during setup, then installs a branding/customization layer, deployment command center, project presets, and operator scripts.

## What this is

- A branded ComfyUI distribution layer.
- A repeatable installer for local machines, Codespaces, VPS, RunPod, Vast.ai, Paperspace, Lambda, or any CUDA GPU host.
- A Netlify-drop public/operator landing shell for linking clients or teammates to your hosted engine.
- A custom node/web-extension pack that changes the visual identity inside ComfyUI without hard-forking the core app.

## What this is not

- It is not a fake browser-only AI generator. ComfyUI needs Python and model files.
- It is not GPU compute hosted by Netlify. Netlify can host the landing/control shell, not the actual inference backend.
- It is not a complete model bundle. You must bring model weights because many models have separate licenses and large file sizes.

## Quick start

```bash
unzip skye-comfy-branded.zip
cd skye-comfy-branded
bash scripts/bootstrap.sh
cd workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 8188
```

Open:

```text
http://localhost:8188
```

## Docker quick start

```bash
cd deploy/docker
docker compose up --build
```

Open:

```text
http://localhost:8188
```

## Recommended GPU run

Use this when you have NVIDIA CUDA available:

```bash
bash scripts/bootstrap.sh
cd workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 8188 --cuda-device 0
```

## Branding installed

The installer copies this folder into ComfyUI:

```text
custom_nodes/skye_brand
```

That extension injects:

- SkyeForge top identity bar
- Skyes Over London / kAIxU operator badge
- custom dark neon visual treatment
- status pill
- favicon override
- branded empty-state helper
- safe cosmetic UI changes only

## Deployment Command Center

Open this after deploying the Netlify shell:

```text
/deployment-command-center.html
```

It gives operator setup steps, environment variables, GPU backend notes, model folders, smoke checks, and launch verification.

## Model folders

After bootstrap, place model weights under:

```text
workspace/ComfyUI/models/checkpoints
workspace/ComfyUI/models/loras
workspace/ComfyUI/models/controlnet
workspace/ComfyUI/models/vae
workspace/ComfyUI/models/upscale_models
workspace/ComfyUI/models/clip
workspace/ComfyUI/models/unet
```

## Smoke proof commands

```bash
bash scripts/proof/smoke_local.sh
bash scripts/proof/check_branding_installed.sh
```

## License warning

ComfyUI is GPL-3.0. This wrapper keeps upstream separate and installs a branded custom extension. If you redistribute a modified combined product, keep GPL obligations in view and preserve upstream notices.
