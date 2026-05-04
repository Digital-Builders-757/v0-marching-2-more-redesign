import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { GetLicensePage } from "@/components/get-license-in-va/get-license-page"
import { Header } from "@/components/header"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Virginia Real Estate License | Marching 2 More",
  description:
    "Start your Virginia salesperson license through Moseley Real Estate School — Live Class + Package with the Marching 2 More referral path.",
  path: "/get-license-in-va",
})

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
