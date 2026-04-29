# Marching 2 More — Repo Hygiene + Mobile Polish Work Order

## Purpose
Run a forward-looking cleanup pass across the repo so the foundation feels tighter, the docs stay trustworthy, and the public site reads better on mobile.

This is a **repo health + visual polish** batch, not a redesign.

## Why now
The site has shipped a lot of useful surface area, but the repo is starting to carry the usual signs of momentum:
- duplicate or overlapping docs
- placeholder wording that should be retired or narrowed
- stale cross-links and partial “TODO” language
- mobile surfaces that are functional but still feel uneven
- a few pages/components that could use a stronger typographic and spacing system

This pass is meant to make the whole project easier to extend before the next feature wave.

## Core goals
1. Clean up documentation and repo foundation.
2. Tighten mobile UI/UX across the public site.
3. Improve consistency without changing the brand direction.
4. Keep the diff practical, incremental, and shippable.

## Operating rules
- Prefer minimal diffs over rewrites.
- Reuse existing primitives and tokens.
- Do not add new UI libraries.
- Keep routes, API behavior, and data flow intact unless a UI fix truly requires a small supporting change.
- Preserve Marching 2 More branding, tone, and route names.
- Archive or clarify stale material instead of spraying new docs everywhere.

## Work stream A, documentation hygiene
Audit the docs tree and fix the stuff that makes the repo harder to trust:
- stale or overlapping work-order language
- broken or outdated links
- duplicate guidance across multiple docs
- placeholder wording that should be replaced with current reality
- docs that no longer reflect the route structure or current implementation
- inconsistent naming or cross references
- obvious typos, encoding noise, and copy drift

### Targets to review first
- `docs/DOCUMENTATION_INDEX.md`
- `docs/WORK_ORDER.md`
- `docs/MVP_STATUS_ROADMAP.md`
- `docs/M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md`
- `docs/M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md`
- `docs/M2M_GHL_REMAINING_GAPS.md`
- `docs/marching2more/*_WORK_ORDER.md`
- any docs that still point at old placeholder URLs or stale routing assumptions

### Desired outcome
- one clearer path for active docs
- fewer duplicate “source of truth” statements
- cleaner terminology around placeholders vs shipped work
- a repo that is easier to onboard into quickly

## Work stream B, shared UI foundation
Make the reusable UI primitives feel more deliberate and mobile-safe.

### Targets to review first
- `components/m2m-layout.tsx`
- `components/header.tsx`
- `components/footer.tsx`
- `components/m2m-lead-quiz-section.tsx`
- `lib/m2m-form.ts`
- `app/globals.css`
- shared button / card / input / textarea / select primitives

### Desired improvements
- stronger mobile spacing and section rhythm
- clearer button hierarchy
- better touch targets
- safer safe-area behavior
- less horizontal overflow risk
- tighter form shells and input density
- more intentional card surfaces and borders
- more consistent focus states and hover states
- better image framing where photos are used

## Work stream C, route-level mobile polish
Do a quick but thoughtful mobile UX pass across the high-value public routes.

### Prioritize these routes first
- `/`
- `/buy`
- `/sell`
- `/contact`
- `/contact-us`
- `/home-search`
- `/free-home-valuation`
- `/cma-form`
- `/resources`
- `/our-team`
- `/profile-page`
- `/reviews`
- campaign landings such as `/downsizing-your-home`, `/navigating-divorce`, `/facing-foreclosure`, `/improve-your-credit`, `/va-loan-benefits`, `/more-investments`
- legal / policy pages where mobile readability can still improve

### What to tighten
- above-the-fold spacing
- headline scale and line breaks
- card padding and alignment
- CTA placement and stacking on narrow screens
- form layout on phones
- image crop / framing behavior
- section separators and visual rhythm
- footer density
- any page that still feels flat, crowded, or a little too template-like

## Guardrails
Do **not**:
- add new routes
- change backend behavior unless needed for a visual fix
- change lead capture payload contracts unless absolutely required
- introduce new dependencies
- over-glow, over-round, or over-animate the site
- drift away from the current warm premium real-estate aesthetic

## Suggested execution order
1. Docs audit and index cleanup.
2. Shared primitives and global spacing polish.
3. Core public routes on mobile.
4. Campaign routes and forms.
5. Final consistency sweep, then build/test.

## Definition of done
- docs are cleaner, more current, and easier to navigate
- stale placeholder wording is reduced or clarified
- the main public site feels better on mobile across routes
- buttons, forms, and cards read as one system
- no obvious overflow or layout breakage on phone widths
- build checks pass
- the repo is easier to extend in the next batch
