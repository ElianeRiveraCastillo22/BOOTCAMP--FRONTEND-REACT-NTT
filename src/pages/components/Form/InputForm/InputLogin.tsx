import { Control, Controller, FieldError } from "react-hook-form";
import "./InputForm.css"
import { FormValuesLogin } from "../schema/form.schema";
interface Props {
    name: keyof FormValuesLogin;
    control: Control<FormValuesLogin>;
    type?: string;
    error?: FieldError;
    placeholder: string;
}

export const InputLogin = ({
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
