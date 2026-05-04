import { expect, test } from "@playwright/test"

import { M2M_CONTACT_CONSULTATION_PATH } from "../../lib/m2m-site"
import { M2M_FUNNEL_PAGE_TESTIDS, M2M_FUNNEL_REGRESSION_PATHS } from "../../lib/m2m-funnel-regression"
import { fillM2mDobField } from "./helpers/forms"
import { M2M_SUBMIT_LEAD_OK_BODY, stubSubmitLeadPost } from "./helpers/lead-api"

const consultDesktop = `[data-m2m-track="consultation_request"][data-m2m-track-loc="header_desktop"]`

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
    await expect(tools.getByRole("link", { name: /757-206-2859/ })).toBeVisible()
    const book = tools.getByRole("link", { name: /^book a consultation$/i })
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

  test("divorce: static quiz iframe + guide form present", async ({ page }) => {
    await page.goto("/navigating-divorce")
    await page.locator("#navigating-divorce-quiz").scrollIntoViewIfNeeded()
    await expect(page.locator('iframe[src="/quizzes/navigating-divorce/index.html"]')).toBeVisible()
    await page.locator("#guide-form").scrollIntoViewIfNeeded()
    await expect(page.getByTestId("m2m-lead-form-navigating-divorce")).toBeVisible()
  })

  test("facing-foreclosure: quiz fallback (no remote embed) still renders children", async ({ page }) => {
    await page.goto("/facing-foreclosure")
    await page.locator("#facing-foreclosure-quiz").scrollIntoViewIfNeeded()
    await expect(page.getByTestId("m2m-page-facing-foreclosure")).toBeVisible()
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
    await form.locator("#pf-urgency").selectOption({ label: "Immediate (0-1 month)" })
    await form.getByRole("button", { name: /send my guide/i }).click()
    await expect(page.locator("#facing-foreclosure-lead").getByRole("status")).toContainText(/thank you/i)
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
    await form.locator("#pf-urgency").selectOption({ label: "Immediate (0-1 month)" })
    await form.getByRole("button", { name: /send my guide/i }).click()
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
    await expect(page.locator("#guide-form").getByRole("status")).toContainText(/send your guide/i)
  })

  test("improve-your-credit: playbook form submits", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/improve-your-credit")
    await page.locator("#credit-playbook").scrollIntoViewIfNeeded()
    const form = page.getByTestId("m2m-lead-form-improve-your-credit")
    await form.scrollIntoViewIfNeeded()
    await page.locator("#credit-playbook-first").fill("E2E")
    await page.locator("#credit-playbook-last").fill("Credit")
    await fillM2mDobField(page, "credit-playbook-dob")
    await form.locator("#credit-playbook-urgency").selectOption({ label: "Immediate (0-1 month)" })
    await page.locator("#credit-playbook-email").fill("e2e-credit@example.com")
    await page.locator("#credit-playbook-phone").fill("7575550102")
    await form.getByRole("button", { name: /send my playbook/i }).click()
    await expect(page.getByText(/^thank you!$/i).first()).toBeVisible()
    await expect(page.getByText(/check your email for next steps/i)).toBeVisible()
  })

  test("fha-loan: quote form submits", async ({ page }) => {
    await stubSubmitLeadPost(page, { ...M2M_SUBMIT_LEAD_OK_BODY })
    await page.goto("/fha-loan#request-quote")
    const form = page.getByTestId("m2m-lead-form-fha-loan")
    await form.scrollIntoViewIfNeeded()
    await page.locator("#fha-first").fill("E2E")
    await page.locator("#fha-last").fill("FHA")
    await page.locator("#fha-email").fill("e2e-fha@example.com")
    await page.locator("#fha-subject").fill("E2E FHA question")
    await form.getByRole("button", { name: /send my questions/i }).click()
    await expect(page.locator("#request-quote").getByRole("status")).toContainText(/follow up about your fha questions/i)
    await expect(form).not.toBeVisible()
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
    await form.locator("#pf-urgency").selectOption({ label: "Immediate (0-1 month)" })
    await form.getByRole("button", { name: /send my guide/i }).click()
    await expect(page.locator("#facing-foreclosure-lead").getByRole("status")).toContainText(/thank you/i)
  })
})
