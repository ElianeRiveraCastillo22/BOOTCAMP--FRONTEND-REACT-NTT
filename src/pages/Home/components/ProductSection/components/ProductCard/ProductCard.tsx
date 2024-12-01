import { useShoppingCartContext } from "@/context";
import { AppActions } from "@/models/app-store.model";
import { MappedProduct } from "@/models/product.model";
import { ReactNode } from "react";

interface ProductCardProps {
    product: MappedProduct;
}

export const ProductCard = ({ product }: ProductCardProps): ReactNode => {
    const { dispatchStateCart } = useShoppingCartContext();

    const addProduct = () => {
        dispatchStateCart({
            type: AppActions.ADD_PRODUCT,
            payload: { product: product, quantity: 1 },
        });
    };

    return (
        <article
            className="products__item"
            data-idproduct={product.id}
            data-testid="product-card"
        >
            <figure className="products__image">
                <img src={product.image} alt={product.title} loading="lazy" />
            </figure>
            <section className="products__description">
                <p className="products__title">{product.title}</p>
                <p className="products__descriptionText">{product.category}</p>
                <p className="products__price">{product.price}</p>
            </section>
            <button onClick={addProduct} className="products__add-to-cart">
                <figure className="products__cart">
                    <img src="src/assets/icons/bag.svg" alt="icon bag" />
                </figure>
                <p>Add to cart</p>
            </button>
        </article>
    );
};
