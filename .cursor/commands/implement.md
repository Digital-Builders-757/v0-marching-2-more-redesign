IMPLEMENT APPROVED PLAN:
<paste the selected approach (A / B / C) verbatim>

MODE: IMPLEMENTATION  
Only implement what was approved. No scope expansion.

────────────────────────────────────────────
REPO: Marching 2 More (`v0-marching-2-more-redesign`)
────────────────────────────────────────────
This codebase is primarily a **Next.js marketing site** (no in-repo Supabase product layer unless added).

**Before the rules below:** read **`.cursor/skills/marching-2-more/SKILL.md`**. Use **`lib/m2m-site.ts`** for phone, mailto, Calendly, and external URLs; keep **`docs/WORK_ORDER.md`** current for substantive ships.

If **`docs/ARCHITECTURE_CONSTITUTION.md`** (or TOTL diagram/SQL paths) **do not exist**, skip the full-stack bullets in the next section — they apply only when that documentation is present.

────────────────────────────────────────────
ARCHITECTURAL RULES (full-stack / Supabase repos only)
────────────────────────────────────────────
When **`docs/ARCHITECTURE_CONSTITUTION.md`** exists and describes your system:

- Follow `docs/ARCHITECTURE_CONSTITUTION.md` and `docs/ARCHITECTURE_SOURCE_OF_TRUTH.md`
- Middleware = session refresh + allow / deny / redirect — not business rules
- No DB writes in Client Components
- Mutations via Server Actions (or server-only route handlers when justified)
- No `select('*')` — explicit columns
- RLS must remain enforced; schema/scripts are truth
- If the repo adds Supabase-generated types, never hand-edit generated output to “fix” drift — fix schema and regenerate

Honor during implementation:
- `docs/diagrams/airport-model.md` (if present)
- Any extra diagrams explicitly chosen in `/plan`

────────────────────────────────────────────
RED ZONE (IF APPLICABLE)
────────────────────────────────────────────
If RED ZONE INVOLVED: YES:

1. Show relevant existing code first  
2. Summarize current behavior  
3. Smallest possible diff  
4. Explain: redirect safety, bootstrap, RLS, webhook idempotency (if applicable)

────────────────────────────────────────────
DELIVERABLES
────────────────────────────────────────────
- Changed files  
- Code (minimal, typed, explicit selects)  
- Tests run (`npm run test`, etc.)  
- Doc updates (paths + summary)

End with: **RED ZONE INVOLVED: YES / NO**

If you deviate from the approved plan, STOP and explain why.
