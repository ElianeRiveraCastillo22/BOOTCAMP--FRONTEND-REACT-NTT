import { ReactNode, useEffect, useRef } from "react"
import  "./Navbar.css"
import { useShoppingCartContext } from "../../../context/UseShoppingCart.context";
import { useFilterContext } from "../../../context/filters/Usefilters.context";

export const Navbar =(): ReactNode => {

	const { stateCart } = useShoppingCartContext();
	const {setSearchByTitle} = useFilterContext()

    return (
		<header className="header">
			<div className="header__main">
				<figure className="header__logo">
					<img src="src/assets/logos/logo-shop-main.svg" alt="Logo de la tienda"/>
				</figure>
				<nav className="header__nav" aria-label="Navegación principal">
				<input
					onChange={(event)=>{setSearchByTitle(event.target.value)}}
					type="text"
					className="header__input header__input--desktop"
					placeholder="Search product..."
					aria-label="Search product"
				/>
				<figure className="header__profile">
					<img src="src/assets/icons/profile.svg" alt="Icono de perfil de usuario"/>
				</figure>
				<div className="header__cart-container">
					<figure className="header__cart">
					<img src="src/assets/icons/cart.svg" alt="Icono de carrito de compras"/>
					</figure>
					<small className="header__counter" aria-label="Número de productos en el carrito">{stateCart.length}</small>
				</div>
				</nav>
			</div>
			<nav className="header__search header__search--mobile">
				<input
					onChange={(event)=>{setSearchByTitle(event.target.value)}}
					type="text"
					className="header__input header__input--mobile"
					placeholder="Search product..."
					aria-label="Search product"
				/>
			</nav>
		</header>
    )

}