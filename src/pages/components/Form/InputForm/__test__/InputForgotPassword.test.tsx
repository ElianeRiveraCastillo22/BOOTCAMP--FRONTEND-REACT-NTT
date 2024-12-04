import { render, screen, fireEvent } from "@testing-library/react";
import { InputForgotPassword } from "../InputForgotPassword";
import { useForm, FormProvider } from "react-hook-form";
import { FormValuesForgotPassword } from "../../schema/form.schema";

const renderWithReactHookForm = ({
    defaultValues,
    name,
    error,
    type,
    placeholder,
}: {
    defaultValues?: Partial<FormValuesForgotPassword>;
    name: keyof FormValuesForgotPassword;
    error?: { type: string; message: string };
    type?: string;
    placeholder: string;
}) => {
    const WrapperInputForgotPassword = () => {
        const methods = useForm<FormValuesForgotPassword>({ defaultValues });
        return (
            <FormProvider {...methods}>
                <InputForgotPassword
                    name={name}
                    control={methods.control}
                    type={type}
                    error={error}
                    placeholder={placeholder}
                />
            </FormProvider>
        );
    };

    return render(<WrapperInputForgotPassword />);
};

describe("InputForgotPassword", () => {
    it("should render InputForgotPassword correctly without error messages", () => {
        renderWithReactHookForm({
            name: "email",
            placeholder: "Email",
            type:"email"
        });

        const input = screen.getByPlaceholderText("Email");
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass("form-input");
        expect(input).not.toHaveClass("is-invalid");
    });

    it("should display an error message when no email is entered", () => {
        renderWithReactHookForm({
            name: "email",
            placeholder: "Email",
            type:"email",
            error: { type: "required", message: "Email is required" },
        });

        const errorMessage = screen.getByText("Email is required");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveClass("form-input-error");

        const input = screen.getByPlaceholderText("Email");
        expect(input).toHaveClass("is-invalid");
    });

    it("should return the message 'Invalid email' when an incorrect email is entered", () => {
        renderWithReactHookForm({
            name: "email",
            placeholder: "Email",
            type:"email",
            error: { type: "required", message: "Invalid email" },
            defaultValues: { email: "" },
        });

        const input = screen.getByPlaceholderText("Email");
        fireEvent.change(input, { target: { value: "testexamplecom" } });

        expect(input).toHaveValue("testexamplecom");
        expect(input).toHaveClass("is-invalid");

        const errorMessage = screen.getByText("Invalid email");
        expect(errorMessage).toBeInTheDocument();
    });
});
