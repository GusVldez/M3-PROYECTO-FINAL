let currentIndex = 0;
const images = document.querySelectorAll('.responsive-image');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Cicla las imágenes
    const offset = -currentIndex * 237.5; // Calcula el desplazamiento
    document.querySelector('.banner-slider').style.transform = `translateX(${offset}vw)`;
}

// Cambia la imagen cada 4 segundos
setInterval(showNextImage, 3000);