import { MappedProduct } from "../../../../../models/product.model";

export function filterProductNames(dataProducts: MappedProduct[] , searchByTitle: string): MappedProduct[] {

    if (!dataProducts) {
        return [];
    }

    if (!searchByTitle.trim()) {
        return dataProducts;
    }

    const inputLowerCase = searchByTitle.toLowerCase();

    return dataProducts.filter((product) => {
        const titleLowerCase = product.title.toLowerCase().split(" ");
        return titleLowerCase.some((word) => word.startsWith(inputLowerCase));
    });
}
