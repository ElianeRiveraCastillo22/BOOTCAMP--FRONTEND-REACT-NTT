import { getProductCategoryList, BASE_API } from "../services/api.js";

async function showCategoryList() {

    const arrayCategoryList = await getProductCategoryList(BASE_API, '/products/category-list')

}

export async function renderCategories() {
    await showCategoryList()
}