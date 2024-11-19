/* import { renderProducts } from "./components/productUI.js"; */

import { renderProducts } from "./components/productUI"
import { renderCategories } from "./components/categoryUI.js";
import { setupHeaderFilter } from "./components/headerUI.js";
import { initializeCartIcon } from "./components/cartUI";
/*
import { setupHeaderFilter } from "./components/headerUI.js";
import { renderProducts } from "./components/productUI.js"; */

document.addEventListener("DOMContentLoaded", ()=>{
    renderCategories()
    setupHeaderFilter()
    initializeCartIcon()
    renderProducts()
})