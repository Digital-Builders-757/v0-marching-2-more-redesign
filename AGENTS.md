# Agent guide — Marching 2 More (this repo)

**Source of truth for “what is this project and how do we work in it.”** Read this before large changes.

## What this is

- **Next.js 16** App Router **marketing site** for Marching 2 More (Hampton Roads real estate).
- **Not** the TOTL/Supabase product stack unless those dependencies are added later.
- **No** production CMS in-repo; copy lives in components and `content.ts` modules.

## Canonical documentation (read order)

| Order | Doc | Why |
|------|-----|-----|
| 1 | [docs/ARCHITECTURE_CONSTITUTION.md](docs/ARCHITECTURE_CONSTITUTION.md) | Invariants (quick) |
| 2 | [docs/ARCHITECTURE_SOURCE_OF_TRUTH.md](docs/ARCHITECTURE_SOURCE_OF_TRUTH.md) | Routes, folders, patterns |
| 3 | [docs/BRAND_CONSTITUTION.md](docs/BRAND_CONSTITUTION.md) | Design tokens and tone |
| 4 | [docs/WORKFLOW.md](docs/WORKFLOW.md) | Git, PRs, Ship |
| 5 | [docs/MVP_STATUS_ROADMAP.md](docs/MVP_STATUS_ROADMAP.md) | P0/P1 priorities |
| 6 | [docs/WORK_ORDER.md](docs/WORK_ORDER.md) | Recent ships and next steps |

**Paste-friendly context:** [docs/PROJECT_CONTEXT_PROMPT.md](docs/PROJECT_CONTEXT_PROMPT.md)

**Full index:** [docs/DOCUMENTATION_INDEX.md](docs/DOCUMENTATION_INDEX.md)

**Active overhaul (vision + standards):** [docs/M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](docs/M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md) — execution log: [docs/WORK_ORDER.md](docs/WORK_ORDER.md).

## Tooling

- **Package manager:** `npm` only (`package-lock.json`).
- **Before merge:** `npm run ci` (lint, test, typecheck, build).
- **Cursor:** [.cursor/skills/marching-2-more/SKILL.md](.cursor/skills/marching-2-more/SKILL.md) and [.cursor/commands/README.md](.cursor/commands/README.md) (`/Ship`, `/pr`).

## Code anchors

- Site URLs / phone / mailto / Calendly: `lib/m2m-site.ts`
- Nav + footer link lists: `lib/m2m-nav.ts`
- Marketing imagery (Blob): `lib/m2m-media.ts`
- Campaign landings often use `components/<slug>/content.ts` + `Header` `consultationCtaVariant="outlineCream"` + `DivorceLandingFooter`.

## Archive

Historical / parity snapshots: [docs/archive/](docs/archive/)
