"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="bg-m2m-deep px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div 
            className="text-center p-8 border border-m2m-gold/20 rounded-xl transition-all duration-300 hover:border-m2m-gold/40"
            data-gsap="fade-up"
            data-gsap-delay="0"
          >
            <Phone className="w-8 h-8 text-m2m-gold mx-auto mb-4" strokeWidth={1.5} />
            <h3 
              className="text-lg text-m2m-cream mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Call or Text
            </h3>
            <a 
              href="tel:7572062859"
              className="text-m2m-muted-lt hover:text-m2m-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              757-206-2859
            </a>
          </div>

          {/* Email */}
          <div 
            className="text-center p-8 border border-m2m-gold/20 rounded-xl transition-all duration-300 hover:border-m2m-gold/40"
            data-gsap="fade-up"
            data-gsap-delay="0.1"
          >
            <Mail className="w-8 h-8 text-m2m-gold mx-auto mb-4" strokeWidth={1.5} />
            <h3 
              className="text-lg text-m2m-cream mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Email
            </h3>
            <a 
              href="mailto:hello@marching2more.com"
              className="text-m2m-muted-lt hover:text-m2m-gold transition-colors text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              hello@marching2more.com
            </a>
          </div>

          {/* Location */}
          <div 
            className="text-center p-8 border border-m2m-gold/20 rounded-xl transition-all duration-300 hover:border-m2m-gold/40"
            data-gsap="fade-up"
            data-gsap-delay="0.2"
          >
            <MapPin className="w-8 h-8 text-m2m-gold mx-auto mb-4" strokeWidth={1.5} />
            <h3 
              className="text-lg text-m2m-cream mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Office
            </h3>
            <p 
              className="text-m2m-muted-lt text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              582 Lynnhaven Pkwy Ste 400<br />
              Virginia Beach, VA 23452
            </p>
          </div>

          {/* Hours */}
          <div 
            className="text-center p-8 border border-m2m-gold/20 rounded-xl transition-all duration-300 hover:border-m2m-gold/40"
            data-gsap="fade-up"
            data-gsap-delay="0.3"
          >
            <Clock className="w-8 h-8 text-m2m-gold mx-auto mb-4" strokeWidth={1.5} />
            <h3 
              className="text-lg text-m2m-cream mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Availability
            </h3>
            <p 
              className="text-m2m-muted-lt text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Available 7 days a week<br />
              Call or text anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
