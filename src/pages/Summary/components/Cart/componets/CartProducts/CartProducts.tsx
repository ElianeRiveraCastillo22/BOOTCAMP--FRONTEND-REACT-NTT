import { ReactNode } from "react"
import { AppActions } from "../../../../../../models/app-store.model"
import { ProductInCart } from "../../../../../../models/cart.interface"
import { useShoppingCartContext } from "../../../../../../context"

interface Props{
    dataProduct: ProductInCart
}

export const CartProducts = ({dataProduct}:Props): ReactNode => {

    const {product, quantity} = dataProduct
    const {id, title, image, category} = product

    const { dispatchStateCart } = useShoppingCartContext();

    function incremetProduct() {
        dispatchStateCart({ type: AppActions.ADD_PRODUCT, payload: { product: product, quantity: 1 } });
    }

    function decrementProduct() {
        dispatchStateCart({ type: AppActions.DECREASE_PRODUCT, payload: id });
    }

    function DeleteProduct() {
        dispatchStateCart({ type: AppActions.REMOVE_PRODUCT, payload: id });
    }

    return(
        <article className="cart-page__item" id-product={id}>
            <section className="cart-page__item-info">
                <figure className="cart-page__item-image">
                    <img src={image} alt={title} />
                </figure>
                <div>
                    <p className="cart-page__item-name">{title}</p>
                    <p className="cart-page__item-description">{category}</p>
                </div>
            </section>
            <section className="cart-page__item-quantity">
                <button className="cart-page__button cart-page__button--decrease " onClick={decrementProduct}>-</button>
                <span className="cart-page__quantity">{quantity}</span>
                <button className="cart-page__button cart-page__button--increase" onClick={incremetProduct}>+</button>
            </section>
            <section className="cart-page__item-remove">
                <button className="cart-page__button cart-page__button--remove" onClick={DeleteProduct}>Eliminar</button>
            </section>
        </article>
    )
}