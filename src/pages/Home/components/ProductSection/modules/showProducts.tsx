import { MappedProduct } from "@/models/product.model";
import { FilterError } from "../components/FilterError/FilterError";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function showProducts(dataProducts: MappedProduct[]): React.ReactNode {
    if (!dataProducts || dataProducts.length === 0) {
        return <FilterError />;
    }
    return dataProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
    ));
}
