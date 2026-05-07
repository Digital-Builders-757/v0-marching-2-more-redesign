import { M2mContainer } from "@/components/m2m-layout"

import { HOW_WE_HELP } from "./content"

export function FhaHowWeHelp() {
  return (
    <section className="border-t border-m2m-gold/12 bg-m2m-deep/[0.03] py-16 sm:py-20 lg:py-24" aria-labelledby="fha-how-heading">
      <M2mContainer>
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {HOW_WE_HELP.eyebrow}
        </p>
        <h2
          id="fha-how-heading"
          className="max-w-3xl text-balance text-3xl font-light text-m2m-deep sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HOW_WE_HELP.title}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {HOW_WE_HELP.items.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-m2m-deep/10 bg-white p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-lg font-medium text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-m2m-deep/82 font-sans">{item.body}</p>
            </div>
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}
