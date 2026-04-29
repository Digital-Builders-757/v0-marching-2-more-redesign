import { M2mContainer, M2mSection } from "@/components/m2m-layout"

import { NUMBERED_TOPICS } from "./content"

export function DivorceNumberedTopics() {
  return (
    <M2mSection variant="panel" className="border-b border-m2m-gold/15 py-20 lg:py-28">
      <M2mContainer className="max-w-6xl">
        <p
          className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Key Considerations
        </p>
        <h2
          className="mb-5 text-balance text-center text-[clamp(1.75rem,3.5vw,2.65rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What You Should Know
        </h2>
        <div className="mx-auto mb-16 h-px w-16 bg-m2m-gold/60" aria-hidden />

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {NUMBERED_TOPICS.map((item) => (
            <article key={item.n} className="relative text-center lg:text-left">
              <div className="mb-5 flex flex-col items-center gap-2 lg:flex-row lg:items-baseline lg:gap-4">
                <span
                  className="text-[3.5rem] font-medium leading-none text-m2m-gold/80 lg:text-[3.75rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.n}
                </span>
                <h3
                  className="max-w-[14rem] text-xl font-semibold leading-tight text-m2m-cream lg:text-[1.35rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
