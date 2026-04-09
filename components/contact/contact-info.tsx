"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import {
  M2M_ADDRESS_LINES,
  M2M_EMAIL_DISPLAY,
  M2M_EMAIL_HREF,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

type ContactInfoVariant = "section" | "panel"

export function ContactInfo({ variant = "section" }: { variant?: ContactInfoVariant }) {
  const isPanel = variant === "panel"

  const content = (
    <div className={isPanel ? "mx-auto w-full" : "max-w-7xl mx-auto"}>
      <div className={isPanel ? "grid grid-cols-2 gap-4" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
          {/* Phone */}
          <div 
            className={
              "text-center border border-m2m-gold/20 transition-all duration-300 hover:border-m2m-gold/40 " +
              (isPanel ? "p-5 rounded-md" : "p-8 rounded-xl")
            }
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
              href={M2M_PHONE_HREF}
              className="text-m2m-muted-lt hover:text-m2m-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {M2M_PHONE_DISPLAY}
            </a>
          </div>

          {/* Email */}
          <div 
            className={
              "text-center border border-m2m-gold/20 transition-all duration-300 hover:border-m2m-gold/40 " +
              (isPanel ? "p-5 rounded-md" : "p-8 rounded-xl")
            }
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
              href={M2M_EMAIL_HREF}
              className="text-m2m-muted-lt hover:text-m2m-gold transition-colors text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {M2M_EMAIL_DISPLAY}
            </a>
          </div>

          {/* Location */}
          <div 
            className={
              "text-center border border-m2m-gold/20 transition-all duration-300 hover:border-m2m-gold/40 " +
              (isPanel ? "p-5 rounded-md" : "p-8 rounded-xl")
            }
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
              {M2M_ADDRESS_LINES.map((line, idx) => (
                <span key={line}>
                  {line}
                  {idx < M2M_ADDRESS_LINES.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>

          {/* Hours */}
          <div 
            className={
              "text-center border border-m2m-gold/20 transition-all duration-300 hover:border-m2m-gold/40 " +
              (isPanel ? "p-5 rounded-md" : "p-8 rounded-xl")
            }
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
  )

  if (isPanel) return content

  return (
    <section className="bg-m2m-deep px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      {content}
    </section>
  )
}
