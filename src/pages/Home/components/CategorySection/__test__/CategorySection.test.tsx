import { render, screen } from "@testing-library/react";
import { CategorySection } from "../CategorySection";

jest.mock("../components/CategoryCard/CategoryCard", () => ({
    CategoryCard: jest.fn(() => <div>Category Card</div>),
}));

jest.mock("../components/CategorySkeleton/CategorySkeleton", () => ({
    CategorySkeleton: jest.fn(() => <div>Loading...</div>),
}));

jest.mock("../components/HorizontalCarouselControl/hook/useCarousel", () => ({
    useCarousel: jest.fn(() => ({
        pointNumber: 3,
        lastSectionShiftSize: 0,
    })),
}));

describe("CategorySection", () => {
    it("should render the category cards when dataCategory is provided and loadingCategoryList is false", async () => {
        const mockData = ["mens-shirts", "fragrances", "beauty"];

        render(
            <CategorySection
                dataCategory={mockData}
                loadingCategoryList={false}
            />
        );
        expect(screen.getAllByText("Category Card")).toHaveLength(
            mockData.length
        );
    });
});
