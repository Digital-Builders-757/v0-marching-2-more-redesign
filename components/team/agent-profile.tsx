import Image from "next/image"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

type AgentProfileProps = {
  name: string
  firstName: string
  role: string
  licenseNumber?: string
  image: string
  /** Tailwind object-position helpers, e.g. `object-[center_28%]` to keep full head in frame. */
  imageObjectPosition?: string
  bio: string
  email?: string
  linkedin?: string
  instagram?: string
}

export function AgentProfile({ 
  name, 
  firstName,
  role, 
  licenseNumber, 
  image,
  imageObjectPosition,
  bio,
  email,
  linkedin,
  instagram
}: AgentProfileProps) {
  // Split bio into paragraphs
  const bioParagraphs = bio.split('\n\n').filter(p => p.trim())

  return (
    <main id="main-content" tabIndex={-1} className="bg-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <M2mContainer>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr_400px] lg:gap-16">
            {/* Left column - Info & CTAs */}
            <div>
              {/* Role */}
              <p className="mb-4 text-base font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-nav)" }}>
                {role}
              </p>

              {/* Name */}
              <h1
                className="mb-4 font-light text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-m2m-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {name}
              </h1>

              {/* License info */}
              {licenseNumber && (
                <div className="mb-6">
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                    Licensed Agent of Virginia
                  </p>
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                    {licenseNumber}
                  </p>
                </div>
              )}

              {/* Divider */}
              <div className="mb-8 h-px w-full bg-m2m-deep/15" />

              {/* CTAs */}
              <div className="flex flex-col gap-4">
                <Button variant="m2mPanel" asChild className="h-auto rounded-full px-6 py-4 text-sm">
                  <Link href="/contact-us" style={{ fontFamily: "var(--font-nav)" }}>
                    Work with {firstName}
                  </Link>
                </Button>

                {email && (
                  <Button
                    variant="outline"
                    asChild
                    className="h-auto rounded-full border-2 border-m2m-deep bg-transparent px-6 py-4 text-left text-sm text-m2m-deep shadow-none hover:bg-m2m-cream/40"
                  >
                    <a
                      href={`mailto:${email}`}
                      className="break-words"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      {email}
                    </a>
                  </Button>
                )}

                <Button
                  variant="outline"
                  asChild
                  className="h-auto rounded-full border-2 border-m2m-deep/20 bg-transparent px-6 py-4 text-sm text-m2m-muted shadow-none hover:border-m2m-deep/35 hover:bg-m2m-cream/30 hover:text-m2m-deep"
                >
                  <a href={M2M_PHONE_HREF} style={{ fontFamily: "var(--font-nav)" }}>
                    {M2M_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4 mt-6">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-m2m-muted transition hover:text-m2m-deep"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-m2m-muted transition hover:text-m2m-deep"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Center column - Bio */}
            <div>
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-base leading-relaxed text-m2m-deep/90 last:mb-0"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right column - Photo */}
            <div className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority
                  className={cn("object-cover", imageObjectPosition)}
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
            </div>
          </div>
        </M2mContainer>
      </section>
    </main>
  )
}
