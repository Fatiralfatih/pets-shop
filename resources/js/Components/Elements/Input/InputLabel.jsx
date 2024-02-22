
const InputLabel = ({ name, htmlFor, iconLeft, iconRight }) => {

    let iconPosition;

    if (iconLeft || iconRight) {
        iconPosition = 'flex items-center gap-2'
    }

    return (
        <label
            htmlFor={htmlFor}
            className={`capitalize ${iconPosition}`}>
            {iconLeft && (
                <span>
                    {iconLeft}
                </span>
            )}
            {name}
            {iconRight && (
                <span>
                    {iconRight}
                </span>
            )}
        </label>
    )
}

export default InputLabel
