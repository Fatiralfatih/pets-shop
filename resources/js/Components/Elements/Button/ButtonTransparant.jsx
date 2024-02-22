
const ButtonTransparant = ({ name, icon }) => {
    return (
        <button
            className='flex gap-x-2 justify-center items-center py-1 px-6 md:py-2 rounded-full w-full text-sm sm:text-lg text-primary-800 border-2 border-primary-800 font-medium hover:bg-primary-800 hover:text-white transition-all ease-in-out duration-150'
        >
            {name}
            <span>{icon}</span>
        </button>
    )
}

export default ButtonTransparant
