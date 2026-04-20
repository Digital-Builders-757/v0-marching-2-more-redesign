import Image from "next/image"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"

import {
  HERO_BACKGROUND,
  HERO_CTA_LABEL,
  HERO_HEADLINE,
  HERO_SUBHEAD,
  SIGNUP_SECTION_ID,
} from "./content"

export function PreForeclosureHero() {
  return (
    <section
      className="relative min-h-[min(82vh,760px)] w-full"
      aria-labelledby="pre-foreclosure-hero-heading"
    >
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_35%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/88 via-m2m-deep/35 to-m2m-panel/50" />

      <M2mContainer className="relative z-10 flex min-h-[min(82vh,760px)] max-w-4xl flex-col items-center justify-center py-24 text-center">
        <h1
          id="pre-foreclosure-hero-heading"
          className="text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.15] tracking-tight text-m2m-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_HEADLINE}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-m2m-cream/92 sm:text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_SUBHEAD}
        </p>
        <div className="mt-10 w-full max-w-md sm:max-w-xs">
          <Link
            href={`#${SIGNUP_SECTION_ID}`}
            className="inline-flex min-h-12 w-full items-center justify-center bg-m2m-panel px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-cream ring-1 ring-m2m-cream/40 transition hover:bg-m2m-panel-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {HERO_CTA_LABEL}
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
