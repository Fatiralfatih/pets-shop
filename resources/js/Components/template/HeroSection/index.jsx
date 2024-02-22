import FooterHero from "./FooterHero"
import HeadingHero from "./HeadingHero"

const SectionHero = () => {
    return (
        <section className="bg-moon-yellow-400 min-h-fit pt-14">
            <div className='container'>
                <div className="flex flex-col gap-5 pb-9 md:text-center md:flex md:gap-8 md:justify-center">
                    <HeadingHero
                        title1="One More Friend"
                        title2="Thousands more fun!"
                        description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                    />
                    <FooterHero />
                </div>
            </div>
        </section>
    )
}

export default SectionHero
