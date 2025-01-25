const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnAbrir = abrir.contains(event.target);

    if (!isClickInsideNav && !isClickOnAbrir) {
        nav.classList.remove("visible");
    }
});
