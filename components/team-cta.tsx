"use client"

import Link from "next/link"

export function TeamCTA() {
  return (
    <section className="bg-[#0a1628] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/our-team"
          className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-10 py-4 rounded text-lg transition-colors"
        >
          Meet Your Team
        </Link>
      </div>
    </section>
  )
}
