import { valuesForm } from "../OrderForm";

enum RegexPatterns {
    OnlyAlphabetsPattern = '^[a-zA-Z]+$',
    isPhoneNumberMinLength = '^9\\d{8}$',  // Escapamos las barras y el dígito
    noLettersInNumber =  "/[^0-9]/"

}

interface Props {
    dataForm: valuesForm
    setErrors: React.Dispatch<React.SetStateAction<Partial<valuesForm>>>
}

export const validateForm = ({dataForm, setErrors}: Props): boolean => {

    const newErrors: Partial<valuesForm> = {};

	const regexName = new RegExp(RegexPatterns.OnlyAlphabetsPattern);
	const regexPhoneNoLetter = new RegExp(RegexPatterns.noLettersInNumber);
	const regexPhoneNumberMinLength = new RegExp(RegexPatterns.isPhoneNumberMinLength);

	const isRequired = (value: string): string | null => {
		return value ? null : `Campo obligatorio`;
	};

	const isAlphabetic = (value: string): string | null => {
		return regexName.test(value) ? null : `El campo debe contener solo letras`;
	};

	const isValidPhone = (value: string): string | null => {

	    if (regexPhoneNoLetter.test(value)) {
			return "El número no debe contener letras";
		}

		if (!regexPhoneNumberMinLength.test(value)) {
			return "Debe de tener 9 dígitos numericos y comenzar con 9";
		}

		return null;

	};


	const nameError = isRequired(dataForm.name) || isAlphabetic(dataForm.name);
	if (nameError) newErrors.name = nameError;

	const lastNameError = isRequired(dataForm.lastName) || isAlphabetic(dataForm.lastName);
	if (lastNameError) newErrors.lastName = lastNameError;

	const districtError = isRequired(dataForm.district);
	if (districtError) newErrors.district = districtError;

	const addressError = isRequired(dataForm.address);
	if (addressError) newErrors.address = addressError;

	const referenceError = isRequired(dataForm.reference);
	if (referenceError) newErrors.reference = referenceError;

	const phoneError = isRequired(dataForm.phone) || isValidPhone(dataForm.phone);
	if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);

    const formIsEmpty = Object.keys(newErrors).length === 0;

    return formIsEmpty
};