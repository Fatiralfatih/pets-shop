import { Head } from "@inertiajs/react"
import SectionCard from "@/Components/template/CardSection"
import SectionBanner from "@/Components/template/BannerSection"
import SectionHero from "@/Components/template/HeroSection"
import Card from "@/Components/Elements/Card/Card"
import dataPost from "@/libs/contanst/dataPost"
import datapets from "@/libs/contanst/dataPets"
import HeadingHero from "@/Components/template/HeroSection/HeadingHero"
import F7PawIcon from "@/Components/Elements/Icon/F7PawIcon"
import FooterHero from "@/Components/template/HeroSection/FooterHero"
import GuestLayout from "@/Components/Layouts/GuestLayout"
import CardBodyPets from "@/Components/Elements/Card/CardBody/CardBodyPets"
import CardBodyPost from "@/Components/Elements/Card/CardBody/CardBodyPost"

const HomePage = () => {
    return (
        <>
            <Head title="Home" />
            <GuestLayout>
                <main className="pt-14">
                    {/**hero section */}
                    <SectionHero>
                        <HeadingHero
                            title1="One More Friend"
                            textColor="text-primary-800"
                            title2="Thousands more fun!"
                            description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                        />
                        <FooterHero
                            borderColor="border-primary-800"
                            textColor={{ btn1: 'text-primary-800', btn2: 'text-white' }}
                            bgColor="bg-primary-800"
                        />
                    </SectionHero>
                    {/**end hero section */}

                    {/**Pets section */}
                    <SectionCard
                        portal="Whats New?"
                        title="Take a look at some of our pets"
                        btnName="View More"
                        className="pt-10 md:pt-14 pb-5 md:pb-10"
                        container="container"
                        url={route('guest.pets')}
                    >
                        <div className='mt-4  grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-3 md:gap-4 lg:grid-cols-4 '>
                            {datapets.map((pet) => (<Card
                                key={pet.id}
                                image={pet.image}
                            >
                                <CardBodyPets {...pet} />
                            </Card>))}
                        </div>
                    </SectionCard>
                    {/**end Pets section */}

                    {/**banner section */}
                    <SectionBanner bgColor="bg-moon-yellow-400" padding="pt-12 pb-2 md:pb-4">
                        <HeadingHero
                            title1="Adoption"
                            textColor="text-primary-800"
                            icon={<F7PawIcon />}
                            title2="We need help. so do they."
                            description="Adopt a pet and give it a home,
                        it will be love you back unconditionally."
                        />
                        <FooterHero
                            borderColor="border-primary-800"
                            textColor={{ btn1: 'text-primary-800', btn2: 'text-white' }}
                            bgColor="bg-primary-800"
                        />
                    </SectionBanner>

                    {/**end banner section */}

                    <SectionCard
                        portal="You already know ?"
                        title="Useful pet knowledge"
                        btnName="View More"
                        className="pt-10 md:pt-14"
                        container="container"
                    >
                        <div className="mt-4 md:mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                            {dataPost.map((post) => (<Card
                                key={post.id}
                                image={post.image}
                            >
                                <CardBodyPost {...post} />
                            </Card>))}
                        </div>

                    </SectionCard>

                    {/**Footer */}

                </main>
            </GuestLayout>

            {/** end Footer */}
        </>
    )
}

export default HomePage
