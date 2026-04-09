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

          {/* Overlapping circular images - Venn diagram style */}
          <div className="relative w-full h-[220px] md:h-[280px] lg:h-[300px] flex items-center justify-center">
            {/* Container for the overlapping circles */}
            <div className="relative w-[320px] md:w-[420px] lg:w-[480px] h-full">
              {/* White house - left circle */}
              <div className="absolute left-0 top-0 w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-white z-10">
                <Image
                  src="/images/sap-3.avif"
                  alt="Beautiful white home exterior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 160px"
                />
              </div>
              
              {/* Blue house - right circle, overlapping */}
              <div className="absolute right-0 top-[10%] md:top-[8%] w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-white z-20">
                <Image
                  src="/images/sap-2.avif"
                  alt="Elegant blue home exterior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 160px"
                />
              </div>

              {/* Couple - smaller circle at bottom-left intersection */}
              <div className="absolute left-[15%] md:left-[18%] bottom-0 w-[110px] h-[110px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border-4 border-white z-30">
                <Image
                  src="/images/sap-1.avif"
                  alt="Happy couple in front of their new home"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 150px, (min-width: 768px) 140px, 110px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
