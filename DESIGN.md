# Design

The previous design (the "control panel / annunciator board" world) is preserved
at the git tag `original-design`.

## World

"Machined Hardware." Warm silver-grey ground with a faint grain, off-white
panels seated in hairline trays like parts held in an aluminium fixture, and a
single safety-orange signal colour. Chosen by Henry from a five-way concept
comparison (concept 4, built with the high-end-visual-design skill).

## Color

One accent, used sparingly. Everything else is warm neutral.

- `--bg` `#E7E6E1` page ground; `--bg-2` `#DEDDD7` image wells.
- `--core` `#F6F5F1` panel surface; `--shell` / `--hair` are low-alpha ink used
  for the outer tray and its 1px inset border, so they hold on any surface.
- `--ink` `#141412` text; `--ink-2` `#4E4D48` body copy; `--ink-3` `#605F59`
  labels and captions (all at or above 4.5:1 on `--core` and `--bg`).
- `--signal` `#E4572E` safety orange: the dot after the name, the live dot,
  the nav indicator, the certification count, the footer CTA, focus rings.
  `--signal-ink` `#A93A17` is the darker version for small orange text.
- Status colours appear only in the bike-fit grade table:
  `--good` `#2F8A55`, `--watch` `#C98418`, `--fail` `#C8442C`.
- Dark panels (`.job.dark`, footer `.end`) invert to `--ink` with
  `--core` text.

## Type

Self-hosted variable fonts in `fonts/` (OFL, see `fonts/LICENSES.md`).

- **Bricolage Grotesque** (display): name, section headings, card titles,
  the summary statement and the Why ISAT copy. Tight negative tracking
  (-0.03em to -0.055em) at large sizes.
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
  chips, tilted portrait with a small "Graduating May 2028" tag.
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
