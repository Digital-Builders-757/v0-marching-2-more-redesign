import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"

import { DIVORCE_HERO_BACKGROUND } from "./content"

export function DivorceHero() {
  return (
    <section
      className="relative min-h-[min(70vh,600px)] w-full"
      aria-labelledby="divorce-hero-heading"
    >
      <Image
        src={DIVORCE_HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/60 via-m2m-deep/20 to-m2m-panel/30" />

      <M2mContainer className="relative z-10 flex min-h-[min(70vh,600px)] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:py-24">
        <h1
          id="divorce-hero-heading"
          className="text-m2m-cream text-[clamp(1.75rem,4.5vw,3rem)] font-medium leading-[1.2] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Claim Your Free &apos;Divorce &amp; Real Estate&apos; Guide Now!
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-m2m-cream/90 sm:text-lg"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Expert guidance for navigating property decisions during divorce with calm support and clarity.
        </p>
      </M2mContainer>
    </section>
  )
}
