import { productMapper } from "../mappers/product.mapper";
import { MappedProduct, ProductResponse } from "../models/product.model";

async function getProductCategoryList(): Promise <string[]> {
    try {
        const url = `${import.meta.env.VITE_BASE_API}/products/category-list`

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fallo al buscar  la lista de categorías, status: ${response.status}`);

        const data: string[]= await response.json();
        return data

    } catch (error) {

        throw error

    }

}

async function getAllProducts(): Promise<MappedProduct[]> {
    try {

        const url = `${import.meta.env.VITE_BASE_API}/products`

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fallo al buscar productos, status: ${response.status}`);

        const data: ProductResponse = await response.json();
        return data.products.map(productMapper);

    } catch (error) {

        throw error

    }
}

async function getCategoryProducts(category: string): Promise<MappedProduct[]> {
    try{

        const url = `${import.meta.env.VITE_BASE_API}/products/category/${category}`

        const response = await fetch(url);
        if(!response.ok) throw new Error(`Fallo al buscar los produtos de la categoría, status: ${response.status}`)

        const data: ProductResponse = await response.json()

        return data.products.map(productMapper)

    }catch(error){

        throw error

    }
}

async function fetchDistricts():Promise<string[]>  {

    try {

        const response = await fetch("src/data/districts.json");
        if (!response.ok) throw new Error("Failed to fetch districts");
        const data = await response.json();
        return data

    } catch (error) {
        throw error
    }

};


export {
    getProductCategoryList,
    getAllProducts,
    getCategoryProducts,
    fetchDistricts
}
