import "css/form.css";
import { InputForm } from "../components/Form/InputForm";
import { ButtonForm } from "../components/Form/ButtonForm";
import { ModuleRoutes } from "../routes";
import { NavLink } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { ForgotPassword } from "./components/ForgotPassword";
import { useModalContext } from "@/context/Modal/UseModalContext";
export const Login = () => {

    const { setState } = useModalContext()

    const openModal = () => {
      setState(true)
    }

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
                            onClick={openModal}
                        >
                            Forgot Password
                        </button>
                        <Modal>
                            <ForgotPassword/>
                        </Modal>
                        <div className="form-footer__signup">
                            <p>Are you signed up?</p>
                            <NavLink to={ModuleRoutes.SignUp}>
                                <a href="/signup" className="form-link">
                                    Sign up
                                </a>
                            </NavLink>
                        </div>
                    </footer>
                </form>
            </section>
        </div>
    );
};
