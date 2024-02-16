import Image from "../atoms/Image"
import assetLocal from "../../libs/helper/AssetLocal"
import HeadingCard from "./HeadingCard"

const CardBody = () => {
    return (
        <>
            <Image
                src={assetLocal('image/cat-1.png')}
                alt="image-1"
            />
            <HeadingCard
                name="MO231 - Pomeranian White"
                genre="Male"
                age="02 months"
                price="3.900.000"
            />
        </>
    )
}

export default CardBody
