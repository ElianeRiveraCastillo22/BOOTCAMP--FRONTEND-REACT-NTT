import { MappedProduct } from "../../../../../models/product.model";
type Data<T> = T | null;

export function filterProductNames(dataProducts: Data<MappedProduct[]>, searchByTitle: string): Data<MappedProduct[]> {


    if (!dataProducts){
        return null
    }

    if (!searchByTitle.trim()) {
        return dataProducts
    }

    const inputLowerCase = searchByTitle.toLowerCase();

    return dataProducts.filter((product) => {
        const titleLowerCase = product.title.toLowerCase().split(" ");
        return titleLowerCase.some((word) => word.startsWith(inputLowerCase));
    });

}
