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
| **Design system** | `tokens/` `components/` `guidelines/` `brand/` `ui_kits/` `SKILL.md` | Miroir du projet claude.ai/design. **Lecture seule** — on le resynchronise, on ne l'édite pas à la main. |
| **Index du design system** | `readme.md` | Inventaire court des fichiers. Ce n'est **pas** la référence des règles : elles sont ci-dessous. |
| **Le site** | `src/` `astro.config.mjs` | L'implémentation Astro. C'est ici qu'on travaille. |

`ui_kits/site_vitrine/` est l'implémentation de référence en React + Babel
standalone. Elle dépend d'un global `window.EgidiaDesignSystem_36aa4a` et n'est
**pas** du code livrable : c'est la source dont `src/` a été porté.

## JavaScript : presque zéro

Le design system porte son interactivité en CSS : la signature de la marque —
l'inversion au survol — vit dans `.eg-invert` (`tokens/base.css`). Les
composants React d'origine pilotaient le survol avec `useState` ; en `.astro`
c'est `:hover`.

**Trois des quatre gabarits ne livrent aucun script.** Seul l'accueil en charge,
et uniquement pour la carte d'accès :

| Route | JS livré |
| --- | --- |
| `/` | 2 Ko (observateur) + Leaflet 147 Ko en import différé |
| `/matieres/[id]` | aucun |
| `/avocates/[slug]` | aucun |
| `/aide-juridique` | aucun |

`MapEmbed` exige Leaflet : le design system impose des tuiles OpenStreetMap
réelles — « jamais un plan de rue dessiné ou illustré ». Trois décisions pour
limiter la casse :

1. **Leaflet est empaqueté**, pas chargé depuis un CDN — comme les icônes.
2. **Import dynamique déclenché par `IntersectionObserver`** : les 147 Ko ne
   partent que si la carte entre dans le champ. La carte est la dernière
   section de la page ; qui ne descend pas jusqu'en bas ne paie rien.
3. **`<noscript>` donne l'adresse et un lien d'itinéraire.** Sans JavaScript on
   ne perd pas l'information, seulement la carte.

Aucune page n'utilise `Accordion`, `Dialog` ni `Tooltip` — il n'y a donc pas
d'autre île. Si un besoin apparaît, ce sont les trois candidats ; le reste doit
rester statique.

Le site ne comporte **aucun formulaire**, par décision du cabinet : il ne
collecte aucune donnée personnelle. Tout appel à l'action est un `mailto:` ou
un `tel:`. Ne pas réintroduire de composants de formulaire.

## Structure de `src/`

