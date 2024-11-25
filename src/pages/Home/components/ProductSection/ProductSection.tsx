import { useEffect, useState } from "react";
import { MappedProduct } from "../../../../models/product.model";
import { FilterError } from "./components/FilterError/FilterError";
import "./ProductSection.css";
import { filterProductNames } from "./utils/filterProductNames";
import { showProducts } from "./utils/showProducts";
import { useFilterContext } from "../../../../context";

interface Props {
    dataProducts: MappedProduct[];
}

export function ProductSection({ dataProducts }: Props) {
    const { searchByTitle, searchByCategory } = useFilterContext();
    const [processedData, setProcessedData] = useState<MappedProduct[]>([]);

    useEffect(() => {

        let filteredData = filterProductNames(dataProducts, searchByTitle);

        function filterByNameFromCategoryProducts(){
            if (searchByCategory && searchByCategory !== "AllProducts") {
                filteredData = filteredData.filter(
                    (product) => product.category === searchByCategory
                );
            }
        }
        filterByNameFromCategoryProducts()

        setProcessedData(filteredData);
    }, [dataProducts, searchByTitle, searchByCategory]);

    if (dataProducts.length === 0) {
        return <p>Cargando Productos...</p>;
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
                processedData.length > 0
                ? showProducts(processedData)
                : <FilterError />
            }
        </section>
    );
}