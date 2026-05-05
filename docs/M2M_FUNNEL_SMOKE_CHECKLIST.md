# M2M funnel smoke checklist (pre-release)

Short manual pass to complement **`npm run test:e2e`** (Playwright) and **`npm run test`** (Vitest). See also data hooks in [`lib/m2m-funnel-regression.ts`](../lib/m2m-funnel-regression.ts).

## Automated (run locally / CI)

```bash
npm run build
npx playwright install chromium   # first-time / CI agents
npm run test:e2e                # included in npm run ci
```

**Stable paths (`data-testid` load checks):** [`lib/m2m-funnel-regression.ts`](../lib/m2m-funnel-regression.ts) — `/facing-foreclosure`, `/navigating-divorce`, `/downsizing-your-home`, `/improve-your-credit`, `/fha-loan`, `/more-investments`.

**Detailed Playwright breakdown:** [`docs/proof/E2E_SMOKE_PATHS.md`](./proof/E2E_SMOKE_PATHS.md).

## Per-funnel (5–10 min)

| Route | CTA / consult | Quiz / embed | Lead form | Success | Error |
|-------|-----------------|--------------|-----------|---------|-------|
| `/facing-foreclosure` | Header **BOOK A HOME CONSULTATION** → `/contact-us?intent=consultation` | Quiz block + fallback | Bottom guide form submits | “Thank you” + reassurance | Alert, form stays |
| `/navigating-divorce` | Same | iframe `/quizzes/navigating-divorce/...` | `#guide-form` | “Thank you! We’ll send your guide.” | Alert |
| `/downsizing-your-home` | Same | iframe `/quizzes/downsizing-your-home/quiz.html` | *(GHL/local quiz when embed on; fallback form when embed off)* | *(quiz or fallback)* | — |
| `/improve-your-credit` | Phone / contact links in playbook | Optional GHL quiz URL | Playbook card **Send my playbook** | “Thank you!” + email copy | Alert |
| `/fha-loan` | — | — | **Send My Questions** | “Thank you! We’ll follow up about your FHA questions.” | Alert |
| `/more-investments` | **Call** + **Book a consultation** in investor tools | Investor quiz when URL configured | — | — | — |

## Mobile (one device width)

- Open menu → **BOOK A HOME CONSULTATION** still targets `/contact-us?intent=consultation`.
- Scroll each funnel’s hero + form/quiz: no clipped submit buttons; urgency selects usable.

## GHL / API sanity

- Lead posts go to **`POST /api/submit-lead`** only (see [`docs/M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md`](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md)).
- Never show **Thank you** if the browser did not receive `ok: true` with a valid `correlationId` from that route.
- **CI / local:** [`tests/e2e/submit-lead-api.spec.ts`](../tests/e2e/submit-lead-api.spec.ts) validates invalid JSON, validation errors, and the unconfigured-CRM response (no live GHL token required).
- **Production cutover:** after deploy, operators run [`M2M_GHL_LIVE_CUTOVER_RUNBOOK.md`](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) sequences and confirm records in GHO ([`M2M_GHL_OPERATOR_VERIFICATION.md`](./M2M_GHL_OPERATOR_VERIFICATION.md)).

## CRM copy guardrails

- Header consultation label remains **BOOK A HOME CONSULTATION** (see `components/m2m-cta.tsx`).
- Primary consultation path: **`/contact-us?intent=consultation`** (`M2M_CONTACT_CONSULTATION_PATH` in `lib/m2m-site.ts`).
