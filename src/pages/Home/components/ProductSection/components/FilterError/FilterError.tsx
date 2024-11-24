import { ReactNode } from "react";

export const FilterError = (): ReactNode => {
    return (
        <div className="product-searchError">
            <figure className="product-searchError__figure">
                <img className="product-searchError__image" src="src/assets/icons/search-error.svg"/>
            </figure>
            <p className="product-searchError__message">Ups, no hemos encontrado productos que coincidan con tu búsqueda.</p>
        </div>
    )
}