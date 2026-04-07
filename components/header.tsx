"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"
import { Plus, Phone, Mail, MapPin } from "lucide-react"
import { gsap } from "gsap"
import { CALENDLY_URL } from "@/lib/m2m-constants"

const navLinks = [
  { label: "Work With Us", href: "/home-search" },
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
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
      { label: "757-206-2859", href: M2M_PHONE_HREF },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex-shrink-0 opacity-0" aria-label="Marching 2 More - Home">
            <Image
              src="https://static.wixstatic.com/media/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png/v1/fill/w_233,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png"
              alt="Marching 2 More Real Estate Team"
              width={175}
              height={62}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Agent quick-links (Wix parity) */}
            <div className="hidden lg:flex items-center gap-1.5">
              <Link
                href="/profile-page"
                className="relative h-9 w-9 overflow-hidden rounded-full border border-m2m-gold/20 hover:border-m2m-gold/50 transition"
                aria-label="Donavan McFadden profile"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif"
                  alt=""
                  fill
                  className="object-cover"
                />
              </Link>
              <Link
                href="/roger-lee"
                className="relative h-9 w-9 overflow-hidden rounded-full border border-m2m-gold/20 hover:border-m2m-gold/50 transition"
                aria-label="Roger Lee profile"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif"
                  alt=""
                  fill
                  className="object-cover"
                />
              </Link>
              <Link
                href="/kristin-s-profile"
                className="relative h-9 w-9 overflow-hidden rounded-full border border-m2m-gold/20 hover:border-m2m-gold/50 transition"
                aria-label="Kristin Allen profile"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristin%20copy-lMfUtkHjgotsvjdeeUby9aj3quqUGu.avif"
                  alt=""
                  fill
                  className="object-cover"
                />
              </Link>
            </div>

            {/* Book CTA (Wix parity) */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              BOOK A HOME CONSULTATION
            </a>

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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-WlleymhFpZWiaSsI0YKWHMAcn1V6SX.avif"
            alt="Marching2More"
            width={140}
            height={50}
            className="h-[38px] md:h-[44px] w-auto"
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
                    href={M2M_PHONE_HREF}
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
