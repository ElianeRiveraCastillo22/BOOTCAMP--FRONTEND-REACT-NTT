import { renderCategories } from "./components/categoryUI.js";
import { setupHeaderFilter } from "./components/headerUI.js";
import { renderProducts } from "./components/productUI.js";

document.addEventListener("DOMContentLoaded", async()=>{

    await renderCategories()
    setupHeaderFilter()
    await renderProducts()

})
