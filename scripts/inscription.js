
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
          <div id="signupFeedback" style="margin-top:12px; min-height:18px;"></div>
          <a href="#connexion" class="switch-form">Déjà un compte ? Connectez-vous ici !</a>
        </form>
      </div>
    </div>
  `;

  const signupForm = document.getElementById('signupForm');
  const signupFeedback = document.getElementById('signupFeedback');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const prenom = document.getElementById('signup-prenom').value.trim();
    const nom = document.getElementById('signup-nom').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    signupFeedback.textContent = '';

    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom, nom, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        signupFeedback.textContent = data.message || 'Impossible de s’inscrire.';
        signupFeedback.style.color = 'red';
        return;
      }

      signupFeedback.textContent = data.message;
      signupFeedback.style.color = 'green';
      setTimeout(() => {
        location.hash = 'connexion';
      }, 700);
    } catch (error) {
      signupFeedback.textContent = 'Impossible de contacter le serveur.';
      signupFeedback.style.color = 'red';
      console.error(error);
    }
  });
}
