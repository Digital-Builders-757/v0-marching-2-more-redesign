"use client"

import { DM_Sans } from "next/font/google"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { Check, ChevronRight, Clock, Lock, Shield } from "lucide-react"

import { M2mBrandLogo } from "@/components/m2m-brand-logo"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { cn } from "@/lib/utils"

import {
  buildVaQuizLeadNotes,
  computeVaQuizResult,
  VA_QUIZ_BRIDGE,
  VA_QUIZ_CALCULATING,
  VA_QUIZ_CAPTURE,
  VA_QUIZ_RESULT_COPY,
  VA_QUIZ_SITUATION_OPTIONS,
  VA_QUIZ_STEPS,
  VA_QUIZ_WELCOME,
  type VaQuizAnswers,
  type VaQuizQuestionId,
  type VaQuizResultKey,
} from "./va-loan-quiz-content"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-va-assessment",
})

type FlowId =
  | "welcome"
  | "q1"
  | "q2"
  | "bridge"
  | "q3"
  | "q4"
  | "q5"
  | "capture"
  | "calculating"
  | "results"

const QUESTION_FLOW: FlowId[] = ["q1", "q2", "q3", "q4", "q5"]

function flowToProgress(flow: FlowId): { pct: number; label: string; showBar: boolean } {
  if (flow === "welcome" || flow === "bridge" || flow === "calculating" || flow === "results") {
    return { pct: 0, label: "", showBar: false }
  }
  if (flow === "capture") {
    return { pct: 100, label: "Almost done!", showBar: true }
  }
  const qi = QUESTION_FLOW.indexOf(flow as VaQuizQuestionId)
  if (qi >= 0) {
    return {
      pct: Math.round(((qi + 1) / QUESTION_FLOW.length) * 100),
      label: `Question ${qi + 1} of ${QUESTION_FLOW.length}`,
      showBar: true,
    }
  }
  return { pct: 0, label: "", showBar: false }
}

