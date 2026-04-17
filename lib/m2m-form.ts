import { cn } from "@/lib/utils"

/** Labels on light cream/white cards (campaign lead forms). */
export const m2mLeadFieldLabelClass =
  "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-deep/75 font-nav"

/** Inputs on light cards — comfortable tap targets on mobile. */
export const m2mLeadFieldInputClass =
  "min-h-11 w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-3 text-base text-m2m-deep shadow-xs outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-panel focus-visible:ring-[3px] focus-visible:ring-m2m-panel/25 md:text-sm"

export const m2mLeadFieldTextareaClass = cn(m2mLeadFieldInputClass, "min-h-[8rem] resize-y py-3")

/** Minimal underline fields (credit playbook card). */
export const m2mPlaybookFieldLabelClass =
  "mb-1 block text-xs font-medium text-m2m-deep/80 font-sans"

export const m2mPlaybookInputClass =
  "min-h-11 w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-sm text-m2m-deep outline-none transition focus-visible:border-m2m-panel focus-visible:ring-0 font-sans"

/** Interior pages on white / light backgrounds (contact, resources hero form). */
export const m2mInteriorFormInputClass =
  "min-h-11 w-full rounded-md border border-m2m-deep/12 bg-m2m-cream/40 px-4 py-3 text-base text-m2m-deep shadow-xs outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-panel focus-visible:ring-[3px] focus-visible:ring-m2m-panel/20 md:text-sm font-sans"

export const m2mInteriorFormTextareaClass = cn(
  m2mInteriorFormInputClass,
  "min-h-[8rem] resize-y",
)

/** Dark panel card (e.g. sell page valuation request). */
export const m2mDarkPanelFieldLabelClass =
  "mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold font-nav"

export const m2mDarkPanelInputClass =
  "min-h-11 w-full rounded-lg border border-m2m-gold/20 bg-black/20 px-4 py-3 text-sm text-m2m-cream outline-none transition placeholder:text-m2m-muted focus-visible:border-m2m-gold focus-visible:ring-2 focus-visible:ring-m2m-gold/30 font-sans"
