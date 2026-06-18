
// export async function generateServicePage(serviceName, routes) {
//   const response = await fetch('http://localhost:3000/home');
//   const homeData = await response.json();

//   document.getElementById('app').innerHTML = `
//     <div class="page-container-${serviceName.toLowerCase()}">
//       <nav class="navbar">
//         <div>${homeData.brand}</div>
//         <div>
//           <a href="#accueil">Accueil</a>
//           <a href="#connexion">Connexion</a>
//           <a href="#inscription">Inscription</a>
//         </div>
//       </nav>
//       <section class="mt-10 text-center">
//         <h2 class="text-[#0F3D5E] text-2xl mb-6">${homeData.slogan}</h2>
//         <h2>${serviceName}</h2>
//         <table class="routes">
//           ${routes.map(route => `
//             <tr>
//               <td>${route.trajet}</td>
//               <td>Durée : ${route.duree}</td>
//               <td><button class="btn-acheter">Acheter</button></td>
//             </tr>
//           `).join('')}
//         </table>
//       </section>
//     </div>
//   `;
// }
