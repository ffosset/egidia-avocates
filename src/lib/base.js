/**
 * Préfixe un chemin interne par la base de déploiement.
 *
 * Le site est publié sur une *project page* GitHub — https://ffosset.github.io/
 * egidia-avocates/ — donc sous un sous-chemin, pas à la racine du domaine. Or
 * Astro ne réécrit PAS les `href="/…"` ni les `src="/…"` écrits à la main : il
 * ne touche qu'aux ressources qu'il empaquette lui-même. Sans ce préfixe, tous
 * les liens et toutes les photographies pointent une adresse qui n'existe pas.
 *
 * Les données (`src/data/`) gardent des chemins propres, à la racine : elles
 * n'ont pas à connaître l'endroit où le site est hébergé. C'est au rendu que la
 * base s'applique — ici.
 *
 * Ne touche ni aux URL externes, ni à `mailto:`/`tel:`, ni aux ancres nues :
 * elles ne commencent pas par « / ». Idempotent, pour qu'un double appel reste
 * sans effet. Quand la base vaut « / » (domaine propre), la fonction rend le
 * chemin inchangé.
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
