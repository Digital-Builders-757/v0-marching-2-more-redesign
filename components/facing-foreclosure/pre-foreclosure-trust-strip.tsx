import { M2mContainer } from "@/components/m2m-layout"

import { TRUST_STRIP_ITEMS } from "./content"

export function PreForeclosureTrustStrip() {
  return (
    <section className="border-b border-m2m-gold/12 bg-m2m-deep/35 py-12 sm:py-14" aria-label="Trust highlights">
      <M2mContainer>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {TRUST_STRIP_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-l-2 border-m2m-gold/45 pl-4">
              <h2 className="text-sm font-semibold text-m2m-cream font-nav">{item.title}</h2>
              <p className="text-sm leading-relaxed text-m2m-cream/78 font-sans">{item.body}</p>
            </div>
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}
