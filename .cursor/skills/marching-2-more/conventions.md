# Marching 2 More — conventions reference

## Commands

```bash
npm install
npm run dev
npm run ci
```

## `lib/m2m-site.ts` (high level)

- `M2M_PHONE_*`, `M2M_EMAIL_*`, `M2M_ADDRESS_LINES`
- `CALENDLY_BOOK_URL`, `REALSCOUT_*`, `GOOGLE_REVIEW_URL`
- `mailtoNeedsHelp()`, `PARTNER_LINKS`, `RESOURCE_EXTERNAL_LINKS`

If you add a new image CDN host, update **`next.config.mjs`** `images.remotePatterns`.

## Avoid

- Assuming **Supabase**, **middleware auth**, or **talent/client dashboards** — this repo is currently a **marketing site**.
- **`select('*')`** and RLS talk unless a database layer exists in the project.
- Adding a second lockfile without team agreement (breaks Next lockfile patching on Windows CI).

## v0

- The repo may receive pushes from v0; treat `README.md` as the link to the v0 project for design iteration.
