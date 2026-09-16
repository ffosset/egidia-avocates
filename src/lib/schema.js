/**
 * Les données structurées (schema.org, en JSON-LD) — ce que le site dit de
 * lui-même aux moteurs, dans leur langue. Elles se déduisent des mêmes
 * fichiers de données que les pages : rien n'est saisi deux fois, et une
 * avocate ajoutée à `avocates.js` a sa fiche `Person` sans qu'on y pense.
 *
 * Trois règles.
 * 1. Tout ce qui sort est une adresse ABSOLUE (`absolu()`), jamais un chemin :
 *    un moteur ne connaît pas notre base.
 * 2. Chaque entité porte un `@id` stable, pour que les pages se citent entre
 *    elles sans se répéter : la fiche d'une avocate dit `worksFor: {@id du
 *    cabinet}`, et le cabinet, sur l'accueil, liste ses membres par `@id`.
 * 3. On n'affirme que ce qui est vrai ET publié : pas d'horaires (on reçoit
 *    sur rendez-vous), pas de fourchette de prix, pas de note. Une donnée
 *    structurée qui ne se retrouve pas sur la page est une donnée que Google
 *    pénalise.
 */
import { absolu } from './base.js';
import { CONTACT } from '../data/site.js';
import { AVOCATES, telE164 } from '../data/avocates.js';
import { MATIERES } from '../data/matieres.js';
import { EDITEUR, ORDRE } from '../data/legal.js';

const ID_CABINET = () => absolu('/#cabinet');
const ID_SITE = () => absolu('/#site');
// Les adresses de page finissent par « / », comme leurs canoniques
// (`build.format: 'directory'`) : un moteur compare les deux au signe près.
const urlPersonne = (a) => absolu(`/avocates/${a.slug}/`);
const urlService = (m) => absolu(`/matieres/${m.id}/`);
const idPersonne = (a) => `${urlPersonne(a)}#personne`;
const idService = (m) => `${urlService(m)}#service`;

const NOM = "Cabinet d'avocates Egidia";

/** Toutes les langues parlées au cabinet, sans doublon, dans l'ordre d'apparition. */
const langues = () => [...new Set(AVOCATES.flatMap((a) => a.langues))];

/** Le cabinet, en entier — pour l'accueil. `image` : l'adresse absolue de la
    photographie de l'équipe, résolue par la page (`getImage` est asynchrone,
    et les photos n'ont plus d'adresse fixe : voir src/lib/photos.js). */
export function cabinet({ image } = {}) {
  return {
    '@type': ['LegalService', 'LocalBusiness'],
    '@id': ID_CABINET(),
    name: NOM,
    alternateName: 'Egidia',
    url: absolu('/'),
    logo: absolu('/logo-egidia.png'),
    ...(image && { image }),
    email: CONTACT.email,
    ...(EDITEUR.bce && { vatID: EDITEUR.bce }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.postale.rue,
      postalCode: CONTACT.postale.codePostal,
      addressLocality: CONTACT.postale.ville,
      addressCountry: CONTACT.postale.pays,
    },
    geo: { '@type': 'GeoCoordinates', latitude: CONTACT.coords[0], longitude: CONTACT.coords[1] },
    areaServed: [
      { '@type': 'City', name: 'Bruxelles' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    knowsLanguage: langues(),
    knowsAbout: MATIERES.map((m) => m.titre),
    // Les matières et les avocates sont citées par `@id` : leurs nœuds complets
    // sont ceux des pages de matière et d'avocate. L'accueil, qui les liste
    // toutes, embarque les services en entier (`services()`) et les avocates
    // en trois lignes, pour que le graphe se lise sans suivre un lien.
    makesOffer: MATIERES.map((m) => ({ '@type': 'Offer', itemOffered: { '@id': idService(m) } })),
    member: AVOCATES.map(personneRef),
    memberOf: ordre(),
  };
}

/** Toutes les matières, en entier — l'accueil les embarque avec le cabinet. */
export const services = () => MATIERES.map(service);

/** Le cabinet, en trois lignes — pour que les autres pages puissent le citer. */
export function cabinetRef() {
  return { '@type': ['LegalService', 'LocalBusiness'], '@id': ID_CABINET(), name: NOM, url: absolu('/') };
}

export function siteWeb() {
  return {
    '@type': 'WebSite',
    '@id': ID_SITE(),
    url: absolu('/'),
    name: 'Egidia',
    inLanguage: 'fr-BE',
    publisher: { '@id': ID_CABINET() },
  };
}

function ordre() {
  return { '@type': 'Organization', name: ORDRE.nom, url: `https://${ORDRE.url}` };
}

/** Une avocate, en trois lignes — pour la liste des membres du cabinet. */
function personneRef(a) {
  return { '@type': 'Person', '@id': idPersonne(a), name: a.nom, url: urlPersonne(a) };
}

/** Une avocate. `image` : l'adresse absolue de son portrait, résolue par la page. */
export function personne(a, { image } = {}) {
  const coupe = a.nom.lastIndexOf(' ');
  const p = {
    '@type': 'Person',
    '@id': idPersonne(a),
    name: a.nom,
    givenName: a.nom.slice(0, coupe),
    familyName: a.nom.slice(coupe + 1),
    honorificPrefix: 'Maître',
    jobTitle: 'Avocate',
    url: urlPersonne(a),
    ...(image && { image }),
    email: a.email,
    worksFor: { '@id': ID_CABINET() },
    memberOf: ordre(),
    knowsLanguage: a.langues,
    knowsAbout: a.motsCles,
  };
  if (a.tel) p.telephone = telE164(a.tel);
  if (a.tva) p.vatID = a.tva;
  if (a.linkedin) p.sameAs = [a.linkedin];
  return p;
}

/** Une matière, comme prestation du cabinet. */
export function service(m) {
  return {
    '@type': 'Service',
    '@id': idService(m),
    name: m.titre,
    serviceType: m.titre,
    description: m.resume,
    url: urlService(m),
    provider: { '@id': ID_CABINET() },
    areaServed: { '@type': 'City', name: 'Bruxelles' },
    availableLanguage: langues(),
  };
}

/** Une page datée — les deux pages légales, dont la date de mise à jour est
    une information en soi. `dateModified` en ISO, tel que `MAJ` l'écrit. */
export function pageDatee({ chemin, nom, description, dateModified }) {
  return {
    '@type': 'WebPage',
    '@id': absolu(chemin),
    url: absolu(chemin),
    name: nom,
    description,
    inLanguage: 'fr-BE',
    dateModified,
    isPartOf: { '@id': ID_SITE() },
    about: { '@id': ID_CABINET() },
  };
}

/** Le fil d'Ariane. `items` : [{ label, href? }], le dernier étant la page courante. */
export function filAriane(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => {
      const e = { '@type': 'ListItem', position: i + 1, name: it.label };
      if (it.href) e.item = absolu(it.href);
      return e;
    }),
  };
}

/** Le graphe d'une page, prêt à être écrit dans un <script type="application/ld+json">.
    `</` est échappé : une chaîne qui contiendrait « </script> » fermerait la balise. */
export function graphe(...noeuds) {
  const doc = { '@context': 'https://schema.org', '@graph': noeuds.flat() };
  return JSON.stringify(doc).replace(/</g, '\\u003c');
}
