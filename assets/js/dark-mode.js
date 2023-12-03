document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');
    const body = document.body;
  
    darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
        body.setAttribute('data-bs-theme', 'dark');
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill'); // Cambia la clase del icono al modo oscuro
      } else {
        body.setAttribute('data-bs-theme', 'light');
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-stars-fill'); // Cambia la clase del icono al modo claro
      }
    });
  });
  