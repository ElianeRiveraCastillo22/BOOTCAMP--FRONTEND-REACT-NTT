/* import { AppReducer, initialCarValue } from "../path-to/AppReducer"; // Ajusta la ruta
import { AppActions, AppDispatchObject } from "../../models/app-store.model";
import { CartState, ProductInCart } from "../../models/cart.interface"; */

import { AppActions, AppDispatchObject } from "@/models/app-store.model";
import { AppReducer, initialCarValue } from "../ShoppingCart.reduce";
import { CartState } from "@/models/cart.interface";
import { productStub } from "@/mappers/__stubs__/product.stub";

describe("AppReducer", () => {
    const mockProduct = {
        product: productStub,
        quantity: 1,
    };

    it("should return the initial state when no action is provided", () => {
        const state = AppReducer(initialCarValue, {} as AppDispatchObject);
        expect(state).toEqual(initialCarValue);
    });

    it("should add a product to the cart", () => {
        const action: AppDispatchObject = {
            type: AppActions.ADD_PRODUCT,
            payload: mockProduct,
        };

        const state = AppReducer(initialCarValue, action);
        expect(state).toHaveLength(1);
        expect(state[0]).toEqual(mockProduct);
    });

    it("should increase the quantity of an existing product", () => {
        const initialState: CartState = [mockProduct];
        const action: AppDispatchObject = {
            type: AppActions.ADD_PRODUCT,
            payload: mockProduct,
        };

        const state = AppReducer(initialState, action);
        expect(state).toHaveLength(1);
        expect(state[0].quantity).toBe(2);
    });

    it("should decrease the quantity of a product", () => {
        const initialState: CartState = [{ ...mockProduct, quantity: 2 }];
        const action: AppDispatchObject = {
            type: AppActions.DECREASE_PRODUCT,
            payload: mockProduct.product.id,
        };

        const state = AppReducer(initialState, action);
        expect(state).toHaveLength(1);
        expect(state[0].quantity).toBe(1);
    });

    it("should remove a product when decreasing quantity to zero", () => {
        const initialState: CartState = [mockProduct];
        const action: AppDispatchObject = {
            type: AppActions.DECREASE_PRODUCT,
            payload: mockProduct.product.id,
        };

        const state = AppReducer(initialState, action);
        expect(state).toHaveLength(0);
    });

    it("should remove a product from the cart", () => {
        const initialState: CartState = [mockProduct];
        const action: AppDispatchObject = {
            type: AppActions.REMOVE_PRODUCT,
            payload: mockProduct.product.id,
        };

        const state = AppReducer(initialState, action);
        expect(state).toHaveLength(0);
    });

});
