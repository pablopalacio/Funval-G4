let notas = [32,100,25,78,50,60,100,5,10,100];

function promedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return notas.length > 0 ? suma / notas.length : 0;
}
console.log("El promedio de las notas es:", promedio(notas));


/* function prom(notas) {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return notas.length > 0 ? suma / notas.length : 0;
}
 */


let matriz = [
    [11, 22, 33],
    [22, 11, 33],
    [10, 20, 33]
];

let Principal = 0;
let Secundaria = 0;
let Medio = 0;

for (let i = 0; i < 3; i++) {
    Principal += matriz[i][i];          
    Secundaria += matriz[i][2 - i];      
    Medio += matriz[i][1];            
}

console.log("Suma diagonal principal:", Principal);
console.log("Suma diagonal secundaria:", Secundaria);
console.log("Suma columna del medio:", Medio);