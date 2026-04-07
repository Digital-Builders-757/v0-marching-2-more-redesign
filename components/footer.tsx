"use client"

import Link from "next/link"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"

const footerLinks = {
  properties: [
    { label: "Browse All", href: "#" },
    { label: "New Listings", href: "#" },
    { label: "Luxury Homes", href: "#" },
    { label: "Investment", href: "#" },
  ],
  services: [
    { label: "VA Loans", href: "#" },
    { label: "Buy a Home", href: "#" },
    { label: "Sell a Home", href: "#" },
    { label: "PCS Moves", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-m2m-black border-t border-m2m-gold/20">
      {/* Newsletter */}
      <div 
        data-gsap="fade-up"
        className="bg-black/30 border-b border-m2m-gold/20 px-6 py-8 md:px-[60px] md:py-10 flex flex-col lg:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col gap-1.5 text-center lg:text-left">
          <h3 
            className="text-lg font-light text-m2m-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stay in the Loop
          </h3>
          <p 
            className="text-xs text-m2m-muted italic"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Market updates, new listings, and military-specific resources.
          </p>
        </div>

        <form className="flex w-full lg:w-auto max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-black/40 border border-m2m-gold/20 border-r-0 text-m2m-cream text-sm px-5 py-3.5 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
          <button
            type="submit"
            data-gsap="magnetic"
            className="bg-m2m-gold text-m2m-deep text-[0.6rem] tracking-[0.2em] uppercase font-medium px-7 py-3.5 transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Main footer with staggered columns */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-16 md:px-[60px] border-b border-m2m-gold/20"
        data-gsap="stagger-children"
        data-gsap-direction="up"
      >
        {/* Brand */}
        <div data-gsap-child className="flex flex-col gap-5">
          <Link 
            href="#" 
            className="font-light text-xl tracking-wider uppercase text-m2m-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Marching <strong className="text-m2m-gold">2</strong> More
          </Link>
          <p 
            className="text-xs leading-relaxed text-m2m-muted italic max-w-[260px]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Serving military families in Hampton Roads with honor, integrity, and expertise.
          </p>
          <div className="flex flex-col gap-2.5">
            <a 
              href={M2M_PHONE_HREF} 
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              757-206-2859
            </a>
            <a 
              href="mailto:hello@marching2more.com" 
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              hello@marching2more.com
            </a>
          </div>
        </div>

        {/* Properties */}
        <FooterColumn title="Properties" links={footerLinks.properties} />

        {/* Services */}
        <FooterColumn title="Services" links={footerLinks.services} />

        {/* Company */}
        <FooterColumn title="Company" links={footerLinks.company} />
      </div>

      {/* Bottom bar */}
      <div 
        data-gsap="fade-up"
        className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 md:px-[60px] text-center"
      >
        <p 
          className="text-[0.6rem] tracking-wider text-m2m-muted"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          &copy; {new Date().getFullYear()} Marching 2 More. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a 
            href="#" 
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Facebook
          </a>
          <a 
            href="#" 
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Instagram
          </a>
          <a 
            href="#" 
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            LinkedIn
          </a>
        </div>

        <div className="flex gap-6">
          <Link 
            href="#" 
            className="text-[0.58rem] tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Privacy Policy
          </Link>
          <Link 
            href="#" 
            className="text-[0.58rem] tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div data-gsap-child className="flex flex-col gap-2">
      <h4 
        className="text-[0.58rem] tracking-[0.25em] uppercase text-m2m-gold mb-3"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {title}
      </h4>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-xs text-m2m-muted tracking-wider leading-loose hover:text-m2m-cream transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
