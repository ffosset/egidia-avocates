# Egidia — Design System

Egidia is a **cabinet d'avocates** in **Brussels** — seven women lawyers at the Ordre français des avocats du barreau de Bruxelles. Its own words: *« Cabinet bruxellois en droit des étrangers, de la famille, de l'aide sociale et de la jeunesse. Une relation fondée sur l'écoute et la transparence. »*

Five matières préférentielles, with the number of avocates practising each:

| Matière | Avocates |
| --- | --- |
| Droit des étrangers | 7 |
| Droit de la jeunesse | 4 |
| Droit à l'aide sociale | 3 |
| Droit des MENA (mineurs étrangers non accompagnés) | 2 |
| Droit de la famille | 2 |

Note for anyone arriving from the brief: **MENA here means *mineurs étrangers non accompagnés*** — unaccompanied foreign minors — not the Middle East / North Africa region. The cabinet's clients are people navigating a Belgian administration that rarely explains itself, often under a deadline they did not know existed. Every avocate works within the **aide juridique** (pro deo) system, and consultations happen **on appointment only, by phone or e-mail** — there is no online booking, by deliberate choice.

The four words the cabinet gave for its identity: **CLARTÉ · ENGAGÉ · RASSURANT · EXPERT**.

Accessibility and legibility are not preferences here, they are requirements: **large type, obvious navigation, plain language, minimal cognitive load.** The grid is editorial — visible margins, clear frames, generous whitespace.

## Sources given

| Source | Path | What it contained |
| --- | --- | --- |
| Colour palette specimen | `uploads/Screenshot 2026-08-26 at 09.55.52.png` | The nine brand colours with names and hex values, in three groups (Primaire / Secondaire / Texte & boutons) |
| Typography specimen | `uploads/Screenshot 2026-08-26 at 09.57.50.png` | Playfair Display for display (H1 56 / H2 40 / H3 32), Source Sans 3 for body (20px / 160), uppercase labels |
| Logo | `uploads/logo.svg` → copied to `assets/logo.svg` | The real shield mark: two profiles, EGIDIA lettering, 155×181 |
| Site map | `uploads/arborescence.png` | *Plan du site*: Accueil as one scrolling page of 7 sections; pages matière ×5; fiches avocates ×7; a pro-deo documents page — plus the field list for each page type |
| Visual direction | `uploads/Screenshot 2026-08-26 at 10.56.14.png`, `… at 10.56.21.png` | Two composed home-page views: visible margin rules, wordmark + ruled nav cells, arc-masked hero photograph, full-bleed sauge values band with shield watermark, and the ledger grid of services |
| Photography | `uploads/_DSC2799.JPG`, `_DSC2795.JPG`, `_DSC2716.JPG`, `floriane.jpeg`, `margaux.jpeg`, `farah.jpeg`, `cecile.jpeg`, `deborah.jpeg`, `camille.jpeg`, `marine.jpeg` → resized into `assets/photos/` | Team shot, atmosphere shot on the terrace, and the seven portraits (filenames identify each avocate) |
| Final site copy | `uploads/CONTENU SITE WEB ✅.pdf` → transcribed to `brand/contenu-site-web.txt` | Every word of the site, section by section, written by the cabinet |
| Avocates' profiles | `uploads/Fiches avocates - contenu ✅.xlsx` → transcribed to `brand/fiches-avocates.txt` | Per-avocate matières, parcours, langues, e-mail, direct line, VAT number, publications, previous chambers, LinkedIn |

No codebase, Figma file, live site, font binary or photography was provided. Type and colour come from the two specimens; structure and copy come from the site map and the PDF; the mark comes from the SVG. Where something had to be invented (the component inventory, screen layout, the per-avocate fields) it is flagged in this document.

---

## Content fundamentals

**Language.** French, and French only — the cabinet decided against a multilingual site.

**Voice — "nous" for the cabinet, "vous" for the client.** The firm speaks as a team, never as an individual, and never in the third person ("Le cabinet Egidia vous propose…" is wrong; "Nous vous accompagnons…" is right). The client is always *vous*, never "l'usager", "le demandeur", "le justiciable".

