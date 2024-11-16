import { BASE_API, getAllProducts, getCategoryProducts } from "../services/api.js";
import { filterProductNames } from "../services/productService.js";
import { nameFilterErrorTemplate } from "../template/nameFilterErrorTemplate.js";
import { showProducts } from "./productUI.js";

export function setupHeaderFilter() {

    function getActiveInput() {

        let inputActivo
        const desktopInputBox = document.querySelector(".header__search--desktop")
        const desktopInput = document.querySelector(".header__input--desktop")
        const mobileInput = document.querySelector(".header__input--mobile")

        getComputedStyle(desktopInputBox).display == "none" ? inputActivo = mobileInput : inputActivo = desktopInput

        return inputActivo

    }

    getActiveInput().addEventListener("input", async(event)=>{

        let resposeProductList;
        if(sessionStorage.getItem("lastAPICalled") == "/products") resposeProductList = await getAllProducts(BASE_API, '/products?skip=20')
        else resposeProductList = await getCategoryProducts(BASE_API, sessionStorage.getItem("lastAPICalled") )

        const filteredProducts = filterProductNames(resposeProductList.products, event.target.value)

        const productsList = document.querySelector(".products__list")
        productsList.innerHTML = ""

        if(filteredProducts.length <= 0){
            productsList.appendChild(nameFilterErrorTemplate())
            productsList.classList.add("products__list--error")
        }else{
            productsList.classList.remove("products__list--error")
            showProducts(filteredProducts)
        }

    })

}