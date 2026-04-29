import Image from "next/image"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"

import {
  DOWNSIZING_GUIDE_SECTION_ID,
  HERO_BACKGROUND,
  HERO_BODY,
  HERO_CTA_LABEL,
  HERO_HEADLINE,
} from "./content"

export function DownsizingHero() {
  return (
    <section
      className="relative min-h-[min(78vh,680px)] w-full"
      aria-labelledby="downsizing-hero-heading"
    >
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_35%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/52" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/68 via-m2m-deep/18 to-m2m-panel/42" />

      <M2mContainer className="relative z-10 flex min-h-[min(78vh,680px)] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:py-24">
        <p
          className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold-lt sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Free Downsizing Guide
        </p>
        <h1
          id="downsizing-hero-heading"
          className="text-balance text-[clamp(2rem,5vw,3.35rem)] font-medium leading-[1.12] tracking-tight text-m2m-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_HEADLINE}
        </h1>
        <p
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-m2m-cream/92 sm:text-lg"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {HERO_BODY}
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href={`#${DOWNSIZING_GUIDE_SECTION_ID}`}
            className="inline-flex min-h-[52px] w-full items-center justify-center bg-m2m-gold px-10 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-deep shadow-[0_8px_24px_rgba(205,176,95,0.25)] transition hover:bg-m2m-gold-lt sm:w-auto"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {HERO_CTA_LABEL}
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
