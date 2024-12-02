interface Props{
    type: string,
    id?: string,
    placeholder: string,
    name?: string
}

export const InputForm = ({type, id, placeholder,name}: Props) => {
    return (
        <div className="form-group">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                className="form-input"
                required
            />
        </div>
    );
};
