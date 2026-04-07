export function Agent() {
  return (
    <section className="bg-m2m-deep px-6 py-16 md:px-[60px] md:py-[120px] border-t border-m2m-gold/20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
        {/* Photo placeholder */}
        <div className="relative aspect-[4/3] lg:aspect-[3/4] bg-m2m-panel border border-m2m-gold/20 rounded-xl flex items-center justify-center overflow-hidden">
          <span className="font-serif text-8xl text-m2m-gold opacity-10 italic">
            M2
          </span>
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-m2m-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7">
          {/* Kicker */}
          <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-m2m-gold">
            <span className="w-6 h-px bg-m2m-gold" />
            Meet Your Team
          </div>

          {/* Name */}
          <h2 className="font-serif font-light text-[clamp(2.5rem,4vw,4rem)] leading-none text-m2m-cream">
            Marching 2 More <br />
            <em className="italic text-m2m-gold">Realty Group</em>
          </h2>

          {/* Title */}
          <p className="text-xs tracking-[0.2em] uppercase text-m2m-muted">
            Licensed Real Estate Professionals in Virginia Beach, VA, USA
          </p>

          {/* Bio */}
          <p className="text-sm leading-relaxed text-m2m-muted-lt pl-5 border-l border-m2m-gold/20 max-w-lg">
            582 Lynnhaven Pkwy ste 400, Virginia Beach, VA 23452, United States. We are a veteran-owned real estate team dedicated to serving military families in Hampton Roads with integrity and expertise.
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-8">
            <Credential number="500+" label="Families Helped" />
            <Credential number="15+" label="Years Experience" />
            <Credential number="MRP" label="Certified" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Credential({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-3xl font-light text-m2m-cream">
        {number}
      </span>
      <span className="text-[0.58rem] tracking-[0.15em] uppercase text-m2m-muted">
        {label}
      </span>
    </div>
  )
}
