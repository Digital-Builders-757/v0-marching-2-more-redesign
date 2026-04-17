# Work order — Wix parity (Marching2More)

> Goal: match the current Wix site’s **global navigation + key routes** so the rebuild is link-compatible and passes parity QA.
>
> Source: https://www.marching2more.com/ (snapshotted via browser automation on 2026-04-07)

---

## Block 1 — Inventory (Wix header/menu/footer links)

### Header (always visible)

- Logo → `/` (`https://www.marching2more.com`)
- Brand text → `/`
  - “MARCHING 2 MORE”
  - “REAL ESTATE TEAM”
- Agent headshots quick links
  - Donavan McFadden → `/profile-page`
  - Roger Lee → `/roger-lee`
  - Kristin → `/kristin-s-profile`
- Primary CTA
  - “BOOK A HOME CONSULTATION” → `https://calendly.com/marching2more/45min`

### Header menu (hamburger, label “=”)

| Wix label | Wix href |
|---|---|
| Welcome | `/` |
| Home Search | `/home-search` |
| More Resources | `/resources` |
| CMA Request Form | `/cma-form` |
| Free Home Valuation | `/free-home-valuation` |
| Our Team | `/our-team` |
| Reviews | `/reviews` |
| Blog | `/blog` |
| Contact Us | `/contact-us` |

### Footer — Quick Links

| Wix label | Wix href |
|---|---|
| Home Valuation | `/free-home-valuation` |
| Pre-Listing Checklist | `/resources` |
| Work With Us | `/home-search` |
| Our Team | `/our-team` |
| Reviews | `/reviews` |
| Contact Us | `/contact-us` |

### Footer — Policies

| Wix label | Wix href |
|---|---|
| Cookie Policy | `/cookie-policy` |
| Disclaimers | `/copy-of-privacy-policy` |
| Privacy Policy | `/privacy-policy` |
| Terms and Conditions | `/terms-and-conditions` |
| Accessibility Statement | `/accessibility-statement` |

### Footer — Other notable links (external)

- “Review us on Google ▸” → https://g.page/r/Cdr645m9lC69EBM/review
- Phone → `tel:757-206-2859`
- Email (label: `Info@marching2more.com`) → `mailto:Assistant@marching2more.com`

---

## Block 1b — Wix → Rebuild route map

> Rebuild = this Next.js app (`app/` routes).

| Wix route | Rebuild route | Status | Notes |
|---|---|---|---|
| `/` | `/` | ✅ exists | |
| `/home-search` | `/home-search` | ✅ exists | |
| `/resources` | `/resources` | ✅ exists | |
| `/cma-form` | `/cma-form` | ✅ exists | Implemented as redirect → `/free-home-valuation` |
| `/free-home-valuation` | `/free-home-valuation` | ✅ exists | |
| `/our-team` | `/our-team` | ✅ exists | |
| `/reviews` | `/reviews` | ✅ exists | |
| `/blog` | `/blog` | ✅ exists | |
| `/contact-us` | `/contact-us` | ✅ exists | |
| `/profile-page` | `/profile-page` | ✅ exists | Donavan profile stub page |
| `/roger-lee` | `/roger-lee` | ✅ exists | Roger profile stub page |
| `/kristin-s-profile` | `/kristin-s-profile` | ✅ exists | Kristin profile stub page |
| `/cookie-policy` | `/cookie-policy` | ✅ exists | |
| `/copy-of-privacy-policy` | `/copy-of-privacy-policy` | ✅ exists | |
| `/privacy-policy` | `/privacy-policy` | ✅ exists | |
| `/terms-and-conditions` | `/terms-and-conditions` | ✅ exists | |
| `/accessibility-statement` | `/accessibility-statement` | ✅ exists | |

---

## Block 2 — Navigation constants + header wiring

- [x] Add a single source of truth for header menu + footer links (constants)
- [x] Update `<Header />` to use constants and include Wix parity menu items
- [x] Update `<Header />` to include agent headshot links (Wix parity)
- [x] Keep `npm run ci` green

---

## Block 3 — Missing routes / redirects

- [x] Implement `/cma-form` (page or redirect)
- [x] Implement `/profile-page` (Donavan)
- [x] Implement `/roger-lee`
- [x] Implement `/kristin-s-profile`
- [x] Consider safe redirects for legacy internal rebuild routes:
  - [x] `/contact` → `/contact-us`
  - [x] `/team` → `/our-team`
  - [x] `/home-valuation` → `/free-home-valuation`

---

## Block 4 — Wix parity: global site constants + page body alignment

- [x] Consolidate duplicated site constants into a single source of truth (`lib/m2m-site.ts`)
  - Phone / tel href
  - Address (footer single-line + address lines)
  - Email display vs mailto target (Wix parity)
  - Calendly / RealScout / Google review / Creed Realty links
- [x] Keep `lib/m2m-constants.ts` as a backwards-compatible facade (re-exports)
- [x] Update footer + contact surfaces to use unified constants and match Wix mailto/address

### Page parity QA (minimal diffs)

- [x] `/our-team` — team cards link to profile pages + CTA cluster matches Wix (Calendly / Contact Us / Call)
- [x] `/free-home-valuation` — implement valuation hero + process + review CTAs + final CTA (no longer aliases `/sell`)
- [x] `/reviews` — CTA uses Wix-compatible route + Google review link
- [x] `/resources` — replace placeholder with Wix-compatible “More Resources / Pre-Listing Checklist” surface
- [x] `/home-search` — replace redirect with Wix-compatible home search landing (RealScout map + mailto + Creed link)

---

## Notes / guardrails

- Follow `docs/development/BRANCHING.md`: branch from `develop`, PR into `develop`, then ship `develop` → `main`.
- Keep link compatibility with Wix (prefer adding missing routes or redirects over renaming existing routes).
