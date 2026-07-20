// =========================================================
// HENRY MELVIN PORTFOLIO — SCRIPT
//
// 🔧 TO ADD A NEW PROJECT: add an object to the PROJECTS
// array below. A card and its modal are generated
// automatically — no HTML editing required.
//
// 🔧 TO ADD A NEW CERTIFICATION: add an object to the
// CERTIFICATIONS array below ({ name, url, logo } — url is
// optional, omit or set to null if there isn't one; logo is
// also optional — path to an issuer badge image (e.g.
// "images/coursera-logo.png") shown next to the name,
// LinkedIn-style. Omit logo entirely if you don't have one.
// =========================================================

const PROJECTS = [
  {
    title: "Electronic Throttle Control System",
    status: "In Progress",
    description:
      "Built during my internship at Ryzing Technologies — a servo-driven " +
      "throttle control system for a wind engine, developed for " +
      "military-related testing. Still in development — more detail and " +
      "results to come as it's completed.",
    tags: ["Servo Control", "Embedded Systems", "Military Testing"],
    // 🔧 Step-by-step build story — shown in the project modal as a
    // scrollable, one-step-at-a-time viewer. Add/remove/reorder steps
    // freely; each needs a title, an image (or omit "image" for a
    // text-only step), and a description.
    steps: [
      {
        title: "Gauge Control Box",
        image: "images/etc-project-3.jpg",
        description:
          "We started by building a control box wiring together gauges " +
          "for water temperature, oil pressure, and tachometer readings — " +
          "the foundation for monitoring the wind engine's condition " +
          "during testing.",
      },
      {
        title: "Circuit & Software Design",
        image: "images/etc-project-1.jpg",
        description:
          "Next, we designed a circuit that reads wind speed data from " +
          "an SD card reader and converts it into code the Arduino can " +
          "interpret. The Arduino uses that data to drive the servo " +
          "motor, with the throttle's progress and angle displayed live " +
          "on a screen.",
      },
      {
        title: "Engine Mount",
        image: "images/etc-project-2.jpg",
        description:
          "We then machined a mount to attach the system to the engine, " +
          "using CNC machines, mills, band saws, and lathes. That design " +
          "ran into problems, so we're reworking it into a pulley-based " +
          "system instead — photos of that update coming soon.",
      },
    ],
  },
  // 🔧 UPDATE: add your next project here, e.g.
  // {
  //   title: "Project Name",
  //   status: "Complete",
  //   description: "One or two sentence overview shown on the card.",
  //   tags: ["Tag One", "Tag Two"],
  //   steps: [
  //     { title: "Step name", image: "images/photo.jpg", description: "What happened in this step." },
  //   ],
  // },
];

