import { useEffect, useState } from "react";
import { useFilterContext } from "../../../../context";
import { MappedProduct } from "../../../../models/product.model";
import { ProductSkeleton } from "./components/ProductSkeleton/ProductSkeleton";
import { filterProductNames } from "./modules/filterProductNames";
import { showProducts } from "./modules/showProducts";
import "./ProductSection.css";

interface Props {
    dataProducts: MappedProduct[];
    loadingDataProducts: boolean
}

export function ProductSection({ dataProducts, loadingDataProducts }: Props) {

    const { searchByTitle, searchByCategory } = useFilterContext();
    const [processedData, setProcessedData] = useState<MappedProduct[]>([]);

    useEffect(() => {

        let filteredData = filterProductNames(dataProducts, searchByTitle);
        setProcessedData(filteredData);

    }, [dataProducts, searchByTitle, searchByCategory]);

    if (loadingDataProducts) {
        return (
            <section className="products__list">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index}/>
                    ))
                }
            </section>
        )
    }

    return (
        <section
            className={
                processedData.length === 0
                    ? "products__list--error"
                    : "products__list"
            }
        >
            {
                showProducts(processedData)
            }
        </section>
    );
}