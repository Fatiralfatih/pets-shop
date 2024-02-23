import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

const CardBodyPets = ({ name, genre, age, price }) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className="px-1 space-y-1 md:space-y-2 ">
            <article className="flex justify-between items-center">
                <h2 className='font-medium text-lg lg:text-xl w-fit capitalize'>{name}
                </h2>
                <span className="me-2 cursor-pointer" onClick={handleLike}>
                    {like ? (<FaHeart size={20} />) : (<FaRegHeart size={20} />)}
                </span>
            </article>
            <article className='flex flex-col gap-x-5 lg:flex-row lg:items-center'>
                <p className='text-sm md:text-lg lg:text-[16px] capitalize '>Genre: <span className='font-semibold text-gray-500'>{genre}</span></p>
                <p className='text-sm md:text-lg lg:text-[16px] capitalize'>Age: <span className='font-semibold text-gray-500'>{age} Months</span></p>
            </article>
            <article className=''>
                <h1 className='font-medium md:text-lg capitalize'>Rp.{price}</h1>
            </article>
        </div>
    )
}

export default CardBodyPets
