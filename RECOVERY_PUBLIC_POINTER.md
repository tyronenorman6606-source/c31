# Recovery Pointer

This public repo intentionally does not include the recovered Skye0S/CDE seed, raw `.env`, GPU extract, Netlify/Cloudflare recovery output, or recovery bundles.

Local recovery artifacts in this Codespace:

- Git seed repo: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-git-seed`
- Verified Git bundle: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-cde-recovery-20260515.bundle`
- Full clean candidate: `/workspaces/c31/recovery-from-env/reconstructed/skye0s-autonomous-ide-clean`
- Handoff: `/workspaces/c31/recovery-from-env/RECOVERY_HANDOFF_20260515.md`

Current private recovery metadata:

- Seed HEAD: `22dfce2a Make recovery manifest self-verifying`
- Bundle SHA256: `8fe60406d475b7e9c548c2b8da6cf40b09948a51631d9e0a335b7dd7cd51a174`

The recovery seed needs a private GitHub remote before pushing:

```bash
cd /workspaces/c31/recovery-from-env/reconstructed/skye0s-git-seed
git remote add origin <private-repo-url>
git push -u origin main
```
