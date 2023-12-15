window.addEventListener("scroll", () => {
    var nav = document.getElementById("nav");
    const viewport = window.innerHeight;
    nav.classList.toggle("fixed", window.scrollY > viewport);
});
