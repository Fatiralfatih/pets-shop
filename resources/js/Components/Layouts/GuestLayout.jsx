import Navbar from "../template/Navbar";
import Footer from "../template/Footer";

const GuestLayout = ({ children }) => {
    return (
        <>
            <Navbar />

            <main className="bg-white/15 pt-12 md:pt-16 lg:pt-20">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default GuestLayout
