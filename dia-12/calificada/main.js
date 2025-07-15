document.addEventListener("DOMContentLoaded", () => {
  const figura = document.getElementById("figura");
  const inputsDiv = document.getElementById("inputs");
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");
  const calcularBtn = document.getElementById("calcular");

  figura.addEventListener("change", mostrarInputs);
  calcularBtn.addEventListener("click", calcularArea);

  function mostrarInputs() {
    resultado.textContent = "";
    error.textContent = "";
    const tipo = figura.value;
    let html = "";

    if (tipo === "cuadrado") {
      html = `
        <label class="block mb-1 font-medium">Lado:</label>
        <input type="number" id="lado" class="w-full p-2 border rounded" min="0">
      `;
    } else if (tipo === "rectangulo" || tipo === "triangulo") {
      html = `
        <label class="block mb-1 font-medium">Base:</label>
        <input type="number" id="base" class="w-full p-2 border rounded mb-2" min="0">
        <label class="block mb-1 font-medium">Altura:</label>
        <input type="number" id="altura" class="w-full p-2 border rounded" min="0">
      `;
    }

    inputsDiv.innerHTML = html;
  }

  function calcularArea() {
    resultado.textContent = "";
    error.textContent = "";
    const tipo = figura.value;

    if (!tipo) {
      error.textContent = "Por favor seleccione una figura.";
      return;
    }

    let area = 0;

    if (tipo === "cuadrado") {
      const lado = parseFloat(document.getElementById("lado").value);
      if (isNaN(lado) || lado <= 0) {
        error.textContent = "Ingrese un valor válido para el lado.";
        return;
      }
      area = lado * lado;
    } else {
      const base = parseFloat(document.getElementById("base").value);
      const altura = parseFloat(document.getElementById("altura").value);
      if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        error.textContent = "Ingrese valores válidos para base y altura.";
        return;
      }

      if (tipo === "rectangulo") {
        area = base * altura;
      } else if (tipo === "triangulo") {
        area = (base * altura) / 2;
      }
    }

    resultado.textContent = `Área: ${area.toFixed(2)} unidades cuadradas`;
  }
});