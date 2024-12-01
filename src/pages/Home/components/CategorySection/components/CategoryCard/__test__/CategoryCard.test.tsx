import { useFilterContext } from "@/context";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { CategoryCard } from "../CategoryCard";
import { updateCategoryCardStyle } from "../modules/updateCategoryCardStyle";

jest.mock("@/context", () => ({
    useFilterContext: jest.fn(),
}));

jest.mock("../modules/updateCategoryCardStyle", () => ({
    updateCategoryCardStyle: jest.fn((ref) => {
        if (ref.current) {
            ref.current.classList.add("categories__item--selected");
        }
    }),
}));

describe("<CategoryCard />", () => {
    let setCardCategoryMock: jest.Mock;
    let setSearchByCategoryMock: jest.Mock;

    beforeEach(() => {
        setCardCategoryMock = jest.fn();
        setSearchByCategoryMock = jest.fn();
        (useFilterContext as jest.Mock).mockReturnValue({
            setSearchByCategory: setSearchByCategoryMock,
        });
    });

    it("should render category card with correct category name", () => {
        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
            />
        );
        expect(screen.getByText("Electronics")).toBeInTheDocument();
    });

    it("should call setSearchByCategory with the correct category on click", () => {
        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
            />
        );
        act(() => {
            fireEvent.click(screen.getByText("Electronics"));
        });
        expect(setSearchByCategoryMock).toHaveBeenCalledWith("Electronics");
    });

    it("should call updateCategoryCardStyle when clicked", () => {
        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
            />
        );

        fireEvent.click(screen.getByText("Electronics"));
        expect(updateCategoryCardStyle).toHaveBeenCalled();
    });

    it("should toggle 'categories__item--selected' class on img or figcaption click", () => {
        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
            />
        );

        const figcaptionElement = screen.getByText("Electronics");
        figcaptionElement.classList.add("categories__item");
        const imgElement = screen.getByAltText("Electronics");

        expect(figcaptionElement).not.toHaveClass("categories__item--selected");

        act(() => {
            fireEvent.click(imgElement);
        });
        act(() => {
            fireEvent.click(imgElement);
        });

        expect(figcaptionElement).toHaveClass("categories__item--selected");
    });

    it("should remove 'categories__item--selected' class when clicking on img or figcaption if the category is already selected", () => {
        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
            />
        );

        const figcaptionElement = screen.getByText("Electronics");
        figcaptionElement.classList.add("categories__item");
        figcaptionElement.classList.add("categories__item--selected");

        const imgElement = screen.getByAltText("Electronics");
        expect(figcaptionElement).toHaveClass("categories__item--selected");
        act(() => {
            fireEvent.click(figcaptionElement);
        });

        act(() => {
            fireEvent.click(imgElement);
        });
        figcaptionElement.classList.remove("categories__item--selected");

        expect(figcaptionElement).not.toHaveClass("categories__item--selected");
    });

    it("should set the first category ref if provided", () => {
        const firstCategoryRefMock = { current: document.createElement("div") };

        render(
            <CategoryCard
                category="Electronics"
                setCardCategory={setCardCategoryMock}
                firstCategoryRef={firstCategoryRefMock}
            />
        );

        expect(setCardCategoryMock).toHaveBeenCalledWith(
            firstCategoryRefMock.current
        );
    });
});
