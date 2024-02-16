
const HeadingCard = ({ name, genre, age, price }) => {
    return (
        <>
            <article>
                <h3 className='font-bold text-sm sm:text-lg'>{name}</h3>
            </article>
            <article className='flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-x-4'>
                <p className='text-sm md:text-lg lg:text-[16px]'>Genre: <span className='font-semibold text-gray-500'>{genre}</span></p>
                <p className='text-sm md:text-lg lg:text-[16px]'>Age: <span className='font-semibold text-gray-500'>{age} </span></p>
            </article>
            <div className='ps-1'>
                <h1 className='font-bold md:text-lg'>Rp.{price}</h1>
            </div>
        </>
    )
}

export default HeadingCard
