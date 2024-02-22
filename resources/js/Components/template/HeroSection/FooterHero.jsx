import Button from "@/Components/Elements/Button/Button";
import { IoPlayCircleOutline } from "react-icons/io5";

const FooterHero = ({ borderColor, textColor, bgColor }) => {
    return (
        <div className="flex gap-3 md:gap-6 justify-center ">
            <div>
                <Button
                    name="View Intro"
                    bgColor="bg-transparent"
                    textColor={textColor.btn1}
                    borderColor={borderColor}
                    iconRight={<IoPlayCircleOutline size={21} />}
                    radius="rounded-full"
                />
            </div>
            <div>
                <Button
                    name="Explore Now"
                    bgColor={bgColor}
                    radius="rounded-full"
                    textColor={textColor.btn2}
                />
            </div>
        </div>
    )
}

export default FooterHero
