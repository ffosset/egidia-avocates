// Les cinq matières préférentielles du cabinet.
// Source de vérité : brand/contenu-site-web.txt. Ne pas inventer de contenu ici.

export const MATIERES = [
  {
    id: 'etrangers',
    titre: 'Droit des étrangers',
    nb: 7,
    resume:
      "Séjour, asile, regroupement familial, recours contre un ordre de quitter le territoire, nationalité.",
    intro:
      "En droit des étrangers, les délais de recours sont très courts et un délai manqué se rattrape difficilement. Consultez-nous dès la réception d'une décision. Nous vous accompagnons devant les autorités administratives comme devant les juridictions de recours.",
    traite: [
      "Demande d'asile",
      'Regroupement familial',
      'Titres et renouvellements de séjour',
      "Recours contre un ordre de quitter le territoire / interdiction d'entrée",
      'Régularisation',
      'Détention et éloignement',
      'Nationalité',
    ],
    avocates: [
      'Floriane Delplancke',
      'Margaux Doyen',
      'Farah Feguy',
      'Cécile Ghymers',
      'Déborah Unger',
      'Camille Vandeput',
      'Marine Vryens',
    ],
    liens: [
      ['Office des Étrangers', 'www.ibz.be'],
      ["Agence fédérale pour l'accueil des demandeurs d'asile (Fedasil)", 'www.fedasil.be'],
      ['Commissariat général aux réfugiés et aux apatrides (CGRA)', 'www.cgra.be'],
      ['Conseil du contentieux des étrangers (CCE)', 'www.rvv-cce.be'],
      ['Agentschap Integratie en Inburgering', 'www.agii.be'],
      ['Myria — Centre fédéral Migration', 'www.myria.be'],
      ["PAG-ASA — accompagnement des victimes de la traite des êtres humains", 'pag-asa.be'],
      ['Plate-forme Mineurs en exil', 'www.mineursenexil.be'],
    ],
  },
  {
    id: 'jeunesse',
    titre: 'Droit de la jeunesse',
    nb: 4,
    resume:
      "Suivi par le SAJ, suivi par le Tribunal de la Jeunesse et le SPJ, mineurs en danger, mineurs en conflit avec la loi, audition à la police.",
    intro:
      "Quand un enfant est en danger ou qu'un fait qualifié infraction lui est reproché, il a droit à sa propre défense. Nous représentons l'enfant, et nous accompagnons les parents dans les procédures qui les concernent.",
    traite: [
      "Mesures d'aide et de protection",
      'Placement et retour en famille',
      "Audition de l'enfant",
      'Défense du mineur devant le tribunal de la jeunesse',
      'Relations avec le SAJ et le SPJ',
      'Audition à la police',
    ],
    avocates: ['Floriane Delplancke', 'Cécile Ghymers', 'Déborah Unger', 'Camille Vandeput'],
    liens: [
      ["Service d'Aide à la Jeunesse (SAJ)", 'aidealajeunesse.cfwb.be'],
      ["Bruxelles-J — Centre d'information pour les jeunes", 'www.bruxelles-j.be'],
      ['Service Droit des Jeunes (SDJ)', 'www.sdj.be'],
      ['Infor Jeunes Bruxelles', 'www.inforjeunesbruxelles.be'],
      ['Tes droits ton avocat', 'tesdroitstonavocat.be'],
    ],
  },
  {
    id: 'aide-sociale',
    titre: "Droit à l'aide sociale",
    nb: 3,
    resume:
      "CPAS : revenu d'intégration, refus ou suspension d'aide, récupération d'indus, aide médicale urgente, questions d'accueil.",
    intro:
      "Un refus du CPAS est une décision administrative, pas un verdict : elle se conteste devant le tribunal du travail. Beaucoup y renoncent faute de le savoir.",
    traite: [
      "Revenu d'intégration",
      "Refus ou suspension d'aide",
      "Récupération d'indus",
      'Aide médicale urgente',
      'Recours devant le tribunal du travail',
    ],
    avocates: ['Margaux Doyen', 'Camille Vandeput', 'Marine Vryens'],
    liens: [
      ['Social.Brussels — offre sociale et de santé à Bruxelles', 'social.brussels'],
      ['CPAS de Bruxelles', 'cpasbxl.brussels'],
      ['Samusocial Bruxelles', 'samusocial.be'],
    ],
  },
  {
    id: 'mena',
    titre: 'Droit des MENA',
    nb: 2,
    resume:
      "Tutelle, détermination de l'âge, demande de séjour, hébergement, scolarité, regroupement familial.",
    intro:
      "Arriver seul et mineur dans un pays inconnu, c'est affronter deux procédures à la fois : celle du séjour et celle de la protection. Nous assurons le lien entre les deux.",
    traite: [
      "Signalement et désignation d'un tuteur",
      "Contestation des décisions en matière de détermination de l'âge",
      'Recherche de la solution durable',
      'Hébergement et accueil',
      'Passage à la majorité',
    ],
    avocates: ['Cécile Ghymers', 'Déborah Unger'],
    // Marqué [Ajouter] dans le PDF du cabinet — toujours vide.
    liens: [],
  },
  {
    id: 'famille',
    titre: 'Droit de la famille',
    nb: 2,
    resume:
      "Séparation, divorce, hébergement des enfants, pensions alimentaires, violences intrafamiliales, filiation, refus de mariage, rectification d'un acte d'état civil.",
    intro: 'Notre rôle est de préserver votre sécurité et celle de vos enfants.',
    traite: [
      'Divorce et séparation',
      'Hébergement des enfants',
      'Contributions alimentaires',
      'Autorité parentale',
      'Violences intrafamiliales',
      'Filiation',
      'Refus de mariage / refus de reconnaissance',
      "Rectification d'actes d'état civil",
    ],
    avocates: ['Floriane Delplancke', 'Farah Feguy'],
    liens: [
      ['Planning Familial', 'www.monplanningfamilial.be'],
      ['Ligue des familles', 'liguedesfamilles.be'],
      ['Centre de Prévention des Violences Conjugales et Familiales', 'www.cpvcf.org'],
      ["Office de la Naissance et de l'Enfance (ONE)", 'www.one.be'],
      ['Écoute Violences Conjugales', 'www.ecouteviolencesconjugales.be'],
      ['Centre de Prise en charge des Violences Sexuelles (CPVS)', 'www.violencessexuelles.be'],
    ],
  },
];

export const getMatiere = (id) => MATIERES.find((m) => m.id === id);

/** Les matières du cabinet que cette avocate pratique, dans l'ordre du site. */
export const matieresDe = (nom) =>
  MATIERES.filter((m) => m.avocates.includes(nom));
