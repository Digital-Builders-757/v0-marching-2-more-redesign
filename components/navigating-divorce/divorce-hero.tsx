import Image from "next/image"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"

import { DIVORCE_HERO_BACKGROUND } from "./content"

export function DivorceHero() {
  return (
    <M2mSection
      variant="panel"
      className="relative border-b border-m2m-gold/15 overflow-hidden py-16 sm:py-20 lg:py-28"
      aria-labelledby="divorce-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={DIVORCE_HERO_BACKGROUND}
          alt=""
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-m2m-panel/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-m2m-deep/50 via-m2m-panel/42 to-m2m-deep/65" />
      </div>

      <M2mContainer className="relative z-10 max-w-4xl text-center">
        <h1
          id="divorce-hero-heading"
          className="text-m2m-cream text-[clamp(1.75rem,4.5vw,3rem)] font-medium leading-[1.2] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Claim Your Free &apos;Divorce &amp; Real Estate&apos; Guide Now!
        </h1>
      </M2mContainer>
    </M2mSection>
  )
}
