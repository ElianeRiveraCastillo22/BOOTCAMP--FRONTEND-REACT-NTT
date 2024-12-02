import { ButtonForm } from "@/pages/components/Form/ButtonForm"
import { InputForm } from "@/pages/components/Form/InputForm"
import "./ForgotPassword.css"
export const ForgotPassword = () =>{
    return(
        <section className="form-section form-section--forgotPassword">
        <figure className="form-logo--forgotPassword">
            <img
                src="src/assets/logos/logo-shop-main.svg"
                alt="Logo de la tienda"
            />
        </figure>
        <form className="form">
            <InputForm
                type="email"
                id="Email"
                placeholder="Ingresa tu email"
                name="Email"
            />
            <InputForm
                    type="password"
                    id="Password"
                    placeholder="Password"
                    name="Password"
            />
            <ButtonForm nameButton="Register new password"/>
        </form>
    </section>
    )
}