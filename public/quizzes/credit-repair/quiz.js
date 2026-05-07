/* ══════════════════════════════════════════════════
   CREDIT REPAIR QUIZ — MARCHING 2 MORE
   Submits to site POST /api/submit-lead (same origin as this iframe).
══════════════════════════════════════════════════ */

// ── CONFIG ─────────────────────────────────────────
/** Same-origin paths — open in full window when clicked from iframe */
const LINKS = {
  bookCall: "/contact-us?intent=buyer",
  creditGuide: "/resources",
  checkScore: "/free-home-valuation",
};

// ── STATE ──────────────────────────────────────────
const S = {
  flow: ["welcome", "q1", "q2", "bridge", "q3", "q4", "q5", "capture", "calculating", "results"],
  qScreens: ["q1", "q2", "q3", "q4", "q5"],
  current: "welcome",
  answers: {},
  lead: {},
  result: null,
};

// ── HELPERS ────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const el = (id) => document.getElementById("s-" + id);

function readParentHref() {
  try {
    if (window.parent?.location?.href) return window.parent.location.href;
  } catch {
    /* cross-origin */
  }
  return window.location.href;
}

function readUtmParams() {
  try {
    const u = new URL(readParentHref());
    const get = (k) => {
      const v = u.searchParams.get(k);
      return v && v.trim() ? v.trim() : undefined;
    };
    return {
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_content: get("utm_content"),
    };
  } catch {
    return {};
  }
}

function hideCaptureError() {
  const errEl = $("captureError");
  if (errEl) {
    errEl.textContent = "";
    errEl.hidden = true;
  }
}

function showCaptureError(message) {
  const errEl = $("captureError");
  if (errEl) {
    errEl.textContent = message;
    errEl.hidden = false;
  }
}

/** Internal links break out of iframe */
function linkAttrsHtml(href, className, text) {
  const external = /^https?:\/\//i.test(href);
  const tgt = external ? ' target="_blank" rel="noopener noreferrer"' : ' target="_top"';
  return `<a href="${href}" class="${className}"${tgt}>${text}</a>`;
}

// ── PROGRESS ───────────────────────────────────────
function syncProgress(screen) {
  const wrap = $("progressWrap");
  const fill = $("progressFill");
  const label = $("progressLabel");
  const qIdx = S.qScreens.indexOf(screen);
  const hide = ["welcome", "bridge", "calculating", "results"].includes(screen);
  wrap.classList.toggle("visible", !hide);
  if (qIdx >= 0) {
    fill.style.width = Math.round(((qIdx + 1) / S.qScreens.length) * 100) + "%";
    label.textContent = `Question ${qIdx + 1} of ${S.qScreens.length}`;
  } else if (screen === "capture") {
    fill.style.width = "100%";
    label.textContent = "Almost done!";
    wrap.classList.add("visible");
  }
}

// ── NAVIGATION ─────────────────────────────────────
function goTo(target) {
  if (target === S.current) return;
  const fromEl = el(S.current);
  const toEl = el(target);
  if (!toEl) return;
  fromEl.classList.remove("active");
  fromEl.classList.add("out");
  setTimeout(() => fromEl.classList.remove("out"), 300);
  setTimeout(() => {
    toEl.classList.add("active");
    S.current = target;
    syncProgress(target);
    $("quizShell").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

// ── OPTION SELECTION ───────────────────────────────
function pick(btn) {
  const q = btn.dataset.q;
  btn.closest(".options").querySelectorAll(".opt.selected").forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  S.answers[q] = { val: btn.dataset.val, label: btn.dataset.label };
  const nb = $("next-" + q);
  if (nb) nb.disabled = false;
}

// ── RESULT LOGIC ───────────────────────────────────
function computeResult() {
  const score = S.answers.q1?.val ?? "?";
  const issue = S.answers.q2?.val ?? "notsure";
  const goal = S.answers.q3?.val ?? "overall";
  const urgency = S.answers.q4?.val ?? "0";

  if (score === "0" || score === "?" || issue === "collections" || issue === "errors") {
    return "urgent";
  }
  if (score === "3" || (score === "2" && (goal === "refi" || goal === "overall") && urgency === "0")) {
    return "optimize";
  }
  return "build";
}

// ── RESULT CONTENT ─────────────────────────────────
const RESULTS = {
  urgent: {
    badgeClass: "badge-urgent",
    badge: "🔴 Action Needed Now",
    headline: "Your situation calls for a clear, immediate game plan.",
    explain:
      "Based on your answers, there are specific items on your credit report — collections, errors, or a low score — that are actively limiting your options. The good news: these are addressable with the right approach, and sooner is always better.",
    quote:
      "The biggest mistake most people make is waiting. Every month without a plan is a month your opportunities shrink — and a month your credit could be working for you instead.",
    scoreLabel: "Credit Profile Status",
    scorePct: 20,
    scoreColor: "#c0392b",
    scoreText: "Needs Attention",
    focus: [
      "Pull your full credit report and identify every derogatory mark",
      "Dispute any errors or inaccuracies — this is often the fastest win",
      "Understand which collections are negotiable and how to handle them",
      "Build a 60–90 day plan to start moving the needle before your deadline",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Book a Free Credit Strategy Call",
    ctaDesc:
      "Our team can review your situation in plain language, walk you through what's dragging your score down, and help you build a step-by-step plan — all at no cost and no obligation.",
    primary: { text: "Book a Free Call →", href: LINKS.bookCall },
    secondary: { text: "Get the Credit Guide First", href: LINKS.creditGuide },
    tags: ["credit-quiz", "result-urgent", "needs-call"],
  },

  build: {
    badgeClass: "badge-build",
    badge: "🟢 Building Momentum",
    headline: "You have a foundation — now it's time to build on it strategically.",
    explain:
      "Based on your answers, your credit isn't in crisis mode, but there's meaningful ground to cover. The right moves now — on utilization, payment history, or adding positive accounts — can move your score significantly in 3–6 months.",
    quote:
      'Going from "fair" to "good" or "good" to "great" is where the biggest life changes happen — lower rates, better approvals, more buying power. That shift is closer than most people think.',
    scoreLabel: "Credit Profile Status",
    scorePct: 52,
    scoreColor: "#d4750a",
    scoreText: "In Progress",
    focus: [
      "Reduce credit utilization — aim for under 30% per card, ideally under 10%",
      "Set up autopay on every account to eliminate late payments going forward",
      "If you have limited accounts, consider a secured card or credit-builder loan",
      "Request goodwill deletions on older late payments — this works more often than people know",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Start With the Free Credit Repair Guide",
    ctaDesc:
      "Our guide breaks down exactly what to tackle first based on your score range — with step-by-step actions you can take this week. Then connect with our team when you're ready to accelerate.",
    primary: { text: "Get the Free Guide →", href: LINKS.creditGuide },
    secondary: { text: "Talk With Our Team", href: LINKS.bookCall },
    tags: ["credit-quiz", "result-build", "nurture"],
  },

  optimize: {
    badgeClass: "badge-optimize",
    badge: "🔵 Ready to Optimize",
    headline: "Your credit is in good shape — let's get it working harder for you.",
    explain:
      "Based on your answers, you've done the hard work. Now the goal is optimization — fine-tuning your credit mix, managing utilization strategically, and making sure your profile is positioned for the best possible rates and approvals.",
    quote:
      "Moving from 720 to 760, or 760 to 800, can be the difference between a good mortgage rate and a great one — saving you thousands over the life of a loan.",
    scoreLabel: "Credit Profile Status",
    scorePct: 78,
    scoreColor: "#1565c0",
    scoreText: "Strong",
    focus: [
      "Optimize your credit mix — lenders like to see installment + revolving accounts",
      "Keep utilization under 10% on every card, not just in aggregate",
      "Avoid opening new accounts close to a major purchase (home, car, refi)",
      "Request a credit limit increase on existing cards — it lowers utilization without new inquiries",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Book a Free Homebuying or Refi Consultation",
    ctaDesc:
      "With your credit in good shape, the next step is making sure your full financial profile is positioned for the best rates. Our team can connect you to the right lender and walk you through exactly what they'll look at.",
    primary: { text: "Talk With Our Team →", href: LINKS.bookCall },
    secondary: { text: "Read the Optimization Guide", href: LINKS.creditGuide },
    tags: ["credit-quiz", "result-optimize", "warm-lead"],
  },
};

// ── RENDER RESULT ──────────────────────────────────
function renderResult(type) {
  const r = RESULTS[type];

  $("r-badge").className = "result-badge " + r.badgeClass;
  $("r-badge").textContent = r.badge;
  $("r-headline").textContent = r.headline;
  $("r-explain").textContent = r.explain;
  $("r-quote").textContent = "\u201c" + r.quote + "\u201d";

  $("r-score-visual").innerHTML = `
    <div class="score-bar-label">
      <span>${r.scoreLabel}</span>
      <span style="color:${r.scoreColor}">${r.scoreText}</span>
    </div>
    <div class="score-bar-track">
      <div class="score-bar-fill" id="scoreBarFill" style="width:0%;background:${r.scoreColor}"></div>
    </div>
  `;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const bar = $("scoreBarFill");
      if (bar) bar.style.width = r.scorePct + "%";
    });
  });

  $("r-focus").innerHTML = `
    <p class="focus-title">What to focus on</p>
    ${r.focus.map((f) => `<div class="focus-item"><div class="focus-dot"></div><span>${f}</span></div>`).join("")}
  `;

  $("r-cta-label").textContent = r.ctaLabel;
  $("r-cta-title").textContent = r.ctaTitle;
  $("r-cta-desc").textContent = r.ctaDesc;
  $("r-cta-actions").innerHTML =
    linkAttrsHtml(r.primary.href, "cta-primary", r.primary.text) +
    linkAttrsHtml(r.secondary.href, "cta-secondary", r.secondary.text);
}

// ── CALCULATING ANIMATION ──────────────────────────
function runCalculating(cb) {
  goTo("calculating");
  const arc = $("calcArc");
  const pctEl = $("calcPct");
  const total = 213;
  const duration = 1800;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    arc.style.strokeDashoffset = total - e * total;
    pctEl.textContent = Math.round(e * 100) + "%";
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(cb, 200);
  }
  requestAnimationFrame(tick);
}

// ── SUBMIT ────────────────────────────────────────
async function submitLead(e) {
  e.preventDefault();
  hideCaptureError();

  const firstName = $("f-first").value.trim();
  const lastName = $("f-last").value.trim();
  const email = $("f-email").value.trim();
  const phone = $("f-phone").value.trim();
  if (!firstName || !lastName || !email) return;

  $("btn-label").style.display = "none";
  $("btn-spinner").style.display = "block";
  $("submitBtn").disabled = true;

  const resultType = computeResult();
  S.result = resultType;
  const r = RESULTS[resultType];

  const utm = readUtmParams();
  const sourcePage = readParentHref();

  const notes = ["Credit repair quiz — personalized results", `Suggested workflow tags: ${r.tags.join(", ")}`].join("\n");

  const payload = {
    lead_type: "buyer",
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone: phone || undefined,
    urgency: S.answers.q4?.label ?? undefined,
    urgency_explicit: true,
    notes,
    quiz_score_range: S.answers.q1?.label ?? undefined,
    quiz_main_issue: S.answers.q2?.label ?? undefined,
    quiz_goal: S.answers.q3?.label ?? undefined,
    quiz_timeline: S.answers.q4?.label ?? undefined,
    quiz_prior_attempt: S.answers.q5?.label ?? undefined,
    quiz_result: resultType,
    quiz_source: "credit-repair-quiz",
    source_page: sourcePage,
    source_path: "/improve-your-credit",
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
  };

  const apiUrl = `${window.location.origin}/api/submit-lead`;

  let data = null;
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok || !data || data.ok !== true) {
      const msg =
        data && typeof data.error === "string" && data.error.trim()
          ? data.error.trim()
          : "We couldn't save your information. Please try again or call our office.";
      showCaptureError(msg);
      $("btn-label").style.display = "";
      $("btn-spinner").style.display = "none";
      $("submitBtn").disabled = false;
      return;
    }
  } catch {
    showCaptureError("Network error — check your connection and try again.");
    $("btn-label").style.display = "";
    $("btn-spinner").style.display = "none";
    $("submitBtn").disabled = false;
    return;
  }

  S.lead = { firstName, lastName, email, phone };

  renderResult(resultType);
  runCalculating(() => goTo("results"));
}

// ── RESTART ────────────────────────────────────────
function restart() {
  hideCaptureError();
  S.answers = {};
  S.lead = {};
  S.result = null;
  document.querySelectorAll(".opt.selected").forEach((b) => b.classList.remove("selected"));
  ["q1", "q2", "q3", "q4", "q5"].forEach((q) => {
    const nb = $("next-" + q);
    if (nb) nb.disabled = true;
  });
  ["f-first", "f-last", "f-email", "f-phone"].forEach((id) => {
    const inp = $(id);
    if (inp) inp.value = "";
  });
  $("btn-label").style.display = "";
  $("btn-spinner").style.display = "none";
  const sb = $("submitBtn");
  if (sb) sb.disabled = false;
  goTo("welcome");
}

// ── DARK MODE ─────────────────────────────────────
(function () {
  document.documentElement.setAttribute(
    "data-theme",
    matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  );
})();

// ── INIT ──────────────────────────────────────────
syncProgress("welcome");
