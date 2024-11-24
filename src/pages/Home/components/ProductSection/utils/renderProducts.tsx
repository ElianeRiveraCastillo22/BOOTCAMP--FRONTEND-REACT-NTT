import { ReactNode } from "react";
import { MappedProduct } from "../../../../../models/product.model";
import { FilterError } from "../components/FilterError/FilterError";
import { showProducts } from "./showProducts";

type Data<T> = T | null;

export function paintProducts(
    processedData: Data<MappedProduct[]> | null, 
    dataProducts: Data<MappedProduct[]>
): ReactNode {

    if (processedData === null) {

        if(dataProducts) return showProducts(dataProducts);

    }else if(processedData.length > 0){
        return showProducts(processedData);
    } else {

        if (processedData.length === 0) {
            return <FilterError />;
        } else {
            return showProducts(processedData);
        }

    }
}