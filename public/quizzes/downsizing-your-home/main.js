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

async function submitForm({ firstName, email, phone, zip, intent }, formEl, labelId, spinnerId, successId) {
  if (!firstName || !email || !intent) return false;

  // Loading state
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

  try {
    await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lead_type: 'seller',
        name: firstName.trim(),
        email,
        phone: phone || undefined,
        source_page: window.location.href,
        source_path: '/downsizing-your-home',
        notes,
      }),
    });
  } catch (e) { /* silent fail */ }

  // Show success
  formEl.style.display = 'none';
  document.getElementById(successId).style.display = 'flex';
  return true;
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
  }, e.target, 'mf-label', 'mf-spinner', 'formSuccess');
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
  }, e.target, 'ff-label', 'ff-spinner', 'finalSuccess');
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
