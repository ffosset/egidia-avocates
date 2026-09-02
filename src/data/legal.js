// Les faits que les deux pages légales citent — l'éditeur, l'Ordre, l'hébergeur,
// l'autorité de contrôle. Comme partout, le contenu vit ici et pas dans les
// gabarits ; la prose, elle, reste dans les pages.
//
// Ce que le cabinet n'a pas encore confirmé vaut `null` : la page n'affiche
// alors rien, plutôt qu'un chiffre inventé. Voir ARCHITECTURE,
// « Ce qui manque encore ».

// Datée à la main : une page légale qui ment sur sa date ne vaut rien, et une
// date de build changerait à chaque déploiement sans qu'un mot ait bougé.
export const MAJ = '2 septembre 2026';

export const EDITEUR = {
  nom: "Cabinet d'avocates Egidia",
  // Sept avocates indépendantes, sept numéros d'entreprise (voir `avocates.js`).
  // Aucune structure commune n'a été communiquée : tant que le cabinet n'en
  // déclare pas une, la page dit ce qui est vrai — chacune répond pour elle.
  entite: null,
  bce: null,
};

export const ORDRE = {
  nom: 'Ordre français des avocats du barreau de Bruxelles',
  url: 'www.barreaudebruxelles.be',
};

export const AVOCATS_BE = {
  nom: 'AVOCATS.BE',
  glose: 'Ordre des barreaux francophones et germanophone de Belgique',
  url: 'avocats.be',
};

export const TVA_TAUX = '21 %';

// L'hébergeur est le SEUL destinataire que le visiteur ne choisit pas : il voit
// passer chaque requête. Il est donc nommé, et il change le jour où le cabinet
// confirme son domaine (voir `site` dans astro.config.mjs).
export const HEBERGEUR = {
  nom: 'GitHub Pages',
  societe: 'GitHub, Inc.',
  lieu: 'États-Unis',
};

// Le fournisseur du plan d'accès. Il est écrit ici pour que la page « Vie
// privée » et l'écran de consentement de `MapEmbed` ne puissent pas diverger :
// si la carte change de fond, cette valeur change avec elle.
export const CARTE = {
  fournisseur: 'Google Maps',
  societe: 'Google Ireland Limited',
  // Le nom court, pour les mentions suivantes : « Google Ireland Limited ne
  // voit ni votre adresse IP… » alourdit une phrase qui doit rester nette.
  court: 'Google',
};

export const APD = {
  nom: 'Autorité de protection des données',
  adresse: 'Rue de la Presse 35, 1000 Bruxelles',
  email: 'contact@apd-gba.be',
  url: 'www.autoriteprotectiondonnees.be',
};

export const CONCEPTION = { nom: 'fosset.co', url: 'fosset.co' };
