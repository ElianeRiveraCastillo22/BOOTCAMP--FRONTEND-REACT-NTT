import { valuesForm } from "../../OrderForm";
import { validateForm } from "../validateForm";

const setErrorsMock = jest.fn();

describe("validateForm", () => {
    beforeEach(() => {
        setErrorsMock.mockClear();
    });

    it("should return true when form data is valid", () => {
        const validData: valuesForm = {
            name: "John",
            lastName: "Doe",
            district: "Lima",
            address: "123 Main St",
            reference: "Near the park",
            phone: "912345678",
        };

        const result = validateForm({
            dataForm: validData,
            setErrors: setErrorsMock,
        });

        expect(result).toBe(true);
        expect(setErrorsMock).toHaveBeenCalledWith({});
    });

    it("should return false and set error for name containing non-alphabetic characters", () => {
        const invalidData: valuesForm = {
            name: "John123",
            lastName: "Doe",
            district: "Lima",
            address: "123 Main St",
            reference: "Near the park",
            phone: "912345678",
        };

        const result = validateForm({
            dataForm: invalidData,
            setErrors: setErrorsMock,
        });

        expect(result).toBe(false);
        expect(setErrorsMock).toHaveBeenCalledWith({
            name: "El campo debe contener solo letras",
        });
    });

    it("should return false and set error when required fields are empty", () => {
        const invalidData: valuesForm = {
            name: "",
            lastName: "",
            district: "",
            address: "",
            reference: "",
            phone: "",
        };

        const result = validateForm({
            dataForm: invalidData,
            setErrors: setErrorsMock,
        });

        expect(result).toBe(false);
        expect(setErrorsMock).toHaveBeenCalledWith({
            name: "Campo obligatorio",
            lastName: "Campo obligatorio",
            district: "Campo obligatorio",
            address: "Campo obligatorio",
            reference: "Campo obligatorio",
            phone: "Campo obligatorio",
        });
    });
});
