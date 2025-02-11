const productId = localStorage.getItem("productId") 
? JSON.parse(localStorage.getItem("productId")) 
: localStorage.setItem("productId", JSON.stringify(1));


const products = localStorage.getItem("productId") 
? JSON.parse(localStorage.getItem("products")) 
: localStorage.setItem("products", JSON.stringify([]));