# MVP status & roadmap

## Done (this phase)

- **P0 — Wix parity shell:** Header/footer CTAs, home section order, `/contact-us`, `/our-team`, valuation page, policy stubs, agent profiles, shared URLs in `lib/m2m-site.ts`.
- **P0 — Ship hygiene:** ESLint 9 flat config (`eslint.config.mjs` + `eslint-config-next`), placeholder `npm test`, `npm run ci` includes lint + test + typecheck + build.

## Next

- **P0:** QA pass using `docs/WIX_PARITY_CHECKLIST.md` (desktop + mobile screenshots).
- **P1:** Replace placeholder test script with real unit/e2e tests when coverage is defined.
- **P1:** Resolve **single** package manager lockfile in CI (see troubleshooting: pnpm vs npm + Next lockfile patch).

## References

- Spec: `docs/marching2more/M2M_SITE_REBUILD_SPEC.md`
- External URLs: `docs/CONTENT_SOURCES.md`
