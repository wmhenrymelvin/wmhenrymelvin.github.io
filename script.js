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

const ENGINEERING_PROJECTS = [
  {
    title: "Electronic Throttle Control System",
    description:
      "A servo-driven throttle control system built to control a wind " +
      "engine for military-related testing.",
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
  {
    title: "AI Bike Fit Analyzer",
    description:
      "An AI tool that grades a road bike fit from a single phone video " +
      "— no professional fitter or pressure sensors required.",
    steps: [
      {
        title: "What It Does",
        video: "images/bike-fit-overlay-v2.mp4",
        description:
          "A \"bike fit\" is the process of adjusting a bike — seat " +
          "height, handlebar position, and more — to match the rider's " +
          "body, so they're comfortable and efficient without straining a " +
          "joint. It's normally checked in person with specialized " +
          "equipment. This project checks it instead from a single phone " +
          "video: the clip above is it running live on my own pedal " +
          "stroke, with a color-coded skeleton locking onto my knee, hip, " +
          "shoulder, and elbow in real time as I ride.",
      },
      {
        title: "The Models Behind It",
        image: "images/yolo11-model-variants.png",
        description:
          "Built on Ultralytics' open-source YOLO11 " +
          "(github.com/ultralytics/ultralytics), using two of its model " +
          "types together: a pose model, which tracks specific joints on " +
          "your body like a skeleton, and a segmentation model, which " +
          "traces the full outline of your body pixel by pixel. Using " +
          "both keeps the tracking locked on even through the motion " +
          "blur of a full pedal stroke. Once the joints are found, the " +
          "tool measures the angles they form and compares them to real " +
          "bike-fit industry ranges — the same targets a professional " +
          "fitter checks by hand — grading each one green, amber, or red.",
      },
      {
        title: "The Key Frame",
        image: "images/bike-fit-bdc-still.jpg",
        description:
          "Every joint angle is graded at one specific moment in the " +
          "pedal stroke called bottom-dead-center — the point where your " +
          "knee is at its most extended, shown here. That's the same " +
          "moment a professional fitter would check by eye. Instead of " +
          "relying on one lucky screenshot, the tool automatically finds " +
          "this exact moment in every single pedal stroke across the " +
          "whole video — 45 of them in this run — and grades off the " +
          "typical value across all of them, so one awkward stroke can't " +
          "throw off the result.",
      },
      {
        title: "How It Works",
        description:
          "In plain terms: the tool watches the video and figures out " +
          "where your joints are in every frame, using the YOLO11 models " +
          "described above. From there, it's just geometry — measuring " +
          "the angle between three points (like hip-knee-ankle) frame by " +
          "frame using Python. The tricky part was picking the right " +
          "moment to measure, since any single frame can be a little " +
          "off. So instead of trusting one frame, it tracks your knee " +
          "angle across the whole ride, automatically finds every pedal " +
          "stroke on its own, and uses the typical angle across all of " +
          "them — so one awkward stroke doesn't throw off the grade.",
      },
      {
        title: "Results",
        description:
          "Ran it on my own fit: knee flexion, torso angle, and shoulder " +
          "angle all graded green — saddle height and reach were already " +
          "close to right. Elbow angle graded red at about 4°, " +
          "essentially locked out against a 15-30° target, flagging a " +
          "reach/cockpit adjustment I wouldn't have caught by feel. Hip " +
          "angle came back amber, just outside the target range.",
        table: {
          headers: ["Angle", "Measured", "Target", "Grade"],
          rows: [
            ["Knee flexion (BDC)", "39°", "30-40°", "🟢"],
            ["Torso from horizontal", "47°", "40-50°", "🟢"],
            ["Elbow flexion", "4°", "15-30°", "🔴"],
            ["Shoulder angle", "86°", "80-95°", "🟢"],
            ["Hip angle (top)", "113°", "85-110°", "🟡"],
          ],
        },
      },
    ],
  },
  {
    title: "SWIFT",
    description:
      "A modular casualty-evacuation system for extreme field conditions " +
      "— an inflatable cold-weather shelter paired with an air-beam sled " +
      "for moving injured personnel over rough terrain.",
    steps: [
      {
        title: "What It Is",
        image: "images/sled-and-army.jpg",
        description:
          "SWIFT stands for Severe Weather Infield Transport. It's built " +
          "around two connected pieces, both made of air beams (inflatable " +
          "structural tubes) so they pack down small but hold their shape " +
          "under real load: the CCP (Casualty Collection Point), an " +
          "inflatable tent rated to withstand temperatures down to -60°F, " +
          "and the CPU (Casualty Protection Unit), a sled built the same " +
          "way to handle extreme cold and rough terrain while moving a " +
          "casualty. More on this project is on the Ryzing Technologies " +
          "website; photos of the finished builds coming soon.",
      },
      {
        title: "Airbeams & Circumferentials",
        description:
          "My role covered a few stages of this build. I helped " +
          "fabricate several of the air beams themselves, and documented " +
          "the process step by step with written instructions and photos " +
          "so it could be repeated consistently. I also helped design the " +
          "circumferentials — the straps that wrap around the CCP and " +
          "CPU — with an eye toward making them easy to manufacture " +
          "repeatably, then rebuilt them in Onshape and produced " +
          "engineering drawings in isometric, wrapped, and flat views. " +
          "From there I sewed the individual pieces together into " +
          "finished straps and fitted them onto the CCP and CPU. Over the " +
          "course of the project we built 5 complete sets and " +
          "standardized the process to make it faster and more " +
          "consistent going forward.",
      },
    ],
  },
  {
    title: "ISAS",
    // 🔧 UPDATE: fill in what ISAS stands for once you have it
    description:
      "Testing and support-structure design for a military ACV, using " +
      "deployable air beams to keep it from tipping over in shallow " +
      "surf.",
    steps: [
      {
        title: "What It Is",
        description:
          "Our team was tasked with designing supports for an ACV " +
          "(Amphibious Combat Vehicle) for the military. The problem: as " +
          "an ACV transitions from ship to sea to beach, it passes " +
          "through a 3-5 ft water depth range where it has a real chance " +
          "of tipping over. Our solution was a set of air beams mounted " +
          "on the sides of the vehicle that deploy automatically — " +
          "triggered by a sensor on the ACV that tracks its position — " +
          "right as it starts to tip, to stop it from going over. To " +
          "test the concept, our team built a 1/8-scale model of the ACV " +
          "out of metal, complete with scaled-down support beams " +
          "matching the full-size design. Photos coming soon.",
      },
      {
        title: "Testing",
        description:
          "My job on this project was testing. My partner and I measured " +
          "the moment of inertia and radius of gyration of the scale " +
          "model and compared them against military standards to confirm " +
          "the model would behave like the real vehicle. From there, we " +
          "built a wave pool so we could put the 1/8-scale ACV — with its " +
          "miniature air beam attached — through more realistic testing " +
          "conditions and see how it performed in actual moving water.",
      },
    ],
  },
  // 🔧 UPDATE: add your next project here, e.g.
  // {
  //   title: "Project Name",
  //   description: "One or two sentence overview shown on the card.",
  //   steps: [
  //     { title: "Step name", image: "images/photo.jpg", description: "What happened in this step." },
  //     { title: "Step name", video: "images/clip.mp4", description: "Use video instead of image if you have a clip for this step." },
  //   ],
  // },
];

// 🔧 Data Analytics projects — same format as ENGINEERING_PROJECTS above.
// Add your first entry here whenever you're ready; the section already
// renders and links up automatically, no HTML editing needed.
const DATA_PROJECTS = [
  // {
  //   title: "Project Name",
  //   description: "One or two sentence overview shown on the card.",
  //   steps: [
  //     { title: "Step name", image: "images/photo.jpg", description: "What happened in this step." },
  //     { title: "Step name", video: "images/clip.mp4", description: "Use video instead of image if you have a clip for this step." },
  //   ],
  // },
];

const CERTIFICATIONS = [
  { name: "Microsoft 365 Fundamentals", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6HR36GN5Q0J", logo: "images/microsoft-logo.png" },
  { name: "Accelerate Your Job Search with AI", url: "https://www.coursera.org/account/accomplishments/verify/J43QSC4F2TE9", logo: "images/google-logo.jpg" },
  { name: "Work Smarter with Microsoft Excel", url: "https://www.coursera.org/account/accomplishments/verify/496YHGNSSS4T", logo: "images/microsoft-logo.png" },
  { name: "Work Smarter with Microsoft PowerPoint", url: "https://www.coursera.org/account/accomplishments/verify/EVYEM2WPS5MF", logo: "images/microsoft-logo.png" },
  { name: "Work Smarter with Microsoft Word", url: "https://www.coursera.org/account/accomplishments/verify/BBJ6FHI0D4O1", logo: "images/microsoft-logo.png" },
  { name: "Google Project Management", url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1TM7194JJ38K", logo: "images/google-logo.jpg" },
  { name: "Foundations: Data, Data, Everywhere", url: "https://www.coursera.org/account/accomplishments/verify/FJUBJE7NJ1FX", logo: "images/google-logo.jpg" },
  { name: "Onshape: Introduction to Sketching", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-d677522e-647f-4c1e-ba1c-b41c1d6c0a59-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to Part Studios", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-ac12808f-e899-4eaf-8483-b6a6b0a27ba4-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to Assemblies", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-9518e26c-d321-4dc8-8db9-151d38dc6939-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to 2D Drawings", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-0edfade4-605b-42ae-ae95-cc66399417c2-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Direct Editing", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-343dd4f6-e626-465e-8b62-fa46ca46cb36-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Understanding Curves", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-43042ac5-33f4-4f4f-a3a9-99dc5bb21051-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Mandatory Controlled Unclassified Information", url: "images/cui-certificate.png", logo: "images/dod-logo.jpg" },
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
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalStepTitle = document.getElementById('modalStepTitle');
  const modalStepImage = document.getElementById('modalStepImage');
  const modalStepVideo = document.getElementById('modalStepVideo');
  const modalStepDesc = document.getElementById('modalStepDesc');
  const modalStepTable = document.getElementById('modalStepTable');
  const modalStepDots = document.getElementById('modalStepDots');
  const modalStepPrev = document.getElementById('modalStepPrev');
  const modalStepNext = document.getElementById('modalStepNext');
  const modalStepViewer = document.getElementById('modalStepViewer');

  let activeSteps = [];
  let activeStepIndex = 0;

  function renderStep() {
    const step = activeSteps[activeStepIndex];
    if (!step) return;

    modalStepTitle.textContent = step.title || '';

    // Always pause and clear the video first so a playing clip doesn't
    // keep making noise/progress after you've stepped away from it.
    modalStepVideo.pause();
    modalStepVideo.removeAttribute('src');
    modalStepVideo.load();
    modalStepVideo.style.display = 'none';
    modalStepImage.style.display = 'none';

    if (step.video) {
      modalStepVideo.src = step.video;
      modalStepVideo.style.display = 'block';
    } else if (step.image) {
      modalStepImage.src = step.image;
      modalStepImage.alt = step.title || '';
      modalStepImage.style.display = 'block';
    }

    modalStepDesc.textContent = step.description;

    // Optional data table — e.g. { headers: [...], rows: [[...], ...] }
    if (step.table && step.table.rows && step.table.rows.length) {
      const theadHtml = step.table.headers
        ? `<thead><tr>${step.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`
        : '';
      const tbodyHtml = `<tbody>${step.table.rows
        .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
        .join('')}</tbody>`;
      modalStepTable.innerHTML = `<table>${theadHtml}${tbodyHtml}</table>`;
      modalStepTable.style.display = 'block';
    } else {
      modalStepTable.innerHTML = '';
      modalStepTable.style.display = 'none';
    }

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
    modalStepVideo.pause();
  }

  function renderProjectGrid(gridEl, projects) {
    projects.forEach(project => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'project-card';
      card.innerHTML = `
        <span class="project-card-title">${project.title}</span>
        <span class="project-card-desc">${project.description}</span>
        <span class="project-card-cta">View details →</span>
      `;
      card.addEventListener('click', () => openModal(project));
      gridEl.appendChild(card);
    });

    const placeholder = document.createElement('div');
    placeholder.className = 'project-card project-card--placeholder';
    placeholder.innerHTML = `<span>More projects coming soon</span>`;
    gridEl.appendChild(placeholder);
  }

  renderProjectGrid(document.getElementById('engineeringProjectGrid'), ENGINEERING_PROJECTS);
  renderProjectGrid(document.getElementById('dataProjectGrid'), DATA_PROJECTS);

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
