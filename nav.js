/**
 * gnoke-skins  —  nav.js
 * Shared navigation behaviour for all pages.
 * - Hamburger / drawer toggle
 * - Active link highlighting based on current path
 */
(function () {
  /* ── Hamburger toggle ──────────────────────────────────── */
  const btn    = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');
  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', drawer.classList.contains('open'));
    });
    /* Close drawer when any link inside is tapped */
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }

  /* ── Active link ───────────────────────────────────────── */
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    /* Root: exact match only */
    if (href === '' || href === '/') {
      if (path === '' || path === '/') a.classList.add('active');
    } else if (path.startsWith(href)) {
      a.classList.add('active');
    }
  });
})();
