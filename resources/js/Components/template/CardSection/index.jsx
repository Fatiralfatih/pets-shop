import Button from "@/Components/Elements/Button/Button"
import HeadingContent from "@/Components/Elements/Heading/HeadingContent"
import { Link } from "@inertiajs/react"
import { MdNavigateNext } from "react-icons/md"

const SectionCard = ({ title, portal, children, btnName, className, container, url }) => {
    return (
        <section className={className}>
            <div className={container}>
                <HeadingContent
                    portal={portal}
                    title={title}
                    btnName={btnName}
                    url={url}
                />

                {children}

                {btnName && (
                    <div className='mt-5 md:hidden'>
                        <Link href={route("guest.pets")}>
                            <Button
                                name="View More"
                                textColor="text-primary-800"
                                radius="rounded-full"
                                iconRight={<MdNavigateNext size={22} />}
                            />
                        </Link>
                    </div>
                )}

            </div>
        </section>
    )
}

export default SectionCard
