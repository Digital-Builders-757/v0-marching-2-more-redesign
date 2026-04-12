# Branching (Marching 2 More)

This repo integrates feature work through **pull requests into `develop`**.

**Cursor:** `.cursor/commands/Ship.md` (**`/Ship`**) is for commit + push on your branch; `.cursor/commands/pr.md` (**`/pr`**) is for opening/updating PRs. Index: `.cursor/commands/README.md`.

## Branches

- **`main`**: production / release line (GitHub default for stable snapshots).
- **`develop`**: integration branch — merge feature work here first.

## Rules

1. Create **feature branches** from **`develop`**: `feat/*`, `fix/*`, `docs/*`, `chore/*`, `polish/*`, etc.
2. Open a PR with **base `develop`** and your branch as **head**.
3. Prefer **merge commits** when merging PRs if that keeps history readable for your team (see `docs/development/RELEASING.md`).
4. Ship to production via PR **`develop` → `main`** when ready.

Avoid long sequences of commits directly on `develop` for product changes; use a branch unless it is a small agreed exception (for example docs-only hotfixes).

## Local workflow

```bash
git checkout develop
git pull origin develop
git checkout -b feat/some-change

# work + commit

git push -u origin feat/some-change
# open PR into develop (GitHub UI or gh pr create --base develop)
```

## Shipping checks

Run **`npm run typecheck`**, **`npm run test`**, **`npm run lint`**, **`npm run build`** before pushing when possible (see `/Ship` in `.cursor/commands/Ship.md`).