export function VaLoanAssessmentQuiz() {
  const utm = useM2mUtm()
  const [flow, setFlow] = useState<FlowId>("welcome")
  const [answers, setAnswers] = useState<VaQuizAnswers>({})
  const [resultKey, setResultKey] = useState<VaQuizResultKey | null>(null)
  const [transitionOut, setTransitionOut] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const [capture, setCapture] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    situation: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)

  const [calcPct, setCalcPct] = useState(0)

  const goToImmediate = useCallback((next: FlowId) => {
    setTransitionOut(false)
    setFlow(next)
    window.requestAnimationFrame(() => {
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [])

  const goTo = useCallback((next: FlowId) => {
    setTransitionOut(true)
    window.setTimeout(() => {
      setTransitionOut(false)
      setFlow(next)
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 170)
  }, [])

  const pickOption = (qid: VaQuizQuestionId, val: string, label: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: { val, label } }))
  }

  const navigateBack = () => {
    const map: Partial<Record<FlowId, FlowId>> = {
      q1: "welcome",
      q2: "q1",
      bridge: "q2",
      q3: "bridge",
      q4: "q3",
      q5: "q4",
      capture: "q5",
    }
    const prev = map[flow]
    if (prev) goTo(prev)
  }

  const navigateNext: Partial<Record<FlowId, () => void>> = {
    q1: () => goTo("q2"),
    q2: () => goTo("bridge"),
    bridge: () => goTo("q3"),
    q3: () => goTo("q4"),
    q4: () => goTo("q5"),
    q5: () => goTo("capture"),
  }

  useEffect(() => {
    if (flow !== "calculating") return
    setCalcPct(0)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let timeoutId: number | undefined

    if (reduceMotion) {
      setCalcPct(100)
      timeoutId = window.setTimeout(() => goToImmediate("results"), 400)
      return () => {
        if (timeoutId) clearTimeout(timeoutId)
      }
    }

    const dur = 1800
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = 1 - (1 - p) ** 3
      setCalcPct(Math.round(e * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        timeoutId = window.setTimeout(() => goToImmediate("results"), 200)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [flow, goToImmediate])

  const handleCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    if (!capture.firstName.trim() || !capture.lastName.trim() || !capture.email.trim()) return

    const type = computeVaQuizResult(answers)
    const situationLabel =
      capture.situation.trim() === ""
        ? ""
        : (VA_QUIZ_SITUATION_OPTIONS.find((o) => o.value === capture.situation)?.label ?? "")
    const notes = buildVaQuizLeadNotes({
      result: type,
      answers,
      situationValue: capture.situation.trim(),
      situationLabel,
    })
    const urgencyLabel = answers.q3?.label ?? ""
    const urgency = urgencyLabel
      ? `VA loan quiz — timeline: ${urgencyLabel}`
      : "VA loan quiz — timeline not captured"

    setSubmitting(true)
    try {
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name: `${capture.firstName.trim()} ${capture.lastName.trim()}`.trim(),
        email: capture.email.trim(),
        phone: capture.phone.trim() || undefined,
        urgency,
        urgency_explicit: Boolean(urgencyLabel),
        notes,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/va-loan-benefits",
      })
      if (!res.ok) {
        setSubmitError(res)
        return
      }
      setResultKey(type)
      goToImmediate("calculating")
    } finally {
      setSubmitting(false)
    }
  }

  const restart = () => {
    setAnswers({})
    setResultKey(null)
    setCapture({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      situation: "",
    })
    setSubmitError(null)
    setCalcPct(0)
    goTo("welcome")
  }

  const prog = flowToProgress(flow)

  const stepDef = VA_QUIZ_STEPS.find((s) => s.id === flow)
  const selectedForStep = stepDef ? answers[stepDef.id] : undefined

  return (
    <div
      ref={rootRef}
      data-testid="m2m-va-loan-assessment-quiz"
      className={cn(dmSans.variable, "font-[family-name:var(--font-va-assessment)] text-[#1c1a16]")}
    >
      <div
        className="h-1 w-full bg-gradient-to-r from-[#1e3a5f] from-60% to-60% to-[#b89230]"
        aria-hidden
      />

      <div
        className={cn(
          "overflow-hidden border-b border-[#ece8e0] bg-[#f5f4ef] transition-opacity duration-200",
          prog.showBar ? "max-h-24 opacity-100 py-3" : "max-h-0 border-transparent py-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-[560px] items-center gap-4 px-6">
          <span className="min-w-[3.75rem] text-[0.75rem] font-semibold text-[#5e5a52]">{prog.label}</span>
          <div className="h-1 flex-1 rounded-full bg-[#ece8e0]">
            <div
              className="h-full rounded-full bg-[#b89230] transition-[width] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ width: `${prog.pct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f5f4ef]">
        <div
          className={cn(
            "mx-auto max-w-[560px] px-6 py-10 sm:py-12 transition-opacity duration-200",
            transitionOut ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          {flow === "welcome" ? (
            <div className="flex flex-col gap-8">
              {/* shrink-0 + self-start: column flex defaults to stretch on cross-axis and was distorting the wordmark */}
              <div className="w-fit max-w-full shrink-0 self-start [&_img]:object-contain">
                <M2mBrandLogo variant="carouselLg" className="h-12 w-auto sm:h-14" priority alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#b89230]">
                  {VA_QUIZ_WELCOME.eyebrow}
                </p>
                <p className="max-w-[48ch] text-[#5e5a52] leading-relaxed">{VA_QUIZ_WELCOME.body}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e2ddd5] bg-white px-3 py-2 text-[0.75rem] font-medium text-[#5e5a52]">
                  <Shield className="size-3 shrink-0 text-[#1e3a5f]" aria-hidden />
                  Led by Navy veteran Donavan McFadden
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e2ddd5] bg-white px-3 py-2 text-[0.75rem] font-medium text-[#5e5a52]">
                  <Clock className="size-3 shrink-0 text-[#1e3a5f]" aria-hidden />
                  About 60 seconds
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e2ddd5] bg-white px-3 py-2 text-[0.75rem] font-medium text-[#5e5a52]">
                  <Lock className="size-3 shrink-0 text-[#1e3a5f]" aria-hidden />
                  Private &amp; confidential
                </span>
              </div>
              <button
                type="button"
                onClick={() => goTo("q1")}
                className="inline-flex items-center gap-3 self-start rounded-full bg-[#1e3a5f] px-8 py-4 text-base font-semibold text-white shadow-[0_6px_24px_rgba(30,58,95,0.35)] transition hover:bg-[#142a47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a5f]"
              >
                Start the Assessment
                <ChevronRight className="size-4" aria-hidden />
              </button>
              <p className="text-[0.75rem] italic text-[#a09c94]">{VA_QUIZ_WELCOME.social}</p>
            </div>
          ) : null}

          {stepDef && flow === stepDef.id ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#b89230]">
                  {stepDef.stepLabel}
                </span>
                <span className="text-[0.75rem] italic text-[#a09c94]">{stepDef.hint}</span>
              </div>
              <h3
                className="text-[clamp(1.5rem,1.25rem+1.1vw,2.25rem)] font-normal leading-tight text-[#1c1a16]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stepDef.heading}
              </h3>
              <p className="text-sm leading-relaxed text-[#5e5a52] sm:text-base">{stepDef.sub}</p>
              <div
                role="group"
                aria-label={stepDef.heading}
                className={cn("flex flex-col gap-3", stepDef.grid2 && "grid grid-cols-1 gap-3 sm:grid-cols-2")}
              >
                {stepDef.options.map((opt) => {
                  const sel = selectedForStep?.val === opt.val
                  const display = opt.shortLabel ?? opt.label
                  return (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => pickOption(stepDef.id, opt.val, opt.label)}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-xl border-[1.5px] bg-white p-4 text-left shadow-sm transition hover:-translate-y-px hover:border-[#1e3a5f] hover:bg-[#e6edf5] hover:shadow-md",
                        sel
                          ? "border-[#1e3a5f] bg-[#e6edf5] shadow-[0_0_0_3px_rgba(30,58,95,0.12)]"
                          : "border-[#e2ddd5]",
                      )}
                    >
                      <span className="w-8 shrink-0 text-center text-xl leading-none" aria-hidden>
                        {opt.icon}
                      </span>
                      <span className="min-w-0 flex-1 text-base font-medium leading-snug text-[#1c1a16]">
                        {display}
                      </span>
                      <span
                        className={cn(
                          "flex size-[22px] shrink-0 items-center justify-center rounded-full border-2 border-[#e2ddd5] bg-white",
                          sel && "border-[#1e3a5f] bg-[#1e3a5f]",
                        )}
                        aria-hidden
                      >
                        {sel ? <Check className="size-3 text-white" strokeWidth={2.5} /> : null}
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="mt-2 flex items-center justify-between gap-4 border-t border-[#ece8e0] pt-4">
                <button
                  type="button"
                  onClick={navigateBack}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#5e5a52] transition hover:bg-[#ece8e0] hover:text-[#1c1a16]"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!selectedForStep}
                  onClick={() => navigateNext[flow]?.()}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(30,58,95,0.35)] transition enabled:hover:bg-[#142a47] enabled:hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
                >
                  {flow === "q5" ? "See My Results →" : "Continue →"}
                </button>
              </div>
            </div>
          ) : null}

          {flow === "bridge" ? (
            <div className="flex min-h-[55vh] flex-col items-center justify-center gap-6 text-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-[#e6edf5]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <path d="M20 4L4 14v22h32V14L20 4z" stroke="#1a2e5c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M15 36V24h10v12" stroke="#1a2e5c" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M20 4l16 10" stroke="#b22234" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="max-w-md text-[clamp(1.5rem,1.25rem+1.1vw,2.25rem)] font-normal leading-tight text-[#1c1a16]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {VA_QUIZ_BRIDGE.heading}
              </h3>
              <p className="max-w-[40ch] leading-relaxed text-[#5e5a52]">{VA_QUIZ_BRIDGE.body}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo("q2")}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#5e5a52] transition hover:bg-[#ece8e0]"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => goTo("q3")}
                  className="inline-flex items-center gap-3 rounded-full bg-[#1e3a5f] px-8 py-4 text-base font-semibold text-white shadow-[0_6px_24px_rgba(30,58,95,0.35)] transition hover:bg-[#142a47]"
                >
                  {VA_QUIZ_BRIDGE.cta}
                </button>
              </div>
            </div>
          ) : null}

          {flow === "capture" ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c0cbe0] bg-[#e6edf5] px-4 py-2 text-[0.75rem] font-bold text-[#1e3a5f]">
                  <Check className="size-4" strokeWidth={2} aria-hidden />
                  {VA_QUIZ_CAPTURE.badge}
                </div>
                <h3
                  className="text-[clamp(1.5rem,1.25rem+1.1vw,2.25rem)] font-normal text-[#1c1a16]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {VA_QUIZ_CAPTURE.heading}
                </h3>
                <p className="max-w-[44ch] text-sm leading-relaxed text-[#5e5a52]">{VA_QUIZ_CAPTURE.sub}</p>
              </div>

              <form onSubmit={handleCaptureSubmit} className="flex flex-col gap-4">
                {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" /> : null}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="vaq-first" className="text-sm font-medium text-[#5e5a52]">
                      First Name
                    </label>
                    <input
                      id="vaq-first"
                      autoComplete="given-name"
                      required
                      value={capture.firstName}
                      onChange={(e) => setCapture((c) => ({ ...c, firstName: e.target.value }))}
                      className="rounded-md border-[1.5px] border-[#e2ddd5] bg-white px-4 py-3 text-base text-[#1c1a16] transition focus:border-[#1e3a5f] focus:outline-none focus:ring-[3px] focus:ring-[#1e3a5f]/12"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="vaq-last" className="text-sm font-medium text-[#5e5a52]">
                      Last Name
                    </label>
                    <input
                      id="vaq-last"
                      autoComplete="family-name"
                      required
                      value={capture.lastName}
                      onChange={(e) => setCapture((c) => ({ ...c, lastName: e.target.value }))}
                      className="rounded-md border-[1.5px] border-[#e2ddd5] bg-white px-4 py-3 text-base text-[#1c1a16] transition focus:border-[#1e3a5f] focus:outline-none focus:ring-[3px] focus:ring-[#1e3a5f]/12"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="vaq-email" className="text-sm font-medium text-[#5e5a52]">
                    Email Address
                  </label>
                  <input
                    id="vaq-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={capture.email}
                    onChange={(e) => setCapture((c) => ({ ...c, email: e.target.value }))}
                    className="rounded-md border-[1.5px] border-[#e2ddd5] bg-white px-4 py-3 text-base text-[#1c1a16] transition focus:border-[#1e3a5f] focus:outline-none focus:ring-[3px] focus:ring-[#1e3a5f]/12"
                    placeholder="jane@email.com"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="vaq-phone" className="text-sm font-medium text-[#5e5a52]">
                    Phone <span className="font-normal text-[#a09c94]">(optional)</span>
                  </label>
                  <input
                    id="vaq-phone"
                    type="tel"
                    autoComplete="tel"
                    value={capture.phone}
                    onChange={(e) => setCapture((c) => ({ ...c, phone: e.target.value }))}
                    className="rounded-md border-[1.5px] border-[#e2ddd5] bg-white px-4 py-3 text-base text-[#1c1a16] transition focus:border-[#1e3a5f] focus:outline-none focus:ring-[3px] focus:ring-[#1e3a5f]/12"
                    placeholder="(757) 555-0100"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="vaq-sit" className="text-sm font-medium text-[#5e5a52]">
                    What best describes your situation?
                  </label>
                  <select
                    id="vaq-sit"
                    value={capture.situation}
                    onChange={(e) => setCapture((c) => ({ ...c, situation: e.target.value }))}
                    className="rounded-md border-[1.5px] border-[#e2ddd5] bg-white px-4 py-3 text-base text-[#1c1a16] transition focus:border-[#1e3a5f] focus:outline-none focus:ring-[3px] focus:ring-[#1e3a5f]/12"
                  >
                    {VA_QUIZ_SITUATION_OPTIONS.map((o) => (
                      <option key={o.value || "placeholder"} value={o.value} disabled={Boolean(o.disabled)}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="flex items-center gap-2 text-[0.75rem] text-[#a09c94]">
                  <Shield className="size-3 shrink-0" aria-hidden />
                  {VA_QUIZ_CAPTURE.privacy}
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1e3a5f] px-8 py-4 text-base font-semibold text-white shadow-[0_6px_24px_rgba(30,58,95,0.35)] transition hover:bg-[#142a47] disabled:opacity-70"
                >
                  {submitting ? (
                    <span className="inline-block size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : null}
                  {VA_QUIZ_CAPTURE.submit}
                </button>
              </form>
              <button
                type="button"
                onClick={() => goTo("q5")}
                className="self-start text-[0.75rem] text-[#a09c94] transition hover:text-[#5e5a52]"
              >
                ← Back to questions
              </button>
            </div>
          ) : null}

          {flow === "calculating" ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
              <div className="relative size-20">
                <svg className="size-full -rotate-90" viewBox="0 0 80 80" fill="none" aria-hidden>
                  <circle cx="40" cy="40" r="34" stroke="#e6edf5" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#1e3a5f"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={213}
                    strokeDashoffset={213 - (213 * calcPct) / 100}
                    className="transition-[stroke-dashoffset] duration-75"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#1e3a5f]">
                  {calcPct}%
                </span>
              </div>
              <p className="text-sm text-[#5e5a52]">{VA_QUIZ_CALCULATING}</p>
            </div>
          ) : null}

          {flow === "results" && resultKey ? (
            <ResultsView resultKey={resultKey} onRestart={restart} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

function ResultsView({ resultKey, onRestart }: { resultKey: VaQuizResultKey; onRestart: () => void }) {
  const r = VA_QUIZ_RESULT_COPY[resultKey]
  return (
    <div className="flex flex-col gap-6 pb-16" role="region" aria-label="Your assessment results">
      <div className={cn("inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.06em]", r.badgeClass)}>
        {resultKey === "ready" ? <span aria-hidden>⭐</span> : null}
        {resultKey === "learn" ? <span aria-hidden>〜</span> : null}
        {resultKey === "explore" ? <span aria-hidden>📖</span> : null}
        {r.badge}
      </div>
      <h3
        className="text-[clamp(1.5rem,1.25rem+1.1vw,2.25rem)] font-normal leading-snug text-[#1c1a16]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {r.headline}
      </h3>
      <p className="max-w-[54ch] leading-relaxed text-[#5e5a52]">{r.explain}</p>
      <div className="rounded-xl border border-[#e2ddd5] bg-white p-6 shadow-sm">
        <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#a09c94]">Based on your answers</p>
        <p className="font-display text-lg italic leading-relaxed text-[#5e5a52]" style={{ fontFamily: "var(--font-display)" }}>
          {r.quote}
        </p>
      </div>
      <div className="flex flex-col gap-3 rounded-xl border border-[#e2ddd5] bg-white p-6">
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#a09c94]">What to focus on next</p>
        <ul className="flex flex-col gap-3">
          {r.focus.map((item) => (
            <li key={item.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-[#5e5a52]">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#1e3a5f]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-[#e2ddd5] bg-white p-6 shadow-md">
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#a09c94]">{r.ctaLabel}</p>
        <h4 className="text-lg font-semibold text-[#1c1a16]">{r.ctaTitle}</h4>
        <p className="text-sm leading-relaxed text-[#5e5a52]">{r.ctaDesc}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={r.primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(30,58,95,0.35)] transition hover:bg-[#142a47]"
          >
            {r.primaryCta.text}
          </Link>
          <Link
            href={r.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-[#e2ddd5] px-5 py-3 text-sm font-medium text-[#5e5a52] transition hover:bg-[#ece8e0] hover:text-[#1c1a16]"
          >
            {r.secondaryCta.text}
          </Link>
        </div>
      </div>
      <div className="flex gap-3 rounded-md border border-[#ece8e0] bg-[#f9f8f4] p-5">
        <Lock className="mt-0.5 size-4 shrink-0 text-[#1e3a5f] opacity-40" aria-hidden />
        <p className="text-xs leading-relaxed text-[#5e5a52]">
          This conversation is no-pressure. We&apos;re here to help you understand your options and move at your pace —
          not push you anywhere.
        </p>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="self-start text-[0.75rem] text-[#a09c94] transition hover:text-[#5e5a52]"
      >
        Start over
      </button>
    </div>
  )
}
