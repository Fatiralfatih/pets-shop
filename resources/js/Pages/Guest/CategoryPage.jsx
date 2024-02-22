import ArticlePets from "@/Components/Elements/Article/ArticlePets"
import Card from "@/Components/Elements/Card/Card"
import HeadingContent from "@/Components/Elements/Heading/HeadingContent"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import FilterOption from "@/Components/Elements/Select/FilterOption"
import SectionBanner from "@/Components/template/BannerSection"
import SectionCard from "@/Components/template/CardSection"
import FooterHero from "@/Components/template/HeroSection/FooterHero"
import HeadingHero from "@/Components/template/HeroSection/HeadingHero"
import Navbar from "@/Components/template/Navbar"
import dataPets from "@/libs/contanst/dataPets"
import { Head } from "@inertiajs/react"
import InputText from "@/Components/Elements/Input/InputText";
import InputLabel from "@/Components/Elements/Input/InputLabel";
import Footer from "@/Components/template/Footer";

const CategoryPage = () => {
    return (
        <>
            <Head title="Category" />
            <Navbar bgColor="bg-white" />
            <main className="pt-[70px] md:pt-20">
                <div className="flex container">
                    <h2 className="font-normal"> Home  {'>'}  Pets {'>'} small</h2>
                </div>

                <SectionBanner bgColor="bg-primary-800" padding="pt-8 md:pt-12 md:pb-5" textColor="text-white" borderColor="border-white">
                    <HeadingHero
                        title1="One more friend"
                        textColor="text-white"
                        title2="Thousands more fun!"
                        description="Adopt a pet and give it a home,
                        it will be love you back unconditionally."
                    />
                    <FooterHero
                        borderColor="border-primary"
                        textColor={{ btn1: 'text-white', btn2: 'text-primary-800' }}
                        bgColor="bg-white"
                    />
                </SectionBanner>

                <section className="pt-2 md:pt-5 container">
                    <div className="flex gap-4">
                        <aside className="sticky h-screen top-16">
                            <div className="hidden md:flex md:basis-[340px] mt-6 md:flex-col md:gap-6">
                                <h1 className="font-medium text-primary-800 text-3xl capitalize w-fit">Filter</h1>
                                {/** Gender */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-primary-800">Gender</h2>
                                    <div className="space-x-2">
                                        <InputText id="male" type="checkbox" name="gender" value="male" className="rounded-sm" />
                                        <InputLabel htmlFor="male" name="Male" />
                                    </div>
                                    <div className="space-x-2">
                                        <InputText id="female" type="checkbox" name="gender" value="female" className="rounded-sm" />
                                        <InputLabel htmlFor="female" name="female" />
                                    </div>
                                </div>
                                <hr />

                                {/**Color */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-primary-800">Color</h2>
                                    <div className="flex gap-2 items-center">
                                        <InputText id="red" type="checkbox" name="color" value="red" className="rounded-sm" />
                                        <InputLabel
                                            htmlFor="red"
                                            name="Red"
                                            iconLeft={(<RiCheckboxBlankCircleFill color="red" />)}
                                        />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <InputText id="green" type="checkbox" name="color" value="green" className="rounded-sm" />
                                        <InputLabel
                                            htmlFor="green"
                                            name="green"
                                            iconLeft={(<RiCheckboxBlankCircleFill color="green" />)}
                                        />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <InputText id="blue" type="checkbox" name="color" value="blue" className="rounded-sm" />
                                        <InputLabel
                                            htmlFor="blue"
                                            name="blue"
                                            iconLeft={(<RiCheckboxBlankCircleFill color="blue" />)}
                                        />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <InputText id="yellow" type="checkbox" name="color" value="yellow" className="rounded-sm" />
                                        <InputLabel
                                            htmlFor="yellow"
                                            name="yellow"
                                            iconLeft={(<RiCheckboxBlankCircleFill color="yellow" />)}
                                        />
                                    </div>
                                </div>

                                {/** price */}
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-primary-800">Price</h2>
                                    <div className="flex gap-3">
                                        <InputText type="number" name="price" className="md:w-24 xl:w-32" placeholder="max" />
                                        <InputText type="number" name="price" className="md:w-24 xl:w-32" placeholder="min" />
                                    </div>
                                </div>

                                {/** Breed */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-primary-800">Breed</h2>
                                    <div className="space-x-2">
                                        <InputText id="small" type="checkbox" value="small" className="rounded-sm" />
                                        <InputLabel htmlFor="small" name="small" />
                                    </div>
                                    <div className="space-x-2">
                                        <InputText id="medium" type="checkbox" value="medium" className="rounded-sm" />
                                        <InputLabel htmlFor="medium" name="medium" />
                                    </div>
                                    <div className="space-x-2">
                                        <InputText id="large" type="checkbox" value="large" className="rounded-sm" />
                                        <InputLabel htmlFor="large" name="large" />
                                    </div>
                                </div>

                            </div>
                        </aside>

                        <SectionCard>
                            <HeadingContent
                                portal="52 pupies"
                                title="small Pets"
                                filterOption={(<FilterOption />)}
                            />
                            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
                                {dataPets.map(item => (
                                    <Card key={item.id} image={item.image}>
                                        <ArticlePets {...item} />
                                    </Card>
                                ))}
                            </div>
                        </SectionCard>

                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default CategoryPage
