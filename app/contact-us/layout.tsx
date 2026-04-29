import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact Marching 2 More",
  description:
    "Reach the Marching 2 More team in Virginia Beach — buyer or seller intake, consultation requests, phone, or schedule online. Licensed, veteran-owned Hampton Roads real estate advisors.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Marching 2 More | Hampton Roads Real Estate",
    description:
      "Tell us your goals — we route buyers and sellers clearly and follow up with next steps fast.",
  },
}

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return children
}
