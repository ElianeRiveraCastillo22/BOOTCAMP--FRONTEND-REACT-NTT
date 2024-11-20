// si no se le reasignará ningún valor se debe inicialiar con const
const cart = [];

function filterExistingProducts(newproduct) {

    return cart.find((product)=>product.id == newproduct.id)

}

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
    cart,
    filterExistingProducts
}
