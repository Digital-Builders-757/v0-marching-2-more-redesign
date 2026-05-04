/* ══════════════════════════════════════════════════
   RIGHT-SIZING LANDING PAGE — MARCHING 2 MORE
   Leads POST to site /api/submit-lead
══════════════════════════════════════════════════ */

// Reference tag strings for ops (mirrors prior GHL intent tags; stored in submit-lead notes)
function buildTags(intent) {
  const base = [
    'm2m|source:downsizing',
    'm2m|lead-type:downsizer',
    'm2m|team:full-team',
    'm2m|channel:landing-page',
    `m2m|source:downsizing|intent:${intent}`,
    'm2m|source:downsizing|geo:virginia',
  ];
  if (intent === 'guide' || intent === 'both') {
    base.push('m2m|source:downsizing|asset:downsizing-guide');
    base.push('m2m|source:downsizing|status:guide-delivered-onscreen');
    base.push('m2m|source:downsizing|status:guide-emailed');
  }
  if (intent === 'consultation' || intent === 'both') {
    base.push('m2m|source:downsizing|status:consultation-requested');
    base.push('m2m|source:downsizing|priority:high-touch');
  }
  return base;
}

function resetLeadFormUi(formEl, labelId, spinnerId) {
  const labelEl = document.getElementById(labelId);
  const spinEl = document.getElementById(spinnerId);
  const submitBtn = formEl.querySelector('[type="submit"]');
  if (labelEl) labelEl.style.display = '';
  if (spinEl) spinEl.style.display = 'none';
  if (submitBtn) submitBtn.disabled = false;
}

function setLeadFormError(errorId, message) {
  if (!errorId) return;
  const errEl = document.getElementById(errorId);
  if (!errEl) return;
  errEl.textContent = message || '';
  errEl.style.display = message ? 'block' : 'none';
}

async function submitForm(
  fields,
  formEl,
  labelId,
  spinnerId,
  successId,
  errorId,
) {
  const firstName = fields.firstName;
  const email = fields.email;
  const phone = fields.phone;
  const zip = fields.zip;
  const intent = fields.intent;
  if (!firstName || !email || !intent) {
    setLeadFormError(errorId, 'Please enter your name, email, and preferred next step.');
    return false;
  }

  setLeadFormError(errorId, '');

  document.getElementById(labelId).style.display = 'none';
  document.getElementById(spinnerId).style.display = 'block';
  const submitBtn = formEl.querySelector('[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  const notes = [
    'Rightsizing static landing (/quizzes/downsizing-your-home/)',
    'Intent: ' + intent,
    'ZIP: ' + (zip || '(none)'),
    'Suggested tags (for ops): ' + buildTags(intent).join('; '),
  ].join('\n');

  const urgency = 'Downsizing landing — next step: ' + String(intent || 'unspecified');

  const body = JSON.stringify({
    lead_type: 'seller',
    name: firstName.trim(),
    email: email,
    phone: phone || undefined,
    urgency: urgency,
    urgency_explicit: true,
    source_page: window.location.href,
    source_path: '/downsizing-your-home',
    notes: notes,
  });

  try {
    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });

    let data = null;
    try {
      data = await res.json();
    } catch (_) {
      data = null;
    }

    const ok = res.ok && data && data.ok === true;
    if (!ok) {
      const msg =
        (data && typeof data.error === 'string' && data.error) ||
        'We could not send your request. Please try again or call the team.';
      resetLeadFormUi(formEl, labelId, spinnerId);
      setLeadFormError(errorId, msg);
      return false;
    }

    formEl.style.display = 'none';
    document.getElementById(successId).style.display = 'flex';
    return true;
  } catch (_) {
    resetLeadFormUi(formEl, labelId, spinnerId);
    setLeadFormError(
      errorId,
      'Network error — check your connection and try again.',
    );
    return false;
  }
}

// ── HERO FORM ─────────────────────────────────────
async function submitMainForm(e) {
  e.preventDefault();
  await submitForm({
    firstName: document.getElementById('mf-first').value.trim(),
    email:     document.getElementById('mf-email').value.trim(),
    phone:     document.getElementById('mf-phone').value.trim(),
    zip:       document.getElementById('mf-zip').value.trim(),
    intent:    document.getElementById('mf-intent').value,
  }, e.target, 'mf-label', 'mf-spinner', 'formSuccess', 'mf-submit-error');
}

// ── FINAL FORM ────────────────────────────────────
async function submitFinalForm(e) {
  e.preventDefault();
  await submitForm({
    firstName: document.getElementById('ff-first').value.trim(),
    email:     document.getElementById('ff-email').value.trim(),
    phone:     document.getElementById('ff-phone').value.trim(),
    zip:       document.getElementById('ff-zip').value.trim(),
    intent:    document.getElementById('ff-intent').value,
  }, e.target, 'ff-label', 'ff-spinner', 'finalSuccess', 'ff-submit-error');
}

// ── SMOOTH SCROLL INTENT ──────────────────────────
// If user comes from quiz result with ?intent=consultation, pre-select the dropdown
(function () {
  const params = new URLSearchParams(window.location.search);
  const intent = params.get('intent');
  if (intent) {
    ['mf-intent', 'ff-intent'].forEach(id => {
      const el = document.getElementById(id);
      if (el && [...el.options].some(o => o.value === intent)) {
        el.value = intent;
      }
    });
    // Smooth scroll to form
    const form = document.getElementById('main-form');
    if (form) setTimeout(() => form.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }
})();

// ── IFRAME RESIZE ─────────────────────────────────
// Listen for height messages from embedded quiz iframe
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'quiz-height') {
    const frame = document.getElementById('quizFrame');
    if (frame) frame.style.height = (e.data.height + 40) + 'px';
  }
});
