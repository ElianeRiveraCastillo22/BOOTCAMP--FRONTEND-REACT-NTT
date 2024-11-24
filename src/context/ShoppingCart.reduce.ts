import { AppActions, AppDispatchObject } from "../models/app-store.model";
import { CartState, ProductInCart } from "../models/cart.interface";

const initialCarValue: CartState = [];

const AppReducer = (state: CartState, action: AppDispatchObject) => {

    function filterExistingProducts(newProduct:ProductInCart) {
        return state.find((product)=>product.id == newProduct.id)
    }

    function addToCart(newProduct: ProductInCart) {

        const isProductExist = filterExistingProducts(newProduct);

        if (isProductExist) {
            return state.map((product) =>
                product.id === newProduct.id
                    ? { ...product, quantity: product.quantity + newProduct.quantity }
                    : product
            );
        } else {
            return [...state, newProduct];
        }
    }

    switch (action.type) {
        case AppActions.ADD_PRODUCT:
            return addToCart(action.payload)

        default:
            return state;
    }
};

export {
    AppReducer, initialCarValue
};
