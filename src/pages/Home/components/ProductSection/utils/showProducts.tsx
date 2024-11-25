import { MappedProduct } from "../../../../../models/product.model";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function showProducts(dataProducts: MappedProduct[]): React.ReactNode {
    if (!dataProducts || dataProducts.length === 0) {
        return <p>No hay productos</p>;
    }
    return dataProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
    ));
}