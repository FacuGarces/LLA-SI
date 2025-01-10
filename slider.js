let currentIndex = 0; // Índice de la imagen actual
const slides = document.querySelector('.slide'); // Seleccionamos el contenedor de las imágenes
const images = slides.children; // Seleccionamos las imágenes dentro del contenedor
const totalImages = images.length; // Total de imágenes en el contenedor

function nextSlide() {
  // Cambia el índice y ajusta la posición del contenedor
  currentIndex = (currentIndex + 1) % (totalImages); // Este operador hace que vuelva al inicio cuando llega al final
  
  // Calcula el desplazamiento basado en el índice actual
  const offset = -33.333 * currentIndex; // El desplazamiento es un múltiplo de 100%

  // Aplica la transformación para mover las imágenes
  slides.style.transform = `translateX(${offset}%)`;
}

// Llama a la función `nextSlide` cada 3 segundos (3000ms)
setInterval(nextSlide, 3000);
