import { productStub } from "@/mappers/__stubs__/product.stub";
import { AppActions, AppDispatchObject } from "@/models/app-store.model";
import { CartState } from "@/models/cart.interface";
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import React from "react";
import {
    ShoppingCartContext,
    ShoppingCartProvider,
} from "../ShoppingCart.provider";

describe("ShoppingCartProvider", () => {
    it("should provide the initial state and dispatch function", () => {
        let receivedState: CartState | undefined;
        let receivedDispatch: React.Dispatch<AppDispatchObject> | undefined;

        const TestComponent = () => {
            const { stateCart, dispatchStateCart } =
                React.useContext(ShoppingCartContext);

            receivedState = stateCart;
            receivedDispatch = dispatchStateCart;

            return <div>Test Component</div>;
        };

        render(
            <ShoppingCartProvider>
                <TestComponent />
            </ShoppingCartProvider>
        );

        expect(receivedState).toEqual([]);
        expect(receivedDispatch).toBeInstanceOf(Function);
        expect(screen.getByText("Test Component")).toBeInTheDocument();
    });

    it("should update state when dispatch is called", async () => {
        const TestComponent = () => {
            const { stateCart, dispatchStateCart } =
                React.useContext(ShoppingCartContext);

            return (
                <div>
                    <button
                        onClick={() =>
                            dispatchStateCart({
                                type: AppActions.ADD_PRODUCT,
                                payload: {
                                    product: productStub,
                                    quantity: 1,
                                },
                            })
                        }
                    >
                        Add Product
                    </button>
                    <span data-testid="cart-length">{stateCart.length}</span>
                </div>
            );
        };

        const { getByText, getByTestId } = render(
            <ShoppingCartProvider>
                <TestComponent />
            </ShoppingCartProvider>
        );

        expect(getByTestId("cart-length").textContent).toBe("0");
        act(() => {
            fireEvent.click(getByText("Add Product"));
        });

        await waitFor(() => {
            expect(getByTestId("cart-length").textContent).toBe("1");
        });
    });
});
