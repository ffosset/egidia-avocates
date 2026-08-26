## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter for use outside this project.
- `thumbnail.html` — homepage tile.

### `tokens/`
`fonts.css` (Google Fonts import — **substitution, see caveats**) · `colors.css` · `typography.css` · `spacing.css` (**the margin law lives here**) · `borders.css` · `elevation.css` · `motion.css` · `base.css` (element resets, `.eg-label`, `.eg-lead`, `.eg-invert`).

### `guidelines/` — 16 specimen cards
Colors: primaire, secondaire, texte & boutons, voiles dérivés, états, paires de contraste. Type: display, body, labels & liens. Spacing: échelle, grille éditoriale, rythme vertical, **la loi des marges**. Brand: cadres & filets, survol par inversion, logo, mouvement, marges visibles & arc du bouclier.

### Components (19)
**`components/core/`** — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag`
**`components/layout/`** — `PageRules`, `RuledGrid` + `RuledCell`, `PersonCell`, `ArcImage`, `Band`
**`components/navigation/`** — `SiteHeader`, `Tabs`, `Breadcrumb`, `Accordion`
**`components/feedback/`** — `Callout`, `Dialog`, `Tooltip`

Each has `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when, usage example, notes). One `@dsCard` HTML per directory shows the states.

**Deliberately absent — do not add them back.** There are **no form components** (no `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Field`) and no `Toast`: the cabinet collects nothing through the site, so a form has nothing to submit and no submission to confirm. If a brief seems to need a form, the answer is a `mailto:` link. An earlier draft of this system shipped those components; they were removed on the cabinet's instruction.

**Intentional additions** beyond a standard primitive set, each with a reason:
- `Accordion` — question-and-answer is the main cognitive-load device on procedure pages.
- `Callout` — deadlines and document warnings must be flagged inline in prose without shouting.
- `Icon` — a wrapper is required because the glyph set is a flagged substitution and must stay swappable in one place.
- `SiteHeader` — the wordmark-plus-ruled-cells bar is brand-specific enough to be a component, not a kit detail.
- `PageRules`, `RuledGrid`, `PersonCell`, `ArcImage`, `Band` — the devices of the visual direction the cabinet supplied (`uploads/Screenshot 2026-08-26 at 10.56.14.png`, `… 10.56.21.png`, `… 11.28.53.png`). They are layout primitives rather than UI widgets, but leaving them uncomponentised would mean every page re-inventing the frame, the grid and the arc by hand — which is exactly how a design system loses its identity.

### `assets/`
`logo.svg` — the real mark. `photos/` — `equipe.jpg`, `equipe-2.jpg`, `ambiance-terrasse.jpg`, and the seven portraits named `prénom-nom.jpg`.

### `brand/`
`contenu-site-web.txt` — the cabinet's final site copy, transcribed from the PDF. `fiches-avocates.txt` — the seven avocates' profiles, transcribed from the spreadsheet. **These two are the content source of truth**; the UI kit reads from a structured copy of them in `ui_kits/site_vitrine/Data.jsx`.

### `ui_kits/site_vitrine/`
The public site, built to the cabinet's own site map and copy: `Accueil` (one scrolling page, 7 sections), `Matiere` (×5 from data), `FicheAvocate` (×7 from data), `ProDeo` (aide-juridique document list). See its `README.md` for the field-by-field status and what is still missing.

ght profiles) would be cleaner — please send one if it exists.
