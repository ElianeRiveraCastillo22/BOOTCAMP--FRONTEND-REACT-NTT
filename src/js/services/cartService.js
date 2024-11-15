let cart = [];

function addToCart(product) {
    cart.push(product);
    getCartCount()
}

function getCartCount() {
    return cart.length;
}

function updateCartCount() {
    const counterValue = document.querySelector(".header__counter")
    if (counterValue) {
        counterValue.textContent = getCartCount();
    }
}

export{
    addToCart,
    getCartCount,
    updateCartCount,
    cart
}
