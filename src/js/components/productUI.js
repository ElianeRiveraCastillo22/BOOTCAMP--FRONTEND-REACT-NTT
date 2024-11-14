import { BASE_API, getAllProducts } from "../services/api.js"
import { templateProductCard } from "../template/productCard.js"
const productsList = document.querySelector(".products__list")

function showProduct(arrProducts) {

    arrProducts.products.forEach(product => {
        productsList.appendChild(templateProductCard(product.images[0], product.availabilityStatus, product.price, product.title))
    });

}

async function renderProducts() {

    const arrayCategoryList = await getAllProducts(BASE_API, '/products?skip=120')
    showProduct(arrayCategoryList)

}
export {
    renderProducts
}