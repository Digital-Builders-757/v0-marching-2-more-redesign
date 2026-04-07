"use client"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start with a conversation to understand your needs, timeline, budget, and what you're looking for in a home.",
  },
  {
    number: "02",
    title: "Pre-Approval",
    description: "Connect with our trusted lending partners to get pre-approved and understand your buying power.",
  },
  {
    number: "03",
    title: "Property Search",
    description: "Access our curated listings and let us know your preferences. We'll find homes that match your criteria.",
  },
  {
    number: "04",
    title: "Home Tours",
    description: "Visit properties in person or virtually. We'll provide insights on each home's value and potential.",
  },
  {
    number: "05",
    title: "Make an Offer",
    description: "When you find the one, we'll craft a competitive offer and negotiate on your behalf.",
  },
  {
    number: "06",
    title: "Close & Celebrate",
    description: "We guide you through inspections, appraisals, and closing. Then, welcome home!",
  },
]

export function BuyProcess() {
  return (
    <section id="pcs" className="bg-m2m-deep px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-gsap="blur-in">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            The Buying Process
          </p>
          <h2 
            className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simple Steps to <em className="italic">Your New Home</em>
          </h2>
          <p 
            className="text-m2m-muted-lt text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We&apos;ve streamlined the home buying process to make it as smooth as possible, 
            especially for military families managing PCS relocations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
              data-gsap="fade-up"
              data-gsap-delay={index * 0.1}
            >
              <div className="p-8 border border-m2m-gold/20 bg-m2m-panel transition-all duration-300 hover:border-m2m-gold/40">
                <span 
                  className="text-4xl font-light text-m2m-gold/30 mb-4 block"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </span>
                <h3 
                  className="text-lg text-m2m-cream mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm text-m2m-muted leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
