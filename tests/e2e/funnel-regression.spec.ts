import { expect, test } from "@playwright/test"

import { M2M_CONTACT_CONSULTATION_PATH } from "../../lib/m2m-site"
import { M2M_FUNNEL_PAGE_TESTIDS, M2M_FUNNEL_REGRESSION_PATHS } from "../../lib/m2m-funnel-regression"
import { M2M_SUBMIT_LEAD_OK_BODY, stubSubmitLeadPost } from "./helpers/lead-api"

const consultDesktop = `[data-m2m-track="consultation_request"][data-m2m-track-loc="header_bar"]`

test.describe("funnel pages", () => {
  for (const path of M2M_FUNNEL_REGRESSION_PATHS) {
    test(`${path} loads with stable main marker`, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByTestId(M2M_FUNNEL_PAGE_TESTIDS[path])).toBeVisible()
    })
  }
})

test.describe("consultation & contact guardrails", () => {
  test("header desktop CTA targets consultation request path", async ({ page }) => {
    await page.goto("/facing-foreclosure")
    const cta = page.locator(consultDesktop)
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute("href", M2M_CONTACT_CONSULTATION_PATH)
  })

  test("mobile menu exposes consultation CTA with same href", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/facing-foreclosure")
    await page.getByRole("button", { name: "Open menu" }).click()
    const bar = page.locator("header").locator(".max-w-7xl")
    const toggler = bar.getByRole("button", { name: "Close menu" })
    await expect(toggler).toBeVisible()
    await expect(toggler).toHaveAttribute("aria-expanded", "true")
    const cta = page.locator("a[data-m2m-track-loc='header_mobile_menu'][data-m2m-track='consultation_request']")
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute("href", M2M_CONTACT_CONSULTATION_PATH)
  })

  test("more-investments: investor tools block has phone + book consultation", async ({ page }) => {
    await page.goto("/more-investments")
    const tools = page.locator("#investor-tools")
    await tools.scrollIntoViewIfNeeded()
    await expect(tools.getByRole("link", { name: /757-206-2859/ }).first()).toBeVisible()
    const book = tools.getByRole("link", { name: /^book a consultation$/i }).first()
    await expect(book).toBeVisible()
    await expect(book).toHaveAttribute("href", M2M_CONTACT_CONSULTATION_PATH)
  })
})

