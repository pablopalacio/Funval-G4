import { proyectos } from "./proyectos.js";
import { habilidades } from "./Habilidades.js";

function mostrarHabilidades() {
  const contenedor = document.getElementById("habilidades-container");
  if (!contenedor) return;

  habilidades.forEach((habilidad) => {
    const div = document.createElement("div");

    const clasesBase = "rounded-xl p-6 text-center shadow transition-all duration-300";
    let clasesPersonalizadas = "";

    switch (habilidad.nombre) {
      case "HTML":
        clasesPersonalizadas = "bg-white hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-600";
        break;
      case "CSS":
        clasesPersonalizadas = "bg-white hover:scale-105 hover:ring-4 hover:ring-blue-400 dark:bg-gray-800";
        break;
      case "JavaScript":
        clasesPersonalizadas = "bg-white hover:rotate-1 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-500";
        break;
      case "Tailwind CSS":
        clasesPersonalizadas = "bg-white hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800";
        break;
      case "React":
        clasesPersonalizadas = "bg-white hover:blur-sm hover:brightness-110 dark:bg-gray-800";
        break;
      default:
        clasesPersonalizadas = "bg-white hover:bg-gray-200 dark:bg-gray-800";
    }

    div.className = `${clasesBase} ${clasesPersonalizadas}`;

    div.innerHTML = `
      <h2 class="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">${habilidad.nombre}</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Nivel: <span class="font-medium">${habilidad.nivel}</span></p>
    `;

    contenedor.appendChild(div);
  });
}

function mostrarProyectos() {
  const contenedor = document.getElementById("contenedor-proyectos");
  if (!contenedor) return;

  proyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 dark:bg-gray-800";

    card.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full max-h-64 object-contain mx-auto">
      <div class="p-5 flex flex-col gap-2">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">${proyecto.titulo}</h2>
        <p class="text-gray-600 dark:text-gray-300">${proyecto.descripcion || ""}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function toggleMenuNav() {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const menu = document.getElementById("navbar-default");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

function configurarTema() {
  const toggle = document.getElementById("botoncito");
  if (!toggle) return;

  if (localStorage.getItem("tema") === "dark") {
    document.documentElement.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProyectos();
  mostrarHabilidades();
  toggleMenuNav();
  configurarTema();
});