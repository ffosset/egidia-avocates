// Contact, photographies et liens transverses.
// Source de vérité : brand/contenu-site-web.txt.

import { MATIERES } from './matieres.js';

export const CONTACT = {
  adresse: 'Rue de Livourne 13, 1060 Bruxelles (1er étage)',
  acces: 'Accessible aux personnes à mobilité réduite',
  metro: 'Métro Louise',
  tram: 'Tram arrêt Stephanie',
  email: 'info@egidia-avocates.be',
  // Le cabinet n'a pas de numéro général : chaque avocate a une ligne directe.
  telephone: null,
  // Coordonnées approximatives, déduites de l'adresse — à confirmer par le cabinet.
  coords: [50.828, 4.3562],
};

export const PHOTOS = {
  equipe: '/photos/egidia-team.jpg',
  equipeAlt: '/photos/equipe.jpg', // equipe-2.jpg jamais fourni — repli sur la principale
  ambiance: '/photos/ambiance-terrasse.jpg',
};

export const ALT = {
  equipe:
    'Les sept avocates du cabinet Egidia, devant le Palais de justice de Bruxelles',
  ambiance:
    'Quatre avocates du cabinet en conversation sur la terrasse, Bruxelles en arrière-plan',
};

export const LIENS_ACCUEIL = [
  [
    'Trouver un avocat et comprendre ses droits',
    [
      ['Avocats.be — combien coûte un avocat', 'avocats.be/fr/tout-savoir/combien-ca-coute'],
      [
        "Bureau d'aide juridique de Bruxelles — conditions de l'aide juridique",
        'www.aidejuridiquebruxelles.be',
      ],
    ],
  ],
  [
    'Aide et orientation',
    [
      ["Droits Quotidiens — l'information juridique en langage clair", 'droitsquotidiens.be'],
      ['Bruxelles Social — annuaire des services sociaux bruxellois', 'social.brussels'],
      ['CPAS de votre commune', 'cpasbxl.brussels'],
    ],
  ],
];

// L'ordre suit celui des sections de l'accueil.
// « Services » porte en plus la liste de ses matières : l'intitulé reste un
// lien vers la section de l'accueil — le déroulant n'est qu'un raccourci vers
// chaque matière, jamais le seul chemin. La liste se déduit de `matieres.js`,
// pour qu'une matière ajoutée là apparaisse ici sans qu'on y pense.
export const NAV = [
  {
    href: '/#matieres',
    label: 'Services',
    enfants: MATIERES.map((m) => ({ href: `/matieres/${m.id}`, label: m.titre })),
  },
  { href: '/#equipe', label: 'Équipe' },
  { href: '/#honoraires', label: 'Honoraires' },
  { href: '/#contact', label: 'Contact' },
];
