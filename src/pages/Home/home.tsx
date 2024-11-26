import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import { BASE_API, getAllProducts, getCategoryProducts, getProductCategoryList } from "../../services/api.service";
import { CategorySection } from "./components/CategorySection/CategorySection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { useFilterContext } from "../../context";
import { MappedProduct } from "../../models/product.model";
import "./Home.css"

export const Home = () => {

    const { searchByCategory } = useFilterContext();
    // para evitar tener directamente el path del endpoint se puede encapsular en un custom hook que solo retorne el dato y estado de la petici'on
    const { data: dataCategory } = useFetch(() => getProductCategoryList(BASE_API, "/products/category-list"));
    const { data: dataProducts } = useFetch(() => getAllProducts(BASE_API, "/products"));

    const [currentData, setCurrentData] = useState<MappedProduct[]>([]);

    function hideSearchInput() {
        // no palabras magicas
        const locactionSummary = "/home";
        if (window.location.pathname === locactionSummary) {
            const inputHeader = document.querySelectorAll(".header__input");
            inputHeader.forEach((input) => {
                input.classList.remove("header__input--hideSummar");
            });
        }
    }

    useEffect(() => {
        hideSearchInput();
    }, []);

    useEffect(() => {
        async function fetchData() {

            // no palabras m'agicas
            if (!searchByCategory || searchByCategory === 'AllProducts') {

                setCurrentData(dataProducts ?? []);
            } else {

                // igual aqu'i no usemos el path directamente, solo pasemos el valor que necesita para armar el path final
                const dataByCategory = await getCategoryProducts(BASE_API, `/products/category/${searchByCategory}`);
                setCurrentData(dataByCategory);
            }
        }
        fetchData();

    }, [searchByCategory, dataProducts]);

    return (
        <main className="main__home">
            <CategorySection dataCategory={dataCategory} />
            <ProductSection dataProducts={currentData} />
        </main>
    );
};
