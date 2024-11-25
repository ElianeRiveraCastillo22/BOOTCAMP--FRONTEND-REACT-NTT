import { useEffect, useRef } from "react"
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

    function openSelect(){
        if(useDropDown.current?.classList.contains("cart-page__dropdown--close")){
            useDropDown.current?.classList.remove("cart-page__dropdown--close")
        }else{
            useDropDown.current?.classList.add("cart-page__dropdown--close")
        }
    }

    return (
        <div className="cart-page__select">
            <div className="cart-page__input cart-page__selectLabel" onClick={openSelect} >
                <p className="cart-page__label" ref={refLabel}>Seleccionar Distrito</p>
                <img src="src/assets/icons/dragIcon.svg"/>
            </div>
            <ul className="cart-page__dropdown cart-page__dropdown--close" ref={useDropDown}>
                {
                    districts.map((districts, districtsIndex)=>{
                        return <Options key={districtsIndex} districts={districts} refLabel={refLabel} useDropDown={useDropDown} setDataForm={setDataForm}/>
                    })
                }
            </ul>
        </div>
    )
}