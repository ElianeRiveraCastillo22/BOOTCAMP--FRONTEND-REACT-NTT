import { render, screen } from "@testing-library/react";
import { CategorySkeleton } from "../CategorySkeleton";

describe("<CategorySkeleton />", () => {
    it("should render without crashing", () => {
        render(<CategorySkeleton />);
        const skeletonElement = screen.getByRole("status", {
            name: "Loading category skeleton",
        });
        expect(skeletonElement).toBeInTheDocument();
    });
});
