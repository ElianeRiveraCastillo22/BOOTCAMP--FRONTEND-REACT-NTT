import { BASE_API, getAllProducts } from "../services/api.js"

async function renderProducts() {

    const arrayCategoryList = await getAllProducts(BASE_API, '/products?skip=120')

}
export {
    renderProducts
}