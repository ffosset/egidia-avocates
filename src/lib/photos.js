/**
 * Les photographies, résolues depuis leur chemin « propre ».
 *
 * Les données (`src/data/`) désignent une photo par un chemin à la racine —
 * `/photos/floriane-delplancke.jpg` — comme si elle était servie telle quelle.
 * Elle ne l'est plus : les fichiers vivent dans `src/assets/photos/`, où Astro
 * peut les REDIMENSIONNER et les RECODER au build (AVIF, WebP, plusieurs
 * largeurs), au lieu de livrer 300 Ko de JPEG à un téléphone qui en affiche
 * 400 px de large. Le `publicDir` (`assets/`) ne garde que ce qui doit être
 * servi à l'octet près — le logo, le favicon, et bientôt l'image de partage.
 *
 * Cette fonction fait le pont : le chemin des données entre, les métadonnées
 * de l'image sortent (`ImageMetadata` : src empreinté, largeur, hauteur,
 * format), prêtes pour `<Picture>` ou `getImage()`. Un chemin inconnu rend
 * `undefined` — et `ArcImage` montre alors son cadre « à fournir », comme
 * avant, plutôt que de casser le build.
 */
const FICHIERS = import.meta.glob('../assets/photos/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

export function photo(chemin) {
  if (typeof chemin !== 'string' || !chemin.startsWith('/photos/')) return undefined;
  return FICHIERS[`../assets${chemin}`];
}
