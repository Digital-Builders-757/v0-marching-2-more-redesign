import type { SubmitLeadFailure } from "@/lib/ghl/types"

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

  if (code === "crm_validation") {
    return {
      eyebrow: "Check your details",
      title: "We couldn’t save this as entered",
      body: error,
      nextStep: "Review email and phone, then try again — or call us with the reference below.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "crm_duplicate_or_merge") {
    return {
      eyebrow: "You may already be in our system",
      title: "We matched an existing contact",
      body: error,
      nextStep: "If you’re not sure everything updated, call or message us with the reference below.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "crm_auth") {
    return {
      eyebrow: "Connection issue",
      title: "Our system didn’t accept the handoff",
      body: error,
      nextStep: "Please call or use the contact page — we’ll enter your request manually.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "crm_rate_limit") {
    return {
      eyebrow: "Please wait a moment",
      title: "Too many submissions at once",
      body: error,
      nextStep: "Wait a minute, then try again.",
      showEscalationPath: false,
    }
  }

  if (code === "crm_server") {
    return {
      eyebrow: "Temporary outage",
      title: "Our records system is busy",
      body: error,
      nextStep: "Try again in a few minutes, or call us and we’ll take your information.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  if (code === "crm_unreachable") {
    return {
      eyebrow: "We’re still here for you",
      title: "We couldn’t finish sending this",
      body: error,
      nextStep: "Try again shortly, or call or message us with the reference below.",
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

  if (code === "internal_error") {
    return {
      eyebrow: "Something went wrong",
      title: "Please try again",
      body: error,
      nextStep: "If it happens again, contact us with the reference below.",
      showEscalationPath: true,
      referenceId: correlationId,
    }
  }

  return {
    eyebrow: "We’re still here for you",
    title: "Something didn’t go through",
    body: error,
    nextStep: "Try again in a moment, or reach us by phone or on the contact page — we’ll sort it out with you.",
    showEscalationPath: true,
    referenceId: correlationId,
  }
}
