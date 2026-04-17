# Architecture constitution (Marching 2 More — marketing site)

**This file is the short invariant list** for agents and slash commands. The **full technical map** is **[ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md)**. **Brand rules:** [BRAND_CONSTITUTION.md](./BRAND_CONSTITUTION.md).

## Invariants

1. **Product shape:** Next.js 16 App Router **marketing site** only—no Supabase/auth/RLS in-repo unless dependencies are explicitly added.
2. **Tooling:** **`npm` only**; merge gate **`npm run ci`** (lint, test, typecheck, build).
3. **Constants:** Phone, mailto, Calendly, and external URLs live in **`lib/m2m-site.ts`**; nav/footer lists in **`lib/m2m-nav.ts`**; Blob marketing images in **`lib/m2m-media.ts`**—avoid duplicating `tel:` or booking URLs in components.
4. **Media:** Use **`next/image`**; hosts must match **`next.config.mjs`** `images.remotePatterns`.
5. **Page families:** Core pages use global **`Header`** / **`Footer`** (and optional **`GSAPAnimations`**). Campaign landings often use **`consultationCtaVariant="outlineCream"`** and **`DivorceLandingFooter`** with a green **`main`**—not every campaign route belongs in the hamburger (`lib/m2m-nav.ts`).
6. **Documentation:** After meaningful ships, add a line to **[WORK_ORDER.md](./WORK_ORDER.md)**; shift priorities in **[MVP_STATUS_ROADMAP.md](./MVP_STATUS_ROADMAP.md)** when needed.

## Entry points

- [AGENTS.md](../AGENTS.md)
- [WORKFLOW.md](./WORKFLOW.md)
