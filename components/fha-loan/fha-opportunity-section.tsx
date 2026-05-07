import { M2mContainer } from "@/components/m2m-layout"

import { OPPORTUNITY_SECTION } from "./content"

export function FhaOpportunitySection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="fha-opportunity-heading"
    >
      <M2mContainer className="max-w-3xl">
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {OPPORTUNITY_SECTION.eyebrow}
        </p>
        <h2
          id="fha-opportunity-heading"
          className="text-balance text-3xl font-light text-m2m-deep sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {OPPORTUNITY_SECTION.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-m2m-deep/85 font-sans">{OPPORTUNITY_SECTION.lead}</p>
        <ul className="mt-8 space-y-5 border-t border-m2m-deep/10 pt-8">
          {OPPORTUNITY_SECTION.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-base leading-relaxed text-m2m-deep/88 font-sans">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-m2m-gold" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm italic leading-relaxed text-m2m-deep/65 font-sans">
          {OPPORTUNITY_SECTION.disclaimer}
        </p>
      </M2mContainer>
    </section>
  )
}
