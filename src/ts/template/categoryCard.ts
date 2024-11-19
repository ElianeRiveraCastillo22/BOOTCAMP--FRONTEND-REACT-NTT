export function templateCategoryCard( category:string): HTMLElement {

    const cardCategory = document.createElement("figure")
    cardCategory.classList.add("categories__item")

    const elementImg = document.createElement("img")
    elementImg.src = `assets/icons/category/${category}.svg`
    elementImg.alt = category
    elementImg.dataset.category = category

    const elementDescription = document.createElement("figcaption")
    elementDescription.textContent = category
    elementDescription.dataset.category = category

    cardCategory.appendChild(elementImg)
    cardCategory.appendChild(elementDescription)

    return cardCategory

}