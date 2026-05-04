# Marching 2 More — Visual Polish System Pass 2026

## Purpose
This document defines the next major visual pass for Marching 2 More.

The site has improved materially, but many surfaces still feel older, flatter, more template-like, or less intentional than they should. The goal of this pass is to make the site feel more premium, more current, and more visually cohesive by upgrading the repeated design details across **all public pages**.

This is not a rebrand.
This is not a jump into neon / tech / startup aesthetics.
This is not a random one-page redesign.

This is a **broad, system-driven visual polish pass** focused on:
- buttons
- image treatment
- cards and section framing
- borders, rings, and shadows
- hover / focus behavior
- CTA presence
- typography rhythm
- route-to-route consistency

**Execution status and shipped batches:** use [WORK_ORDER.md](./WORK_ORDER.md) as the live log—do not duplicate running priorities here.

Use this alongside:
- [M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](./M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md) — overall website overhaul rules and vision
- [WORK_ORDER.md](./WORK_ORDER.md) — live execution log and route status
- [BRAND_CONSTITUTION.md](./BRAND_CONSTITUTION.md) — token and brand guidance
- [ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md) — shared modules and page patterns

---

## Why this pass exists
Marching 2 More is in a better place than the old site, but several details still make the experience feel dated:
- buttons read a little plain or old-school
- image treatment can feel too raw or unframed
- some sections still feel flat instead of designed
- some cards/forms/CTA areas feel serviceable rather than premium
- route-to-route polish still varies too much
- some pages feel strong, while others still feel like “good first pass” rather than final-quality marketing surfaces

This pass exists to fix that without losing the current brand direction.

---

## Desired outcome
By the end of this pass, the site should feel:
- warm
- premium
- trustworthy
- gently elevated
- modern without being trendy
- visually richer without being loud
- more clearly designed by intent, not by accident

The visual language should feel like a refined real estate advisory brand, not:
- a generic Wix rebuild
- a stock luxury template
- a neon/tech microsite
- a hard-glass SaaS dashboard

---

## Design direction for this pass

### Keep
- deep green foundations
- cream / ivory support tones
- gold / tan accent restraint
- elegant serif display moments
- calm, premium, human presentation
- current layout modernization work already in progress

### Add more of
- stronger image framing
- more intentional borders and rings
- slightly richer button styling and hierarchy
- better hover/focus states
- more polished card surfaces
- more deliberate section entrances/exits
- tasteful depth and elevation
- subtle editorial detail

### Do NOT become
- Signal 91 neon
- ViZb underwater / glass world
- hyper-animated startup UI
- flashy chrome for its own sake
- heavy glow / blur everywhere
- over-rounded, toy-like component styling

---

## Borrowing rules from other projects
We can borrow **patterns**, but not transplant another product’s aesthetic.

### Good things to borrow
- stronger button hierarchy
- more intentional image borders / frames
- better card edge treatment
- tighter hover and focus behavior
- refined inset surfaces
- more deliberate CTA bands
- consistent micro-interaction polish
- section separators that create rhythm without clutter

### Bad things to borrow
- neon accents
- overdone glassmorphism
- strong sci-fi glow
- overly techy gradients
- loud animated borders
- product-brand-specific motifs from other sites

### Translation rule
If a detail comes from another project, it must be translated into the Marching 2 More brand system:
- darker, calmer palette
- softer contrast
- more trust, less spectacle
- more hospitality, less hype

---

## System-wide polish targets

### 1. Buttons
Buttons are one of the most obvious “old site” signals when they are too plain.

#### Goal
Make buttons feel more premium, modern, tactile, and brand-specific.

#### Desired improvements
- stronger visual hierarchy between primary / secondary / text actions
- cleaner radius decisions
- better padding and height consistency
- more confident border/fill treatment
- improved hover states
- improved focus-ring behavior
- stronger disabled-state polish
- optional subtle lift, inset, or shadow treatment where appropriate

#### Avoid
- generic blue-button energy
- cheap gradient buttons
- too many button variants
- glow-heavy effects
- animated gimmicks

#### Preferred direction
- deep green / gold / cream variants that feel deliberate
- subtle depth, not flashy depth
- buttons that feel slightly more “crafted” than default Tailwind/shadcn

---

### 2. Image framing and media treatment
Images should feel intentionally presented, not simply dropped into layouts.

