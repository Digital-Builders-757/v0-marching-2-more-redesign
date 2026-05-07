import { describe, expect, it } from "vitest"

import { parseSubmitLeadBody } from "./validate"

describe("parseSubmitLeadBody", () => {
  it("rejects future DOB", () => {
    const future = new Date()
    future.setUTCFullYear(future.getUTCFullYear() + 1)
    const y = future.getUTCFullYear()
    const m = String(future.getUTCMonth() + 1).padStart(2, "0")
    const d = String(future.getUTCDate()).padStart(2, "0")
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Test User",
      email: "a@b.co",
      date_of_birth: `${y}-${m}-${d}`,
    })
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.code).toBe("validation_error")
  })

  it("accepts valid historical DOB", () => {
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Test User",
      email: "a@b.co",
      date_of_birth: "1988-06-15",
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.dateOfBirth).toBe("1988-06-15")
  })

  it("passes urgency_explicit through", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Test User",
      email: "a@b.co",
      urgency: "Not sure yet",
      urgency_explicit: false,
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.urgencyExplicit).toBe(false)
  })

  it("passes guide_name through when valid", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Test User",
      email: "a@b.co",
      guide_name: "  Divorce guide  ",
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.guideName).toBe("Divorce guide")
  })

  it("rejects guide_name longer than 200 chars", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Test User",
      email: "a@b.co",
      guide_name: "x".repeat(201),
    })
    expect(r.ok).toBe(false)
  })

  it("accepts optional credit quiz attribution fields", () => {
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Test User",
      email: "a@b.co",
      quiz_score_range: "Below 580 (Poor)",
      quiz_result: "urgent",
      quiz_source: "credit-repair-quiz",
    })
    expect(r.ok).toBe(true)
    if (r.ok) {
      expect(r.data.quizScoreRange).toBe("Below 580 (Poor)")
      expect(r.data.quizResult).toBe("urgent")
      expect(r.data.quizSource).toBe("credit-repair-quiz")
    }
  })

  it("accepts FHA buyer quiz custom field payload", () => {
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Jane Buyer",
      email: "jane@example.com",
      quiz_q1_buyer_type: "First-time homebuyer",
      quiz_q2_credit: "580 – 669",
      quiz_q3_down_payment: "Less than 3.5% — want grant/DPA options",
      quiz_q4_timeline: "3–6 months",
      quiz_q5_concern: "Down payment or savings",
      quiz_result: "explore",
      quiz_source: "fha-loan-quiz",
      source_path: "/fha-loan",
    })
    expect(r.ok).toBe(true)
    if (r.ok) {
      expect(r.data.quizQ1BuyerType).toBe("First-time homebuyer")
      expect(r.data.quizQ5Concern).toBe("Down payment or savings")
      expect(r.data.quizResult).toBe("explore")
    }
  })

  it("accepts foreclosure_intent when phone and address are sufficient", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Pat Owner",
      email: "pat@example.com",
      phone: "7575550100",
      address: "23451",
      foreclosure_intent: "guide",
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.foreclosureIntent).toBe("guide")
  })

  it("rejects foreclosure_intent when phone digits are fewer than 10", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Pat Owner",
      email: "pat@example.com",
      phone: "757555010",
      address: "Virginia Beach, VA",
      foreclosure_intent: "speak_now",
    })
    expect(r.ok).toBe(false)
  })

  it("rejects foreclosure_intent when address is missing", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Pat Owner",
      email: "pat@example.com",
      phone: "7575550100",
      foreclosure_intent: "both",
    })
    expect(r.ok).toBe(false)
  })
})
