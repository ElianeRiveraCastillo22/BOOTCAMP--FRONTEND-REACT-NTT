import { productStub } from "@/mappers/__stubs__/product.stub";
import { filterProductNames } from "../filterProductNames";
import { MappedProduct } from "@/models/product.model";

const products: MappedProduct[] = [productStub];

describe("<filterProductNames/>", () => {
    it("should return an empty array if no products are provided", () => {
        const result = filterProductNames([], "Essence");
        expect(result).toEqual([]);
    });
    it("should return an empty array if dataProducts is undefined", () => {
        const result = filterProductNames(undefined, "Essence");
        expect(result).toEqual([]);
    });

    it("should return all products if searchByTitle is an empty string", () => {
        const result = filterProductNames(products, "");
        expect(result).toEqual(products);
    });

    it("should filter products by title", () => {
        const result = filterProductNames(products, "Essence");

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe("Essence Mascara Lash Princess");
    });

    it("should return products matching the search term (case insensitive)", () => {
        const result = filterProductNames(products, "essence");
        expect(result).toHaveLength(1);
        expect(result[0].title).toBe("Essence Mascara Lash Princess");
    });

    it("should return the product if any of the words in the text match the search term when the text contains multiple words", () => {
        const result = filterProductNames(products, "Mascara");

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe("Essence Mascara Lash Princess");
    });

    it("should return an empty array if no products match the search term", () => {
        const result = filterProductNames(products, "Nokia");
        expect(result).toEqual([]);
    });
});
