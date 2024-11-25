import { useEffect, useState } from "react";
import { CartProducts } from "./componets/CartProducts/CartProducts";
import { useShoppingCartContext } from "../../../../context";

export const Cart = ()=>{

    const { stateCart } = useShoppingCartContext();
    const [totalAccount, setTotalAccount] = useState(0)

    useEffect(()=>{
        const total = stateCart.reduce((acc, initialproduct)=>{
            return acc + (initialproduct.product.price* initialproduct.quantity)
        }, 0)
        setTotalAccount(total)
    },[stateCart])

    return(
        <section className="cart-page__section">
            <h1 className="cart-page__title">My Cart</h1>

            <div className="cart-page__table-header">
                <h3 className="cart-page__column-title">Producto</h3>
                <h3 className="cart-page__column-title cart-page-title--quantity">Cantidad</h3>
            </div>

            <div className="cart-page__items">
                {
                    stateCart.map((dataProduct)=>{
                        return <CartProducts key={dataProduct.product.id} dataProduct={dataProduct} />
                    })
                }
            </div>
            <hr/>
            <section className="cart-page__total">
            <p className="cart-page__total-label">Total a pagar:</p>
            <p className="cart-page__total-amount" >{totalAccount.toFixed(2) }</p>
            </section>
        </section>
    )
}