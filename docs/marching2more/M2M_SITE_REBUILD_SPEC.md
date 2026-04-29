# Marching2More.com — Rebuild Spec (from current Wix site)

Source site: https://www.marching2more.com/

Goal: recreate the **same information architecture + page sections + core copy + CTAs** in a custom build (v0 → codebase), then iterate.

**Repo truth:** Live routing and shipped behavior live under `app/` and [DOCUMENTATION_INDEX.md](../DOCUMENTATION_INDEX.md). Treat this file as a **parity inventory** from the legacy site—verify URLs and CTAs against [`lib/m2m-site.ts`](../../lib/m2m-site.ts) before trusting a line here.

> Notes
> - This doc captures **structure + copy inventory + UI components**, not Wix implementation details.
> - Keep all external integrations as links (RealScout, Calendly, tel/mailto) unless/until the client requests deeper integration.

---

## 0) Brand + global rules

### Brand name usage
- Header/brand appears as:
  - **MARCHING 2 MORE**
  - **REAL ESTATE TEAM** (or “REALTY GROUP” in footer area)

### Primary trust markers (repeated across pages)
- "Licensed Real Estate Professionals in Virginia Beach, VA, USA"
- "Veteran Owned | 5.0 ★ ★ ★ ★ ★"
- Logos (images):
  - US Veteran Owned Business
  - Equal Housing Opportunity
  - National Association of Realtors

### Primary contact points
- Phone (tel link): **757-206-2859**
- Team inbox (mailto): **Info@marching2more.com** (footer shows mailto to `Assistant@marching2more.com` — verify desired final address)
- Calendly booking: https://calendly.com/marching2more/45min
- Google reviews:
  - "Review us on Google ▸" → https://g.page/r/Cdr645m9lC69EBM/review

---

## 1) Global layout

### Header (sitewide)
Elements observed:
- Logo (left)
- Brand text links (center/left):
  - “MARCHING 2 MORE” (links home)
  - “REAL ESTATE TEAM” (links home)
- Navigation menu (collapsed in the snapshot; likely hamburger / minimal items)
- Agent headshot quick-links (right):
  - Donavan McFadden → `/profile-page`
  - Roger Lee → `/roger-lee`
  - Kristin profile → `/kristin-s-profile`
- Primary CTA button:
  - “BOOK A HOME CONSULTATION” → Calendly

### Footer (sitewide)
Columns/sections observed:
- Quick links:
  - Home Valuation → `/free-home-valuation`
  - Pre-Listing Checklist → `/resources`
  - Work With Us → `/home-search`
  - Our Team → `/our-team`
  - Reviews → `/reviews`
  - Contact Us → `/contact-us`
- About block:
  - Heading: “About Marching 2 More”
  - Description: “Your Trusted Real Estate Partners — With integrity and experience, Marching 2 More Real Estate is here to help you find your dream or sell your property quickly at competitive prices. Our disciplined leadership and local market expertise ensure a seamless and stress-free experience. Let's march to more together.”
- Agent cards (mini) with social icons:
  - Donavan McFadden
  - Roger Lee
  - Marching 2 More
- Policies links:
  - Cookie Policy → `/cookie-policy`
  - Disclaimers → `/copy-of-privacy-policy`
  - Privacy Policy → `/privacy-policy`
  - Terms and Conditions → `/terms-and-conditions`
  - Accessibility Statement → `/accessibility-statement`
- Contact/address block:
  - “600 Lynnhaven Pkwy, STE 106 Virginia Beach, VA 23452 United States”
  - Phone 757-206-2859
  - Email link
- Copyright:
  - “©2018 — 2026 MARCHING 2 MORE REALTY GROUP”

---

## 2) Page specs

### A) Home (`/`)
Hero section content (centered over a background image):
- Top label: “Marching 2 More Real Estate Team”
- Trust line(s):
  - “Licensed Real Estate Professionals in Virginia Beach, VA, USA”
  - “Veteran Owned | 5.0 ★ ★ ★ ★ ★”
- Primary headline: “Where You Find Your Next Home”
- Subheadline: “Ask about our Financing Options.”
- Primary CTA: “Work With Us” → `/home-search`
- Secondary CTA: “Free Home Valuation” → RealScout home reports (HVA public)
  - https://donavanmcfadden63.realscout.com/homesearch/home-reports?hva_public=true
- Contact CTA cluster:
  - “Speak with an Agent.” → Calendly
  - Phone: “757-206-2859”
  - “Call or Text — Anytime.”
- Compliance/trust logos row (veteran owned, EHO, realtor)
- “Have a question? Contact Us ▸” → `/contact-us`

Reviews/testimonials section:
- Heading: “Serving with integrity. Leading with experience.”
- 3 testimonial cards (Google-style) with:
  - initial “G”, family name, affiliation (U.S. Navy / etc), 5 stars, long review text
- CTAs:
  - “More Reviews” → `/reviews`
  - “Review us on Google ▸” → Google review link

Search section:
- Heading: “Find Your New Home”
- Large headline: “Search Available Properties”
- Paragraph (paraphrased): curated range of properties for military personnel/families; support through relocations and near-base homes.
- CTAs:
  - “Start Your Search Now” → RealScout map
    - https://donavanmcfadden63.realscout.com/homesearch/map?for_sale=1&for_rent=0
  - “Or — Tell us your needs.” → mailto with subject

Local property search attribution:
- “Local Property Search Powered by CREED REALTY*” → external results gallery
  - https://donavan.atcoastal.com/results-gallery/?status=A
