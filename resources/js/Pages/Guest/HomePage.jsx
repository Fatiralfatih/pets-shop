import HeroSection from "@/Components/template/HeroSection"
import PetsSection from "@/Components/template/PetsSection"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head } from "@inertiajs/react"

const HomePage = () => {
    return (
        <>
            <Head title="Home" />

            <GuestLayout>
                <HeroSection />
                <PetsSection />
            </GuestLayout>
        </>
    )
}

export default HomePage
