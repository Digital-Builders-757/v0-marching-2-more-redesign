# Workflow — how we ship changes

**Operating guide** for git, CI, and Cursor commands. Constitution for day-to-day work.

## Branches

- **Integration branch:** `develop` — daily feature work merges here via PR.
- **Production:** `main` — promote when the public site should update.
- **Feature branches:** `feat/*`, `fix/*`, etc. off `develop`.

Details: [development/BRANCHING.md](./development/BRANCHING.md).

## Releases

- **Develop → main:** use PR with **merge commit** when ready for production (not squash into `main` if your team uses merge commits as the release boundary).
- Steps: [development/RELEASING.md](./development/RELEASING.md).

## Cursor commands

- **`/Ship`:** run checks, stage intentional files, commit, push current branch.
- **`/pr`:** open or update PRs (`feature → develop`, or `develop → main`).

Index: [.cursor/commands/README.md](../.cursor/commands/README.md).

## Required checks

- **`npm run ci`** before merging substantive work: lint, Vitest, TypeScript, production build, Playwright e2e.

## Documentation hygiene

- After shipping a feature: add a short line to [WORK_ORDER.md](./WORK_ORDER.md) if behavior or routes changed.
- If priorities shift: update [MVP_STATUS_ROADMAP.md](./MVP_STATUS_ROADMAP.md).

## Skill reference

- Repo conventions: [.cursor/skills/marching-2-more/SKILL.md](../.cursor/skills/marching-2-more/SKILL.md).
