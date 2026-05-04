# v0-marching-2-more-redesign

**Marching 2 More** — Hampton Roads military / veteran-focused real estate **marketing site** (Next.js App Router). Originated from [v0](https://v0.app); day-to-day source of truth is this repo, not the v0 project link below.

## Documentation (read order)

1. **[AGENTS.md](./AGENTS.md)** — what the repo is, canonical doc order, tooling, code anchors  
2. **[docs/DOCUMENTATION_INDEX.md](./docs/DOCUMENTATION_INDEX.md)** — full map of active vs reference docs (do not duplicate that table elsewhere)  
3. **[docs/DOCUMENTATION.md](./docs/DOCUMENTATION.md)** — short stub; links to the index only  
4. **[docs/WORK_ORDER.md](./docs/WORK_ORDER.md)** — recent ships and next steps  
5. **[docs/development/BRANCHING.md](./docs/development/BRANCHING.md)** · **[docs/development/RELEASING.md](./docs/development/RELEASING.md)** — **`develop`** and **`main`**  
- Cursor: [`.cursor/commands/README.md`](./.cursor/commands/README.md) (**`/Ship`**, **`/pr`**, …) · [`.cursor/skills/marching-2-more/SKILL.md`](./.cursor/skills/marching-2-more/SKILL.md)  
- Assets + CRM crosswalk: **[docs/M2M_ASSET_MAP.md](./docs/M2M_ASSET_MAP.md)** · GHL operator spec: **[docs/M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md](./docs/M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md)**

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_Wlf5QHhYqosNp5RZ6m2pKULaFSDE)

## Getting Started

First, install dependencies and run the development server (this repo standardizes on **npm**):

```bash
npm install
npm run dev
```

Quality gate before a PR: `npm run ci` (lint, Vitest, TypeScript, production build, Playwright e2e).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Digital-Builders-757/v0-marching-2-more-redesign" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
