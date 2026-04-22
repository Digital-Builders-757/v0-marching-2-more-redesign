import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import { HERO_BACKGROUND, HERO_HEADLINE } from "./content"

export function FhaHero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] w-full" aria-labelledby="fha-hero-heading">
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_20%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/62 via-m2m-deep/12 to-m2m-deep/28" />

      <M2mContainer className="relative z-10 flex min-h-[min(85vh,720px)] items-center justify-center px-4 py-20 sm:py-24">
        <h1
          id="fha-hero-heading"
          className="max-w-4xl text-center text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.15] tracking-tight text-m2m-cream [text-shadow:0_2px_32px_rgba(0,0,0,0.45)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_HEADLINE}
        </h1>
      </M2mContainer>
    </section>
  )
}
