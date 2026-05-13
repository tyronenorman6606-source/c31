import { app } from "../../scripts/app.js";

const BRAND = {
  name: "SkyeForge Visual Engine",
  subline: "Skyes Over London · kAIxU Operator Build",
  badge: "SOL//13",
  css: new URL("./skye_brand.css", import.meta.url).href,
  faviconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="30" fill="#05050a"/><path d="M21 83c18-43 51-56 86-38-20-2-35 6-45 23 18-8 33-8 45 2-30 4-52 16-69 36 5-14 13-26 24-36-16 4-29 8-41 13Z" fill="#d9ff3f"/><circle cx="95" cy="30" r="8" fill="#8d5cff"/></svg>`
};

function addStylesheet() {
  if (document.querySelector("link[data-skye-brand]")) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = BRAND.css;
  link.dataset.skyeBrand = "true";
  document.head.appendChild(link);
}

function setFavicon() {
  let icon = document.querySelector("link[rel='icon']") || document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/svg+xml";
  icon.href = `data:image/svg+xml,${encodeURIComponent(BRAND.faviconSvg)}`;
  document.head.appendChild(icon);
}

function mountBrandBar() {
  if (document.querySelector("#skye-brand-bar")) return;
  const bar = document.createElement("div");
  bar.id = "skye-brand-bar";
  bar.innerHTML = `
    <div class="skye-mark" aria-hidden="true">${BRAND.badge}</div>
    <div class="skye-copy">
      <strong>${BRAND.name}</strong>
      <span>${BRAND.subline}</span>
    </div>
    <div class="skye-live-pill">GPU NODE READY</div>
  `;
  document.body.appendChild(bar);
}

function mountEmptyState() {
  if (document.querySelector("#skye-empty-helper")) return;
  const helper = document.createElement("div");
  helper.id = "skye-empty-helper";
  helper.innerHTML = `
    <strong>Skye workflow lane</strong>
    <span>Load a workflow, drop an image, or build a node chain for image, video, upscaling, inpainting, ControlNet, LoRA, Flux, SD3, WAN, or Hunyuan tasks.</span>
  `;
  document.body.appendChild(helper);
}

function retitle() {
  document.title = BRAND.name;
  for (const node of document.querySelectorAll("*:not(script):not(style)")) {
    if (node.childNodes && node.childNodes.length === 1 && node.textContent?.trim() === "ComfyUI") {
      node.textContent = BRAND.name;
    }
  }
}

app.registerExtension({
  name: "skyes.over.london.branding",
  setup() {
    addStylesheet();
    setFavicon();
    mountBrandBar();
    mountEmptyState();
    retitle();
    const observer = new MutationObserver(() => retitle());
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
});
