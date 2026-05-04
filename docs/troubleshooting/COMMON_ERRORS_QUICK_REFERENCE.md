# Common errors — quick reference

| Symptom | Likely cause | Fix |
|--------|----------------|-----|
| ESLint: `react-hooks/purity` / impure render | `Math.random()` or non-determinism during render | Move randomness to `useState` initializer or `useEffect`, or use a stable id |
| ESLint / `@next/next/no-img-element` | Raw `<img>` for LCP content | Use `next/image`; add host to `images.remotePatterns` in `next.config.mjs` |
| Build warns about pnpm lockfile | `pnpm-lock.yaml` present while using npm | Use **one** lockfile; this repo standardizes on **`package-lock.json`** (see skill `marching-2-more`) |
| Turbopack root warning | Monorepo or nested `node_modules` confusion | Set `turbopack.root` in `next.config.mjs` to the app root (see `WORK_ORDER.md`) |
| TypeScript errors fail `next build` | Expected — this repo does **not** bypass TS during build | Fix types locally; run `npm run typecheck`. Do **not** re-add `typescript.ignoreBuildErrors` unless there is an explicit, time-boxed reason |
| `tsc`: Cannot find module `../../app/.../page.js` under `.next/types` | Stale Next generated types after removing or renaming `app/` routes | Delete the `.next` folder, then run `npm run typecheck` or `npm run ci` again |
| ESLint: `react/no-children-prop` | `children={<Foo />}` as a prop | Nest children: `<Bar><Foo /></Bar>` |
| ESLint: `react-hooks/set-state-in-effect` (cascading renders) | `setState` synchronously in `useEffect` on mount | Defer with `queueMicrotask` / `requestAnimationFrame`, or initialize state without an effect where possible |
| Lead API returns **503** / “not configured” | Missing `GHL_API_KEY` / `GHL_LOCATION_ID` or custom-field env vars | Set Vercel env from `.env.example`, or use `GHL_DRY_RUN=true` for local UI-only tests |
| Lead API returns **400** with `crm_validation` or `crm_duplicate_or_merge` | GHL **400 / 422** (validation, field/tag/pipeline mismatch) or duplicate-style response | **Browser:** read `error`, `code`, `correlationId`, `failed_step`, `crm_http_status`. **Vercel:** `[ghl] API error` + `upstreamDetail` / `bodyPreview`; **`upstream_error`** logs `crmUserCode`. See [M2M_GHL_OPERATOR_VERIFICATION.md](../M2M_GHL_OPERATOR_VERIFICATION.md) §4 |
| Lead API returns **429** / `crm_rate_limit` | Too many submissions | Retry after a short wait |
| Lead API returns **502** with `crm_auth`, `crm_server`, or `crm_unreachable` | GHL **401/403**, **5xx**, or other transport/upstream issue | Same triage as above; **401/403** → token / location scope |
| Lead API returns **500** / `internal_error` | Unexpected server error in `lib/ghl` orchestration | **Vercel:** `[ghl] submit_unexpected` + `correlationId` |
| Contact in GHL but user saw an error | One required downstream step failed after upsert (tags, opportunity, or note) | Check `failed_step` + `correlationId`; use Vercel `[ghl] API error` / `upstream_error` logs to identify exact failing step |
| Lead submission fails with config-style routing message | Missing/invalid required routing configuration (tags or pipeline env) | Verify `GHL_TAG_LEAD_BUYER` / `GHL_TAG_LEAD_SELLER` and all four pipeline vars; strict mode no longer allows “success without opportunity” |
| DOB dropdown “won’t open” / clicks dead on inset hero | Native `<select>` + ancestor **`overflow-hidden`** (e.g. `M2mInsetHeroFrame`) or z-index overlap | **`M2mLeadDobField`** uses Radix **`Select`** (portaled content); **`/home-search`** lead form uses **`relative z-20`** |
