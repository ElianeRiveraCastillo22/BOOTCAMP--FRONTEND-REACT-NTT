import { productMock } from "@/mappers/__mock__/Product";
import { ProductResponse } from "@/models/product.model";

export const mockAllProducts:ProductResponse  = {
    products: [
        productMock
    ],
    total: 194,
    skip: 0,
    limit: 30,
};
