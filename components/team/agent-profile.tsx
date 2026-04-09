import Image from "next/image"

type AgentProfileProps = {
  name: string
  role: string
  licenseNumber?: string
  image: string
  bio: string
}

export function AgentProfile({ name, role, licenseNumber, image, bio }: AgentProfileProps) {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero section with background image */}
      <section className="relative px-6 pt-28 pb-20 md:px-16 lg:px-24 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        {/* Dark overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(5, 13, 6, 0.6)" }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Role */}
          <h2
            className="text-[clamp(1.5rem,3vw,2rem)] font-light text-m2m-cream mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {role}
          </h2>

          {/* Name */}
          <h1
            className="font-light italic text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-m2m-cream mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h1>

          {/* License number */}
          {licenseNumber && (
            <p
              className="text-sm text-m2m-cream/70 mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {licenseNumber}
            </p>
          )}

          {/* Bio */}
          <p
            className="text-base leading-relaxed text-m2m-cream/90 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {bio}
          </p>
        </div>
      </section>
    </main>
  )
}
