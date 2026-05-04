/**
 * Stable `data-testid` hooks for funnel pages — used by Playwright and documented in
 * docs/M2M_FUNNEL_SMOKE_CHECKLIST.md. Keep paths aligned with `app/<segment>/page.tsx`.
 */
export const M2M_FUNNEL_PAGE_TESTIDS = {
  "/facing-foreclosure": "m2m-page-facing-foreclosure",
  "/navigating-divorce": "m2m-page-navigating-divorce",
  "/downsizing-your-home": "m2m-page-downsizing-your-home",
  "/improve-your-credit": "m2m-page-improve-your-credit",
  "/fha-loan": "m2m-page-fha-loan",
  "/more-investments": "m2m-page-more-investments",
} as const

export type M2mFunnelRegressionPath = keyof typeof M2M_FUNNEL_PAGE_TESTIDS

export const M2M_FUNNEL_REGRESSION_PATHS = Object.keys(M2M_FUNNEL_PAGE_TESTIDS) as M2mFunnelRegressionPath[]
