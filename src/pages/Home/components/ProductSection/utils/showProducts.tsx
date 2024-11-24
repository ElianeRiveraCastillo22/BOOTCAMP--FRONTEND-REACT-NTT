import { ReactNode } from "react";
import { MappedProduct } from "../../../../../models/product.model";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function showProducts(data: MappedProduct[]): ReactNode {
    return data?.map((product) => {
        return <ProductCard key={product.id} product={product} />
    })
}
