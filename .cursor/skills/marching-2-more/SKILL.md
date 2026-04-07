---
name: marching-2-more
description: >-
  Applies Marching 2 More site conventions for the v0-marching-2-more-redesign
  repo (Next.js 16 App Router marketing site). Use when editing this codebase,
  adding pages or CTAs, fixing lint/CI, or when the user mentions Marching 2
  More, m2m-site, Wix parity, or military real estate UI.
---

# Marching 2 More — project skill

## Stack (this repo)

- **Next.js 16** (App Router), **React 19**, **Tailwind CSS 4**, **TypeScript**.
- **UI**: Radix-based shadcn-style components under `components/ui/`.
- **Motion**: GSAP in client components (e.g. `components/gsap-animations.tsx`, section `data-gsap-*` attributes).
- **Analytics**: `@vercel/analytics` in `app/layout.tsx`.
- **No Supabase/auth API in `package.json`** — do not assume TOTL dashboards, RLS, or `@supabase/*` unless the user adds them.

## Constants and CTAs

- **Single source** for phone, emails, Calendly, RealScout, Google reviews, partners, and resource links: **`lib/m2m-site.ts`**.
- New external links or copy changes that affect URLs should **update that file** (or a dedicated constant module) so Contact / Hero / Footer stay consistent.
- Phone display: `M2M_PHONE_DISPLAY`; `href`: **`M2M_PHONE_HREF`** (`tel:+17572062859`).

## Images

- Prefer **`next/image`** for content images. Remote hosts must appear in **`next.config.mjs`** → `images.remotePatterns`.
- **`images.unoptimized: true`** is set; still use `Image` for ESLint alignment and consistent APIs.

## Tooling

- **Package manager**: **npm** only; keep a single lockfile (`package-lock.json`). Do not reintroduce `pnpm-lock.yaml` unless the team standardizes on pnpm everywhere.
- Before merging substantial changes: **`npm run ci`** (lint, placeholder test, typecheck, build).
- **ESLint**: `eslint.config.mjs` uses `eslint-config-next/core-web-vitals` (flat config). Do not add legacy `.eslintrc`.

## Code style

- Match existing file patterns: `"use client"` only where needed; keep presentational structure consistent with neighboring components.
- Prefer small, focused diffs; avoid renaming or refactors outside the task.

## Documentation

- **Work queue and next steps**: `docs/WORK_ORDER.md`.
- **Index**: `docs/DOCUMENTATION.md`.

## Deeper reference

- Repo-specific commands, anti-patterns, and partnership URL list: [conventions.md](conventions.md).
