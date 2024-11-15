

export function filterProductNames(products, inputText) {

    const matchingProducts = products.filter((product)=>{
        const words = product.title.split(' ');
        const matchingTexts=  words.filter((text)=>{
            return text.toLowerCase().slice(0,inputText.length) == inputText.toLowerCase()
        })
        return !matchingTexts.length == 0
    })

    return matchingProducts

}
