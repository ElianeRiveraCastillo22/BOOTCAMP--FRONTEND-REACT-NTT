import { useEffect } from "react";
import "./Summary.css";
import { Cart } from "./components/Cart/Cart";
import { EmptyCart } from "./components/Cart/componets/EmptyCart/emptyCart";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { useShoppingCartContext } from "../../context";

export function Summary() {

    const { stateCart } = useShoppingCartContext();

    function hideSearchInput (){
        // no usemos texto plano usemos enum
        const locactionSummary = "/resumen"
        if(window.location.pathname == locactionSummary){
            // no manipulemos directamente el html no es una buena pr'actica por que no usar estilos condicionados?
            const inputHeader = document.querySelectorAll(".header__input")
            inputHeader.forEach((input)=>{
                input.classList.add("header__input--hideSummar")
            })
        }
    }

    useEffect(()=>{
        hideSearchInput ()
    },[])

    return (
        <main className="cart-page">
            {
                stateCart.length === 0 ?
                <EmptyCart/>:
                <>
                    <Cart/>
                    <OrderForm/>
                </>
            }
        </main>


    )
}