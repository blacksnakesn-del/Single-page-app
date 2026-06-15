
// accueil.js
export async function loadAccueil() {
  const response = await fetch('data/home.json');
  const homeData = await response.json();

  document.getElementById('app').innerHTML = `
    <div class="page-container">
      <nav class="navbar">
        <div>${homeData.brand}</div>
        <div>
          <a href="#accueil">Accueil</a>
          <a href="#connexion">Connexion</a>
          <a href="#inscription">Inscription</a>
        </div>
      </nav>
      <section class="mt-10 text-center">
        <h2 class="text-[#0F3D5E] text-2xl mb-6">${homeData.slogan}</h2>
        <div class="flex flex-wrap justify-center gap-10">
          ${homeData.services.map(service => `
            <div class="service-card">
              <img src="${service.image}" alt="${service.name}">
              <div class="info">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <h2 class="text-[#0F3D5E] text-2xl mt-10">Nos Services</h2>
      </section>
    </div>
  `;
}
