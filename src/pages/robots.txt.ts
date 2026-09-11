// robots.txt, généré au build pour que l'adresse du plan du site suive
// `site` + `base` sans qu'on y pense le jour du changement de domaine.
//
// LIMITE, tant que le site vit sur ffosset.github.io : un robots.txt ne vaut
// qu'à la RACINE de l'origine (ffosset.github.io/robots.txt), et une project
// page ne peut pas y écrire. Ce fichier est donc servi mais pas lu — ce qui ne
// bloque rien, l'absence de robots.txt autorise tout. Le plan du site, lui, se
// déclare à la main dans la Search Console. Sur egidia-avocates.be, ce fichier
// prend sa place et le `Sitemap:` est lu.
import type { APIRoute } from 'astro';
import { absolu } from '../lib/base.js';

export const GET: APIRoute = () => {
  const corps = ['User-agent: *', 'Allow: /', '', `Sitemap: ${absolu('/sitemap-index.xml')}`, ''].join('\n');
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
