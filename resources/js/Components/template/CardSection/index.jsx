import ButtonTransparant from "@/Components/Elements/Button/ButtonTransparant"
import HeadingContent from "@/Components/Elements/Heading/HeadingContent"
import { MdNavigateNext } from "react-icons/md"

const SectionCard = ({ title, portal, children, btnName = 'View More' }) => {
    return (
        <section className='pt-10 md:pt-14'>
            <div className='container'>
                <HeadingContent
                    portal={portal}
                    title={title}
                    btnName={btnName}
                />

                {children}

                <div className='mt-5 md:hidden'>
                    <ButtonTransparant name={btnName} icon={<MdNavigateNext size={30} style={{ marginTop: '1px' }} />} />
                </div>

            </div>
        </section>
    )
}

export default SectionCard
