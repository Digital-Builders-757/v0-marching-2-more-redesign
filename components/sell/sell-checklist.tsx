"use client"

import Link from "next/link"
import { CheckCircle, Download } from "lucide-react"

const checklistItems = [
  "Declutter and depersonalize living spaces",
  "Deep clean entire home including carpets and windows",
  "Complete minor repairs and touch-ups",
  "Enhance curb appeal with landscaping",
  "Stage key rooms for maximum impact",
  "Gather important documents and disclosures",
  "Review and understand market conditions",
  "Set a competitive listing price",
  "Prepare for professional photography",
  "Plan for showings and open houses",
]

export function SellChecklist() {
  return (
    <section id="checklist" className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-gsap="fade-right">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Pre-Listing Checklist
            </p>
            <h2 
              className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Prepare Your Home <em className="italic">For Success</em>
            </h2>
            <p 
              className="text-m2m-muted text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Our comprehensive 20-page guide covers everything you need to know to prepare 
              your home for sale. Download it free or schedule a consultation for personalized advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-m2m-cream font-medium transition-all duration-300 hover:bg-m2m-deep/90"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                <Download className="w-4 h-4" />
                Download Guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-deep text-m2m-deep transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Right Checklist */}
          <div className="bg-m2m-deep/5 p-8 md:p-10" data-gsap="fade-left">
            <h3 
              className="text-lg text-m2m-deep mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Quick Checklist Preview
            </h3>
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                  data-gsap="fade-up"
                  data-gsap-delay={index * 0.05}
                >
                  <CheckCircle className="w-5 h-5 text-m2m-gold flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-sm text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
