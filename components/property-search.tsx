"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    name: "Donavan",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif",
  },
  {
    name: "Roger Lee",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif",
  },
  {
    name: "Kristin",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristin%20copy-lMfUtkHjgotsvjdeeUby9aj3quqUGu.avif",
  },
]

const positions = [
  {
    className: "left-0 top-[45px] lg:top-[60px] z-[3]",
    size: "w-[165px] lg:w-[255px] h-[165px] lg:h-[255px]",
  },
  {
    className: "left-[100px] lg:left-[160px] top-[15px] lg:top-[28px] z-[2]",
    size: "w-[140px] lg:w-[215px] h-[140px] lg:h-[215px]",
  },
  {
    className: "left-[190px] lg:left-[295px] top-[55px] lg:top-[75px] z-[1]",
    size: "w-[130px] lg:w-[195px] h-[130px] lg:h-[195px]",
  },
]

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

        {/* Right - Team member circles with rotating animation */}
        <div 
          data-gsap="scale-in"
          className="order-1 lg:order-2"
        >
          <div className="relative h-[300px] lg:h-[440px] flex items-center justify-center">
            <div className="relative w-[280px] lg:w-[420px] h-[260px] lg:h-[380px]">
              {teamMembers.map((member, memberIndex) => {
                const positionIndex = order.indexOf(memberIndex)
                const position = positions[positionIndex]
                
                return (
                  <div
                    key={member.name}
                    className={`absolute ${position.size} ${position.className} rounded-full overflow-hidden border-2 border-m2m-gold/30 shadow-2xl cursor-pointer transition-all duration-1000 ease-in-out hover:scale-105 hover:-translate-y-2`}
                    style={{ zIndex: 3 - positionIndex }}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 255px, 165px"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
