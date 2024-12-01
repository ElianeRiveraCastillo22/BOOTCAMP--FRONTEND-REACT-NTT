import { useEffect, useState } from "react";
import { useFilterContext } from "../../context";
import { useFetch } from "../../Hooks/UseFetch";
import { MappedProduct } from "../../models/product.model";
import {
    getAllProducts,
    getCategoryProducts,
    getProductCategoryList,
} from "../../services/api.service";
import { CategorySection } from "./components/CategorySection/CategorySection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import "./Home.css";

export const Home = () => {
    const { searchByCategory } = useFilterContext();
    const { data: dataCategory, loading: loadingCategoryList } = useFetch(() =>
        getProductCategoryList()
    );
    const { data: dataProducts, loading: loadingDataProducts } = useFetch(() =>
        getAllProducts()
    );

    const [currentData, setCurrentData] = useState<MappedProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            async function fetchData() {
                if (!searchByCategory || searchByCategory === "AllProducts") {
                    setCurrentData(dataProducts ?? []);
                } else {
                    const dataByCategory = await getCategoryProducts(
                        searchByCategory
                    );
                    setCurrentData(dataByCategory);
                }
            }
            fetchData();
        }
        fetchData();
    }, [searchByCategory, dataProducts]);

    return (
        <main className="main__home">
            <CategorySection
                dataCategory={dataCategory}
                loadingCategoryList={loadingCategoryList}
            />
            <ProductSection
                dataProducts={currentData}
                loadingDataProducts={loadingDataProducts}
            />
        </main>
    );
};
