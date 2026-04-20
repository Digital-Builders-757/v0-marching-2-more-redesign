import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { GetLicensePage } from "@/components/get-license-in-va/get-license-page"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Get Your Virginia Real Estate License | Marching 2 More",
  description:
    "Enroll in Moseley Real Estate School’s Virginia salesperson program — Live Class + Package and Donavan McFadden referral path with Marching 2 More.",
}

export default function GetLicenseInVaPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <GetLicensePage />
      </main>
      <Footer />
    </>
  )
}
