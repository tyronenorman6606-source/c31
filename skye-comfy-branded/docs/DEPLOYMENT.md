# Deployment Guide

## Reality check

ComfyUI is a Python/GPU application. Deploy the AI backend to a GPU-capable machine. Deploy the included Netlify shell as the public/operator portal.

## Good backend targets

- Local NVIDIA GPU workstation
- RunPod pod
- Vast.ai instance
- Paperspace GPU machine
- Lambda GPU Cloud
- Any VPS or bare-metal box with NVIDIA GPU and CUDA support

## Not valid as backend

- Netlify static hosting
- Netlify Functions for model inference
- Cloudflare Pages alone
- GitHub Pages

## Steps

1. Provision a GPU machine.
2. Install git, Python 3.10+, CUDA runtime, and NVIDIA drivers.
3. Upload this package.
4. Run `bash scripts/bootstrap.sh`.
5. Start ComfyUI with `python main.py --listen 0.0.0.0 --port 8188`.
6. Put the public backend URL into the Netlify shell as `VITE_COMFY_BACKEND_URL`.
7. Run proof checks.

## Security minimum

Do not expose a raw ComfyUI backend to the public internet without auth, firewall rules, reverse proxy auth, or a private tunnel. At minimum, put it behind Cloudflare Access, Tailscale, ZeroTier, Nginx basic auth, or another gate.
