import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCart.provider";

export const useShoppingCartContext = () => {

    const context = useContext(ShoppingCartContext);

    if (!context) {
      	throw new Error("el contexto de carrito se está utilizando fuera de su proveedor")
    }

    return context;

}



