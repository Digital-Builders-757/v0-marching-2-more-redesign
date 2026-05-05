# Marching 2 More Final Polish + Live QA Work Order

**Execution batch for the last-mile pass after the main site batches.**
Source docs: [WORK_ORDER.md](../WORK_ORDER.md), [M2M_CATCHUP_ROADMAP.md](./M2M_CATCHUP_ROADMAP.md), [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md), [M2M_GHL_REMAINING_GAPS.md](../M2M_GHL_REMAINING_GAPS.md), [website-launch-hardening-report.md](../website-launch-hardening-report.md), [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](../M2M_GHL_LIVE_CUTOVER_RUNBOOK.md), [M2M_LEAD_CAPTURE_QA.md](../M2M_LEAD_CAPTURE_QA.md), [M2M_FUNNEL_SMOKE_CHECKLIST.md](../M2M_FUNNEL_SMOKE_CHECKLIST.md), and [QA_CHECKLIST.md](../proof/QA_CHECKLIST.md).

---

## Batch goal

Make the site feel fully finished, fast, and trustworthy on every screen, then close the loop with live lead-capture verification.

This batch is the final polish pass, not a redesign. It should tighten the last rough route edges, improve perceived performance, verify the real CRM behavior, and leave the docs in a truthful state.

---

## What this batch should cover

### 1) Final route polish sweep

Focus on the routes that still read as “good” instead of “finished.”

**Primary routes to review:**
- `/`
- `/home-search`
- `/resources`
- `/cma-form`
- `/free-home-valuation`
- `/reviews`
- `/contact-us`
- `/blog`
- `/blog/[slug]`
- `/our-team`
- `/profile-page`
- `/roger-lee`
- `/kristin-s-profile`
- `campaign` landings that still need a polish pass

**What to improve:**
- above-the-fold clarity
- button hierarchy and CTA placement
- image framing / card treatment
- section rhythm and typography consistency
- mobile spacing and tap targets
- anything that still feels template-like or under-finished

---

### 2) Loading and perceived performance finish

Make the site feel quick and calm while it loads.

**Surfaces to check:**
- shared shell / header / footer
- route loading states and skeletons
- image-heavy sections
- quiz / form / CTA transitions

**What to improve:**
- fewer layout shifts
- better placeholder realism
- calmer loading states on mobile
- reduce empty white waits
- keep performance polish consistent across route groups

---

### 3) Live lead-capture verification

Close the loop on the CRM side so the site is not just pretty, but operational.

**Source docs:**
- `docs/M2M_GHL_LIVE_CUTOVER_RUNBOOK.md`
- `docs/M2M_GHL_OPERATOR_VERIFICATION.md`
- `docs/M2M_LEAD_CAPTURE_QA.md`
- `docs/M2M_FUNNEL_SMOKE_CHECKLIST.md`
- `docs/M2M_GHL_REMAINING_GAPS.md`

**What to verify:**
- live GHL env is set correctly where available
- contact submission still works on the major routes
- buyer / seller / general routing still behaves correctly
- success and error states are user-safe
- `correlationId`, tags, notes, and opportunity behavior match the docs
- booking and quiz fallbacks behave correctly when URLs are missing
- no client-side secrets leak

---

### 4) Docs + release readiness

Finish by making the docs match the real state of the repo.

**Must verify:**
- docs index points at the right sources
- queue order still reflects reality
- launch hardening report caveats match the current state
- smoke docs still describe the actual flows
- no stale guidance or duplicate truth is left behind

---

## Execution order

### Step 1, route polish sweep

Tighten the visual and layout details on the remaining weak routes.

Deliverables:
- better above-the-fold compositions
- cleaner CTA hierarchy
- more intentional card/image treatment
- more consistent type scale and section rhythm
- cleaner mobile behavior

Definition of done:
- the site stops feeling like a strong draft and starts feeling finished

---

### Step 2, loading/perceived performance

Make the loading experience feel deliberate instead of abrupt.

Deliverables:
- skeletons and loading states that resemble the real layout
- less shift and jank
- smoother route transitions
- better mobile perceived speed

