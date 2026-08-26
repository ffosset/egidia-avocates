import { defineConfig } from 'astro/config';

// Le dossier `assets/` du design system EST le publicDir : il ne contient que
// le logo et les photographies redimensionnées, servis à la racine du site
// (`/logo.svg`, `/photos/equipe.jpg`). Les originaux pleine résolution vivent
// dans `_originals/`, hors du build.
export default defineConfig({
  site: 'https://www.egidia-avocates.be', // TODO: confirmer le domaine définitif
  publicDir: './assets',
  build: { format: 'directory' },
});
