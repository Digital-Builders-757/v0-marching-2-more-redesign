"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { GOOGLE_REVIEW_URL } from "@/lib/m2m-site"

const testimonials = [
  {
    quote:
      "So excited for our new journey! I can't thank Donavan McFadden and the Marching2More team enough for finding the perfect home for my little family! He was extremely dedicated to finding a home that fit our needs and wants! Here's to new beginnings!",
    name: "The Sanchez Family",
    role: "U.S. Navy",
    avatar: "S",
  },
  {
    quote:
      "Donavan McFadden assisted my wife and I in purchasing our first home together. Buying a home for the first time can be scary and confusing, it certainly was for us. We had spoken to and tried to work with different agents before we settled in with Mr. Donavan. Our experiences before and after working with him were night and day. He was very responsive and really took his time to explain everything we did not know. He took what can be a laborious and stressful process and made it an enjoyable one. For as long as we are in the Hampton roads area we will use Donavan McFadden as our agent to buy and sell. Thank you Donavan!",
    name: "The Cole Family",
    role: "U.S. Navy",
    avatar: "C",
  },
  {
    quote:
      "When you have family and friends you care about you want to refer them to some one you can trust! Roger Lee was that person for me. He built trust. He was relatable. He was patient! He helped my relative and I truly believe gained a repeat client.",
    name: "Terri Hill",
    role: "Hampton Roads Resident",
    avatar: "T",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-m2m-black relative overflow-hidden">
      <div
        data-gsap="parallax"
        data-gsap-speed="0.2"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(205,176,95,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative px-6 py-20 md:px-16 lg:px-24 md:py-32">
        <div className="text-center mb-16 lg:mb-20">
          <h2
            data-gsap="blur-in"
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Serving with integrity.
            <br />
            <span className="italic text-m2m-gold">Leading with experience.</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          data-gsap="stagger-children"
          data-gsap-direction="up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-gsap-child
              className="group relative bg-m2m-deep/60 backdrop-blur-sm rounded-2xl border border-m2m-gold/10 p-8 md:p-9 transition-all duration-500 hover:border-m2m-gold/30 hover:bg-m2m-deep/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-m2m-gold/5"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-m2m-gold text-m2m-gold transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <blockquote className="text-center mb-8">
                <p
                  className="text-sm md:text-[0.95rem] leading-relaxed text-m2m-cream/80"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {testimonial.quote}
                </p>
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-m2m-gold/20 border border-m2m-gold/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-m2m-gold/50">
                  <span
                    className="text-sm font-medium text-m2m-gold"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {testimonial.avatar}
                  </span>
                </div>

                <div className="text-left">
                  <p
                    className="text-sm tracking-wide text-m2m-cream font-medium"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-xs tracking-wide text-m2m-gold/70"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/reviews"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-m2m-gold border border-m2m-gold/40 px-8 py-3 hover:bg-m2m-gold hover:text-m2m-deep transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            More Reviews
          </Link>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-m2m-cream/90 hover:text-m2m-gold transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Review us on Google ▸
          </a>
        </div>
      </div>
    </section>
  )
}
