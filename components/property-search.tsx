"use client"

import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { CREED_REALTY_SEARCH_URL } from "@/lib/m2m-constants"
import { mailtoNeedsHelp, REALSCOUT_MAP_SEARCH_URL } from "@/lib/m2m-site"

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
                  href={mailtoNeedsHelp()}
                  className="inline-block border border-m2m-deep px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition-all duration-300 hover:bg-m2m-cream/40 font-nav"
                >
                  Tell Us Your Needs
                </a>
                <p className="mt-2 text-center text-xs italic text-m2m-muted sm:text-left">
                  We&apos;ll prepare the best options.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Cascading overlapping circular images */}
          <div className="flex-1 relative flex items-center justify-center" style={{ height: '420px' }}>
            <div className="relative" style={{ width: '550px', height: '320px' }}>
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
