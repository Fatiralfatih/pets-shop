
const Image = ({ src, alt }) => {
    return (
        <figure>
            <img src={src} alt={alt} className='rounded-lg w-full bg-contain' />
        </figure>
    )
}

export default Image
