"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "So excited for our new journey! I can't thank Donavan McFadden and the Marching2More team enough for finding the perfect home for my little family! He was extremely dedicated to finding a home that fit our needs and wants! Here's to new beginnings!",
    name: "The Sanchez Family",
    role: "U.S. Navy",
    image: "/images/testi-sanchez.avif",
  },
  {
    quote: "Donavan McFadden assisted my wife and I in purchasing our first home together. Buying a home for the first time can be scary and confusing, it certainly was for us. We had spoken to and tried to work with different agents before we settled in with Mr. Donavan. Our experiences before and after working with him were night and day. He was very responsive and really took his time to explain everything we did not know. He took what can be a laborious and stressful process and made it an enjoyable one. For as long as we are in the Hampton roads area we will use Donavan McFadden as our agent to buy and sell. Thank you Donavan!",
    name: "The Cole Family",
    role: "U.S. Navy",
    image: "/images/testi-cole.avif",
  },
  {
    quote: "When you have family and friends you care about you want to refer them to some one you can trust! Roger Lee was that person for me. He built trust. He was relatable. He was patient! He helped my relative and I truly believe gained a repeat client.",
    name: "Terri Hill",
    role: "Hampton Roads Resident",
    image: "/images/testi-tami.avif",
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#0a1628] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving with integrity. Leading with experience.
          </h2>
        </div>

        {/* Testimonial Cards - 3 Column Grid */}
        <div 
          className="grid grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto"
          data-gsap="stagger-children"
          data-gsap-direction="up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-gsap-child
              className="group relative bg-m2m-deep/60 backdrop-blur-sm rounded-2xl border border-m2m-gold/10 p-4 md:p-6 lg:p-8 transition-all duration-500 hover:border-m2m-gold/30 hover:bg-m2m-deep/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-m2m-gold/5 flex flex-col h-full"
            >
              {/* Google G badge */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">G</span>
              </div>

              {/* Avatar and Stars Row */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-m2m-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:border-m2m-gold/50 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 5 Stars */}
                <div className="flex items-center justify-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-m2m-gold text-m2m-gold transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        transitionDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-center mb-8 flex-grow">
                <p 
                  className="text-xs md:text-sm leading-relaxed text-m2m-cream/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center flex-col mt-auto">
                <p 
                  className="text-sm tracking-wide text-m2m-cream font-medium"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  {testimonial.name}
                </p>
                <p 
                  className="text-xs tracking-wide text-m2m-gold/70"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          data-gsap="fade-up"
        >
          <a
            href="/reviews"
            className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt text-center"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            More Reviews
          </a>
          <a
            href="https://g.page/r/marching2more/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/30 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Review us on Google &#9656;
          </a>
        </div>
      </div>
    </section>
  )
}
