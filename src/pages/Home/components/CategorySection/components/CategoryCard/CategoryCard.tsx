import { ReactNode, useEffect, useRef } from "react";
import { useFilterContext } from "../../../../../../context";
import "./CategoryCard.css";
import { updateCategoryCardStyle } from "./modules/updateCategoryCardStyle";
import { typeOfResponse } from "../../../types/typeOfResponse";

interface CategoryCardProps {
    category: string;
    setCardCategory: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    firstCategoryRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export const CategoryCard = ({ category, setCardCategory, firstCategoryRef }: CategoryCardProps): ReactNode => {

    const refCardCatecory = useRef<HTMLElement>(null);
    const refNameCategory = useRef<HTMLElement>(null);

    const { setSearchByCategory } = useFilterContext()

    useEffect(() => {

        if (firstCategoryRef?.current) {
            setCardCategory(firstCategoryRef.current);
        }

    }, [firstCategoryRef]);

    function handleClick() {
        const category = refNameCategory.current?.dataset.category;

        function updateProductRequestType(){
            if (category) {
                if(refNameCategory.current?.classList.contains("categories__item--selected")){
                    setSearchByCategory(typeOfResponse.ALL_PRODUCTS);
                }else{
                    setSearchByCategory(category);
                }
            }
        }

        updateProductRequestType()
        updateCategoryCardStyle(refNameCategory);

    }

    return (
        <figure className="categories__item" ref={firstCategoryRef ?? refCardCatecory}>
            <img
                src={`src/assets/icons/category/${category}.svg`}
                alt={category}
                data-category={category}
                onClick={handleClick}
            />
            <figcaption
                className="categories__title"
                data-category={category}
                ref={refNameCategory}
                onClick={handleClick}>
                {category}
            </figcaption>
        </figure>
    );
};