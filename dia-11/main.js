/* mostrar elementos en consola
el console.log es la herramienta para mostrar tipos de datos
... todo lo que se vaya a mostar en consola, debe estar dentro de sus 
parentecis, y tiene la capacidad de mostar desde 1 parametro a
infinitos.*/
/* console.log () */
/* 
let nombreVariable = "el valor";
var nombreVar = "el valor";

const nombreConst = "el valor de la constante"; */


/* formas de crear una variable */

/* let $nombre = 1;
let _contador = 322; */



/* como verificar el tipo de dato de una variable */

/* console.log(typeof($nombre)); */



/* operadores */

/* let a = 2;
let b = 7;
let estudinate = "Geraldine"
let apllidoEstudiante = "Revilla"
let NombreCompleto;
let resultado; */

/* SUMA */
/* resultado = a + b;
NombreCompleto = estudinate + "" + apllidoEstudiante; */
/* console.log(NombreCompleto); */
/* resta */
/* resultado = a - b; */
/* division */
/* resultado = a / b; */
/* multiplicacion */
/* resultado = a* b; */
/* potencia */
/* resultado = a ** b; */


/* HOla soy un comentario */

/* hola
soy un comentario 
en varias 
lienas */

var numero = 123;
var nombre = "pablo"
var hombre = true
var dni;
var casado = null


console.log(numero,nombre,hombre,dni,casado);

console.log(typeof(numero));
console.log(typeof(hombre));
console.log(typeof(dni));
console.log(typeof(nombre));


numero = 323;
nombre = "antonio";
dni = 350123123;


const apellido = "palacio";
const segundoNombre = "Antonio";
const numeroDni = 123123123;
console.log(apellido, segundoNombre, numeroDni,);

/* const apellido = "kirito"; */ /* no se puede modiv una const */


let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;          // Suma
let resta = numero1 - numero2;         // Resta
let multiplicacion = numero1 * numero2; // Multiplicación
let division = numero1 / numero2;      // División

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);



let asignacionSuma = numero1;
asignacionSuma += numero2; // equivalente a asignacionSuma = asignacionSuma + numero2

let asignacionResta = numero1;
asignacionResta -= numero2; // equivalente a asignacionResta = asignacionResta - numero2

let asignacionMultiplicacion = numero1;
asignacionMultiplicacion *= numero2; // equivalente a asignacionMultiplicacion = asignacionMultiplicacion * numero2

let asignacionDivision = numero1;
asignacionDivision /= numero2; // equivalente a asignacionDivision = asignacionDivision / numero2

let asignacionModulo = numero1;
asignacionModulo %= numero2; // equivalente a asignacionModulo = asignacionModulo % numero2

let asignacionPotencia = numero1;
asignacionPotencia **= numero2; // equivalente a asignacionPotencia = asignacionPotencia ** numero2

console.log("Asignación con suma (+=):", asignacionSuma);
console.log("Asignación con resta (-=):", asignacionResta);
console.log("Asignación con multiplicación (*=):", asignacionMultiplicacion);
console.log("Asignación con división (/=):", asignacionDivision);
console.log("Asignación con módulo (%=):", asignacionModulo);
console.log("Asignación con potencia (**=):", asignacionPotencia);



console.log(10 > 5);       // true, porque 10 es mayor que 5
console.log(7 >= 7);       // true, porque 7 es mayor o igual a 7
console.log(3 < 9);        // true, porque 3 es menor que 9
console.log(4 == "4");     // true, porque == compara solo el valor (no el tipo)
console.log(6 === 6);      // true, porque === compara valor y tipo, y ambos son iguales


console.log(5 > 10);        // false, porque 5 no es mayor que 10
console.log(8 < 3);         // false, porque 8 no es menor que 3
console.log(4 !== 4);       // false, porque 4 es igual a 4 (por lo tanto, no es diferente)
console.log(6 === "6");     // false, porque === compara tipo y valor (number !== string)
console.log(9 <= 2);        // false, porque 9 no es menor ni igual a 2


// 1. Ambas condiciones verdaderas → true
console.log(10 > 5 && 8 < 20); // true

// 2. Primera verdadera, segunda falsa → false
console.log(15 == 15 && 3 > 5); // false


// 1. Ambas condiciones verdaderas → true
console.log(10 > 5 || 8 < 20); // true

// 2. Primera verdadera, segunda falsa → true
console.log(15 == 15 || 3 > 5); // true



/* let usuario = "admin"; */
let passwordCorrecta = true;
let tieneToken = false;

// Debe ser "admin" y tener contraseña correcta, o tener token de seguridad
/* let accesoPermitido = (usuario === "admin" && passwordCorrecta) || tieneToken;

console.log("Acceso permitido:", accesoPermitido); */ // true



let esClienteVIP = false;
let tieneCupon = true;
let hizoCompraGrande = false;

// No se aplica si NO es cliente VIP y NO hizo una compra grande
let aplicarDescuento = (esClienteVIP && tieneCupon) || !(!hizoCompraGrande);

console.log("¿Aplicar descuento?:", aplicarDescuento); // false



let nota = 7;
let resultado = nota >= 6 ? "Aprobado" : "Desaprobado";

console.log(resultado); // "Aprobado"




let nota1 = 8;
let nota2 = 7;
let asistencia = 85; // en porcentaje

// Calculamos el promedio (operador aritmético)
let promedio = (nota1 + nota2) / 2;

// Evaluamos condiciones con operadores de comparación y lógicos
let aprueba = (promedio >= 6 && asistencia >= 80) || promedio === 10;

console.log("Promedio:", promedio);
console.log("¿Aprueba el curso?:", aprueba); // true




/* const usuario = "admin";      
const password = "123456";    

const ingreso = (usuario === "admin" && password === "123456") 
                ? "Datos correctos" 
                : "Datos incorrectos";

console.log(ingreso);
 */


const usuario = "admid";      
const password = "123456";    

const mensaje = (usuario === "admin" && password === "123456") 
  ? "Datos correctos"
  : (usuario !== "admin" && password !== "123456") 
    ? "Usuario y password incorrectos"
    : (usuario !== "admin") 
      ? "Usuario incorrecto"
      : "Password incorrecto";

console.log(mensaje);

