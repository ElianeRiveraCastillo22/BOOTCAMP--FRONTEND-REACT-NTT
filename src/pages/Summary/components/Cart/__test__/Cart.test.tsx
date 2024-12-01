import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import { useShoppingCartContext } from "@/context";
import { productStub } from "@/mappers/__stubs__/product.stub";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
}));

describe("Cart", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render correctly with an empty cart", () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [],
        });

        render(<Cart />);

        expect(screen.getByText("My Cart")).toBeInTheDocument();
        expect(screen.getByText("$ 0.00")).toBeInTheDocument();
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
    });

    it("should render products in the cart", () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [
                {
                    product: productStub,
                    quantity: 2,
                },
            ],
        });

        render(<Cart />);

        expect(
            screen.getByText("Essence Mascara Lash Princess")
        ).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("should calculate the total amount correctly", () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [
                {
                    product: productStub,
                    quantity: 2,
                },
            ],
        });

        render(<Cart />);

        expect(screen.getByText("$ 19.98")).toBeInTheDocument();
    });
});
