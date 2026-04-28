import Link from "next/link"
import { BookOpen, Calculator, Handshake, MessageCircle } from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"

import { FEATURES_CTA_STRIP, FEATURES_GRID } from "./content"

const featureIcons = {
  book: BookOpen,
  handshake: Handshake,
  message: MessageCircle,
  calculator: Calculator,
} as const

export function FhaFeatures() {
  return (
    <section className="bg-m2m-panel text-m2m-cream" aria-labelledby="fha-features-heading">
      <M2mContainer className="max-w-6xl py-16 lg:py-24">
        <h2 id="fha-features-heading" className="sr-only">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {FEATURES_GRID.map((f) => {
            const Icon = featureIcons[f.icon]
            return (
              <article key={f.key} className="flex gap-5">
                <div className="flex-shrink-0 text-m2m-gold-lt">
                  <Icon className="h-9 w-9" strokeWidth={1.15} aria-hidden />
                </div>
                <div>
                  <h3
                    className="mb-3 text-xl font-semibold text-m2m-gold-lt sm:text-[1.35rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-m2m-cream/88" style={{ fontFamily: "var(--font-sans)" }}>
                    {f.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </M2mContainer>

      <div className="border-t border-m2m-gold/15 bg-m2m-deep/90">
        <M2mContainer className="max-w-3xl py-12 text-center lg:py-14">
          <p
            className="mb-8 text-lg font-medium leading-snug text-m2m-cream sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {FEATURES_CTA_STRIP.headline}
          </p>
          <Link
            href={FEATURES_CTA_STRIP.buttonHref}
            className="inline-flex border border-m2m-cream/90 px-10 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-m2m-cream transition hover:bg-m2m-cream/10"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {FEATURES_CTA_STRIP.buttonLabel}
          </Link>
        </M2mContainer>
      </div>
    </section>
  )
}
