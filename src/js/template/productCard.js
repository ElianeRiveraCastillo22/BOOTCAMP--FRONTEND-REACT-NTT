export function templateProductCard({
    id,
    productTitle,
    productImage,
    availabilityStatus,
    productPrice
}){
    const product = document.createElement('article');
    product.classList.add('products__item');

    const productImageBox = document.createElement('figure');
    productImageBox.classList.add('products__image');

    const elemProductImage = document.createElement('img');
    elemProductImage.src = productImage;
    elemProductImage.alt = 'Producto Blossom Pouch';

    productImageBox.appendChild(elemProductImage);

    const descriptionContainer = document.createElement('section');
    descriptionContainer.classList.add('products__description');

    const title = document.createElement('p');
    title.classList.add('products__title');
    title.textContent = productTitle;
    descriptionContainer.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('products__descriptionText');
    description.textContent = availabilityStatus;
    descriptionContainer.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('products__price');
    price.textContent = productPrice;
    descriptionContainer.appendChild(price);

    const button = document.createElement('button');
    button.classList.add('products__add-to-cart');
    button.dataset.idproduct = id
    const containerSvg = document.createElement('figure');
    containerSvg.classList.add('products__cart');

    const iconBag = document.createElement("img")
    iconBag.src = "assets/icons/bag.svg";
    iconBag.alt = 'icon bag';

    containerSvg.appendChild(iconBag)

    // pregunta
/*  const svg = document.createElement('svg');
    svg.classList.add('products_iconCart');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');

    const use = document.createElement('use');
    use.setAttribute('xlink:href', `../../../assets/icons/bag.svg#icon-cart`);
    svg.appendChild(use);
    button.appendChild(svg); */

    const buttonText = document.createElement('p');
    buttonText.textContent = 'Agregar al carrito';

    button.appendChild(containerSvg)
    button.appendChild(buttonText);

    product.appendChild(productImageBox);
    product.appendChild(descriptionContainer);
    product.appendChild(button);
    return product
}