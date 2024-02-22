const ArticlePets = ({ name, genre, age, price }) => {
    return (
        <div className="px-1 space-y-1 lg:space-y-2">
            <article>
                <h3 className='font-medium text-sm sm:text-lg capitalize'>{name}
                </h3>
            </article>
            <article className='flex flex-col gap-x-2 gap-y-3 lg:flex-row lg:items-center'>
                <p className='text-sm md:text-lg lg:text-[16px] capitalize '>Genre: <span className='font-semibold text-gray-500'>{genre}</span></p>
                <p className='text-sm md:text-lg lg:text-[16px] capitalize'>Age: <span className='font-semibold text-gray-500'>{age}</span></p>
            </article>
            <article className=''>
                <h1 className='font-medium md:text-lg capitalize'>Rp.{price}</h1>
            </article>
        </div>
    )
}

export default ArticlePets
