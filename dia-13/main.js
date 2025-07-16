/* funcion nuemeros primos */

/* function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}


function generarPrimos(n) {
    let primos = [];
    let numero = 2;

    while (primos.length < n) {
        if (esPrimo(numero)) {
            primos.push(numero);
        }
        numero++;
    }

    return primos;
}


function iniciar() {
    const entrada = prompt("Ingrese la cantidad de números primos que desea:");
    const cantidad = parseInt(entrada);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingrese un número válido mayor a 0.");
        return;
    }

    const resultado = generarPrimos(cantidad);
    alert(`Los primeros ${cantidad} números primos son:\n${resultado.join(", ")}`);
}


iniciar(); */



/* function mostrarMenu() {
    let menu = "MENÚ DEL DÍA:\n";
    menu += "1. Tacos - $60\n";
    menu += "2. Milanesa - $50\n";
    menu += "3. Ensalada - $20\n";
    menu += "4. Sopa - $10\n";
    menu += "5. Pizza - $70\n";
    return menu;
}

function obtenerPrecio(plato) {
    if (plato === "1") return 60;
    if (plato === "2") return 50;
    if (plato === "3") return 20;
    if (plato === "4") return 10;
    if (plato === "5") return 70;
    return 0;
}

function obtenerNombrePlato(plato) {
    if (plato === "1") return "Tacos";
    if (plato === "2") return "Milanesa";
    if (plato === "3") return "Ensalada";
    if (plato === "4") return "Sopa";
    if (plato === "5") return "Pizza";
    return "Desconocido";
}

function iniciarSistema() {
    let nombreCliente = prompt("¡Bienvenido a Don Baratón! ¿Cuál es su nombre?");
    if (!nombreCliente) {
        alert("Debe ingresar un nombre válido.");
        return;
    }

    let total = 0;
    let mensajeEspecial = "";
    let continuar = true;
    let resumen = `Factura para: ${nombreCliente}\n\n`;

    while (continuar) {
        let menu = mostrarMenu();
        let opcion = prompt(menu + "\nSeleccione un número de plato:");
        let precio = obtenerPrecio(opcion);
        let nombrePlato = obtenerNombrePlato(opcion);

        if (precio === 0) {
            alert("Opción no válida. Intente de nuevo.");
            continue;
        }

        resumen += `${nombrePlato} - $${precio}\n`;
        total += precio;

        if (nombrePlato === "Tacos") {
            mensajeEspecial = "🌮 ¡Gracias por elegir nuestros deliciosos tacos! 🌮";
        }

        continuar = confirm("¿Desea pedir otro plato?");
    }

    let descuento = total * 0.05;
    let totalConDescuento = total - descuento;

    resumen += `\nDescuento aplicado: $${descuento.toFixed(2)}`;
    resumen += `\nTOTAL A PAGAR: $${totalConDescuento.toFixed(2)}`;

    alert(resumen);

    if (mensajeEspecial) {
        alert(mensajeEspecial);
    }
} */



        let total = 0;
    let contador = 0;
    let mensajeEspecialMostrado = false;

    function obtenerPrecio(plato) {
        if (plato === "1") return 60;
        if (plato === "2") return 50;
        if (plato === "3") return 20;
        if (plato === "4") return 10;
        if (plato === "5") return 70;
        return 0;
    }

    function obtenerNombrePlato(plato) {
        if (plato === "1") return "Tacos";
        if (plato === "2") return "Milanesa";
        if (plato === "3") return "Ensalada";
        if (plato === "4") return "Sopa";
        if (plato === "5") return "Pizza";
        return "Desconocido";
    }

    function agregarPlato() {
        const nombreCliente = document.getElementById("cliente").value.trim();
        const opcion = document.getElementById("plato").value;

        if (!nombreCliente) {
            alert("Por favor, ingrese su nombre antes de seleccionar platos.");
            return;
        }

        if (!opcion) {
            alert("Seleccione un plato válido.");
            return;
        }

        const precio = obtenerPrecio(opcion);
        const nombrePlato = obtenerNombrePlato(opcion);

        contador++;

        const lista = document.getElementById("listaPlatos");
        const item = document.createElement("li");
        item.textContent = `${nombrePlato} - $${precio}`;
        lista.appendChild(item);

        total += precio;

        const descuento = total * 0.05;
        const totalFinal = total - descuento;

        document.getElementById("total").textContent = total.toFixed(2);
        document.getElementById("descuento").textContent = descuento.toFixed(2);
        document.getElementById("totalFinal").textContent = totalFinal.toFixed(2);

        if (nombrePlato === "Tacos" && !mensajeEspecialMostrado) {
            document.getElementById("mensajeEspecial").textContent = "🌮 ¡Gracias por elegir nuestros deliciosos tacos! 🌮";
            mensajeEspecialMostrado = true;
        }

        // Reset select para siguiente selección
        document.getElementById("plato").value = "";
    }



function bienvenidaDonKevBaraton() {
    let nombreCliente = prompt("¡Bienvenido a Don Kev Baratón! Por favor, ¿cuál es tu nombre?");
    if (nombreCliente && nombreCliente.trim() !== "") {
        alert(`¡Hola, ${nombreCliente}! Gracias por visitarnos. 😊`);
        return nombreCliente.trim();
    } else {
        alert("Por favor, ingresa un nombre válido para continuar.");
        return null;
    }
}

// Ejemplo de uso:
window.onload = function() {
    bienvenidaDonKevBaraton();
};