
const Button = ({ name, iconRight, iconLeft, bgColor, textColor, radius = "rounded-lg" }) => {

    return (
        <button
            className={`flex gap-x-2 capitalize justify-center items-center py-2 px-7 md:py-[9px] md:px-[30px] ${radius} w-full text-sm border-2 border-primary-800 md:text-lg ${bgColor} ${textColor} font-medium hover:bg-primary-900 hover:text-white transition-all ease-in-out duration-150`}
        >
            {name}
            {iconRight && (<span>{iconRight}</span>)}
            {iconLeft && (<span className="-order-1">{iconLeft}</span>)}
        </button>
    )
}

export default Button
