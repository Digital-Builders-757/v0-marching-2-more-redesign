# Project context prompt (paste into agent chats)

Use this block when starting a new session or subagent.

```text
Repository: v0-marching-2-more-redesign — Marching 2 More marketing site.
Stack: Next.js 16 App Router, React 19, Tailwind 4, TypeScript. npm only.
Not a Supabase app unless deps are added.

Source of truth:
- Invariants: docs/ARCHITECTURE_CONSTITUTION.md
- Architecture: docs/ARCHITECTURE_SOURCE_OF_TRUTH.md
- Brand/tokens: docs/BRAND_CONSTITUTION.md
- Workflow (develop/main, Ship/pr): docs/WORKFLOW.md
- Roadmap: docs/MVP_STATUS_ROADMAP.md
- Agent entry: AGENTS.md

Constants: lib/m2m-site.ts (CTAs, phone, mailto), lib/m2m-nav.ts (menus), lib/m2m-media.ts (images).
Campaign pages: often Header outlineCream + green main + DivorceLandingFooter; not always in hamburger.

Lead capture: POST /api/submit-lead, lib/ghl/*; phone and DOB optional on API; GHL failures return crm_* codes (see docs/M2M_GHL_OPERATOR_VERIFICATION.md §4).

Static quizzes under public/quizzes/ POST to the same API; JS awaits the response and surfaces errors before showing success UI (downsizing, navigating-divorce, credit-repair, fha-loan). /facing-foreclosure uses a unified seller form with foreclosure_intent (guide / speak_now / both), not a quiz block.

Launch readiness write-up: docs/website-launch-hardening-report.md (client) · docs/internal-hardening-findings.md (engineering).

Before merge: npm run ci.
```
