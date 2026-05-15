# Recovery Pointer

This public repo intentionally does not include the recovered Skye0S/CDE seed, raw `.env`, GPU extract, Netlify/Cloudflare recovery output, or recovery bundles.

Local recovery artifacts in this Codespace:

- Git seed repo: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-git-seed`
- Verified Git bundle: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-cde-recovery-20260515.bundle`
- Full clean candidate: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-autonomous-ide-clean`
- Handoff: `/workspaces/c31/recovery-from-env/RECOVERY_HANDOFF_20260515.md`

Current private recovery metadata:

- Seed HEAD: `f5658606 Add recovery handoff`
- Bundle SHA256: `0aee9337036e1673bb21e2b1696837057de8d5348e57819cb081a38e5ef18150`

The recovery seed needs a private GitHub remote before pushing:

```bash
cd /workspaces/c31/recovery-from-env/reconstructed/skye0s-git-seed
git remote add origin <private-repo-url>
git push -u origin main
```