**Register: plain, short, exact.** Say what happens and when. Sentences under 20 words. One idea per sentence. Legal terms appear only when the client will meet them on a real document (OQTF, OFPRA, CNDA, CESEDA) — and then they are expanded on first use, in a tooltip or in the sentence itself.

The cabinet's own sentences, which are the model for anything new:
- « Chaque personne a droit à être écoutée, conseillée et défendue. »
- « Derrière chaque dossier, il y a une personne et une histoire. Nous prenons le temps de comprendre la vôtre avant de vous conseiller. »
- « Ce n'est pas une faveur : c'est un droit. » *(on aide juridique — a short declarative sentence carrying the whole position)*
- « Un refus du CPAS est une décision administrative, pas un verdict : elle se conteste devant le tribunal du travail. Beaucoup y renoncent faute de le savoir. »
- « Arriver seul et mineur dans un pays inconnu, c'est affronter deux procédures à la fois. »
- « Notre rôle est de préserver votre sécurité et celle de vos enfants. »

Three patterns worth naming, because they recur and they are what makes the voice: **the corrective definition** (*« X n'est pas Y : c'est Z »*), **the named obstacle** (*« Beaucoup y renoncent faute de le savoir »* — the cabinet says out loud why people give up), and **the plain consequence** (*« un délai manqué se rattrape difficilement »*).

Avoid:
- « Notre cabinet met son expertise reconnue au service de vos problématiques juridiques complexes. » (jargon, self-promotion, no information)
- « Cliquez ici », « En savoir plus » standing alone, « N'hésitez pas à nous contacter »
- Exclamation marks. Superlatives. « leader », « sur-mesure », « 360° ».

**Reassurance is factual, not emotional.** Instead of "vous n'êtes pas seul", give the fact that produces calm: les honoraires sont fixés avec modération et expliqués, toutes les avocates travaillent dans le cadre de l'aide juridique, le cabinet est accessible aux personnes à mobilité réduite, le travail se fait en lien avec le réseau associatif bruxellois.

**Belgian vocabulary, exactly.** *aide juridique* (never "aide juridictionnelle", which is French), *pro deo*, *CPAS*, *revenu d'intégration*, *SAJ / SPJ*, *tribunal du travail*, *ordre de quitter le territoire*, *Avertissement-Extrait de Rôle (AER)*, *composition de ménage*, *Conseil du contentieux des étrangers*. Institutions are named in full on first use, then abbreviated.

**Headings.** Display headings are statements, in sentence case with normal punctuation: *« Chaque personne a droit à être écoutée, conseillée et défendue »*, *« Une justice claire et humaine »*, *« Des prix transparents »*. Never all-caps, never a question mark in a hero.

**Labels & eyebrows** are the one uppercase element, and the site's own set is short: `VALEURS`, `MATIÈRES PRÉFÉRENTIELLES`, `HONORAIRES`, `AIDE JURIDIQUE`, `ÉQUIPE`, `CONTACT ET ACCÈS`, `LIENS UTILES`, `CE QUE NOUS TRAITONS`, `AVOCATES SPÉCIALISÉES`.

**Buttons** are infinitive verbs describing the action: *Voir nos domaines*, *Liste des documents à produire*, *Écrire au cabinet*, *Voir la fiche*. Never *Prendre rendez-vous en ligne* — there is no online booking; the call to action is always to write or to phone.

**Errors and confirmations.** There are none to write — the site has no forms (see *Visual foundations*). The one place the system raises its voice is a factual warning the cabinet itself wrote: *« Attention : ce n'est PAS la proposition de déclaration simplifiée. »*

**Numbers.** Belgian French conventions: `Rue de Livourne 13 à 1060 Bruxelles`, `3 derniers mois`, `datée de moins d'un mois`. Deadlines are stated in the unit the procedure uses, and their shortness is stated as a fact, not a warning: « les délais de recours sont très courts ».

**Emoji: never.** Not in UI, not in documents, not in email. Icons carry that load.

---

## Visual foundations

**Palette.** Nine named brand colours, in three registers. Paper (crème `#FAF7F4`, sable `#D9D2C4`, gris `#DCDAD6`) carries the page. Sauge (`#46654A`, `#9AAD8B`) is the single accent — links, rules, calm blocks. Brun (`#3B2E1E` texte, `#6B5237` secondaire) and caramel (`#B08D5A`) do type and action. Nothing is bright; nothing is cool. Warm neutrals, one green, one gold.

