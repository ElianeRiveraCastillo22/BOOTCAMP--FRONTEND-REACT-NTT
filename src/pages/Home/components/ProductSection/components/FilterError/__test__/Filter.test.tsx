import { render, screen } from "@testing-library/react";
import { FilterError } from "../FilterError";

describe("<FilterError/>", () => {
    it("should render the error message", () => {
        render(<FilterError />);

        const errorMessage = screen.getByText(
            "Oops, we did not find products matching your search."
        );
        expect(errorMessage).toBeInTheDocument();
    });

    it("should render the error image", () => {
        render(<FilterError />);

        const errorImage = screen.getByAltText("search-error");
        expect(errorImage).toBeInTheDocument();
        expect(errorImage).toHaveAttribute(
            "src",
            "src/assets/icons/search-error.svg"
        );
    });

    it("should have the correct structure", () => {
        render(<FilterError />);

        const errorDiv = screen.getByTestId("search-error-container");
        expect(errorDiv).toBeInTheDocument();

        const figure = screen.getByTestId("search-error-figure");
        expect(figure).toHaveClass("product-searchError__figure");

        const img = screen.getByRole("img");
        expect(img).toHaveClass("product-searchError__image");

        const p = screen.getByTestId("search-error-message");
        expect(p).toHaveClass("product-searchError__message");
    });
});
