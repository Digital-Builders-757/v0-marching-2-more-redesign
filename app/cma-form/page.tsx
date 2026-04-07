import { redirect } from "next/navigation"

/**
 * Wix parity route.
 *
 * Wix uses this as a CMA (Comparative Market Analysis) request form.
 * For now we route users to the closest equivalent page in the rebuild.
 */
export default function CMAFormPage() {
  redirect("/free-home-valuation")
}
