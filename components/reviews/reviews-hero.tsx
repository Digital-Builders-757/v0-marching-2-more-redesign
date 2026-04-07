"use client"

export function ReviewsHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#050d06' }}>
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-post-ai-image-18606-aD4XAV7ezcKzf721bywZKhRSXzTIIw.png')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(5,13,6,0.7) 0%, rgba(5,13,6,0.5) 40%, rgba(5,13,6,0.6) 70%, rgba(5,13,6,0.85) 100%),
            linear-gradient(to right, rgba(5,13,6,0.3) 0%, rgba(5,13,6,0.2) 50%, rgba(5,13,6,0.3) 100%)
          `,
        }}
      />

      <div className="relative z-[2] px-6 py-24 md:px-16 lg:px-24 md:py-32 text-center">
        {/* Headline */}
        <h1 
          data-gsap="blur-in"
          className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-light text-m2m-cream mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ★ ★ ★ ★ ★ Building a Reputation of
          <br />
          <span className="italic text-m2m-gold">Integrity and Trust</span>
        </h1>

        {/* Subtitle */}
        <p 
          data-gsap="fade-up"
          data-gsap-delay="0.2"
          className="text-base md:text-lg text-m2m-muted max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
        >
          Hear from the military families and Hampton Roads residents who trusted 
          Marching 2 More with one of life&apos;s biggest decisions.
        </p>
      </div>
    </section>
  )
}
