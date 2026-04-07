import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const valuationSteps = [
  {
    number: "01",
    title: "Request Your Valuation",
    description: "Fill out a quick form or give us a call. We'll gather some basic information about your property.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description: "Our team conducts a comprehensive analysis of your local market, comparable sales, and current trends.",
  },
  {
    number: "03",
    title: "Property Review",
    description: "We'll review your property's unique features, upgrades, and condition to provide an accurate assessment.",
  },
  {
    number: "04",
    title: "Receive Your Report",
    description: "Get a detailed valuation report with our recommended listing price and market insights.",
  },
]

export const metadata = {
  title: "Free Home Valuation | Marching 2 More Real Estate",
  description: "Get a free, no-obligation home valuation from Marching 2 More Real Estate. Learn your home's true market value today.",
}

export default function HomeValuationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Home Valuation
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Sell with confidence. Learn your home&apos;s true value.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Our expert team will provide you with a comprehensive market analysis and accurate valuation of your property - absolutely free and with no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-10 py-4 rounded text-lg transition-colors"
            >
              Get Your Free Valuation
            </Link>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Valuation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valuationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#c9a961] text-black font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Listing Checklist Section */}
        <section className="bg-[#f5f5f5] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get The Pre-Listing Checklist
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our 20 page guide to assist you with every phase of selling your home. From preparing your property to closing the deal, we&apos;ve got you covered.
            </p>
            <a
              href="#"
              className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-10 py-4 rounded text-lg transition-colors"
            >
              Download Free Checklist
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to learn your home&apos;s value?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free, no-obligation home valuation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Request Valuation
              </Link>
              <a
                href="tel:7572062859"
                className="inline-block border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Call 757-206-2859
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
