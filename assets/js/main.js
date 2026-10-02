/* ZaUtre.com — site script. No dependencies, loaded with `defer`. */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  /* ------------------------------------------------------------------
     Header: mobile nav + "stuck" border once the page scrolls
     ------------------------------------------------------------------ */
  var header = $('[data-header]');
  var nav = $('[data-nav]');
  var toggle = $('[data-nav-toggle]');

  function setNav(open) {
    if (!nav || !toggle) return;
    if (open) nav.style.setProperty('--nav-top', header.getBoundingClientRect().bottom + 'px');
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    doc.body.classList.toggle('nav-open', open);
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); toggle.focus(); }
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setNav(false); }, { passive: true });
  }

  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('is-stuck', window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------
     Logo clock: hands show the current time on hover
     ------------------------------------------------------------------ */
  $$('.brand').forEach(function (brand) {
    var hour = $('.logo-hour', brand);
    var minute = $('.logo-minute', brand);
    if (!hour || !minute) return;
    brand.addEventListener('mouseenter', function () {
      var now = new Date();
      hour.style.transform = 'rotate(' + ((((now.getHours() + 9) % 12) + 3) * 30 + now.getMinutes() * 0.5) + 'deg)';
      minute.style.transform = 'rotate(' + now.getMinutes() * 6 + 'deg)';
    });
    brand.addEventListener('mouseleave', function () {
      hour.style.transform = '';
      minute.style.transform = '';
    });
  });

  /* ------------------------------------------------------------------
     Reveal on scroll + number count-up
     ------------------------------------------------------------------ */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (isNaN(target) || reducedMotion) return;
    var start = null;
    var duration = 1200;
    var step = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = (0).toFixed(decimals);
    requestAnimationFrame(step);
  }

  var revealables = $$('[data-reveal]');
  revealables.forEach(function (el) {
    var siblings = el.parentElement ? $$(':scope > [data-reveal]', el.parentElement) : [];
    var i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--reveal-delay', Math.min(i * 70, 350) + 'ms');
  });

  function reveal(el) {
    el.classList.add('is-in');
    $$('[data-count]', el).forEach(countUp);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(reveal);
  }
  window.addEventListener('beforeprint', function () { revealables.forEach(reveal); });

  /* ------------------------------------------------------------------
     Live performance metrics (homepage HUD + footer chip on every page)
     Measured with the browser's own Performance APIs; ratings use the
     published Core Web Vitals thresholds.
     ------------------------------------------------------------------ */
  var LIMITS = {          // [good, poor]
    lcp: [2500, 4000],
    cls: [0.1, 0.25],
    inp: [200, 500],
    ttfb: [800, 1800],
    fcp: [1800, 3000],
    weight: [200 * 1024, 500 * 1024],
    requests: [25, 50]
  };
  var LABELS = { good: 'good', ok: 'needs work', poor: 'poor' };

  var m = { ttfb: null, fcp: null, lcp: null, cls: 0, inp: null, weight: 0, requests: 0 };
  var supports = (window.PerformanceObserver && PerformanceObserver.supportedEntryTypes) || [];
  var has = { lcp: supports.indexOf('largest-contentful-paint') > -1, cls: supports.indexOf('layout-shift') > -1, inp: supports.indexOf('event') > -1 };

  function rate(k, v) { return v <= LIMITS[k][0] ? 'good' : v <= LIMITS[k][1] ? 'ok' : 'poor'; }
  function fmtMs(v) { return v < 1000 ? Math.round(v) + ' ms' : (v / 1000).toFixed(2) + ' s'; }
  function fmtBytes(b) {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(b < 10240 ? 1 : 0) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  }
  function fmt(k, v) {
    if (k === 'cls') return v.toFixed(3);
    if (k === 'weight') return fmtBytes(v);
    if (k === 'requests') return String(v);
    return fmtMs(v);
  }
  // Ring fill: full when instant, ~75% at the "good" limit, ~40% at "poor".
  function score(k, v) {
    var g = LIMITS[k][0], p = LIMITS[k][1];
    if (v <= g) return 1 - 0.25 * (v / g);
    if (v <= p) return 0.75 - 0.35 * ((v - g) / (p - g));
    return Math.max(0.06, 0.4 - 0.34 * Math.min((v - p) / p, 1));
  }

  function observe(type, cb, extra) {
    if (!window.PerformanceObserver) return;
    try {
      var opts = { type: type, buffered: true };
      if (extra) for (var key in extra) opts[key] = extra[key];
      new PerformanceObserver(function (list) { cb(list.getEntries()); schedule(); }).observe(opts);
    } catch (e) { /* entry type not supported */ }
  }

  var hud = $('[data-hud]');
  var chip = $('[data-perf-chip]');
  var pending = false;

  function setText(k, text) {
    $$('[data-perf="' + k + '"]').forEach(function (el) { el.textContent = text; });
  }

  function render() {
    pending = false;
    ['ttfb', 'fcp', 'lcp', 'cls', 'inp', 'weight', 'requests'].forEach(function (k) {
      var v = m[k];
      var vital = hud && $('[data-vital="' + k + '"]', hud);
      var row = hud && $('[data-row="' + k + '"]', hud);
      var ratingEl = hud && $('[data-rating="' + k + '"]', hud);

      if ((k === 'lcp' || k === 'cls' || k === 'inp') && !has[k]) {
        setText(k, 'n/a');
        if (ratingEl) ratingEl.textContent = 'not in this browser';
        return;
      }
      if (v === null || (k === 'lcp' && !v)) return;

      var r = rate(k, v);
      setText(k, fmt(k, v));
      if (vital) {
        vital.setAttribute('data-state', r);
        $('.vital__fill', vital).style.setProperty('--offset', String(100 - score(k, v) * 100));
      }
      if (ratingEl) ratingEl.textContent = LABELS[r];
      if (row) {
        row.setAttribute('data-state', r);
        $('.hud__meter i', row).style.setProperty('--fill', String(Math.max(0.03, Math.min(v / LIMITS[k][1], 1))));
      }
    });
  }

  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(render); }
  }

  if ((hud || chip) && window.performance && performance.getEntriesByType) {
    var navEntry = performance.getEntriesByType('navigation')[0];
    if (navEntry) {
      m.ttfb = Math.max(0, navEntry.responseStart - (navEntry.activationStart || 0));
      m.weight += navEntry.transferSize || navEntry.encodedBodySize || 0;
      m.requests += 1;
    }

    observe('paint', function (entries) {
      entries.forEach(function (e) { if (e.name === 'first-contentful-paint') m.fcp = e.startTime; });
    });

    observe('largest-contentful-paint', function (entries) {
      var last = entries[entries.length - 1];
      if (last) m.lcp = last.renderTime || last.startTime;
    });

    // CLS: largest session window (1s gap, 5s cap), as defined by web.dev.
    var sessionValue = 0, sessionEntries = [];
    observe('layout-shift', function (entries) {
      entries.forEach(function (e) {
        if (e.hadRecentInput) return;
        var first = sessionEntries[0], last = sessionEntries[sessionEntries.length - 1];
        if (sessionValue && e.startTime - last.startTime < 1000 && e.startTime - first.startTime < 5000) {
          sessionValue += e.value;
          sessionEntries.push(e);
        } else {
          sessionValue = e.value;
          sessionEntries = [e];
        }
        if (sessionValue > m.cls) m.cls = sessionValue;
      });
    });

    // INP (approximation): slowest interaction observed so far.
    observe('event', function (entries) {
      entries.forEach(function (e) {
        if (e.interactionId && (m.inp === null || e.duration > m.inp)) m.inp = e.duration;
      });
    }, { durationThreshold: 16 });

    observe('resource', function (entries) {
      entries.forEach(function (e) {
        m.weight += e.transferSize || e.encodedBodySize || 0;
        m.requests += 1;
      });
    });

    schedule();
    window.addEventListener('load', function () {
      setTimeout(function () {
        schedule();
        if (chip) chip.hidden = false;
      }, 300);
    });
  }

  /* ------------------------------------------------------------------
     Filters (case studies, news)
     ------------------------------------------------------------------ */
  $$('[data-filters]').forEach(function (group) {
    var grid = $(group.getAttribute('data-filters'));
    if (!grid) return;
    var exact = group.hasAttribute('data-exact');
    var items = $$('[data-categories]', grid);
    var buttons = $$('.filter-btn', group);
    var empty = $('[data-filters-empty]', group.parentElement);

    function matches(item, key) {
      if (key === 'all') return true;
      var cats = (item.getAttribute('data-categories') || '').split(/\s+/);
      return cats.some(function (c) { return exact ? c === key : c.indexOf(key) > -1; });
    }

    buttons.forEach(function (btn) {
      var key = btn.getAttribute('data-filter');
      var n = items.filter(function (item) { return matches(item, key); }).length;
      var counter = $('[data-count-for]', btn);
      if (counter) counter.textContent = n;
      if (!n && key !== 'all') btn.hidden = true;

      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        var shown = 0;
        items.forEach(function (item) {
          var ok = matches(item, key);
          item.hidden = !ok;
          if (ok) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
  });

  /* ------------------------------------------------------------------
     Contact form: prefill subject, lazy-load reCAPTCHA, guard submit
     ------------------------------------------------------------------ */
  var form = $('[data-contact-form]');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var subject = $('#subject', form);
    var preset = params.get('subject') || (params.get('job') ? 'Application: ' + params.get('job').replace(/[-_]+/g, ' ') : '');
    if (subject && preset && !subject.value) subject.value = preset;

    var captchaRequested = false;
    var hint = $('[data-captcha-hint]', form);
    var errorBox = $('[data-form-error]', form);

    var loadCaptcha = function () {
      if (captchaRequested) return;
      captchaRequested = true;
      var s = doc.createElement('script');
      s.src = 'https://www.google.com/recaptcha/api.js';
      s.async = true;
      s.defer = true;
      s.onload = function () { if (hint) hint.hidden = true; };
      doc.head.appendChild(s);
    };

    form.addEventListener('focusin', loadCaptcha);
    form.addEventListener('pointerenter', loadCaptcha);

    form.addEventListener('submit', function (e) {
      var g = window.grecaptcha;
      if (!g || !g.getResponse || !g.getResponse()) {
        e.preventDefault();
        loadCaptcha();
        if (errorBox) {
          errorBox.textContent = 'Please complete the spam check above, then send again.';
          errorBox.hidden = false;
        }
      } else if (errorBox) {
        errorBox.hidden = true;
      }
    });
  }
})();
