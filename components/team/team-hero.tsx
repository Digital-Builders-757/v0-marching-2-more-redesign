import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function TeamHero() {
  return (
    <section
      className="relative min-h-[min(52vh,560px)] overflow-hidden pt-24 pb-14 sm:min-h-[min(48vh,520px)] sm:pt-28 sm:pb-16"
    >
      {/* Background image — wide group shot: bias upward so faces stay in frame above copy */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={M2M_MEDIA.teamPhotoWide}
          alt=""
          fill
          priority
          className="object-cover object-[center_22%] sm:object-[center_26%]"
          sizes="100vw"
        />
      </div>
      {/* Readable overlay — photo-forward */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,13,6,0.45) 0%, rgba(5,13,6,0.52) 50%, rgba(5,13,6,0.58) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <M2mContainer className="relative z-10 max-w-5xl text-center">
        {/* Kicker */}
        <p 
          className="mb-8 inline-flex items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block h-px w-12 bg-m2m-gold" aria-hidden />
          Meet Your Team
          <span className="block h-px w-12 bg-m2m-gold" aria-hidden />
        </p>

        {/* Headline */}
        <h1 
          className="font-light italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-cream mb-8 [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Serving with integrity.<br />
          Leading with experience.
        </h1>

        {/* Subtitle */}
        <p 
          className="text-base leading-relaxed text-m2m-cream/93 max-w-3xl mx-auto [text-shadow:0_1px_2px_rgba(5,13,6,0.35)]"
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
