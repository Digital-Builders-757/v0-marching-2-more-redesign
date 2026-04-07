FEATURE: <Describe the feature in 1–3 sentences after running this command.>

MODE: DESIGN ONLY  
DO NOT write, modify, or suggest code.

Your job is to analyze, map, and propose — not to implement.

────────────────────────────────────────────
STEP 0 — MANDATORY CONTEXT (DO NOT SKIP)
────────────────────────────────────────────
Before responding, read and internalize:

**Marching 2 More (this repo — marketing site):**
- **`.cursor/skills/marching-2-more/SKILL.md`** (stack, `lib/m2m-site.ts`, npm lockfile, ESLint flat config)
- `docs/DOCUMENTATION.md` or `docs/DOCUMENTATION_INDEX.md`
- `docs/WORK_ORDER.md` and `docs/MVP_STATUS_ROADMAP.md` when planning ships or parity
- **`lib/m2m-site.ts`** for any CTA / phone / partner / resource URL design

**Full-stack / Supabase repos (only when those files exist):**
- `docs/ARCHITECTURE_CONSTITUTION.md`
- `database_schema_audit.md`
- `docs/diagrams/airport-model.md`
- Relevant SQL: `scripts/*.sql` and `supabase/migrations/*` if present. Assume RLS applies.

**Optional diagrams** — include ONLY if relevant; list which you used and why:

- Auth / bootstrap / redirects / safe routes → `docs/diagrams/signup-bootstrap-flow.md`
- Role-specific UI / dashboards → `docs/diagrams/role-surfaces.md`
- Server Actions, route handlers, Supabase, integrations → `docs/diagrams/infrastructure-flow.md`
- End-to-end product flow (discover → RSVP/ticket; org → publish) → `docs/diagrams/core-transaction-sequence.md`
- Deep refactor or full-map onboarding ONLY → `docs/diagrams/system-map-full.md` (may drift — verify paths)

See `docs/diagrams/README.md` for the full table **if that directory exists**.

**UI, marketing, or user-facing copy:** also read `docs/BRAND_CONSTITUTION.md` **when present** and run **`/brand-check`** before finalizing design output.

If required context is missing or ambiguous, STOP and ask.

────────────────────────────────────────────
STEP 1 — CONSTITUTION INVARIANTS (5 BULLETS)
────────────────────────────────────────────
List the **5 most relevant** rules for this feature:

- **If `docs/ARCHITECTURE_CONSTITUTION.md` exists:** quote the five best-matching invariants from that doc.
- **If it does not (M2M marketing repo):** state five concrete constraints from **`SKILL.md` + `WORK_ORDER.md`** (e.g. single source for CTAs in `lib/m2m-site.ts`, `next/image` + `remotePatterns`, `npm run ci` before merge).

For each: state the rule and how it limits design.

Then: **RED ZONE INVOLVED: YES / NO**  
If YES, which: middleware, auth/callback, profile bootstrap, Stripe/webhooks, RLS/triggers/policies.

────────────────────────────────────────────
STEP 2 — AIRPORT MAP (ZONES)
────────────────────────────────────────────
Using `docs/diagrams/airport-model.md`, classify zones touched and zones that must NOT be violated.

For each zone touched: why it belongs; what must stay OUT of that zone.

────────────────────────────────────────────
STEP 3 — DESIGN PROPOSALS (1–3 APPROACHES)
────────────────────────────────────────────
Approaches A / B / C. For each:
- Summary
- Files likely to change
- Data model impact (or “none”)
- Risks: redirects, bootstrap, RLS, payments/idempotency (if applicable)
- Fit with constitution + airport model

Do NOT write code.

────────────────────────────────────────────
STEP 4 — ACCEPTANCE CRITERIA
────────────────────────────────────────────
Testable outcomes: UI, data, permissions, failure cases.

────────────────────────────────────────────
STEP 5 — TEST PLAN
────────────────────────────────────────────
Manual steps, Vitest/unit updates, red-zone regressions if applicable.

────────────────────────────────────────────
STOP AND WAIT
────────────────────────────────────────────
Ask only: “Which approach (A / B / C), and any constraints before coding?”
