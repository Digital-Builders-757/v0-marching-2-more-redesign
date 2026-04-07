# Common errors — quick reference

| Symptom | Likely cause | Fix |
|--------|----------------|-----|
| ESLint: `react-hooks/purity` / impure render | `Math.random()` or non-determinism during render | Move randomness to `useState` initializer or `useEffect`, or use a stable id |
| ESLint / `@next/next/no-img-element` | Raw `<img>` for LCP content | Use `next/image`; add host to `images.remotePatterns` in `next.config.mjs` |
| Build warns about pnpm lockfile | `pnpm-lock.yaml` present while using npm | Use **one** lockfile; this repo standardizes on **`package-lock.json`** (see skill `marching-2-more`) |
| Turbopack root warning | Monorepo or nested `node_modules` confusion | Set `turbopack.root` in `next.config.mjs` to the app root (see `WORK_ORDER.md`) |
| Typecheck noise in CI | `typescript.ignoreBuildErrors` in Next config | Temporary escape hatch; remove when types are clean |
| Playwright `ERR_CONNECTION_REFUSED` on `127.0.0.1:3000` | Prod server missing or wrong port; local port busy | Run **`npm run build`** before E2E with `CI=true`; config uses **`npm run start -- -p 3000`**. Free port 3000 or set `reuseExistingServer` appropriately |
