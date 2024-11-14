export function templateCategoryCard(imgCategory, nameCategory ) {

    const cardCategory = document.createElement("figure")
    cardCategory.classList.add("categories__item")

    const elementImg = document.createElement("img")
    elementImg.src = imgCategory
    elementImg.alt = nameCategory

    const elementDescription = document.createElement("figcaption")
    elementDescription.textContent = nameCategory

    cardCategory.appendChild(elementImg)
    cardCategory.appendChild(elementDescription)

    return cardCategory

}