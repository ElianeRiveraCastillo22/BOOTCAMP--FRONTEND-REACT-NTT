import { getProductCategoryList, BASE_API, getCategoryProducts } from "../services/api.js";
import { templateCategoryCard } from "../template/categoryCard.js";
import { initializeCarousel } from "./carouselUI.js";
import { showProducts } from "./productUI.js";

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

    const categoryCardText = document.querySelectorAll(".categories__item figcaption")
    const categoryCardImage = document.querySelectorAll(".categories__item img")

    function getClickedCategoryName(categories) {
        categories.forEach((elementCategory)=>{
            elementCategory.addEventListener("click", async()=>{
                const categoryProducts =await getCategoryProducts(BASE_API, `/products/category/${elementCategory.dataset.category}`)
                const productsList = document.querySelector(".products__list")

                productsList.innerHTML = ""
                showProducts(categoryProducts.products)
/*                 if(filteredProducts.length <= 0){
                    productsList.appendChild(nameFilterErrorTemplate())
                    productsList.classList.add("products__list--error")
                }else{
                    productsList.classList.remove("products__list--error")
                    showProducts(filteredProducts)
                } */
            })
        })
    }
    getClickedCategoryName(categoryCardText)
    getClickedCategoryName(categoryCardImage)
}

export async function renderCategories() {

    await showCategoryList()

}