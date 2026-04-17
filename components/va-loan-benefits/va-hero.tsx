import Image from "next/image"

import { HERO_BACKGROUND, HERO_KICKER, HERO_TITLE } from "./content"

export function VaHero() {
  return (
    <section
      className="relative min-h-[min(80vh,720px)] w-full"
      aria-labelledby="va-hero-heading"
    >
      <Image
        src={HERO_BACKGROUND}
        alt=""
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-m2m-panel/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-m2m-deep/82 via-m2m-deep/20 to-m2m-panel/45" />

      <div className="relative z-10 mx-auto flex min-h-[min(80vh,720px)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p
          className="text-[clamp(1.15rem,2.8vw,1.5rem)] font-medium tracking-wide text-m2m-cream/95"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_KICKER}
        </p>
        <h1
          id="va-hero-heading"
          className="mt-4 text-[clamp(2.5rem,8vw,4.25rem)] font-semibold leading-none tracking-[0.08em] text-m2m-cream [text-shadow:0_2px_32px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {HERO_TITLE}
        </h1>
      </div>
    </section>
  )
}
