# Design

## World

Control panel / annunciator board. The portfolio is framed as a physical
instrument panel — the same visual language as the control boxes and gauge
panels Henry actually builds (ETC gauge control box, Ryzing control systems) —
rather than a generic SaaS-template landing page. Dark graphite ground,
bolted/bezeled panel modules, indicator-lamp status color with real meaning,
a switch bank for navigation instead of a pill nav with a sliding indicator.

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

- `--ground` `#14161a` / `--panel` `#1b1e23` / `--panel-raised` `#22262c` —
  three-step graphite ground, never pure black.
- `--bezel` `#33383f` plus `--bezel-hi`/`--bezel-lo` — the metal-edge bevel
  used on every `.plate` (inset shadow + corner rivet dots).
- `--ink` `#EDEBE6` primary text; `--ink-soft` `#8D96A1` / `--ink-faint`
  `#5B636D` secondary text, tinted from the ground's cool graphite hue, never
  flat gray.
- `--signal-green` `#3ED27F` — "on"/documented/available. Primary accent.
- `--signal-amber` `#F0A93E` — "in progress"/watch.
- `--signal-red` `#E15D4C` — fail/critical, used only in the bike-fit grade
  table; deliberately not used elsewhere (real panels reserve red).

Dark is the physical scene, not a default: a lit panel reads in a dim
shop/machine-room, not under office fluorescents.

## Type

- **Oswald** (condensed, weights 500–700) — engraved panel labels, all
  headings, nav switches. Uppercase, tight tracking.
- **Archivo** (400–700) — body copy and UI text.
- **JetBrains Mono** (400–600) — data labels, code blocks, small caps
  micro-copy (readout labels, tags, footer).
- **DSEG7 Classic** — seven-segment digital-readout face, reserved for
  exactly one moment: the "Graduating" value in the At a Glance panel. Not
  scattered elsewhere — one authored moment, not a running motif.

All four self-hosted as static `.woff2` files under `fonts/`, referenced by
local `@font-face` — no external Google Fonts request, no build step.
Licenses: Oswald/Archivo/JetBrains Mono are OFL via Google Fonts;
DSEG7 Classic is OFL (keshikan/DSEG).

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
