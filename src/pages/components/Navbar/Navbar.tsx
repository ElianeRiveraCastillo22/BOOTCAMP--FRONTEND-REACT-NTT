import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFilterContext, useShoppingCartContext } from "../../../context";
import { ModuleRoutes } from "../../routes";
import "./Navbar.css";

export const Navbar =(): ReactNode => {

	const { stateCart } = useShoppingCartContext();
	const { setSearchByTitle } = useFilterContext()
	const navigate = useNavigate();

	function logOut() {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("user")
		navigate(ModuleRoutes.Login);
	}

	const nameuser = localStorage.getItem("user")
    return (
		<header className="header">
			<nav className="header__main">
				<NavLink to={ModuleRoutes.Home}>
					<figure className="header__logo">
						<img src="src/assets/logos/logo-shop-main.svg" alt="Store logo"/>
					</figure>
					<p className="header__userName">Bienvenido:<span>{` ${nameuser}`}</span> </p>
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
					<NavLink to={ModuleRoutes.Summary}>
						<div className="header__cart-container">
							<figure className="header__cart">
							<img src="src/assets/icons/cart.svg" alt="Icon Cart"/>
							</figure>
							<small className="header__counter" aria-label="Number of products in cart">{stateCart.length}</small>
						</div>
					</NavLink>
					<figure className="header__logout" onClick={logOut}>
						<img src="src/assets/icons/logout.svg" alt="Icono profile"/>
						<figcaption>Log <br/> out</figcaption>
					</figure>
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