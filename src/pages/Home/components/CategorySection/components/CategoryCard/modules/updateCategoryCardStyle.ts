export function updateCategoryCardStyle(
    refNameCategory: React.RefObject<HTMLElement>,
): void {
    const titleCategory = document.querySelectorAll(".categories__title");
    if (refNameCategory.current) {
        const arrayNodosCategory = Object.values(titleCategory);

        const selectedPoint = arrayNodosCategory.find((dots) =>
            dots.classList.contains("categories__item--selected")
        ) as HTMLElement;

        if (selectedPoint) {
            if (!refNameCategory.current.classList.contains("categories__item--selected")) {
                refNameCategory.current?.classList.add("categories__item--selected");
                selectedPoint.classList.remove("categories__item--selected");
            } else {
                selectedPoint.classList.remove("categories__item--selected");

            }
        } else {

            refNameCategory.current?.classList.add("categories__item--selected");
        }
    }
}
