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
- `--accent` `#0E7A87` / `--accent-bright` `#22B8C4` / `--accent-dim`
  `#E1F3F4` — the one deliberate "on/active" color: nav indicator, active
  switch, links, tags, focus rings. Was a blue in an earlier pass; changed
  to teal on request, and teal has the added benefit of never being
  confusable with the grade table's green/amber/red. Verified at 5.1:1
  against white at the sizes it's used in.
- `--signal-green` / `--signal-amber-bright` / `--signal-red` — scoped to
  exactly one place now: the bike-fit grade table's pass/watch/fail dots.
  Not used anywhere else, so on the rare page where it appears it actually
  means something.

Light is the physical scene here: office/desk daylight, not a dim machine
room — the brief's own call, not a default.

## Type

- **Oswald** (weights 500–700) — headings, project/experience/section
  titles. A middle pass swapped this for Bricolage Grotesque when Oswald's
  all-caps tracking read as "robotic"; the follow-up review kept Oswald
  itself (reverted on request) but dropped the all-caps treatment that
  actually caused the complaint — big display text (hero name, section
  headers, project/experience titles) has no `text-transform: uppercase`
  now, title case throughout.
- **Archivo** (400–700) — body copy and UI text.
- **Martian Mono** (weight 600) — small UI-chrome labels specifically: nav
  switches, readout labels, project tags, the grade table's header row,
  experience dates. Everything that carries `--accent` color, basically.
  Picked for character at small sizes without reaching for JetBrains Mono
  or IBM Plex Mono, both flagged as overused defaults.
- **JetBrains Mono** (400–600) — reserved for the one place letterform
  quirks actually hurt: the Python code blocks in the data-analytics
  modals. Kept plain and highly legible there on purpose, distinct from
  Martian Mono's role.
- Every value in the At a Glance panel, including the graduation date,
  stays in normal type — no seven-segment/digital face; an earlier draft
  tried one and it was correctly called out as an unnecessary flourish.
  The panel's own title ("At a Glance") moved from a small caps label to
  a real bold heading (`--font-display`, 1.15rem/700) matching how every
  other panel title on the page reads.

All four self-hosted as static `.woff2` files under `fonts/`, referenced by
local `@font-face` — no external Google Fonts request, no build step.
Licensed OFL via Google Fonts.

## Components

- **`.plate`** — the base module unit (hero, every section, why-ISAT
  blocks). Bezeled border, two corner rivet dots (`::before`/`::after`),
  soft real shadow (offset + blur).
- **Hero** — reduced to photo, name, and the link buttons. Earlier passes
  had a tagline line ("Integrated Science & Technology — James Madison
  University") and a lit "Seeking Summer 2027..." annunciator badge under
  the name; both removed on request, so `.hero-links` now carries its own
  `margin-top` instead of relying on the removed elements' bottom margins
  for spacing.
- **`.switchboard` / `.switch`** — nav is centered (`grid-template-columns:
  1fr auto 1fr`) with an animated `.nav-indicator` bar that slides and
  resizes under the active switch, driven by scroll-spy / click-to-scroll
  in `script.js`'s `moveIndicator()`. Each switch had its own small lamp
  dot (`.switch-lamp`) in an earlier pass; removed on request, so the
  active state now reads from the indicator bar plus the switch's own
  border/background color alone. The indicator animates via
  `transform: translate() scaleX()` against a fixed 1px base width, not
  by transitioning `width` directly — the detector flags animated layout
  properties (width/height/padding/margin) as layout-thrash, and this
  keeps the same visual result on the compositor only. The transform
  drives both axes, not just X: when the bank wraps to a second row at
  narrower desktop widths, the active switch isn't necessarily in the
  row the indicator's static CSS position would assume, so `top`/`left`
  stay `0` in CSS and `moveIndicator()` computes the real `offsetTop` +
  `offsetLeft` for whichever switch is actually active, every time.
- **`.switch-bank` overflow** — deliberately carries no `overflow-x`.
  Setting only one overflow axis computes the other to `auto` too (CSS
  Overflow spec), and since `flex-wrap` already handles "doesn't fit on
  one line" by wrapping to a second row, an `overflow-x: auto` a
  previous pass added turned into a real, unwanted *vertical* scrollbar
  inside the switch bank the moment it wrapped — misreported as
  "up/down arrows next to the top icons," and it also ate into the
  bank's width, visibly shoving the wrapped switch further over. Fully
  reproduced and fixed; nothing here was ever a browser or OS artifact.
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
- **`.switch-btn--armed`** (removed) — the Resume link used to render as a
  filled, highlighted button distinct from Email/Phone/LinkedIn/GitHub;
  review asked for it to match the others, so it's a plain `.switch-btn`
  now with no special-case styling.
- **Scroll-spy stability at the bottom of the page** — the last section is
  usually shorter than the scroll-spy's `rootMargin` band, so it could
  never cleanly satisfy it; right at the true bottom the observer had
  nothing stable to settle on and would flicker the active tab (and the
  indicator bar with it) between the last two sections on tiny scroll
  jitter, felt as a shake. Fixed two ways in `script.js`: `setActive()`
  now no-ops when the id hasn't changed (skipping a redundant forced
  layout read in `moveIndicator()`), and a passive scroll listener
  force-activates the last section once `scrollY + innerHeight` reaches
  the page's true `scrollHeight`, bypassing the observer's margin math
  entirely at that point.

## Content-authoring pattern (preserved)

Projects and certifications still render from the `ENGINEERING_PROJECTS` /
`DATA_PROJECTS` / `CERTIFICATIONS` arrays in `script.js` — adding an entry is
still enough to get a card and modal, no HTML editing required.

## Known intentional exception

The mechanical detector flags the empty `#modalStepImage` `<img>` as a
"broken image" — it's the template placeholder `script.js` fills in at
runtime before display; not a defect.
