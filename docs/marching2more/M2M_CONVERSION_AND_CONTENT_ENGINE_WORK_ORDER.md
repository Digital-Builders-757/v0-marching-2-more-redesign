# Marching 2 More — Conversion + Content Engine Work Order

## Purpose
Turn the site from a polished marketing build into a real **growth system**.

The site already has a stronger foundation, better lead capture, improved mobile behavior, and cleaner docs. The next level is to make it generate more trust, more qualified action, and more useful content over time.

This work order is about:
- stronger conversion paths
- better educational content
- more trust/proof surfaces
- more intentional route structure
- more reusable content patterns
- less dead-end browsing

## What this version should do
A visitor should be able to:
1. understand the offer quickly,
2. see themselves in the page,
3. trust the team,
4. find an obvious next step,
5. keep moving through the site without friction.

If the site does not do that, it still has room to improve.

## Core goals
1. Increase conversion clarity without making the site feel pushy.
2. Build a better educational / content layer for homeowner intent.
3. Strengthen proof, credibility, and emotional relevance.
4. Reduce placeholders, dead ends, and thin pages.
5. Make the site easier to extend with future campaigns and pages.

## Work stream A, conversion system
Make the site better at turning attention into action.

### Focus areas
- homepage CTA hierarchy
- navigation-to-action flow
- trust cues near forms
- response expectation language
- quiz and lead magnet presentation
- consultation routing
- better handoff between awareness pages and conversion pages

### Questions to answer on every important page
- What is the main action?
- Is the secondary action clearly less important?
- Does the user know what happens next?
- Is there enough trust before the ask?
- Is the mobile path obvious?

### Candidate surfaces
- homepage
- header / nav
- `/contact-us`
- `/contact`
- `/home-search`
- `/free-home-valuation`
- `/cma-form`
- campaign landings
- quiz sections and lead forms

## Work stream B, content engine
Make the site more useful to real homeowners, not just visually nicer.

### Focus areas
- more helpful page copy
- better FAQs
- better educational sections
- better internal linking between related pages
- more audience-specific explanations
- more intent-driven landing pages
- blog content that actually answers questions people have

### Good content directions
- homeowner decision guides
- selling timelines
- downsizing guidance
- divorce / transition guidance
- foreclosure / urgency guidance
- credit / first-time buyer support
- VA / FHA / investment education
- local market and process explainers

### What the content layer should do
- increase time on site in a useful way
- answer objections before they become friction
- support SEO and local discovery
- make the brand feel knowledgeable and calm
- give the client more material to share and reference

## Work stream C, proof and trust layer
Make the brand feel more credible, warmer, and more real.

### Focus areas
- reviews and testimonial usage
- team and agent credibility surfaces
- guide / resource previews
- emotional, scenario-specific imagery
- more grounded visuals for difficult life moments
- stronger support and expectation copy

### Important principle
This brand should feel helpful and competent, not loud.
Trust grows when the site feels specific, human, and clear.

## Work stream D, product structure and maintainability
Improve the repo so future growth is easier.

### Focus areas
- reduce placeholder language in docs and code where the work is already shipped
- keep source-of-truth docs aligned
- keep route maps current
- keep campaign/content patterns reusable
- keep imagery and asset decisions centralized
- prevent docs from drifting into duplicate explanations

### Things to watch
- `GOHIGHLEVEL_*` placeholders that are still genuinely pending
- old demo copy that no longer matches the shipped site
- content pages that need better internal linking
- any route that feels isolated from the rest of the system

## P0 priorities
- sharpen the main conversion paths
- make the key lead pages more persuasive and clearer
- tighten trust and proof on the highest-value pages
- remove any obvious content dead ends
- keep mobile execution clean on every high-traffic route

## P1 priorities
- build better educational content patterns
- strengthen blog and FAQ usefulness
- improve internal linking and page relationships
- improve scenario-driven imagery and messaging
- keep expanding the reusable conversion system

## P2 priorities
- polish lower-traffic pages
- add deeper content hubs where they help SEO or trust
- continue replacing placeholder assets and temporary copy
- add optional measurement / reporting improvements if they help decision-making

## Measurement (Vercel Analytics)
- **Custom event:** `m2m_cta` (via `@vercel/analytics` `track`), fired from delegated clicks on elements with **`data-m2m-track="<name>"`** and optional **`data-m2m-track-loc="<surface>"`** (`components/m2m-cta-analytics.tsx`).
- **High-value paths to watch:** `/` → consultation / phone / valuation; `/home-search`; `/free-home-valuation`; `/cma-form`; `/contact-us`; campaign landings → guide or consult; `/blog/[slug]` → CTA.
- **Detail lives in code:** cluster definitions and homepage topic strip in `lib/m2m-content-clusters.ts`, `components/home-topic-nav.tsx`.

## Best candidate pages
Start with:
- `/`
- `/contact-us`
- `/home-search`
- `/free-home-valuation`
- `/cma-form`
- `/resources`
- `/reviews`
- `/our-team`
- `/blog`
- `/blog/[slug]`
- `/downsizing-your-home`
- `/navigating-divorce`
- `/facing-foreclosure`
- `/improve-your-credit`
- `/va-loan-benefits`
- `/fha-loan`
- `/more-investments`

## What not to do
- do not add content for content’s sake
- do not create more isolated pages that do not help conversion or trust
- do not rewrite the brand tone away from calm premium advisory energy
- do not add new dependencies
- do not change backend behavior unless a small support tweak is truly necessary
- do not waste time on low-value visual novelty

## Decision filter
Before shipping anything, ask:
- does this increase trust?
- does this improve conversion clarity?
- does this make the site more useful?
- does this support future content growth?
- does this make maintenance easier?

If the answer is no, skip it.

---

## Shipped (May 2026 — conversion + linking batch)

- **`M2mPostSubmitNextSteps`** — After successful lead submits, visitors get **Explore while you wait** internal links (search, sell hub, valuation, CMA, resources, reviews, consultation form) with **`data-m2m-track="post_submit_next_step"`**; current funnel path can be omitted (e.g. `/home-search`, `/cma-form`, `/free-home-valuation`).
- **`lib/m2m-content-clusters.ts`** — Stronger cluster intros; **Book a consultation** and **buy/sell** hubs added across buyer, seller, military, life, invest, and learn clusters where useful.
- **`M2mRelatedPages`** — Virginia / veteran-owned trust line; **`min-h-11`** + **`related_page`** analytics on links.
- **`/home-search`** — Seller **bridge** copy linking **sell**, **valuation**, and **CMA** above the related strip.
- **`/resources`** — Internal guides list leads with **buy**, **sell**, and **consultation**.
- **`/blog/[slug]`** — CTA row: **Work With Us** · **Request consultation** · **Pick a time**; footer text links to **`/buy`**, **`/sell`**, **`/reviews`**.
- **`/contact-us`** — Non-consult intro clarifies typical response timing; success state includes **`M2mPostSubmitNextSteps`**.

## Definition of done
- the site feels like a growth system, not just a polished brochure
- the conversion paths are clearer
- the content is more useful
- the proof layer is stronger
- the site feels more specific to the scenarios it serves
- future pages can be added without inventing a new system every time
- blog index is live at `/blog`, posts render with real headings/lists (nav includes Blog)
