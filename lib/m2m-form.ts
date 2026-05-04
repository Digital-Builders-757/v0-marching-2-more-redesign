import { cn } from "@/lib/utils"

/**
 * Interior / CRM lead surfaces: shared field + submit sizing for touch and contrast.
 * Primary submit: panel on light (`m2mFormPrimaryButtonOnLight`), gold on dark panel (`m2mFormPrimaryButtonOnDarkPanel`).
 * Shadcn `Button variant="m2mPanel"` on contact aligns via `m2mFormSubmitShadcnPanelEnhance`.
 */
export const m2mLeadFieldLabelClass =
  "mb-1.5 block text-left text-xs font-medium uppercase tracking-[0.1em] text-m2m-deep/75 font-nav sm:text-[0.7rem] sm:tracking-[0.12em]"

/** Inputs on light cards — comfortable tap targets on mobile. */
export const m2mLeadFieldInputClass =
  "min-h-12 w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-3 text-base text-m2m-deep shadow-xs outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-panel focus-visible:ring-[3px] focus-visible:ring-m2m-panel/25 md:min-h-11 md:text-sm"

export const m2mLeadFieldTextareaClass = cn(m2mLeadFieldInputClass, "min-h-[8rem] resize-y py-3")

/** Minimal underline fields (credit playbook card). */
export const m2mPlaybookFieldLabelClass =
  "mb-1 block text-xs font-medium text-m2m-deep/80 font-sans"

export const m2mPlaybookInputClass =
  "min-h-12 w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-base text-m2m-deep outline-none transition focus-visible:border-m2m-panel focus-visible:ring-0 md:min-h-11 md:text-sm font-sans"

/** Interior pages on white / light backgrounds (contact, resources hero form). */
export const m2mInteriorFormInputClass =
  "min-h-12 w-full rounded-md border border-m2m-deep/12 bg-m2m-cream/40 px-4 py-3 text-base text-m2m-deep shadow-xs outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-panel focus-visible:ring-[3px] focus-visible:ring-m2m-panel/20 md:min-h-11 md:text-sm font-sans"

export const m2mInteriorFormTextareaClass = cn(
  m2mInteriorFormInputClass,
  "min-h-[8rem] resize-y",
)

/** CMA / long hero forms on photography — high readability on warm white. */
export const m2mCmaFormInputClass =
  "min-h-12 w-full rounded-md border border-m2m-deep/20 bg-white px-4 py-3 text-base text-m2m-deep shadow-xs outline-none transition placeholder:text-m2m-deep/45 focus-visible:border-m2m-panel focus-visible:ring-[3px] focus-visible:ring-m2m-panel/25 md:min-h-11 md:text-sm font-sans"

export const m2mCmaFormTextareaClass = cn(m2mCmaFormInputClass, "min-h-[8rem] resize-y")

/** Dark panel card (e.g. sell page valuation request). */
export const m2mDarkPanelFieldLabelClass =
  "mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold font-nav"

export const m2mDarkPanelInputClass =
  "min-h-12 w-full rounded-lg border border-m2m-gold/20 bg-black/20 px-4 py-3 text-base text-m2m-cream outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-gold focus-visible:ring-2 focus-visible:ring-m2m-gold/30 md:min-h-11 md:text-sm font-sans"

/** Full-width primary submit on light / interior forms (e.g. buy lead mini, CTA card on white). */
export const m2mFormPrimaryButtonOnLight = cn(
  "w-full min-h-12 touch-manipulation rounded-md",
  "bg-m2m-deep text-m2m-cream",
  "px-8 py-4 text-[0.7rem] font-medium font-nav uppercase tracking-[0.2em]",
  "shadow-sm transition hover:bg-m2m-deep/90 active:scale-[0.99]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-panel focus-visible:ring-offset-2 focus-visible:ring-offset-m2m-cream",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
)

/** Full-width gold primary on dark green panels (e.g. sell valuation lead mini). */
export const m2mFormPrimaryButtonOnDarkPanel = cn(
  "w-full min-h-12 touch-manipulation rounded-md",
  "bg-m2m-gold text-m2m-deep",
  "py-3 text-[0.65rem] font-medium font-nav uppercase tracking-[0.2em]",
  "shadow-sm transition hover:bg-m2m-gold-lt active:scale-[0.99]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold-lt focus-visible:ring-offset-2 focus-visible:ring-offset-m2m-panel/90",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
)

/**
 * Merged with shadcn `Button variant="m2mPanel"` on light backgrounds (e.g. contact page).
 * Keeps CVA styles; adds stronger focus ring, tap target, and active feedback.
 */
export const m2mFormSubmitShadcnPanelEnhance = cn(
  "w-full !h-auto !rounded-md min-h-12 touch-manipulation active:scale-[0.99]",
  "focus-visible:ring-2 focus-visible:ring-m2m-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-m2m-cream/80",
)
