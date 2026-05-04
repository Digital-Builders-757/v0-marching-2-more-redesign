# Cursor commands (Marching 2 More)

Slash-style prompts stored here drive repeatable workflows. For **stack rules and CTAs**, read **[`.cursor/skills/marching-2-more/SKILL.md`](../skills/marching-2-more/SKILL.md)** first — it matches this repo (Next marketing site, `lib/m2m-site.ts`, npm lockfile).

**Git workflow (ViZb):** day-to-day work merges into **`develop`**; production updates ship via **`develop` → `main`**. Details: [docs/development/BRANCHING.md](../../docs/development/BRANCHING.md), [docs/development/RELEASING.md](../../docs/development/RELEASING.md).

| Step | Command file | What it does |
|------|----------------|----------------|
| 1 | [Ship.md](./Ship.md) | Run checks, update docs, commit, push **your current branch**; then open a PR **into `develop`** (feature branch) or follow branching rules if on `develop`. |
| 2 | [pr.md](./pr.md) | Open or update a PR: **feature → `develop`**, or **release `develop` → `main`** when the site is ready for production. |
| Optional | [release.md](./release.md) | Release-notes narrative before/after a **`develop` → `main`** promotion. |

| File | Intent |
|------|--------|
| [verify.md](./verify.md) | Go/no-go: same checks as Ship (`typecheck`, `test`, `lint`, `build`) or `npm run ci` |
| [plan.md](./plan.md) | Design-only feature plan (reads repo docs; M2M context in-file) |
| [implement.md](./implement.md) | Implement an approved plan (M2M vs full-stack notes in-file) |
| [summarize.md](./summarize.md) | Handoff prompt for the next agent |
| [continue.md](./continue.md) | Resume multi-step work |
| [debug.md](./debug.md) | Structured debugging |
| [brand-check.md](./brand-check.md) | Brand/copy checks |
| [playwright-smoke.md](./playwright-smoke.md) | Browser smoke tests (when configured) |
| Other (`schema.md`, `docs-sync.md`, …) | Generic templates; **skip database/schema steps** unless this repo gains Supabase/migrations |

**Note:** [sumarize.md](./sumarize.md) is a stub redirect → [summarize.md](./summarize.md).

**CI parity:** Pull requests run the same sequence as **`npm run ci`**: lint → Vitest → typecheck → build → Playwright e2e (see `.github/workflows/pr-ci.yml`).
