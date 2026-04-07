"use client"

import Link from "next/link"

export function PropertySearch() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Your New Home
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Search Available Properties
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families. From relocations to finding homes near military bases, we&apos;re here to support you at every step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://marching2more.realscout.com/homesearch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Start Your Search Now
              </a>
              <Link
                href="/contact"
                className="inline-block border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Or - Tell us your needs.
              </Link>
            </div>

            <p className="text-sm text-gray-500 italic">
              Local Property Search Powered by CREED REALTY*
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We&apos;ll prepare the best options.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://static.wixstatic.com/media/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg"
              alt="Property Search"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
