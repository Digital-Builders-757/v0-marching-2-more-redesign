import { redirect } from "next/navigation"

export default function DisclaimersRedirectPage() {
  // Wix uses /copy-of-privacy-policy for “Disclaimers”. We’ll consolidate into /privacy-policy.
  redirect("/privacy-policy")
}
