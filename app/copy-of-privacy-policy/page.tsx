import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"
import { M2mPolicyStub } from "@/components/m2m-policy-stub"

export const metadata = { title: "Privacy Policy (archive) | Marching 2 More" }

export default function CopyOfPrivacyPolicyPage() {
  return (
    <M2mInnerPageShell>
      <div className="pt-24 px-6 md:px-16">
        <M2mPolicyStub title="Privacy Policy (archive copy)" />
      </div>
    </M2mInnerPageShell>
  )
}
