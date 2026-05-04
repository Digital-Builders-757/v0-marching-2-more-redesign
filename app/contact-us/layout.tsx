import type { Metadata } from "next"
import type { ReactNode } from "react"

import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Contact Marching 2 More | Hampton Roads",
  description:
    "Reach the Marching 2 More team in Virginia Beach — buyer or seller intake, consultation requests, phone, or schedule online. Licensed, veteran-owned Hampton Roads advisors.",
  path: "/contact-us",
  openGraphTitle: "Contact Marching 2 More",
})

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return children
}
