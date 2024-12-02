import { UsePagination } from "@/Hooks/UsePagination";
import { useEffect, useState } from "react";
import { useFilterContext } from "../../context";
import { useFetch } from "../../Hooks/UseFetch";
import { MappedProduct } from "../../models/product.model";
import {
    getCategoryProducts,
    getProductCategoryList,
} from "../../services/api.service";
import { CategorySection } from "./components/CategorySection/CategorySection";
import { ProductPagination } from "./components/ProductPagination/ProductPagination";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { typeOfResponse } from "./components/types/typeOfResponse";
import "./Home.css";

export const Home = () => {
    const { searchByCategory } = useFilterContext();

    const { data: dataCategory, loading: loadingCategoryList } = useFetch(() =>
        getProductCategoryList()
    );

    const {
        data: dataProducts,
        loading: loadingDataProducts,
        currentPage,
        nextPage,
        prevPage,
    } = UsePagination();

    const [currentData, setCurrentData] = useState<MappedProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            async function fetchData() {
                if (
                    !searchByCategory ||
                    searchByCategory === typeOfResponse.ALL_PRODUCTS
                ) {
                    setCurrentData(dataProducts?.products ?? []);
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
            {!searchByCategory ||
            searchByCategory === typeOfResponse.ALL_PRODUCTS ? (
                <ProductPagination
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            ) : (
                <></>
            )}
        </main>
    );
};
