// =========================================================
// HENRY MELVIN PORTFOLIO — SCRIPT
// Smooth-scroll anchor nav with a sliding indicator that
// tracks the section currently in view, plus data-driven
// Projects + Certifications sections.
//
// 🔧 TO ADD A NEW PROJECT: add an object to the PROJECTS
// array below. A card and its modal are generated
// automatically — no HTML editing required.
//
// 🔧 TO ADD A NEW CERTIFICATION: add an object to the
// CERTIFICATIONS array below.
// =========================================================

const PROJECTS = [
  {
    title: "Electronic Throttle Control System",
    status: "In Progress",
    description:
      "Built during my internship at Ryzing Technologies — a servo-driven " +
      "throttle control system for a wind engine, developed for " +
      "military-related testing. A servo motor drives precise throttle " +
      "positioning, with work ongoing on motion profiling and real-time " +
      "status feedback. Still in development — more detail and results to " +
      "come as it's completed.",
    tags: ["Servo Control", "Embedded Systems", "Military Testing"],
  },
  // 🔧 UPDATE: add your next project here, e.g.
  // {
  //   title: "Project Name",
  //   status: "Complete",
  //   description: "What it does and how you built it.",
  //   tags: ["Tag One", "Tag Two"],
  // },
];

const CERTIFICATIONS = [
  { name: "Microsoft 365 Fundamentals", issuer: "Microsoft", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6HR36GN5Q0J" },
  { name: "Accelerate Your Job Search with AI", issuer: "Google · 2025", url: "https://www.coursera.org/account/accomplishments/verify/J43QSC4F2TE9" },
  { name: "Work Smarter with Microsoft Excel", issuer: "Microsoft · 2025", url: "https://www.coursera.org/account/accomplishments/verify/496YHGNSSS4T" },
  { name: "Work Smarter with Microsoft PowerPoint", issuer: "Microsoft · 2025", url: "https://www.coursera.org/account/accomplishments/verify/EVYEM2WPS5MF" },
  { name: "Work Smarter with Microsoft Word", issuer: "Microsoft · 2025", url: "https://www.coursera.org/account/accomplishments/verify/BBJ6FHI0D4O1" },
  { name: "Google Project Management", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1TM7194JJ38K" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google · 2026", url: "https://www.coursera.org/account/accomplishments/verify/FJUBJE7NJ1FX" },
  { name: "Onshape: Introduction to Sketching", issuer: "Onshape", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-d677522e-647f-4c1e-ba1c-b41c1d6c0a59-certificate.pdf" },
  { name: "Onshape: Introduction to Part Studios", issuer: "Onshape", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-ac12808f-e899-4eaf-8483-b6a6b0a27ba4-certificate.pdf" },
  { name: "Onshape: Introduction to Assemblies", issuer: "Onshape · 2026", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-9518e26c-d321-4dc8-8db9-151d38dc6939-certificate.pdf" },
  { name: "Onshape: Introduction to 2D Drawings", issuer: "Onshape · 2026", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-0edfade4-605b-42ae-ae95-cc66399417c2-certificate.pdf" },
  { name: "Onshape: Direct Editing", issuer: "Onshape · 2026", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-343dd4f6-e626-465e-8b62-fa46ca46cb36-certificate.pdf" },
  { name: "Understanding Curves", issuer: "Onshape", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-43042ac5-33f4-4f4f-a3a9-99dc5bb21051-certificate.pdf" },
  { name: "Mandatory Controlled Unclassified Information", issuer: "Dept. of War · 2026", url: null },
];

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Render certifications ---- */
  const certGrid = document.getElementById('certGrid');
  CERTIFICATIONS.forEach(cert => {
    const el = document.createElement(cert.url ? 'a' : 'div');
    el.className = 'cert-card';
    if (cert.url) {
      el.href = cert.url;
      el.target = '_blank';
      el.rel = 'noopener';
    }
    el.innerHTML = `
      <span class="cert-name">${cert.name}</span>
      <span class="cert-issuer">${cert.issuer}</span>
    `;
    certGrid.appendChild(el);
  });

  /* ---- Render project cards + wire up modal ---- */
  const projectGrid = document.getElementById('projectGrid');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalStatus = document.getElementById('modalStatus');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');
  const modalClose = document.getElementById('modalClose');

  function openModal(project) {
    modalTitle.textContent = project.title;
    modalStatus.textContent = project.status;
    modalDesc.textContent = project.description;
    modalTags.innerHTML = project.tags.map(t => `<li>${t}</li>`).join('');
    modalOverlay.classList.add('is-open');
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('is-open');
  }

  PROJECTS.forEach(project => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-card-status">${project.status}</span>
      <span class="project-card-title">${project.title}</span>
      <span class="project-card-desc">${project.description}</span>
      <span class="project-card-cta">View details →</span>
    `;
    card.addEventListener('click', () => openModal(project));
    projectGrid.appendChild(card);
  });

  const placeholder = document.createElement('div');
  placeholder.className = 'project-card project-card--placeholder';
  placeholder.innerHTML = `<span>More projects coming soon</span>`;
  projectGrid.appendChild(placeholder);

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ---- Sticky nav: sliding indicator + scroll-spy ---- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.section');
  const indicator = document.querySelector('.tab-indicator');

  function moveIndicator(btn) {
    if (!btn) return;
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
  }

  function setActive(id) {
    tabButtons.forEach(b => {
      b.classList.toggle('is-active', b.dataset.section === id);
    });
    moveIndicator(document.querySelector('.tab-btn.is-active'));
  }

  // Scroll-spy: highlight the nav item for whichever section
  // is most visible in the viewport right now.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  window.addEventListener('load', () => moveIndicator(document.querySelector('.tab-btn.is-active')));
  window.addEventListener('resize', () => moveIndicator(document.querySelector('.tab-btn.is-active')));
  moveIndicator(document.querySelector('.tab-btn.is-active'));

});
