import { redirect } from "next/navigation"

/**
 * Legacy rebuild route.
 *
 * Wix parity route is `/free-home-valuation`.
 */
export default function HomeValuationRedirectPage() {
  redirect("/free-home-valuation")
}