- “We'll prepare the best options.” → same external link

Sell section:
- Headline cluster:
  - “Sell with confidence.”
  - “Learn your home's true value.”
- CTAs:
  - “Get Your Free Home Valuation” → RealScout HVA
  - “Learn More” → `/free-home-valuation`
  - “Get The Pre-Listing Checklist” → `/resources`
- Supporting line: “Our 20 page guide to assist you with every phase of selling your home.”

Partners section:
- Heading: “You're in great hands.”
- Large headline: “Financing, renovations, moving solutions”
- Intro copy: access a network of trusted local leaders; experienced their professionalism first hand.
- Partner list (each with link + category):
  - New World Builders ▸ (General Contractors) https://www.newworldbuilders.com/
  - Off Load Moving ▸ (Moving) https://offloadmoving.com/
  - R.S. Andrews ▸ (HVAC) https://www.ars.com/rs-andrews-tidewater
  - QAI ▸ (Home Inspection) https://www.qaihome.com/
  - John Edwards ▸ (Pest & Termite) https://www.johnedwardspestcontrol.com/index.php
  - True North Title (Title) https://truenorthtitle.com/
  - Cara Erickson of Atlantic Bay Mortgage ▸ (Lending) https://www.atlanticbay.com/caraerickson/
  - 2-10 Home Warranty ▸ (Home Warranty) https://www.2-10.com/

Final CTA:
- “Meet Your Team” → `/our-team`

---

### B) Contact (`/contact-us`)
- Title: “Contact Us”
- Section title: “Introduce Yourself”
- Body copy: “Tell us a bit about your goals. One of our agents will review your request and follow up with your next steps within 24hrs.”
- CTA: “Or give us a call — 757-206-2859”
- Form fields:
  - First name
  - Last name
  - Email
  - Message textarea (“Anything else we should know?”)
- Submit button: “That's it — Send!”

---

### C) Our Team (`/our-team`)
- Title: “Meet Your Team”
- Heading: “Serving with integrity. Leading with experience.”
- Body: “Our unique balance of disciplined leadership, honed from military experience, combined with our local market expertise and personalized care, ensures a real estate experience that is seamless and feels effortless.”
- Team list cards (link to profile pages):
  - Donavan McFadden — “Founding Partner • Licensed Agent”
  - Roger Lee — “Founding Partner • Licensed Agent”
  - Kristin Allen — “Licensed Agent”
  - Jalessa Hendricks — “Licensed Agent”
- CTA cluster:
  - “Book a Consultation” → Calendly
  - “Introduce Yourself” → `/contact-us`
  - “Call Us 757-206-2859”

---

### D) Home Valuation (`/free-home-valuation`)
Hero:
- “Home Valuation”
- “Maximize Your Home's Value Before You List.”
- “Effortless Home Valuation for Top Market Results in Virginia”
- CTA: “Get Your Free Home Valuation” → RealScout HVA
- Trust lines/logos repeated

Process section:
- Heading: “A Simple Valuation Process:”
- Steps/copy (keep wording close):
  - “Schedule a Walkthrough”
    - “Share your home's unique features and any concerns you have. We’re here to listen and address your specific needs.”
  - “Review Market Positioning Options”
    - “Comprehensive Market Analysis: Gain insights with a detailed Comparative Market Analysis (CMA), understanding how your home stacks up in the current market.”
  - “Personalized Value Enhancement Checklist”
    - “Whether improving your home’s value or listing as is, we provide expert guidance every step of the way.”
  - “No pressure, only support.”
  - “From contracts to closing, we handle everything. We coordinate with partners, manage projects, and keep your sale on track.”
- CTA repeated: “Get Your Free Home Valuation”

Reviews section:
- Heading: “We're committed to being the best.”
- 3 testimonial cards + CTAs (More Reviews / Review on Google)

Final CTA:
- “Ready to Discover Your Home's True Value?”
- Link: “Your Free Home Valuation” → RealScout HVA
- Link: “Or give us a call — 757-206-2859”
- Link: “Meet Your Team” → `/our-team`

---

## 3) Route inventory (observed in header/footer/main)
Internal routes:
- `/` (Home)
- `/home-search` (Work With Us / likely search landing)
- `/contact-us`
- `/our-team`
- `/reviews`
- `/free-home-valuation`
- `/resources` (Pre-listing checklist)
- Agent profiles:
  - `/profile-page` (Donavan)
  - `/roger-lee`
  - `/kristin-s-profile`

Policy routes:
- `/cookie-policy`
- `/copy-of-privacy-policy` (used for “Disclaimers”)
- `/privacy-policy`
- `/terms-and-conditions`
- `/accessibility-statement`

External links:
- Calendly: https://calendly.com/marching2more/45min
- RealScout HVA: https://donavanmcfadden63.realscout.com/homesearch/home-reports?hva_public=true
- RealScout map search: https://donavanmcfadden63.realscout.com/homesearch/map?for_sale=1&for_rent=0
- Coastal results gallery: https://donavan.atcoastal.com/results-gallery/?status=A
- Google review: https://g.page/r/Cdr645m9lC69EBM/review

---

## Sources
Captured via Browser Relay snapshots on 2026-04-07:
- Home: https://www.marching2more.com/
- Contact: https://www.marching2more.com/contact-us
- Team: https://www.marching2more.com/our-team
- Home valuation: https://www.marching2more.com/free-home-valuation
