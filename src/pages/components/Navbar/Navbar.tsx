import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ModuleRoutes } from "../../routes";
import { useFilterContext, useShoppingCartContext } from "../../../context";
import "./Navbar.css";

export const Navbar =(): ReactNode => {

	const { stateCart } = useShoppingCartContext();
	const {setSearchByTitle} = useFilterContext()

    return (
		<header className="header">
			<nav className="header__main">
				<NavLink to={ModuleRoutes.Init}>
					<figure className="header__logo">
						<img src="src/assets/logos/logo-shop-main.svg" alt="Store logo"/>
					</figure>
				</NavLink>
				<section className="header__nav" aria-label="Main navigation">
					<input
						onChange={(event)=>{setSearchByTitle(event.target.value)}}
						type="text"
						className="header__input header__input--desktop"
						placeholder="Search product..."
						aria-label="Search product"
						aria-hidden={window.innerWidth >= 768}
					/>
					<figure className="header__profile">
						<img src="src/assets/icons/profile.svg" alt="Icono profile"/>
					</figure>
					<NavLink to={ModuleRoutes.Summary}>
						<div className="header__cart-container">
							<figure className="header__cart">
							<img src="src/assets/icons/cart.svg" alt="Icon Cart"/>
							</figure>
							<small className="header__counter" aria-label="Number of products in cart">{stateCart.length}</small>
						</div>
					</NavLink>

				</section>
			</nav>
			<nav className="header__search header__search--mobile">
				<input
					onChange={(event)=>{setSearchByTitle(event.target.value)}}
					type="text"
					className="header__input header__input--mobile"
					placeholder="Search product..."
					aria-label="Search product"
					aria-hidden={window.innerWidth < 768}
				/>
			</nav>
		</header>
    )

}