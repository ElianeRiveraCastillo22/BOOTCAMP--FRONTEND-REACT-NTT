import { renderCategories } from "./components/categoryUI.js";
import { renderProducts } from "./components/productUI.js";

document.addEventListener("DOMContentLoaded", async()=>{

    await renderCategories()
    await renderProducts()

})
