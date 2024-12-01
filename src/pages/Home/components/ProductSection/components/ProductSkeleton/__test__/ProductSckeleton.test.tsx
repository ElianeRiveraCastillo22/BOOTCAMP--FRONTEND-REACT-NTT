import { render, screen } from "@testing-library/react";
import { ProductSkeleton } from "../ProductSkeleton";

describe("<ProductSkeleton/>", () => {
    it("should render the skeleton", () => {
        render(<ProductSkeleton />);

        const skeletonElement = screen.getByRole("article");
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveClass("product-skeleton");
    });
});
