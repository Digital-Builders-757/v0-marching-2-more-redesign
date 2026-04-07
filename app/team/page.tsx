import { redirect } from "next/navigation"

/**
 * Legacy rebuild route.
 *
 * Wix parity route is `/our-team`.
 */
export default function TeamRedirectPage() {
  redirect("/our-team")
}
