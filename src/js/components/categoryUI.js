import { getProductCategoryList, BASE_API } from "../services/api.js";
import { templateCategoryCard } from "../template/categoryCard.js";
import { initializeCarousel } from "./carouselUI.js";

const carouselTrack = document.querySelector(".carousel-track")

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

}

export async function renderCategories() {

    await showCategoryList()

}