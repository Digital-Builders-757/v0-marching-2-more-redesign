"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Donavan McFadden",
    role: "Founding Partner",
    title: "Licensed Agent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif",
    bio: "A dedicated real estate professional with military background, Donavan brings discipline, integrity, and commitment to every client relationship.",
  },
  {
    name: "Roger Lee",
    role: "Founding Partner",
    title: "Licensed Agent",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif",
    bio: "With deep roots in Hampton Roads, Roger combines local market knowledge with a passion for helping families find their perfect home.",
  },
  {
    name: "Kristin Allen",
    role: "Licensed Agent",
    title: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristin%20copy-lMfUtkHjgotsvjdeeUby9aj3quqUGu.avif",
    bio: "Kristin's attention to detail and genuine care for clients makes every transaction smooth and stress-free.",
  },
  {
    name: "Jalessa Hendricks",
    role: "Licensed Agent",
    title: "",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    bio: "Jalessa brings energy and dedication to helping clients navigate the real estate market with confidence.",
  },
]

export function TeamMembers() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group"
              data-gsap="fade-up"
              data-gsap-delay={index * 0.15}
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6 border border-m2m-deep/10 transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg">
                {/* Image */}
                <div className="w-full sm:w-40 h-48 sm:h-40 flex-shrink-0 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 
                    className="text-xl text-m2m-deep mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-sm text-m2m-gold mb-3"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {member.role}{member.title && ` • ${member.title}`}
                  </p>
                  <p 
                    className="text-sm text-m2m-muted leading-relaxed mb-4"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {member.bio}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep hover:text-m2m-gold transition-colors group/link"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Contact {member.name.split(' ')[0]}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
