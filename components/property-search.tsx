"use client"

import Link from "next/link"
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
  const [order, setOrder] = useState([0, 1, 2])

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[2], prev[0], prev[1]])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-m2m-black px-6 py-16 md:px-[60px] md:py-[120px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-9 order-2 lg:order-1">
          {/* Section label */}
          <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-m2m-gold">
            <div 
              data-gsap="line-reveal"
              className="w-6 h-px bg-m2m-gold" 
            />
            <span data-gsap="fade-right">Search Available Properties</span>
          </div>

          {/* Title */}
          <h2 
            data-gsap="blur-in"
            className="font-light text-[clamp(3rem,5vw,5rem)] leading-[0.97] text-m2m-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find Your <br />
            <em className="italic text-m2m-gold">New Home</em>
          </h2>

          {/* Body */}
          <p 
            data-gsap="fade-up"
            className="text-sm leading-relaxed text-m2m-muted pl-5 border-l border-m2m-gold/20 max-w-md"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We&apos;ve curated a range of properties that fit the lifestyle and requirements of military personnel and their families. From relocations to finding homes near military bases, we&apos;re here to support you at every step.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col gap-3"
            data-gsap="stagger-children"
            data-gsap-direction="up"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <Link
                data-gsap-child
                data-gsap="magnetic"
                href="#"
                className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Start Your Search Now
              </Link>
              <Link
                data-gsap-child
                data-gsap="magnetic"
                href="/contact"
                className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Or — Tell us your needs
              </Link>
            </div>
            <div 
              data-gsap-child
              className="flex flex-col gap-1 text-[0.6rem] tracking-wider text-m2m-gold-dim italic justify-center md:justify-start"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="text-center md:text-left">Local Property Search Powered by CREED REALTY*</span>
              <span className="text-center md:text-left">We&apos;ll prepare the best options.</span>
            </div>
          </div>
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
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
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
