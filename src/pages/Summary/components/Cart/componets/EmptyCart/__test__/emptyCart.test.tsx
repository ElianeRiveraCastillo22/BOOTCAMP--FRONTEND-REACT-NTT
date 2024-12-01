import { render, screen } from "@testing-library/react";
import { EmptyCart } from "../emptyCart";

describe("<EmptyCart/>", () => {
    it("should display an empty cart message with an image when no products are found in the search", () => {
        render(<EmptyCart />);

        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            "src",
            "src/assets/images/noProducts.png"
        );

        const heading = screen.getByText("Oh, no!");
        expect(heading).toBeInTheDocument();

        const message = screen.getByText(
            "You have not added any items to your cart 😓"
        );
        expect(message).toBeInTheDocument();
    });
});
