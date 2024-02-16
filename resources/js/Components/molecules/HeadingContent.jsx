import ButtonTransparant from "../atoms/ButtonTransparant"
import { MdNavigateNext } from "react-icons/md";

const HeadingContent = ({ portal, title }) => {
    return (
        <header className='flex justify-between'>
            <div className="md:space-y-2">
                <p className='font-normal md:text-xl'>{portal}</p>
                <h1 className='font-bold text-primary-800 text-xl capitalize md:text-2xl 2xl:text-3xl'>{title}</h1>
            </div>
            <div className="hidden md:block mt-5">
                <ButtonTransparant name="View More" icon={<MdNavigateNext size={25} />} />
            </div>
        </header>
    )
}

export default HeadingContent
