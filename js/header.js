const menuBtn = document.querySelector("#sideBar")
const mobileMenu = document.querySelector("#mobileMenu")
const closeSideBar = document.querySelector("#closeSidebar")
const modalSearch = document.getElementsByClassName("modal-search")
const searchBtn = document.querySelector(".search-button")
const modalCloseBtn = document.querySelector('#modalCloseBtn')
const modalSearchWrapper = document.querySelector(".modal-wrapper")

/************* SideBar Start *****************/
export function header(){
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
     
     /************* SideBar End *****************/
     
     searchBtn.addEventListener('click', () => {
         modalSearch[0].style.visibility = "visible";
         modalSearch[0].style.opacity = "1";
         
     })
     
     modalCloseBtn.addEventListener('click', () => {
         modalSearch[0].style.visibility = "hidden";
         modalSearch[0].style.opacity = "0";
     })
}

export default header();

