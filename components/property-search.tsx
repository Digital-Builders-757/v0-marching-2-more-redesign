"use client"

import Image from "next/image"
import { CREED_REALTY_SEARCH_URL } from "@/lib/m2m-constants"
import { mailtoNeedsHelp, REALSCOUT_MAP_SEARCH_URL } from "@/lib/m2m-site"

export function PropertySearch() {
  return (
    <section id="properties" className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Your New Home
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Search Available Properties
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-prose">
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families.
              From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={REALSCOUT_MAP_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-m2m-gold px-6 py-3 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-m2m-deep transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Start Your Search Now
              </a>
              <a
                href={mailtoNeedsHelp()}
                className="inline-flex items-center justify-center rounded-md border border-m2m-gold/30 px-6 py-3 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-gray-800 transition hover:border-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Or — Tell us your needs.
              </a>
            </div>

            <p className="text-xs text-gray-500 italic">
              <a href={CREED_REALTY_SEARCH_URL} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                Local Property Search Powered by CREED REALTY*
              </a>
              {" "}— We&apos;ll prepare the best options.
            </p>
          </div>

          {/* Three circular images in a row */}
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Circle 1 - couple */}
            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
              <Image
                src="/images/sap-1.avif"
                alt="Happy couple in front of their new home"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 140px, 100px"
              />
            </div>
            
            {/* Circle 2 - white house */}
            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
              <Image
                src="/images/sap-3.avif"
                alt="Beautiful white home exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 140px, 100px"
              />
            </div>

            {/* Circle 3 - blue house */}
            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
              <Image
                src="/images/sap-2.avif"
                alt="Elegant blue home exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 140px, 100px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
