"use client"

import Image from "next/image"
import { CREED_REALTY_SEARCH_URL } from "@/lib/m2m-constants"
import { mailtoNeedsHelp, REALSCOUT_MAP_SEARCH_URL } from "@/lib/m2m-site"

export function PropertySearch() {
  return (
    <section id="properties" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column - Text content */}
          <div className="flex flex-col gap-6">
            {/* Gold label */}
            <p 
              className="text-sm font-bold tracking-wide"
              style={{ color: '#B8963E', fontFamily: 'var(--font-nav)' }}
            >
              Find Your New Home
            </p>

            {/* Large dark green serif heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: '#1B4332', fontFamily: 'var(--font-heading)' }}
            >
              Search Available<br />Properties
            </h2>

            {/* Body paragraph */}
            <p 
              className="text-base leading-relaxed max-w-[500px]"
              style={{ color: '#4a4a4a' }}
            >
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families. From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex flex-col items-center sm:items-start">
                <a
                  href={REALSCOUT_MAP_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ 
                    backgroundColor: '#1B4332',
                    fontFamily: 'var(--font-nav)',
                    minWidth: '220px'
                  }}
                >
                  Start Your Search Now
                </a>
                <p 
                  className="text-xs italic mt-2 text-center sm:text-left"
                  style={{ color: '#B8963E' }}
                >
                  <a href={CREED_REALTY_SEARCH_URL} target="_blank" rel="noreferrer" className="hover:underline">
                    Local Property Search Powered by CREED REALTY*
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <a
                  href={mailtoNeedsHelp()}
                  className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold transition hover:bg-gray-50"
                  style={{ 
                    border: '1px solid #333',
                    color: '#333',
                    fontFamily: 'var(--font-nav)',
                    minWidth: '220px'
                  }}
                >
                  Or — Tell us your needs.
                </a>
                <p 
                  className="text-xs italic mt-2 text-center sm:text-left"
                  style={{ color: '#666' }}
                >
                  We&apos;ll prepare the best options.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Cascading overlapping circular images */}
          <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative" style={{ width: '480px', height: '320px' }}>
              {/* Circle 1 - Couple (front-left, largest ~320px, z-index 30) */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '220px', 
                  height: '220px', 
                  left: '0', 
                  top: '50px',
                  zIndex: 30 
                }}
              >
                <Image
                  src="/images/sap-1.avif"
                  alt="Happy couple smiling in front of their new home"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              
              {/* Circle 2 - Blue house (middle ~270px, z-index 20) */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  left: '130px', 
                  top: '20px',
                  zIndex: 20 
                }}
              >
                <Image
                  src="/images/sap-2.avif"
                  alt="Modern blue craftsman home exterior"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>

              {/* Circle 3 - Cottage house (back-right, smallest ~220px, z-index 10) */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{ 
                  width: '180px', 
                  height: '180px', 
                  left: '260px', 
                  top: '60px',
                  zIndex: 10 
                }}
              >
                <Image
                  src="/images/sap-3.avif"
                  alt="Warm-toned cottage home with garden path"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
