import Image from "next/image"

import { M2M_HEADER_AGENT_LINKS } from "@/lib/m2m-nav"

import { COLLAGE_IMAGES } from "./content"

export function DivorceGalleryCollage() {
  return (
    <section className="border-b border-m2m-gold/15 bg-m2m-panel" aria-label="Guide highlights">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Panel 1 — gold headline + image */}
        <div className="relative flex min-h-[280px] flex-col border-m2m-gold/20 sm:border-r lg:min-h-[380px]">
          <div className="relative z-10 flex flex-1 flex-col justify-between bg-gradient-to-b from-m2m-gold-dim/90 via-m2m-gold/80 to-m2m-gold-dim/95 px-5 py-8 lg:px-6">
            <p
              className="text-center text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.12em] text-m2m-deep sm:text-left lg:text-[0.72rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How To Sell{" "}
              <span className="block text-[1.05em] font-normal normal-case tracking-normal lg:inline">
                YOUR HOUSE DURING DIVORCE
              </span>
            </p>
            <div className="relative mt-6 h-28 overflow-hidden rounded-sm sm:h-32 lg:h-40">
              <Image
                src={COLLAGE_IMAGES.sellDuringDivorce}
                alt=""
                fill
                className="object-cover blur-[2px] brightness-90"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Panel 2 — photography */}
        <div className="relative min-h-[280px] border-t border-m2m-gold/20 sm:border-t-0 sm:border-r lg:min-h-[380px]">
          <Image
            src={COLLAGE_IMAGES.family}
            alt="Family during a thoughtful moment together"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
            priority
          />
        </div>

        {/* Panel 3 — cream + sub-blocks */}
        <div className="relative flex min-h-[280px] flex-col border-t border-m2m-gold/20 bg-m2m-cream/10 sm:border-t-0 sm:border-r lg:min-h-[380px]">
          <div className="flex flex-1 flex-col p-5 lg:p-6">
            <p
              className="mb-4 text-center text-[0.95rem] font-semibold leading-snug text-m2m-gold sm:text-left"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dangers of Revenge Tactics
            </p>
            <div className="relative mb-5 h-36 w-full overflow-hidden lg:h-44">
              <Image
                src={COLLAGE_IMAGES.interior}
                alt="Modern home interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3 text-[0.65rem] leading-relaxed text-m2m-cream/95">
              <div>
                <p className="mb-1 font-semibold text-m2m-gold-lt" style={{ fontFamily: "var(--font-nav)" }}>
                  Legal Ramifications
                </p>
                <p className="opacity-90" style={{ fontFamily: "var(--font-sans)" }}>
                  Decisions made in haste can complicate negotiations and timelines.
                </p>
              </div>
              <div>
                <p className="mb-1 font-semibold text-m2m-gold-lt" style={{ fontFamily: "var(--font-nav)" }}>
                  Emotional Toll
                </p>
                <p className="opacity-90" style={{ fontFamily: "var(--font-sans)" }}>
                  Protecting your peace—and your equity—starts with sound guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 4 — symbolic */}
        <div className="relative min-h-[280px] border-t border-m2m-gold/20 lg:min-h-[380px]">
          <Image
            src={COLLAGE_IMAGES.legal}
            alt="Symbolic imagery representing home and legal considerations"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>
      </div>

      {/* Decorative avatar strip — subtle nod to reference header cluster */}
      <div className="flex justify-center gap-2 border-t border-m2m-gold/10 py-6 lg:hidden">
        {M2M_HEADER_AGENT_LINKS.map((a) => (
          <div key={a.href} className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-m2m-gold/30">
            <Image src={a.image} alt="" fill className="object-cover" sizes="36px" />
          </div>
        ))}
      </div>
    </section>
  )
}
