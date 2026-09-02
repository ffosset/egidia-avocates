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
le lit et l'encre au survol — vit dans `src/styles/survol.css`, sous
`.eg-inverse` (les cadres qui s'allument) et `.eg-survol` (les surfaces qui
écrivent leur propre encre). Les composants React d'origine pilotaient le survol avec
`useState` ; en `.astro` c'est `:hover`.

Le design system a la même idée sous le nom `.eg-invert` (`tokens/base.css`),
mais il la pose SANS garde : rien ne pouvait plus la faire taire, et il FAUT
pouvoir la faire taire — un écran tactile n'a pas de survol, il a un appui que
le navigateur laisse allumé. Le site a donc repris la classe à son compte. Tout
ce qui s'allume au pointeur est enfermé dans `@media (hover: hover)` ; le focus
clavier, lui, vaut sur tous les écrans et reste hors du garde.

Le lit s'écrit bien en `!important`, lui aussi, mais ce n'est pas ce qui le
rendait indomptable : c'est le `@media` qui l'éteint, pas la spécificité. Le
`!important` répond à un tout autre problème — une classe scopée par Astro pèse
deux classes, autant que `.eg-inverse:hover`, et les feuilles de composant
passent après la feuille globale. Sans lui, un composant qui déclare son propre
fond gardait ce fond au survol tout en appliquant son encre de survol : sur les
honoraires, le bouton secondaire écrivait sauge obscur sur sauge obscur. Le
détail du calcul est en tête de `survol.css`.

**Cinq des six gabarits ne livrent aucun script.** Seul l'accueil en charge,
et uniquement pour l'appel de la carte d'accès :

| Route | JS livré |
| --- | --- |
| `/` | moins d'1 Ko (l'appel de la carte et son voile) |
| `/services/[id]` | aucun |
| `/avocates/[slug]` | aucun |
| `/aide-juridique` | aucun |
| `/mentions-legales` | aucun |
| `/vie-privee` | aucun |

`MapEmbed` est un `<iframe>` Google Maps que **le serveur ne rend pas** :
aucune bibliothèque, aucun kilo-octet de carte à empaqueter, et surtout aucune
requête vers Google tant que personne ne l'a demandée. Le design system impose
un plan de rue réel — « jamais un plan de rue dessiné ou illustré » — et Google
porte les repères que le quartier a dans la tête (Louise, Stéphanie, les
commerces). Quatre décisions :

1. **Le plan ne part pas seul.** L'adresse de l'embarqué dort dans un `data-`
   et le script ne fabrique le cadre qu'au clic sur « Afficher le plan ». Tant
   que personne n'a cliqué, Google ne voit ni l'adresse IP du visiteur, ni la
   page consultée, ni l'heure de la visite. `loading="lazy"` n'y suffisait pas :
   il ne retarde le départ que jusqu'au défilement. Voir « Aucune fuite ».
