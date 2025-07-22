const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
});
const form = document.querySelector('form');
const listaRegistros = document.getElementById('listaRegistros');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const edad = document.getElementById('edad').value.trim();
  const pais = document.getElementById('pais').value.trim();
  if (!nombre || !edad || !pais) {
    alert("Por favor completa todos los campos.");
    return;
  }
  const nuevoRegistro = document.createElement('div');
  nuevoRegistro.className = 'bg-gray-800 p-4 rounded border border-gray-700';
  nuevoRegistro.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>País:</strong> ${pais}</p>
  `;
  listaRegistros.appendChild(nuevoRegistro);
  form.reset();
  modal.classList.remove('flex');
  modal.classList.add('hidden');
});