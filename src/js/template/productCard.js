export function templateProductCard(imgurlProduct, descriptionProduct, priceProduct, nameProduct){
    const product = document.createElement('article');
    product.classList.add('products__item');

    // Contenedor de la imagen
    const productImageBox = document.createElement('figure');
    productImageBox.classList.add('products__image');

    const productImage = document.createElement('img');
    productImage.src = imgurlProduct;
    productImage.alt = 'Producto Blossom Pouch'; // Agregar texto alternativo
    productImageBox.appendChild(productImage);

    // Contenedor de la descripción
    const descriptionContainer = document.createElement('section');
    descriptionContainer.classList.add('products__description');

    // Título del producto
    const title = document.createElement('p');
    title.classList.add('products__title'); // Cambiar a 'products__title'
    title.textContent = nameProduct;
    descriptionContainer.appendChild(title);

    // Descripción del producto
    const description = document.createElement('p');
    description.classList.add('products__descriptionText'); // Cambiar para evitar duplicado
    description.textContent = descriptionProduct;
    descriptionContainer.appendChild(description);

    // Precio del producto
    const price = document.createElement('p');
    price.classList.add('products__price');
    price.textContent = priceProduct;
    descriptionContainer.appendChild(price);

    // Botón de agregar al carrito
    const button = document.createElement('button');
    button.classList.add('products__add-to-cart');

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

    // Texto del botón
    const buttonText = document.createElement('p');
    buttonText.textContent = 'Agregar al carrito';

    // Armar el botón
    button.appendChild(containerSvg)
    button.appendChild(buttonText);

    // Armar el artículo
    product.appendChild(productImageBox);
    product.appendChild(descriptionContainer);
    product.appendChild(button);
    return product
}