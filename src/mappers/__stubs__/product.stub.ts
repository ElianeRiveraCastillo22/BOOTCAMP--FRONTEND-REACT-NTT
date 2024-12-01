import { productMock } from "../__mock__/Product";
import { productMapper } from "../product.mapper";

export const productStub = productMapper(productMock);