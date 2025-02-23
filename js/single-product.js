import { thumbsActiveFunc } from "./single-product/thumbs-active.js";
import { singleThumbs } from "./glide.js";
import  zoomFunc   from "./single-product/zoom.js";
import colorsFunc from "./single-product/color.js"
import valuesFunc from "./single-product/values.js"
import tabFunc from "./single-product/tabs.js";
import commentRewiewFunc from "./single-product/comment.js";


const productId = localStorage.getItem("productId") 
? JSON.parse(localStorage.getItem("productId")) 
: localStorage.setItem("productId", JSON.stringify(1));


const products = localStorage.getItem("products") 
? JSON.parse(localStorage.getItem("products")) 
: localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;


const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
oldPriceDOM.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;

const singleImageDOM = document.querySelector("#single-image");

singleImageDOM.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";

findProduct.img.thumbs.forEach(item => {
    result += `<li class="glide__slide">
                <img src=${item} alt="" class="img-fluid">
               </li>`
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

// add to cart

let cart = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem("cart")) : [];

const findCart = cart.find((item) => item.id === findProduct);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if(findCart){
    btnAddToCart.setAttribute("disabled", "disabled");
}else {
    btnAddToCart.addEventListener("click", function(){
        cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
        btnAddToCart.setAttribute("disabled", "disabled");
        localStorage.setItem("cart",JSON.stringify(cart));
        cartItems.innerHTML = cart.length;
    })
}


