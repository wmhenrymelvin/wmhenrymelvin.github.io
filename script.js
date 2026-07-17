// =========================================================
// HENRY MELVIN PORTFOLIO — SCRIPT
// Mobile nav toggle, footer year, and a live angle readout
// synced to the hero schematic's throttle-arm sweep.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Live angle readout synced to the schematic sweep ---- */
  const readout = document.querySelector('.angle-readout');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (readout && !prefersReducedMotion) {
    const duration = 6000; // matches the CSS animation duration
    const start = performance.now();

    function tick(now) {
      const elapsed = (now - start) % duration;
      const t = elapsed / duration;
      // mirrors the throttleSweep keyframes: 0 -> -38 -> 0 degrees
      const angle = t <= 0.5
        ? -38 * (Math.sin((t / 0.5) * (Math.PI / 2)))
        : -38 * (Math.sin(((1 - t) / 0.5) * (Math.PI / 2)));
      readout.textContent = `${Math.abs(Math.round(angle))}°`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Scroll-triggered reveal for the project card ---- */
  const revealTargets = document.querySelectorAll('.project-card, .stamp');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

});
