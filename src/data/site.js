// Contact, photographies et liens transverses.
// Source de vérité : brand/contenu-site-web.txt.

import { MATIERES } from './matieres.js';

export const CONTACT = {
  adresse: 'Rue de Livourne 13, 1060 Bruxelles (1er étage)',
  acces: 'Accessible aux personnes à mobilité réduite',
  // Les arrêts, du plus proche au plus lointain. Chaque distance est celle de
  // la MARCHE — relevée sur le réseau piéton d'OpenStreetMap le 2 septembre
  // 2026, portes du 13 rue de Livourne comprises — et arrondie à la centaine
  // de mètres : c'est la seule précision qu'un trajet à pied mérite, et la
  // seule qu'on puisse tenir quand un chantier déplace un trottoir.
  transports: [
    { icone: 'tram-front', nom: 'Tram arrêt Stéphanie', marche: '300 m' },
    { icone: 'train-front-tunnel', nom: 'Métro Louise', marche: '700 m' },
    { icone: 'bus-front', nom: 'Bus 54, arrêt Bailli', marche: '700 m' },
  ],
  // Le planificateur de la STIB n'accepte AUCUN paramètre d'adresse dans son
  // URL : sa page remet départ et destination à zéro au chargement (constaté
  // dans son propre script, le 2 septembre 2026). Le bouton ouvre donc le
  // formulaire vide — et c'est pour cela que l'adresse est écrite juste
  // au-dessus, prête à être recopiée.
  itineraire: 'https://www.stib-mivb.be/home/travel/tripplanner',
  email: 'info@egidia-avocates.be',
  // Le cabinet n'a pas de numéro général : chaque avocate a une ligne directe.
  telephone: null,
  // Relevées sur OpenStreetMap (nœud du bâtiment 13, rue de Livourne), le
  // 2 septembre 2026. Elles remplacent une estimation qui tombait 320 m plus
  // loin. La carte pose son épingle par géocodage de l'adresse ; ces
  // coordonnées sont le repli, et le lieu écrit noir sur blanc.
  coords: [50.83070, 4.35786],
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
    href: '/#services',
    label: 'Services',
    enfants: MATIERES.map((m) => ({ href: `/services/${m.id}`, label: m.titre })),
  },
  { href: '/#equipe', label: 'Équipe' },
  { href: '/#honoraires', label: 'Honoraires' },
  { href: '/#contact', label: 'Contact' },
];
