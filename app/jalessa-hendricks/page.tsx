import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentProfile } from "@/components/team/agent-profile"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { M2M_AGENT_BOOKING_HREF_JALESSA } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Jalessa Hendricks | Marching 2 More",
  description:
    "Jalessa Hendricks — Virginia licensed agent with Marching 2 More, Hampton Roads native, Chemistry & Biology background.",
  path: "/jalessa-hendricks",
  openGraphTitle: "Jalessa Hendricks | Marching 2 More",
})

export default function JalessaHendricksProfilePage() {
  return (
    <>
      <Header />
      {/* PROFILE_DATA_GAP: Jalessa Hendricks — personal Instagram + LinkedIn URLs not provided; company Instagram via AgentProfile. */}
      <AgentProfile
        name="Jalessa Hendricks"
        firstName="Jalessa"
        bookingHref={M2M_AGENT_BOOKING_HREF_JALESSA}
        role="Licensed Agent"
        licenseNumber="022-527-4391"
        image={M2M_MEDIA.headshotJalessa}
        imageObjectPosition="object-[center_28%]"
        email="Jalessa@marching2more.com"
        bio={`Jalessa Hendricks is a proud Hampton Roads native, dedicated mother, and VCU alum who brings a unique blend of heart, precision, and purpose to the Marching 2 More team. With a background in Chemistry and Biology, she approaches real estate the same way she approached the lab: with attention to detail, a steady hand, and a commitment to getting every step of the process right.

For Jalessa, real estate is more than a career. It is an extension of who she is. She leads with prayerful intention, selfless care, and a nurturing spirit, creating a calm and supportive experience for every family she serves. Her goal is simple: to help clients make confident, well-informed decisions during one of the most important transitions of their lives.

Jalessa naturally blends her background with her love for people. She believes that, just like in chemistry, every successful home journey begins with the right elements, a strong bond, and a solid structure. She evaluates the details, studies the patterns, and puts the right formula in place to help her clients succeed in any market.

Whether you are buying for the first time, moving up, downsizing, or investing, Jalessa is committed to being your advocate, your guide, and your steady voice of clarity. She is passionate about helping families build stability, generational wealth, and new beginnings in the communities she loves.`}
      />
      <Footer />
    </>
  )
}
