import { product1st } from "./glide.js";


function productsFunc(){
    const products = localStorage.getItem("products") 
    ? JSON.parse(localStorage.getItem("products")) : [];
    console.log(products)
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
                <button>
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
    productsContainer.innerHTML = result;
});

product1st();
}

export default productsFunc();