import "css/form.css";
import { ButtonForm } from "../components/Form/ButtonForm";
import { ModuleRoutes } from "../routes";
import { NavLink } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { ForgotPassword } from "./components/ForgotPassword";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { SubmitHandler, useForm } from "react-hook-form";
import { useModalContext } from "@/context/Modal/UseModalContext";
import {
    FormValuesLogin,
    schemaLogin,
} from "../components/Form/schema/form.schema";
import { InputLogin } from "../components/Form/InputForm/InputLogin";

export const Login = () => {
    const { isOpenModal, setIsOpenModal} = useModalContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesLogin>({
        resolver: zodResolver(schemaLogin),
        mode: "onBlur",
        defaultValues:{
            username:"emilys",
            email:"emily.johnson@x.dummyjson.com",
            password:"emilyspass"
        }
    });

    const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
        console.log(data);
    };
    const openModal = () => {
        setIsOpenModal(true);
    };
    return (
        <div className="form-container">
            <section className="form-section">
                <figure className="form-logo">
                    <img
                        src="src/assets/logos/logo-shop-main.svg"
                        alt="Logo de la tienda"
                    />
                </figure>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <InputLogin
                        name="username"
                        control={control}
                        type="name"
                        error={errors.email}
                        placeholder="User name"
                    />
                    <InputLogin
                        name="email"
                        control={control}
                        type="email"
                        error={errors.email}
                        placeholder="Email"
                    />
                    <InputLogin
                        name="password"
                        control={control}
                        error={errors.password}
                        type="password"
                        placeholder="Password"
                    />
                    <ButtonForm nameButton="Log in" type="submit" />
                </form>
                <footer className="form-footer">
                    <button
                        type="button"
                        className="form-button form-button--forgot"
                        onClick={openModal}
                    >
                        Forgot Password
                    </button>
                    <Modal>{isOpenModal && <ForgotPassword />}</Modal>
                    <div className="form-footer__signup">
                        <p>Are you signed up?</p>
                        <NavLink to={ModuleRoutes.SignUp} className="form-link">
                            Sign up
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    );
};
