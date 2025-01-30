const menuBtn = document.querySelector("#sideBar")
const mobileMenu = document.querySelector("#mobileMenu")
const closeSideBar = document.querySelector("#closeSidebar")
const modalSearch = document.getElementsByClassName("modal-search")
const searchBtn = document.querySelector(".search-button")
const modalCloseBtn = document.querySelector('#modalCloseBtn')
const modalSearchWrapper = document.querySelector(".modal-wrapper")


menuBtn.addEventListener('click', () => {
   mobileMenu.style.left = "0";
   
   
});

closeSideBar.addEventListener('click', () => {
    mobileMenu.style.left = "-100%";
    console.log("tıklandı")
})

document.addEventListener('click', (e) => {
    
    const path = e.composedPath();
    if( !path.includes(mobileMenu) && 
        !path.includes(menuBtn)) {
        mobileMenu.style.left = "-100%";
    }

    if(!e.target.closest(".modal-wrapper") && 
        !e.target.closest(".search-button")){
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";

    }
   
})

searchBtn.addEventListener('click', () => {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
    
})

modalCloseBtn.addEventListener('click', () => {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
})



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
