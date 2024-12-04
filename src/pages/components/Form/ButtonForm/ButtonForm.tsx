interface Prop{
    nameButton:string
    type?: "submit" | "reset" | "button";
}
export const ButtonForm = ( {nameButton, type}: Prop) => {
    return (
        <button type={type} className="form-button form-button--submit">
            {nameButton}
        </button>
    );
};
