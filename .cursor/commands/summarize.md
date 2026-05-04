/summarize

Intent: Produce a **handoff prompt** for the next agent: what we did, what’s left, how to continue.

MODE: ANALYSIS (no code unless needed to verify file paths)

────────────────────────────────────────────
STEP 0 — GATHER
────────────────────────────────────────────
Review:

- `git status` and recent commits (`git log -8 --oneline`)
- **`docs/MVP_STATUS_ROADMAP.md`** and **`docs/WORK_ORDER.md`** (current phase / priorities)
- **`.cursor/skills/marching-2-more/SKILL.md`** when summarizing this repo
- Any open questions or blockers from the session

────────────────────────────────────────────
STEP 1 — OUTPUT (PASTE AS THE NEW AGENT’S FIRST MESSAGE)
────────────────────────────────────────────
Write a single message the user can copy with these sections:

1. **Project:** Marching 2 More — **Next.js App Router marketing site** (`v0-marching-2-more-redesign`). (If the work is in a different repo, name that repo instead.)  
2. **Read first:** `.cursor/skills/marching-2-more/SKILL.md`, `docs/DOCUMENTATION_INDEX.md`, `docs/WORK_ORDER.md`, `.cursor/commands/README.md` (workflow: `/Ship` then `/pr` toward `develop` / `main`). For full-stack projects with architecture docs, add `docs/ARCHITECTURE_CONSTITUTION.md` when it exists.  
3. **Done this session:** bullet list (features, fixes, docs).  
4. **Files touched:** high-signal paths only.  
5. **Verification:** which of `npm run typecheck` / `test` / `lint` / `build` ran and result.  
6. **Left to do:** ordered next steps (P0 first), each one concrete.  
7. **Constraints / risks:** env, media hosts, lockfile choice, stale `.next/types` after route renames (delete `.next` + rerun `tsc`), or — for full-stack repos — RLS, auth, migrations.  
8. **Suggested command:** `/continue` or `/plan` + topic, or `/ship` if ready.

Tone: factual, no fluff. If something was assumed, label **UNVERIFIED**.
