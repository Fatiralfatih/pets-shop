import GuestLayout from "@/Components/Layouts/GuestLayout"
import { Head } from "@inertiajs/react"
import SectionCard from "@/Components/template/CardSection"
import SectionBanner from "@/Components/template/BannerSection"
import SectionHero from "@/Components/template/HeroSection"
import Card from "@/Components/Elements/Card/Card"
import dataPost from "@/libs/contanst/dataPost"
import dataCat from "@/libs/contanst/dataCats"
import ArticlePets from "@/Components/Elements/Article/ArticlePets"
import ArticlePost from "@/Components/Elements/Article/ArticlePost"

const HomePage = () => {
    return (
        <>
            <Head title="Home" />
            <GuestLayout>
                {/**hero section */}
                <SectionHero />
                {/**end hero section */}

                {/**cats section */}
                <SectionCard
                    portal="Whats New?"
                    title="Take a look at some of our pets"
                >
                    <div className='mt-4 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-3 md:gap-4 lg:grid-cols-4'>
                        {dataCat.map((pet) => (<Card
                            key={pet.id}
                            image={pet.image}
                        >
                            <ArticlePets {...pet} />
                        </Card>))}
                    </div>
                </SectionCard>
                {/**end cats section */}

                {/**banner section 2 */}
                <SectionBanner color="bg-moon-yellow-400" />

                {/**end banner section 2 */}

                <SectionCard
                    portal="You already know ?"
                    title="Useful pet knowledge"
                >
                    <div className="mt-4 md:mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        {dataPost.map((post) => (<Card
                            key={post.id}
                            image={post.image}
                        >
                            <ArticlePost {...post} />
                        </Card>))}
                    </div>

                </SectionCard>
            </GuestLayout>
        </>
    )
}

export default HomePage
