import { render, screen } from "@testing-library/react";
import { ProductInCart } from "@/models/cart.interface";
import { useShoppingCartContext } from "@/context";
import { Cart } from "../../Cart";
import { productStub } from "@/mappers/__stubs__/product.stub";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
}));

describe("Cart", () => {
    const mockStateCart: ProductInCart[] = [
        {
            product: productStub,
            quantity: 2,
        },
    ];

    beforeEach(() => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: mockStateCart,
        });
    });

    it("should render the cart title", () => {
        render(<Cart />);
        expect(screen.getByText("My Cart")).toBeInTheDocument();
    });

    it("should render the table headers", () => {
        render(<Cart />);
        expect(screen.getByText("Product")).toBeInTheDocument();
        expect(screen.getByText("Quantity")).toBeInTheDocument();
    });

    it("should render all products from stateCart", () => {
        render(<Cart />);
        expect(
            screen.getByText("Essence Mascara Lash Princess")
        ).toBeInTheDocument();
    });

    it("should calculate the total amount correctly", () => {
        render(<Cart />);
        const totalAmount = screen.getByText((content, element) => {
            return !!(
                element?.className.includes("cart-page__total-amount") &&
                content === "$ 19.98"
            );
        });

        expect(totalAmount).toBeInTheDocument();
    });

    it("should render the total label", () => {
        render(<Cart />);
        expect(screen.getByText("Total Amount:")).toBeInTheDocument();
    });
});
