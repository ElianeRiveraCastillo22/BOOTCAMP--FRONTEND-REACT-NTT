import { ProductInCart } from "./cart.interface";

export const enum AppActions {
    ADD_PRODUCT = "ADD_ITEM",
    REMOVE_PRODUCT = "REMOVE_ITEM",
    INCREMENT_PRODUCT = "INCREMENT_PRODUCT"
}

interface AddProductAction {
    type: AppActions.ADD_PRODUCT;
    payload: ProductInCart;
}

interface RemoveProductAction {
    type: AppActions.REMOVE_PRODUCT;
    payload: number;
}
interface IncrementProductAction {
    type: AppActions.INCREMENT_PRODUCT;
    payload: number;
}

export type AppDispatchObject = AddProductAction | RemoveProductAction | IncrementProductAction

