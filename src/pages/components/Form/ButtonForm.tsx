interface Prop{
    nameButton:string
}
export const ButtonForm = ( {nameButton}: Prop) => {
    return (
        <button type="button" className="form-button form-button--submit">
            {nameButton}
        </button>
    );
};
