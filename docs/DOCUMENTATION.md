# Documentation index

| Doc | Purpose |
|-----|---------|
| [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) | Full doc table (includes Cursor skill/commands) |
| [WORK_ORDER.md](./WORK_ORDER.md) | What shipped recently and ordered next steps |
| [MVP_STATUS_ROADMAP.md](./MVP_STATUS_ROADMAP.md) | P0/P1 roadmap snapshot |
| [development/BRANCHING.md](./development/BRANCHING.md) | Branch / PR flow toward `develop` |
| [development/RELEASING.md](./development/RELEASING.md) | Promote **`develop` → `main`** when ready for production |
| [releasenotes/README.md](./releasenotes/README.md) | Optional archive folder for **`/release`** notes |
| [troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md](./troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md) | Repeatable fixes (lint, images, lockfile) |
| [../README.md](../README.md) | Clone, install, dev server, v0 project link |

## Git workflow (short)

- **Integrate work:** feature branch → PR → **`develop`**.
- **Ship the website:** PR **`develop` → `main`** when ready.
- **Cursor:** [`.cursor/commands/README.md`](../.cursor/commands/README.md) — **`/Ship`** (checks, commit, push) then **`/pr`** (open/update PRs).

This repository is a **Next.js App Router** marketing site for Marching 2 More. It is **not** the TOTL/Supabase product stack unless those dependencies are added later.
