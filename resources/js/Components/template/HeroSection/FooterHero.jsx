import Button from "@/Components/Elements/Button/Button";
import { IoPlayCircleOutline } from "react-icons/io5";

const FooterHero = () => {
    return (
        <div className="flex gap-3 md:gap-6 justify-center ">
            <div>
                <Button
                    name="View Intro"
                    bgColor="bg-transparent"
                    textColor="text-primary-800"
                    iconRight={<IoPlayCircleOutline size={21} />}
                    radius="rounded-full"
                />
            </div>
            <div>
                <Button
                    name="Explore Now"
                    bgColor="bg-primary-800"
                    radius="rounded-full"
                    textColor="text-white"
                />
            </div>
        </div>
    )
}

export default FooterHero
