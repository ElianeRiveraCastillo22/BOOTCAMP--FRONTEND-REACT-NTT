export function renderProductSkeletons(containerList,count = 6) {

    for (let i = 0; i < count; i++) {
        const product = document.createElement('article');
        product.classList.add('product-skeleton');
        containerList.append(product)
    }
    return containerList

}