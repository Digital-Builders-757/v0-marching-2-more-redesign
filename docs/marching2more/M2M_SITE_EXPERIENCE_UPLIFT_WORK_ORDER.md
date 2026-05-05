# Marching 2 More — Site Experience Uplift Work Order

## Purpose
Make the overall website easier to understand, easier to use, and more compelling to move through.

This pass is about the **full experience**, not just isolated visuals:
- first impression
- navigation clarity
- content hierarchy
- trust building
- conversion flow
- mobile usability
- consistency across routes

The goal is to make the site feel more like a polished, thoughtful service brand and less like a set of individually improved pages.

## What success looks like
A new visitor should be able to answer these questions quickly:
- Who is this for?
- What does Marching 2 More help with?
- What should I do next?
- Why should I trust them?
- Can I do this easily on my phone?

If any page slows that answer down, it should be improved.

## Core goals
1. Clarify the user journey across the site.
2. Improve overall conversion clarity without making the site feel pushy.
3. Tighten the experience on mobile and smaller tablets.
4. Make the whole site feel more cohesive, premium, and intentional.
5. Reduce friction, dead ends, and visual noise.

## Rules
- Keep the Marching 2 More brand direction intact.
- Reuse existing components and tokens.
- Avoid new libraries.
- Prefer minimal, shippable improvements.
- Do not change backend behavior unless a UI/UX fix truly requires it.
- Keep route names and core offers intact.

## Priority areas

### 1. Homepage clarity
The homepage should do a better job of:
- establishing who the team helps
- showing the primary offers fast
- directing users into the right next route
- balancing inspiration with action

### 2. Navigation and route pathing
Improve the sense of flow across the site:
- primary navigation should feel simpler and more obvious
- CTA language should stay consistent
- internal link paths should support the main journeys
- avoid duplicate or competing next steps where possible

### 3. Trust and credibility
Strengthen the confidence layer:
- clearer social proof
- stronger service framing
- better use of team / review / support content
- more polished contact and consultation surfaces

### 4. Conversion surfaces
Make lead-gen pages and form blocks feel more designed:
- clearer hierarchy
- better section sequencing
- stronger mobile form ergonomics
- better trust cues near forms
- cleaner success / error / confirmation states

### 5. Mobile experience
This is non-negotiable:
- stronger spacing rhythm
- better tap targets
- no awkward overflow
- better hero stacking
- less cramped cards and forms
- clearer CTA placement on phones
- less text density where it becomes tiring

### 6. Consistency across routes
Make the site feel like one system:
- common section rhythm
- common button language
- common card treatment
- common form behavior
- common image framing
- common page-width logic

## Good candidate surfaces
- `/`
- `/buy`
- `/sell`
- `/contact`
- `/contact-us`
- `/our-team`
- `/reviews`
- `/home-search`
- `/free-home-valuation`
- `/cma-form`
- `/resources`
- campaign landings
- legal / policy pages if they still feel cramped or too dry

## What to look for
- pages that feel too verbose before they feel helpful
- pages with too many competing CTAs
- sections that are visually nice but don’t help the user decide
- mobile layouts that look okay but feel hard to scan
- repeated patterns that could be simplified
- places where trust could be made more explicit
- places where the next step is obvious to the team but not to a first-time visitor

## Suggested execution order
1. Audit the homepage and main nav flow.
2. Tighten the shared layout language.
3. Improve the main conversion routes.
4. Clean up trust, proof, and support surfaces.
5. Finish with mobile-specific refactoring and a visual consistency sweep.

## Definition of done
- the site feels easier to navigate
- the homepage reads faster
- CTA paths are clearer
- mobile layouts feel more deliberate
- the public site has a more unified voice and visual rhythm
- the experience feels better overall, not just prettier in spots

---

## Shipped (May 2026 — batch 1)

**Pathing & nav**

- Header menu (`lib/m2m-nav.ts`): **Buy** and **Sell** hub routes (`/buy`, `/sell`) placed after Home; section dividers use `dividerBefore` instead of index-based rules (`components/header.tsx`).
- Footer quick links: **Buy** and **Sell** prepended for the same primary journeys.
- Menu search (`lib/m2m-menu-search.ts`): routes short queries (`buy`, `sell`, …) to hub pages; placeholder/hint copy updated; suggestions catalog includes `/buy` and `/sell`.

**Homepage**

- Hero (`components/hero.tsx`): clearer **who we serve** (lead line + geography); kicker stacks on small viewports; **Explore services** links to `/buy`, `/sell`, `/reviews` between primary CTAs and phone/consult row.
- Topic strip (`components/home-topic-nav.tsx`): hub links first in `M2M_HOME_TOPIC_LINKS` (`lib/m2m-content-clusters.ts`); larger tap targets (`min-h-11`, spacing).

**Trust**

- Testimonials intro (`components/testimonials.tsx`): explicit note that stories come from real clients.

**Mobile**

- Header (`components/header.tsx`): **Book consult** CTA visible on small screens (full “BOOK A HOME CONSULTATION” on `md+`); menu link rows `min-h-12`.
