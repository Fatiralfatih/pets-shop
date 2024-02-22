
const InputText = ({ id, type, placeholder = '', className, name, value }) => {
    return (
        <>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                className={`rounded-lg text-sm capitalize ${className}`}
            />
        </>
    )
}

export default InputText
