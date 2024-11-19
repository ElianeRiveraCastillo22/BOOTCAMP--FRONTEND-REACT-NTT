import { MappedProduct } from "../models/product.interface.js";
import { BASE_API, getAllProducts } from "../services/api"
import { templateProductCard } from "../template/productCard";
import { addToCart, filterExistingProducts, updateCartCount } from "../services/cartService";
import { renderProductSkeletons } from "./productSkeletonUI.js";

const productsList = document.querySelector<HTMLElement>(".products__list")

function showProducts(arrProducts: MappedProduct[]): void {

    if(productsList) productsList.innerHTML = ""
    else console.error("El elemento productsList no existe en el DOM.");

    arrProducts.forEach(product => {
        productsList?.appendChild(templateProductCard(product))
    });

    const productButtons = document.querySelectorAll<HTMLButtonElement>(".products__add-to-cart")

    productButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{

            const productToAddToCart = {
                id: Number(button.dataset.idproduct),
                quantity: 1
            }
            const isProductExist = filterExistingProducts(productToAddToCart)
            isProductExist ? isProductExist.quantity++ : addToCart(productToAddToCart)
            updateCartCount()

        })
    })
}

async function renderProducts() {

    if(productsList) renderProductSkeletons(productsList)

    try{

        const arrayCategoryList: MappedProduct[] = await getAllProducts(BASE_API, '/products')
        if(!arrayCategoryList) throw new Error("No se encontró la lista de productos")

        sessionStorage.setItem("lastAPICalled", "/products")

        if(productsList) productsList.innerHTML = ""
        else console.error("El elemento productsList no existe en el DOM.");
        return showProducts(arrayCategoryList)

    }catch(error){
        if (error instanceof Error) console.error("Error:", error.message);
        else console.error("Error desconocido:", error);
    }

}

export {
    renderProducts,
    showProducts
}