import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import {
  HERO_FEATURE_OVERLAY_LINE_1,
  HERO_FEATURE_OVERLAY_LINE_2,
  HERO_HEADLINE,
  HERO_IMAGE_CENTER,
  HERO_IMAGE_LEFT,
  HERO_IMAGE_RIGHT,
  HERO_TEXT_CARD,
} from "./content"

export function CreditHero() {
  return (
    <section
      className="border-b border-m2m-gold/15 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24"
      aria-labelledby="credit-hero-heading"
    >
      <M2mContainer>
        <h1
          id="credit-hero-heading"
          className="mx-auto mb-12 max-w-4xl text-center text-[clamp(1.85rem,4.2vw,3.25rem)] font-medium leading-[1.18] tracking-tight text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_HEADLINE}
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Card 1 — image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-m2m-deep/40 ring-1 ring-m2m-gold/20 lg:aspect-auto lg:min-h-[22rem]">
            <Image
              src={HERO_IMAGE_LEFT}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 25vw"
            />
          </div>

          {/* Card 2 — feature + overlay */}
          <div className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-white ring-1 ring-m2m-gold/25 lg:aspect-auto lg:min-h-[22rem]">
            <Image
              src={HERO_IMAGE_CENTER}
              alt="A couple celebrating a homebuying milestone after improving their credit"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width:1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/12 to-transparent" />
            <div className="relative z-10 p-5 sm:p-6">
              <p
                className="text-lg italic leading-snug text-m2m-cream sm:text-xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {HERO_FEATURE_OVERLAY_LINE_1}
              </p>
              <p
                className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {HERO_FEATURE_OVERLAY_LINE_2}
              </p>
            </div>
          </div>

          {/* Card 3 — text */}
          <div className="flex aspect-[3/4] flex-col justify-center bg-m2m-cream p-6 text-m2m-deep ring-1 ring-m2m-gold/20 lg:col-span-1 lg:aspect-auto lg:min-h-[22rem] lg:p-7">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-m2m-panel"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {HERO_TEXT_CARD.kicker}
            </p>
            <p
              className="mt-2 text-xl italic leading-tight text-m2m-gold-dim sm:text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {HERO_TEXT_CARD.scriptLine}
            </p>
            <div className="mt-5 space-y-3 border-t border-m2m-gold/25 pt-5">
              {HERO_TEXT_CARD.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-sm leading-relaxed text-m2m-deep/90"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Card 4 — image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-m2m-deep/40 ring-1 ring-m2m-gold/20 lg:aspect-auto lg:min-h-[22rem]">
            <Image
              src={HERO_IMAGE_RIGHT}
              alt=""
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width:1024px) 100vw, 25vw"
            />
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
