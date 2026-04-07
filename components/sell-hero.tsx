"use client"

import Link from "next/link"

export function SellHero() {
  return (
    <section className="bg-[#0a1628] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sell with confidence.
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#c9a961] mb-8">
              Learn your home&apos;s true value.
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/home-valuation"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Get Your Free Home Valuation
              </Link>
              <Link
                href="/home-valuation"
                className="inline-block border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Pre-Listing Checklist */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <a
                href="#"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-6 py-3 rounded mb-4 transition-colors"
              >
                Get The Pre-Listing Checklist
              </a>
              <p className="text-gray-300 text-sm">
                Our 20 page guide to assist you with every phase of selling your home.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://static.wixstatic.com/media/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg"
              alt="Sell your home"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
