"use client"

import Link from "next/link"

export function PropertySearch() {
  return (
    <section id="properties" className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Your New Home
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-prose">
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families.
              From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/home-search"
                className="inline-flex items-center justify-center rounded-md bg-m2m-gold px-6 py-3 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-m2m-deep transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Start Your Search Now
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md border border-m2m-gold/30 px-6 py-3 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-gray-800 transition hover:border-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Or — Tell us your needs
              </Link>
            </div>

            <p className="text-xs text-gray-500 italic">
              Local Property Search Powered by CREED REALTY* — We&apos;ll prepare the best options.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Looking for something specific?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tell us what you want (location, budget, timing) and we&apos;ll send curated options.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-black px-6 py-3 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-white transition hover:bg-black/90"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
