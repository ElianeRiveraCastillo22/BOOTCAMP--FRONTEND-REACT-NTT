// useEffect no se usa
import { useEffect, useState } from "react";
import { Select } from "./components/Select/Select"
import { validateForm } from "./utils/validateForm";
// navigate no se usa
import { Navigate, useNavigate } from "react-router";
import { ModuleRoutes } from "../../../routes";

export interface valuesForm {
    name: string,
    lastName: string,
    district: string,
    address: string,
    reference: string,
    phone: string,
}

export const initalPatient: valuesForm = {
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
};

export const OrderForm = () =>{
    // patient?
    const [dataForm, setDataForm] = useState<valuesForm>(initalPatient)
    const [errors, setErrors] = useState<Partial<valuesForm>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataForm((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm({dataForm, setErrors})) {
          alert('Tu pedido se registró con éxito 🙌');
          navigate(ModuleRoutes.Init)
        }
    };

    return(
        <section className="cart-page__shipping">
            <h1 className="cart-page__shipping-title">Información de Envío</h1>
            <form className="cart-page__form">
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        className="cart-page__input"
                        aria-label="Nombre"
                        value={dataForm.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        className="cart-page__input"
                        aria-label="Apellido"
                        value={dataForm.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div>
                    <Select setDataForm={setDataForm}/>
                    {errors.district && <span>{errors.district}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Dirección"
                        name="address"
                        className="cart-page__input"
                        aria-label="Dirección"
                        value={dataForm.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span>{errors.address}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Referencia"
                        name="reference"
                        className="cart-page__input"
                        aria-label="Referencia"
                        value={dataForm.reference}
                        onChange={handleChange}
                    />
                    {errors.reference && <span>{errors.reference}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Celular"
                        name="phone"
                        className="cart-page__input"
                        aria-label="Celular"
                        value={dataForm.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <button className="cart-page__button cart-page__button--submit" onClick ={handleSubmit}>Comprar</button>
            </form>
        </section>
    )
}