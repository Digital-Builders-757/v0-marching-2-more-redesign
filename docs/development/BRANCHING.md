# Branching (team workflow)

## Branches
- **main**: production
- **develop**: integration branch (everything merges here first)

## Rules
1) Always create a **feature branch** off `develop`
   - `feat/...`, `fix/...`, `polish/...`, `chore/...`, `docs/...`
2) Open a PR **into `develop`**
3) Merge using a **merge commit** (keep history readable)
4) Ship to prod via PR **`develop` → `main`**

## Local commands
```bash
git checkout develop
git pull
git checkout -b feat/some-change

# work + commit

git push -u origin feat/some-change
# open PR to develop
```
