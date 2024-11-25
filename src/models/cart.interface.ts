import { MappedProduct } from "./product.model";

export interface ProductInCart {
    product: MappedProduct;
    quantity: number;
}

export type CartState = ProductInCart[]
