"use client"

import Link from "next/link"
import Image from "next/image"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function PropertySearchNew() {
  return (
    <section id="properties" className="relative bg-m2m-black px-6 py-20 md:px-16 lg:px-24 md:py-28 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        data-gsap="parallax"
        data-gsap-speed="0.2"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(205,176,95,0.03) 0%, transparent 50%)',
        }}
      />

      {/* Background - Overlapping circular images on right with parallax */}
      <div 
        data-gsap="parallax" 
        data-gsap-speed="0.3"
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-end pointer-events-none"
      >
        <div className="relative w-[500px] xl:w-[600px]">
          {/* Large circle - couple */}
          <div 
            data-gsap="image-reveal"
            data-gsap-direction="left"
            data-gsap-scroll="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] xl:w-[320px] h-[280px] xl:h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-m2m-gold/20"
          >
            <div className="relative h-full w-full">
              <Image
                src={M2M_MEDIA.familyBackyard}
                alt="Happy couple in front of their new home"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 320px, 280px"
              />
            </div>
          </div>
          
          {/* Medium circle - house */}
          <div 
            data-gsap="image-reveal"
            data-gsap-direction="right"
            data-gsap-scroll="true"
            className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-[220px] xl:w-[260px] h-[220px] xl:h-[260px] rounded-full overflow-hidden shadow-2xl border-4 border-m2m-gold/20"
          >
            <div className="relative h-full w-full">
              <Image
                src={M2M_MEDIA.sellHeroStill}
                alt="Luxury home exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 260px, 220px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-6" data-gsap="stagger-children" data-gsap-direction="up">
            {/* Section label */}
            <div 
              data-gsap-child
              className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              <span className="w-6 h-px bg-m2m-gold" />
              Find Your New Home
            </div>

            {/* Title */}
            <h2 
              data-gsap-child
              className="text-m2m-cream text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-light"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Search Available<br />
              <em className="italic text-m2m-gold">Properties</em>
            </h2>

            {/* Body */}
            <p 
              data-gsap-child
              className="text-sm leading-relaxed text-m2m-muted max-w-xl pl-6 border-l border-m2m-gold/20"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families. From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            {/* CTAs */}
            <div data-gsap-child className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Start Your Search Now
                </Link>
                <p 
                  className="text-xs text-m2m-muted italic text-center"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Local Property Search Powered by CREED REALTY*
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/contact"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Or — Tell us your needs
                </Link>
                <p 
                  className="text-xs text-m2m-muted italic text-center"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  We&apos;ll prepare the best options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
