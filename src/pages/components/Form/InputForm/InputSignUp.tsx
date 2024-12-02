import { Control, Controller, FieldError } from "react-hook-form";
import "./InputForm.css";
import { FormValuesSignUp } from "../schema/form.schema";
interface Props {
    name: keyof FormValuesSignUp;
    control: Control<FormValuesSignUp>;
    type?: string;
    error?: FieldError;
    placeholder: string;
}

export const InputSignUp = ({
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
