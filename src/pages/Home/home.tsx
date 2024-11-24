import { useFetch } from "../../Hooks/UseFetch";
import { BASE_API, getAllProducts, getProductCategoryList } from "../../services/api.service";
import { CategorySection } from "./components/CategorySection/CategorySection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import "./Home.css"

export const Home = () => {

    const { data: dataCategory } = useFetch(() => getProductCategoryList(BASE_API, "/products/category-list"));
    const { data: dataProducts } = useFetch(() => getAllProducts(BASE_API, "/products"));

    return (
        <main>
            <CategorySection dataCategory={dataCategory}/>
            <ProductSection dataProducts={dataProducts} />
        </main>
	)
}


