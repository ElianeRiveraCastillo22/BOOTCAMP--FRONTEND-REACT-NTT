import { BASE_API, getAllProducts, getCategoryProducts } from "../services/api.js";
import { filterProductNames } from "../services/productService.js";
import { nameFilterErrorTemplate } from "../template/nameFilterErrorTemplate.js";
import { renderProductSkeletons } from "./productSkeletonUI.js";
import { showProducts } from "./productUI.js";

export function setupHeaderFilter() {

    function getActiveInput() {

        let inputActivo
        const desktopInput = document.querySelector(".header__input--desktop")
        const mobileInput = document.querySelector(".header__input--mobile")

        getComputedStyle(desktopInput).display == "none" ? inputActivo = mobileInput : inputActivo = desktopInput

        return inputActivo

    }

    getActiveInput().addEventListener("input", async(event)=>{
        try{

            let resposeProductList;
            if(sessionStorage.getItem("lastAPICalled") == "/products") resposeProductList = await getAllProducts(BASE_API, '/products')
            else resposeProductList = await getCategoryProducts(BASE_API, sessionStorage.getItem("lastAPICalled") )
            console.log(resposeProductList)
            const filteredProducts = filterProductNames(resposeProductList, event.target.value)

            const productsList = document.querySelector(".products__list")
            productsList.innerHTML = ""
            renderProductSkeletons(productsList)

            if(filteredProducts.length <= 0){

                productsList.innerHTML = ""
                productsList.appendChild(nameFilterErrorTemplate())
                productsList.classList.add("products__list--error")

            }else{

                productsList.innerHTML = ""
                productsList.classList.remove("products__list--error")
                showProducts(filteredProducts)

            }

        }catch(error){
            console.log(error)
        }


    })

}