"use client"

import { Shield, Home, Wallet, Plane, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "New World Builders",
    body: "General Contractors",
    link: "Learn More",
  },
  {
    icon: Plane,
    title: "Off Load Moving",
    body: "Moving",
    link: "Learn More",
  },
  {
    icon: Shield,
    title: "Cara Erickson of Atlantic Bay Mortgage",
    body: "Lending",
    link: "Learn More",
  },
  {
    icon: Wallet,
    title: "2-10 Home Warranty",
    body: "Home Warranty",
    link: "Learn More",
  },
]

const stats = [
  { number: 500, label: "Families Served", suffix: "+" },
  { number: 15, label: "Years Experience", suffix: "+" },
  { number: 125, label: "Sales Volume", prefix: "$", suffix: "M" },
  { number: 49, label: "Client Rating", suffix: "/5", display: "4.9" },
]

export function Services() {
  return (
    <section className="bg-m2m-black px-6 py-16 md:px-[60px] md:py-[120px] overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-16">
        <h2 
          data-gsap="blur-in"
          className="font-light text-[clamp(2.5rem,5vw,4.8rem)] leading-none text-m2m-cream"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          You&apos;re in <br />
          <em className="italic text-m2m-gold">great hands.</em>
        </h2>
        
        <p 
          data-gsap="fade-left"
          className="text-sm leading-relaxed text-m2m-muted pl-6 border-l border-m2m-gold/20"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Financing, renovations, moving solutions and so much more. Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
        </p>
      </div>

      {/* Services grid with stagger */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 mb-16"
        data-gsap="stagger-children"
        data-gsap-direction="up"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Stats with counters */}
      <div 
        data-gsap="fade-up"
        className="grid grid-cols-2 lg:grid-cols-4 border border-m2m-gold/20"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`p-8 flex flex-col gap-1.5 ${
              index < stats.length - 1 ? "border-r border-m2m-gold/20" : ""
            } ${index >= 2 ? "border-t lg:border-t-0 border-m2m-gold/20" : ""}`}
          >
            <span 
              className="text-3xl lg:text-4xl font-light text-m2m-cream"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {stat.display ? (
                stat.display
              ) : (
                <>
                  {stat.prefix || ""}
                  <span 
                    data-gsap="counter" 
                    data-gsap-end={stat.number}
                    data-gsap-suffix={stat.suffix || ""}
                  >
                    0
                  </span>
                </>
              )}
            </span>
            <span 
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  link,
}: {
  icon: typeof Shield
  title: string
  body: string
  link: string
}) {
  return (
    <div 
      data-gsap-child
      className="aspect-square bg-m2m-panel border border-m2m-gold/20 rounded-full p-8 m-2.5 flex flex-col gap-5 transition-all duration-500 cursor-pointer hover:border-m2m-gold/40 hover:bg-m2m-panel/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-m2m-gold/5 group justify-center items-center text-center"
    >
      <Icon className="w-7 h-7 text-m2m-gold opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
      <h3 
        className="text-lg text-m2m-cream leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>
      <p 
        className="text-xs leading-relaxed text-m2m-muted flex-1"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {body}
      </p>
      <span 
        className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold flex items-center justify-center gap-2 group-hover:gap-3.5 transition-all duration-300"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {link}
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  )
}
