import { defineConfig } from 'astro/config';
import postcssCustomMedia from 'postcss-custom-media';

// Le dossier `assets/` du design system EST le publicDir : il ne contient que
// le logo et les photographies redimensionnées, servis à la racine du site
// (`/logo.svg`, `/photos/equipe.jpg`). Les originaux pleine résolution vivent
// dans `_originals/`, hors du build.

/* ---- Le point de rupture, en un seul endroit ----
   La quasi-totalité de la mise en page se replie d'elle-même (`auto-fit` et
   `flex-wrap`) : elle n'a aucun point de rupture. Il en reste un, et un seul,
   pour les compositions dessinées à la main — le héros, le registre des
   matières, l'en-tête — là où « côte à côte » cesse d'être possible.

   Une variable CSS ne fonctionne PAS dans un `@media` : `var()` n'y est pas
   résolu. On passe donc par `@custom-media`, que PostCSS remplace au build.
   Astro compile chaque `<style>` de composant séparément, et postcss-custom-media
   ne lit que le fichier courant : le petit greffon ci-dessous injecte la
   définition en tête de CHAQUE feuille avant qu'il ne s'exécute. */
const LAP_MAX = 1000;
const LAP = `(max-width: ${LAP_MAX}px)`;
/* Le complément exact de --lap. Il existe parce que certaines compositions ne
   valent que là où la BARRE de navigation existe : sous --lap elle devient un
   menu, et une colonne alignée sur une de ses cellules s'alignerait sur rien.
   Les deux media dérivent de la même constante — ils ne peuvent pas dériver. */
const DESK = `(min-width: ${LAP_MAX + 1}px)`;

const injectBreakpoints = {
  postcssPlugin: 'egidia-breakpoints',
  Once(root, { atRule }) {
    root.prepend(atRule({ name: 'custom-media', params: `--desk ${DESK}` }));
    root.prepend(atRule({ name: 'custom-media', params: `--lap ${LAP}` }));
  },
};

export default defineConfig({
  /* Publié en *project page* GitHub : le site vit sous un sous-chemin, pas à la
     racine du domaine. `base` doit donc être posé — et tout lien écrit à la main
     doit passer par `withBase()` (src/lib/base.js), qu'Astro n'applique pas seul.
     Le jour où le cabinet confirme son domaine : remettre `site` à
     https://www.egidia-avocates.be et supprimer `base`. `withBase()` redevient
     alors une fonction identité, sans autre changement à faire. */
  site: 'https://ffosset.github.io',
  base: '/egidia-avocates',
  publicDir: './assets',
  build: { format: 'directory' },
  // Astro ne lit pas PORT de lui-même : sans cette ligne, deux sessions de
  // développement se disputent le 4321. Le port reste 4321 par défaut.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    css: { postcss: { plugins: [injectBreakpoints, postcssCustomMedia()] } },
  },
});
