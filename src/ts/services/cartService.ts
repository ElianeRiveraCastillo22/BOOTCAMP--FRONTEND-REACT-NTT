import { ProductInCart } from "../models/cart.interface";

let cart: ProductInCart[] = [];

function filterExistingProducts(newproduct: ProductInCart) {

    return cart.find((product)=>product.id == newproduct.id)

}

function addToCart(product: ProductInCart) {

    cart.push(product);
    getCartCount()

}

function getCartCount(): number {
    return cart.length;
}

function updateCartCount() {

    const counterValue = document.querySelector(".header__counter")
    if (counterValue) {
        counterValue.textContent = `${getCartCount()}`;
    }

}

export{
    addToCart,
    getCartCount,
    updateCartCount,
    cart,
    filterExistingProducts
}
