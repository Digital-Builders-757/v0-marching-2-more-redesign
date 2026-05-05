# Documentation index

**Canonical map** of project documentation. For a short “start here” path, read **[AGENTS.md](../AGENTS.md)**.

**Execution queue vs ship log:** Batched product work is ordered in [`marching2more/README.md`](./marching2more/README.md) and [`marching2more/M2M_CATCHUP_ROADMAP.md`](./marching2more/M2M_CATCHUP_ROADMAP.md). [`WORK_ORDER.md`](./WORK_ORDER.md) is the rolling **done recently / next** timeline. Each `marching2more/*_WORK_ORDER.md` is the **scope + definition of done** for that batch (keep them aligned when behavior changes — avoid duplicating full narratives in multiple places).

## Source-of-truth (active)

| Doc | Purpose |
|-----|---------|
| [AGENTS.md](../AGENTS.md) | Agent entry: what the repo is, doc order, tooling |
| [ARCHITECTURE_CONSTITUTION.md](./ARCHITECTURE_CONSTITUTION.md) | Short invariant list (for agents / slash commands) |
| [ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md) | Stack, folders, page patterns, CI, shared route metadata (`lib/m2m-seo-metadata.ts`) |
| [BRAND_CONSTITUTION.md](./BRAND_CONSTITUTION.md) | Colors, type roles, brand principles |
| [WORKFLOW.md](./WORKFLOW.md) | Git, Ship/pr, branch flow pointers |
| [PROJECT_CONTEXT_PROMPT.md](./PROJECT_CONTEXT_PROMPT.md) | Paste block for LLM sessions |
| [DOCUMENTATION.md](./DOCUMENTATION.md) | Short stub — links here only (avoid duplicate tables) |
| [WORK_ORDER.md](./WORK_ORDER.md) | Done recently + ordered next steps |
| [MVP_STATUS_ROADMAP.md](./MVP_STATUS_ROADMAP.md) | P0/P1 priorities |
| [M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](./M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md) | Active site overhaul: goals, standards, doc outcomes |
| [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md) | Cross-site visual system pass for buttons, image framing, surfaces, and route polish |
| [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) | Active GoHighLevel integration boundary, phases, env contract |
| [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md) | **Start here (live):** website → API → GHO architecture, where data lands, operator verification, strict success |
| [M2M_CLIENT_CRM_HANDOFF_GUIDE.md](./M2M_CLIENT_CRM_HANDOFF_GUIDE.md) | Client/team: what the site vs GHO does, how to confirm leads, layout vs data visibility |
| [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) | GHL sub-account tasks: fields, pipelines, tags, workflows, calendars |
| [M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md](./M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md) | Operator CRM spec: funnel pipelines, tags, layouts, QA; **§0.1** documents how the live site uses **buyer/seller env pipelines** + **`GHL_PATH_TAGS`** vs three funnel-named boards |
| [M2M_FUNNEL_SMOKE_CHECKLIST.md](./M2M_FUNNEL_SMOKE_CHECKLIST.md) | Short pre-release smoke list + Playwright funnel regression pointers (CTAs, forms, quizzes) |
| [M2M_ASSET_MAP.md](./M2M_ASSET_MAP.md) | **`public/images/` inventory** (local raster), hero vs support roles; **`lib/m2m-media.ts`** for Blob URLs; duplicates; CRM crosswalk to GHL spec + LEAD_CAPTURE_MATRIX |
| [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) | Ordered env + QA steps for live hookup and verification |
| [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) | GHL assumptions, tag/field rules, `npm run ghl:operator-check`, production triage |
| [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md) | Route-by-route matrix: funnels, key fields, urgency mode, GHO expectations |
| [M2M_LEAD_CAPTURE_QA.md](./M2M_LEAD_CAPTURE_QA.md) | Manual QA template + live verification script |
| [website-launch-hardening-report.md](./website-launch-hardening-report.md) | Client-facing pre-domain launch readiness (routes, forms, GHL, quizzes, CTAs, compliance notes) |
| [internal-hardening-findings.md](./internal-hardening-findings.md) | Internal engineering detail, resolved items log, browser QA matrix |
| [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md) | Skimmable status: done vs blocked (GHL) vs remaining QA / next operator steps |
| [ROADMAP.md](./ROADMAP.md) | Pointer to MVP_STATUS_ROADMAP (search alias) |
| [development/BRANCHING.md](./development/BRANCHING.md) | Branch + PR flow toward `develop` |
| [development/RELEASING.md](./development/RELEASING.md) | **`develop` → `main`** when ready for production |
| [troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md](./troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md) | Repeatable fixes |
| [diagrams/README.md](./diagrams/README.md) | Diagram index |
| [../README.md](../README.md) | Clone, install, dev server |

