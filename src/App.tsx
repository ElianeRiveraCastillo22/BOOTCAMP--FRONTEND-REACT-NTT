import "./css/App.css";
import { AppRouter } from "./AppRouter";
import { FilterProvider } from "./context/filters/filters.provider";
import { ShoppingCartProvider } from "./context/ShoppingCart/ShoppingCart.provider";
import { ModalProvider } from "./context/Modal/ModalContext";

export function App() {
    return (
        <ModalProvider>
            <ShoppingCartProvider>
                <FilterProvider>
                    <AppRouter />
                </FilterProvider>
            </ShoppingCartProvider>
        </ModalProvider>
    );
}
