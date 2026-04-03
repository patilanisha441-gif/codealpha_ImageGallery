let images = document.querySelectorAll(".image");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;


function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    showImage();
}


function closeLightbox() {
    lightbox.style.display = "none";
}


function showImage() {
    lightboxImg.src = images[currentIndex].src;
}


function changeSlide(step) {
    currentIndex += step;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}


function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}