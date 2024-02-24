import Footer from '../template/Footer'
import Navbar from '../template/Navbar'

const GuestLayout = ({ children }) => {


    return (
        <>
            <Navbar  />

            {children}

            <Footer />
        </>
    )
}

export default GuestLayout
