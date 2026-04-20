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
      <div className="absolute inset-0 bg-m2m-panel/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/85 via-m2m-deep/25 to-m2m-panel/50" />

      <M2mContainer className="relative z-10 flex min-h-[min(78vh,680px)] max-w-4xl flex-col items-center justify-center py-20 text-center lg:py-24">
        <h1
          id="downsizing-hero-heading"
          className="text-[clamp(2rem,5vw,3.35rem)] font-medium leading-[1.12] tracking-tight text-m2m-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_HEADLINE}
        </h1>
        <p
          className="mt-6 max-w-3xl text-base leading-relaxed text-m2m-cream/92 sm:text-lg"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {HERO_BODY}
        </p>
        <div className="mt-10 w-full max-w-md sm:max-w-none">
          <Link
            href={`#${DOWNSIZING_GUIDE_SECTION_ID}`}
            className="inline-flex min-h-12 w-full items-center justify-center bg-m2m-panel px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-cream ring-1 ring-m2m-cream/35 transition hover:bg-m2m-panel-lt sm:w-auto"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {HERO_CTA_LABEL}
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
