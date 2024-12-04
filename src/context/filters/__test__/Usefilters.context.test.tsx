import { renderHook } from "@testing-library/react";
import { FilterProvider } from "../filters.provider"; // Ajusta la ruta
import { useFilterContext } from "../Usefilters.context";

describe("useFilterContext", () => {
    it("should return the context values when used within FilterProvider", () => {
        const { result } = renderHook(() => useFilterContext(), {
            wrapper: FilterProvider,
        });

        expect(result.current).toHaveProperty("searchByTitle");
        expect(result.current).toHaveProperty("setSearchByTitle");
        expect(result.current).toHaveProperty("searchByCategory");
        expect(result.current).toHaveProperty("setSearchByCategory");

        expect(typeof result.current.searchByTitle).toBe("string");
        expect(typeof result.current.setSearchByTitle).toBe("function");
        expect(typeof result.current.searchByCategory).toBe("string");
        expect(typeof result.current.setSearchByCategory).toBe("function");
    });

    it("should throw an error when used outside of FilterProvider", () => {
        let error: Error | null = null;

        try {
            renderHook(() => useFilterContext());
        } catch (e) {
            error = e as Error;
        }

        expect(error).toBeInstanceOf(Error);
        expect(error?.message).toBe(
            "el contexto de carrito se está utilizando fuera de su proveedor"
        );
    });
});
