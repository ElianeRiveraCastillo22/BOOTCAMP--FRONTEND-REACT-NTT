import { BASE_API, getAllProducts } from "../services/api.js"
import { templateProductCard } from "../template/productCard.js"

const productsList = document.querySelector(".products__list")

function showProducts(arrProducts) {

    arrProducts.forEach(product => {
        productsList.appendChild(templateProductCard(product.images[0], product.availabilityStatus, product.price, product.title))
    });

}

async function renderProducts() {

    try{

        const arrayCategoryList = await getAllProducts(BASE_API, '/products')
        if(!arrayCategoryList) throw new Error("lo sentimos no se encontro la lista de productos", arrayCategoryList)
        showProducts(arrayCategoryList.products)

    }catch(error){
        console.error("Error", error)
    }

}

export {
    renderProducts,
    showProducts
}