import { renderHook } from "@testing-library/react";
import { ShoppingCartProvider } from "../ShoppingCart.provider";
import { useShoppingCartContext } from "../UseShoppingCart.context";

describe("useShoppingCartContext", () => {

    it("should return the context when used inside ShoppingCartProvider", () => {
        const { result } = renderHook(() => useShoppingCartContext(), {
            wrapper: ShoppingCartProvider,
        });

        expect(result.current).toHaveProperty("stateCart");
        expect(result.current).toHaveProperty("dispatchStateCart");
        expect(typeof result.current.dispatchStateCart).toBe("function");
    });
/*     it("should throw an error when used outside of ShoppingCartProvider", () => {
        let error;
        try {
            render(
                <ShoppingCartContext.Provider value={{ stateCart: [], dispatchStateCart: () => {} }}>
                    <div>Test Component</div>
                </ShoppingCartContext.Provider>
            );
        } catch (e) {
            error = e;
        }

        expect(error).toEqual(
            new Error("el contexto de carrito se está utilizando fuera de su proveedor")
        );

    }); */
});
