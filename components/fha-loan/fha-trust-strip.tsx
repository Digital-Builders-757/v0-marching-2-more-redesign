import { M2mContainer } from "@/components/m2m-layout"

import { TRUST_STRIP_ITEMS } from "./content"

export function FhaTrustStrip() {
  return (
    <section className="border-b border-m2m-deep/8 bg-m2m-cream/80 py-14 sm:py-16" aria-label="Why buyers choose this path">
      <M2mContainer>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {TRUST_STRIP_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-l-2 border-m2m-gold/55 pl-5">
              <h2 className="text-sm font-semibold text-m2m-deep font-nav">{item.title}</h2>
              <p className="text-sm leading-relaxed text-m2m-deep/78 font-sans">{item.body}</p>
            </div>
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}
