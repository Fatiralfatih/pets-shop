
const CardImage = ({ src, alt }) => {
    return (
        <figure>
            <img
                src={src}
                alt={alt}
                className="w-full min-h-[150px] md:max-w-full md:max-h-[200px] xl:min-h-[260px] bg-contain rounded-lg"
            />
        </figure>
    )
}

export default CardImage
