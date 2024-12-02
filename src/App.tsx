import "./css/App.css";
import { AppRouter } from "./AppRouter";
import { FilterProvider } from "./context/filters/filters.provider";
import { ShoppingCartProvider } from "./context/ShoppingCart/ShoppingCart.provider";
import { ModalProvider } from "./context/Modal/ModalContext";
import { ErrorBoundary } from "./ErrorBoundary";

export function App() {
    return (
        <ErrorBoundary>
            <ModalProvider>
                <ShoppingCartProvider>
                    <FilterProvider>
                        <AppRouter />
                    </FilterProvider>
                </ShoppingCartProvider>
            </ModalProvider>
        </ErrorBoundary>
    );
}
