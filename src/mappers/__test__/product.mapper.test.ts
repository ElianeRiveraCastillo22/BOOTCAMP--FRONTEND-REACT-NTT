
import { productMock } from "../__mock__/Product";
import { productStub } from "../__stubs__/product.stub";
import { productMapper } from "../product.mapper";

describe("productMapper", () => {
    test("Maps a Product to a MappedProduct", () => {

        const mappedProductData = productMapper(productMock);
        expect(mappedProductData).toEqual(productStub);

    });
})
