window.addEventListener("scroll", () => {
    var nav = document.getElementById("nav");
    const viewport = window.innerHeight;
    nav.classList.toggle("fixed", window.scrollY > viewport);
});


const navbarToggler = document.getElementById('navbarToggler');

navbarToggler.addEventListener("click", () => {
    // Obtiene el icono del span
    const icon = navbarToggler.querySelector('i');

    //Cambiar el icono en base al estado del menu
    if(navbarToggler.classList.contains('collapsed')){
        //Menu colapsado
        icon.classList.remove('fa-sharp', 'fa-solid', 'fa-x');
        icon.classList.add('fa-sharp', 'fa-solid', 'fa-bars');
    }else{
        icon.classList.remove('fa-sharp', 'fa-solid', 'fa-bars');
        icon.classList.add('fa-sharp', 'fa-solid', 'fa-x');
    }
})
