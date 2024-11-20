import { getProductCategoryList, BASE_API, getCategoryProducts, getAllProducts } from "../services/api.js";
import { templateCategoryCard } from "../template/categoryCard.js";
import { initializeCarousel } from "./carouselUI.js";
import { renderCategoryControlSkeleton, renderCategorySkeleton } from "./categorySkeletonUI.js";
import { renderProductSkeletons } from "./productSkeletonUI.js";
import { showProducts } from "./productUI.js";

const carouselTrack = document.querySelector(".carousel-track")
const categorieControl = document.querySelector(".categorie__control")


function addSelectionStylesToCategoryCard(activeCategory) {

    // usemos la sintaxis larga para mayor legibilidad
    if(!activeCategory.classList.value) { 
        activeCategory.classList.add("categories__item--selected")
    } else {
        // un poco extraño guardar en el storage el path de un endpoint, por otro lado usemos constantes para definir palabras claves.
        sessionStorage.setItem("lastAPICalled", `/products`)
        activeCategory.classList.remove("categories__item--selected")
    }

}

function removeSelectionStylesFromPreviousCard(allCategories, activeCategory) {

    const previousCategory = Object.values(allCategories).find((categoryName)=>{
        if(activeCategory !== categoryName)return categoryName.classList.contains("categories__item--selected")
    })

    if(previousCategory) previousCategory.classList.remove("categories__item--selected")

}

function getClickedCategoryName(categories, categoryCardText) {

    categories.forEach((elementCategory, elementCategoryIndex)=>{
        elementCategory.addEventListener("click", async()=>{

            sessionStorage.setItem("lastAPICalled", `/products/category/${elementCategory.dataset.category}`)

            const productsList = document.querySelector(".products__list")
            productsList.innerHTML = ""

            addSelectionStylesToCategoryCard(categoryCardText[elementCategoryIndex])
            removeSelectionStylesFromPreviousCard(categoryCardText, categoryCardText[elementCategoryIndex])

            renderProductSkeletons(productsList)

            try{

                let resposeProductList;
                // usemos una sintaxis clásica es complicado de leer
                if(sessionStorage.getItem("lastAPICalled") == "/products") resposeProductList = await getAllProducts(BASE_API, '/products?skip=20')
                else resposeProductList = await getCategoryProducts(BASE_API, sessionStorage.getItem("lastAPICalled") )
                productsList.innerHTML = ""
                showProducts(resposeProductList)

            }catch(error){
                console.log(error)
            }

        })
    })

}

async function showCategoryList() {
    renderCategorySkeleton(carouselTrack)
    renderCategoryControlSkeleton(categorieControl)
    try {

        const arrayCategoryList = await getProductCategoryList(BASE_API, '/products/category-list')
        carouselTrack.innerHTML = ""
        arrayCategoryList.forEach(category => {
            carouselTrack.appendChild(templateCategoryCard(`assets/icons/category/${category}.svg`, category))
        });

        const categoriesItem = document.querySelector(".categories__item")
        const categoriesItems = document.querySelectorAll(".categories__item")

        const categoryCardGap = 16
        const sizeOfCategoryCards = categoriesItem.clientWidth + categoryCardGap
        const numberOfCardsByCategory = categoriesItems.length
        categorieControl.innerHTML = ""
        initializeCarousel(numberOfCardsByCategory, sizeOfCategoryCards)

        const categoryCardText = document.querySelectorAll(".categories__item figcaption")
        const categoryCardImage = document.querySelectorAll(".categories__item img")

        getClickedCategoryName(categoryCardText,categoryCardText)
        getClickedCategoryName(categoryCardImage, categoryCardText)

    } catch (error) {
        console.log(error)
    }


}

export function renderCategories() {

    showCategoryList()

}