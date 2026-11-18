# Design

The previous design (the "control panel / annunciator board" world) is preserved
at the git tag `original-design`.

## World

"Machined Hardware." Cool steel-grey ground with a faint grain, near-white
panels seated in hairline trays like parts held in an aluminium fixture, and a
single layout-dye blue signal colour (the blue machinists brush on metal before
scribing it). Chosen by Henry from a five-way concept comparison (concept 4,
built with the high-end-visual-design skill); the palette was switched from
safety orange to layout-dye blue on 2026-11-17.

## Color

One accent, used sparingly. Everything else is cool neutral.

- `--bg` `#E3E7EB` page ground; `--bg-2` `#D9DEE3` image wells.
- `--core` `#F5F7F9` panel surface; `--shell` / `--hair` are low-alpha ink used
  for the outer tray and its 1px inset border, so they hold on any surface.
- `--ink` `#11161C` text; `--ink-2` `#3E4752` body copy; `--ink-3` `#56606C`
  labels and captions (all at or above 4.5:1 on `--core` and `--bg`).
- `--signal` `#1F55B8` layout-dye blue: the dot after the name, the live dot,
  the nav indicator, the certification count, the footer CTA, focus rings.
  `--signal-ink` `#1A4A9E` is the darker version for small blue text.
- Status colours appear only in the bike-fit grade table:
  `--good` `#2F8A55`, `--watch` `#C98418`, `--fail` `#C8442C`.
- Dark panels (`.job.dark`, footer `.end`) invert to `--ink` with
  `--core` text.

## Type

Self-hosted variable fonts in `fonts/` (OFL, see `fonts/LICENSES.md`).

- **Archivo Expanded** (display, `font-stretch: 125%`): name, section
  headings, card titles, and the giant faded "HM" behind the hero. Chosen to
  echo Nike's wide athletic display type. The Why ISAT paragraph uses Archivo
  at normal width so the long text stays readable.
- **Schibsted Grotesk** (body): paragraphs, chips, labels, nav.
- **JetBrains Mono**: only code blocks inside project steps.
- Counts and step numbers use `tabular-nums`.

## Components

- **Bezel** (`.shell` > `.core`): outer tray radius `--r` (2rem), inner panel
  radius `--r - --pad`, so the corners stay concentric. Used for every card.
- **Nav**: floating pill, blurred background, section links with a short
  orange indicator bar that slides under the active section (scroll-spy in
  script.js). Below 900px it becomes a burger that opens a full-screen sheet.
- **Hero**: oversized two-line name with an orange full stop, one-sentence
  lede (the site's existing meta description), Resume button plus contact
  chips, tilted portrait with a small "Graduating May 2028" tag, and a giant white
  "HM" at 60% opacity behind it all (`.hero-mark`).
- **Project bento** (`.bento`): engineering projects use a 7/5 layout with the
  first project as the feature card; data projects use three equal columns.
  Cards are `<button class="p shell">`, built by `renderProjectGrid()` in
  script.js. Card image is the project's `thumbnail`, else the first image in
  its steps (shown contained on white, for charts), else a dark "No photo
  yet" track drawing.
- **Project modal**: rounded panel with the project title, a black media well,
  "Step N of M", step title and text, optional table/code, and pill-shaped
  step dots. Steps crossfade with a short blur.
- **Experience**: two cards, the current role dark, the degree light.
- **Footer**: dark "Let's build something." panel with contact links.

## Motion

Ease-out entrances (`--ease-out`), hero lines rise in once on load, sections
fade up as they scroll in. Buttons scale to 0.97 on press. Everything is
disabled under `prefers-reduced-motion`.

## Content-authoring pattern (preserved)

Projects and certifications still render from the `ENGINEERING_PROJECTS`,
`DATA_PROJECTS` and `CERTIFICATIONS` arrays in script.js. Adding a project or
certificate is still just adding an array entry; section counts update
automatically.
