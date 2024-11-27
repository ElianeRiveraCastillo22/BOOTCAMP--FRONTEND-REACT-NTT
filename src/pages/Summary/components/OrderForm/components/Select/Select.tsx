import { useRef, useState } from "react"
import { Usedistricts } from "../../../../../../Hooks/Usedistricts"
import { valuesForm } from "../../OrderForm"
import { Options } from "./components/Options"

interface Prop{
    setDataForm: React.Dispatch<React.SetStateAction<valuesForm>>
}

export const Select = ({setDataForm}:Prop) => {

    const { districts } = Usedistricts()
    const useDropDown = useRef<HTMLUListElement>(null)
    const refLabel = useRef<HTMLParagraphElement>(null)
    const [isSelectOpen, setIsSelectOpen ] = useState(false)

    return (
        <div className="cart-page__select">
            <div className="cart-page__input cart-page__selectLabel" onClick={()=>setIsSelectOpen(!isSelectOpen)} >
                <p className="cart-page__label" ref={refLabel}>Seleccionar Distrito</p>
                <img src="src/assets/icons/dragIcon.svg"/>
            </div>
            <ul
                className={isSelectOpen ? "cart-page__dropdown": "cart-page__dropdown cart-page__dropdown--close"}
                ref={useDropDown}
            >
                {
                    districts.map((districts, districtsIndex)=>{
                        return <Options key={districtsIndex} districts={districts} refLabel={refLabel} useDropDown={useDropDown} setDataForm={setDataForm}/>
                    })
                }
            </ul>
        </div>
    )
}