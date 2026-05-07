"use client"

import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import {
  HERO_BACKGROUND,
  HERO_HEADLINE,
  HERO_REASSURANCE,
  HERO_SUBHEAD,
  SIGNUP_SECTION_ID,
} from "@/components/facing-foreclosure/content"
import { PreForeclosureUnifiedForm } from "@/components/facing-foreclosure/pre-foreclosure-form"

export function PreForeclosureHeroWithForm() {
  return (
    <section
      id={SIGNUP_SECTION_ID}
      className="relative scroll-mt-24"
      aria-labelledby="pre-foreclosure-hero-heading"
    >
      <div className="relative min-h-[min(100vh,920px)] w-full lg:min-h-[min(88vh,840px)]">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-m2m-panel/52" />
        <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/75 via-m2m-deep/35 to-m2m-panel/38" />

        <M2mContainer className="relative z-10 flex min-h-[min(100vh,920px)] max-w-6xl flex-col gap-12 px-4 py-16 sm:gap-14 sm:py-20 lg:min-h-[min(88vh,840px)] lg:flex-row lg:items-start lg:gap-14 lg:pb-24 lg:pt-20">
          <div className="max-w-xl flex-1 lg:max-w-lg lg:pt-4">
            <p
              className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold-lt sm:text-[0.68rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Virginia homeowners
            </p>
            <h1
              id="pre-foreclosure-hero-heading"
              className="text-balance text-[clamp(1.75rem,4.2vw,2.85rem)] font-medium leading-[1.12] tracking-tight text-m2m-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.38)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {HERO_HEADLINE}
            </h1>
            <p
              className="mt-6 text-base leading-relaxed text-m2m-cream/92 sm:text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {HERO_SUBHEAD}
            </p>
            <p
              className="mt-6 border-l-2 border-m2m-gold/60 pl-4 text-sm leading-relaxed text-m2m-cream/88 sm:text-[0.95rem]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {HERO_REASSURANCE}
            </p>
          </div>

          <div className="w-full shrink-0 lg:max-w-md xl:max-w-[420px]">
            <PreForeclosureUnifiedForm />
          </div>
        </M2mContainer>
      </div>
    </section>
  )
}