#### Goal
Use tasteful framing to make photography, team portraits, and page media feel more elevated and brand-aware.

#### Desired improvements
- thin brand-tinted borders or rings around key images
- controlled radius system for media
- subtle shadow / inset framing where helpful
- consistent image container treatment across cards, heroes, and profile surfaces
- improved placeholder handling when ideal assets are missing
- slightly more editorial composition around image + copy relationships

#### Good candidates
- hero stills
- team/profile images
- partner imagery
- blog and content imagery
- card thumbnails
- trust/review surfaces

#### Avoid
- loud thick borders everywhere
- inconsistent corner radius page to page
- muddy overlays
- ornamental frames that overpower the image

---

### 3. Card and panel surfaces
Some cards still feel too plain or too raw.

#### Goal
Create a more coherent premium surface system.

#### Desired improvements
- more intentional card edge treatment
- consistent background logic
- consistent padding and spacing
- controlled contrast between panels and page backgrounds
- subtle depth separation
- stronger relationship between surface style and page type

#### Surface types to standardize
- light content cards
- dark CTA cards
- trust/review cards
- image-backed cards
- simple info panels
- form cards

---

### 4. Forms and CTA blocks
Forms should feel cleaner, more trustworthy, and more premium.

#### Goal
Make forms and CTA blocks feel like designed conversion surfaces, not just functional form stacks.

#### Desired improvements
- stronger form-card shells
- clearer input hierarchy
- cleaner labels and helper text
- better spacing between fields and actions
- more intentional button placement
- improved checkbox / option styling where relevant
- trust/support cues around contact and lead forms

#### Avoid
- dull gray form fields with no brand feel
- cramped field groupings
- weak submit buttons
- abrupt CTA sections that feel tacked on

---

### 5. Hover, focus, motion, and interaction polish
The site should feel alive, but not busy.

#### Goal
Introduce subtle modern interaction polish.

#### Desired improvements
- unified card hover behavior
- unified button hover behavior
- clean focus ring system
- gentle lift or shadow transitions where appropriate
- duration consistency (roughly 150–250ms)
- reduced-motion-safe behavior

#### Avoid
- hover chaos
- heavy scaling
- animation for animation’s sake
- inconsistent easing and transition timings

---

### 6. Section rhythm and separators
The site should feel like a designed journey, not a pile of blocks.

#### Goal
Improve transitions between sections and make routes feel more complete.

#### Desired improvements
- better use of section spacing rhythm
- more controlled alternation between open and framed sections
- tasteful dividers, separators, or band treatments where needed
- better visual handoff from hero → body → CTA → footer

#### Avoid
- random decorative clutter
- too many separator ideas
- thick “boxed-in” feeling everywhere

---

## Shared-system implementation targets
This pass should prefer shared system upgrades over one-off page tweaks.

### High-priority shared primitives to improve or add
- button variants in `components/ui/button.tsx`
- shared image frame or media shell helper
- shared card shell variants where repeated
- shared CTA/panel surface refinements
- shared hover/focus utility classes
- shared section divider / band pattern if justified
- shared media wrapper for team/profile/trust imagery if it reduces drift

### Rule
If the same visual tweak appears on 3+ routes, it should probably become a primitive or utility.

---

## Route clusters for this pass

### Cluster A — global chrome and repeated UI
Apply the new polish system to:
- header
- footer
- shared CTA bands
- global buttons
- repeated cards
- repeated image blocks
- form shells
- shared section wrappers

This cluster should happen first, because it sets the baseline for every route.

---

### Cluster B — homepage + core funnels
Routes:
- `/`
- `/buy`
- `/sell`
- `/home-search`
- `/free-home-valuation`
- `/cma-form`
- `/resources`
- `/contact-us`

#### Focus
- stronger button personality
- richer hero/media presentation
- better framed cards and CTA blocks
- more confident trust and conversion surfaces
- reduce any last traces of “template rebuild” energy

---

### Cluster C — trust / credibility / people surfaces
Routes:
- `/our-team`
- `/profile-page`
- `/roger-lee`
- `/kristin-s-profile`
- `/reviews`
- `/partners`
- `/blog`
- `/blog/[slug]`

#### Focus
- premium image framing
- more editorial layout rhythm
- better trust-signal presentation
- stronger typography and section polish
- profile cards and portraits that feel more elevated

