import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function TeamHero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={M2M_MEDIA.teamPhotoWide}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Dark overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5, 13, 6, 0.75)" }}
      />

      {/* Content */}
      <M2mContainer className="relative max-w-5xl text-center">
        {/* Kicker */}
        <div 
          className="inline-flex items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-8"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-12 h-px bg-m2m-gold" />
          Meet Your Team
          <span className="block w-12 h-px bg-m2m-gold" />
        </div>

        {/* Headline */}
        <h1 
          className="font-light italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-cream mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Serving with integrity.<br />
          Leading with experience.
        </h1>

        {/* Subtitle */}
        <p 
          className="text-base leading-relaxed text-m2m-cream/80 max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Our unique balance of disciplined leadership, honed from military experience, combined with 
          our local market expertise and personalized care, ensures a real estate experience that is 
          seamless and feels effortless.
        </p>
      </M2mContainer>
    </section>
  )
}
