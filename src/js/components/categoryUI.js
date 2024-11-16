import { getProductCategoryList, BASE_API, getCategoryProducts } from "../services/api.js";
import { templateCategoryCard } from "../template/categoryCard.js";
import { initializeCarousel } from "./carouselUI.js";
import { showProducts } from "./productUI.js";

const carouselTrack = document.querySelector(".carousel-track")



function addSelectionStylesToCategoryCard(activeCategory) {

    if(!activeCategory.classList.value) activeCategory.classList.add("categories__item--selected")
    else activeCategory.classList.remove("categories__item--selected")

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

            const categoryProducts =await getCategoryProducts(BASE_API, `/products/category/${elementCategory.dataset.category}`)

            sessionStorage.setItem("lastAPICalled", `/products/category/${elementCategory.dataset.category}`)

            const productsList = document.querySelector(".products__list")
            productsList.innerHTML = ""
            showProducts(categoryProducts.products)

            addSelectionStylesToCategoryCard(categoryCardText[elementCategoryIndex])
            removeSelectionStylesFromPreviousCard(categoryCardText, categoryCardText[elementCategoryIndex])

        })
    })

}

async function showCategoryList() {

    const arrayCategoryList = await getProductCategoryList(BASE_API, '/products/category-list')

    arrayCategoryList.forEach(category => {
        carouselTrack.appendChild(templateCategoryCard(`assets/icons/category/${category}.svg`, category))
    });

    const categoriesItem = document.querySelector(".categories__item")
    const categoriesItems = document.querySelectorAll(".categories__item")

    const categoryCardGap = 16
    const sizeOfCategoryCards = categoriesItem.clientWidth + categoryCardGap
    const numberOfCardsByCategory = categoriesItems.length

    initializeCarousel(numberOfCardsByCategory, sizeOfCategoryCards)

    const categoryCardText = document.querySelectorAll(".categories__item figcaption")
    const categoryCardImage = document.querySelectorAll(".categories__item img")

    getClickedCategoryName(categoryCardText,categoryCardText)
    getClickedCategoryName(categoryCardImage, categoryCardText)

}

export async function renderCategories() {

    await showCategoryList()

}