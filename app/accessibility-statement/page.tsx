import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"
import { M2mPolicyStub } from "@/components/m2m-policy-stub"

export const metadata = { title: "Accessibility Statement | Marching 2 More" }

export default function AccessibilityPage() {
  return (
    <M2mInnerPageShell>
      <div className="pt-24 px-6 md:px-16">
        <M2mPolicyStub title="Accessibility Statement" />
      </div>
    </M2mInnerPageShell>
  )
}
