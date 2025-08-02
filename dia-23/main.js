/* console.log ("equipo de Rugby");
console.log ("Entrenador");
console.log ("preparador fisico");
console.log ("kineciologo/a");
console.log ("Nutricionista");
console.log ("Jugadores");
console.log ("Club");

console.log ("Dia del partido");

setTimeout(function() {
  console.log("llega el entrenador al club");
}, 2000);

setTimeout(function() {
  console.log("llegan los jugadores");
}, 4500);

setTimeout(function() {
  console.log("llega el kineciologo y prepara las cintas y tratamientos");
}, 2500);


setTimeout(function() {
  console.log("llega la nutricionista a prepara las bebidas y snacks");
}, 1000);


setTimeout(function() {
  console.log("llega el preparador fisico y prepara el campo");
}, 3000);


setTimeout(function() {
  console.log("El club se abre a los socios.");
}, 6000);


setTimeout(function() {
  console.log("Comienza la entrada en calor");
}, 6500);

setTimeout(function() {
  console.log("se preparan los jugadores, reciben tratamiento del kineciologo y toman los snaks y bebidas");
}, 4800); */



/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];


const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("El servidor está caído");
    }
  }, 5000);
});


async function mostrarEstudiantesAprobados() {
  try {
    const lista = await listaEstudiantes;
    const contenedor = document.getElementById("aprobados");

    const aprobados = lista.filter(est => {
      const promedio = est.notas.reduce((a, b) => a + b, 0) / est.notas.length;
      return promedio >= 80;
    });

    if (aprobados.length === 0) {
      contenedor.innerHTML = "<p>No hay estudiantes aprobados.</p>";
    } else {
      aprobados.forEach(est => {
        const promedio = (
          est.notas.reduce((a, b) => a + b, 0) / est.notas.length
        ).toFixed(2);
        contenedor.innerHTML += `
        <div class="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-800 p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <h3 class="text-xl font-semibold">${est.nombre}</h3>
        <p class="text-sm">Edad: ${est.edad}</p>
        <p class="text-sm">Promedio: <span class="font-medium">${promedio}</span></p>
        </div>
`;
      });
    }
  } catch (error) {
    document.getElementById("aprobados").innerHTML = `<p style="color:red;">Error: ${error}</p>`;
  }
}

mostrarEstudiantesAprobados();