"use client"

import { useState } from "react"

export function Contact() {
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
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-m2m-panel border-t border-m2m-gold/20 px-6 py-16 md:px-[60px] md:py-[120px] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(205,176,95,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left content */}
        <div className="flex flex-col gap-8">
          <h2 
            className="font-light text-[clamp(2.5rem,4.5vw,4.2rem)] leading-none text-m2m-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Have a question? <br />
            <em className="italic text-m2m-gold">Contact Us</em>
          </h2>

          <p 
            className="text-sm leading-relaxed text-m2m-muted-lt max-w-md"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Whether you&apos;re buying, selling, or just exploring your options, 
            we&apos;re here to help. Call or Text - Anytime.
          </p>

          <div className="flex flex-col gap-4">
            <ContactDetail label="Phone" value="757-206-2859" />
            <ContactDetail label="Email" value="hello@marching2more.com" />
            <ContactDetail label="Office" value="582 Lynnhaven Pkwy ste 400, Virginia Beach, VA 23452" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormGroup
              label="First Name"
              value={formData.firstName}
              onChange={(v) => setFormData({ ...formData, firstName: v })}
              placeholder="John"
            />
            <FormGroup
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => setFormData({ ...formData, lastName: v })}
              placeholder="Smith"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormGroup
              label="Email"
              type="email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              placeholder="john@example.com"
            />
            <FormGroup
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(v) => setFormData({ ...formData, phone: v })}
              placeholder="(757) 555-0123"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label 
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              I&apos;m Interested In
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold appearance-none"
            >
              <option value="">Select an option</option>
              <option value="buying">Buying a Home</option>
              <option value="selling">Selling a Home</option>
              <option value="pcs">PCS Relocation</option>
              <option value="valuation">Home Valuation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label 
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your real estate goals..."
              rows={5}
              className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold resize-y min-h-[120px] placeholder:text-m2m-muted"
            />
          </div>

          <button
            type="submit"
            className="text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-gold text-m2m-deep font-medium px-9 py-4 transition-colors hover:bg-m2m-gold-lt self-start mt-1"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Send Message
          </button>

          <p className="text-[0.6rem] text-m2m-muted italic tracking-wider leading-relaxed">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span 
        className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {label}
      </span>
      <span 
        className="text-lg font-light text-m2m-cream"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </span>
    </div>
  )
}

function FormGroup({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label 
        className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
        style={{ fontFamily: 'var(--font-sans)' }}
      />
    </div>
  )
}
