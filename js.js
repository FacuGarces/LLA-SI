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

function bloquearScroll() {
    document.body.style.overflow = "hidden";
}

function habilitarScroll() {
    document.body.style.overflow = "auto";
}

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    overlay.classList.add("visible");
    bloquearScroll(); // Bloquea el scroll en móviles
});

cerrar.addEventListener("click", () => {
    cerrarMenu();
});

function cerrarMenu() {
    nav.classList.remove("visible");
    overlay.classList.remove("visible");
    habilitarScroll(); // Rehabilita el scroll cuando se cierra el menú
}

// Cierra el menú si se hace scroll
window.addEventListener("scroll", () => {
    if (nav.classList.contains("visible")) {
        cerrarMenu();
    }
});
