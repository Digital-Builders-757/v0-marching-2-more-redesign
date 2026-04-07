"use client"

import { useState } from "react"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

const interestOptions = [
  { value: "buying", label: "Buying a Home" },
  { value: "selling", label: "Selling a Home" },
  { value: "both", label: "Buying & Selling" },
  { value: "valuation", label: "Home Valuation" },
  { value: "consultation", label: "General Consultation" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
  }

  return (
    <section id="book" className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Text */}
          <div className="lg:col-span-2" data-gsap="fade-right">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Send a Message
            </p>
            <h2 
              className="font-light text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] text-m2m-deep mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We&apos;d Love to <em className="italic">Hear From You</em>
            </h2>
            <p 
              className="text-m2m-muted text-base leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Fill out the form and our team will get back to you within 24 hours. 
              For immediate assistance, give us a call.
            </p>
            <a
              href={M2M_PHONE_HREF}
              className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-deep text-m2m-deep transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Call {M2M_PHONE_DISPLAY}
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3" data-gsap="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Smith"
                    className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(757) 000-0000"
                    className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>

              <div>
                <label 
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  I&apos;m Interested In
                </label>
                <div className="flex flex-wrap gap-3">
                  {interestOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: option.value })}
                      className={`text-xs tracking-wider px-4 py-2 border transition-all duration-300 ${
                        formData.interest === option.value
                          ? "border-m2m-gold bg-m2m-gold text-m2m-deep"
                          : "border-m2m-deep/20 text-m2m-muted hover:border-m2m-gold hover:text-m2m-deep"
                      }`}
                      style={{ fontFamily: 'var(--font-nav)' }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label 
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your real estate goals..."
                  rows={5}
                  className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <button
                type="submit"
                className="text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-deep text-m2m-cream font-medium px-10 py-4 transition-colors hover:bg-m2m-deep/90"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
