import { productMapper } from "../mappers/product.mapper";
import { MappedProduct, ProductResponse } from "../models/product.model";


async function getProductCategoryList(): Promise <string[]> {
    try {
        const url = `${import.meta.env.VITE_BASE_API}/products/category-list`

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fallo al buscar  la lista de categorías: ${response.statusText}`);

        const data: string[]= await response.json();
        return data

    } catch (error) {
        console.error(`Error: ${error}`);
        return [];
    }

}

async function getAllProducts(): Promise<MappedProduct[]> {
    try {

        const url = `${import.meta.env.VITE_BASE_API}/products`

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fallo al buscar productos: ${response.statusText}`);

        const data: ProductResponse = await response.json();
        return data.products.map(productMapper);

    } catch (error) {
        console.error(`Error: ${error}`);
        return [];
    }
}

async function getCategoryProducts(category: string): Promise<MappedProduct[]> {
    try{

        const url = `${import.meta.env.VITE_BASE_API}/products/category/${category}`

        const response = await fetch(url);
        if(!response.ok) throw new Error(`Fallo al buscar los produtos de la categoría: ${response.statusText}`)

        const data: ProductResponse = await response.json()
        return data.products.map(productMapper)

    }catch(error){
        console.error(`Error: ${error}`)
        return [];
    }
}

export {
    getProductCategoryList,
    getAllProducts,
    getCategoryProducts
}
