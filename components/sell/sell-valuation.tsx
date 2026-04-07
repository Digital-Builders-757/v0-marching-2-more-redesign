"use client"

import { useState } from "react"

export function SellValuation() {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Valuation request:", formData)
  }

  return (
    <section id="valuation" className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-gsap="fade-right">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Free Home Valuation
            </p>
            <h2 
              className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What&apos;s Your Home <em className="italic">Worth?</em>
            </h2>
            <p 
              className="text-m2m-muted text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get a comprehensive market analysis of your property. Our team will evaluate your home 
              based on current market conditions, recent sales, and unique features to provide an 
              accurate valuation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-m2m-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-m2m-gold text-sm font-medium">1</span>
                </div>
                <div>
                  <h4 className="text-m2m-deep font-medium mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Submit Your Address
                  </h4>
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: 'var(--font-sans)' }}>
                    Tell us about your property location
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-m2m-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-m2m-gold text-sm font-medium">2</span>
                </div>
                <div>
                  <h4 className="text-m2m-deep font-medium mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    We Analyze the Market
                  </h4>
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: 'var(--font-sans)' }}>
                    Comprehensive comparable sales analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-m2m-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-m2m-gold text-sm font-medium">3</span>
                </div>
                <div>
                  <h4 className="text-m2m-deep font-medium mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Receive Your Valuation
                  </h4>
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: 'var(--font-sans)' }}>
                    Get a detailed report with pricing strategy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-m2m-deep p-8 md:p-12" data-gsap="fade-left">
            <h3 
              className="text-xl text-m2m-cream mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Request Your Free Valuation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold mb-2 block"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Property Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main Street, Virginia Beach, VA"
                  className="w-full bg-black/20 border border-m2m-gold/20 text-m2m-cream text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-black/20 border border-m2m-gold/20 text-m2m-cream text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold mb-2 block"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(757) 000-0000"
                    className="w-full bg-black/20 border border-m2m-gold/20 text-m2m-cream text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>
              <div>
                <label 
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold mb-2 block"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-black/20 border border-m2m-gold/20 text-m2m-cream text-sm px-4 py-3 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-gold text-m2m-deep font-medium px-8 py-4 transition-colors hover:bg-m2m-gold-lt mt-4"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Get My Free Valuation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
