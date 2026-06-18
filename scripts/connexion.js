
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
          <div id="loginFeedback" style="margin-top:12px; min-height:18px;"></div>
          <a href="#inscription" class="switch-form">Vous n’avez pas encore de compte ? créez ici !</a>
        </form>
      </div>
    </div>
  `;

  const loginForm = document.getElementById('loginForm');
  const loginFeedback = document.getElementById('loginFeedback');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    loginFeedback.textContent = '';

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        loginFeedback.textContent = data.message || 'Impossible de se connecter.';
        loginFeedback.style.color = 'red';
        return;
      }

      loginFeedback.textContent = data.message;
      loginFeedback.style.color = 'green';
      setTimeout(() => {
        location.hash = 'accueil';
      }, 700);
    } catch (error) {
      loginFeedback.textContent = 'Impossible de contacter le serveur.';
      loginFeedback.style.color = 'red';
      console.error(error);
    }
  });
}
