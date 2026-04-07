"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Plus, Phone, Mail, MapPin } from "lucide-react"
import { gsap } from "gsap"

const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Our Team", href: "/team" },
  { label: "Partners", href: "/partners" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const menuSections = [
  {
    title: "Buyers",
    links: [
      { label: "Buy With Us", href: "/buy" },
      { label: "Search Properties", href: "/#properties" },
      { label: "VA Loan Info", href: "/buy#va-loans" },
      { label: "PCS Relocation", href: "/buy#pcs" },
    ],
  },
  {
    title: "Sellers",
    links: [
      { label: "Sell With Us", href: "/sell" },
      { label: "Free Valuation", href: "/sell#valuation" },
      { label: "Pre-Listing Checklist", href: "/sell#checklist" },
      { label: "Selling Process", href: "/sell#process" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Meet The Team", href: "/team" },
      { label: "Our Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
      { label: "Client Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book Consultation", href: "/contact#book" },
      { label: "757-206-2859", href: "tel:7572062859" },
    ],
  },
]

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuContentRef = useRef<HTMLDivElement>(null)

  // Header entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      )

      const navItems = navRef.current?.querySelectorAll("a")
      if (navItems) {
        tl.fromTo(
          navItems,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 },
          0.4
        )
      }

      tl.fromTo(
        menuBtnRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.6 },
        0.7
      )
    })

    return () => ctx.revert()
  }, [])

  // Menu open/close animation
  useEffect(() => {
    if (!overlayRef.current) return
    
    if (isOpen) {
      // First set visibility and initial state
      gsap.set(overlayRef.current, { visibility: "visible", x: "100%" })
      
      // Animate in
      gsap.to(overlayRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      })

      const sections = menuContentRef.current?.querySelectorAll(".menu-section")
      if (sections && sections.length > 0) {
        gsap.fromTo(
          sections,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power3.out" }
        )
      }
    } else {
      // Only animate out if it was previously open (not on initial render)
      if (overlayRef.current.style.visibility === "visible") {
        gsap.to(overlayRef.current, {
          opacity: 0,
          x: "100%",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            if (overlayRef.current) {
              gsap.set(overlayRef.current, { visibility: "hidden" })
            }
          },
        })
      }
    }
  }, [isOpen])

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[100]">
        {/* Cinematic top gradient for readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          }}
        />
        <div className="relative flex items-center justify-between h-20 px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex-shrink-0 opacity-0 flex items-center gap-3" aria-label="Marching2More - Home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-WlleymhFpZWiaSsI0YKWHMAcn1V6SX.avif"
              alt="Marching2More"
              width={120}
              height={43}
              className="h-[34px] md:h-[41px] w-auto"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span 
                className="text-sm md:text-base tracking-[0.15em] uppercase text-m2m-gold font-medium"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Marching 2 More
              </span>
              <span 
                className="text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-m2m-gold/70 font-light"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Real Estate Team
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - visible inline */}
          <nav ref={navRef} className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.7rem] tracking-[0.2em] uppercase text-m2m-cream/90 hover:text-m2m-gold transition-colors opacity-0"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu button - Plus icon that rotates to X when menu opens */}
          <button
            ref={menuBtnRef}
            className="w-10 h-10 flex items-center justify-center text-m2m-cream hover:text-m2m-gold transition-colors opacity-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Plus 
              className={cn(
                "w-6 h-6 transition-transform duration-500 ease-out",
                isOpen && "rotate-[135deg]"
              )} 
              strokeWidth={1.5} 
            />
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[200] opacity-0 invisible"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Background with image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20at%207.30.14%20PM-JVsmkDPrwryZHLk0Lm3Wqm4bAhGTc2.png')`,
          }}
        />
        <div className="absolute inset-0 bg-m2m-black/90" />

        {/* Top bar with centered logo and close button */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-20 px-6 md:px-10 lg:px-16 z-10">
          {/* Centered Logo */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Teams%20Recent%20Logo-GsUXoeL3EiWROX3JIa8ElUX8qrURcN.png"
            alt="The Marching 2 More Real Estate Team"
            width={180}
            height={120}
            className="h-[70px] md:h-[80px] w-auto"
          />
          
          {/* Close button - Plus rotated to X */}
          <button
            className="absolute right-6 md:right-10 lg:right-16 w-10 h-10 flex items-center justify-center text-m2m-cream/70 hover:text-m2m-cream transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Plus 
              className="w-7 h-7 rotate-[135deg] transition-transform duration-500 ease-out hover:rotate-[180deg]" 
              strokeWidth={1.5} 
            />
          </button>
        </div>

        {/* Menu Content */}
        <div 
          ref={menuContentRef}
          className="relative h-full overflow-y-auto"
        >
          <div className="min-h-full flex flex-col justify-between px-6 md:px-10 lg:px-16 py-24">
            {/* Main Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-16">
              {/* Navigation Columns */}
              {menuSections.map((section) => (
                <div key={section.title} className="menu-section opacity-0">
                  <h3 
                    className="text-sm md:text-base tracking-[0.35em] uppercase text-m2m-cream mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors font-light"
                          style={{ fontFamily: 'var(--font-nav)' }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Info - 2 columns, centered with spacing from menu */}
            <div className="menu-section opacity-0 mt-16 pt-5 flex justify-center w-full">
              <div className="grid grid-cols-2 gap-12 text-center">
                {/* Contact Info */}
                <div className="flex flex-col gap-3">
                  <h4 
                    className="text-xs tracking-[0.3em] uppercase text-m2m-gold mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Contact
                  </h4>
                  <a 
                    href="mailto:hello@marching2more.com"
                    className="flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    hello@marching2more.com
                  </a>
                  <a 
                    href="tel:7572062859"
                    className="flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    757-206-2859
                  </a>
                </div>

                {/* Office Location */}
                <div className="flex flex-col gap-3">
                  <h4 
                    className="text-xs tracking-[0.3em] uppercase text-m2m-gold mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Virginia Beach
                  </h4>
                  <p className="text-[0.6rem] tracking-wider text-m2m-muted leading-relaxed flex items-start gap-2 justify-center">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>582 Lynnhaven Pkwy Ste 400<br />Virginia Beach, VA 23452</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom - Social Links */}
            <div className="menu-section opacity-0 mt-16 pt-8 border-t border-m2m-gold/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span 
                className="text-[0.65rem] tracking-[0.35em] uppercase text-m2m-muted"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Follow Us On:
              </span>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
