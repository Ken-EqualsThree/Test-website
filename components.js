(function () {
  'use strict';

  /* ── Style overrides ─────────────────────────────────────────────── */
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    'nav#main-nav { padding: 0 32px !important; }',
    'nav#main-nav .nav-links { gap: 20px !important; }'
  ].join('\n');
  document.head.appendChild(styleEl);

  /* ── Logo SVG ────────────────────────────────────────────────────── */
  var LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610.33 324.27">'
    + '<path d="M234.08,213.39c-2.27,0-4.22-.3-5.89-.89-1.67-.59-3.05-1.47-4.14-2.64-1.1-1.16-1.94-2.62-2.5-4.38-.56-1.75-.85-3.8-.85-6.13v-46.35h23.18v-17.33h-23.18v-31.84l-18.94,9.21v22.62h-14.3v17.33h14.3v48.06c0,5.08.58,9.53,1.74,13.33,1.17,3.8,2.89,6.97,5.19,9.51,2.29,2.54,5.18,4.45,8.67,5.7,3.48,1.26,7.52,1.88,12.1,1.88,3.02,0,5.78-.14,8.29-.42,2.51-.29,4.84-.71,6.97-1.28v-17.99c-1.88.5-3.72.89-5.51,1.18-1.79.28-3.5.42-5.13.42"/>'
    + '<rect x="260.56" y="135.67" width="18.93" height="94.3"/>'
    + '<polygon points="94.3 94.3 94.3 229.97 178.8 229.97 178.8 211.13 114.65 211.13 114.65 170.8 170.14 170.8 170.14 153.47 114.65 153.47 114.65 113.05 178.8 113.05 178.8 94.3 94.3 94.3"/>'
    + '<path d="M341.79,213.08c-16.71,0-30.32-13.6-30.32-30.31s13.6-30.31,30.32-30.31,30.31,13.6,30.31,30.31-13.6,30.31-30.31,30.31M341.79,134.07c-26.9,0-48.71,21.81-48.71,48.71s21.81,48.7,48.71,48.7,48.7-21.81,48.7-48.7-21.81-48.71-48.7-48.71"/>'
    + '<path d="M270.03,91.24c-6.87,0-12.44,5.57-12.44,12.43s5.56,12.44,12.44,12.44,12.43-5.57,12.43-12.44-5.56-12.43-12.43-12.43"/>'
    + '<path d="M448.93,133.32h0c-10.63,0-20.18,4.61-26.78,11.94l-4.67-9.59h-14.03v94.3h18.93v-56.39c0-12.07,9.79-21.86,21.86-21.86s21.86,9.79,21.86,21.86v56.39h18.84v-60.64c0-19.89-16.12-36.01-36.01-36.01"/>'
    + '<path d="M500.48,104.59c-8.57,0-15.54,6.97-15.54,15.54s6.97,15.54,15.54,15.54,15.54-6.97,15.54-15.54-6.97-15.54-15.54-15.54M500.48,132.87c-7.03,0-12.74-5.72-12.74-12.74s5.72-12.74,12.74-12.74,12.74,5.72,12.74,12.74-5.72,12.74-12.74,12.74"/>'
    + '<path d="M502.93,120.96c1.79-.73,2.84-2.25,2.84-4.19,0-2.7-2.04-4.66-4.85-4.66h-5.69v15.54h2.8v-6.15h2.03l3.46,6.15h3.2l-3.78-6.69ZM502.95,116.81c0,1.17-.93,2.05-2.17,2.05h-2.75v-4.09h2.75c1.26,0,2.17.86,2.17,2.05"/>'
    + '</svg>';

  /* ── Detect current page ─────────────────────────────────────────── */
  var pathname = location.pathname;
  var filename = pathname.split('/').pop() || 'index.html';
  // Treat empty / root as index.html
  if (filename === '' || filename === '/') filename = 'index.html';

  var isIndex     = (filename === 'index.html' || filename === 'etion.html');
  var isCommunity = (filename === 'community.html');
  var isAbout     = (filename === 'about.html');
  var isBlog      = (filename === 'blog.html' || filename === 'post.html');

  /* ── Resolve hrefs (hash-links work directly on index/etion) ──────── */
  var howHref    = isIndex ? '#how'       : 'index.html#how';
  var tasksHref  = isIndex ? '#tasks'     : 'index.html#tasks';
  var joinHref   = isIndex ? '#post-task' : 'index.html#post-task';

  /* ── Build nav HTML ─────────────────────────────────────────────── */
  function activeIf(condition) {
    return condition ? ' class="active"' : '';
  }

  var navHTML = '<a href="index.html" class="nav-logo">' + LOGO_SVG + '</a>'
    + '<ul class="nav-links">'
    + '<li><a href="' + howHref   + '"' + activeIf(isIndex)     + '>How it works</a></li>'
    + '<li><a href="' + tasksHref + '"' + activeIf(false)       + '>Tasks</a></li>'
    + '<li><a href="community.html"' + activeIf(isCommunity)    + '>Community</a></li>'
    + '<li><a href="about.html"'     + activeIf(isAbout)        + '>About</a></li>'
    + '<li><a href="blog.html"'      + activeIf(isBlog)         + '>Blog</a></li>'
    + '</ul>'
    + '<div class="nav-cta">'
    + '<a href="#" class="btn btn-ghost">Log in</a>'
    + '<a href="' + joinHref + '" class="btn btn-lime">Join free</a>'
    + '</div>';

  /* ── Inject nav ─────────────────────────────────────────────────── */
  var navEl = document.querySelector('nav#main-nav');
  if (navEl) {
    navEl.innerHTML = navHTML;
  }

  /* ── Scroll border behaviour ────────────────────────────────────── */
  var targetNav = navEl || document.querySelector('nav');
  if (targetNav) {
    window.addEventListener('scroll', function () {
      targetNav.style.borderBottomColor = window.scrollY > 20
        ? 'rgba(255,255,255,0.12)'
        : 'rgba(255,255,255,0.07)';
    }, { passive: true });
  }

  /* ── Build footer HTML ──────────────────────────────────────────── */
  var footerHTML = '<div class="footer-top">'
    + '<div class="footer-brand">'
    + '<div class="footer-logo">' + LOGO_SVG + '</div>'
    + '<p class="footer-tagline">A community collective for on-demand help \u2014 built by neighbors, for neighbors.</p>'
    + '<div class="footer-brand-socials">'
    + '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>'
    + '<a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>'
    + '<a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg></a>'
    + '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>'
    + '</div>'
    + '</div>'
    + '<nav class="footer-nav">'
    + '<div>'
    + '<div class="footer-col-title">Platform</div>'
    + '<ul class="footer-col-links">'
    + '<li><a href="index.html#how">How it works</a></li>'
    + '<li><a href="index.html#tasks">Tasks</a></li>'
    + '<li><a href="index.html#post-task">Post a task</a></li>'
    + '<li><a href="#">Credits system</a></li>'
    + '</ul>'
    + '</div>'
    + '<div>'
    + '<div class="footer-col-title">Community</div>'
    + '<ul class="footer-col-links">'
    + '<li><a href="community.html">Community</a></li>'
    + '<li><a href="community.html#neighborhoods">Neighborhoods</a></li>'
    + '<li><a href="community.html#stories">Member stories</a></li>'
    + '<li><a href="community.html#ambassadors">Ambassadors</a></li>'
    + '</ul>'
    + '</div>'
    + '<div>'
    + '<div class="footer-col-title">Company</div>'
    + '<ul class="footer-col-links">'
    + '<li><a href="about.html">About</a></li>'
    + '<li><a href="blog.html">Blog</a></li>'
    + '<li><a href="#">Press</a></li>'
    + '<li><a href="#">Privacy policy</a></li>'
    + '</ul>'
    + '</div>'
    + '<div>'
    + '<div class="footer-col-title">Contact</div>'
    + '<ul class="footer-col-links">'
    + '<li><a href="mailto:hello@etion.nl">hello@etion.nl</a></li>'
    + '<li><a href="tel:+31201234567">+31 20 123 45 67</a></li>'
    + '<li><a href="#">Help center</a></li>'
    + '<li><a href="#">Amsterdam, NL</a></li>'
    + '</ul>'
    + '</div>'
    + '</nav>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<div class="footer-logo-full" aria-label="Etion">' + LOGO_SVG + '</div>'
    + '<div class="footer-meta">'
    + '<span class="footer-copy">\u00a9 2026 Etion. All rights reserved.</span>'
    + '<div class="footer-right">'
    + '<div class="footer-badge"><div class="footer-dot"></div> 47 active neighborhoods</div>'
    + '<div class="footer-socials">'
    + '<a href="#" class="footer-social-btn" aria-label="Twitter">X</a>'
    + '<a href="#" class="footer-social-btn" aria-label="Instagram">IG</a>'
    + '<a href="#" class="footer-social-btn" aria-label="LinkedIn">in</a>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>';

  /* ── Inject footer ──────────────────────────────────────────────── */
  var footerEl = document.querySelector('footer');
  if (footerEl) {
    footerEl.innerHTML = footerHTML;
  }

})();
