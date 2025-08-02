async function fetchUsers() {
const container = document.getElementById("users-container");
const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Respuesta no válida del servidor");
    }

    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";

      card.innerHTML = `
        <div class="card h-100 shadow-md hover:scale-105 transition-all duration-300">
          <div class=" card-body  bg-gray-300">
            <h5 class="card-title"> ${user.name}</h5>
            <p class="card-text">Usuario: ${user.username}</p>
            <p class="card-text">Email: <a href="mailto:${user.email}">${user.email}</a></p>
            <p class="card-text">Empresa: ${user.company.name}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    errorMessage.textContent =
      "❌ Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
  }
}

// Llamar la función al cargar la página
fetchUsers();