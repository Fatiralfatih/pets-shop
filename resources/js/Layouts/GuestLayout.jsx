import Navbar from "@/Components/organism/Navbar"

const GuestLayout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="bg-white/15">
                {children}
            </main>
            <footer className="container">
                {/**
                <p>ini footer ntar aja dibikin</p>
         */}
            </footer>
        </>
    )
}

export default GuestLayout
