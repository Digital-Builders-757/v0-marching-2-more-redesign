import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { M2M_AGENT_BOOKING_URL_DONAVAN } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Donavan McFadden | Marching 2 More",
  description:
    "Discover Donavan's passion and expertise in real estate. From his Navy career to founding Marching 2 More Team, he's committed to helping you achieve your goals.",
  path: "/profile-page",
  openGraphTitle: "Donavan McFadden | Marching 2 More",
})

export default function DonavanProfilePage() {
  return (
    <>
      <Header />
      {/* Social URLs verified 2026-05 — personal IG + company IG + LinkedIn */}
      <AgentProfile
        name="Donavan McFadden"
        firstName="Donavan"
        bookingHref={M2M_AGENT_BOOKING_URL_DONAVAN}
        role="Founding Partner"
        licenseNumber="0225-233-714"
        image={M2M_MEDIA.headshotDonavan}
        imageObjectPosition="object-[center_32%]"
        email="Donavan@marching2more.com"
        linkedin="https://www.linkedin.com/in/donavan-mcfadden"
        instagramPersonal="https://www.instagram.com/mr.marching2more/"
        bio={`Donavan's experience in the industry has given him a deep understanding of the real estate market which he is committed to employing in helping his clients achieve their goals. Donavan's passion for real estate was sparked at a young age when he saw firsthand the struggles of his mother as she worked to provide for her family. This drive led him to pursue a career in the United States Navy, where he honed his leadership skills and gained valuable life experience.

While still on active duty, Donavan took advantage of the VA Home Loan program and purchased his first property, setting the foundation for his future success in real estate investing. Seeing the impact that home ownership and real estate investing had on his own life, he formed the Marching 2 More Team to help others achieve their own real estate goals.

With a dedication to education and a focus on the individual needs of his clients, Donavan is dedicated to providing the highest level of service and expertise. Whether you're looking to buy, sell, or invest in real estate, he's here to guide you through every step of the process.`}
      />
      <Footer />
    </>
  )
}
