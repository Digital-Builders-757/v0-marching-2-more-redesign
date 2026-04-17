# Documentation

Marching 2 More — **Next.js marketing site** (not the TOTL/Supabase product unless deps are added).

**Start here:** [AGENTS.md](../AGENTS.md) — then [ARCHITECTURE_CONSTITUTION.md](./ARCHITECTURE_CONSTITUTION.md), [ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md), [BRAND_CONSTITUTION.md](./BRAND_CONSTITUTION.md), [WORKFLOW.md](./WORKFLOW.md).

**Full table:** [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

| Doc | Purpose |
|-----|---------|
| [WORK_ORDER.md](./WORK_ORDER.md) | Recent ships and next steps |
| [MVP_STATUS_ROADMAP.md](./MVP_STATUS_ROADMAP.md) | P0/P1 snapshot |
| [development/BRANCHING.md](./development/BRANCHING.md) | Branch / PR flow |
| [development/RELEASING.md](./development/RELEASING.md) | Promote `develop` → `main` |
| [releasenotes/README.md](./releasenotes/README.md) | Optional release note archive |
| [troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md](./troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md) | Lint, images, lockfile |
| [PROJECT_CONTEXT_PROMPT.md](./PROJECT_CONTEXT_PROMPT.md) | Paste-friendly agent context |
| [../README.md](../README.md) | Clone, install, dev |

## Git workflow (short)

- **Integrate:** feature branch → PR → **`develop`**.
- **Production:** PR **`develop` → `main`** when ready.
- **Cursor:** [.cursor/commands/README.md](../.cursor/commands/README.md) — **`/Ship`** then **`/pr`**.
