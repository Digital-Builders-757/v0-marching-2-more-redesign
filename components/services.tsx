"use client"

import { ArrowRight } from "lucide-react"

const partners = [
  {
    name: "New World Builders",
    category: "General Contractors",
    link: "#",
  },
  {
    name: "Off Load Moving",
    category: "Moving",
    link: "#",
  },
  {
    name: "R.S. Andrews",
    category: "HVAC",
    link: "#",
  },
  {
    name: "QAI",
    category: "Home Inspection",
    link: "#",
  },
  {
    name: "John Edwards",
    category: "Pest & Termite",
    link: "#",
  },
  {
    name: "True North Title",
    category: "Title",
    link: "#",
  },
  {
    name: "Cara Erickson of Atlantic Bay Mortgage",
    category: "Lending",
    link: "#",
  },
  {
    name: "2-10 Home Warranty",
    category: "Home Warranty",
    link: "#",
  },
]

export function Services() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You&apos;re in great hands.
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Financing, renovations, moving solutions
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl font-bold text-[#c9a961]">MARCHING 2 MORE</span>
            <span className="text-gray-600">REALTY GROUP</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            And so much more. Access a network of trusted local leaders. We&apos;ve experienced their professionalism and standard of excellence first hand.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#c9a961] transition-colors flex items-center gap-2">
                {partner.name}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-500">{partner.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