Definition of done:
- users never feel like the page is broken just because it is loading

---

### Step 3, live CRM verification

Validate the actual lead capture behavior end to end.

Deliverables:
- runbook-driven smoke submits
- confirmation of live / fallback booking behavior
- verification of tags, notes, and route mapping
- confirmation that error states are safe and clear

Definition of done:
- lead capture is proven, not assumed
- the integration docs reflect reality

---

### Step 4, docs and release sync

Finish with documentation and release hygiene.

Deliverables:
- update docs only where behavior changed
- confirm the queue and route docs are still honest
- preserve the current ship log
- leave the repo ready for the next release step

Definition of done:
- docs and code agree
- a future handoff can resume without guesswork

---

## Cursor prompt pack

### Prompt 1, final route polish sweep

Read `docs/M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md`, `docs/WORK_ORDER.md`, and `docs/marching2more/M2M_CATCHUP_ROADMAP.md` first. Then inspect the remaining weak routes, especially `/`, `/home-search`, `/resources`, `/cma-form`, `/free-home-valuation`, `/reviews`, `/contact-us`, `/blog`, `/blog/[slug]`, `/our-team`, `/profile-page`, `/roger-lee`, and `/kristin-s-profile`.

Do a final visual polish sweep:
- reclaim dead space where needed
- make CTAs clearer and more intentional
- improve image framing and card surfaces
- tighten typography rhythm
- make mobile layouts feel finished
- keep the brand warm, premium, and calm

Use minimal-diff changes and existing primitives only.

### Prompt 2, loading and perceived performance

Inspect the shared shell and route-level loading states. Improve skeletons, fallbacks, and transitions so the site feels fast and calm while it loads.

Focus on:
- shared header / footer / shell behavior
- route loading components and skeletons
- image-heavy sections
- form and quiz loading states
- avoiding layout shift and blank-looking screens

Keep the experience lightweight, consistent, and polished.

### Prompt 3, live lead-capture verification

Read `docs/M2M_GHL_LIVE_CUTOVER_RUNBOOK.md`, `docs/M2M_GHL_OPERATOR_VERIFICATION.md`, `docs/M2M_LEAD_CAPTURE_QA.md`, `docs/M2M_FUNNEL_SMOKE_CHECKLIST.md`, and `docs/M2M_GHL_REMAINING_GAPS.md` first.

Then verify the live CRM behavior end to end:
- buyer / seller / general submission paths
- contact, tags, notes, and opportunity behavior
- booking / quiz / fallback behavior when URLs are missing
- safe error states and correlation IDs
- no client-side secret leakage

If anything is unclear or broken in production behavior, fix the repo side and update the docs.

### Prompt 4, docs and release readiness

After the visual and live QA work is done, verify the important paths on mobile and desktop and update docs if behavior changed.

Make sure:
- the docs index still points to the right source documents
- the queue order still reflects reality
- the launch hardening report is still accurate
- the smoke docs still reflect the actual flows
- no stale or duplicate guidance remains

### Prompt 5, final cleanup sweep

Do one last pass for anything that still feels off: rough spacing, inconsistent CTA hierarchy, weak card treatment, weird loading edges, or route-specific clutter.

Only fix what materially improves the final launch quality. Keep it tight and shippable.

---

## Useful source docs

- `docs/WORK_ORDER.md`
- `docs/marching2more/M2M_CATCHUP_ROADMAP.md`
- `docs/marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md`
- `docs/marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md`
- `docs/marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md`
- `docs/marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md`
- `docs/M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md`
- `docs/M2M_GHL_REMAINING_GAPS.md`
- `docs/M2M_GHL_LIVE_CUTOVER_RUNBOOK.md`
- `docs/M2M_GHL_OPERATOR_VERIFICATION.md`
- `docs/M2M_LEAD_CAPTURE_QA.md`
- `docs/M2M_FUNNEL_SMOKE_CHECKLIST.md`
- `docs/proof/QA_CHECKLIST.md`
