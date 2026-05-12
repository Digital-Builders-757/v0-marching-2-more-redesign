import Image from "next/image"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { getConsultationRequestUrl } from "@/lib/m2m-site"

import {
  HERO_BACKGROUND,
  HERO_HEADLINE,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
  HERO_SUBLINE,
} from "./content"

export function FhaHero() {
  const consultationHref = getConsultationRequestUrl()

  return (
    <section className="relative min-h-[min(88vh,760px)] w-full" aria-labelledby="fha-hero-heading">
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_38%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/70 via-m2m-deep/14 to-m2m-deep/32" />

      <M2mContainer className="relative z-10 flex min-h-[min(88vh,760px)] flex-col items-center justify-center gap-10 px-4 py-20 sm:gap-12 sm:py-24">
        <div className="max-w-4xl text-center">
          <p
            className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold-lt sm:text-[0.7rem]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            FHA buyers · Hampton Roads
          </p>
          <h1
            id="fha-hero-heading"
            className="text-balance text-[clamp(2rem,5.5vw,3.65rem)] font-medium leading-[1.12] tracking-tight text-m2m-cream [text-shadow:0_2px_32px_rgba(0,0,0,0.45)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {HERO_HEADLINE}
          </h1>
          <p
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-m2m-cream/92 sm:text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {HERO_SUBLINE}
          </p>
          <div className="mx-auto mt-11 flex w-full max-w-lg flex-col gap-3 sm:max-w-2xl sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href={consultationHref}
              data-m2m-track="fha_hero_book"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-m2m-gold px-8 py-3.5 text-center text-sm font-semibold text-m2m-deep shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition hover:bg-m2m-gold-lt sm:min-h-[3.25rem] sm:text-[0.95rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {HERO_PRIMARY_CTA}
            </Link>
            <Link
              href="#fha-buyer-quiz"
              data-m2m-track="fha_hero_quiz"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-m2m-cream/55 bg-m2m-deep/25 px-8 py-3.5 text-center text-sm font-semibold text-m2m-cream backdrop-blur-[2px] transition hover:border-m2m-cream hover:bg-m2m-deep/40 sm:min-h-[3.25rem] sm:text-[0.95rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {HERO_SECONDARY_CTA}
            </Link>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
