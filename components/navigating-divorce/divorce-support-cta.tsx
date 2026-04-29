import { M2mContainer, M2mSection } from "@/components/m2m-layout"

import { SUPPORT_PARAGRAPH } from "./content"

export function DivorceSupportCta() {
  return (
    <M2mSection variant="panel" className="border-b border-m2m-gold/15 py-20 lg:py-24">
      <M2mContainer className="max-w-3xl text-center">
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          What&apos;s Inside
        </p>
        <p
          className="mb-10 text-pretty text-lg leading-relaxed text-m2m-cream/95 sm:text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {SUPPORT_PARAGRAPH}
        </p>
        <a
          href="#guide-form"
          className="inline-flex min-h-[52px] items-center justify-center bg-m2m-gold px-10 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-deep shadow-[0_8px_24px_rgba(205,176,95,0.25)] transition hover:bg-m2m-gold-lt"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Get Your Free Guide
        </a>
      </M2mContainer>
    </M2mSection>
  )
}
