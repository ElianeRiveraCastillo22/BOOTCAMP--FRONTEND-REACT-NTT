import { render, screen } from "@testing-library/react";
import { CategorySection } from "../../CategorySection";
import { useCarousel } from "../HorizontalCarouselControl/hook/useCarousel";

jest.mock("../HorizontalCarouselControl/hook/useCarousel", () => ({
    useCarousel: jest.fn().mockReturnValue({
        pointNumber: 3,
        lastSectionShiftSize: 654,
    }),
}));
useCarousel;
jest.mock("../CategoryCard/CategoryCard", () => ({
    CategoryCard: jest.fn(() => <div>Category Card</div>),
}));
jest.mock("../CategorySkeleton/CategorySkeleton", () => ({
    CategorySkeleton: jest.fn(() => <div>Skeleton</div>),
}));

describe("<CategorySection/>", () => {
    const dataCategory = ["mens-shoes", "beauty", "furniture"];

    it("should render skeletons when loadingCategoryList is true", () => {
        render(
            <CategorySection
                dataCategory={dataCategory}
                loadingCategoryList={true}
            />
        );

        expect(screen.queryByText("Category Card")).not.toBeInTheDocument();
    });

    it("should render CategoryCard components when loadingCategoryList is false", () => {
        render(
            <CategorySection
                dataCategory={dataCategory}
                loadingCategoryList={false}
            />
        );

        expect(screen.getAllByText("Category Card")).toHaveLength(
            dataCategory.length
        );
        expect(screen.queryByText("Skeleton")).not.toBeInTheDocument();
    });

    it("should render the correct number of HorizontalCarouselControl components", () => {
        render(
            <CategorySection
                dataCategory={dataCategory}
                loadingCategoryList={false}
            />
        );

        const controls = screen.getAllByTestId(/^control-item-/);
        expect(controls).toHaveLength(3);
    });
});
