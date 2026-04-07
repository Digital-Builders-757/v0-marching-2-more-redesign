# Common errors — quick reference

| Symptom | Likely cause | Fix |
|--------|----------------|-----|
| `ESLint couldn't find an eslint.config.*` (ESLint 9+) | No flat config | Use root `eslint.config.mjs` extending `eslint-config-next/core-web-vitals` (see repo). |
| `Cannot call impure function during render` on `Math.random` in `useMemo` | React Compiler / `react-hooks/purity` | Use `useState(() => …)` so the random value is created once on mount, not during render recomputation. |
| Next build: `Failed to get registry from "pnpm"` | `pnpm-lock.yaml` present but `pnpm` not on PATH; Next tries to patch lockfile | Install pnpm in CI/local **or** use one lockfile strategy (npm-only with `package-lock.json`, or pnpm-only). Remove stray parent `package-lock.json` if Next picks wrong workspace root. |
| `npm run test` missing | No test runner yet | Repo uses a placeholder `test` script until real tests exist; replace when adding Vitest/Jest/Playwright. |
