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

Full palette strategy (not restrained neutrals, not one committed accent) —
color is functional/semantic here, not decorative, matching how a real panel
uses lamp color.

- `--ground` `#EEF0F2` / `--panel` `#FFFFFF` / `--panel-raised` `#F5F6F8` —
  three-step brushed-aluminum ground, never stark flat white.
- `--bezel` `#D7DBE0` plus `--bezel-hi`/`--bezel-lo` — the metal-edge bevel
  used on every `.plate` (inset shadow + corner rivet dots).
- `--ink` `#1B1E23` primary text; `--ink-soft` `#5C6570` / `--ink-faint`
  `#8A929C` secondary text, tinted from the ground's cool hue, never flat
  gray.
- `--signal-green` `#1F9D5C` / `--signal-amber` `#A6690A` / `--signal-red`
  `#C4392A` — deep, text-safe tones for labels and borders on the light
  ground. Each has a `-bright` variant (`#34D67F` / `#F0A93E` / `#E15D4C`)
  used only for lamp dots, glows, and badges floating over photos, where a
  vivid "lit" color reads better than a contrast-safe one — and a `-dim`
  variant (a pale tint of the same hue) used as the fill behind the base
  tone's text, e.g. the active nav switch or the annunciator badge.
- Red is deliberately reserved for the bike-fit grade table's "fail" cell;
  real panels don't spend red on decoration.

Light is the physical scene here: office/desk daylight, not a dim machine
room — the brief's own call, not a default.

## Type

- **Oswald** (condensed, weights 500–700) — engraved panel labels, all
  headings, nav switches. Uppercase, tight tracking.
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
- **`.switchboard` / `.switch`** — nav is a bank of individually-lit
  switches (each carries its own lamp dot), not a pill group with a sliding
  indicator. Active state is per-switch, driven by scroll-spy /
  click-to-scroll in `script.js`.
- **`.module-card`** — project cards as instrument modules: a
  `.module-status` lamp badge ("Documented" green / "In Progress" amber)
  reads from `project.status` in `script.js`.
- **`.lamp-card`** — certifications as an annunciator lamp list.
- **`.skill-switch`** — skills as toggle switches left in the "on" position.
- **Grade table** — `GRADE_LAMPS` map in `script.js` turns the token
  `good`/`watch`/`fail` into a lamp-dot + label span (`.grade-cell`),
  replacing the previous emoji (🟢🟡🔴).
- **Icons** — Lucide (mail, phone, download, chevron, x, external-link,
  arrow-right) and the GitHub mark from Simple Icons, inlined as SVG with
  `currentColor` stroke/fill. No emoji or Unicode glyphs standing in for UI
  icons anywhere.

## Content-authoring pattern (preserved)

Projects and certifications still render from the `ENGINEERING_PROJECTS` /
`DATA_PROJECTS` / `CERTIFICATIONS` arrays in `script.js` — adding an entry is
still enough to get a card and modal, no HTML editing required. A project's
optional `status: "pending"` field flips its module badge to amber
"In Progress"; omit it for the default green "Documented".

## Known intentional exception

The mechanical detector flags the empty `#modalStepImage` `<img>` as a
"broken image" — it's the template placeholder `script.js` fills in at
runtime before display; not a defect.
