# Branching (Marching 2 More)

This repo integrates feature work through **pull requests into `develop`**.

## Defaults

- Create **feature branches** from **`develop`**: `feat/*`, `fix/*`, `docs/*`, `chore/*`, etc.
- Open a PR with **base `develop`** and your branch as **head**.
- Avoid long sequences of commits directly on `develop` for product changes; use a branch unless it is a small agreed exception (for example docs-only hotfixes).

## Shipping

- Run **`npm run typecheck`**, **`npm run test`**, **`npm run lint`**, **`npm run build`** before pushing when possible (see `/Ship` in `.cursor/commands/Ship.md`).
- After push: `gh pr create --base develop --head <your-branch>` or use the GitHub UI.

## Main vs develop

- If the remote uses **`main`** as the default release line, treat **`develop`** as the integration branch for active work unless your team documents otherwise.