A page uses **at most two background tones**: crème for the body, sable for hero and section bands, plus occasional sauge-voile or brun-profond for a single closing block. Derived voiles (`--sable-clair`, `--sauge-voile`, `--caramel-voile`) exist for insets and callouts only.

**Type.** Playfair Display 700 for every heading (56 / 48 / 40 / 32 / 26), Source Sans 3 for everything else (chapô 24/1.5, corps 20/1.6, secondaire 18, label 15 uppercase +0.14em). Body copy never drops below 18px, and 20px is the default. Line length is capped: 66ch for prose, 44ch for a lead paragraph. Playfair is never used below 22px and never for UI labels; Source Sans is never used for a heading. Mono (`--font-mono`) appears only for statutory references (`L. 425-9 CESEDA`).

**Spacing & grid — the margin law.** This is the rule that keeps every Egidia page from drifting, and it is not negotiable.

1. **The rules sit at `--page-margin` (48px) from each viewport edge.** They are drawn, fixed, and continuous.
2. **Text never touches a rule.** Content starts at `--content-inset` — `calc(var(--page-margin) + var(--gutter))` = 48 + 32 = **80px**. Every container uses that one token: the header wordmark, `Page`, `Band`'s inner box, and any ruled cell sitting against a rule (`<RuledCell edge="left">`). No component ever writes its own `calc()` against `--page-margin`; if you find one, it is a bug.
3. **Only photography crosses the rules.** A full-bleed image may run to the viewport edge. Nothing else may — not a background band's text, not a card, not a button.
4. **The vertical stack has three steps and no others:** `--stack-tight` (16px) title→lead, `--stack` (24px) lead→content, `--stack-loose` (48px) block→block. Inside a card or cell, 8px is allowed for a label→value pair. Nothing else: no 14px, no 20px, no 28px. If a gap feels wrong, the type size is wrong, not the gap.
5. **Sections are separated by `--section-y` (128px)**, `--section-y-sm` (64px) for a hero or a compressed band. A ruled cell's own padding is `--cell-pad` (48px) on every side, replaced by `--content-inset` on a side that meets a rule.

8px base scale, `4 → 160`. 12 columns, 32px gutter, page max 1680px (the site runs wide inside its rules), prose column 720px, lead measure 44 characters. Whitespace is the brand's most visible asset; when a layout feels empty, the fix is bigger type, not more content.

**Photography.** Ten photographs, supplied by the cabinet: the team in front of the Palais de justice, an atmosphere shot on the terrace overlooking Brussels, and seven individual portraits shot in the same garden on the same afternoon. They set the register: **natural light, warm late-afternoon sun, real Brussels backgrounds** (stone, ironwork, hedge, graffiti), no studio, no suits, no crossed-arms authority poses. Portraits are 3:4 with the subject centred and full-length or three-quarter; the garden hedge behind them reads as a soft green field that sits naturally beside sauge. Every photograph is masked with the shield arc (see *The arc*). Files live in `assets/photos/`, resized to 900px wide for portraits and 1600–1900px for the wide shots, JPEG q82. If new photography is commissioned, match this light — never cool, never high-contrast, never desaturated grey, never stock.

**Backgrounds.** Flat colour fields only. **No gradients** anywhere (the only permitted gradient is `--scrim-image`, a protection scrim under text on a photo). No repeating patterns, no textures, no noise, no hand-drawn illustration. Section identity comes from a tone change and a hairline rule. The one decorative element is the **shield watermark**: the mark's silhouette, enlarged past the edge of a full-bleed band at 3–5% opacity, low and to the left. It must never be legible as a logo — if you can read it, it is too strong.

**Visible margins — the page frame.** Two 1px vertical rules sit 48px in from each viewport edge and run the **entire height of the site**, fixed, crossing every band (`--line-page-rule`, `rgba(122,107,90,.38)` — chosen so it reads on crème and on sauge obscur alike). Nothing interrupts them and no content bleeds past them except photography. This is the single most recognisable thing about an Egidia page: the structure is drawn, not implied. See `components/layout/PageRules.jsx`.

