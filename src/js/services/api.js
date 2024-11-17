import { productMapper } from "../utils/mappers.js";

export const BASE_API = 'https://dummyjson.com';


async function getProductCategoryList(BASE_API, PATH) {

    try{
        const response = await fetch(BASE_API + PATH);
        if(!response.ok){
            throw new Error("Error al consumir la lista de categorías",response.statusText)
        }
        return await response.json();
    }catch(error){
        console.error(`Error: ${error}`)
    }

}

async function getAllProducts(BASE_API, PATH) {
    try{
        const response = await fetch(BASE_API + PATH);

        if(!response.ok){
            throw new Error("Error al consumir la lista de productos ",response.statusText)
        }
        const data = await response.json()
        return data.products.map(productMapper)

    }catch(error){
        console.error(`Error: ${error}`)
    }
}

async function getCategoryProducts(BASE_API, PATH) {
    try{

        const response = await fetch(BASE_API + PATH);
        if(!response.ok){
            throw new Error("Error al consumir los productos de las categorías",response.statusText)
        }
        const data = await response.json()
        return data.products.map(productMapper)

    }catch(error){
        console.error(`Error: ${error}`)
    }
}

export {
    getProductCategoryList,
    getAllProducts,
    getCategoryProducts
}
