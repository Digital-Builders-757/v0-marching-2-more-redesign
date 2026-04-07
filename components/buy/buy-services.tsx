"use client"

import { Shield, Home, MapPin, FileCheck, Users, DollarSign } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "VA Loan Specialists",
    description: "Expert guidance through the VA loan process. We understand the unique benefits and requirements for military homebuyers.",
  },
  {
    icon: MapPin,
    title: "PCS Relocation",
    description: "Seamless transitions for military families. Remote home buying, virtual tours, and coordination with your timeline.",
  },
  {
    icon: Home,
    title: "First-Time Buyers",
    description: "Step-by-step support for your first home purchase. We make the complex simple and guide you through every decision.",
  },
  {
    icon: FileCheck,
    title: "Pre-Approval Assistance",
    description: "Connect with trusted lenders who specialize in military and VA financing options.",
  },
  {
    icon: Users,
    title: "Family-Focused",
    description: "We find homes that fit your family&apos;s lifestyle, near quality schools, bases, and amenities.",
  },
  {
    icon: DollarSign,
    title: "Investment Properties",
    description: "Build wealth through real estate. We help identify properties with strong rental potential.",
  },
]

export function BuyServices() {
  return (
    <section id="va-loans" className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-gsap="blur-in">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Why Buy With Us
          </p>
          <h2 
            className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We Serve Those Who <em className="italic">Serve</em>
          </h2>
          <p 
            className="text-m2m-muted text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our team understands the unique challenges military families face when buying a home. 
            From VA loan expertise to PCS coordination, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 border border-m2m-deep/10 bg-white transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg"
              data-gsap="fade-up"
              data-gsap-delay={index * 0.1}
            >
              <service.icon className="w-8 h-8 text-m2m-gold mb-6" strokeWidth={1.5} />
              <h3 
                className="text-lg text-m2m-deep mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-sm text-m2m-muted leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
