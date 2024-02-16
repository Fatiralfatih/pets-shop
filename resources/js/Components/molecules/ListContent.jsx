
const ListContent = ({ children, classNavbar, }) => {
    return (
        <ul className={`md:flex md:gap-2 w-full ${classNavbar} `}>
            {children}
        </ul>
    )
}

export default ListContent
