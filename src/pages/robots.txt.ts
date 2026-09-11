// robots.txt, généré au build pour que l'adresse du plan du site suive
// `site` + `base` sans qu'on y pense si le domaine change.
//
// Un robots.txt ne vaut qu'à la RACINE de l'origine. Servi depuis
// www.egidia-avocates.be/robots.txt, il est lu, et le `Sitemap:` avec. (Sur
// l'ancienne project page ffosset.github.io/egidia-avocates/, il ne pouvait
// pas l'être — une project page n'écrit pas à la racine de l'origine.)
import type { APIRoute } from 'astro';
import { absolu } from '../lib/base.js';

export const GET: APIRoute = () => {
  const corps = ['User-agent: *', 'Allow: /', '', `Sitemap: ${absolu('/sitemap-index.xml')}`, ''].join('\n');
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
