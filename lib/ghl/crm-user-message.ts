import type { GhlApiStep } from "./types"

/** Machine codes returned in JSON for UI copy (`getLeadSubmitFailureMessaging`). */
export type CrmUserFacingCode =
  | "crm_auth"
  | "crm_rate_limit"
  | "crm_validation"
  | "crm_duplicate_or_merge"
  | "crm_server"
  | "crm_unreachable"

export type CrmDuplicateLogHint = "email" | "phone" | "merge" | "unknown"

export type CrmValidationLogHint =
  | "generic"
  | "email_field"
  | "phone_field"
  | "custom_field"
  | "not_found"

export type CrmClassifiedError = {
  userError: string
  code: CrmUserFacingCode
  /** Server logs only — duplicate/conflict triage */
  logDuplicateHint?: CrmDuplicateLogHint
  /** Server logs only — validation triage */
  logValidationHint?: CrmValidationLogHint
}

function normalizedHints(message: string, upstreamDetail?: string): string {
  return `${message}\n${upstreamDetail ?? ""}`.toLowerCase()
}

function looksLikeDuplicateOrMerge(hints: string): boolean {
  return (
    hints.includes("duplicate") ||
    hints.includes("already exists") ||
    hints.includes("contact already") ||
    hints.includes("merge conflict") ||
    hints.includes("already in the system") ||
    hints.includes("record already") ||
    hints.includes("multiple contacts") ||
    hints.includes("cannot merge")
  )
}

function duplicateLogHint(hints: string): CrmDuplicateLogHint {
  if (hints.includes("email") && (hints.includes("duplicate") || hints.includes("exists") || hints.includes("match")))
    return "email"
  if (
    hints.includes("phone") &&
    (hints.includes("duplicate") || hints.includes("exists") || hints.includes("match") || hints.includes("assigned"))
  )
    return "phone"
  if (hints.includes("merge") || hints.includes("conflict")) return "merge"
  return "unknown"
}

function validationLogHint(hints: string, httpStatus: number): CrmValidationLogHint {
  if (httpStatus === 404) return "not_found"
  if (
    hints.includes("email") &&
    (hints.includes("invalid") || hints.includes("format") || hints.includes("required"))
  )
    return "email_field"
  if (
    hints.includes("phone") &&
    (hints.includes("invalid") || hints.includes("format") || hints.includes("required"))
  )
    return "phone_field"
  if (hints.includes("custom field") || hints.includes("customfield") || hints.includes("field id"))
    return "custom_field"
  return "generic"
}

function userErrorForValidation(hints: string, httpStatus: number): string {
  const logHint = validationLogHint(hints, httpStatus)
  if (logHint === "email_field") {
    return "We couldn’t save this because the email doesn’t look valid to our system. Double-check the address, then try again — or call us with the reference below."
  }
  if (logHint === "phone_field") {
    return "We couldn’t save this because the phone number didn’t match what our system expects. Use a full U.S. number with area code, then try again — or call us with the reference below."
  }
  if (logHint === "custom_field") {
    return "We couldn’t save this because a profile field didn’t match what our system expects. Please try again in a moment — if it keeps happening, call us with the reference below so we can adjust the mapping."
  }
  if (logHint === "not_found") {
    return "Our system couldn’t find a related record for this request. Please try again — or call us with the reference below."
  }
  return "Something in your submission didn’t match what our system expects — often email format, phone, or a required field. Double-check your entries and try again, or call us with the reference below."
}

/**
 * Maps GHL HTTP status + upstream text to user-safe `error` string and `code`.
 * Does not echo raw API bodies.
 */
export function classifyGhlUserFacingError(params: {
  httpStatus: number
  upstreamMessage: string
  upstreamDetail?: string
  step?: GhlApiStep
}): CrmClassifiedError {
  const { httpStatus, upstreamMessage, upstreamDetail } = params
  const hints = normalizedHints(upstreamMessage, upstreamDetail)

  if (httpStatus === 0) {
    return {
      code: "crm_unreachable",
      userError:
        "We couldn’t reach our records system — this is usually a brief network issue. Please try again, or call or message us with the reference below.",
    }
  }

  if (httpStatus === 401 || httpStatus === 403) {
    return {
      code: "crm_auth",
      userError:
        "We can’t connect to our records system with our current setup. Please call or text us, or use the contact page — we’ll take care of your request.",
    }
  }

  if (httpStatus === 429) {
    return {
      code: "crm_rate_limit",
      userError:
        "We’re getting a high volume of submissions right now. Please wait a minute and try again.",
    }
  }

  if (httpStatus >= 500) {
    return {
      code: "crm_server",
      userError:
        "Our records system is having a temporary issue. Please try again in a few minutes, or call us and we’ll enter your details.",
    }
  }

  if (httpStatus === 409 || looksLikeDuplicateOrMerge(hints)) {
    const logDuplicateHint = duplicateLogHint(hints)
    /** Strict pipeline: no “thank you” unless all steps succeed — do not imply a silent partial save. */
    return {
      code: "crm_duplicate_or_merge",
      logDuplicateHint,
      userError:
        logDuplicateHint === "phone"
          ? "We couldn’t finish saving this submission because our system already has a contact that matches this phone number. Call or text us with the reference below — we’ll help without creating duplicate records."
          : logDuplicateHint === "email"
            ? "We couldn’t finish saving this submission because our system already has a contact with this email. Call or text us with the reference below — we’ll connect this request to the right record."
            : "We couldn’t finish saving this submission because our system detected an existing contact that matches part of what you sent. Call or text us with the reference below — we’ll take care of you.",
    }
  }

  if (httpStatus === 400 || httpStatus === 404 || httpStatus === 422) {
    const logValidationHint = validationLogHint(hints, httpStatus)
    return {
      code: "crm_validation",
      logValidationHint,
      userError: userErrorForValidation(hints, httpStatus),
    }
  }

  return {
    code: "crm_unreachable",
    userError:
      "We couldn’t finish sending your request. Please try again shortly, or call or message us with the reference below.",
  }
}
