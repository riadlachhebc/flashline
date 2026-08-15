/* =====================================================================
   ⚠️  À COMPLÉTER AVANT LA MISE EN LIGNE
   ---------------------------------------------------------------------
   Ces informations sont OBLIGATOIRES en France :
   • Mentions légales  → art. 6-III de la LCEN (loi n° 2004-575)
   • Médiateur         → art. L.612-1 du Code de la consommation (B2C)
   Des mentions absentes ou fausses engagent la responsabilité de
   l'éditeur. Ne laissez aucun « [À compléter] » en production.
   ===================================================================== */

export const LEGAL = {
  // --- Éditeur du site ---
  raisonSociale: '[À compléter — raison sociale ou nom et prénom de l’exploitant]',
  formeJuridique: '[À compléter — ex. auto-entrepreneur, EURL, SARL, SAS]',
  capital: '[À compléter — capital social, uniquement si société]',
  siret: '[À compléter — numéro SIRET ou RCS + ville d’immatriculation]',
  tva: '[À compléter — n° TVA intracommunautaire, ou « non applicable, art. 293 B du CGI »]',
  adresse: '[À compléter — adresse complète du siège]',
  telephone: '[À compléter — numéro de téléphone]',
  directeurPublication: '[À compléter — nom du directeur de la publication]',

  // --- Hébergeur (nom, adresse et téléphone sont obligatoires) ---
  // Si vous déployez sur Vercel : Vercel Inc., 440 N Barranca Ave #4133,
  // Covina, CA 91723, États-Unis — à confirmer selon votre hébergement réel.
  hebergeur: {
    nom: 'FlashLine Team',
    adresse: '[À compléter — adresse de l’hébergeur]',
    telephone: '[À compléter — téléphone de l’hébergeur]',
  },

  // --- Médiation de la consommation (obligatoire pour la vente aux particuliers) ---
  mediateur: {
    nom: '[À compléter — nom du médiateur de la consommation]',
    site: '[À compléter — site du médiateur]',
    adresse: '[À compléter — adresse postale du médiateur]',
  },

  // --- Dates d'entrée en vigueur affichées sur les pages ---
  maj: '13 août 2026',
};

/** Vrai si au moins un champ obligatoire n'a pas été renseigné. */
export function hasPlaceholders(obj = LEGAL) {
  return Object.values(obj).some((v) =>
    typeof v === 'string' ? v.includes('[À compléter') : v && typeof v === 'object' && hasPlaceholders(v)
  );
}

/** Vrai si la valeur est réellement renseignée (et non un gabarit). */
export const isFilled = (v) => typeof v === 'string' && v.trim() !== '' && !v.includes('[À compléter');

/**
 * Renvoie la valeur si elle est renseignée, sinon `fallback` (null par défaut).
 * Permet de n'afficher que les mentions réellement disponibles : aucun
 * « [À compléter] » n'apparaît jamais côté visiteur, et les blocs
 * réapparaissent automatiquement dès que lib/legal.js est rempli.
 */
export const val = (v, fallback = null) => (isFilled(v) ? v : fallback);
