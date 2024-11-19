import { BASE_API, getAllProducts, getCategoryProducts } from "../services/api.js";
import { filterProductNames } from "../services/productService.js";
import { nameFilterErrorTemplate } from "../template/nameFilterErrorTemplate.js";
import { renderProductSkeletons } from "./productSkeletonUI.js";
import { showProducts } from "./productUI.js";

import { MappedProduct } from "../models/product.interface.js"


export function setupHeaderFilter() {

    function getActiveInput(): HTMLInputElement {

        let inputActivo: HTMLInputElement | null = null;

        const desktopInput = document.querySelector(".header__input--desktop") as HTMLInputElement | null;
        const mobileInput = document.querySelector(".header__input--mobile") as HTMLInputElement | null;

        if (desktopInput && mobileInput) inputActivo = getComputedStyle(desktopInput).display === "none" ? mobileInput : desktopInput;

        if (!inputActivo) throw new Error("No se encontró un input activo.");

        return inputActivo;
    }

    getActiveInput().addEventListener("input", async(event)=>{
        try{

            let resposeProductList: MappedProduct[] = [];
            const lastApiCalled = sessionStorage.getItem("lastAPICalled");

            if (lastApiCalled) {

                if (lastApiCalled === "/products") resposeProductList = await getAllProducts(BASE_API, "/products");
                else resposeProductList = await getCategoryProducts(BASE_API, lastApiCalled);

            } else console.warn("No se encontró un valor en 'lastAPICalled'");

            const filteredProducts = filterProductNames(resposeProductList, (event.target as HTMLInputElement).value);

            const productsList = document.querySelector<HTMLElement>(".products__list");

            if(productsList){
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
            }


        }catch(error){
            console.log(error)
        }


    })

}