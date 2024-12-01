import { updateCategoryCardStyle } from "../updateCategoryCardStyle";

describe("updateCategoryCardStyle", () => {
    let refNameCategory: React.RefObject<HTMLElement>;
    let mockElement: HTMLElement;
    let mockSelectedElement: HTMLElement;

    beforeEach(() => {
        refNameCategory = { current: document.createElement("div") };
        mockElement = document.createElement("div");
        mockElement.classList.add("categories__title");

        mockSelectedElement = document.createElement("div");
        mockSelectedElement.classList.add("categories__item--selected");
        mockSelectedElement.classList.add("categories__title");

        document.body.appendChild(mockElement);
        document.body.appendChild(mockSelectedElement);
    });

    it("should add 'categories__item--selected' class to the category and remove it from the previous selected element", () => {
        updateCategoryCardStyle(refNameCategory);

        expect(refNameCategory.current).toHaveClass(
            "categories__item--selected"
        );

        expect(mockSelectedElement).not.toHaveClass(
            "categories__item--selected"
        );
    });

    it("should toggle 'categories__item--selected' class when called twice", () => {
        updateCategoryCardStyle(refNameCategory);

        expect(refNameCategory.current).toHaveClass(
            "categories__item--selected"
        );
        expect(mockSelectedElement).not.toHaveClass(
            "categories__item--selected"
        );

        updateCategoryCardStyle(refNameCategory);

        expect(refNameCategory.current).not.toHaveClass(
            "categories__item--selected"
        );
        expect(mockSelectedElement).toHaveClass("categories__item--selected");
    });

    it("should add 'categories__item--selected' class if no element has the class", () => {
        mockSelectedElement.classList.remove("categories__item--selected");

        updateCategoryCardStyle(refNameCategory);

        expect(refNameCategory.current).toHaveClass(
            "categories__item--selected"
        );
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });
});
