FROM nvidia/cuda:12.4.1-cudnn-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    COMFY_UPSTREAM_REPO=https://github.com/comfy-org/ComfyUI.git

RUN apt-get update && apt-get install -y --no-install-recommends \
    git python3 python3-venv python3-pip curl ca-certificates build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/skye-comfy
COPY . /opt/skye-comfy

RUN bash scripts/bootstrap.sh

WORKDIR /opt/skye-comfy/workspace/ComfyUI
EXPOSE 8188

CMD ["bash", "-lc", "source venv/bin/activate && python main.py --listen 0.0.0.0 --port 8188"]
