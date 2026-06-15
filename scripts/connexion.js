
// connexion.js
export function loadConnexion() {
  document.getElementById('app').innerHTML = `
    <div class="page-container">
      <div class="partielogo">
        <img src="./images/og-logo-doubi.png" alt="Logo Doubi Transport Service">
      </div>
      <div class="partie-form">
        <h3>Bienvenue chez</h3>
        <h2>DOUBI</h2>
        <span class="subtitle">Veuillez renseigner ces champs afin de vous connecter</span>
        <form id="loginForm">
          <input type="email" id="login-email" placeholder="Email" required>
          <input type="password" id="login-password" placeholder="Mot de passe" required>
          <button type="submit" class="btn-connexion">Se Connecter</button>
          <a href="#inscription" class="switch-form">Vous n’avez pas encore de compte ? créez ici !</a>
        </form>
      </div>
    </div>
  `;
}
