import { Link, usePage } from "@inertiajs/react"

const MenuItem = ({ children, link }) => {

    const { url } = usePage()

    return (
        <>
            <Link
                href={link}
                as="li"
                className={`${url === link && 'bg-primary-800 text-white'} font-[500] px-4 text-lg cursor-pointer hover:bg-primary-800 hover:text-white p-3 md:px-3 md:py-2 md:rounded-xl lg:px-4 lg:rounded-full 2xl:px-6 xl:py-3 transition-all ease-in-out duration-150`}
            >
                {children}
            </Link >
        </>
    )
}

export default MenuItem
