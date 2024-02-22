const SectionHero = ({ children }) => {
    return (
        <section className="bg-moon-yellow-400 min-h-fit pt-10 md:pt-14">
            <div className='container'>
                <div className="flex flex-col gap-5 pb-9 text-center md:flex md:gap-8 md:justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionHero
