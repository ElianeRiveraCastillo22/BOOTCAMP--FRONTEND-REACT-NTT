import { ReactNode, useRef } from "react"
import { valuesForm } from "../../../OrderForm";

interface Props {
    districts: string;
    useDropDown:React.RefObject<HTMLUListElement>
    refLabel: React.RefObject<HTMLParagraphElement>
    setDataForm: React.Dispatch<React.SetStateAction<valuesForm>>
}

export const Options = ({districts, refLabel, useDropDown, setDataForm}: Props): ReactNode => {

    const refOption = useRef<HTMLLIElement>(null)

    function selectDistrict(){
        if (refLabel.current && refOption.current && useDropDown.current) {
            refLabel.current.textContent = refOption.current?.dataset.value || '';
            useDropDown.current?.classList.add("cart-page__dropdown--close")
            setDataForm((prev) => ({ ...prev, district: refOption.current?.dataset.value || '' }));
        }
    }

    return (
        <li onClick={selectDistrict} ref={refOption} data-value={districts}>{districts}</li>
    )
}