export function renderProductSkeletons(containerList: HTMLElement, count = 6): HTMLElement {

    for (let i = 0; i < count; i++) {
        const product = document.createElement('article');
        product.classList.add('product-skeleton');
        containerList?.append(product)
    }
    return containerList

}