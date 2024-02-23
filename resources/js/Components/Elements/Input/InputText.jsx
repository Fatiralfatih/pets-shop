
const InputText = ({ id, type, placeholder = '', className, name, value, onClick }) => {
    return (
        <>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                className={`rounded-lg text-sm capitalize ${className}`}
                onClick={onClick}
            />
        </>
    )
}

export default InputText
