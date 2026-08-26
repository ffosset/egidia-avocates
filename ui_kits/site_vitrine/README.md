# UI kit — Site vitrine Egidia

Recreation of the site defined by the cabinet's own **arborescence** (`uploads/arborescence.png`) and **final copy** (`uploads/CONTENU SITE WEB ✅.pdf`, transcribed to `brand/contenu-site-web.txt`). French only. No online booking — consultations are arranged by phone or e-mail.

| Page type | File | Notes |
| --- | --- | --- |
| Accueil (single page, scroll) | `Accueil.jsx` | The seven sections of the plan: hero, valeurs, 5 matières, honoraires + aide juridique, équipe (ruled header + 7 flush portrait cells), contact et accès, liens utiles |
| Page matière ×5 | `Matiere.jsx` | Titre, introduction, "Ce que nous traitons", cards of the specialised avocates, liens utiles, CTA contact |
| Fiche avocate ×7 | `FicheAvocate.jsx` | Portrait, matières préférentielles (celles des cinq sont cliquables), parcours, publications, langues, e-mail, ligne directe, TVA, cabinet précédent, LinkedIn — contenu réel issu du fichier Excel |
| Documents aide juridique | `ProDeo.jsx` | The full pro-deo document list: A généraux, B preuves de revenus (9 situations), C cohabitants majeurs |

`Data.jsx` holds the transcribed content (matières, avocates, `FICHES` profiles, liens, contact) — edit it, not the screens. Sources: `brand/contenu-site-web.txt` and `brand/fiches-avocates.txt`.
`Shared.jsx` holds `Page`, `Eyebrow`, `SectionHead`, `RuledList`, `LinkList`, `PhotoSlot`, `ContactBand`, `SiteFooter`.

Navigation is a tiny hash-like router in `index.html`: `accueil`, `accueil#section`, `matiere:<id>`, `avocate:<nom>`, `prodeo`.

## Spacing

Every inset in this kit comes from the margin law in `tokens/spacing.css` — see *Spacing & grid* in the root `readme.md`. In practice: use `Page` (or `<RuledCell edge="left">`) rather than writing a `calc()` against `--page-margin`, and use only `--stack-tight` / `--stack` / `--stack-loose` for vertical gaps. A literal `marginTop: 20` in this folder is a defect.

## Still missing from the sources

Rendered as visible dashed placeholders or omitted, not invented:
- **Portraits** of the seven avocates, and a photo or plan for "Nous trouver".
- **General phone number** for the cabinet. Each avocate now has a direct line except **Floriane Delplancke**, whose professional number is being set up — her fiche shows « Ligne directe à venir ».
- **LinkedIn** for Delplancke, Doyen, Ghymers and Vryens (no profile supplied).
- **Liens utiles for "Droit des MENA"** — marked `[Ajouter]` in the source PDF.

Note: several avocates list matières beyond the cabinet's five (droit du bail, droit du roulage, droit social). These render as non-clickable chips with a one-line explanation — confirm whether that is the wanted treatment.
