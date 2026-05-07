import { M2mContainer } from "@/components/m2m-layout"

import { HOW_WE_HELP } from "./content"

export function PreForeclosureHowWeHelp() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="pre-foreclosure-how-heading">
      <M2mContainer>
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {HOW_WE_HELP.eyebrow}
        </p>
        <h2
          id="pre-foreclosure-how-heading"
          className="max-w-3xl text-balance text-3xl font-light text-m2m-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HOW_WE_HELP.title}
        </h2>
        <ul className="mt-12 max-w-3xl space-y-6">
          {HOW_WE_HELP.items.map((item) => (
            <li key={item.title} className="border-b border-m2m-gold/15 pb-6 last:border-0">
              <h3 className="text-lg font-medium text-m2m-cream" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-m2m-cream/82 font-sans">{item.body}</p>
            </li>
          ))}
        </ul>
      </M2mContainer>
    </section>
  )
}
