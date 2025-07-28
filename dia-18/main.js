let participante = {
    nombre : "Pablo",
    edad : 33 ,
    Profesion : "esudiante" ,
    ganador : "false" ,
}
let mensaje = '${ participante.ganador === "true" ? "Felicitaciones eres el ganador de 100000$ : ${participante.nombre} "Lo sentimos, no ganase"}';
console.log(mensaje);