2. **La teinte est légère.** Assez pour que le plan appartienne au papier, pas
   assez pour effacer un nom de rue ; carte activée, elle retombe presque au
   réel — au moment où l'on s'en sert, la lisibilité passe devant l'accord de
   tons. Le basculement est net, sans transition : sur un `<iframe>` d'une
   autre origine, le moteur ne démarre pas la transition de `filter` et cloue
   la propriété à son ancienne valeur (commentaire à l'appui dans le composant).
3. **Un voile intercepte la molette**, sinon la carte confisque le défilement de
   la page. Il ne naît qu'avec le script, comme le cadre qu'il couvre.
4. **Le plan occupe toute la cellule, et RIEN ne se pose sous lui** — ni barre,
   ni lien d'itinéraire. `a9990cf` avait retiré ce lien du registre du contact,
   et c'est ce retrait qui permet aux quatre cellules de partir du haut sur un
   seul plancher ; le remettre au pied de la carte rouvrirait exactement ce que
   ce commit avait refermé. L'adresse vit dans la cellule « Nous trouver », à
   côté. L'épingle, elle, suit l'ADRESSE géocodée ; `CONTACT.coords` n'est que
   le repli.

Trois états, donc, et le script est le seul à pouvoir les franchir : au repos
(aucune requête) → chargé (le voile garde la molette) → manipulable. Sans
JavaScript, l'écran d'appel reste ce qu'il est — l'adresse, sous un intitulé
qui dit ce qui manque : on ne perd que le plan.

**Le plan montre les commerces, et c'est assumé.** Restaurants et hôtels
appartiennent au fond de Google, qui n'offre AUCUN moyen de les retirer :
l'API Embed n'a pas de paramètre de style, et les surfaces stylables (JS,
Static) exigent une clé et une facturation. Un fond sans commerces existe et a
été essayé — CARTO Positron via Leaflet, gratuit et sans clé, avec les deux
arrêts posés à la main — puis écarté : le cabinet préfère le plan que ses
visiteurs reconnaissent. Ne pas re-tenter le remplacement sans le lui demander.
(Coordonnées relevées à cette occasion, si la question revient : Louise
50.835392, 4.354668 ; Stéphanie 50.833034, 4.357664.)

L'embarqué a deux adresses possibles : avec `PUBLIC_GOOGLE_MAPS_KEY` dans
`.env`, l'API officielle Maps Embed ; sans clé, `maps?…&output=embed`,
l'embarqué public historique. Le repli sans clé marche aujourd'hui mais n'est
pas contractuel — poser la clé fait passer le site sur la voie officielle sans
rien changer d'autre. (Ni l'une ni l'autre ne sait masquer un commerce.)

Aucune page n'utilise `Dialog` ni `Tooltip` — il n'y a donc pas d'autre île. Si
un besoin apparaît, ce sont les deux candidats ; le reste doit rester statique.

Le sélecteur de situation de `/aide-juridique` est un accordéon, et il n'est
pas une île : c'est une suite de `<details name="situation">`, dont
l'exclusivité — une seule situation ouverte à la fois — est portée par le
navigateur. Le composant `Accordion` du design system, lui, pilote son état en
`useState` ; il n'a pas été porté, et il n'a pas à l'être tant que `name`
suffit. Sur un navigateur qui ignore l'attribut, plusieurs situations peuvent
s'ouvrir : on lit plus, on ne perd rien.

Le site ne comporte **aucun formulaire**, par décision du cabinet : il ne
collecte aucune donnée personnelle. Tout appel à l'action est un `mailto:` ou
un `tel:`. Ne pas réintroduire de composants de formulaire.

## Structure de `src/`

```
src/
  data/          Contenu transcrit — matieres, avocates, prodeo, site
  components/    24 composants .astro portés du design system
                 (dont ArcPanel — le héros, RuleLink — action discrète,
                  et MapEmbed — la carte d'accès Google, sous consentement)
  layouts/       Base.astro — <head>, filets de marge, en-tête, pied de page
  pages/
    index.astro              Accueil, 7 sections en scroll
    matieres/[id].astro      ×5, générées depuis MATIERES
    avocates/[slug].astro    ×7, générées depuis AVOCATES
    aide-juridique.astro     Documents à produire (pro deo)
    mentions-legales.astro   Éditeur, titre professionnel, déontologie
    vie-privee.astro         Ce que le site ne collecte pas — et le peu qu'il laisse

  fonts/                     Les quatre woff2 (variables, latin + latin-ext)
                             et leurs licences OFL
  styles/tokens.css          Importe les 7 fichiers de tokens à la racine,
                             plus `fonts.css` local à la place du huitième
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

## Comment le site se replie

**Une seule règle de lecture : intrinsèque là où des cellules se répètent, point
de rupture là où la mise en page est composée.**

### Le cadre glisse, il ne saute pas

`--page-margin`, `--gutter`, `--cell-pad`, `--section-y` et `--section-y-sm`
sont des `clamp()`. Chacun retombe exactement sur les deux anciennes valeurs
(mobile en bas, bureau en haut) et interpole entre les deux. Il n'y a plus de
palier à 700px, et une tablette n'est plus traitée comme un grand téléphone :

| viewport | `--content-inset` avant | après |
| --- | --- | --- |
| 375px | 36px | 36px |
| 768px | **80px** | **41px** |
| 1000px | 80px | 54px |
| ≥1500px | 80px | 80px |

Les **trois pas de la pile verticale** (`--stack-tight`, `--stack`,
`--stack-loose`) restent sur l'échelle fixe de 8px. C'est délibéré : ce sont eux
que la loi nomme, et c'est eux qu'on lit comme un rythme à l'intérieur d'un bloc.
Le cadre respire, la rythmique non.

### Les filets suivent le contenu

`PageRules` se cale sur le cadre du contenu, pas sur le bord de la fenêtre :

```css
left: calc(max(0px, (100% - var(--page-max)) / 2) + var(--page-margin));
```

Sous `--page-max` (1680px) le `max()` vaut 0 et le calcul se réduit à
`--page-margin` — comportement identique à avant. Au-delà, le contenu se centre
et les filets se centrent avec lui : l'écart filet → texte reste `--gutter` à
toutes les largeurs, y compris sur un écran de 3440px.

### L'en-tête est une boîte, et la couture la traverse

L'en-tête n'est pas une bande pleine largeur : ses filets horizontaux traversent
toute la page, mais ses **cellules s'arrêtent sur les deux filets de marge** —
la dernière (« Contact ») ferme la boîte sur le filet de droite. La boîte flotte
d'une gouttière sous le haut de la page ; la bande claire au-dessus est la page
elle-même, traversée par les filets.

Pour que les filets ne s'interrompent pas dans l'en-tête, celui-ci passe **sous**
`PageRules` (`z-index: 4` contre 5) : les deux filets de marge dessinent
eux-mêmes les bords verticaux de la boîte. Il reste au-dessus du panneau du
héros (2), pour que le menu ouvert le recouvre.

Une seule verticale gouverne le haut du site — `--hero-split`, **la couture** :

| Qui s'en sert | Pour quoi |
| --- | --- |
| `ArcPanel` du héros | sa largeur : le bord où le papier cède la place à la photo |
| `.hero-photo` | son bord gauche, à 76 % de la couture |
| `SiteHeader` | le filet entre le mot-symbole et « Services » |

Le premier filet de la navigation et le bord de la photographie sont donc **le
même trait**, l'un au-dessus de l'autre. La valeur vit dans
`src/styles/tokens.css` et se mesure en `vw`, non en `%` : l'en-tête (retenu par
`--page-max`) et le héros (pleine largeur) n'ont pas le même bloc conteneur, et
seule une mesure prise sur la fenêtre leur donne la même valeur. Le même fichier
définit `--frame-inset`, la position exacte du filet de marge depuis le bord de
la fenêtre, dont l'en-tête a besoin pour poser sa couture dans le repère de la
fenêtre tout en s'arrêtant sur les filets.

L'alignement est un idéal, pas un dogme : la colonne du mot-symbole **plafonne**
à la couture (`minmax(0, …)`) et cède d'elle-même si les quatre intitulés ne
tiennent plus — aucun mot n'est jamais coupé.

### Le menu de la barre étroite n'a pas besoin de JavaScript

Sous `--lap`, la barre disparaît dans un menu bâti sur `<details>`/`<summary>` :
il s'ouvre et se ferme sans script, au clavier comme à la souris, et le tiroir se
pose **par-dessus** la page au lieu de la pousser. Le script de `SiteHeader`
n'ajoute que deux conforts — refermer après un lien d'ancre, refermer sur Échap —
et le menu reste utilisable s'il ne s'exécute pas.

### `RuledGrid` : deux modes

| Mode | Déclencheur | Comportement |
| --- | --- | --- |
| **Intrinsèque** | `min` (+ `maxCols`) | `auto-fit` : la grille descend 4 → 3 → 2 → 1 là où le **contenu** cesse de tenir. Aucun `@media`. |
| **Composé** | `columns` | Gabarit explicite, cellules placées à la main. À `--lap` il abandonne la composition et redevient intrinsèque, piloté par `--lap-min` / `--lap-max` (une colonne par défaut). |

Le registre n'a pas de gouttière — les filets sont des bordures portées par les
cellules — donc `100% / maxCols` est exact, rien à soustraire :

```css
repeat(auto-fit, minmax(max(var(--cell-min), 100% / var(--cols-max)), 1fr))
```

Ce qui donne, pour les sept portraits de l'équipe (`min={240} maxCols={4}`) :

| viewport | 1440 | 1024 | 768 | 400 |
| --- | --- | --- | --- | --- |
| colonnes | 4 | 3 | 2 | 1 |

Restent composés — et gardent donc `--lap` — le **registre des matières**
(placement en zigzag, photo sur trois rangées), le **registre des liens utiles**
et le **héros**. La carte d'accès est intrinsèque : son `grid-column: span 2`
reste juste à 3, 2 et 1 colonnes.

Le registre des liens utiles est composé, lui, pour tenir un ORDRE. Il a deux
rangées — les noms de groupes en haut, les listes en dessous — et un groupe
écrit ses deux enfants à la suite dans le DOM, puis les place à la main. Sous
`--lap`, le mode composé rend les cellules au flux et l'ordre du DOM devient le
seul juge : chaque nom reste alors collé à la liste qu'il ouvre. Écrit rangée
par rangée, il aurait donné les deux noms l'un sur l'autre, loin de leurs
listes.

C'est aussi le seul registre de l'accueil qui ne remplisse pas sa section : il
est POSÉ dedans, entre deux `--section-y`. La boîte ne prend que ce qui se lit
comme une table — les lignes de liens. Le nom de la section et le nom de chaque
groupe restent sur le papier, au-dessus des filets ; un filet ne sert que là où
il sépare deux entrées. Une seule verticale gouverne la section, `--cell-pad`
depuis le filet de marge : le titre, le nom du groupe et l'intitulé d'un lien
commencent tous là.

Le registre des matières ne retombe pas d'un coup sur une colonne. Il a trois
états, et la photographie décide du premier :

| | ≥1000px | ~620–1000px | <620px |
| --- | --- | --- | --- |
| services | 2 colonnes | 2 colonnes | 1 colonne |
| photo d'ambiance | 3e piste, à côté | pleine largeur, en bas | pleine largeur, en bas |

Le passage sous `--lap` ne fait donc que déplacer la photo ; les services gardent
leurs deux colonnes jusqu'à ce qu'une cellule ne tienne plus dans 300px
(`--lap-min: 300px`, `--lap-max: 2` sur `.matieres`). L'enfant qui doit fermer le
registre sur toute sa largeur porte la classe `lap-span` — c'est la seule
exception à la remise à plat des placements explicites.

### Les colonnes proportionnelles se replient sur le texte

Les découpes `7fr 5fr` (matière **et aide juridique**, qui prend la même mise
en page — deux colonnes qui coulent depuis le haut, l'aplat ouvrant celle de
droite) et `4fr 8fr` (fiche avocate) sont des `flex-wrap` à bases en `ch`, pas
des grilles à points de rupture. Deux effets qu'un `@media` ne donne pas : l'asymétrie **se détend vers
l'égalité** quand la place manque, puis le bloc passe dessous — et la bascule
est décidée par la mesure du texte, pas par un pixel deviné.

Pas de `min-width: 0` sur ces colonnes : ce serait les autoriser à devenir plus
étroites que leur contenu, et les cartes déborderaient au lieu de passer à la
ligne.

### Un seul point de rupture, et il est nommé

`@media (--lap)` — `(max-width: 1000px)` — trois occurrences dans tout le site
(`RuledGrid`, `SiteHeader` + `ArcPanel`, `index.astro`). Avant : dix occurrences
réparties sur trois valeurs (700, 900, 1000).

Une variable CSS **ne fonctionne pas** dans un `@media` : `var()` n'y est pas
résolu. On passe donc par `@custom-media`, que PostCSS remplace au build. Astro
compile chaque `<style>` de composant séparément et `postcss-custom-media` ne lit
que le fichier courant : un petit greffon défini dans `astro.config.mjs` injecte
la définition en tête de chaque feuille avant qu'il ne s'exécute. **La valeur
1000px vit à un seul endroit : la constante `LAP` dans `astro.config.mjs`.**

Deux bascules restent locales et passent par une **requête de conteneur**, pas de
fenêtre : l'alignement des boutons de `ContactBand`, et le `span 2` de la carte
d'accès (qui fabriquerait une colonne implicite s'il survivait à une seule
colonne). Elles ne créent aucun point de rupture global.

### La rangée incomplète est assumée

À 3 colonnes (environ 1000–1160px), les sept portraits plus la cellule de
complément font huit cellules : la dernière rangée s'arrête une case trop tôt et
le registre porte une encoche en bas à droite. À 4, 2 et 1 colonnes le compte
tombe juste.

**C'est voulu.** Dans un registre, une rangée incomplète se lit comme la fin
d'une liste, pas comme une erreur de mise en page. Ne pas « corriger » l'encoche
en forçant un nombre de colonnes, en masquant un portrait ou en ajoutant une
cellule vide : ce serait sacrifier le repli continu 4 → 3 → 2 → 1, qui est le
point de tout le dispositif.

## Ce qui manque encore

- `equipe-2.jpg` n'a jamais été fourni ; `PHOTOS.equipeAlt` retombe sur la photo
  principale.
- L'épingle de la carte est posée par géocodage de l'adresse ; `CONTACT.coords`
  ne sert plus qu'à documenter le lieu — **à faire confirmer par le cabinet**
  avant mise en ligne.
- Pas de numéro général pour le cabinet ; Floriane Delplancke n'a pas encore de
  ligne directe (sa fiche affiche « Ligne directe à venir »).
- LinkedIn absent pour Delplancke, Doyen, Ghymers et Vryens.
- Liens utiles pour « Droit des MENA » — marqués `[Ajouter]` dans le PDF source.
- Le domaine dans `astro.config.mjs` (`site`) est à confirmer.
- Trois faits manquent aux pages légales, et `src/data/legal.js` les tient à
  `null` en attendant — la page n'affiche alors rien plutôt qu'un chiffre
  inventé : la forme juridique commune du cabinet (s'il en a une) et son numéro
  d'entreprise, et le nom de l'assureur en responsabilité professionnelle. Les
  numéros d'entreprise des sept avocates, eux, sont dans `avocates.js` et sont
  affichés.
- `HEBERGEUR` dans `legal.js` dit GitHub Pages : à corriger le jour où le site
  passe sur le domaine du cabinet. Les deux pages légales le nomment, parce
  qu'il est le seul destinataire que le visiteur ne choisit pas.
- `MAJ` dans `legal.js` est la date des deux pages légales. Elle se change à la
  main quand leur contenu change — et seulement alors.

## Écarts assumés par rapport au design system

Décisions du cabinet qui s'écartent du kit tel qu'il est publié sur
claude.ai/design. Une resynchronisation ne doit pas les écraser sans demander.

| Écart | Le design system dit | Le site fait | Pourquoi |
| --- | --- | --- | --- |
| Arc du héros | `ArcPanel` par défaut `40% 100%` | `sweep="15% 100%"` | Le défaut creuse trop et ampute la photographie. Le balayage reste pleine hauteur, mais le rayon horizontal est réduit. |
| Photographie du héros | Photo non traitée | Fond `#6B5238` + `mix-blend-mode: overlay` | La photo se pose dans les tons du cabinet au lieu de trancher avec le papier. |
| Bouton du héros | Bouton plein (`primary`) | Variante `shadow` : papier, filet, ombre chaude | Demande du cabinet. L'emphase vient de l'ombre, pas d'un aplat. |
| Chapô du héros | « Cabinet bruxellois en droit… » | « **Egidia est un** cabinet bruxellois en droit… » | Demande du cabinet. À noter : la règle de voix proscrit la troisième personne — ici elle sert d'identification en ouverture, pas de posture. |
| Cadrage du héros | Photo non retouchée | `brightness(1.09)` + `scale(1.18)`, origine au coin supérieur droit | Recentre le groupe dans le cadre et lui donne de la présence. |
| Filet sous le héros | `border-bottom` sur la section | Aucun filet | La bande sauge doit enchaîner sans ligne claire. |
| Filets de marge | `--line-page-rule: rgba(122,107,90,.38)` | `#B2A497` | Filets extérieurs plus présents. Surcharge dans `src/styles/tokens.css`. |
| Polices | `tokens/fonts.css` — `@import` vers `fonts.googleapis.com` | `src/styles/fonts.css` — `@font-face` locales, fichiers dans `src/fonts/` | Un `@import` distant envoyait l'IP de chaque visiteur à Google à chaque page. Le miroir à la racine n'est PAS édité : il n'est plus importé, c'est tout. `styles.css` (l'agrégat du design system, à la racine) garde donc l'`@import` distant — le site ne le charge nulle part, aucune page n'en dépend. Une resynchronisation ne doit pas rétablir cet import dans `src/`. |

Les trois premiers écarts portent un commentaire à leur point d'appel dans
`src/pages/index.astro`. Le quatrième s'écarte aussi de
`brand/contenu-site-web.txt`, qui reste la source du reste de la copie.

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

### Aucune fuite

Ne rien collecter ne suffit pas : encore faut-il ne rien laisser PARTIR. Une
personne qui cherche une avocate en droit des étrangers ou en aide à la jeunesse
ne doit apparaître dans les journaux de personne. La règle : **aucun tiers n'est
contacté sans un geste explicite du visiteur.**

- **La carte est sous consentement.** Aucun `<iframe>` dans le HTML servi ;
  Google n'est appelé qu'au clic sur « Afficher le plan », et l'écran d'appel
  dit ce que cela transmet. Le consentement **n'est pas mémorisé** — ni cookie,
  ni `localStorage`, ni `sessionStorage` : le site ne garde rien sur la machine
  du visiteur, pas même le souvenir d'avoir dit oui. Vérifié dans le
  navigateur : au repos, AUCUNE requête ne sort de l'origine du site, zéro
  cookie, zéro entrée de stockage ; après le clic, le seul tiers contacté est
  `www.google.com`.
- **`referrerpolicy="strict-origin-when-cross-origin"`** sur le cadre : Google
  reçoit l'origine (ce dont une clé restreinte par référent a besoin), jamais le
  chemin de la page consultée.
- **Les liens sortants ne partent qu'au clic** — liens utiles, profils
  LinkedIn. Un lien ne charge rien.
- **Aucune mesure d'audience, aucune balise, aucun CDN.** Les icônes et les
  images sont servies par le site lui-même.
- **Les polices sont servies par le site.** `tokens/fonts.css` les importait de
  `fonts.googleapis.com`, ce qui envoyait l'adresse IP de CHAQUE visiteur à
  Google à CHAQUE page, sans clic et sans recours — la même transmission que la
  carte, en pire, puisqu'elle était inconditionnelle. Les quatre fichiers vivent
  maintenant dans `src/fonts/` et les `@font-face` dans `src/styles/fonts.css`.
  Vite les empreinte et leur pose le `base` : aucun chemin n'est écrit à la main.

**Vérifié dans le navigateur** : page chargée, aucune requête ne sort de
l'origine du site — pas une police, pas une balise, pas un pixel. La carte au
repos ne fait rien partir non plus ; la première requête vers un tiers est celle
que le visiteur a demandée.

Tout cela est écrit en clair sur `/vie-privee`, qui nomme Google comme
destinataire de la seule requête que le site puisse déclencher, et l'hébergeur
comme le seul destinataire que le visiteur ne choisit pas. Le fournisseur du
plan y est lu depuis `data/legal.js` (`CARTE`) : si le fond de carte change,
l'écran de consentement de `MapEmbed` et la page ne peuvent pas diverger sans
qu'on s'en aperçoive.

### La loi des marges

1. Les filets sont à `--page-margin` des bords, **fixes et continus**.
2. **Le texte ne les touche jamais** : il commence à `--content-inset`
   (`--page-margin` + `--gutter`). Aucun composant n'écrit son propre `calc()`
   contre `--page-margin` ; si vous en trouvez un, c'est un bug.
3. **Seule la photographie franchit un filet.** Ni bande, ni carte, ni bouton.
4. **Quatre relations verticales, et pas une de plus.** L'espace dit le LIEN
   entre deux textes, jamais leur position dans la page : `--stack-bind` (8px —
   un label et son titre, des lignes d'adresse : c'est un seul objet),
   `--stack-tight` (16px — un titre et son chapô), `--stack` (32px — deux
   paragraphes), `--stack-loose` (48px — deux blocs, et l'air AU-DESSUS d'un
   titre). Rien d'autre : ni 12, ni 14, ni 20, ni 28. Si un espace semble faux,
   c'est la taille du texte qui l'est.
5. **Un titre a toujours plus d'air au-dessus de lui qu'en dessous.** C'est la
   règle qui rend une page scannable : elle fait lire « ce titre et ce
   paragraphe sont une seule chose » plutôt que « ce titre appartient à ce qui
   le précède ». Quand elle est inversée, l'œil regroupe vers le haut et le
   paragraphe se retrouve orphelin.
6. **L'espace est porté par la PILE, jamais par l'enfant.** Un enfant ne sait
   pas ce qui le précède ; la pile, si. On pose la classe `pile` sur le
   conteneur — `src/styles/pile.css` fait le reste — et on n'écrit AUCUN
   `margin-top` dans un composant.

   Corollaire : **plus de `gap` sur une pile de textes.** Un gap est aveugle, il
   donne la même valeur à toutes les paires, et il s'AJOUTE aux marges des
   enfants (les marges d'un enfant flex ne fusionnent pas). C'est cette addition
   silencieuse qui donnait 48px là où le code écrivait `--stack`.

   Trois échappatoires nommées, et rien d'autre : `eg-title` (un `<p>` qui tient
   le rôle d'un titre sans en avoir le sens), `pile-block` (un bloc qui s'ouvre :
   bouton, liste), `pile-foot` (posé au bas d'une cellule). Piège : `margin: 0
   auto` sur un enfant de pile écrase le pas vertical — écrire `margin-inline`.
7. Sections séparées par `--section-y`, `--section-y-sm` pour un héros ou une
   bande compressée.

Le cadre est **fluide** : `src/styles/tokens.css` fait glisser `--page-margin`
et `--gutter` de 20/16 à 48/32 par `clamp()`. La loi ne change pas — seules les
deux valeurs varient, et sans marche. Voir « Comment le site se replie ».

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

- **Fira Sans Extra Condensed 700 pour tout titre**, la même en 500 pour les
  sous-titres (noms de matières, d'avocates, de points de contact), Source
  Sans 3 pour le reste. La famille d'affichage n'est servie qu'en ces deux
  graisses : n'en demander aucune autre, un gras synthétique sur une condensée
  se voit.
- **Playfair Display ne subsiste que pour le mot-symbole** — EGIDIA dans
  l'en-tête, et rien d'autre. C'est la signature du cabinet, pas un niveau de
  titre ; elle a son propre token (`--font-wordmark`) pour ne pas suivre
  `--font-display` la prochaine fois que celui-ci change.
- **Le corps ne descend jamais sous 18px**, 20px par défaut.
- **La famille d'affichage jamais sous 22px**, jamais pour un label
  d'interface. Source Sans jamais pour un titre.
- **Toute largeur calculée sur un titre se remesure quand la famille
  d'affichage change** : une condensée n'occupe pas la place d'une empattement,
  et c'est le repli le plus large de la pile — pas la webfont — qui fixe la
  borne (voir `.band-title` dans l'accueil).
- **Mesures plafonnées** : 66ch en prose, 44ch pour un chapô.
- **Le mono est réservé aux références légales** (`L. 425-9 CESEDA`).
- Le texte est aligné à gauche partout, **sauf** dans une `Band` pleine largeur,
  qui centre une mesure courte — l'unique exception autorisée.

### Interaction

- **Le survol couche la surface.** Tout cadre cliquable se couche dans un voile
  de caramel (`--survol-aplat`) en 140ms ; son nom passe au brun profond, son
  carré s'allume en caramel, et son contenu avance de 3px en 220ms. C'est le
  signal principal de ce qui est cliquable : ne jamais l'adoucir.
- **L'encre monte d'un cran, elle ne s'aplatit pas.** L'étiquette rejoint le
  brun moyen (par le token `--text-label`, jamais par un sélecteur), le nom le
  brun profond, le résumé ne bouge pas. Une cellule survolée garde les trois
  niveaux qu'elle a au repos — c'est ce que l'inversion d'avant détruisait.
- **Un fond sombre repose le lit chez lui.** Le voile est un premier cran sur du
  clair ; sur du sauge obscur il ferait une tache. Seul le panneau des
  honoraires a ce cas, et il redéclare `--survol-aplat`.
- **L'opacité n'est jamais un état de survol.** Rien ne se soulève, rien ne
  grossit, rien ne prend une ombre plus large.
- **Le décalage ne prend que les enfants directs**, jamais l'élément : une
  cellule qui se translate emporte ses filets et découd le registre. Un lien
  qui n'a que du texte ne se décale donc pas — il reçoit le lit et l'encre.
  Sous `prefers-reduced-motion`, le décalage se retire entièrement ; le voile et
  l'encre restent, parce qu'ils sont l'état et non le mouvement.
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

