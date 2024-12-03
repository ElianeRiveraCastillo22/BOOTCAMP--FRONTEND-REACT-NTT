import { productMapper } from "../mappers/product.mapper";
import {
    MappedProduct,
    MappedProductResponse,
    ProductResponse,
} from "../models/product.model";

async function getProductCategoryList(): Promise<string[]> {
    try {
        const url = `/api/products/category-list`;

        const response = await fetch(url);
        if (!response.ok)
            throw new Error(
                `Fallo al buscar  la lista de categorías, status: ${response.status}`
            );

        const data: string[] = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

async function getAllProducts(
    limit: string,
    skip: string
): Promise<MappedProductResponse> {
    try {
        const url = `/api/products?limit=${limit}&&skip=${skip}`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(
                `Failed to search for products, status: ${response.status}`
            );

        const data: ProductResponse = await response.json();
        const products: MappedProduct[] = data.products.map(productMapper);

        return {
            products,
            total: data.total,
            skip: data.skip,
            limit: data.limit,
        };
    } catch (error) {
        throw error;
    }
}

async function getCategoryProducts(category: string): Promise<MappedProduct[]> {
    try {
        const url = `/api/products/category/${category}`;

        const response = await fetch(url);
        if (!response.ok)
            throw new Error(
                `Failed to search for products in the category, status: ${response.status}`
            );

        const data: ProductResponse = await response.json();

        return data.products.map(productMapper);
    } catch (error) {
        throw error;
    }
}

async function fetchDistricts(): Promise<string[]> {
    try {
        const response = await fetch("src/data/districts.json");
        if (!response.ok) throw new Error("Failed to fetch districts");
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    getProductCategoryList,
    getAllProducts,
    getCategoryProducts,
    fetchDistricts,
};
