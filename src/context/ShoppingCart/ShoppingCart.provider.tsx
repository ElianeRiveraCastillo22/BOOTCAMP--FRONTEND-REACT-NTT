import { createContext, ReactNode, useReducer } from "react"
import { CartState } from "../../models/cart.interface"
import { AppDispatchObject } from "../../models/app-store.model";
import { AppReducer, initialCarValue } from "./ShoppingCart.reduce";

interface Props{
    children: ReactNode
}

const ShoppingCartContext = createContext<{
    stateCart: CartState;
    dispatchStateCart: React.Dispatch<AppDispatchObject>;
}>({
    stateCart: initialCarValue,
    dispatchStateCart: () => {},
});

const ShoppingCartProvider = ({children}: Props) => {
    const [stateCart, dispatchStateCart] = useReducer(AppReducer, initialCarValue);

    return(
        <ShoppingCartContext.Provider value={{stateCart, dispatchStateCart}}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
}
