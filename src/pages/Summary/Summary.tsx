import { useShoppingCartContext } from "../../context";
import "./Summary.css";
import { Cart } from "./components/Cart/Cart";
import { EmptyCart } from "./components/Cart/componets/EmptyCart/emptyCart";
import { OrderForm } from "./components/OrderForm/OrderForm";

export function Summary() {
    const { stateCart } = useShoppingCartContext();

    return (
        <main className="cart-page">
            {stateCart.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <Cart />
                    <OrderForm />
                </>
            )}
        </main>
    );
}