---

### Cluster D — campaign landings
Routes:
- `/fha-loan`
- `/improve-your-credit`
- `/downsizing-your-home`
- `/va-loan-benefits`
- `/facing-foreclosure`
- `/navigating-divorce`
- `/more-investments`
- `/get-license-in-va`

#### Focus
- unify CTA quality
- unify form shells
- unify image treatment
- unify button styles and interactive details
- reduce any page-to-page drift in card / border / spacing decisions

---

### Cluster E — legal / utility surfaces
Routes:
- `/cookie-policy`
- `/privacy-policy`
- `/terms-and-conditions`
- `/accessibility-statement`
- `/copy-of-privacy-policy` (redirect → `/privacy-policy`)
- `not-found`

#### Focus
- not flashy, just polished
- clearer typography
- better container rhythm
- cleaner utility CTAs/links
- ensure these pages still feel part of the same modernized system

---

## Huge work-order checklist

### P0 — system decisions first
- [ ] audit all current button variants and declare the 2–4 canonical button looks
- [ ] audit current image shells / radii / border styles and declare the canonical media treatments
- [ ] define the repeated hover/focus behavior set
- [ ] define the preferred card/panel shells for light, dark, and media-backed surfaces
- [ ] fix any obvious old-school or inconsistent button styling first
- [ ] remove any legacy border/shadow/radius drift that fights the new system

### P1 — broad shared rollout
- [ ] apply upgraded button styling across major public routes
- [ ] apply image framing and media treatment across key hero and content images
- [ ] tighten repeated CTA bands and form cards
- [ ] normalize surface polish on trust, review, and team sections
- [ ] update page clusters in batches, not randomly

### P2 — route-by-route refinement
- [ ] homepage detail sweep
- [ ] buy/sell funnel detail sweep
- [ ] tools/resources/contact detail sweep
- [ ] team/profile/reviews/partners/blog detail sweep
- [ ] campaign page consistency sweep
- [ ] legal/utility polish sweep

### P3 — final consistency audit
- [ ] compare strongest routes vs weakest routes
- [ ] remove one-off styling that drifted from the system
- [ ] ensure no route still feels obviously “left behind”
- [ ] verify mobile polish, hover polish, and CTA consistency

---

## Route-by-route visual questions Cursor should answer
For every route touched, answer:
1. do the buttons feel current and premium?
2. do the images feel intentionally framed?
3. do the cards/panels feel designed or just present?
4. does the page have enough visual rhythm?
5. does the route look like part of the same site as the strongest pages?
6. does anything still feel old, raw, generic, or placeholder-ish?

If the answer is weak, keep going.

---

## Hard constraints
- do not rebrand the site
- do not import another project’s full aesthetic
- do not turn M2M into a neon/tech experience
- do not add unnecessary dependencies
- do not explode button variants endlessly
- do not create a hundred one-off decorative classes
- do not trade clarity for “coolness”
- do not destabilize existing page behavior
- do not let this become a CRM/GHL scope pass

---

## Documentation expectations
This document is the dedicated brief for this pass.

### Cursor should also update
- [WORK_ORDER.md](./WORK_ORDER.md)

### WORK_ORDER updates should include
- what shared-system upgrades were made
- what route clusters were covered
- which surfaces are now strong
- which routes still lag visually
- what next batch should be tackled next

Do not create a bunch of competing docs unless truly necessary.

---

## Definition of done
This pass is successful when:
- button styling no longer feels old-school on the major public routes
- image treatment feels more premium and intentional across the site
- cards/forms/CTA surfaces feel more designed and less default
- the strongest routes clearly pull the weaker routes upward
- route-to-route visual consistency improves noticeably
- the site feels more current, more polished, and more brand-specific without becoming flashy or off-brand

---

## Validation
At the end of each meaningful batch:
- run `npm run lint`
- run `npm run typecheck`
- run `npm run build`

Then update [WORK_ORDER.md](./WORK_ORDER.md) with:
- completed shared-system work
- route coverage
- remaining weak spots
- next recommended batch

---

## Final instruction to future implementers
Do not interpret this pass as permission to randomly decorate the site.

The assignment is to make Marching 2 More feel **more premium through system quality**:
- better buttons
- better framed imagery
- better surfaces
- better polish
- better consistency

Quietly better.
Not louder.
