"use client"

import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { CREED_REALTY_SEARCH_URL } from "@/lib/m2m-constants"
import { REALSCOUT_MAP_SEARCH_URL } from "@/lib/m2m-site"

export function PropertySearch() {
  return (
    <section id="properties" className="bg-white py-16 md:py-24">
      <M2mContainer>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Text content */}
          <div className="flex-1 flex flex-col gap-6 lg:pl-8">
            {/* Kicker */}
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-m2m-gold font-nav">Find Your New Home</p>

            {/* Heading */}
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Search Available<br />Properties
            </h2>

            {/* Body paragraph */}
            <p className="max-w-[480px] text-base leading-relaxed text-m2m-deep/90" style={{ fontFamily: "var(--font-sans)" }}>
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families. From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex flex-col items-center sm:items-start">
                <a
                  href={REALSCOUT_MAP_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-m2m-deep px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:opacity-90 font-nav"
                >
                  Start Your Search Now
                </a>
                <p className="mt-2 text-center text-xs italic text-m2m-gold sm:text-left">
                  <a
                    href={CREED_REALTY_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Local Property Search Powered by CREED REALTY*
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <a
                  href="/contact-us"
                  className="inline-block border border-m2m-deep px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition-all duration-300 hover:bg-m2m-cream/40 font-nav"
                >
                  Tell Us Your Needs
                </a>
                <p className="mt-2 max-w-xs text-center text-xs leading-relaxed text-m2m-deep/85 sm:text-left">
                  Use the contact form and we&apos;ll follow up—including Donavan&apos;s free listing guide PDF when selling is on your radar.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — collage centered; scale + absolute wrapper avoids 550px layout width on phones */}
          <div className="relative w-full flex-1 min-h-[220px] overflow-x-clip py-6 sm:min-h-[280px] md:min-h-[420px] md:overflow-visible md:py-0">
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[550px] -translate-x-1/2 -translate-y-1/2 scale-[0.5] sm:scale-[0.68] md:scale-100">
              {/* Circle 1 - Couple (front-left, largest 300px, z-index 3) */}
              <div 
                data-gsap="scale-in"
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  left: '0px', 
                  top: '10px',
                  zIndex: 3 
                }}
              >
                <Image
                  src="/images/sap-1.avif"
                  alt="Happy couple smiling in front of their new home"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              
              {/* Circle 2 - Blue house (middle 260px, z-index 2) */}
              <div 
                data-gsap="scale-in"
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '260px', 
                  height: '260px', 
                  left: '180px', 
                  top: '0px',
                  zIndex: 2 
                }}
              >
                <Image
                  src="/images/sap-2.avif"
                  alt="Modern blue craftsman home exterior"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
                {/* Dark green tint overlay */}
                <div className="absolute inset-0 rounded-full bg-m2m-panel/35" />
              </div>

              {/* Circle 3 - Cottage house (back-right, smallest 220px, z-index 1) */}
              <div 
                data-gsap="scale-in"
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '220px', 
                  height: '220px', 
                  left: '330px', 
                  top: '50px',
                  zIndex: 1 
                }}
              >
                <Image
                  src="/images/sap-3.avif"
                  alt="Warm-toned cottage home with garden path"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                {/* Dark green tint overlay */}
                <div className="absolute inset-0 rounded-full bg-m2m-panel/35" />
              </div>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
