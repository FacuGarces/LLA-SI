const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const overlay = document.querySelector("#overlay"); // Seleccionamos la overlay

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    overlay.classList.add("visible"); // Mostramos la overlay
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    overlay.classList.remove("visible"); // Ocultamos la overlay
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnAbrir = abrir.contains(event.target);

    if (!isClickInsideNav && !isClickOnAbrir) {
        nav.classList.remove("visible");
        overlay.classList.remove("visible"); // Ocultamos la overlay si se hace clic fuera del menú
    }
});

// Evitar que el clic dentro del menú cierre el menú
nav.addEventListener("click", (event) => {
    event.stopPropagation();
});
