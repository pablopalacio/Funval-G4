/* document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const body = document.body;
  const button = document.getElementById('toggleTheme');
  const modeImage = document.getElementById('modeImage');

  let darkMode = false;

  button.addEventListener('click', () => {
    darkMode = !darkMode;

    if (darkMode) {
      html.classList.add('dark');
      body.classList.add('dark');
      button.textContent = 'Cambiar a modo claro';
      button.classList.remove('bg-gray-800', 'text-white');
      button.classList.add('bg-white', 'text-black');
      modeImage.src = "./img/gojo-satoru-jujutsu-kaisen.gif"; // Imagen modo oscuro
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
      button.textContent = 'Cambiar a modo oscuro';
      button.classList.remove('bg-white', 'text-black');
      button.classList.add('bg-gray-800', 'text-white');
      modeImage.src = "./img/gojo.webp"; // Imagen modo claro
    }
  });
}); */


document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const body = document.body;
  const button = document.getElementById('toggleTheme');

  let darkMode = false;

  // Clases iniciales
  body.classList.add('bg-body-light', 'bg-body-hover');

  button.addEventListener('click', () => {
    darkMode = !darkMode;

    if (darkMode) {
      html.classList.add('dark');
      body.classList.remove('bg-body-light');
      body.classList.add('bg-body-dark');
      button.textContent = 'Cambiar a modo claro';
      button.classList.remove('bg-gray-800', 'text-white');
      button.classList.add('bg-white', 'text-black');
    } else {
      html.classList.remove('dark');
      body.classList.remove('bg-body-dark');
      body.classList.add('bg-body-light');
      button.textContent = 'Cambiar a modo oscuro';
      button.classList.remove('bg-white', 'text-black');
      button.classList.add('bg-gray-800', 'text-white');
    }
  });
});