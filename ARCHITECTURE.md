# egidia-avocates — architecture

Site vitrine du cabinet Egidia, en **Astro**, construit sur le design system
synchronisé depuis claude.ai/design.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deux couches, une seule source de vérité

Le dépôt contient deux choses distinctes, et il ne faut pas les confondre :

| Couche | Emplacement | Rôle |
| --- | --- | --- |
| **Design system** | `tokens/` `components/` `guidelines/` `brand/` `ui_kits/` `readme.md` `SKILL.md` | Miroir exact du projet claude.ai/design. **Lecture seule** — on le resynchronise, on ne l'édite pas à la main. |
| **Le site** | `src/` `astro.config.mjs` | L'implémentation Astro. C'est ici qu'on travaille. |

`ui_kits/site_vitrine/` est l'implémentation de référence en React + Babel
standalone. Elle dépend d'un global `window.EgidiaDesignSystem_36aa4a` et n'est
**pas** du code livrable : c'est la source dont `src/` a été porté.

## Pourquoi zéro JavaScript

Le design system porte son interactivité en CSS : la signature de la marque —
l'inversion au survol — vit dans `.eg-invert` (`tokens/base.css`). Les
composants React d'origine pilotaient le survol avec `useState` ; en `.astro`
c'est `:hover`, et le site ne livre aucun script.

Aucune page n'utilise `Accordion`, `Dialog` ni `Tooltip`, donc il n'y a
aujourd'hui **aucune île**. Si un besoin apparaît, ces trois-là sont les
candidats — le reste doit rester statique.

Le site ne comporte **aucun formulaire**, par décision du cabinet : il ne
collecte aucune donnée personnelle. Tout appel à l'action est un `mailto:` ou
un `tel:`. Ne pas réintroduire de composants de formulaire.

## Structure de `src/`

```
src/
  data/          Contenu transcrit — matieres, avocates, prodeo, site
  components/    21 composants .astro portés du design system
  layouts/       Base.astro — <head>, filets de marge, en-tête, pied de page
  pages/
    index.astro              Accueil, 7 sections en scroll
    matieres/[id].astro      ×5, générées depuis MATIERES
    avocates/[slug].astro    ×7, générées depuis AVOCATES
    aide-juridique.astro     Documents à produire (pro deo)
  styles/tokens.css          Importe les 8 fichiers de tokens à la racine
```

Le contenu vit dans `src/data/`, jamais dans les gabarits. Sa source est
`brand/contenu-site-web.txt` et `brand/fiches-avocates.txt` — les mots du
cabinet. Ne rien inventer.

## Images

`astro.config.mjs` fixe `publicDir: './assets'`. Le dossier `assets/` du design
system **est** le dossier public : il ne contient que le logo et les
photographies redimensionnées, servis à la racine (`/logo.svg`,
`/photos/equipe.jpg`).

Les originaux pleine résolution sont dans `_originals/`, hors du dépôt
(gitignoré) et hors du build. Les versions livrées suivent la spécification du
design system : portraits 900px de large, vues larges 1600–1900px, JPEG q82.

## Icônes

`components/Icon.astro` inline le SVG Lucide depuis `node_modules` **au build**.
Pas de CDN au runtime. Le composant échoue bruyamment si un glyphe manque,
plutôt que de livrer une page sans icônes.

Lucide est une **substitution assumée** : aucun jeu d'icônes n'a été fourni avec
la marque. `Icon.astro` est le seul endroit à changer le jour où le cabinet en
acquiert un.

## Ce qui manque encore

- `equipe-2.jpg` n'a jamais été fourni ; `PHOTOS.equipeAlt` retombe sur la photo
  principale.
- Pas de photographie ni de plan d'accès pour « Nous trouver ».
- Pas de numéro général pour le cabinet ; Floriane Delplancke n'a pas encore de
  ligne directe (sa fiche affiche « Ligne directe à venir »).
- LinkedIn absent pour Delplancke, Doyen, Ghymers et Vryens.
- Liens utiles pour « Droit des MENA » — marqués `[Ajouter]` dans le PDF source.
- Pages `/mentions-legales` et `/vie-privee` liées par le pied de page mais pas
  encore écrites.
- Le domaine dans `astro.config.mjs` (`site`) est à confirmer.

## Les règles à ne pas casser

Elles viennent de `readme.md`, qui fait autorité :

- **La loi des marges.** Les filets sont à 48px des bords ; le texte commence à
  `--content-inset` (80px) et ne les touche jamais. Seule la photographie
  franchit un filet. Aucun composant n'écrit son propre `calc()` contre
  `--page-margin`.
- **Trois pas verticaux**, pas un de plus : `--stack-tight` / `--stack` /
  `--stack-loose`. Si un espace semble faux, c'est la taille du texte qui l'est.
- **Angles droits partout.** Tous les tokens de rayon valent `0`. Le seul
  arrondi du système est l'arc du bouclier, et il ne se coupe que dans une
  photographie.
- **Corps de texte jamais sous 18px**, cibles tactiles 48px minimum, anneau de
  focus toujours visible.
- **Français uniquement**, « nous » pour le cabinet, « vous » pour la cliente ou
  le client. Pas d'emoji, pas de dégradé, pas de point d'exclamation.
