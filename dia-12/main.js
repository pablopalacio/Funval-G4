/* let permisoMama = false;
let permisoPapa = true;
let edad = 28;

if (edad >= 18 && (permisoMama || permisoPapa)) {
  console.log("puedo salir a bailar");
} else {
  console.log("me quedo en casa");
}





let dia = parseInt(prompt("Ingrese su día de nacimiento:"));
let mes = parseInt(prompt("Ingrese su mes de nacimiento (1-12):")) - 1; 
let año = parseInt(prompt("Ingrese su año de nacimiento:"));


let fechaNacimiento = new Date(año, mes, dia);
let fechaHoy = new Date(2025, 6, 15); 
let diferenciaMS = fechaHoy - fechaNacimiento;
let diasVividos = Math.floor(diferenciaMS / (1000 * 60 * 60 * 24));
alert(`Has vivido ${diasVividos} días.`);
 */

/* let cantidad = 3; 

for (let i = 0; i < cantidad; i++) {
  console.log(i * 2);
}
 */

    let num1 = parseInt(prompt("Ingresa el primer número (multiplicando):"));
    let num2 = parseInt(prompt("Ingresa el segundo número (multiplicador):"));

    let resultado = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
      resultado += num1;
    }
    if (num2 < 0) {
      resultado = -resultado;
    }
    alert(`El resultado de multiplicar ${num1} × ${num2} es: ${resultado}`);



    