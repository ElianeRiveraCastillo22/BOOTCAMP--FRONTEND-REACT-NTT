import { MappedProduct } from "../models/product.interface.js";
import { getProductCategoryList, BASE_API, getCategoryProducts, getAllProducts } from "../services/api.js";
import { templateCategoryCard } from "../template/categoryCard";
import { initializeCarousel } from "./carouselUI.js";
import { renderCategoryControlSkeleton, renderCategorySkeleton } from "./categorySkeletonUI.js";
import { renderProductSkeletons } from "./productSkeletonUI.js";
import { showProducts } from "./productUI.js";

const carouselTrack = document.querySelector<HTMLDivElement>(".carousel-track")
const categorieControl = document.querySelector<HTMLDivElement>(".categorie__control")


function addSelectionStylesToCategoryCard(activeCategory: HTMLElement) {

    if(!activeCategory.classList.value) activeCategory.classList.add("categories__item--selected")
    else {
        sessionStorage.setItem("lastAPICalled", `/products`)
        activeCategory.classList.remove("categories__item--selected")
    }

}

function removeSelectionStylesFromPreviousCard(allCategories: NodeListOf< HTMLElement>, activeCategory: HTMLElement) {

    const previousCategory = Object.values(allCategories).find((categoryName)=>{
        if(activeCategory !== categoryName)return categoryName.classList.contains("categories__item--selected")
    })

    if(previousCategory) previousCategory.classList.remove("categories__item--selected")

}

function getClickedCategoryName(categories: NodeListOf< HTMLElement>, categoryCardText: NodeListOf< HTMLElement>) {

    categories.forEach((elementCategory, elementCategoryIndex)=>{
        elementCategory.addEventListener("click", async()=>{

            sessionStorage.setItem("lastAPICalled", `/products/category/${elementCategory.dataset.category}`)

            const productsList = document.querySelector<HTMLElement>(".products__list")
            if(productsList) productsList.innerHTML = ""

            addSelectionStylesToCategoryCard(categoryCardText[elementCategoryIndex])
            removeSelectionStylesFromPreviousCard(categoryCardText, categoryCardText[elementCategoryIndex])

            if(productsList) renderProductSkeletons(productsList)

            try{

                let resposeProductList: MappedProduct[] = [];

                const lastApiCalled = sessionStorage.getItem("lastAPICalled");

                if (lastApiCalled === "/products") resposeProductList = await getAllProducts(BASE_API, '/products?skip=20');
                else if (lastApiCalled) resposeProductList = await getCategoryProducts(BASE_API, lastApiCalled);

                if(productsList) productsList.innerHTML = "";
                showProducts(resposeProductList)

            }catch(error){
                console.log(error)
            }

        })
    })

}

async function showCategoryList() {
    if(carouselTrack) renderCategorySkeleton(carouselTrack)
    if(categorieControl) renderCategoryControlSkeleton(categorieControl)

    try {

        const arrayCategoryList: string[] = await getProductCategoryList(BASE_API, '/products/category-list')
        if(carouselTrack) carouselTrack.innerHTML = ""

        arrayCategoryList.forEach(category => {
            carouselTrack?.appendChild(templateCategoryCard(category))
        });

        const categoriesItem = document.querySelector<HTMLElement>(".categories__item")
        const categoriesItems = document.querySelectorAll<HTMLElement>(".categories__item")

        if(categoriesItem && categoriesItems){
            const categoryCardGap = 16
            const sizeOfCategoryCards = categoriesItem.clientWidth + categoryCardGap
            const numberOfCardsByCategory = categoriesItems.length
            if(categorieControl) categorieControl.innerHTML = ""

            initializeCarousel(numberOfCardsByCategory, sizeOfCategoryCards)

            const categoryCardText: NodeListOf< HTMLElement> = document.querySelectorAll(".categories__item figcaption")
            const categoryCardImage: NodeListOf< HTMLElement> = document.querySelectorAll(".categories__item img")

            getClickedCategoryName(categoryCardText,categoryCardText)
            getClickedCategoryName(categoryCardImage, categoryCardText)
        }


    } catch (error) {
        console.log(error)
    }


}

export function renderCategories() {

    showCategoryList()

}