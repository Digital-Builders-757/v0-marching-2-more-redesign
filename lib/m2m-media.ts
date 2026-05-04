/**
 * Production marketing imagery (Vercel Blob).
 * Prefer these over Unsplash in `next/image` and cards.
 *
 * Semantic campaign keys (divorceVaFhaCreditInvestor…) point at interim assets; swap the URL once
 * the matching shoot uploads — search this file only.
 */

const BLOB_BASE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

/** Core library — neutral product photography and headshots */
const CORE = {
  headshotDonavan: `${BLOB_BASE}/e81220_8e480009b082445c98c907867aaa4c9d~mv2-KalLf1y4zskbfQKC2EMe8s55rwTz3x.avif`,
  headshotRoger: `${BLOB_BASE}/Roger%20Lee%20copy-oGCmwJdfHIojKRd0KSU9KThUhCbtek.avif`,
  headshotKristin: `${BLOB_BASE}/DSC_0936-8_1-fP8OcW80aTTISgh6g9ONEXmaAKcPTO.avif`,
  /** Team/office — use until a dedicated headshot is uploaded. */
  teamPhotoWide: `${BLOB_BASE}/56d085e3a24effcebd880c3f6b20700c-b9nQPT49tOe3Bawn6ymNxBTkFMP2sW.jpg`,
  heroScreenshot: `${BLOB_BASE}/Screenshot%202026-04-03%20at%207.30.14%20PM-JVsmkDPrwryZHLk0Lm3Wqm4bAhGTc2.png`,
  buyHeroStill: `${BLOB_BASE}/-post-ai-image-8571-mvKDwg9ZGPGx8B8S6cFxpCIRAUDjk1.png`,
  sellHeroStill: `${BLOB_BASE}/-post-ai-image-7353.png-XuugaQAYYKTeQCH48KchTJCafF1MW6.jpeg`,
  familyBackyard: `${BLOB_BASE}/Family%20backyard-A4xyD0dmvycOgFVMeTBrduH5GxteWt.jpg`,
  teamCtaBackdrop: `${BLOB_BASE}/-post-ai-image-27133-aZYalaatNlbIElZkfojf18mdv5IEpZ.png`,
  reviewsBackdrop: `${BLOB_BASE}/-post-ai-image-18606-aD4XAV7ezcKzf721bywZKhRSXzTIIw.png`,
  blogIndexBackdrop: `${BLOB_BASE}/-post-ai-image-27298-tXKCb2L8gZaxkWi49XwXGN6rmgkbLf.png`,
  contactHeroStill: `${BLOB_BASE}/-post-ai-image-72291.png-s80gDsDR2DizqJSBhQrT95yxOc2O01.jpeg`,
  partnersHeroStill: `${BLOB_BASE}/-post-ai-image-19289-VMjgEppbjmetIgqpoqeYogIoctYAr0.png`,
  partnersCtaStill: `${BLOB_BASE}/-post-ai-image-19388-jf99jfe9gtZUgHDymGUB60jS4Jvrd8.png`,
} as const

/** Campaign semantics: TODO(asset) in JSDoc = replace URL when bespoke photo is ready */
export const M2M_MEDIA = {
  ...CORE,

  /* --- `/navigating-divorce` — production art lives in `/images/divorce/` via `navigating-divorce/content.ts` (see docs/M2M_ASSET_MAP.md). Keys below kept as Blob fallbacks for other routes/tests. --- */
  /** Fallback only — route uses local PNGs */
  divorceHeroBackdrop: CORE.familyBackyard,
  /** Small crop — listing / transition stress → calm sale path */
  divorceCollageSellDuring: CORE.sellHeroStill,
  /** Tender family / human moment — distinct from sell panel */
  divorceCollageFamily: CORE.familyBackyard,
  /** Neutral interior — “home base” during transition */
  divorceCollageInterior: CORE.partnersCtaStill,
  /** Thoughtful paperwork / pause — softer than cliché courthouse stock */
  divorceCollageSymbolic: CORE.contactHeroStill,
  /** Full-bleed behind valuation steps — stable home equity mood */
  divorceValuationBackground: CORE.teamCtaBackdrop,
  /** Wide aerial / neighborhood — “new chapter” Hampton Roads context */
  divorceAerialBackground: CORE.blogIndexBackdrop,

  /* --- `/va-loan-benefits` — household + service trust --- */
  /** TODO(asset): Uniform optional, military family keys handoff; interim: stable family backyard */
  vaLoanHero: CORE.familyBackyard,
  /** TODO(asset): Service patch / partner still; interim: office trust corridor */
  vaLoanCtaBand: CORE.teamPhotoWide,

  /* --- `/fha-loan` — approachable guidance --- */
  /** TODO(asset): Agent + buyers at counter / kitchen table; interim: partnering still */
  fhaHero: CORE.partnersHeroStill,
  /** Behind quote form — warmth, no Unsplash; interim: suburban family goal */
  fhaQuoteBackdrop: CORE.familyBackyard,

  /* --- `/improve-your-credit` — momentum + confidence --- */
  creditHeroLeft: CORE.reviewsBackdrop,
  creditHeroCenter: CORE.teamPhotoWide,
  creditHeroRight: CORE.familyBackyard,
  creditEducationLarge: CORE.blogIndexBackdrop,
  creditHomeworkA: CORE.contactHeroStill,
  creditHomeworkB: CORE.sellHeroStill,
  creditHomeworkC: CORE.partnersCtaStill,
  creditTakeawaysBanner: CORE.teamCtaBackdrop,
  creditClosingBanner: CORE.familyBackyard,

  /* --- `/more-investments` carousel — lifestyles + outcomes; keep slides visually distinct --- */
  investorCarouselIntroCenter: CORE.buyHeroStill,
  investorCarouselFixFlipTop: CORE.sellHeroStill,
  investorCarouselFixFlipCollageLeft: CORE.partnersHeroStill,
  investorCarouselFixFlipCollageRight: CORE.familyBackyard,
  investorCarouselMultifamilyUpper: CORE.teamCtaBackdrop,
  investorCarouselMultifamilyLower: CORE.reviewsBackdrop,
  investorCarouselShortTermTop: CORE.blogIndexBackdrop,
  investorCarouselShortTermMain: CORE.partnersCtaStill,
} as const
