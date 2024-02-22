
const MenuItem = ({ children }) => {
    return (
        <>
            <li
                className='font-[500] px-4  text-primary-600 text-lg cursor-pointer hover:bg-primary-800 hover:text-white focus:text-white p-3 md:px-3 md:py-2 md:rounded-xl lg:px-4 lg:rounded-full 2xl:px-6 xl:py-3 transition-all ease-in-out duration-150'
            >
                {children}
            </li>
        </>
    )
}

export default MenuItem
