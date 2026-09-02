// Documents à produire pour l'aide juridique.
// Transcrit mot pour mot de brand/contenu-site-web.txt, section
// « Page Documents pour aide juridique ».

// Un document général peut porter une MISE EN GARDE — elle appartient au
// document, pas à la liste : l'AER est le seul des deux qu'on confond avec un
// autre papier, et l'avertissement ne veut rien dire loin de lui.
export const GENERAUX = [
  { doc: "Composition de ménage (datée de moins d'un mois)" },
  {
    doc: 'Dernier Avertissement-Extrait de Rôle (AER)',
    garde: {
      titre: "Ce n'est pas la proposition de déclaration simplifiée",
      texte:
        "L'Avertissement-Extrait de Rôle est le document définitif. La proposition de " +
        "déclaration simplifiée n'est qu'un calcul provisoire et ne sera pas acceptée.",
    },
  },
];

// Les situations du sélecteur. L'`id` est une ancre stable : il est posé sur le
// PANNEAU, pas sur le `<details>`, parce qu'un navigateur n'ouvre un volet
// replié que si la cible est à l'intérieur — c'est ce qui permet d'envoyer
// quelqu'un droit sur sa situation, déjà ouverte. Il ne se dérive pas du titre :
// un intitulé qu'on reformule ne doit pas casser un lien déjà donné.
export const REVENUS = [
  {
    id: 'salarie',
    titre: 'Salarié',
    docs: [
      '3 dernières fiches de paie',
      'Fiche de pécule de vacances (mai)',
      "Fiche de prime de fin d'année (décembre)",
    ],
  },
  {
    id: 'interimaire',
    titre: 'Intérimaire',
    docs: [
      "Attestation du bureau d'intérim (revenus nets des 3 derniers mois)",
      "Prime de fin d'année",
    ],
  },
  {
    id: 'chomage',
    titre: 'Chômeur·se',
    docs: ['Attestation ONEM (3 derniers mois)'],
  },
  {
    id: 'mutualite',
    titre: 'Mutualité',
    docs: [
      'Attestation de la mutuelle (3 derniers mois)',
      "Prime de bien-être si en incapacité de travail depuis un an ou plus (versée en mai) — sinon document du pécule de vacances de l'année précédente",
    ],
  },
  {
    id: 'cpas',
    titre: 'Bénéficiaire CPAS',
    docs: ["Attestation CPAS (datée de moins d'un mois)"],
  },
  {
    id: 'pension',
    titre: 'Pensionné·e',
    docs: ["Attestation ONP avec montant et type de pension (datée de moins d'un mois)"],
  },
  {
    id: 'etudiant',
    titre: 'Étudiant·e',
    docs: ["Attestation d'inscription scolaire"],
  },
  {
    id: 'sans-revenu',
    titre: 'Sans revenu',
    docs: [
      "Attestation de non-aide du CPAS (datée de moins d'un mois)",
      "Attestation de non-aide du Chômage (datée de moins d'un mois)",
    ],
  },
  {
    id: 'sans-titre-de-sejour',
    titre: 'Sans titre de séjour',
    docs: ['Carte médicale urgente émise par le CPAS'],
  },
];

export const LIENS_PRODEO = [
  ['Ordre français des avocats du barreau de Bruxelles', 'www.barreaudebruxelles.be'],
  ["Bureau d'aide juridique de Bruxelles", 'www.aidejuridiquebruxelles.be'],
  ['Wikifin — assurance protection juridique', 'www.wikifin.be'],
  ['Avocats.be — combien coûte un avocat', 'avocats.be/fr/tout-savoir/combien-ca-coute'],
];
