"use client"

const steps = [
  {
    number: "01",
    title: "Consultation & Valuation",
    description: "We meet to discuss your goals, timeline, and provide a comprehensive market analysis of your property.",
  },
  {
    number: "02",
    title: "Prepare Your Home",
    description: "We guide you on staging, repairs, and improvements that maximize your home's appeal and value.",
  },
  {
    number: "03",
    title: "Professional Marketing",
    description: "High-quality photography, virtual tours, and strategic marketing across multiple platforms.",
  },
  {
    number: "04",
    title: "Showings & Open Houses",
    description: "We coordinate and host showings, providing feedback and adjusting strategy as needed.",
  },
  {
    number: "05",
    title: "Negotiate Offers",
    description: "We advocate for your best interests, negotiating terms, price, and contingencies.",
  },
  {
    number: "06",
    title: "Close Successfully",
    description: "We manage inspections, appraisals, and closing coordination for a smooth transaction.",
  },
]

export function SellProcess() {
  return (
    <section id="process" className="bg-m2m-panel px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-gsap="blur-in">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            The Selling Process
          </p>
          <h2 
            className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Selling Made <em className="italic">Simple</em>
          </h2>
          <p 
            className="text-m2m-muted-lt text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our proven process ensures you get the best price in the shortest time possible, 
            with minimal stress throughout the journey.
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
              <div className="p-8 border border-m2m-gold/20 bg-m2m-deep/50 transition-all duration-300 hover:border-m2m-gold/40 hover:bg-m2m-deep">
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
