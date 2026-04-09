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

          {/* Overlapping circular images */}
          <div className="relative h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center lg:justify-end">
            {/* Large circle - white house (back left) */}
            <div className="absolute left-0 md:left-8 lg:left-0 top-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="/images/sap-3.avif"
                alt="Beautiful white home exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 180px"
              />
            </div>
            
            {/* Medium circle - blue house (back right) */}
            <div className="absolute right-0 md:right-8 lg:right-0 top-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden shadow-xl border-4 border-white z-20">
              <Image
                src="/images/sap-2.avif"
                alt="Elegant blue home exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 180px"
              />
            </div>

            {/* Small circle - couple (front center) */}
            <div className="absolute left-1/2 -translate-x-1/2 md:left-[30%] md:-translate-x-0 bottom-0 md:bottom-4 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden shadow-2xl border-4 border-white z-30">
              <Image
                src="/images/sap-1.avif"
                alt="Happy couple in front of their new home"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, 140px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
