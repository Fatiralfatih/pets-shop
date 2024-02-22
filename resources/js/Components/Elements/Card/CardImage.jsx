import assetLocal from "@/libs/helper/AssetLocal"

const CardImage = ({ image }) => {
    return (
        <figure>
            <img
                src={assetLocal(image)}
                alt={'asdasd'}
                className="w-full bg-contain"
            />
        </figure>
    )
}

export default CardImage
