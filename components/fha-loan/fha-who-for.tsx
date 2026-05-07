import { M2mContainer } from "@/components/m2m-layout"

import { WHO_THIS_IS_FOR } from "./content"

export function FhaWhoFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="fha-who-heading">
      <M2mContainer className="max-w-3xl">
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {WHO_THIS_IS_FOR.eyebrow}
        </p>
        <h2
          id="fha-who-heading"
          className="text-balance text-3xl font-light text-m2m-deep sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {WHO_THIS_IS_FOR.title}
        </h2>
        <ul className="mt-10 space-y-4">
          {WHO_THIS_IS_FOR.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-m2m-deep/8 pb-4 text-base leading-relaxed text-m2m-deep/88 font-sans last:border-0"
            >
              <span className="font-medium text-m2m-gold">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </M2mContainer>
    </section>
  )
}
