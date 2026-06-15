
// inscription.js
export function loadInscription() {
  document.getElementById('app').innerHTML = `
    <div class="page-container">
      <div class="partielogo">
        <img src="./images/og-logo-doubi.png" alt="Logo Doubi Transport Service">
      </div>
      <div class="partie-form">
        <h3>Inscription chez</h3>
        <h2>DOUBI</h2>
        <span class="subtitle">Créez votre compte en quelques secondes</span>
        <form id="signupForm">
          <input type="text" id="signup-prenom" placeholder="Prénom" required>
          <input type="text" id="signup-nom" placeholder="Nom" required>
          <input type="email" id="signup-email" placeholder="Email" required>
          <input type="password" id="signup-password" placeholder="Mot de passe" required minlength="8">
          <button type="submit" class="btn-connexion">S'inscrire</button>
          <a href="#connexion" class="switch-form">Déjà un compte ? Connectez-vous ici !</a>
        </form>
      </div>
    </div>
  `;
}
