import Button from "../Button/Button";
import { MdNavigateNext } from "react-icons/md";

const HeadingContent = ({ portal, title, btnName }) => {
    return (
        <header className='flex justify-between'>
            <div className="md:space-y-2">
                <p className='md:text-xl'>{portal}</p>
                <h1 className='font-medium text-primary-800 text-xl capitalize md:text-2xl 2xl:text-3xl'>{title}</h1>
            </div>
            <div className="hidden md:block mt-5">
                <Button
                    name={btnName}
                    iconRight={<MdNavigateNext size={25} />}
                    textColor="text-primary-800"
                    bgColor="bg-transparent"
                    radius="rounded-full"
                />
            </div>
        </header>
    )
}

export default HeadingContent
