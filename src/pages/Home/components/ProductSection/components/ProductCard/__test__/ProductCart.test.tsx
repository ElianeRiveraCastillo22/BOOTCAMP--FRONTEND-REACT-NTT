import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";
import { useShoppingCartContext } from "@/context";
import { AppActions } from "@/models/app-store.model";
import { productStub } from "@/mappers/__stubs__/product.stub";
import { act } from "react";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
}));

describe("<ProductCard/>", () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();

        (useShoppingCartContext as jest.Mock).mockReturnValue({
            dispatchStateCart: mockDispatch,
        });
    });

    it("should render the product information correctly", () => {
        render(<ProductCard product={productStub} />);

        expect(screen.getByText(productStub.title)).toBeInTheDocument();
        expect(screen.getByText(productStub.category)).toBeInTheDocument();
        expect(screen.getByText(productStub.price)).toBeInTheDocument();
        const image = screen.getByAltText(productStub.title);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", productStub.image);
    });

    it("should call dispatchStateCart when the add to cart button is clicked to update stateCart", () => {
        render(<ProductCard product={productStub} />);

        act(() => {
            fireEvent.click(screen.getByText("Add to cart"));
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: AppActions.ADD_PRODUCT,
            payload: { product: productStub, quantity: 1 },
        });
    });
});