const CERTIFICATIONS = [
  { name: "Microsoft 365 Fundamentals", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6HR36GN5Q0J" },
  { name: "Accelerate Your Job Search with AI", url: "https://www.coursera.org/account/accomplishments/verify/J43QSC4F2TE9" },
  { name: "Work Smarter with Microsoft Excel", url: "https://www.coursera.org/account/accomplishments/verify/496YHGNSSS4T" },
  { name: "Work Smarter with Microsoft PowerPoint", url: "https://www.coursera.org/account/accomplishments/verify/EVYEM2WPS5MF" },
  { name: "Work Smarter with Microsoft Word", url: "https://www.coursera.org/account/accomplishments/verify/BBJ6FHI0D4O1" },
  { name: "Google Project Management", url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1TM7194JJ38K" },
  { name: "Foundations: Data, Data, Everywhere", url: "https://www.coursera.org/account/accomplishments/verify/FJUBJE7NJ1FX" },
  { name: "Onshape: Introduction to Sketching", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-d677522e-647f-4c1e-ba1c-b41c1d6c0a59-certificate.pdf" },
  { name: "Onshape: Introduction to Part Studios", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-ac12808f-e899-4eaf-8483-b6a6b0a27ba4-certificate.pdf" },
  { name: "Onshape: Introduction to Assemblies", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-9518e26c-d321-4dc8-8db9-151d38dc6939-certificate.pdf" },
  { name: "Onshape: Introduction to 2D Drawings", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-0edfade4-605b-42ae-ae95-cc66399417c2-certificate.pdf" },
  { name: "Onshape: Direct Editing", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-343dd4f6-e626-465e-8b62-fa46ca46cb36-certificate.pdf" },
  { name: "Understanding Curves", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-43042ac5-33f4-4f4f-a3a9-99dc5bb21051-certificate.pdf" },
  { name: "Mandatory Controlled Unclassified Information", url: "images/cui-certificate.png" },
];

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Render certifications (name only, no issuer badge) ---- */
  const certGrid = document.getElementById('certGrid');
  CERTIFICATIONS.forEach(cert => {
    const el = document.createElement(cert.url ? 'a' : 'div');
    el.className = 'cert-card';
    if (cert.url) {
      el.href = cert.url;
      el.target = '_blank';
      el.rel = 'noopener';
    }
    if (cert.logo) {
      const logoImg = document.createElement('img');
      logoImg.src = cert.logo;
      logoImg.alt = '';
      logoImg.className = 'cert-card-logo';
      el.appendChild(logoImg);
    }
    const nameSpan = document.createElement('span');
    nameSpan.textContent = cert.name;
    el.appendChild(nameSpan);
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
  const modalStepImage = document.getElementById('modalStepImage');
  const modalStepCount = document.getElementById('modalStepCount');
  const modalStepTitle = document.getElementById('modalStepTitle');
  const modalStepDesc = document.getElementById('modalStepDesc');
  const modalStepDots = document.getElementById('modalStepDots');
  const modalStepPrev = document.getElementById('modalStepPrev');
  const modalStepNext = document.getElementById('modalStepNext');
  const modalStepViewer = document.getElementById('modalStepViewer');

  let activeSteps = [];
  let activeStepIndex = 0;

  function renderStep() {
    const step = activeSteps[activeStepIndex];
    if (!step) return;

    if (step.image) {
      modalStepImage.src = step.image;
      modalStepImage.alt = step.title;
      modalStepImage.style.display = 'block';
    } else {
      modalStepImage.style.display = 'none';
    }

    modalStepCount.textContent = `Step ${activeStepIndex + 1} of ${activeSteps.length}`;
    modalStepTitle.textContent = step.title;
    modalStepDesc.textContent = step.description;

    modalStepDots.innerHTML = activeSteps
      .map((_, i) => `<button type="button" class="step-dot${i === activeStepIndex ? ' is-active' : ''}" data-index="${i}" aria-label="Go to step ${i + 1}"></button>`)
      .join('');

    modalStepPrev.disabled = activeStepIndex === 0;
    modalStepNext.disabled = activeStepIndex === activeSteps.length - 1;
  }

  function goToStep(index) {
    if (index < 0 || index >= activeSteps.length) return;
    activeStepIndex = index;
    renderStep();
  }

  modalStepDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.step-dot');
    if (dot) goToStep(Number(dot.dataset.index));
  });
  modalStepPrev.addEventListener('click', () => goToStep(activeStepIndex - 1));
  modalStepNext.addEventListener('click', () => goToStep(activeStepIndex + 1));

  function openModal(project) {
    modalTitle.textContent = project.title;
    modalStatus.textContent = project.status;
    modalDesc.textContent = project.description;
    modalTags.innerHTML = project.tags.map(t => `<li>${t}</li>`).join('');

    if (project.steps && project.steps.length) {
      activeSteps = project.steps;
      activeStepIndex = 0;
      renderStep();
      modalStepViewer.style.display = 'block';
    } else {
      activeSteps = [];
      modalStepViewer.style.display = 'none';
    }

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
    if (!modalOverlay.classList.contains('is-open')) return;
    if (e.key === 'ArrowRight') goToStep(activeStepIndex + 1);
    if (e.key === 'ArrowLeft') goToStep(activeStepIndex - 1);
  });

  /* ---- Nav: sliding indicator, explicit smooth scroll, scroll-spy ---- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.section');
  const indicator = document.querySelector('.tab-indicator');
  const navHeight = document.querySelector('.tabs').offsetHeight;

  let isClickScrolling = false;
  let clickScrollTimeout = null;

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

  // Explicit smooth scroll on click, with the active tab updated
  // immediately (rather than waiting on scroll-spy), so the label
  // never sits in a half-updated state while the page is moving.
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.dataset.section;
      const target = document.getElementById(targetId);
      if (!target) return;

      setActive(targetId);

      isClickScrolling = true;
      clearTimeout(clickScrollTimeout);

      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Release the scroll-spy lock once the scroll animation
      // has had time to finish.
      clickScrollTimeout = setTimeout(() => { isClickScrolling = false; }, 900);
    });
  });

  // Scroll-spy: highlight whichever section is most visible,
  // but only when the user is scrolling manually (not mid-click-scroll).
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (isClickScrolling) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  window.addEventListener('load', () => moveIndicator(document.querySelector('.tab-btn.is-active')));
  window.addEventListener('resize', () => moveIndicator(document.querySelector('.tab-btn.is-active')));
  moveIndicator(document.querySelector('.tab-btn.is-active'));

});
