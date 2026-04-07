"use client"

import Link from "next/link"
import { Star } from "lucide-react"

const testimonials = [
  {
    initial: "G",
    name: "The Sanchez Family",
    role: "U.S. Navy",
    quote: "So excited for our new journey! I can't thank Donavan McFadden and the Marching2More team enough for finding the perfect home for my little family! He was extremely dedicated to finding a home that fit our needs and wants! Here's to new beginnings!",
  },
  {
    initial: "G",
    name: "The Cole Family",
    role: "U.S. Navy",
    quote: "Donavan McFadden assisted my wife and I in purchasing our first home together. Buying a home for the first time can be scary and confusing, it certainly was for us. We had spoken to and tried to work with different agents before we settled in with Mr. Donavan. Our experiences before and after working with him were night and day. He was very responsive and really took his time to explain everything we did not know. He took what can be a laborious and stressful process and made it an enjoyable one. For as long as we are in the Hampton roads area we will use Donavan McFadden as our agent to buy and sell. Thank you Donavan!",
  },
  {
    initial: "G",
    name: "Terri Hill",
    role: "Hampton Roads Resident",
    quote: "When you have family and friends you care about you want to refer them to some one you can trust! Roger Lee was that person for me. He built trust. He was relatable. He was patient! He helped my relative and I truly believe gained a repeat client.",
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              {/* Google Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-blue-600">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/reviews"
            className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-8 py-3 rounded text-center transition-colors"
          >
            More Reviews
          </Link>
          <a
            href="https://www.google.com/search?q=marching+2+more+real+estate+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-black font-semibold px-8 py-3 rounded text-center transition-colors"
          >
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  )
}