## Reference / secondary

| Doc | Purpose |
|-----|---------|
| [marching2more/M2M_SITE_REBUILD_SPEC.md](./marching2more/M2M_SITE_REBUILD_SPEC.md) | Supplementary rebuild notes (verify against repo) |
| [marching2more/M2M_CATCHUP_ROADMAP.md](./marching2more/M2M_CATCHUP_ROADMAP.md) | Current execution order for the next Marching 2 More batches |
| [marching2more/README.md](./marching2more/README.md) | Queue entry point for Cursor and handoffs |
| [marching2more/M2M_FINAL_POLISH_AND_LIVE_QA_WORK_ORDER.md](./marching2more/M2M_FINAL_POLISH_AND_LIVE_QA_WORK_ORDER.md) | Final route polish, loading feel, live verification, and release readiness |
| [marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md](./marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md) | Client page fixes batch — decisions and route map |
| [marching2more/M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md](./marching2more/M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md) | What actually matters next — priority hierarchy for site improvements |
| [marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md](./marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md) | Product growth batch — conversion clarity, content engine, trust, and maintainability |
| [marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md](./marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md) | Repo hygiene + mobile polish batch — docs foundation, shared UI, route-level mobile cleanup |
| [marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md](./marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md) | Site-wide UX uplift — homepage clarity, navigation, trust, conversion flow, mobile ergonomics |
| [releasenotes/README.md](./releasenotes/README.md) | Optional **`/release`** archives |

## Archive (historical)

| Path | Purpose |
|------|---------|
| [archive/README.md](./archive/README.md) | Why files are archived |
| [archive/WORK_ORDER_WIX_PARITY.md](./archive/WORK_ORDER_WIX_PARITY.md) | Old Wix route snapshot (may be stale) |

## Cursor

| Path | Purpose |
|------|---------|
| [.cursor/skills/marching-2-more/SKILL.md](../.cursor/skills/marching-2-more/SKILL.md) | Stack and conventions |
| [.cursor/commands/README.md](../.cursor/commands/README.md) | Slash commands (`/Ship`, `/pr`) |

## Handoff (what to trust)

| Question | Source of truth |
|----------|-----------------|
| Routes, layouts, metadata | `app/**` · shared SEO helper [`lib/m2m-seo-metadata.ts`](../lib/m2m-seo-metadata.ts) |
| Nav / footer labels & hrefs | [`lib/m2m-nav.ts`](../lib/m2m-nav.ts) |
| Site URLs, phone, booking placeholders | [`lib/m2m-site.ts`](../lib/m2m-site.ts) |
| Marketing images (`public/images/`) | [`docs/M2M_ASSET_MAP.md`](./M2M_ASSET_MAP.md) + per-route `content.ts` |
| Lead payload → GHL behavior | [`docs/M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md`](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md) · [`docs/M2M_LEAD_CAPTURE_MATRIX.md`](./M2M_LEAD_CAPTURE_MATRIX.md) · **§0.1** in [`M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md`](./M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md) (two env pipelines vs funnel-named boards) |
| What shipped recently | [`docs/WORK_ORDER.md`](./WORK_ORDER.md) |

**Done vs pending (GHL):** skimmable status in [`M2M_GHL_REMAINING_GAPS.md`](./M2M_GHL_REMAINING_GAPS.md); env template [`.env.example`](../.env.example).
