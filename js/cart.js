

let cart = localStorage.getItem('cart') 
? JSON.parse(localStorage.getItem('cart')) : [];



function displayCartProduct(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    let result = "";
    cart.forEach(item => {
        result += `<tr class="cart-item">
                     <td></td>
                     <td class="cart-image">
                         <img src=${item.img.singleImage} alt="">
                         <i class="bi bi-x delete-cart" data-id=${item.id}></i>
                     </td>
                     <td>${item.name}</td>
                     <td>$${item.price.newPrice}</td>
                     <td class="product-quantity">${item.quantity}</td>
                     <td class="product-subtotal">$108.00</td>
                   </tr>`
    });
    cartWrapper.innerHTML = result;
    removeCartItem();
    
}

function removeCartItem(){
    let cartItems = document.querySelector('.header-cart-count');
    const deleteCartBtn = document.querySelectorAll('.delete-cart');
    deleteCartBtn.forEach((button) => {
        button.addEventListener('click', function(e) {
            const id = e.target.dataset.id;
            cart = cart.filter((item) => item.id !== Number(id));
            localStorage.setItem("cart", JSON.stringify(cart));
            cartItems.innerHTML = cart.length;
            displayCartProduct();
            saveCartValues();
        })
    })
}


function saveCartValues(){
    const cartTotal = document.getElementById("cart-total");
    const subTotal = document.getElementById("subtotal");
    const fastCargo = document.getElementById("fast-cargo");
    const fastCargoPrice = 15;
    let itemsTotal = 0;

    cart.forEach(item => {
        itemsTotal += item.price.newPrice * item.quantity
    });
   
    subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
    cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;

    fastCargo.addEventListener('change', function(e){
        if(e.target.checked){
            cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
        }else {
            cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
        }
    });
}

displayCartProduct();
saveCartValues();