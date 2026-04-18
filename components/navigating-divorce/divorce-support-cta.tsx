import { M2mContainer, M2mSection } from "@/components/m2m-layout"

import { SUPPORT_PARAGRAPH } from "./content"

export function DivorceSupportCta() {
  return (
    <M2mSection variant="panel" className="border-b border-m2m-gold/15 py-16 lg:py-20">
      <M2mContainer className="max-w-3xl text-center">
        <p
          className="mb-10 text-lg leading-relaxed text-m2m-cream/95 sm:text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {SUPPORT_PARAGRAPH}
        </p>
        <a
          href="#guide-form"
          className="inline-flex border border-m2m-cream/90 px-10 py-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-m2m-cream transition hover:bg-m2m-cream/10"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Get Your Free Guide
        </a>
      </M2mContainer>
    </M2mSection>
  )
}
