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
      "Le droit des étrangers régit l'entrée, le séjour et la protection internationale des personnes non ressortissantes du territoire belge. Notre cabinet accompagne les personnes confrontées à un refus de séjour, à un ordre de quitter le territoire ou engagées dans une procédure d'asile, et les représente devant l'Office des étrangers, le CGRA et le Conseil du contentieux des étrangers.",
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
      "Le droit de la jeunesse concerne la protection des mineurs, qu'ils soient considérés comme étant en danger ou en conflit avec la loi. Notre cabinet représente les mineurs et leurs familles devant le service d'aide à la jeunesse (aide volontaire) ainsi que devant le tribunal de la jeunesse et le service de protection de la jeunesse (aide contrainte), mais aussi devant les forces de l'ordre, en cas d'audition à la police, en veillant au respect de leurs droits tout au long de la procédure.",
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
      "Le droit de l'aide sociale préserve le droit de vivre une vie conforme à la dignité humaine de toute personne présente sur le territoire belge. Notre cabinet assiste les personnes dont l'aide a été refusée ou supprimée par un CPAS et les représente devant les juridictions du travail, y compris lorsque cette question croise une problématique de séjour.",
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
    // Le titre de l'onglet et du résultat de recherche. Personne ne cherche
    // « MENA » sans savoir ce que c'est : le sigle seul ne ramène que les
    // initiés, le développé ramène les tuteurs et les familles.
    titreSeo: 'Droit des MENA · Mineurs étrangers non accompagnés à Bruxelles',
    nb: 2,
    resume:
      "Tutelle, détermination de l'âge, demande de séjour, hébergement, scolarité, regroupement familial.",
    intro:
      "Le droit des mineurs étrangers non accompagnés (MENA) régit la prise en charge, la tutelle et le séjour des mineurs isolés arrivés sur le territoire belge. Notre cabinet accompagne ces jeunes dans leurs démarches de séjour, en lien avec leur tuteur, et les représente devant l'Office des étrangers et le CGRA lorsqu'une demande de protection internationale est introduite.",
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
    intro:
      "Le droit de la famille couvre les relations entre ex-conjoints (mariés ou non), parents et enfants, suite à une séparation, un divorce ou en cas de désaccord sur l'autorité parentale, l'hébergement et les contributions alimentaires. Il couvre également tout ce qui touche à l'état civil des personnes (établissement / contestation de filiation, refus de mariage / cohabitation / reconnaissance, rectification d'un acte d'état civil, nationalité, etc.). Notre cabinet accompagne les personnes dans ces procédures devant le tribunal de la famille.",
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
