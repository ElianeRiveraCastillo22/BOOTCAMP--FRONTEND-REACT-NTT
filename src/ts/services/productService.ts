import { MappedProduct } from "../models/product.interface";


export function filterProductNames(products:MappedProduct[], inputText: string): MappedProduct[]  {

    const matchingProducts: MappedProduct[] = products.filter((product)=>{

        const words = product.productTitle.split(' ');
        const matchingTexts: string[] | []=  words.filter((text)=>{
            return text.toLowerCase().slice(0,inputText.length) == inputText.toLowerCase()
        })

        return matchingTexts.length > 0

    })

    return matchingProducts

}
