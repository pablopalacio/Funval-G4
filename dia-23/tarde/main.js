  /* ----------FETCH-------------- */
/* let contenedor = document.querySelector("#contenedor-usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.forEach((usuario) => {
      const { name, username, email, address, company } = usuario;
      const direccion = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

      contenedor.innerHTML += `
<div class="transform transition duration-300 hover:scale-105 hover:shadow-lg max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
  <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><strong>Usuario:</strong> ${username}</p>
  <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><strong>Email:</strong> ${email}</p>
  <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><strong>Dirección:</strong> ${direccion}</p>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Empresa:</strong> ${company.name}</p>
  
  <a href="mailto:${email}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Contactar
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>
`;
    });
  });
 */

const contenedor = document.querySelector("#contenedor-usuarios");
const pulgasBtn = document.querySelector("#pulgasBtn");
function mostrarPerros(cantidad = 6) {
  contenedor.innerHTML = ""; 
  for (let i = 0; i < cantidad; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(dogData => {
        const imagenPerro = dogData.message;
        contenedor.innerHTML += `
<div class="transform transition duration-300 hover:scale-105 hover:shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
  <img src="${imagenPerro}" alt="Perrito aleatorio" class="w-full h-60 object-cover">
</div>`;
      });
  }
}
mostrarPerros();
pulgasBtn.addEventListener("click", () => {
  mostrarPerros();
});