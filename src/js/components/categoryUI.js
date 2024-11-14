import { getProductCategoryList, BASE_API } from "../services/api.js";
import { templateCategoryCart } from "../template/categoryCart.js";

const carouselTrack = document.querySelector(".carousel-track")

async function showCategoryList() {

    const arrayCategoryList = await getProductCategoryList(BASE_API, '/products/category-list')
    arrayCategoryList.forEach(category => {
        carouselTrack.appendChild(templateCategoryCart(`assets/icons/category/${category}.svg`, category))
    });

}

export async function renderCategories() {

    await showCategoryList()

}