import { useContext } from "react";
import { filterContext } from "./filters.provider";

export const useFilterContext = () => {

    const context = useContext(filterContext);

    if (!context) {
      throw new Error("el contexto de carrito se está utilizando fuera de su proveedor")
    }

    return context;

}