**The ledger grid.** Sets of things — the five matières, the three contact blocks — are laid out as **cells divided by single hairlines, with no gaps and no radius**: the rules *are* the spacing. Container carries the top and left rule, each cell the right and bottom, so lines never double. Cells are generous (48px padding, 200–260px min-height), a Playfair 30px title with a short sentence under it, and the first cell usually holds the section title alone. A photograph occupies the last column and spans every row, flush to the rules. See `components/layout/RuledGrid.jsx`.

**The arc.** The shield's bottom curve is the brand's **only** curve, and it is cut into photographs — never into interface. `ArcImage` masks one corner (bottom-left by default, `42% 52%` elliptical) so the hero photo and every portrait carry the mark's geometry without reproducing the mark. Interface frames stay square, full stop: the arc is a brand gesture, not a border radius. No imagery was supplied — where photography belongs (avocates portraits, the cabinet), leave a labelled placeholder and ask; if photos arrive they should be warm-neutral, natural light, slightly desaturated, never cool or high-contrast, never stock-smiling.

**Borders & frames.** This is a system of frames, not bubbles, and **every corner is square** — all radius tokens are `0px`. No rounded cards, no rounded buttons, no pills, no capsules. The seriousness of the practice is carried by the right angle. Hairline 1px `--line-hairline` for static cards, 1px `--line-strong` for clickable ones, 1px `--line-rule` for dividers, 2px brun for an emphasised frame, 3px sauge inset rule for a highlighted card or callout edge.

**Cards.** Crème-pur fill, 1px border, **square corners**, 32px padding, `--shadow-paper` (`0 1px 2px rgba(59,46,30,.05)`) — essentially flat. Five tones: `paper`, `inset` (sable clair), `sage`, `framed` (2px brun border), `ink` (brun profond with crème text, for closing/contact bands).

**Shadows.** Warm brown, very low alpha, three steps only: paper / raised / overlay (`0 12px 40px rgba(59,46,30,.16)`, dialogs only). No coloured shadows, no glows, no inner shadows except the accent rule trick.

**Transparency & blur.** Used in exactly one place: the modal scrim, `rgba(59,46,30,.42)` with an 8px backdrop blur. No frosted panels, no translucent headers, no glass.

**Animation.** Calm and short. 140ms for hover/focus colour changes, 220ms for accordion and panel opening, 380ms for a dialog. Easing `cubic-bezier(.2,.6,.2,1)` — no bounce, no spring, no overshoot, no attention-seeking motion, no parallax, no scroll-triggered reveals (a client re-reading a deadline should never wait for an animation).

**Hover — inversion.** This is the one place the system takes liberties, and it takes them decisively. **Any clickable frame inverts: a light frame becomes a brun-profond fill with crème text.** Whole matière cards, avocate cards, outline buttons, keyword chips, link rows and list items all flip at once, in 140ms. There is never any doubt about what is clickable. The mechanism is the global `.eg-invert` class in `tokens/base.css`; a child marked `.eg-accent` turns sauge clair instead of crème (used for the → arrow). `primary` buttons, already dark, simply darken further; links keep their colour and thicken their underline from 1px to 2px; tabs gain a sauge rule. Opacity is never used as a hover state, and nothing lifts, scales up or casts a bigger shadow — the colour flip does all the work.

**Press.** `scale(0.99)` plus the hover colour. Nothing travels, nothing flashes.

**Focus.** Always visible: 3px sauge outline, 2px offset. Inputs additionally switch their border to sauge and gain a 2px sauge-voile halo. Focus is never removed, on any control, ever.

**Disabled.** Gris fill, `#8E877C` text, `not-allowed` cursor — and the reason is always stated in nearby text.

**People.** Avocates are never presented as gapped cards. They appear as **flush portrait cells in a ruled grid** (`PersonCell`): the photograph fills the cell, a small uppercase mention sits top-right in its own hairlined box, and the name lives in a sauge-voile band at the foot with an arrow — the band flipping to brun profond on hover, name and arrow with it. When the row does not divide evenly (seven avocates across four columns), the remainder is filled with a `RuledCell` carrying a real sentence, never an empty cell. The section header above them is itself two ruled cells: an oversized Playfair "Nos avocates" on the left, a statement on the right.

