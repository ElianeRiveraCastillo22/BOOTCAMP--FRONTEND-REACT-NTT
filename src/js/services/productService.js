

export function filterProductNames(products, inputText) {

    // podrías considerar usar include para reducir la lógica
    const matchingProducts = products.filter((product)=>{
        const words = product.productTitle.split(' ');
        const matchingTexts=  words.filter((text)=>{
            return text.toLowerCase().slice(0,inputText.length) == inputText.toLowerCase()
        })
        return !matchingTexts.length == 0
    })

    return matchingProducts

}
