let currentIndex = 0; // Índice de la imagen actual
const slides = document.querySelector('.slide'); // Contenedor de las imágenes
const images = slides.children; // Imágenes dentro del contenedor
const totalImages = images.length; // Total de imágenes en el slider

function nextSlide() {
  // Incrementa el índice y lo reinicia al llegar al final
  currentIndex = (currentIndex + 1) % totalImages;

  // Calcula el desplazamiento dinámico según el total de imágenes y el ancho del contenedor
  const offset = -(100 / totalImages) * currentIndex;

  // Aplica la transformación para desplazar las imágenes
  slides.style.transform = `translateX(${offset}%)`;
}

function adjustSlider() {
  // Ajusta el ancho del contenedor `.slide` según el número de imágenes
  slides.style.width = `${100 * totalImages}%`;

  // Ajusta el ancho de cada imagen para que ocupe el espacio correspondiente
  Array.from(images).forEach((img) => {
    img.style.width = `${100 / totalImages}%`;
  });
}

// Llama a la función `nextSlide` cada 3 segundos
setInterval(nextSlide, 3000);

// Ajusta el slider al cargar la página
window.addEventListener('load', adjustSlider);

// Vuelve a ajustar el slider si se redimensiona la ventana
window.addEventListener('resize', adjustSlider);