**Layout rules.** Header is a static bar with a bottom hairline (not fixed, not sticky, not translucent): the EGIDIA wordmark left, navigation as **hairline-divided cells** right — uppercase, letterspaced, 92px tall, each cell filling brun profond on hover. No action button in the header. The hero is a two-column split: text left on crème, photograph right carrying the arc. Body copy is left-aligned everywhere **except** inside a full-bleed `Band`, which centres a short 48-character measure — the one licensed exception. Footer is brun profond, four columns, and closes every page. Nothing floats over content except dialogs.

**Hit targets.** 48px minimum, everywhere. Primary buttons are 56px.

**No forms.** The cabinet handles no personal data through the site — the risk of leaking a client's situation is unacceptable. There is **no contact form, no field, no file upload, no newsletter box** anywhere, and the design system deliberately ships **no form components** (see *Components*). Every call to action is a `mailto:` or a phone link: the generic address, or an individual avocate's address and direct line from her fiche.

**Brand mark.** `assets/logo.svg` — a shield containing two overlapping profiles under the letters EGIDIA. Its internal colours (`#685139` brun, `#868B75` sauge, `#9D7956` caramel, `#F9F9F9`) are close cousins of the palette but not identical to it: **use the SVG as supplied, never recolour it to the tokens.** Minimum height 52px; clear space equal to a third of the shield's width; it sits on crème, sable or sauge-voile, never in a rounded container. **The mark is for light surfaces only.** On brun profond it goes inside a crème chip (rounded 4px, 12/16px padding) rather than being recoloured or brightened — its own lettering is a dark brun and disappears against a dark ground. Never stretch it, never put it in a coloured circle, never pair it with a typed "Egidia" beside it. See `guidelines/brand-logo.card.html`.

---

## Iconography

No icon assets, icon font or sprite were supplied. **Substitution flagged:** the system uses **Lucide** (`lucide-static@0.427.0`, 24px grid, 2px stroke, rounded caps) loaded per-glyph from unpkg and masked so it inherits `currentColor`. Lucide was chosen because its even 2px line and open shapes match the calm, unornamented tone of the brand; a heavier or filled set would fight the type.

Rules:
- Every icon goes through the `Icon` component (`components/core/Icon.jsx`) — never inline SVG, never a PNG, never an emoji, never a Unicode glyph pressed into service as an icon (the one exception is the `×` inside a removable `Tag`).
- Icons are **20px** beside 18px text, **24px** beside 20px text, **26–28px** as a card or callout lead glyph. Never below 16px.
- Icons never carry meaning alone. Every icon is either decorative (`aria-hidden`, paired with visible text) or labelled.
- Two-tone, filled, or coloured icons are not used. Colour comes from the text colour around them; the only deliberate exception is a sauge lead glyph on a practice-area card.
- Glyphs actually in use: `arrow-right`, `arrow-down`, `arrow-up-right`, `chevron-down`, `chevron-right`, `check`, `x`, `menu`, `phone`, `mail`, `map-pin`, `accessibility`, `train-front`, `tram-front`, `image`, `linkedin`, `clock`, `file-text`, `info`, `triangle-alert`.

If the cabinet owns a licensed icon set, drop the files in `assets/icons/` and point `Icon`'s `CDN` constant at them.

---

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

---

## Caveats

1. **Font binaries missing.** Playfair Display and Source Sans 3 load from Google Fonts (`tokens/fonts.css`). Both families are the ones named in the specimen, so this is a delivery substitution rather than a design one — but if the cabinet has licensed files, replace the `@import` with local `@font-face` rules.
2. **Icon set substituted** with Lucide — flagged above.
3. **Photography now supplied** — ten images, wired into every surface. Still missing: a photograph or access plan for "Nous trouver".
4. **No general phone number for the cabinet.** The copy tells visitors to call; every avocate has a direct line except Floriane Delplancke, whose professional number is still being set up.
5. **Some per-avocate fields still open:** LinkedIn for four of the seven, and the "années d'ancienneté" column was left blank (derived from each parcours instead).
6. **Liens utiles for Droit des MENA** are marked `[Ajouter]` in the cabinet's own PDF — still empty.
7. **No light-on-dark logo variant.** On dark grounds the mark sits in a crème chip. A proper reversed version (crème lettering, light profiles) would be cleaner — please send one if it exists.
