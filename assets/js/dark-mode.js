document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');
    const body = document.body;
  
    darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
        body.setAttribute('data-bs-theme', 'dark');
        icon.classList.remove('fa-solid','fa-moon');
        icon.classList.add('fa-solid','fa-sun'); // Cambia la clase del icono al modo oscuro
      } else {
        body.setAttribute('data-bs-theme', 'light');
        icon.classList.remove('fa-solid','fa-sun');
        icon.classList.add('fa-solid','fa-moon'); // Cambia la clase del icono al modo claro
      }
    });
  });
  