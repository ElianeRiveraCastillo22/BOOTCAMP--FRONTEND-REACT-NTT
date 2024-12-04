import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { FormValuesLogin } from "../../schema/form.schema";
import { InputLogin } from "../InputLogin";

const renderWithReactHookForm = ({
    defaultValues,
    name,
    error,
    type,
    placeholder,
}: {
    defaultValues?: Partial<FormValuesLogin>;
    name: keyof FormValuesLogin;
    error?: { type: string; message: string };
    type?: string;
    placeholder: string;
}) => {
    const WrapperInputForgotPassword = () => {
        const methods = useForm<FormValuesLogin>({ defaultValues });
        return (
            <FormProvider {...methods}>
                <InputLogin
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

describe("InputLogin Component", () => {
    it("should render input name correctly without error messages", () => {
        renderWithReactHookForm({
            name: "username",
            type: "text",
            placeholder: "User name",
        });

        const input = screen.getByPlaceholderText("User name");
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass("form-input");
        expect(input).not.toHaveClass("is-invalid");
    });

    it("should render input email correctly without error messages", () => {
        renderWithReactHookForm({
            name: "email",
            type: "email",
            placeholder: "Email",
        });

        const input = screen.getByPlaceholderText("Email");
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass("form-input");
        expect(input).not.toHaveClass("is-invalid");
    });

    it("should render input password correctly without error messages", () => {
        renderWithReactHookForm({
            name: "password",
            type: "password",
            placeholder: "Password",
        });

        const input = screen.getByPlaceholderText("Password");
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass("form-input");
        expect(input).not.toHaveClass("is-invalid");
    });

    it("should display an error message when no email is entered", () => {
        renderWithReactHookForm({
            name: "email",
            placeholder: "Email",
            type: "email",
            error: { type: "required", message: "Email is required" },
        });

        const errorMessage = screen.getByText("Email is required");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveClass("form-input-error");

        const input = screen.getByPlaceholderText("Email");
        expect(input).toHaveClass("is-invalid");
    });

    it("should display an error message when no name is entered", () => {
        renderWithReactHookForm({
            name: "username",
            placeholder: "User name",
            type: "text",
            error: { type: "required", message: "The name is required" },
        });

        const errorMessage = screen.getByText("The name is required");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveClass("form-input-error");

        const input = screen.getByPlaceholderText("User name");
        expect(input).toHaveClass("is-invalid");
    });

    it("should display an error message when a password with less than 6 characters is entered", () => {
        renderWithReactHookForm({
            name: "password",
            placeholder: "Password",
            type: "password",
            error: {
                type: "required",
                message: "Invalid password: must be at least 6 characters.",
            },
        });

        const errorMessage = screen.getByText(
            "Invalid password: must be at least 6 characters."
        );
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveClass("form-input-error");

        const input = screen.getByPlaceholderText("Password");
        expect(input).toHaveClass("is-invalid");
    });

    it("should return the message 'Name cannot contain numbers' when a name with numerical digits is entered", async () => {
        renderWithReactHookForm({
            defaultValues: { username: "" },
            name: "username",
            placeholder: "User name",
            type: "text",
            error: {
                type: "validate",
                message: "The name cannot contain numbers",
            },
        });

        const input = screen.getByPlaceholderText("User name");
        fireEvent.change(input, { target: { value: "Maria123" } });

        await waitFor(() => {
            expect(input).toHaveValue("Maria123");
            expect(input).toHaveClass("is-invalid");

            const errorMessage = screen.getByText(
                "The name cannot contain numbers"
            );
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it("should return the message 'Name cannot contain numbers' when a name with numerical digits is entered", () => {
        renderWithReactHookForm({
            name: "email",
            placeholder: "Email",
            type: "email",
            error: { type: "required", message: "Invalid email" },
        });

        const input = screen.getByPlaceholderText("Email");
        fireEvent.change(input, { target: { value: "testexamplecom" } });

        expect(input).toHaveValue("testexamplecom");
        expect(input).toHaveClass("is-invalid");

        const errorMessage = screen.getByText("Invalid email");
        expect(errorMessage).toBeInTheDocument();
    });
});
