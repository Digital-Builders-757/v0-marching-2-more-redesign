import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Donavan McFadden",
    title: "Founding Partner - Licensed Agent",
    image: "https://static.wixstatic.com/media/63ece0_7dd5e3a5c9f94a65bf5ec8bb7e84fb3e~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3339_edited.jpg",
    link: "/our-team/donavan-mcfadden",
  },
  {
    name: "Roger Lee",
    title: "Founding Partner - Licensed Agent",
    image: "https://static.wixstatic.com/media/63ece0_1d7c05ce2b9641c99f64e7d8d05f1f9c~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3419_edited.png",
    link: "/our-team/roger-lee",
  },
  {
    name: "Kristin Allen",
    title: "Licensed Agent",
    image: "https://static.wixstatic.com/media/63ece0_6ef8d3e6d8494b24b88e4c9f8e1f8e1e~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3420.jpg",
    link: "/our-team/kristin-allen",
  },
  {
    name: "Jalessa Hendricks",
    title: "Licensed Agent",
    image: "https://static.wixstatic.com/media/63ece0_8a1b7c5f9e4a4b5a9d8e7c6b5a4d3c2b~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jalessa.jpg",
    link: "/our-team/jalessa-hendricks",
  },
]

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Your Team
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Serving with integrity. Leading with experience.
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our unique balance of disciplined leadership, honed from military experience, combined with our local market expertise and personalized care, ensures a real estate experience that is seamless and feels effortless.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Link
                  key={index}
                  href={member.link}
                  className="group text-center"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.title}
                  </p>
                  <span className="inline-flex items-center text-[#c9a961] text-sm font-medium group-hover:gap-2 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f5f5f5] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Have a question?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/marching2more"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Book a Consultation
              </a>
              <Link
                href="/contact"
                className="inline-block border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Introduce Yourself
              </Link>
              <a
                href="tel:7572062859"
                className="inline-block border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded text-center transition-colors"
              >
                Call Us 757-206-2859
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
