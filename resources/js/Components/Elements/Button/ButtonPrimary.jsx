
const ButtonPrimary = ({ name, radius ="rounded-full" }) => {
    return (
        <button
            className={`py-[11.5px] px-10 md:py-[9px] md:px-[39px] ${radius} w-full text-sm md:text-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-all ease-in-out duration-150`}
        >
            {name}
        </button>
    )
}

export default ButtonPrimary