```
src/
  data/          Contenu transcrit — matieres, avocates, prodeo, site
  components/    24 composants .astro portés du design system
                 (dont ArcPanel — le héros, RuleLink — action discrète,
                  et MapEmbed — la carte d'accès Leaflet)
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
- Les coordonnées de la carte (`CONTACT.coords`) sont déduites de l'adresse —
  **à faire confirmer par le cabinet** avant mise en ligne.
- Pas de numéro général pour le cabinet ; Floriane Delplancke n'a pas encore de
  ligne directe (sa fiche affiche « Ligne directe à venir »).
- LinkedIn absent pour Delplancke, Doyen, Ghymers et Vryens.
- Liens utiles pour « Droit des MENA » — marqués `[Ajouter]` dans le PDF source.
- Pages `/mentions-legales` et `/vie-privee` liées par le pied de page mais pas
  encore écrites.
- Le domaine dans `astro.config.mjs` (`site`) est à confirmer.

## Les règles à ne pas casser

**Ce document fait autorité.** Les règles vivaient dans `readme.md`, redevenu un
simple index ; elles sont reprises ici en entier. Les spécimens visuels de
`guidelines/` les illustrent, mais ne les remplacent pas.

### Contenu et voix

- **Français uniquement.** Le cabinet a écarté un site multilingue.
- **« Nous » pour le cabinet, « vous » pour la personne.** Jamais la troisième
  personne, jamais « l'usager », « le demandeur », « le justiciable ».
- **Phrases courtes, exactes, sous 20 mots.** Une idée par phrase. Un terme
  juridique n'apparaît que si la personne le rencontrera sur un vrai document,
  et il est alors explicité à la première occurrence.
- **Trois tournures récurrentes**, qui font la voix : la définition corrective
  (« X n'est pas Y : c'est Z »), l'obstacle nommé (« Beaucoup y renoncent faute
  de le savoir ») et la conséquence simple (« un délai manqué se rattrape
  difficilement »).
- **La réassurance est factuelle, pas émotionnelle.** Plutôt que « vous n'êtes
  pas seul », donner le fait qui apaise : les honoraires sont expliqués, toutes
  les avocates travaillent dans le cadre de l'aide juridique, le cabinet est
  accessible aux personnes à mobilité réduite.
- **Vocabulaire belge, exactement** : *aide juridique* (jamais « aide
  juridictionnelle », qui est française), *pro deo*, *CPAS*, *revenu
  d'intégration*, *SAJ / SPJ*, *tribunal du travail*, *ordre de quitter le
  territoire*, *Avertissement-Extrait de Rôle (AER)*, *composition de ménage*,
  *Conseil du contentieux des étrangers*.
- **Boutons à l'infinitif**, décrivant l'action : *Voir nos domaines*, *Écrire
  au cabinet*, *Voir la fiche*. Jamais « Cliquez ici », jamais « Prendre
  rendez-vous en ligne » — il n'y a pas de réservation en ligne.
- **Titres = affirmations**, en casse de phrase. Jamais de capitales, jamais de
  point d'interrogation dans un héros.
- **Les capitales sont réservées aux labels** : `VALEURS`, `HONORAIRES`,
  `ÉQUIPE`, `CONTACT ET ACCÈS`, `LIENS UTILES`…
- **Ni emoji, ni point d'exclamation, ni superlatif.** Pas de « leader », pas de
  « sur-mesure », pas de « 360° ».

### Aucun formulaire

Le cabinet ne collecte **aucune donnée personnelle** par le site : le risque de
laisser fuir la situation d'une personne est inacceptable. Pas de formulaire de
contact, pas de champ, pas d'envoi de fichier, pas d'inscription. Le design
system ne livre délibérément **aucun composant de formulaire**, ni `Toast`. Si
un besoin semble en réclamer un, la réponse est un lien `mailto:` ou `tel:`.

### La loi des marges

1. Les filets sont à `--page-margin` des bords, **fixes et continus**.
2. **Le texte ne les touche jamais** : il commence à `--content-inset`
   (`--page-margin` + `--gutter`). Aucun composant n'écrit son propre `calc()`
   contre `--page-margin` ; si vous en trouvez un, c'est un bug.
3. **Seule la photographie franchit un filet.** Ni bande, ni carte, ni bouton.
4. **Trois pas verticaux et pas un de plus** : `--stack-tight` (titre → chapô),
   `--stack` (chapô → contenu), `--stack-loose` (bloc → bloc). 8px est toléré
   pour une paire label/valeur dans une cellule. Rien d'autre : ni 14, ni 20,
   ni 28. Si un espace semble faux, c'est la taille du texte qui l'est.
5. Sections séparées par `--section-y`, `--section-y-sm` pour un héros ou une
   bande compressée.

En mobile (≤700px) `src/styles/tokens.css` resserre marge et gouttière à 20/16.
La loi ne change pas — seules les deux valeurs se réduisent.

### Formes et couleur

- **Tous les angles sont droits.** Tous les tokens de rayon valent `0`. Pas de
  carte arrondie, pas de bouton arrondi, pas de pilule. Le sérieux du cabinet
  est porté par l'angle droit.
- **Le seul arrondi est l'arc du bouclier**, et il ne se coupe que dans une
  photographie — jamais dans une interface.
- **Deux tons de fond par page au maximum.** Les voiles dérivés
  (`--sable-clair`, `--sauge-voile`, `--caramel-voile`) servent aux encadrés,
  pas aux pages.
- **Aplats uniquement. Aucun dégradé** (seule exception : `--scrim-image`, le
  voile de protection sous un texte posé sur une photo). Pas de motif, pas de
  texture, pas de bruit.
- **Le filigrane du bouclier** est le seul ornement : 3 à 5% d'opacité, débordant
  la bande. S'il se lit comme un logo, il est trop fort.
- **Ombres brunes, très basses**, trois pas seulement. Pas d'ombre colorée, pas
  de halo. Transparence et flou en un seul endroit : le voile du dialogue.

### Typographie

- **Playfair Display 700 pour tout titre**, Source Sans 3 pour le reste.
- **Le corps ne descend jamais sous 18px**, 20px par défaut.
- **Playfair jamais sous 22px**, jamais pour un label d'interface. Source Sans
  jamais pour un titre.
- **Mesures plafonnées** : 66ch en prose, 44ch pour un chapô.
- **Le mono est réservé aux références légales** (`L. 425-9 CESEDA`).
- Le texte est aligné à gauche partout, **sauf** dans une `Band` pleine largeur,
  qui centre une mesure courte — l'unique exception autorisée.

### Interaction

- **Le survol inverse.** Tout cadre cliquable passe d'un fond clair à un aplat
  brun profond, texte crème, en 140ms. C'est le signal principal de ce qui est
  cliquable : ne jamais l'adoucir. Un enfant marqué `.eg-accent` passe en sauge
  clair plutôt qu'en crème.
- **L'opacité n'est jamais un état de survol.** Rien ne se soulève, rien ne
  grossit, rien ne prend une ombre plus large. Le basculement de couleur fait
  tout le travail.
- **Appui** : `scale(0.99)` et la couleur de survol. Rien ne se déplace.
- **Le focus est toujours visible** : contour sauge 3px, décalé de 2px. On ne le
  retire sur aucun contrôle, jamais.
- **Cibles tactiles 48px minimum**, boutons primaires 56px.
- **Mouvement calme** : 140ms pour le survol, 220ms pour un panneau, 380ms pour
  un dialogue, `cubic-bezier(.2,.6,.2,1)`. Ni rebond, ni ressort, ni parallaxe,
  ni révélation au défilement — quelqu'un qui relit un délai ne doit pas
  attendre une animation.
- **Désactivé** : fond gris, curseur `not-allowed`, et la raison est toujours
  écrite à côté.

### Photographie et marque

- **Lumière naturelle de fin d'après-midi, décors bruxellois réels.** Ni studio,
  ni costume, ni pose d'autorité bras croisés. Portraits en 3:4. Toute photo
  passe par l'arc du bouclier. Si de nouvelles photos sont commandées, garder
  cette lumière : jamais froide, jamais contrastée, jamais désaturée, jamais
  banque d'images.
- **Le logo s'utilise tel quel.** Ses couleurs internes ne sont pas celles des
  tokens : **ne jamais le recoloriser**. Hauteur minimale 52px, air autour égal
  au tiers de la largeur du blason.
- **Le blason est fait pour les surfaces claires.** Sur brun profond il va dans
  une puce crème — on ne l'éclaircit pas. Ne jamais l'étirer, ne jamais le poser
  dans un cercle coloré, ne jamais lui accoler « Egidia » en toutes lettres.

### Icônes

Lucide est une **substitution assumée** — aucun jeu d'icônes n'a été fourni.
Toute icône passe par `Icon.astro` : jamais de SVG en ligne, jamais de PNG,
jamais d'emoji. 20px à côté d'un texte de 18px, 24px à côté de 20px, jamais sous
16px. **Une icône ne porte jamais le sens seule** : elle est décorative et
`aria-hidden`, ou bien étiquetée.

### Ce que le design system n'a plus à dire

Les anciennes sections « Content fundamentals » et « Visual foundations » de
`readme.md` sont reprises ci-dessus. La version longue d'origine reste
consultable dans l'historique :

```bash
git show 7d2d57c:readme.md
```

