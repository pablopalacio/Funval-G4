const menuBtn = document.getElementById('menu-btn');
const cerrarBtn = document.getElementById('cerrar-menu');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu-link');
const secciones = ['home-content', 'servicios-content', 'academia-content', 'links-content'];

menuBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

cerrarBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    secciones.forEach(id => {
      document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(target).classList.remove('hidden');
    menu.classList.add('hidden');
  });
});