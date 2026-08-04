# Design

## World

Control panel / annunciator board. The portfolio is framed as a physical
instrument panel — the same visual language as the control boxes and gauge
panels Henry actually builds (ETC gauge control box, Ryzing control systems) —
rather than a generic SaaS-template landing page. Light brushed-aluminum
ground, bolted/bezeled panel modules, indicator-lamp status color with real
meaning, a switch bank for navigation instead of a pill nav with a sliding
indicator.

Chosen via the skill's concept-seed process: candidate 5 of 7 grounded
directions derived from engineering/manufacturing shop culture (concept-seed
key `858f73d1`, mode `experience`). The full derived list, in resonance
order: machine nameplate/data-tag, engineering drawing sheet, shop-floor
traveler card, textile pattern lay, **control panel/annunciator (built)**,
Machinery's Handbook reference page, CNC toolpath viewer.

## Color

Restrained strategy: neutrals plus one deliberate accent, not a full
status-color palette spent as UI branding. An earlier draft used the grade
table's status green as the site's primary accent — nav, links, tags, dates,
focus rings — and review correctly called that out as "random green text":
green wasn't reporting a status in any of those places, so it read as
unmotivated decoration, not signal.

- `--ground` `#EEF0F2` / `--panel` `#FFFFFF` / `--panel-raised` `#F5F6F8` —
  three-step brushed-aluminum ground, never stark flat white.
- `--bezel` `#D7DBE0` plus `--bezel-hi`/`--bezel-lo` — the metal-edge bevel
  used on every `.plate` (inset shadow + corner rivet dots).
- `--ink` `#1B1E23` primary text; `--ink-soft` `#5C6570` / `--ink-faint`
  `#6C7580` secondary text, tinted from the ground's cool hue, never flat
  gray. (`--ink-faint` was `#8A929C` in an earlier pass — measured at 3.15:1
  against white, which fails WCAG AA's 4.5:1 for the small text it's used
  in; darkened to clear 4.5:1.)
- `--accent` `#2458C9` / `--accent-bright` `#4C86FF` / `--accent-dim`
  `#E5EDFB` — the one deliberate "on/active" color: nav indicator, active
  switch, links, tags, focus rings, the annunciator badge. Verified at
  6.3:1 against white at the sizes it's used in.
- `--signal-green` / `--signal-amber-bright` / `--signal-red` — scoped to
  exactly one place now: the bike-fit grade table's pass/watch/fail dots.
  Not used anywhere else, so on the rare page where it appears it actually
  means something.

Light is the physical scene here: office/desk daylight, not a dim machine
room — the brief's own call, not a default.

## Type

- **Bricolage Grotesque** (weights 600–800) — headings, nav switches, project
  and section titles. Replaces an earlier pass's Oswald: review called
  Oswald's condensed, tightly-tracked, all-caps treatment "robotic," so the
  face changed and the treatment did too — big display text (hero name,
  section headers, project/experience titles) dropped `text-transform:
  uppercase` entirely; only small mono labels (nav pills, tags, the
  annunciator badge) keep it, where all-caps reads as a label convention
  rather than a display voice.
- **Archivo** (400–700) — body copy and UI text.
- **JetBrains Mono** (400–600) — data labels, code blocks, small caps
  micro-copy (readout labels, tags, footer). Every value in the At a Glance
  panel, including the graduation date, stays in the normal readout type —
  no seven-segment/digital face; an earlier draft tried one and it was
  correctly called out as an unnecessary flourish.

All three self-hosted as static `.woff2` files under `fonts/`, referenced by
local `@font-face` — no external Google Fonts request, no build step.
Licensed OFL via Google Fonts.

## Components

- **`.plate`** — the base module unit (hero, every section, why-ISAT
  blocks). Bezeled border, two corner rivet dots (`::before`/`::after`),
  soft real shadow (offset + blur).
- **`.switchboard` / `.switch`** — nav is centered (`grid-template-columns:
  1fr auto 1fr`) with an animated `.nav-indicator` bar that slides and
  resizes under the active switch, driven by scroll-spy / click-to-scroll
  in `script.js`'s `moveIndicator()`. The indicator animates via
  `transform: translateX() scaleX()` against a fixed 1px base width, not
  by transitioning `width` directly — the detector flags animated layout
  properties (width/height/padding/margin) as layout-thrash, and this
  keeps the same visual result on the compositor only.
- **`.hero-photo-wrap`** — a plain bordered circular photo. An earlier draft
  added a porthole ring with tick marks around it; review called it out as
  overlapping/distracting, so it's gone — just the photo.
- **`.module-card`** — project cards as instrument modules, with a hover
  thumbnail zoom and lift as the "click me" affordance. An earlier draft
  added a floating "Documented"/"In Progress" status badge over the
  thumbnail; review called it out as looking unprofessional, so it's
  removed. The still-unfinished "Analog Line-Tracking Robot" project says
  so in its own description text instead.
- **`.cert-card`** (in `.cert-list`) — certifications as a plain logo + name
  list. An earlier draft put a lit lamp dot beside each one; review called
  it out as unexplained decoration (no real on/off state to report), so
  it's gone.
- **`.skill-chip`** (in `.switch-panel`) — skills as plain labeled chips. An
  earlier draft rendered each as a toggle switch; review correctly pointed
  out a skill has no on/off state to represent, so the toggle is gone.
- **Grade table** — `GRADE_LAMPS` map in `script.js` turns the token
  `good`/`watch`/`fail` into a lamp-dot + label span (`.grade-cell`),
  replacing the previous emoji (🟢🟡🔴). This one lamp use stays: it reports
  a real pass/watch/fail result, not decoration.
- **Icons** — Lucide (mail, phone, download, chevron, x, external-link,
  arrow-right) and the GitHub mark from Simple Icons, inlined as SVG with
  `currentColor` stroke/fill. No emoji or Unicode glyphs standing in for UI
  icons anywhere.
- **Project modal motion** — one authored moment: the modal pops in with a
  slight overshoot ease, and stepping through a project's build record
  crossfades the content (`.step-viewer.is-transitioning`, driven by
  `goToStep()` in `script.js`) instead of swapping instantly. Skipped
  entirely under `prefers-reduced-motion`.
- **`.reveal`** — the hero and every major section ease up and fade in once,
  the first time they enter the viewport (`IntersectionObserver` in
  `script.js`, unobserved after it fires once — this never re-triggers on
  scroll-back). Scoped under `html.js .reveal` (the inline script at the top
  of `<head>` adds the `js` class) so content stays visible by default if
  JavaScript fails, rather than hiding real content behind a script that
  didn't run. Skipped (content shown immediately) under
  `prefers-reduced-motion` or when `IntersectionObserver` isn't available.

## Content-authoring pattern (preserved)

Projects and certifications still render from the `ENGINEERING_PROJECTS` /
`DATA_PROJECTS` / `CERTIFICATIONS` arrays in `script.js` — adding an entry is
still enough to get a card and modal, no HTML editing required.

## Known intentional exception

The mechanical detector flags the empty `#modalStepImage` `<img>` as a
"broken image" — it's the template placeholder `script.js` fills in at
runtime before display; not a defect.
