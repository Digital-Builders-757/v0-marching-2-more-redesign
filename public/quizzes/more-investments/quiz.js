/**
 * Investor path quiz — same-origin POST /api/submit-lead (no third-party webhook).
 */
(function () {
  "use strict";

  var LINKS = {
    breakdown: "/contact-us?intent=consultation",
    analysis: "/contact-us?intent=buyer",
    holdsell: "/free-home-valuation",
    brrrr: "/more-investments#investor-tools",
  };

  var ST = { current: "welcome", qs: ["q1", "q2", "q3", "q4", "q5", "q6"], answers: {}, result: null };

  var $ = function (id) {
    return document.getElementById(id);
  };
  var el = function (id) {
    return document.getElementById("s-" + id);
  };

  function readParentHref() {
    try {
      if (window.parent && window.parent.location && window.parent.location.href) return window.parent.location.href;
    } catch (e) {}
    return window.location.href;
  }

  function readUtmParams() {
    try {
      var u = new URL(readParentHref());
      function get(k) {
        var v = u.searchParams.get(k);
        return v && v.trim() ? v.trim() : undefined;
      }
      return {
        utm_source: get("utm_source"),
        utm_medium: get("utm_medium"),
        utm_campaign: get("utm_campaign"),
        utm_content: get("utm_content"),
      };
    } catch (e) {
      return {};
    }
  }

  /** Progress bar visibility + fill */
  function syncP(s) {
    var pw = $("pw");
    var pf = $("pf");
    var pl = $("pl");
    var qi = ST.qs.indexOf(s);
    var hide = ["welcome", "bridge", "calculating", "preview", "results"].indexOf(s) >= 0;
    pw.classList.toggle("visible", !hide);
    if (qi >= 0) {
      pf.style.width = Math.round(((qi + 1) / ST.qs.length) * 100) + "%";
      pl.textContent = "Question " + (qi + 1) + " of " + ST.qs.length;
    } else if (s === "capture") {
      pf.style.width = "100%";
      pl.textContent = "Almost done!";
      pw.classList.add("visible");
    }
  }

  function goTo(t) {
    if (t === ST.current) return;
    var f = el(ST.current);
    var to = el(t);
    if (!to) return;
    f.classList.remove("active");
    f.classList.add("out");
    setTimeout(function () {
      f.classList.remove("out");
    }, 280);
    setTimeout(function () {
      to.classList.add("active");
      ST.current = t;
      syncP(t);
      try {
        window.parent.postMessage({ type: "quiz-height", height: document.body.scrollHeight }, "*");
      } catch (e) {}
      var shell = $("shell");
      if (shell) shell.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 170);
  }

  function pick(b) {
    var g = b.closest(".opts");
    if (!g) return;
    g.querySelectorAll(".opt.sel").forEach(function (x) {
      x.classList.remove("sel");
    });
    b.classList.add("sel");
    ST.answers[b.dataset.q] = { val: b.dataset.val, label: b.dataset.label };
    var nb = $("next-" + b.dataset.q);
    if (nb) nb.disabled = false;
  }

  function result() {
    var q1 = ST.answers.q1 && ST.answers.q1.val;
    var q2 = ST.answers.q2 && ST.answers.q2.val;
    var q5 = ST.answers.q5 && ST.answers.q5.val;
    var q6 = ST.answers.q6 && ST.answers.q6.val;

    if (q2 === "holdsell" || q6 === "holdsell") return "holdsell";
    if (q1 === "military") return "military";
    if (q2 === "recycle" && (q5 === "one" || q5 === "small" || q5 === "portfolio")) return "brrrr";
    if ((q1 === "grow" || q5 === "portfolio" || q5 === "small") && q2 !== "strategy") return "brrrr";
    if (q1 === "unsure" || q2 === "strategy" || q5 === "none") return "strategy";
    if (q1 === "first") return "first";
    return "first";
  }

  var RES = {
    first: {
      bc: "badge-first",
      badge: "🏠 First Deal Builder",
      previewTitle: "<em>First Deal Builder</em>",
      previewDesc:
        "You're in position to acquire your first investment property. The path is clear — you just need a strategy that matches your market, your financing, and your risk tolerance.",
      teasers: [
        "How to identify your first deal criteria so you're not guessing",
        "The financing options that work best for first-time investors in Virginia",
        "What to look for — and what to avoid — when analyzing your first property",
      ],
      h: "You're ready to build — you just need a clear first-deal framework.",
      e:
        "First-time investors who succeed aren't the ones who waited until they felt \"ready.\" They're the ones who got clear on their criteria early — market, property type, financing, and cash-on-cash return target — and moved with intention. Let's build that framework for you.",
      q: '"The best deal isn\'t the first one you find. It\'s the first one that matches your strategy. Let\'s build the strategy first."',
      focus: [
        "Define your deal criteria: market, property type, price range, and minimum cash flow",
        "Understand your financing options — conventional, FHA, DSCR, and creative structures",
        "Learn how to analyze a deal in 10 minutes so you can move fast when the right one appears",
        "Build a local team: agent, lender, property manager, inspector",
      ],
      cl: "Your recommended next step",
      ct: "Get My Full Investment Breakdown",
      cd:
        "A focused conversation to map your first-deal strategy — market selection, financing, criteria, and what to look for in your first property.",
      p: { t: "Get My Full Breakdown →", h: LINKS.breakdown },
      s: { t: "Request a Deal Analysis", h: LINKS.analysis },
    },
    military: {
      bc: "badge-military",
      badge: "🎖️ Military Portfolio Builder",
      previewTitle: "<em>Military Portfolio Builder</em>",
      previewDesc:
        "Your military background and PCS reality create a unique investing opportunity — if you build around it intentionally. Most military investors either miss the window or make it harder than it needs to be.",
      teasers: [
        "How to use your VA benefit as a portfolio-building tool across multiple duty stations",
        "PCS strategies: when to rent vs. sell and how to analyze that decision",
        "How to build a hands-off portfolio that runs while you're deployed or relocated",
      ],
      h: "Your PCS timeline is an asset — if you build around it correctly.",
      e:
        "Military investors have a unique edge: VA financing, repeat PCS opportunities, and a disciplined mindset. The risk is building without a plan and getting stuck with a property that doesn't serve the mission. We help military investors build portfolios that grow across duty stations — whether you're active, transitioning, or already out.",
      q: '"Every PCS is either a missed opportunity or a portfolio play. The difference is whether you had a plan before orders dropped."',
      focus: [
        "Understand how to use your VA benefit more than once — and how entitlement restoration works",
        "Build a PCS decision framework: rent it, sell it, or convert to investment",
        "Identify property management partners who understand military ownership across states",
        "Create a 10-year portfolio roadmap that accounts for mobility and deployment",
      ],
      cl: "Your recommended next step",
      ct: "Get My Military Investor Breakdown",
      cd:
        "A strategy session built around your specific situation — VA benefit, current duty station, PCS timeline, and portfolio goals. No generic advice.",
      p: { t: "Get My Full Breakdown →", h: LINKS.breakdown },
      s: { t: "Request a Deal Analysis", h: LINKS.analysis },
    },
    brrrr: {
      bc: "badge-brrrr",
      badge: "🔄 BRRRR / Value-Add Operator",
      previewTitle: "<em>BRRRR / Value-Add Operator</em>",
      previewDesc:
        "You're past the \"should I invest?\" question. You're ready to recycle capital and build velocity. BRRRR or value-add acquisitions may be your highest-leverage next move.",
      teasers: [
        "How the BRRRR model works and where most investors blow the numbers",
        "Deal criteria for value-add: what you need before you run a refinance projection",
        "How to build a local contractor and lender team that can execute the strategy reliably",
      ],
      h: "You're in value-add territory. The question is execution quality.",
      e:
        "BRRRR — Buy, Rehab, Rent, Refinance, Repeat — is the fastest path to scaling a portfolio with limited capital. But it only works when the numbers are real and the execution team is solid. Most investors who fail at BRRRR fail in one of three places: the rehab budget, the ARV estimate, or the refinance timeline. We help you get all three right.",
      q: '"The BRRRR model isn\'t a shortcut — it\'s a system. The investors who do it well obsess over the numbers before they ever pick up a sledgehammer."',
      focus: [
        "Run a real BRRRR analysis: ARV, rehab budget, stabilized rent, refinance projection, cash-out",
        "Identify target properties that actually qualify for the strategy in the current market",
        "Build a contractor vetting process so your rehab timeline doesn't eat your spread",
        "Know your lender's seasoning requirements before you commit to the deal",
      ],
      cl: "Your recommended next step",
      ct: "Get My Full Investment Breakdown",
      cd: "We'll map your BRRRR or value-add strategy — deal criteria, market targets, financing structure, and execution checklist.",
      p: { t: "Get My Full Breakdown →", h: LINKS.breakdown },
      s: { t: "Open the BRRRR analyzer", h: LINKS.brrrr },
    },
    holdsell: {
      bc: "badge-holdsell",
      badge: "⚖️ Hold-or-Sell Decision Maker",
      previewTitle: "<em>Hold-or-Sell Decision Maker</em>",
      previewDesc:
        "You're at a decision point with a property you own. The hold-vs-sell question is one of the most consequential calls an investor makes — and most people make it emotionally rather than analytically.",
      teasers: [
        "The 5 numbers you need to make a real hold-or-sell decision",
        "When holding is a wealth-builder vs. when it's a drag on your portfolio",
        "How to 1031 exchange proceeds into a better asset if you do decide to sell",
      ],
      h: "This is a numbers question — and most people are answering it with their gut.",
      e:
        "Whether to hold or sell a rental property depends on four things: your current return on equity, your opportunity cost, your tax position, and your next-best use of the capital. Most investors who hold too long are sitting on dead equity. Most who sell too fast give up compounding. We help you run the real analysis — not guess.",
      q: '"Holding a property because you\'re emotionally attached to it is a strategy. It\'s just not a good one. Let\'s look at the actual numbers together."',
      focus: [
        "Calculate your current return on equity — not just cash flow",
        "Model the 1031 exchange path if you sell",
        "Understand depreciation recapture exposure before you sell",
        "Compare cash-on-cash return now vs. a comparable deal today",
      ],
      cl: "Your recommended next step",
      ct: "Request a Hold-vs-Sell Analysis",
      cd:
        "We'll run the actual numbers on your property — equity position, current yield, opportunity cost, and tax implications — so you can decide with clarity.",
      p: { t: "Compare hold vs. sell →", h: LINKS.holdsell },
      s: { t: "Get my full breakdown", h: LINKS.breakdown },
    },
    strategy: {
      bc: "badge-strategy",
      badge: "🗺️ Strategy Before Property",
      previewTitle: "<em>Strategy Before Property</em>",
      previewDesc:
        "You're thinking about investing but you're not sure which path fits your situation yet. That's the right instinct — the investors who build wealth are the ones who built a strategy before they bought a property.",
      teasers: [
        "How to choose the right investing strategy for your income, timeline, and risk tolerance",
        "The difference between cash flow investing and equity building — and which fits your goals",
        "How to build an investor profile so every deal you analyze has a benchmark to measure against",
      ],
      h: "Strategy first. Property second. This is the right order.",
      e:
        "Most investors who struggle bought a property before they had a strategy. They chased a deal, ran the numbers on that one deal, and skipped the step where they figured out what they were actually trying to build. Getting your strategy clear first — market, property type, return criteria, financing approach — means every deal you look at gets measured against a real benchmark.",
      q: '"You don\'t need to find the right deal first. You need to know what \"right\" looks like — then go find it."',
      focus: [
        "Define your investor identity: cash flow investor, equity builder, or portfolio grower?",
        "Choose your market and property type based on your capital and management tolerance",
        "Set minimum return criteria so you're not guessing when you analyze a deal",
        "Build your investing team before you need them: agent, lender, inspector, property manager",
      ],
      cl: "Your recommended next step",
      ct: "Build My Investor Strategy",
      cd: "A strategy session to get your investor profile locked in before you start analyzing deals.",
      p: { t: "Get My Full Breakdown →", h: LINKS.breakdown },
      s: { t: "Request a Deal Analysis", h: LINKS.analysis },
    },
  };

  function linkTop(href, cls, text) {
    var ext = /^https?:/i.test(href) || href.indexOf("tel:") === 0;
    var tgt = ext ? ' target="_blank" rel="noopener noreferrer"' : ' target="_top"';
    return '<a href="' + href + '" class="' + cls + '"' + tgt + ">" + text + "</a>";
  }

  function render(type) {
    var r = RES[type];
    if (!r) return;
    $("rb").className = "r-badge " + r.bc;
    $("rb").textContent = r.badge;
    $("rh").textContent = r.h;
    $("re").textContent = r.e;
    $("rq").textContent = r.q;
    $("rf").innerHTML =
      '<p class="rf-title">What to focus on first</p>' +
      r.focus
        .map(function (f) {
          return '<div class="rf-item"><div class="rf-dot"></div><span>' + f + "</span></div>";
        })
        .join("");
    $("rcl").textContent = r.cl;
    $("rct").textContent = r.ct;
    $("rcd").textContent = r.cd;
    $("rca").innerHTML =
      linkTop(r.p.h, "cta-p", r.p.t) + linkTop(r.s.h, "cta-s", r.s.t);
  }

  function calcAnim(cb) {
    goTo("calculating");
    var arc = $("arc");
    var cp = $("cp");
    var total = 213;
    var dur = 1600;
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      arc.style.strokeDashoffset = total - ease * total;
      cp.textContent = Math.round(ease * 100) + "%";
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(cb, 200);
    }
    requestAnimationFrame(tick);
  }

  function hideCapErr() {
    var e = $("capErr");
    if (e) {
      e.textContent = "";
      e.hidden = true;
    }
  }

  function showCapErr(msg) {
    var e = $("capErr");
    if (e) {
      e.textContent = msg;
      e.hidden = false;
    }
  }

  function selectedLabel(sel) {
    if (!sel || !sel.options || sel.selectedIndex < 0) return "";
    var o = sel.options[sel.selectedIndex];
    return o ? o.textContent.trim() : "";
  }

  function buildNotes(type, inv, budget, status) {
    return [
      "Investor path quiz — full breakdown",
      "Result: " + type,
      "Q1: " + ((ST.answers.q1 && ST.answers.q1.label) || ""),
      "Q2 goal: " + ((ST.answers.q2 && ST.answers.q2.label) || ""),
      "Q3 hands-on: " + ((ST.answers.q3 && ST.answers.q3.label) || ""),
      "Q4 timeline: " + ((ST.answers.q4 && ST.answers.q4.label) || ""),
      "Q5 portfolio: " + ((ST.answers.q5 && ST.answers.q5.label) || ""),
      "Q6 need: " + ((ST.answers.q6 && ST.answers.q6.label) || ""),
      "Investor type: " + inv,
      "Budget: " + budget,
      "Property status: " + status,
    ].join("\n");
  }

  window.showPreview = function showPreview() {
    calcAnim(function () {
      var type = result();
      ST.result = type;
      var r = RES[type];
      $("prev-title").innerHTML = r.previewTitle;
      $("prev-desc").textContent = r.previewDesc;
      ["t1", "t2", "t3"].forEach(function (k, i) {
        var cel = $("prev-" + k);
        if (cel) cel.querySelector("span").textContent = r.teasers[i] || "";
      });
      goTo("preview");
    });
  };

  async function submitLead(ev) {
    ev.preventDefault();
    hideCapErr();

    var fi = $("fi");
    var fl = $("fl");
    var fe = $("fe");
    var fp = $("fp");
    var finv = $("finv");
    var fbudget = $("fbudget");
    var fstatus = $("fstatus");

    var fn = fi.value.trim();
    var ln = fl.value.trim();
    var em = fe.value.trim();
    var ph = fp.value.trim();

    if (!fn || !ln || !em) return;
    if (!finv.value || !fbudget.value || !fstatus.value) {
      showCapErr("Please complete Investor type, budget, and property status.");
      return;
    }

    $("sbl").style.display = "none";
    $("ssp").style.display = "block";
    $("subBtn").disabled = true;

    var type = ST.result || result();
    ST.result = type;
    var utm = readUtmParams();
    var srcPage = readParentHref();

    var invLabel = selectedLabel(finv);
    var budgetLabel = selectedLabel(fbudget);
    var statusLabel = selectedLabel(fstatus);

    var urgency = (ST.answers.q4 && ST.answers.q4.label) || "Timeline not answered";
    var goal = (ST.answers.q2 && ST.answers.q2.label) || "";

    var payload = {
      lead_type: "buyer",
      name: (fn + " " + ln).trim(),
      email: em,
      phone: ph || undefined,
      urgency: urgency,
      urgency_explicit: true,
      quiz_result: type,
      quiz_source: "more-investments-quiz",
      quiz_goal: goal || undefined,
      quiz_timeline: urgency,
      notes: buildNotes(type, invLabel, budgetLabel, statusLabel),
      source_page: srcPage,
      source_path: "/more-investments",
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
    };

    var apiUrl = window.location.origin + "/api/submit-lead";
    var data = null;

    try {
      var res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      try {
        data = await res.json();
      } catch (e) {
        data = null;
      }
      if (!res.ok || !data || data.ok !== true) {
        var msg =
          data && typeof data.error === "string" && data.error.trim()
            ? data.error.trim()
            : "We could not save your information. Try again or call our office.";
        showCapErr(msg);
        $("sbl").style.display = "";
        $("ssp").style.display = "none";
        $("subBtn").disabled = false;
        return;
      }
    } catch (e) {
      showCapErr("Network error — check your connection and try again.");
      $("sbl").style.display = "";
      $("ssp").style.display = "none";
      $("subBtn").disabled = false;
      return;
    }

    render(type);
    calcAnim(function () {
      goTo("results");
    });
  }

  window.restart = function restart() {
    hideCapErr();
    ST.answers = {};
    ST.result = null;
    document.querySelectorAll(".opt.sel").forEach(function (b) {
      b.classList.remove("sel");
    });
    ST.qs.forEach(function (q) {
      var nb = $("next-" + q);
      if (nb) nb.disabled = true;
    });
    ["fi", "fl", "fe", "fp"].forEach(function (id) {
      var inp = $(id);
      if (inp) inp.value = "";
    });
    ["finv", "fbudget", "fstatus"].forEach(function (id) {
      var sel = $(id);
      if (sel) sel.selectedIndex = 0;
    });
    $("sbl").style.display = "";
    $("ssp").style.display = "none";
    var sb = $("subBtn");
    if (sb) sb.disabled = false;
    goTo("welcome");
  };

  window.goTo = goTo;
  window.pick = pick;
  window.submitLead = submitLead;

  syncP("welcome");
})();
