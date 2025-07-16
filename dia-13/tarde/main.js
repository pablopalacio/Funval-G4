 function getNumeros() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
      return [n1, n2];
    }

    function mostrarResultado(valor) {
      document.getElementById("resultado").innerText = "Resultado: " + valor;
    }

    function sumar() {
      const [n1, n2] = getNumeros();
      mostrarResultado(n1 + n2);
    }

    function restar() {
      const [n1, n2] = getNumeros();
      mostrarResultado(n1 - n2);
    }

    function multiplicar() {
      const [n1, n2] = getNumeros();
      mostrarResultado(n1 * n2);
    }

    function dividir() {
      const [n1, n2] = getNumeros();
      if (n2 === 0) {
        mostrarResultado("Error: División por cero");
        return;
      }
      mostrarResultado(n1 / n2);
    }

    function potencia() {
      const [n1, n2] = getNumeros();
      mostrarResultado(Math.pow(n1, n2));
    }

    function raizCuadrada() {
      const [n1] = getNumeros();
      mostrarResultado(Math.sqrt(n1));
    }
        function toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    }