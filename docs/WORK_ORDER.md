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
- **`/improve-your-credit`** — Credit campaign landing (`app/improve-your-credit/`, `components/improve-your-credit/`): hero collage, education + homework, takeaways + embedded video, playbook lead form (integration TODO), closing band; copy and image swap points in `content.ts`; not added to hamburger nav by default.
- **`/downsizing-your-home`** — Downsizing campaign landing: hero + “Common Problems” icon grid, guide form (ship-to + special instructions; integration TODO), four service cards, webinar/action-plan block; `WEBINAR_REGISTER_URL` temporary Calendly + TODO in `content.ts`; `public/images/downsizing-your-home/` for future art.
- **`/va-loan-benefits`** — VA benefits campaign landing: hero, embedded VA video + attribution, long-form benefits copy, full-bleed CTA to `#va-lead-form`, “Get on the List” lead form (integration TODO); `content.ts` SWAP comments for hero/CTA art; `public/images/va-loan-benefits/` for future assets.
- **`/facing-pre-foreclosure`** — Pre-foreclosure webinar landing: hero + “Save My Spot” to `#pre-foreclosure-signup`, three education cards, split lead form + image (form integration TODO); `content.ts` SWAP comments; `public/images/facing-pre-foreclosure/` for future art; shared `DivorceLandingFooter` only.
- **`/plans-and-pricing`** — Interior pricing page: Beginner / Pro (highlighted) / VIP tiers, `components/plans-pricing/`, global `Header` + `Footer`; Select CTAs link to `/contact-us?plan=…`.
- **Documentation spine** — `AGENTS.md`, `docs/ARCHITECTURE_SOURCE_OF_TRUTH.md`, `docs/BRAND_CONSTITUTION.md`, `docs/WORKFLOW.md`, `docs/PROJECT_CONTEXT_PROMPT.md`, `docs/ROADMAP.md`, `docs/diagrams/`; `docs/WORK_ORDER_WIX_PARITY.md` moved to **`docs/archive/`** (historical).

## Next

1. **Content / parity QA** — Walk primary routes (home, buy, sell, team, contact, policy pages). Confirm CTAs match `lib/m2m-site.ts` (Calendly, RealScout, Google reviews, partners).
2. **Tests** — Replace the placeholder `npm test` script with real unit or E2E coverage once priorities are set (e.g. Playwright for smoke routes).
3. **Optional** — Re-enable strict Next typecheck in CI (remove or narrow `typescript.ignoreBuildErrors` in `next.config.mjs` when the codebase is ready).

## Source of truth

| Area | Location |
|------|----------|
| Agent + doc map | `AGENTS.md`, `docs/DOCUMENTATION_INDEX.md` |
| Architecture | `docs/ARCHITECTURE_SOURCE_OF_TRUTH.md` |
| Brand / tokens | `docs/BRAND_CONSTITUTION.md`, `app/globals.css` |
| External URLs, phone, mailto helpers | `lib/m2m-site.ts` |
| Blob image URLs for UI | `lib/m2m-media.ts` |
| App routes | `app/` |
| Shared UI (shadcn-style) | `components/ui/` |
| Marketing sections | `components/` |
