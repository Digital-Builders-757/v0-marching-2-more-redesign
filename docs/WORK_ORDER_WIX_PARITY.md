# WORK ORDER — Marching2More Wix Parity (Menu + Pages) — 2026-04-07

Owner: OpenClaw agent
Repo: `Digital-Builders-757/v0-marching-2-more-redesign`
Goal: Rebuild https://www.marching2more.com (Wix) with **parity-first**: routes, menu IA, copy/CTAs, and core sections. **No redesign** until parity is complete and verified.

---

## 0) Definition of Done (DoD)

**Parity is complete when:**

1) **Menu parity**
   - The rebuild site’s header/nav reproduces the Wix header behavior (desktop + mobile) and routes.
   - All menu items resolve (page exists OR redirect exists) with no 404s.

2) **Route parity**
   - Every Wix route reachable from the menu/footer exists in `app/`.
   - Core page copy/CTAs match Wix (or match the parity spec).

3) **Footer + policies parity**
   - Footer contains the same primary links (valuation, checklist/resources, work with us, team, reviews, contact) + policies.

4) **CI green**
   - GitHub Actions `ci` passes (lint + typecheck + build + Playwright smoke).
   - Vercel preview deploy succeeds.

5) **QA evidence**
   - Updated parity checklist (this doc) marking all items DONE.
   - Screenshots (optional) or short notes for anything that deviates intentionally.

---

## 1) Source of Truth

- Wix site: https://www.marching2more.com/
- Parity spec: `docs/marching2more/M2M_SITE_REBUILD_SPEC.md`
- External URL constants: `lib/m2m-site.ts`
- Header/footer constants: `lib/m2m-constants.ts`

**Rule:** if a constant exists in `lib/m2m-site.ts`, pages/components must use it (no hardcoded duplicates).

---

## 2) Current Gap Summary (why it doesn’t match Wix yet)

### A) Header/Menu system not fully parity
Wix header includes:
- Logo lockup
- Primary navigation/menu (hamburger / overlay)
- Agent headshots linking to profile routes
- Calendly CTA

In the rebuild:
- Multiple iterations existed; some drifted and caused CI failures.
- Menu overlay behavior/IA not locked as a single source of truth.

### B) Route completeness
Some Wix destinations exist in rebuild; others are missing or not wired from the global nav.

### C) Copy/CTA drift
Certain hero/sections were partially rewritten and need to be re-aligned to parity spec.

---

## 3) Work Blocks (execute in this order)

### Block 1 — Inventory (Wix → Rebuild route mapping)

1. Capture Wix menu + footer links (manual audit using Browser Relay):
   - Header links
   - Hamburger/menu links (if present)
   - Footer primary links
   - Policy links
   - Profile routes (Donavan/Roger/Kristin)

2. Generate a **Route Map** table:

| Wix label | Wix URL | Rebuild route exists? | Rebuild URL | Notes |
|---|---|---:|---|---|

3. Confirm all Wix URLs are represented:
- `/` (Home)
- `/home-search`
- `/free-home-valuation`
- `/our-team`
- `/reviews`
- `/contact-us`
- `/resources` (Pre-Listing Checklist)
- Policy routes:
  - `/cookie-policy`
  - `/privacy-policy`
  - `/terms-and-conditions`
  - `/accessibility-statement`
  - `/copy-of-privacy-policy` (Disclaimers)
- Profile routes:
  - `/profile-page`
  - `/roger-lee`
  - `/kristin-s-profile`

**Deliverable:** route map table committed into this doc.

---

### Block 2 — Nav architecture (single source of truth)

1. Create `lib/m2m-nav.ts` (or equivalent) containing:
- `primaryNavLinks`
- `mobileMenuSections` (if overlay style)
- `agentLinks`
- `socialLinks`

2. Update `components/header.tsx` to render from `lib/m2m-nav.ts`.
3. Ensure header matches Wix structurally:
- sticky
- logo left
- agent avatars
- Calendly CTA
- menu button for mobile

**DoD:** no hardcoded nav labels/URLs in components.

---

### Block 3 — Missing routes & redirects

For each Wix URL:
- If page exists but wrong path: add redirect route.
- If page missing: add new `app/<route>/page.tsx` using existing component patterns.

**Rule:** Prefer minimal pages that compose existing components rather than creating new UI systems.

---

### Block 4 — Content parity per page

For each parity page (in priority order):

P0 pages:
1. `/` Home
2. `/contact-us`
3. `/our-team`
4. `/free-home-valuation`
5. `/resources`
6. `/reviews`

P1 pages:
- `/home-search`
- `/buy`
- `/sell`
- `/blog`
- `/partners`
- `/team` (if separate)

For each page, validate:
- headline copy
- CTA destinations
- any embedded external links (RealScout, Calendly, phone/mail)

**Deliverable:** Update `docs/marching2more/M2M_SITE_REBUILD_SPEC.md` only if Wix changed.

---

### Block 5 — Regression proof

1. Update/extend Playwright smoke tests to cover:
- home hero CTAs present and correct hrefs
- contact page loads
- valuation page loads
- team page loads
- policies load

2. Confirm `npm run ci` passes locally.
3. Confirm GitHub Actions & Vercel are green.

---

## 4) Execution Checklist (tick as we go)

### Inventory
- [ ] Capture Wix header/footer/menu links
- [ ] Route map table added to this doc

### Nav system
- [ ] `lib/m2m-nav.ts` created
- [ ] `Header` reads from nav constants

### Routes
- [ ] All footer links exist
- [ ] All policy routes exist
- [ ] All profile routes exist
- [ ] No 404s from menu

### QA
- [ ] `npm run ci` green
- [ ] Vercel preview deploy succeeds
- [ ] PR created to `develop`

---

## 5) Update cadence (so you don’t have to check in)

- I will post a short update when:
  1) Inventory complete
  2) Menu/nav parity shipped
  3) All routes exist
  4) CI + Vercel green & PR ready

(If you want this automated, we can add a cron status ping every 30–60 minutes until done.)
