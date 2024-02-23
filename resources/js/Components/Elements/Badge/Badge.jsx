const Badge = ({ title, colorSchema }) => {
    return (
        <span className={`${colorSchema} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset  capitalize md:text-sm`}>
            {title}
        </span>
    )
}

export default Badge
