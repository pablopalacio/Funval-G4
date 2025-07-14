import { proyectos } from "./proyectos.js"; 
import { habilidades } from "./Habilidades.js";
window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("habilidades-container");

  habilidades.forEach(habilidad => {
    const div = document.createElement("div");
    div.className = "p-4 bg-violet-800 dark:bg-white rounded-xl shadow text-center";
    div.innerHTML = `
      <h3 class="text-white dark:text-black font-bold text-lg">${habilidad.nombre}</h3>
      <p class="text-white dark:text-black text-sm ">Nivel: ${habilidad.nivel}</p>
    `;
    contenedor.appendChild(div);
  });
});


function mostrarProyectos() {
    const contenedor = document.getElementById("contenedor-proyectos");
    if (!contenedor) return;
  
    proyectos.forEach(proyecto => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 dark:bg-gray-800";
  
      card.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full max-h-64 object-contain mx-auto">
        <div class="p-5 flex flex-col gap-2">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white">${proyecto.titulo}</h2>
          <p class="text-gray-600 dark:text-gray-300">${proyecto.descripcion}</p>
        </div>
      `;
  
      contenedor.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", mostrarProyectos);


  //Toggle boton menu nav
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById("navbar-default");
  
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });