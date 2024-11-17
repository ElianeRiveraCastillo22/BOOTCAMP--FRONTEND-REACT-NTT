import { BASE_API, getAllProducts } from "../services/api.js"
import { addToCart, filterExistingProducts, updateCartCount } from "../services/cartService.js";
import { templateProductCard } from "../template/productCard.js"
import { renderProductSkeletons } from "./productSkeletonUI.js";

const productsList = document.querySelector(".products__list")

function showProducts(arrProducts) {

    arrProducts.forEach(product => {
        productsList.appendChild(templateProductCard(product))
    });

    const productButtons = document.querySelectorAll(".products__add-to-cart")

    productButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{

            const productToAddToCart = {
                id: button.dataset.idproduct,
                quantity: 1
            }
            const isProductExist = filterExistingProducts(productToAddToCart)
            isProductExist ? isProductExist.quantity++ : addToCart(productToAddToCart)
            updateCartCount()

        })
    })
}

async function renderProducts() {

    renderProductSkeletons(productsList)

    try{

        const arrayCategoryList = await getAllProducts(BASE_API, '/products')
        console.log(arrayCategoryList)
        sessionStorage.setItem("lastAPICalled", "/products")
        if(!arrayCategoryList) throw new Error("lo sentimos no se encontro la lista de productos", arrayCategoryList)
        productsList.innerHTML = ""
        return showProducts(arrayCategoryList)

    }catch(error){
        console.error("Error", error)
    }

}

export {
    renderProducts,
    showProducts
}