"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Image
              src="https://static.wixstatic.com/media/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png/v1/fill/w_233,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png"
              alt="Marching 2 More Real Estate Team"
              width={175}
              height={62}
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Marching 2 More Real Estate Team is a veteran-owned real estate group serving military families in Hampton Roads, Virginia. We specialize in VA loans, PCS relocations, and helping service members find their perfect home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>582 Lynnhaven Pkwy ste 400</p>
              <p>Virginia Beach, VA 23452</p>
              <p>United States</p>
              <p className="mt-4">
                <a href="tel:7572062859" className="hover:text-white transition-colors">
                  757-206-2859
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Marching 2 More Real Estate Team. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
