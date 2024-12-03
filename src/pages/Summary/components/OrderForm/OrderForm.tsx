import { useState } from "react";
import { useNavigate } from "react-router";
import { ModuleRoutes } from "../../../routes";
import { Select } from "./components/Select/Select";
import { validateForm } from "./modules/validateForm";

export interface valuesForm {
    name: string;
    lastName: string;
    district: string;
    address: string;
    reference: string;
    phone: string;
}

export const initialForm: valuesForm = {
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
};

export const OrderForm = () => {
    const [dataForm, setDataForm] = useState<valuesForm>(initialForm);
    const [errors, setErrors] = useState<Partial<valuesForm>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataForm((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm({ dataForm, setErrors })) {
            alert("Tu pedido se registró con éxito 🙌");
            setErrors(initialForm);
            navigate(ModuleRoutes.Home);
        }
    };

    return (
        <section className="cart-page__shipping">
            <h1 className="cart-page__shipping-title">Shipping Information</h1>
            <form className="cart-page__form">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="cart-page__input"
                        aria-label="Name"
                        value={dataForm.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        className="cart-page__input"
                        aria-label="Last name"
                        value={dataForm.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div>
                    <Select setDataForm={setDataForm} />
                    {errors.district && <span>{errors.district}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        className="cart-page__input"
                        aria-label="Address"
                        value={dataForm.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span>{errors.address}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Reference"
                        name="reference"
                        className="cart-page__input"
                        aria-label="Reference"
                        value={dataForm.reference}
                        onChange={handleChange}
                    />
                    {errors.reference && <span>{errors.reference}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        className="cart-page__input"
                        aria-label="Phone"
                        value={dataForm.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <button
                    className="cart-page__button cart-page__button--submit"
                    onClick={handleSubmit}
                >
                    Complete Purchase
                </button>
            </form>
        </section>
    );
};
