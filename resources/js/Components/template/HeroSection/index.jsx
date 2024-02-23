const SectionHero = ({ children }) => {
    return (
        <section className="bg-moon-yellow-400 min-h-fit py-12 md:py-16 rounded-3xl">
            <div className='container'>
                <div className="flex flex-col gap-5 text-center md:flex md:gap-8 md:justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionHero
