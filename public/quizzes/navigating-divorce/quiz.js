/* ══════════════════════════════════════════════════
   NAVIGATING DIVORCE QUIZ v2 — MARCHING 2 MORE
   Leads POST to site /api/submit-lead
══════════════════════════════════════════════════ */

const LINKS = {
  bookCall: '/contact-us?intent=seller',
  guide: '/navigating-divorce#guide-form',
};

// ── STATE ──────────────────────────────────────────
const S = {
  // Screen order (bridge is between q2 and q3, calculating before results)
  flow: ['welcome','q1','q2','bridge','q3','q4','q5','capture','calculating','results'],
  // Which screens count as "questions" for progress bar
  qScreens: ['q1','q2','q3','q4','q5'],
  current: 'welcome',
  answers: {},    // { q1: {val, label}, q2: {val, label}, … }
  lead: {},
  result: null,
};

// ── DOM HELPERS ────────────────────────────────────
const $ = id => document.getElementById(id);
const el = id => document.getElementById('s-' + id);

// ── PROGRESS BAR ───────────────────────────────────
function syncProgress(screen) {
  const wrap = $('progressWrap');
  const fill = $('progressFill');
  const label = $('progressLabel');
  const qIdx = S.qScreens.indexOf(screen);

  // Hide on welcome, bridge, calculating, results
  const hide = ['welcome','bridge','calculating','results'].includes(screen);
  wrap.classList.toggle('visible', !hide);

  if (qIdx >= 0) {
    const pct = Math.round(((qIdx + 1) / S.qScreens.length) * 100);
    fill.style.width = pct + '%';
    label.textContent = `Question ${qIdx + 1} of ${S.qScreens.length}`;
  } else if (screen === 'capture') {
    fill.style.width = '100%';
    label.textContent = 'Almost done!';
    wrap.classList.add('visible');
  }
}

// ── NAVIGATION ─────────────────────────────────────
function goTo(target) {
  if (target === S.current) return;

  const fromEl = el(S.current);
  const toEl = el(target);
  if (!toEl) return;

  // Animate out
  fromEl.classList.remove('active');
  fromEl.classList.add('out');
  setTimeout(() => fromEl.classList.remove('out'), 300);

  // Animate in
  setTimeout(() => {
    toEl.classList.add('active');
    S.current = target;
    syncProgress(target);
    // Scroll to top of quiz shell
    $('quizShell').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 180);
}

// ── OPTION SELECTION ───────────────────────────────
function pick(btn) {
  const q = btn.dataset.q;
  const val = btn.dataset.val;
  const label = btn.dataset.label;

  // Deselect siblings in same group
  btn.closest('.options').querySelectorAll('.opt.selected').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Store answer
  S.answers[q] = { val, label };

  // Enable next button for this question
  const nextBtn = $('next-' + q);
  if (nextBtn) nextBtn.disabled = false;
}

// ── RESULT LOGIC ───────────────────────────────────
/*
  Scoring:
  - q1 alignment: 0 (disagreement), 1 (unsure), 2 (aligned)
  - q2 urgency:   0 (unclear), 1 (months), 2 (ASAP)
  Total 0–4.
  ≥3 → "ready"    (aligned + urgent → move now)
  1–2 → "nurture" (some friction or some urgency)
  0   → "guide"   (early stage, needs info first)
*/
function computeResult() {
  const align  = parseInt(S.answers.q1?.val ?? 0);
  const urgency = parseInt(S.answers.q2?.val ?? 0);
  const pref = S.answers.q5?.val ?? 'guide';
  const challenge = S.answers.q3?.val ?? 'nextsteps';
  const score = align + urgency;

  if (score >= 3) return 'ready';
  if (score >= 1) return 'nurture';
  return 'guide';
}

// ── RESULT CONTENT ─────────────────────────────────
// Each entry maps directly to your spec:
// specific headline, explanation, insight quote, one CTA + reassurance
const RESULTS = {
  ready: {
    badgeClass: 'badge-ready',
    badge: '✓ Ready to Move Forward',
    headline: 'Your best next step is a neutral pricing and planning conversation.',
    explain: 'Based on your answers, both parties appear open to resolution and timing is pressing. The biggest risk now is delay — getting clear numbers and a real timeline in place protects everyone involved.',
    quote: 'When alignment and urgency line up, what moves families forward fastest is a single, honest conversation about numbers and options.',
    ctaLabel: 'Your recommended next step',
    ctaTitle: 'Schedule a Free Planning Consultation',
    ctaDesc: 'Our team can walk you through the options, give you real numbers, and help both parties feel confident about the path forward — no pressure, no obligation.',
    primary: { text: 'Talk With Our Team →', href: LINKS.bookCall },
    secondary: { text: 'Get the Guide First', href: LINKS.guide },
  },
  nurture: {
    badgeClass: 'badge-nurture',
    badge: '〜 Getting Clearer',
    headline: 'Your best next step may be a neutral conversation about options.',
    explain: 'Based on your answers, it looks like the biggest challenge is alignment and timing. Our team can help you evaluate options and create a practical path forward — without making anything feel rushed or one-sided.',
    quote: 'When one party is unsure, having a trusted neutral resource can make the conversation much easier for both sides — and often changes the whole dynamic.',
    ctaLabel: 'Your recommended next step',
    ctaTitle: 'Start With the Free Divorce Seller Guide',
    ctaDesc: 'Our guide walks you through what to expect, how pricing works during divorce proceedings, and how to protect both parties throughout the process. Then talk to our team whenever you\'re ready.',
    primary: { text: 'Get the Free Guide →', href: LINKS.guide },
    secondary: { text: 'Talk With Our Team', href: LINKS.bookCall },
  },
  guide: {
    badgeClass: 'badge-guide',
    badge: '📖 Building Clarity',
    headline: 'Your best first step is getting clear on your options — at your own pace.',
    explain: 'Based on your answers, there\'s still some uncertainty around timing and agreement. That\'s completely normal — and it\'s exactly where the right information makes the biggest difference. Getting informed is the best way to open up the conversation.',
    quote: 'When both parties aren\'t fully aligned yet, information is your most powerful tool. Understanding the process removes fear from the equation.',
    ctaLabel: 'Your recommended next step',
    ctaTitle: 'Download the Free Navigating Divorce Guide',
    ctaDesc: 'No pressure to call or commit. Just clear, practical information on how real estate works through divorce — so you can make decisions from a position of confidence.',
    primary: { text: 'Get the Free Guide →', href: LINKS.guide },
    secondary: { text: 'Talk With Our Team When Ready', href: LINKS.bookCall },
  },
};

function renderResult(type) {
  const r = RESULTS[type];

  $('r-badge').className = 'result-badge ' + r.badgeClass;
  $('r-badge').textContent = r.badge;
  $('r-headline').textContent = r.headline;
  $('r-explain').textContent = r.explain;
  $('r-quote').textContent = '"' + r.quote + '"';
  $('r-cta-label').textContent = r.ctaLabel;
  $('r-cta-title').textContent = r.ctaTitle;
  $('r-cta-desc').textContent = r.ctaDesc;
  $('r-cta-actions').innerHTML = `
    <a href="${r.primary.href}" class="cta-primary">${r.primary.text}</a>
    <a href="${r.secondary.href}" class="cta-secondary">${r.secondary.text}</a>
  `;
}

// ── CALCULATING ANIMATION ──────────────────────────
function runCalculating(callback) {
  goTo('calculating');

  const arc = $('calcArc');
  const pctEl = $('calcPct');
  const total = 213; // stroke-dasharray circumference
  let progress = 0;
  const duration = 1600; // ms
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const pct = Math.round(eased * 100);
    arc.style.strokeDashoffset = total - eased * total;
    pctEl.textContent = pct + '%';

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(callback, 200);
    }
  }
  requestAnimationFrame(tick);
}

// ── LEAD SUBMISSION ────────────────────────────────
function resetCaptureSubmitUi() {
  const btn = $('submitBtn');
  $('btn-label').style.display = '';
  $('btn-spinner').style.display = 'none';
  if (btn) btn.disabled = false;
}

function setCaptureError(message) {
  const el = $('lead-submit-error');
  if (!el) return;
  el.textContent = message || '';
  el.style.display = message ? 'block' : 'none';
}

async function submitLead(e) {
  e.preventDefault();

  const firstName = $('f-first').value.trim();
  const lastName  = $('f-last').value.trim();
  const email     = $('f-email').value.trim();
  const phone     = $('f-phone').value.trim();

  if (!firstName || !lastName || !email) {
    setCaptureError('Please enter your first name, last name, and email.');
    return;
  }

  setCaptureError('');

  const btn = $('submitBtn');
  $('btn-label').style.display = 'none';
  $('btn-spinner').style.display = 'block';
  btn.disabled = true;

  S.lead = { firstName, lastName, email, phone };
  const resultType = computeResult();
  S.result = resultType;

  const notes = [
    'Navigating Divorce Quiz v2',
    'Result: ' + resultType,
    'Q1 alignment: ' + (S.answers.q1?.label ?? ''),
    'Q2 urgency: ' + (S.answers.q2?.label ?? ''),
    'Q3 challenge: ' + (S.answers.q3?.label ?? ''),
    'Q4 attorney: ' + (S.answers.q4?.label ?? ''),
    'Q5 preference: ' + (S.answers.q5?.label ?? ''),
    'Quiz source: navigating-divorce-quiz-v2',
  ].join('\n');

  const urgencyLabel = (S.answers.q2 && S.answers.q2.label) ? String(S.answers.q2.label) : '';
  const urgency = urgencyLabel
    ? 'Divorce quiz — timeline: ' + urgencyLabel
    : 'Divorce quiz — timeline not captured';

  const body = JSON.stringify({
    lead_type: 'seller',
    name: (firstName + ' ' + lastName).trim(),
    email: email,
    phone: phone || undefined,
    urgency: urgency,
    urgency_explicit: Boolean(urgencyLabel),
    source_page: window.location.href,
    source_path: '/navigating-divorce',
    notes: notes,
  });

  let res;
  let data = null;
  try {
    res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    try {
      data = await res.json();
    } catch (_) {
      data = null;
    }
  } catch (_) {
    resetCaptureSubmitUi();
    setCaptureError('Network error — check your connection and try again.');
    return;
  }

  const ok = res.ok && data && data.ok === true;
  if (!ok) {
    resetCaptureSubmitUi();
    const msg =
      (data && typeof data.error === 'string' && data.error) ||
      'We could not save your info. Please try again or use Contact Us.';
    setCaptureError(msg);
    return;
  }

  renderResult(resultType);

  runCalculating(() => {
    goTo('results');
  });
}

// ── RESTART ────────────────────────────────────────
function restart() {
  S.answers = {};
  S.lead = {};
  S.result = null;

  // Clear selections
  document.querySelectorAll('.opt.selected').forEach(b => b.classList.remove('selected'));
  // Disable next buttons
  ['q1','q2','q3','q4','q5'].forEach(q => {
    const btn = $('next-' + q);
    if (btn) btn.disabled = true;
  });
  // Clear form
  ['f-first','f-last','f-email','f-phone'].forEach(id => {
    const inp = $(id); if (inp) inp.value = '';
  });
  // Reset submit button
  $('btn-label').style.display = '';
  $('btn-spinner').style.display = 'none';
  const sb = $('submitBtn'); if (sb) sb.disabled = false;
  setCaptureError('');

  goTo('welcome');
}

// ── DARK MODE INIT ─────────────────────────────────
(function () {
  const theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();

// ── INIT ───────────────────────────────────────────
syncProgress('welcome');
