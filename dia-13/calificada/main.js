  let saldo = 0;

    function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }

    function depositar() {
      const monto = parseFloat(document.getElementById("monto").value);
      if (isNaN(monto) || monto <= 0) {
        mostrarMensaje("Ingrese un monto válido para depositar.", true);
        return;
      }
      saldo += monto;
      mostrarMensaje(`Depósito exitoso. Saldo actual: $${saldo.toFixed(2)}`);
    }

    function retirar() {
      const monto = parseFloat(document.getElementById("monto").value);
      if (isNaN(monto) || monto <= 0) {
        mostrarMensaje("Ingrese un monto válido para retirar.", true);
        return;
      }
      if (monto > saldo) {
        mostrarMensaje("Saldo insuficiente para realizar el retiro.", true);
        return;
      }
      saldo -= monto;
      mostrarMensaje(`Retiro exitoso. Saldo actual: $${saldo.toFixed(2)}`);
    }

    function consultarSaldo() {
      mostrarMensaje(`Saldo actual: $${saldo.toFixed(2)}`);
    }

    function mostrarMensaje(texto, esError = false) {
      const mensaje = document.getElementById("mensaje");
      mensaje.textContent = texto;
      mensaje.classList.remove("text-red-400", "text-green-100");
      mensaje.classList.add(esError ? "text-red-400" : "text-green-100");
    }