
import { productMock } from "../__mock__/Product";
import { productMapperMock } from "../__mock__/product.mapper";
import { productMapper } from "../product.mapper";

describe("productMapper", () => {
    test("Maps a Product to a MappedProduct", () => {
        const result = productMapper(productMock);
        expect(result).toEqual(productMapperMock);
    });
});
