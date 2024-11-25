import { AppActions, AppDispatchObject } from "../../models/app-store.model";
import { CartState, ProductInCart } from "../../models/cart.interface";

const initialCarValue: CartState = [];

const AppReducer = (state: CartState, action: AppDispatchObject) => {

    function filterExistingProducts(newProduct:ProductInCart) {
        return state.find((product)=>product.product.id == newProduct.product.id)
    }

    function addToCart(newProduct: ProductInCart) {

        const isProductExist = filterExistingProducts(newProduct);

        if (isProductExist) {
            return state.map((product) =>
                product.product.id === newProduct.product.id
                    ? { ...product, quantity: product.quantity + newProduct.quantity }
                    : product
            );
        } else {
            return [...state, newProduct];
        }
    }

    function decreaseProduct(id:number){

        return state.map((product) => {
            if (product.product.id === id) {
                if (product.quantity === 1) {
                    return null;
                }
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }).filter(Boolean) as ProductInCart[];

    }

    function removeProduct(id:number){

        return state.map((product) => {
            if (product.product.id === id) {
                return null;
            }
            return product;
        }).filter(Boolean) as ProductInCart[];

    }

    switch (action.type) {
        case AppActions.ADD_PRODUCT:
            return addToCart(action.payload)
        case AppActions.DECREASE_PRODUCT:
            return decreaseProduct(action.payload)
        case AppActions.REMOVE_PRODUCT:
            return removeProduct(action.payload)
        default:
            return state;
    }
};

export {
    AppReducer,
    initialCarValue
};
