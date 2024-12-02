import { Control, Controller, FieldError } from "react-hook-form";
import "./InputForm.css"
import { FormValuesForgotPassword } from "../schema/form.schema";
interface Props {
    name: keyof FormValuesForgotPassword;
    control: Control<FormValuesForgotPassword>;
    type?: string;
    error?: FieldError;
    placeholder: string;
}

export const InputForgotPassword = ({
    name,
    control,
    type,
    error,
    placeholder,
}: Props) => {
    return (
        <div className="form-group">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        {...field}
                        className={`form-input ${error ? "is-invalid" : ""}`}
                    />
                )}
            />
            {error && <p className="form-input-error">{error.message}</p>}
        </div>
    );
};
