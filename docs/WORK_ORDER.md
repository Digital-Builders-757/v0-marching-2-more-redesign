# Work order (Marching 2 More — site redesign)

## Done recently

- **Production media** — `lib/m2m-media.ts` (Vercel Blob). Blog cards, `property-search-new` circles, and `team-members` use Blob URLs; Unsplash removed from `next.config.mjs`.
- **CI & docs** — PR template, `pr-ci.yml`, `docs/development/RELEASING.md`, merged branching guide.
- `.cursor/commands` aligned with **`.cursor/skills/marching-2-more`** (implement/plan/summarize/Ship + `commands/README.md`); Ship doc paths for `docs/development/BRANCHING.md`, `MVP_STATUS_ROADMAP`, troubleshooting quick reference.
- ESLint 9 flat config (`eslint.config.mjs` + `eslint-config-next/core-web-vitals`).
- `npm run ci`: lint, placeholder test, TypeScript, production build.
- Phone links use `M2M_PHONE_HREF` (`tel:+17572062859`) from `lib/m2m-site.ts`.
- `next.config.mjs`: `turbopack.root` pinned; `images.remotePatterns` for Vercel Blob (`lib/m2m-media.ts`).
- Replaced decorative `<img>` with `next/image` where ESLint flagged LCP (`property-search`, `property-search-new`, `team-members`).

## Next

1. **Content / parity QA** — Walk primary routes (home, buy, sell, team, contact, policy pages). Confirm CTAs match `lib/m2m-site.ts` (Calendly, RealScout, Google reviews, partners).
2. **Tests** — Replace the placeholder `npm test` script with real unit or E2E coverage once priorities are set (e.g. Playwright for smoke routes).
3. **Optional** — Re-enable strict Next typecheck in CI (remove or narrow `typescript.ignoreBuildErrors` in `next.config.mjs` when the codebase is ready).

## Source of truth

| Area | Location |
|------|----------|
| External URLs, phone, mailto helpers | `lib/m2m-site.ts` |
| Blob image URLs for UI | `lib/m2m-media.ts` |
| App routes | `app/` |
| Shared UI (shadcn-style) | `components/ui/` |
| Marketing sections | `components/` |
