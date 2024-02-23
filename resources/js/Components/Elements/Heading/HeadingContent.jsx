import { Link } from "@inertiajs/react";
import Button from "../Button/Button";
import { MdNavigateNext } from "react-icons/md";

const HeadingContent = ({ portal, title, btnName, filterOption, url }) => {
    return (
        <header className='flex justify-between'>
            <div className="md:space-y-1 md:flex md:flex-col">
                <p className='md:text-xl md:order-2 md:mt-2'>{portal}</p>
                <h1 className='font-medium text-primary-800 text-xl capitalize md:text-2xl 2xl:text-3xl'>{title}</h1>
            </div>
            <div className="mt-5">
                {btnName && (
                    <Link href={url}>
                        <Button
                            name={btnName}
                            iconRight={<MdNavigateNext size={25} />}
                            textColor="text-primary-800"
                            bgColor="bg-transparent"
                            radius="rounded-full"
                        />
                    </Link>
                )}
                {filterOption && (
                    filterOption
                )}
            </div>
        </header>
    )
}

export default HeadingContent
