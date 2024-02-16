import { BsSearch } from "react-icons/bs"

const InputSearch = ({ id }) => {
    return (
        <div className='relative z-10 w-full right-3'>
            <input
                id={id}
                type="text"
                placeholder='Search something here!'
                className='rounded-lg text-sm ps-10 w-full h-full py-3 border-primary-600 md:border-none active:ring-primary-900 truncate md:w-[160px] md:rounded-full xl:w-[300px]'
            />
            <label htmlFor={id}>
                <BsSearch size={17} className='absolute z-10 top-3.5 left-4 cursor-pointer' />
            </label>
        </div>
    )
}

export default InputSearch
