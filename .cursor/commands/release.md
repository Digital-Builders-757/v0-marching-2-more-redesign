/release

Intent: Make merge-to-main a product moment: release notes + rollout + rollback + post-merge verification. Use after **`/pr`** has opened (or will open) **`develop` → `main`**, or when documenting what shipped to production.

MODE: ANALYSIS

────────────────────────────────────────────
INPUTS
────────────────────────────────────────────
Collect:
- PR(s) being merged (usually **`develop` → `main`** for this repo)
- User-visible changes (copy, routes, CTAs, `lib/m2m-site.ts`, images)
- Risk areas for **this** stack: broken links, wrong phone/email, `next.config.mjs` image hosts, analytics — or auth/Stripe/RLS **only if** those exist in the project

────────────────────────────────────────────
OUTPUT (REQUIRED SECTIONS)
────────────────────────────────────────────
Release notes (user-facing)
- ...

Release notes (internal)
- ...

Risk assessment
- Risk level: Low/Med/High
- Top risks (3 bullets)

Rollout plan
- Steps (3–7 bullets)

Rollback plan
- 1–2 sentences

Post-merge verification checklist
- Explicit routes / actions to verify
- Any scripts/tests to rerun

────────────────────────────────────────────
ARCHIVE (REQUIRED)
────────────────────────────────────────────
After generating the release notes above, you MUST save them to the repo:

- Create a new markdown file under: `docs/releasenotes/`
- Filename convention:
  - `YYYY-MM-DD_pr-<number>_<short-slug>.md`
  - Example: `2026-04-12_pr-42_develop-to-main-home-hero.md`
- Doc header must include:
  - `**Date:** <MMMM d, yyyy>`
  - `**Status:** ✅ COMPLETE`
  - `**Purpose:** Release notes archive for PR(s) merged`
- Paste the exact release output into that file.
- Include the PR link(s) at the top.
