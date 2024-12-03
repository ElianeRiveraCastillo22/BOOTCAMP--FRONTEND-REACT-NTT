import { productMock } from "@/mappers/__mock__/Product";
import { productStub } from "@/mappers/__stubs__/product.stub";
import { MappedProductResponse, ProductResponse } from "@/models/product.model";

export const mockAllProducts:ProductResponse  = {
    products: [
        productMock
    ],
    total: 194,
    skip: 0,
    limit: 16,
};
export const mockAllProductsMapped:MappedProductResponse  = {
    products: [
        productStub
    ],
    total: 194,
    skip: 0,
    limit: 16,
};
