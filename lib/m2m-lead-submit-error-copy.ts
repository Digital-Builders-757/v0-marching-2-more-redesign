import type { SubmitLeadFailure } from "@/lib/ghl/types"

const CRM_USER_MESSAGE =
  "We could not reach our CRM. Please call us or try again shortly."

export type LeadSubmitFailureMessaging = {
  eyebrow: string
  title: string
  body: string
  /** Short, action-oriented line — shown after body for non-validation failures. */
  nextStep?: string
  /** Show phone + contact link (skip for simple field validation). */
  showEscalationPath: boolean
  /** Shown in a compact reference well; omit for validation-only errors. */
  referenceId?: string
}

function isCrmUnreachableCopy(error: string, code?: string): boolean {
  if (code === "ghl_upstream_error" || code === "internal_error") return true
  if (error.includes("could not reach our CRM")) return true
  return false
}

/**
 * Maps API failure payloads to calm, brand-appropriate copy.
 * Does not expose `failed_step`, HTTP status, or raw upstream bodies.
 */
export function getLeadSubmitFailureMessaging(failure: SubmitLeadFailure): LeadSubmitFailureMessaging {
  const { error, code, correlationId } = failure

  if (code === "validation_error") {
    return {
      eyebrow: "Almost there",
      title: "Please adjust the highlighted item",
      body: error,
      nextStep: "Update the highlighted item, then send again.",
      showEscalationPath: false,
    }
  }

  if (code === "config_error") {
    return {
      eyebrow: "Temporarily unavailable",
      title: "This form is paused for a quick update",
      body: "We’re finishing a behind-the-scenes improvement to how requests come in. You can still reach us by phone or through our contact page — we’ll take care of you right away.",
      nextStep: "Call or text us, or use the contact page and we’ll complete your request.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "bad_request") {
    return {
      eyebrow: "Let’s try that again",
      title: "Your submission didn’t go through",
      body: "Something in the request didn’t line up on our side. It’s safe to try once more — or reach out and we’ll help you finish.",
      nextStep: "Tap send again, or contact us and we’ll enter your details for you.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (isCrmUnreachableCopy(error, code) || error === CRM_USER_MESSAGE) {
    return {
      eyebrow: "We’re still here for you",
      title: "We couldn’t confirm your request just now",
      body: "It may not have reached our team on the first try. You’re welcome to try again in a moment — or call or message us and we’ll make sure nothing is missed.",
      nextStep: "Wait a moment and try again, or call us and we’ll take your information by phone.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "bad_response") {
    return {
      eyebrow: "Connection interrupted",
      title: "We couldn’t finish sending this",
      body: "The link to our system hiccupped. Please try once more — if it happens again, contact us directly and we’ll pick up from there.",
      nextStep: "Try sending again. If it persists, reach us by phone or on the contact page.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  return {
    eyebrow: "We’re still here for you",
    title: "Something didn’t go through",
    body: "Your request may not have completed. Try again in a moment, or reach us by phone or on the contact page — we’ll sort it out with you.",
    nextStep: "Try again shortly, or contact us and we’ll help you complete it.",
    showEscalationPath: true,
    referenceId: correlationId,
  }
}
