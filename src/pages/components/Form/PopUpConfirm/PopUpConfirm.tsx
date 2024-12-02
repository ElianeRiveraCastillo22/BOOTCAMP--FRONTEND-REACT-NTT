import "./PopUpConfirm.css"

interface Prop {
    message: string
}

export const PopUpConfirm = ({message}: Prop) =>{
    return(
        <dialog className="popUpConfirm" open>
            <figure>
                <img src="src/assets/icons/check.svg" />
            </figure>
            <p>{message}</p>
        </dialog>
    )
}