# Brand constitution — Marching 2 More (web)

**Source of truth for on-site visual identity** used by this codebase. Implementation lives in `app/globals.css` (CSS variables and `@theme inline`).

## Principles

- **Premium and calm:** generous spacing, clear hierarchy, no cluttered “template” feel.
- **Trustworthy:** military-adjacent and real-estate professionalism; supportive copy on sensitive topics (e.g. pre-foreclosure).
- **Readable:** body text large enough on mobile; sufficient contrast on green backgrounds.

## Color system (semantic)

Defined as `--m2m-*` in Tailwind theme (see `app/globals.css`).

| Token | Typical use |
|-------|-------------|
| `m2m-panel`, `m2m-deep`, `m2m-black` | Dark green backgrounds, headers, campaign pages |
| `m2m-cream`, `m2m-gold`, `m2m-gold-lt` | Text and accents on green; gold CTAs |
| `m2m-muted` | Secondary text |

Campaign pages often use **deep green canvas** + **cream type** + **gold** CTAs. Core interior pages often use **white / cream** backgrounds with dark green text.

## Typography

| CSS variable | Role |
|--------------|------|
| `--font-display` | Playfair — hero and section headlines |
| `--font-serif` | Cormorant — accent/editorial |
| `--font-sans` | Jost — body |
| `--font-nav` | Montserrat — nav labels, uppercase CTAs |

Use `style={{ fontFamily: "var(--font-display)" }}` (etc.) to match existing components.

## Components and motion

- **Header:** sticky green bar; optional `consultationCtaVariant="outlineCream"` on landings.
- **Motion:** GSAP via `components/gsap-animations.tsx` and `data-gsap-*` hooks where present.

## Content

- **Phone / email / external URLs:** `lib/m2m-site.ts` — do not fork `tel:` or Calendly URLs across components.

## Evolution

When brand updates occur, change **tokens and shared components first**, then sweep high-traffic pages. Update this doc when palette or font roles change.
