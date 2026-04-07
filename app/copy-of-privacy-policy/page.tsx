import { redirect } from "next/navigation"

export default function DisclaimersRedirectPage() {
  // Wix uses /copy-of-privacy-policy for “Disclaimers”. Consolidate under privacy policy.
  redirect("/privacy-policy")
}