test.describe("quiz / embed sections", () => {
  test("downsizing: local quiz iframe is served and visible", async ({ page, request }) => {
    const res = await request.get("/quizzes/downsizing-your-home/quiz.html")
    expect(res.ok()).toBeTruthy()
    await page.goto("/downsizing-your-home")
    await page.locator("#downsizing-quiz").scrollIntoViewIfNeeded()
    await expect(page.locator('iframe[src="/quizzes/downsizing-your-home/quiz.html"]')).toBeVisible()
  })

  test("downsizing: guide PDF is served", async ({ request }) => {
    const res = await request.get("/downloads/m2m-downsizing-guide.pdf")
    expect(res.status(), "downsizing guide PDF should return 200").toBe(200)
    const ct = (res.headers()["content-type"] ?? "").toLowerCase()
    expect(ct.includes("pdf") || ct.includes("octet-stream"), `expected PDF content-type, got ${ct}`).toBeTruthy()
  })

  test("navigating-divorce: guide PDF is served", async ({ request }) => {
    const res = await request.get("/downloads/m2m-divorce-sell-home-guide.pdf")
    expect(res.status(), "divorce guide PDF should return 200").toBe(200)
    const ct = (res.headers()["content-type"] ?? "").toLowerCase()
    expect(ct.includes("pdf") || ct.includes("octet-stream"), `expected PDF content-type, got ${ct}`).toBeTruthy()
  })

  test("va-loan-benefits: VA assessment quiz renders and reaches results", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/va-loan-benefits")
    await page.locator("#va-loan-quiz").scrollIntoViewIfNeeded()
    const quiz = page.getByTestId("m2m-va-loan-assessment-quiz")
    await expect(quiz).toBeVisible()
    await quiz.getByRole("button", { name: /start the assessment/i }).click()

    await quiz.getByRole("button", { name: /i'm active-duty military/i }).click()
    await quiz.getByRole("button", { name: /^continue →$/i }).click()

    await quiz.getByRole("button", { name: /first time/i }).click()
    await quiz.getByRole("button", { name: /^continue →$/i }).click()

    await quiz.getByRole("button", { name: /keep going/i }).click()

    await quiz.getByRole("button", { name: /early stage/i }).click()
    await quiz.getByRole("button", { name: /^continue →$/i }).click()

    await quiz.getByRole("button", { name: /not sure if i'm actually eligible/i }).click()
    await quiz.getByRole("button", { name: /^continue →$/i }).click()

    await quiz.getByRole("button", { name: /learn more about how it works first/i }).click()
    await quiz.getByRole("button", { name: /see my results/i }).click()

    await quiz.locator("#vaq-first").fill("E2E")
    await quiz.locator("#vaq-last").fill("VAQuiz")
    await quiz.locator("#vaq-email").fill("e2e-va-quiz@example.com")
    await quiz.getByRole("button", { name: /show my results/i }).click()

    await expect(quiz.getByRole("region", { name: /your assessment results/i })).toBeVisible({ timeout: 20_000 })
    await expect(quiz.getByText(/you're not in a rush/i)).toBeVisible()
  })

  test("divorce: static quiz iframe + guide form present", async ({ page }) => {
    await page.goto("/navigating-divorce")
    await page.locator("#navigating-divorce-quiz").scrollIntoViewIfNeeded()
    await expect(page.locator('iframe[src="/quizzes/navigating-divorce/index.html"]')).toBeVisible()
    await page.locator("#guide-form").scrollIntoViewIfNeeded()
    await expect(page.getByTestId("m2m-lead-form-navigating-divorce")).toBeVisible()
  })

  test("facing-foreclosure: hero form is visible", async ({ page }) => {
    await page.goto("/facing-foreclosure")
    await page.locator("#facing-foreclosure-lead").scrollIntoViewIfNeeded()
    await expect(page.getByTestId("m2m-lead-form-facing-foreclosure")).toBeVisible()
  })
})

test.describe("lead forms (mocked POST /api/submit-lead)", () => {
  test("facing-foreclosure: success only after OK response", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/facing-foreclosure#facing-foreclosure-lead")
    const form = page.getByTestId("m2m-lead-form-facing-foreclosure")
    await form.scrollIntoViewIfNeeded()
    await expect(page.getByRole("heading", { name: /^thank you$/i })).not.toBeVisible()
    await form.getByLabel(/first name/i).fill("E2E")
    await form.getByLabel(/last name/i).fill("Foreclosure")
    await form.getByLabel(/email/i).fill("e2e-foreclosure@example.com")
    await form.getByLabel(/phone/i).fill("7575550100")
    await form.getByLabel(/property address or zip/i).fill("Virginia Beach, VA 23451")
    await form.locator("#pf-intent").selectOption("guide")
    await form.getByRole("button", { name: /get the guide & send my request/i }).click()
    await expect(page.locator("#facing-foreclosure-lead").getByRole("status")).toContainText(
      /your guide is available now and has been sent to your email/i,
    )
    await expect(form).not.toBeVisible()
  })

  test("facing-foreclosure: CRM failure shows alert, not thank you", async ({ page }) => {
    await stubSubmitLeadPost(
      page,
      { ok: false, error: "CRM unreachable", code: "crm_unreachable", correlationId: "e2e-fail" },
      502,
    )
    await page.goto("/facing-foreclosure#facing-foreclosure-lead")
    const form = page.getByTestId("m2m-lead-form-facing-foreclosure")
    await form.scrollIntoViewIfNeeded()
    await form.getByLabel(/first name/i).fill("E2E")
    await form.getByLabel(/last name/i).fill("Fail")
    await form.getByLabel(/email/i).fill("e2e-fail@example.com")
    await form.getByLabel(/phone/i).fill("7575550101")
    await form.getByLabel(/property address or zip/i).fill("23451")
    await form.locator("#pf-intent").selectOption("speak_now")
    await form.getByRole("button", { name: /get the guide & send my request/i }).click()
    await expect(form.getByRole("alert")).toBeVisible()
    await expect(page.getByRole("heading", { name: /^thank you$/i })).not.toBeVisible()
    await expect(form).toBeVisible()
  })

  test("navigating-divorce: guide form submits", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/navigating-divorce#guide-form")
    const form = page.getByTestId("m2m-lead-form-navigating-divorce")
    await form.scrollIntoViewIfNeeded()
    await form.getByPlaceholder("First Name").fill("E2E")
    await form.getByPlaceholder("Last Name").fill("Divorce")
    await form.getByPlaceholder("Email*").fill("e2e-divorce@example.com")
    await form.getByRole("button", { name: /get your free guide now/i }).click()
    await expect(page.locator("#guide-form").getByRole("status")).toContainText(/thank you/i)
    await expect(page.locator("#guide-form").getByRole("status")).toContainText(/pdf/i)
    await expect(page.getByRole("link", { name: /download the guide \(pdf\)/i })).toBeVisible()
  })

  test("improve-your-credit: credit repair quiz iframe loads and submits", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/improve-your-credit")
    await page.locator("#credit-playbook").scrollIntoViewIfNeeded()
    const frame = page.frameLocator('iframe[title="Credit repair quiz — Marching 2 More"]')
    await expect(frame.locator("#s-welcome")).toBeVisible({ timeout: 20_000 })

    // Sticky site header can intercept pointer events at the iframe overlap; drive the quiz via globals.
    await frame.locator("body").evaluate(async () => {
      const g = window as unknown as Window & {
        pick: (btn: HTMLElement) => void
        goTo: (target: string) => void
        submitLead: (e: { preventDefault(): void }) => Promise<void>
      }
      const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
      const pickSel = (sel: string) => {
        const el = document.querySelector(sel)
        if (!el || !(el instanceof HTMLElement)) throw new Error(`missing ${sel}`)
        g.pick(el)
      }
      g.goTo("q1")
      await delay(220)
      pickSel('[data-q="q1"][data-val="0"]')
      g.goTo("q2")
      await delay(220)
      pickSel('[data-q="q2"][data-val="notsure"]')
      g.goTo("bridge")
      await delay(220)
      g.goTo("q3")
      await delay(220)
      pickSel('[data-q="q3"][data-val="overall"]')
      g.goTo("q4")
      await delay(220)
      pickSel('[data-q="q4"][data-val="0"]')
      g.goTo("q5")
      await delay(220)
      pickSel('[data-q="q5"][data-val="no"]')
      g.goTo("capture")
      await delay(220)
    })

    await frame.locator("#f-first").fill("E2E")
    await frame.locator("#f-last").fill("CreditQuiz")
    await frame.locator("#f-email").fill("e2e-credit-quiz@example.com")
    await frame.locator("#f-phone").fill("7575550102")

    await frame.locator("body").evaluate(async () => {
      const g = window as unknown as Window & { submitLead: (e: { preventDefault(): void }) => Promise<void> }
      await g.submitLead({ preventDefault() {} })
    })

    await expect(frame.locator("#r-headline")).toContainText(/immediate game plan/i, { timeout: 25_000 })
  })

  test("fha-loan: nested FHA quiz submits to submit-lead", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/fha-loan#fha-buyer-quiz")
    const frame = page.frameLocator('iframe[title="FHA buyer quiz"]')
    await expect(frame.locator("#s-welcome")).toBeVisible({ timeout: 20_000 })

    await frame.locator("body").evaluate(async () => {
      const g = window as unknown as Window & {
        pick: (btn: HTMLElement) => void
        goTo: (target: string) => void
        submitLead: (e: { preventDefault(): void }) => Promise<void>
      }
      const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
      const pickSel = (sel: string) => {
        const el = document.querySelector(sel)
        if (!el || !(el instanceof HTMLElement)) throw new Error(`missing ${sel}`)
        g.pick(el)
      }
      g.goTo("q1")
      await delay(300)
      pickSel('[data-q="q1"][data-val="first"]')
      g.goTo("q2")
      await delay(300)
      pickSel('[data-q="q2"][data-val="mid"]')
      g.goTo("q3")
      await delay(300)
      pickSel('[data-q="q3"][data-val="fha-ready"]')
      g.goTo("q4")
      await delay(300)
      pickSel('[data-q="q4"][data-val="mid"]')
      g.goTo("q5")
      await delay(300)
      pickSel('[data-q="q5"][data-val="process"]')
      g.goTo("capture")
      await delay(300)
    })

    await frame.locator("#fi").fill("E2E")
    await frame.locator("#fl").fill("FHAQuiz")
    await frame.locator("#fe").fill("e2e-fha-quiz@example.com")
    await frame.locator("body").evaluate(async () => {
      const w = window as unknown as Window & { submitLead: (e: { preventDefault(): void }) => Promise<void> }
      await w.submitLead({ preventDefault() {} })
    })
    await expect(frame.locator("#rh")).toBeVisible({ timeout: 25_000 })
  })
})

test.describe("mobile sanity", () => {
  test("facing-foreclosure lead form remains submittable on narrow viewport", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/facing-foreclosure#facing-foreclosure-lead")
    const form = page.getByTestId("m2m-lead-form-facing-foreclosure")
    await form.scrollIntoViewIfNeeded()
    await expect(form).toBeVisible()
    await form.getByLabel(/first name/i).fill("E2E")
    await form.getByLabel(/last name/i).fill("Mobile")
    await form.getByLabel(/email/i).fill("e2e-mobile@example.com")
    await form.getByLabel(/phone/i).fill("7575550103")
    await form.getByLabel(/property address or zip/i).fill("23451")
    await form.locator("#pf-intent").selectOption("both")
    await form.getByRole("button", { name: /get the guide & send my request/i }).click()
    await expect(page.locator("#facing-foreclosure-lead").getByRole("status")).toContainText(
      /your guide is available now/i,
    )
  })
})
