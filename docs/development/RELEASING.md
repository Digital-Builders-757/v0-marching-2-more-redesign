# Releasing

## Normal release flow

1. Make sure **`develop`** is green (local: **`npm run ci`**; CI runs the same steps on PRs — see `.github/workflows/pr-ci.yml`).
2. Open or update PR: **`develop` → `main`** (Cursor: **`/pr`**; examples in `.cursor/commands/pr.md`).
3. Merge with **merge commit** (`gh pr merge --merge` — see `BRANCHING.md`).
4. Deploy follows **`main`** (e.g. Vercel or your host).

Optional: archive user-facing notes under `docs/releasenotes/` using the convention in `.cursor/commands/release.md`.

## Expectations

- No direct pushes to **`main`** for normal releases.
- Keep PRs small and single-purpose; prefer integrating features via **`feature-branch` → `develop`** first.
