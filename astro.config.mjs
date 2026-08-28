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
const LAP = '(max-width: 1000px)';

const injectBreakpoints = {
  postcssPlugin: 'egidia-breakpoints',
  Once(root, { atRule }) {
    root.prepend(atRule({ name: 'custom-media', params: `--lap ${LAP}` }));
  },
};

export default defineConfig({
  site: 'https://www.egidia-avocates.be', // TODO: confirmer le domaine définitif
  publicDir: './assets',
  build: { format: 'directory' },
  vite: {
    css: { postcss: { plugins: [injectBreakpoints, postcssCustomMedia()] } },
  },
});
