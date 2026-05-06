# Marching 2 More Team Imagery + Profile Polish Work Order

**Execution batch for the team picture issue and the related profile-page cleanup.**

**Status:** Shipped (2026-05). Roll-up: [WORK_ORDER.md](../WORK_ORDER.md) (**Done recently**); truthful asset routing: [M2M_ASSET_MAP.md](../M2M_ASSET_MAP.md) (**§ Vercel Blob — team & agent portraits**).

Source docs: [WORK_ORDER.md](../WORK_ORDER.md), [M2M_CATCHUP_ROADMAP.md](./M2M_CATCHUP_ROADMAP.md), [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md), [M2M_ASSET_MAP.md](../M2M_ASSET_MAP.md), [website-launch-hardening-report.md](../website-launch-hardening-report.md), and [QA_CHECKLIST.md](../proof/QA_CHECKLIST.md).

---

## Batch goal

Fix the team-photo problem cleanly, then use the same pass to make the team and profile surfaces feel consistent, premium, and mobile-safe.

This is a visual and content cleanup batch, not a brand overhaul. The goal is to make the team pages look intentional again and keep the asset/documentation map honest.

---

## What this batch should cover

### 1) Team hero and team-member imagery fix

Focus on the team surfaces where the photo issue is most visible.

**Primary surfaces:**
- `components/team/team-hero.tsx`
- `components/team/team-members.tsx`
- `app/our-team/page.tsx`
- any shared team image assets used by those components

**What to fix:**
- broken or awkward image crops
- awkward object-position values
- hero/background photo treatment
- card image framing and aspect ratios
- mobile-safe image presentation
- any team photo that looks clipped, squashed, or misframed

---

### 2) Individual profile-page polish

Make the profile pages match the team page quality.

**Primary surfaces:**
- `app/profile-page/page.tsx`
- `app/roger-lee/page.tsx`
- `app/kristin-s-profile/page.tsx`
- `components/team/agent-profile.tsx`

**What to improve:**
- consistent portrait framing
- cleaner CTA hierarchy
- more polished bio layout
- mobile spacing and readability
- consistent treatment across all agent profiles

---

### 3) Asset map and doc truth cleanup

Make sure the docs still describe the actual image usage.

**Source docs:**
- `docs/M2M_ASSET_MAP.md`
- `docs/DOCUMENTATION_INDEX.md`
- `docs/WORK_ORDER.md`

**What to verify:**
- team/profile image references are still accurate
- route-to-asset mapping matches the code
- retired or swapped imagery is not still described as current
- docs still point to the right source of truth

---

### 4) Supporting polish while we’re there

Use the same batch to clean up nearby team/profile rough edges.

**Possible supporting surfaces:**
- team CTA section
- heading hierarchy on team/profile routes
- mobile spacing in the team/profile shell
- focus states on profile links/buttons
- any obvious layout wobble around the image areas

---

## Execution order

### Step 1, fix the team imagery

Start with the team hero and member cards.

Deliverables:
- photos are framed correctly
- hero image reads cleanly
- team-member cards feel intentional
- no clipped or awkward crops remain

Definition of done:
- the team page looks composed again
- the imagery issue is visibly resolved

---

### Step 2, align the profile pages

Then make the individual profile pages consistent with the team page.

Deliverables:
- matching portrait treatment across agents
- cleaner CTA hierarchy
- stronger spacing and readability on mobile
- profile pages feel like a coherent family

Definition of done:
- the team and profile routes feel like one system
- no profile page feels like the odd one out

---

### Step 3, docs and asset-map sync

Update the docs to reflect the actual image usage.

Deliverables:
- asset map updated if image routing changed
- docs index still points to the right sources
- work-order queue still matches reality

Definition of done:
- the repo docs do not lie about which images are current
- future swaps are easier to manage

---

### Step 4, final QA sweep

Do a quick final check on mobile and desktop.

Deliverables:
- team/profile pages render cleanly
- photos look correct at common breakpoints
- no new overflow or layout shift issues

Definition of done:
- the batch is safe to ship
- the team/profile surfaces feel polished again

---

## Cursor prompt pack

### Prompt 1, team imagery fix

Read `docs/M2M_ASSET_MAP.md`, `docs/M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md`, and `docs/WORK_ORDER.md` first. Then inspect `components/team/team-hero.tsx`, `components/team/team-members.tsx`, and `app/our-team/page.tsx`.

Fix the team-picture issue directly:
- correct awkward crops or object-position values
- make the hero image look intentional
- make the team-member cards frame portraits cleanly
- keep the design premium and calm
- make sure the result works on mobile and desktop

Use the existing image assets and shared primitives. Do not add new libraries.

### Prompt 2, profile-page polish

Then inspect `components/team/agent-profile.tsx`, `app/profile-page/page.tsx`, `app/roger-lee/page.tsx`, and `app/kristin-s-profile/page.tsx`.

Make the individual profile pages match the team page quality:
- consistent portrait framing
- better CTA hierarchy
- cleaner spacing and bio layout
- mobile-safe image presentation
- no awkward one-off treatment between agents

Keep the changes minimal and aligned with the existing brand system.

### Prompt 3, asset-map and docs sync

Read `docs/M2M_ASSET_MAP.md` and `docs/DOCUMENTATION_INDEX.md` after the visual fixes.

Update the docs only if the image usage or route mapping changed:
- keep the asset map truthful
- keep the docs index pointed at the right source docs
- remove any stale or retired image references

### Prompt 4, nearby polish sweep

Do a final pass for any nearby rough edges in the team/profile area:
- heading hierarchy
- CTA spacing
- focus states
- mobile overflow
- any awkward layout wobble around the imagery

Only fix what materially improves the page quality.

---

## Useful source docs

- `docs/WORK_ORDER.md`
- `docs/marching2more/M2M_CATCHUP_ROADMAP.md`
- `docs/marching2more/M2M_FINAL_POLISH_AND_LIVE_QA_WORK_ORDER.md`
- `docs/M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md`
- `docs/M2M_ASSET_MAP.md`
- `docs/proof/QA_CHECKLIST.md`
