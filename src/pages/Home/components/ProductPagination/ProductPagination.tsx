import "./ProductPagination.css";
interface Props {
    total?: number;
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
}

export const ProductPagination = ({
    currentPage,
    nextPage,
    prevPage,
}: Props) => {
    return (
        <div className="pagination">
            <button
                className={
                    currentPage === 1
                        ? "pagination__button button pagination__button--prev pagination__button--prevNone"
                        : `pagination__button button pagination__button--prev`
                }
                aria-label="Previous page"
                onClick={prevPage}
            >
                <img
                    src="src/assets/icons/icon-next.svg"
                    alt="Icono anterior"
                />
            </button>
            <span className="pagination__text">
                {`Page ${currentPage}`}
            </span>
            <button
                className="pagination__button pagination__button--next"
                aria-label="Next page"
                onClick={nextPage}
            >
                <img
                    src="src/assets/icons/icon-next.svg"
                    alt="Icono siguiente"
                />
            </button>
        </div>
    );
};
