import { header } from "./header.js";


/*********** Slider Start ***********/

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let slideIndex = 0;

showSlides(slideIndex)

setInterval(() => {
    showSlides((slideIndex += 1))
}, 4000);

function currentSlide(n){
    showSlides((slideIndex += n))
}

nextBtn.addEventListener('click', () => {
    showSlides(++slideIndex)
})

prevBtn.addEventListener('click', () => {
    showSlides(--slideIndex)
})

function showSlides(n){
    const slides = document.getElementsByClassName("slider-item");
    const dots =  document.getElementsByClassName("slider-dot");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    
    slides[slideIndex].style.display = "flex";
    dots[slideIndex].className += " active"

}







/*********** Slider End  ************/

// Local Storage 

async function getData() {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

