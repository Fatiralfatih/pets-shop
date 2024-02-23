
const CardImage = ({ src, alt }) => {
    return (
        <figure>
            <img
                src={src || '/image/banteng-1.png'}
                alt={alt || 'banteng merah'}
                className="w-full min-h-[150px] md:max-w-full md:max-h-[200px] xl:min-h-[260px] bg-contain rounded-lg aspect-auto"
            />
        </figure>
    )
}

export default CardImage
