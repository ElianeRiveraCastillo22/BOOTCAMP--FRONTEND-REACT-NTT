import { ReactNode } from "react";

export const FilterError = (): ReactNode => {
    return (
        <div
            className="product-searchError"
            data-testid="search-error-container"
        >
            <figure
                className="product-searchError__figure"
                data-testid="search-error-figure"
            >
                <img
                    className="product-searchError__image"
                    src="src/assets/icons/search-error.svg"
                    alt="search-error"
                />
            </figure>
            <p
                className="product-searchError__message"
                data-testid="search-error-message"
            >
                Oops, we did not find products matching your search.
            </p>
        </div>
    );
};
