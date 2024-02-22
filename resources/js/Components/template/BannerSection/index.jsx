const SectionBanner = ({ bgColor, padding, children }) => {
    return (
        <section className={`container pt-4 md:pt-4`}>
            <div className={`${bgColor} min-h-fit ${padding} rounded-lg`}>
                <div className="flex flex-col justify-center gap-5 pb-9 text-center md:gap-8">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionBanner
