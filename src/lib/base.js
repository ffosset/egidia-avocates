/**
 * Préfixe un chemin interne par la base de déploiement.
 *
 * Aujourd'hui le site vit à la racine de www.egidia-avocates.be : la base vaut
 * « / » et cette fonction rend le chemin inchangé. Elle reste en place parce
 * qu'Astro ne réécrit PAS les `href="/…"` ni les `src="/…"` écrits à la main —
 * il ne touche qu'aux ressources qu'il empaquette lui-même. Tant que le site a
 * vécu en *project page* GitHub (ffosset.github.io/egidia-avocates/), c'est
 * elle qui posait le sous-chemin ; le jour de la bascule, retirer `base` de
 * astro.config.mjs a suffi. Garder l'habitude : tout chemin interne passe ici.
 *
 * Les données (`src/data/`) gardent des chemins propres, à la racine : elles
 * n'ont pas à connaître l'endroit où le site est hébergé. C'est au rendu que la
 * base s'applique — ici.
 *
 * Ne touche ni aux URL externes, ni à `mailto:`/`tel:`, ni aux ancres nues :
 * elles ne commencent pas par « / ». Idempotent, pour qu'un double appel reste
 * sans effet.
 */
const BASE = import.meta.env.BASE_URL || '/';

export function withBase(path) {
  if (typeof path !== 'string' || path === '') return path;
  if (!path.startsWith('/')) return path;
  if (path.startsWith(BASE)) return path;
  return BASE.replace(/\/$/, '') + path;
}

/**
 * La même chose, en adresse ABSOLUE : `site` + base + chemin. C'est ce que
 * réclament tout ce qui sort du site — canoniques, `og:image`, plan du site,
 * données structurées — là où un chemin relatif ne veut plus rien dire.
 * `SITE` vient de `site` dans astro.config.mjs ; sans lui, on rend le chemin
 * préfixé tel quel plutôt que d'inventer une origine.
 */
const SITE = import.meta.env.SITE;

export function absolu(path) {
  const chemin = withBase(path);
  return SITE ? new URL(chemin, SITE).href : chemin;
}
