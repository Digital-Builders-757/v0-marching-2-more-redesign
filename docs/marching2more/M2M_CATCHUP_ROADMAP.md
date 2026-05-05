# Marching 2 More Catch-up Roadmap

**Last updated:** May 5, 2026

This is the current execution order for the next Marching 2 More improvement batches.
Use it with `docs/WORK_ORDER.md` and the specific work-order docs in `docs/marching2more/`.

---

## Product goal

Marching 2 More should feel like a calm, premium real-estate advisory site that makes the next step obvious.

The site should be stronger at:
- helping visitors understand the offer quickly
- making the homepage and nav easier to scan
- improving trust and credibility
- guiding visitors into the right conversion path
- staying clean and usable on mobile
- keeping the docs and route truth aligned

---

## Product principles

1. **Clarity before decoration**
   - Make it obvious who the site is for, what the team helps with, and what to do next.

2. **Conversion with calm**
   - Strong CTAs and trust cues, but no pushy energy.

3. **Mobile first by default**
   - No route should feel like a desktop-only layout with mobile bolted on.

4. **Reuse existing primitives**
   - Prefer `M2mContainer`, `M2mSection`, `M2mInsetHeroFrame`, `M2mInsetHeroScrim`, shared button styles, and current form primitives.

5. **Docs stay honest**
   - If behavior changes, update the current docs instead of creating a second story.

---

## Execution order

### 1. Site experience uplift

**Why this first:** the homepage, nav, trust, and route flow set the tone for everything else.

**Work order:** `docs/marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md`

**Deliverables:**
- homepage clarity
- navigation and route pathing
- trust and credibility
- conversion flow consistency
- mobile usability on the public site

**Definition of done:**
- first-time visitors understand the site faster
- the main journeys are easier to follow
- the brand feels more cohesive and premium

---

### 2. Conversion + content engine

**Why this is next:** the site should convert attention into action and keep giving visitors useful reasons to stay.

**Work order:** `docs/marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md`

**Deliverables:**
- sharper conversion surfaces
- stronger educational content
- better trust/proof sections
- more intentional route structure and internal linking
- less dead-end browsing

**Definition of done:**
- lead-gen paths are clearer
- content actually helps homeowners
- trust and next steps are obvious

---

### 3. Repo hygiene + mobile polish

**Why this is next:** the repo should stay trustworthy while the site gets better.

**Work order:** `docs/marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md`

**Deliverables:**
- docs cleanup and drift reduction
- stronger shared UI primitives
- better mobile spacing / overflow behavior
- tighter consistency across core public routes

**Definition of done:**
- the repo is easier to maintain
- the public site feels more consistent on mobile
- stale docs and noisy placeholders are reduced

---

### 4. Client page fixes / route-specific cleanup

**Why this stays in the queue:** route-specific fixes are still useful as a target list once the bigger flows are stable.

**Work order:** `docs/marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md`

**Deliverables:**
- route-specific CTA and content cleanup
- campaign page polish where needed
- maintain the connection between routes and actual lead-capture behavior

**Definition of done:**
- the remaining high-value pages are consistent
- important CTAs and supporting copy are aligned
- no obvious route-specific friction remains

---

### 5. GHL remaining gaps and cutover QA

**Why this remains in the queue:** lead capture is only fully useful when the integration is verified end-to-end.

**Reference docs:**
- `docs/M2M_GHL_REMAINING_GAPS.md`
- `docs/M2M_GHL_LIVE_CUTOVER_RUNBOOK.md`
- `docs/M2M_GHL_OPERATOR_VERIFICATION.md`
- `docs/M2M_FUNNEL_SMOKE_CHECKLIST.md`

**Definition of done:**
- lead capture behaves as expected in production
- operators can verify the live setup
- remaining gaps are clearly known and owned

**Repo status (2026-05):** GHL docs aligned with strict full-pipeline behavior in `lib/ghl/submit-lead.ts`; Playwright API smoke in `tests/e2e/submit-lead-api.spec.ts`. Live GHO checks still require operator credentials (`npm run ghl:operator-check`, runbook test submits).

---

## Cursor execution rule

Work top to bottom.
Do not start the next batch until the current one is done, verified, and documented.

After each batch:
- update the relevant docs
- verify the implementation
- leave the repo in a shippable state
