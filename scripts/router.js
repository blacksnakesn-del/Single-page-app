
// router.js
import { loadAccueil } from './accueil.js';
import { loadConnexion } from './connexion.js';
import { loadInscription } from './inscription.js';
// import { loadSentour } from './sentour.js';

export function router() {
  const route = location.hash.replace('#', '') || 'connexion'; // par défaut connexion
  if (route === 'accueil') loadAccueil();
  if (route === 'connexion') loadConnexion();
  if (route === 'inscription') loadInscription();
  if(route === 'sentour') loadSentour();
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);
