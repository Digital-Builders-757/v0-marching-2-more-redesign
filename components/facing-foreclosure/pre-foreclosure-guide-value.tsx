import { M2mContainer } from "@/components/m2m-layout"

import { GUIDE_VALUE_BULLETS, GUIDE_VALUE_EYEBROW, GUIDE_VALUE_LEAD, GUIDE_VALUE_TITLE } from "./content"

export function PreForeclosureGuideValue() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="pre-foreclosure-guide-value-heading">
      <M2mContainer className="max-w-3xl">
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {GUIDE_VALUE_EYEBROW}
        </p>
        <h2
          id="pre-foreclosure-guide-value-heading"
          className="text-balance text-3xl font-light text-m2m-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {GUIDE_VALUE_TITLE}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-m2m-cream/88 font-sans">{GUIDE_VALUE_LEAD}</p>
        <ul className="mt-10 space-y-4 border-t border-m2m-gold/15 pt-10">
          {GUIDE_VALUE_BULLETS.map((b) => (
            <li key={b} className="flex gap-3 text-base leading-relaxed text-m2m-cream/86 font-sans">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-m2m-gold" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </M2mContainer>
    </section>
  )
}
