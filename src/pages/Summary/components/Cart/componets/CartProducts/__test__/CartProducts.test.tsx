import { render, screen, fireEvent } from "@testing-library/react";
import { CartProducts } from "../CartProducts";
import { useShoppingCartContext } from "@/context";
import { ProductInCart } from "@/models/cart.interface";
import { AppActions } from "@/models/app-store.model";
import { productStub } from "@/mappers/__stubs__/product.stub";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
}));

describe("<CartProducts/>", () => {
    let dispatchStateCartMock: jest.Mock;

    beforeEach(() => {
        dispatchStateCartMock = jest.fn();
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            dispatchStateCart: dispatchStateCartMock,
        });
    });

    const mockProductInCart: ProductInCart = {
        product: productStub,
        quantity: 2,
    };

    it("should display product details for selected items in the cart", () => {
        const mockProductInCart: ProductInCart = {
            product: productStub,
            quantity: 2,
        };

        render(<CartProducts dataProduct={mockProductInCart} />);
        expect(
            screen.getByText("Essence Mascara Lash Princess")
        ).toBeInTheDocument();
        expect(screen.getByText("beauty")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        );
    });

    it("should call dispatchStateCart with correct action when increment button is clicked", () => {
        render(<CartProducts dataProduct={mockProductInCart} />);
        fireEvent.click(screen.getByRole("button", { name: "+" }));
        expect(dispatchStateCartMock).toHaveBeenCalledWith({
            type: AppActions.ADD_PRODUCT,
            payload: { product: mockProductInCart.product, quantity: 1 },
        });
    });

    it("should call dispatchStateCart with correct action when decrement button is clicked", () => {
        render(<CartProducts dataProduct={mockProductInCart} />);
        fireEvent.click(screen.getByRole("button", { name: "-" }));
        expect(dispatchStateCartMock).toHaveBeenCalledWith({
            type: AppActions.DECREASE_PRODUCT,
            payload: 1,
        });
    });

    it("should call dispatchStateCart with correct action when delete button is clicked", () => {
        render(<CartProducts dataProduct={mockProductInCart} />);
        fireEvent.click(screen.getByRole("button", { name: "Delate" }));
        expect(dispatchStateCartMock).toHaveBeenCalledWith({
            type: AppActions.REMOVE_PRODUCT,
            payload: 1,
        });
    });
});
