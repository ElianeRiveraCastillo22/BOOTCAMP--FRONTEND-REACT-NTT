import "css/form.css";
import { InputForm } from "../components/Form/InputForm";
import { ButtonForm } from "../components/Form/ButtonForm";
export const Login = () => {
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
                    <ButtonForm nameButton="Log in" />
                    <footer className="form-footer">
                        <button
                            type="button"
                            className="form-button form-button--forgot"
                        >
                            Forgot Password
                        </button>
                        <div className="form-footer__signup">
                            <p>Are you signed up?</p>
                            <a href="/signup" className="form-link">
                                Sign up
                            </a>
                        </div>
                    </footer>
                </form>
            </section>
        </div>
    );
};
