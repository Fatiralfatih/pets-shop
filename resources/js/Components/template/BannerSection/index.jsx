import F7PawIcon from "@/Components/Elements/Icon/F7PawIcon"
import HeadingHero from "../HeroSection/HeadingHero"
import FooterHero from "../HeroSection/FooterHero"

const SectionBanner = ({ color }) => {
    return (
        <section className='container pt-10 md:pt-14'>
            <div className={`${color} min-h-fit pt-10 rounded-xl`}>
                <div className="flex flex-col justify-center gap-5 pb-9 text-center md:gap-8">
                    <HeadingHero
                        title1="Adoption"
                        icon={<F7PawIcon />}
                        title2="We need help. so do they."
                        description="Adopt a pet and give it a home,
                        it will be love you back unconditionally."
                    />
                    <FooterHero />
                </div>
            </div>
        </section>
    )
}

export default SectionBanner
