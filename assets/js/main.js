/* ============ Nanditha Sai Pasumarthy — Portfolio interactivity ============ */
(function () {
  "use strict";

  /* ---------- Theme toggle (dark / light, persisted) ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  try {
    var saved = localStorage.getItem("nsp-theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("nsp-theme", next); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { navLinks.classList.remove("open"); });
  });

  /* ---------- Typewriter effect in hero ---------- */
  var phrases = [
    "Construction Project Coordinator",
    "Project Engineer",
    "Estimating & Project Controls"
  ];
  var typedEl = document.getElementById("typed");
  if (typedEl) {
    var pi = 0, ci = 0, deleting = false;
    (function typeLoop() {
      var word = phrases[pi];
      if (!deleting) {
        ci++;
        typedEl.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; return void setTimeout(typeLoop, 1600); }
        setTimeout(typeLoop, 70);
      } else {
        ci--;
        typedEl.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; return void setTimeout(typeLoop, 350); }
        setTimeout(typeLoop, 35);
      }
    })();
  }

  /* ---------- Reveal-on-scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Scroll-spy navigation ---------- */
  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll(".nav-link");
  function spy() {
    var pos = window.scrollY + 120;
    var current = "home";
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s.id; });
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", spy, { passive: true });
  spy();

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll(".stat-num");
  var counted = false;
  function animateCounters() {
    if (counted) return;
    var stats = document.querySelector(".about-stats");
    if (!stats) return;
    var rect = stats.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counted = true;
      counters.forEach(function (el) {
        var target = parseInt(el.getAttribute("data-count"), 10);
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1200, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
  }
  window.addEventListener("scroll", animateCounters, { passive: true });
  animateCounters();

  /* ---------- Project filters ---------- */
  var filterBtns = document.querySelectorAll("#projectFilters .filter-btn");
  var cards = document.querySelectorAll(".project-card");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (c) {
        var show = f === "all" || c.getAttribute("data-category") === f;
        c.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- Skill tabs ---------- */
  var tabs = document.querySelectorAll("#skillTabs .skill-tab");
  var panels = document.querySelectorAll(".skill-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      var panel = document.querySelector('.skill-panel[data-panel="' + tab.getAttribute("data-tab") + '"]');
      if (panel) panel.classList.add("active");
    });
  });

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById("copyEmail");
  copyBtn.addEventListener("click", function () {
    var email = "nanditha0826@gmail.com";
    function done() {
      var orig = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(function () { copyBtn.textContent = orig; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(done);
    } else {
      var ta = document.createElement("textarea");
      ta.value = email; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta); done();
    }
  });

  /* ---------- Back to top ---------- */
  var btt = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    btt.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btt.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
