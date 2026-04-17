import Image from "next/image"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"

import {
  CTA_BANNER_BACKGROUND,
  CTA_BANNER_BUTTON,
  CTA_BANNER_HEADLINE,
  VA_LEAD_SECTION_ID,
} from "./content"

export function VaCtaBanner() {
  return (
    <section
      className="relative min-h-[280px] w-full sm:min-h-[340px] lg:min-h-[400px]"
      aria-labelledby="va-cta-banner-heading"
    >
      <Image
        src={CTA_BANNER_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-m2m-deep/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/80 via-transparent to-m2m-deep/40" />

      <M2mContainer className="relative z-10 flex min-h-[280px] flex-col items-center justify-center py-16 text-center sm:min-h-[340px] sm:py-20 lg:min-h-[400px]">
        <h2
          id="va-cta-banner-heading"
          className="max-w-xl text-2xl font-semibold leading-snug text-m2m-cream sm:text-3xl lg:text-[2rem]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {CTA_BANNER_HEADLINE}
        </h2>
        <div className="mt-8">
          <Link
            href={`#${VA_LEAD_SECTION_ID}`}
            className="inline-flex min-h-12 min-w-[7.5rem] items-center justify-center bg-m2m-gold px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-m2m-deep shadow-lg transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {CTA_BANNER_BUTTON}
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
