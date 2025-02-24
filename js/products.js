import { product1st } from "./glide.js";

let products = localStorage.getItem("products") 
? JSON.parse(localStorage.getItem("products")) : [];

let cart = localStorage.getItem('cart') 
? JSON.parse(localStorage.getItem('cart')) : [];


function addToCart() {
  const cartItems = document.querySelector('.header-cart-count');
  const buttons = [...document.getElementsByClassName("add-to-cart")];
  buttons.forEach(element => {
    const inCart = cart.find((item) => item.id === Number(element.id));

    if(inCart){
      element.setAttribute('disable', 'disable')
    }else {
      element.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.id;
        const findProduct = products.find((product) => product.id === Number(id));
        cart.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        element.setAttribute('disable', 'disable');
        cartItems.innerHTML = cart.length;
      });
    }
  });
}

function productRoute(){
  const productLink = document.getElementsByClassName("product-link");
  Array.from(productLink).forEach((button) => {
    button.addEventListener("click", function(e){
      e.preventDefault();
      const id = e.target.dataset.id;
      localStorage.setItem("productId",JSON.stringify(id));
      window.location.href = "single-product.html";
    })
  })
}

function productsFunc(){
  const productsContainer = document.getElementById("product-list");

let result = "";

products.forEach(item => {
    result += `
     <li class="product-item glide__slide">
            <div class="product-image">
              <a href="#">
                <img src=${item.img.singleImage} alt="" class="img1">
                <img src=${item.img.thumbs[1]} alt="" class="img2">
              </a>
            </div>
            <div class="product-info">
              <a href="$" class="product-title">${item.name}</a>
              <ul class="product-star">
                <li>
                  <i class="bi bi-star-fill"></i>
                </li>
                <li>
                  <i class="bi bi-star-fill"></i>
                </li>
                <li>
                  <i class="bi bi-star-fill"></i>
                </li>
                <li>
                  <i class="bi bi-star-fill"></i>
                </li>
                <li>
                  <i class="bi bi-star-half"></i>
                </li>
              </ul>
              <div class="product-prices">
                <strong>$${item.price.newPrice}</strong>
                <span>$${item.price.oldPrice}</span>
              </div>
              <span class="product-discount">-${item.discount}%</span>
              <div class="product-links">
                <button class="add-to-cart" id=${item.id}>
                  <i class="bi bi-basket-fill"></i>
                </button>
                <button>
                  <i class="bi bi-heart-fill"></i>
                </button>
                <a href="#">
                  <i class="bi bi-eye-fill"></i> 
                </a>
                <a href="#">
                  <i class="bi bi-share-fill"></i> 
                </a>
              </div>
            </div>
          </li>   
    `
    productsContainer ? (productsContainer.innerHTML = result) : "";
    addToCart();
});

product1st();
productRoute();

}

export default productsFunc;