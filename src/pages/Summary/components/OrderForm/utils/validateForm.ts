// si pongo 6 digitos para el n'umero  igual registra la solicitud
import { valuesForm } from "../OrderForm";
interface Props {
    dataForm: valuesForm
    setErrors: React.Dispatch<React.SetStateAction<Partial<valuesForm>>>
}
export const validateForm = ({dataForm, setErrors}: Props): boolean => {

    const newErrors: Partial<valuesForm> = {};

    if (!dataForm.name) {
      newErrors.name = 'Campo obligatorio';
      // que hace el regex? hay que moverlo a enum
    } else if (!/^[a-zA-Z]+$/.test(dataForm.name)) {
      newErrors.name = 'Debe ingresar un valor válido';
    }

    if (!dataForm.lastName) {
      newErrors.lastName = 'Campo obligatorio';
      // que hace el regex?
    } else if (!/^[a-zA-Z]+$/.test(dataForm.lastName)) {
      newErrors.lastName = 'Debe ingresar un valor válido';
    }

    if (!dataForm.district) {
      newErrors.district = 'Campo obligatorio';
    }

    if (!dataForm.address) {
      newErrors.address = 'Campo obligatorio';
    }

    if (!dataForm.reference) {
      newErrors.reference = 'Campo obligatorio';
    }

    if (!dataForm.phone) {
      newErrors.phone = 'Campo obligatorio';
      // que hace el regex?
    } else if (!/^\d+$/.test(dataForm.phone)) {
      newErrors.phone = 'Debe ingresar un número válido';
    }

    setErrors(newErrors);

    const formIsEmpty = Object.keys(newErrors).length === 0;
    return formIsEmpty
};