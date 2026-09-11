import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import postcssCustomMedia from 'postcss-custom-media';

// Le dossier `assets/` du design system EST le publicDir : il ne contient que
// ce qui doit être servi à l'octet près, à la racine du site — le logo et le
// favicon (`/logo-egidia.png`, `/favicon.svg`). Les photographies, elles,
// vivent dans `src/assets/photos/` pour qu'Astro les recode au build (voir
// ARCHITECTURE, « Images »). Les originaux pleine résolution vivent dans
// `_originals/`, hors du build.

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
  /* Le site vit à la racine de son propre domaine : pas de `base`. Tout lien
     écrit à la main passe quand même par `withBase()` (src/lib/base.js), qui
     est alors une fonction identité — c'est ce qui a permis la bascule depuis
     la project page ffosset.github.io/egidia-avocates sans toucher aux pages.

     Canoniques, sitemap, robots.txt et données structurées dérivent tous de
     `site`. Le fichier `assets/CNAME` (le publicDir) redit le domaine à
     GitHub Pages à chaque publication, pour qu'un déploiement ne le perde pas.
     L'ancienne adresse github.io est redirigée par GitHub lui-même. */
  site: 'https://www.egidia-avocates.be',
  publicDir: './assets',
  build: { format: 'directory' },
  /* Le plan du site (`sitemap-index.xml` + `sitemap-0.xml`) est généré au
     build à partir des routes ; `robots.txt` (src/pages/robots.txt.ts) le
     déclare. La page 404 en est exclue d'office par l'intégration. */
  integrations: [sitemap()],
  // Astro ne lit pas PORT de lui-même : sans cette ligne, deux sessions de
  // développement se disputent le 4321. Le port reste 4321 par défaut.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    css: { postcss: { plugins: [injectBreakpoints, postcssCustomMedia()] } },
  },
});
