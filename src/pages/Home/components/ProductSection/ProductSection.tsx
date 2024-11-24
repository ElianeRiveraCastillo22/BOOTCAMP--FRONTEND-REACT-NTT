import { useEffect, useState } from "react";
import { useFilterContext } from "../../../../context/filters/Usefilters.context";
import { MappedProduct } from "../../../../models/product.model";
import "./ProductSection.css";
import { filterProductNames } from "./utils/filterProductNames";
import { paintProducts } from "./utils/renderProducts";

type Data<T> = T | null;
interface Props{
    dataProducts:Data<MappedProduct[]>
}

export function ProductSection({dataProducts}:Props) {
    const {searchByTitle, searchByCategory} = useFilterContext()
    const [processedData, setProcessedData] = useState<Data<MappedProduct[]>>(null)

    useEffect(() => {

        const filteredData = filterProductNames(dataProducts, searchByTitle);
        setProcessedData(filteredData)

    }, [searchByTitle]);

    useEffect(()=>{

        const filteredProductsByCategory = dataProducts?.filter(product => product.category === searchByCategory)
        if(filteredProductsByCategory){
            console.log("pasa")
            setProcessedData(filteredProductsByCategory)
            console.log(processedData)
        }

    },[searchByCategory])



    return (
        <section className={ processedData?.length === 0 ? "products__list--error" : "products__list" }>
            {paintProducts(processedData, dataProducts)}
        </section>
    );
}
