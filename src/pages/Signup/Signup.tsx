import "css/form.css";
import { ButtonForm } from "../components/Form/ButtonForm"
import { InputForm } from "../components/Form/InputForm"

export const Signup = () => {
    return (
        <div className="form-container">
            <section className="form-section">
                <figure className="form-logo">
                    <img
                        src="src/assets/logos/logo-shop-main.svg"
                        alt="Logo de la tienda"
                    />
                </figure>
                <form className="form">
                    <InputForm
                        type="text"
                        id="Name"
                        placeholder="Name"
                        name="Name"
                    />
                    <InputForm
                        type="email"
                        id="Email"
                        placeholder="Email"
                        name="Email"
                    />
                    <InputForm
                            type="password"
                            id="Password"
                            placeholder="Password"
                            name="Password"
                    />
                    <ButtonForm nameButton="Sign Up"/>
                    <footer className="form-footer">
                        <div className="form-footer__logIn">
                            <p>Do you have an account?</p>
                            <a href="/signup" className="form-link">Log In</a>
                        </div>
                    </footer>
                </form>
            </section>
        </div>
    )
}