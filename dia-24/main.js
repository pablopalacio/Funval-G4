let contenedor = document.querySelector("#pokemons-container");
let contador = 1;
let tipoSeleccionado = null;
let offsetTipo = 0;

async function traerpokemones(numeroInicialPokemones) {
  contenedor.innerHTML = "";
  for (let i = numeroInicialPokemones; i < numeroInicialPokemones + 10; i++) {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await respuesta.json();
    renderizarPokemon(data);
  }
}

function renderizarPokemon({
  sprites: {
    other: {
      ["official-artwork"]: { front_default },
    },
  },
  name,
  id,
  types,
  height,
  weight,
  abilities,
  moves,
  stats,
}) {
  let tipos = types.map(t => t.type.name).join(" ");
  let habilidades = abilities.map(h => h.ability.name).join(", ");
  let movimientos = moves.slice(0, 5).map(m => m.move.name).join(", ");
  let statsText = stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(", ");

  contenedor.innerHTML += `
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <img class="rounded-t-lg" src="${front_default}" alt="${name}" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">${name}</h5>
      <p class="text-gray-500 mb-1">#${id}</p>
      <p class="text-gray-700 dark:text-gray-300 mb-3">tipos: ${tipos}</p>
      <button class="mas-info inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        data-img="${front_default}"
        data-name="${name}"
        data-id="#${id}"
        data-height="${height / 10} m"
        data-weight="${weight / 10} kg"
        data-habilidades="${habilidades}"
        data-tipos="${tipos}"
        data-moves="${movimientos}"
        data-stats="${statsText}">
        Más información
        <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 14 10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12M13 5l-4-4m4 4l-4 4"/>
        </svg>
      </button>
    </div>
  </div>`;
}
traerpokemones(contador);
document.querySelector("#siguiente").addEventListener("click", function () {
  if (tipoSeleccionado) {
    offsetTipo += 10;
    cargarTipo();
  } else {
    contador += 10;
    traerpokemones(contador);
  }
});

document.querySelector("#anterior").addEventListener("click", function () {
  if (tipoSeleccionado) {
    if (offsetTipo >= 10) {
      offsetTipo -= 10;
      cargarTipo();
    }
  } else {
    if (contador > 10) {
      contador -= 10;
      traerpokemones(contador);
    }
  }
});

document.querySelector("#drpwn").addEventListener("click", () => {
  document.querySelector("#opciones").classList.toggle("hidden");
});

let tipos = [
  "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel",
  "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"
];

document.querySelector("#opciones").addEventListener("click", async function (e) {
  document.querySelector("#opciones").classList.add("hidden");

  for (let tipo of tipos) {
    if (e.target.closest(`#${tipo}`)) {
      tipoSeleccionado = tipo;
      offsetTipo = 0;
      await cargarTipo();
    }
  }
});

async function cargarTipo() {
  contenedor.innerHTML = "";
  let res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
  let data = await res.json();
  let lista = data.pokemon;

  let paginados = lista.slice(offsetTipo, offsetTipo + 10);
  if (paginados.length === 0) return;

  for (let poke of paginados) {
    let resp = await fetch(poke.pokemon.url);
    let dataPoke = await resp.json();
    renderizarPokemon(dataPoke);
  }
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".mas-info")) {
    const btn = e.target.closest(".mas-info");
    document.querySelector("#modal-img").src = btn.dataset.img;
    document.querySelector("#modal-nombre").textContent = btn.dataset.name;
    document.querySelector("#modal-id").textContent = btn.dataset.id;
    document.querySelector("#modal-altura").textContent = btn.dataset.height;
    document.querySelector("#modal-peso").textContent = btn.dataset.weight;
    document.querySelector("#modal-habilidades").textContent = btn.dataset.habilidades;
    document.querySelector("#modal-tipos").textContent = btn.dataset.tipos;
    document.querySelector("#modal-movimientos").textContent = btn.dataset.moves;
    document.querySelector("#modal-stats").textContent = btn.dataset.stats;

    document.querySelector("#modal-pokemon").classList.remove("hidden");
  }
});
document.querySelector("#cerrar-modal").addEventListener("click", () => {
  document.querySelector("#modal-pokemon").classList.add("hidden");
});