export interface ProductInCart {
    id: number;
    quantity: number;
}

export type CartState = ProductInCart[]
