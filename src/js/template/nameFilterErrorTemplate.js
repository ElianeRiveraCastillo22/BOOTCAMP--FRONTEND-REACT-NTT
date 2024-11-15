export function nameFilterErrorTemplate() {

    const containerMessageError = document.createElement("div")
    containerMessageError.classList.add("product-searchError")

    const containerImg = document.createElement("figure")
    containerImg.classList.add("product-searchError__figure")

    const img = document.createElement("img")
    img.classList.add("product-searchError__image")
    img.src = "assets/icons/search-error.svg"

    const textErrror = document.createElement("p")
    textErrror.classList.add("product-searchError__message")
    textErrror.textContent = "Ups, no hemos encontrado productos que coincidan con tu búsqueda."

    containerImg.appendChild(img)
    containerMessageError.appendChild(containerImg)
    containerMessageError.appendChild(textErrror)

    return containerMessageError

}