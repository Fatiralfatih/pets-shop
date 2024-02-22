const ListItem = ({ children }) => {
    return (
        <>
            <li className="text-primary-800 capitalize text-sm cursor-pointer md:text-lg">{children}</li>
        </>
    )
}

export default ListItem
