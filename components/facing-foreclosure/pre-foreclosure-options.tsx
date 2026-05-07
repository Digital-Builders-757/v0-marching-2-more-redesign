import { M2mContainer } from "@/components/m2m-layout"

import { OPTIONS_SECTION } from "./content"

export function PreForeclosureOptions() {
  return (
    <section className="border-t border-m2m-gold/12 bg-m2m-deep/25 py-16 sm:py-20 lg:py-24" aria-labelledby="pre-foreclosure-options-heading">
      <M2mContainer>
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {OPTIONS_SECTION.eyebrow}
        </p>
        <h2
          id="pre-foreclosure-options-heading"
          className="max-w-3xl text-balance text-3xl font-light text-m2m-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {OPTIONS_SECTION.title}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-m2m-cream/85 font-sans sm:text-lg">
          {OPTIONS_SECTION.lead}
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {OPTIONS_SECTION.items.map((item) => (
            <div key={item.title} className="rounded-sm border border-m2m-gold/20 bg-m2m-deep/30 p-6 sm:p-7">
              <h3 className="text-lg font-medium text-m2m-cream" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-m2m-cream/80 font-sans">{item.body}</p>
            </div>
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}
