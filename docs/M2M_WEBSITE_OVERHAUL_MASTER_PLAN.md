# Marching 2 More Website Overhaul Master Plan

## Purpose
This document is the source of truth for the current Marching 2 More website overhaul.

The goal is to modernize the website across nearly every public-facing page while preserving the client’s core content, voice, and business intent.

This is not a superficial styling pass.
This is a coordinated redesign + rebuild effort to make the site feel more current, more trustworthy, more premium, more responsive, and more usable across devices.

---

## Primary Goal
Rebuild and modernize the public website so it feels like a polished, modern real estate brand site instead of a stitched-together legacy/Wix-style site.

We are preserving the content strategy and business intent, but upgrading:
- layout quality
- spacing rhythm
- hierarchy
- responsiveness
- consistency
- CTA clarity
- forms
- visual polish
- page structure
- component reuse

- documentation quality for future AI-assisted iteration

---

## Core Rules

### 1. Preserve content intent
Do not casually rewrite or remove core business messaging.
Keep the meaning, offers, and page purpose intact.

### 2. Improve presentation
The current effort is about turning existing content into a better-designed, better-structured, more modern website.

### 3. Mobile responsiveness is required
Every page must be designed responsively from the start.

Do not treat mobile as a cleanup pass.

### 4. Reuse patterns
Do not reinvent every page from scratch.
Create repeatable layout patterns and page-building primitives where possible.

### 5. No generic design drift
The site should not look like a generic template.
It should feel:
- warm
- premium
- trustworthy
- elegant
- calm
- conversion-aware

### 6. No unnecessary new dependencies
Prefer the current stack and reusable local components.
Do not add new UI libraries unless there is a very strong reason.

---

## Brand / Design Direction

### Visual tone
Marching 2 More should feel like:
- a premium real estate advisory brand
- grounded and trustworthy
- warm and human
- supportive, not pushy

- modern, but not trendy for the sake of trendiness

### Core visual language
- deep green foundations
- warm ivory / cream typography
- subtle gold / tan accent moments
- elegant serif display headlines
- clean, readable body typography
- generous spacing
- strong section rhythm
- simple CTA hierarchy
- layered but controlled image usage
- clear contrast and accessible interactions

### Avoid

- Wix-like clutter
- cramped sections
- random overlaps
- inconsistent card styles
- small unreadable text
- too many layout ideas on one page
- decorative layers fighting each other
- desktop-only thinking
- generic stock-template UI

---

## Site-Level Overhaul Targets

The overhaul should touch the public site broadly, not just isolated pages.

### Shared surfaces that must be reviewed
- global layout
- header / navigation
- footer
- section spacing rhythm
- typography scale
- button styles
- form styles
- card treatments
- image handling
- page width/container logic
- mobile nav behavior
- CTA consistency
- internal page transitions / visual flow

### Shared systems to improve
- visual hierarchy
- consistency of headings and body text
- responsive behavior
- repeated section patterns
- form styling
- content density
- page-level CTA placement
- on-brand component reuse

---

## Pages / Route Scope

At minimum, review and improve all current public-facing pages and any newly rebuilt routes.

Known page work includes:
- homepage
- `/improve-your-credit`
- `/downsizing-your-home`
- `/va-loan-benefits`
- `/facing-pre-foreclosure`
- `/plans-and-pricing`

Also scan the codebase for other public routes and include them in the audit and overhaul plan where appropriate.

Examples of likely related public pages/surfaces:
- home valuation
- pre-listing checklist

- our team
- reviews
- contact
- any landing pages
- any consultation / lead-gen pages

---

## Modernization Standards

Every page should be reviewed against these standards.

### Layout
- strong above-the-fold structure
- no giant dead zones

- no awkward stacking of unrelated elements
- clean container widths
- consistent section spacing
- clearer relationships between text and media

### Typography
- consistent type scale
- elegant display headings
- readable body copy
- better line lengths
- better contrast
- stronger emphasis hierarchy

### Components
- consistent button styles

- consistent form styles
- consistent card logic
- consistent icon sizing and usage
- repeated patterns should look intentionally related

### Imagery
- image overlays should improve readability, not muddy it
- no conflicting design layers
- no random decorative fragments
- placeholder image handling should still look polished
- imagery should feel deliberate and brand-aligned

### Conversion UX
- every page should have a clear purpose
- CTAs should be obvious and placed intentionally
- forms should feel trustworthy and easy to complete
- mobile form usage should be comfortable
- users should understand what to do next

### Mobile
- no horizontal overflow
- no tiny tap targets
- no compressed desktop layouts pretending to be mobile
- sections must stack gracefully
- embedded media must remain responsive
- cards/forms must remain readable and usable

---

## Documentation / Architecture Goals


This overhaul also includes repairing the repo’s documentation system so future agents can work with clarity.

We need a docs system that makes the project understandable to future humans and AI agents.

### Documentation goals
- define the project clearly
- define the design direction clearly
- define source-of-truth docs clearly
- define workflow expectations clearly
- remove stale/duplicate/confusing docs
- create missing docs that future work depends on

### Minimum documentation outcomes
The repo should end up with a clean documentation spine. Concretely, maintain and link:

- **[AGENTS.md](../AGENTS.md)** — entry path and doc read order for humans and agents.
- **[ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md)** — stack, folder roles, page patterns, and **shared UI modules** (`components/m2m-layout.tsx`, `components/m2m-cta.tsx`, `lib/m2m-form.ts`).
- **[BRAND_CONSTITUTION.md](./BRAND_CONSTITUTION.md)** — tokens in `app/globals.css`; typography utilities (e.g. `m2m-eyebrow`, `font-nav`).
- **[WORKFLOW.md](./WORKFLOW.md)** — git and Ship/pr flow.
- **[WORK_ORDER.md](./WORK_ORDER.md)** — recent ships, **public route overhaul table**, and next steps.
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** — single map of all active docs.
- **[docs/diagrams/site-routes.md](./diagrams/site-routes.md)** — grouped route list (authoritative routes remain `app/**/page.tsx`).

Remove or archive stale duplicates rather than letting multiple “sources of truth” drift. When the design system changes, update BRAND + ARCHITECTURE first, then sweep pages.

---

## Implementation status

Track concrete progress in **[WORK_ORDER.md](./WORK_ORDER.md)** (route table and “Done recently”). This master plan stays the **vision and rules** document; the work order stays the **execution log**.
