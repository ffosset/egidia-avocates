// Contact, photographies et liens transverses.
// Source de vérité : brand/contenu-site-web.txt.

import { MATIERES } from './matieres.js';
import { AVOCATES } from './avocates.js';

export const CONTACT = {
  adresse: 'Rue de Livourne 13, 1060 Bruxelles (1er étage)',
  acces: 'Accessible aux personnes à mobilité réduite',
  // Les arrêts, du plus proche au plus lointain. Chaque distance est celle de
  // la MARCHE — relevée sur le réseau piéton d'OpenStreetMap le 2 septembre
  // 2026, portes du 13 rue de Livourne comprises — et arrondie à la centaine
  // de mètres : c'est la seule précision qu'un trajet à pied mérite, et la
  // seule qu'on puisse tenir quand un chantier déplace un trottoir.
  // Chaque arrêt est éclaté en ses parts — le mode, les lignes, le nom — pour
  // que l'accueil puisse poser les numéros à côté du glyphe et le nom d'arrêt
  // dessous ; le pied de page les recompose en une phrase (`nomArret`).
  transports: [
    { icone: 'tram-front', mode: 'Tram', lignes: ['8', '92', '93'], arret: 'Stéphanie', marche: '300 m' },
    { icone: 'train-front-tunnel', mode: 'Métro', lignes: ['2', '6'], arret: 'Louise', marche: '700 m' },
    { icone: 'bus-front', mode: 'Bus', lignes: ['54'], arret: 'Bailli', marche: '700 m' },
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

/** « Tram 8, 92 et 93, arrêt Stéphanie » — la forme en une ligne d'un arrêt. */
export function nomArret({ mode, lignes, arret }) {
  const numeros = lignes.length > 1
    ? `${lignes.slice(0, -1).join(', ')} et ${lignes.at(-1)}`
    : lignes[0];
  return `${mode} ${numeros}, arrêt ${arret}`;
}

export const PHOTOS = {
  equipe: '/photos/egidia-team.jpg',
  equipeAlt: '/photos/equipe.jpg', // equipe-2.jpg jamais fourni — repli sur la principale
  ambiance: '/photos/matieres.jpg',
};

export const ALT = {
  equipe:
    'Les sept avocates du cabinet Egidia, devant le Palais de justice de Bruxelles',
  ambiance:
    'La grande roue de la place Poelaert, vue du pied du Palais de justice de Bruxelles',
};

export const LIENS_ACCUEIL = [
  [
    'Comprendre ses droits',
    [
      ['Avocats.be — combien coûte un avocat', 'avocats.be/fr/tout-savoir/combien-ca-coute'],
      [
        "Bureau d'aide juridique de Bruxelles — conditions de l'aide juridique",
        'www.aidejuridiquebruxelles.be',
      ],
      ["Droits Quotidiens — l'information juridique en langage clair", 'droitsquotidiens.be'],
    ],
  ],
  [
    'Soutien additionnel',
    [
      ['Bruxelles Social — annuaire des services sociaux bruxellois', 'social.brussels'],
      ['CPAS de votre commune', 'cpasbxl.brussels'],
      // Le cabinet a donné l'adresse, pas la glose : le nom seul, comme
      // « CPAS de votre commune ». À compléter par le cabinet s'il veut dire
      // en une ligne ce qu'on y trouve.
      ['Atelier des droits sociaux', 'www.atelierdroitssociaux.be'],
    ],
  ],
];

// L'ordre suit celui des sections de l'accueil.
// « Matières » et « Équipe » portent en plus leur liste : l'intitulé reste un
// lien vers la section de l'accueil — le déroulant n'est qu'un raccourci vers
// chaque matière ou chaque avocate, jamais le seul chemin. Les listes se
// déduisent de `matieres.js` et `avocates.js`, pour qu'une entrée ajoutée là
// apparaisse ici sans qu'on y pense.
export const NAV = [
  {
    href: '/#matieres',
    label: 'Matières',
    enfants: MATIERES.map((m) => ({ href: `/matieres/${m.id}`, label: m.titre })),
  },
  {
    href: '/#equipe',
    label: 'Équipe',
    // Le déroulant est trié par nom de famille, mais l'œil lit le bord gauche
    // d'une liste — le prénom. Le nom est donc rendu en `fort`, pour que la
    // clé de tri se voie. Il commence après la dernière espace : les prénoms
    // composés restent entiers.
    enfants: AVOCATES.map((a) => {
      const coupe = a.nom.lastIndexOf(' ');
      return {
        href: `/avocates/${a.slug}`,
        label: a.nom.slice(0, coupe),
        fort: a.nom.slice(coupe + 1),
      };
    }),
  },
  { href: '/#honoraires', label: 'Honoraires' },
  { href: '/#contact', label: 'Contact' },
];
