import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Cpu, ExternalLink, ShieldCheck, Terminal, UploadCloud, Zap } from 'lucide-react';
import './style.css';

const envRows = [
  ['VITE_COMFY_BACKEND_URL', 'Public URL of your hosted SkyeForge/ComfyUI backend.'],
  ['VITE_OPERATOR_NAME', 'Operator display name.'],
  ['VITE_BRAND_NAME', 'SkyeForge Visual Engine or your chosen product name.'],
  ['VITE_SUPPORT_EMAIL', 'Support or project intake email.'],
];

function App() {
  const [backendUrl, setBackendUrl] = useState(import.meta.env.VITE_COMFY_BACKEND_URL || 'http://localhost:8188');
  const launchUrl = useMemo(() => backendUrl.replace(/\/$/, ''), [backendUrl]);
  const isCommandCenter = window.location.pathname.includes('deployment-command-center');

  return <main>
    <section className="hero">
      <p className="eyebrow">Skyes Over London · kAIxU Operator Build</p>
      <h1>SkyeForge Visual Engine</h1>
      <p className="lede">A branded ComfyUI deployment lane for image, video, inpainting, ControlNet, LoRA, Flux, SD3, WAN, Hunyuan, upscaling, and custom node workflows.</p>
      <div className="launchBox">
        <input value={backendUrl} onChange={e => setBackendUrl(e.target.value)} aria-label="Comfy backend URL" />
        <a href={launchUrl} target="_blank" rel="noreferrer">Launch Engine <ExternalLink size={16}/></a>
      </div>
    </section>

    {isCommandCenter ? <CommandCenter launchUrl={launchUrl}/> : <Landing launchUrl={launchUrl}/>} 
  </main>;
}

function Landing({ launchUrl }) {
  return <>
    <section className="grid cards">
      <Card icon={<Cpu/>} title="Node-based generation" text="Build reusable workflows instead of paying per-click for locked-down consumer generators." />
      <Card icon={<Zap/>} title="Brandable project engine" text="Use one custom visual engine across client sites, internal content, mockups, video, and asset workflows." />
      <Card icon={<ShieldCheck/>} title="No fake hosted claim" text="The real AI backend runs on your GPU host. This Netlify shell is the portal and operator surface." />
    </section>
    <section className="panel">
      <h2>Operator links</h2>
      <div className="buttonRow"><a href="/deployment-command-center.html">Deployment Command Center</a><a href={launchUrl} target="_blank" rel="noreferrer">Open Backend</a></div>
    </section>
  </>;
}

function CommandCenter({ launchUrl }) {
  return <section className="panel command">
    <h2>Deployment Command Center</h2>
    <p>This is the internal operator walkthrough. Keep it private or password-gated if exposed beyond your team.</p>

    <h3>1. Pull and brand ComfyUI</h3>
    <pre>{`bash scripts/bootstrap.sh
cd workspace/ComfyUI
source venv/bin/activate
python main.py --listen 0.0.0.0 --port 8188`}</pre>

    <h3>2. Required environment variables for this Netlify shell</h3>
    <table><tbody>{envRows.map(([k,v]) => <tr key={k}><td><code>{k}</code></td><td>{v}</td></tr>)}</tbody></table>

    <h3>3. Model folders</h3>
    <pre>{`workspace/ComfyUI/models/checkpoints
workspace/ComfyUI/models/loras
workspace/ComfyUI/models/controlnet
workspace/ComfyUI/models/vae
workspace/ComfyUI/models/upscale_models
workspace/ComfyUI/models/clip
workspace/ComfyUI/models/unet`}</pre>

    <h3>4. Smoke checks</h3>
    <pre>{`COMFY_URL=${launchUrl} bash scripts/proof/smoke_local.sh
bash scripts/proof/check_branding_installed.sh`}</pre>

    <h3>5. Live verification</h3>
    <ul>
      <li>Open the backend and confirm the SkyeForge brand bar renders.</li>
      <li>Drop a known workflow JSON and queue a tiny generation.</li>
      <li>Confirm output appears under the output folder.</li>
      <li>Confirm no client-facing page claims GPU hosting through Netlify.</li>
    </ul>
  </section>;
}

function Card({ icon, title, text }) {
  return <article className="card"><div className="icon">{icon}</div><h2>{title}</h2><p>{text}</p></article>;
}

createRoot(document.getElementById('root')).render(<App />);
