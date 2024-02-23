
const FilterOption = () => {
    return (
        <select
            name="sort"
            className=" py-2  w-[160px] md:w-44 md:ps-6 rounded-full  border-primary-800 text-sm capitalize"
        >
            <option>sort: by popoler</option>
            <option>sort: by name</option>
            <option>sort: by small</option>
        </select>
    )
}

export default FilterOption
