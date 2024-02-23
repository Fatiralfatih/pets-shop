const HeadingHero = ({ title1, title2, description, icon, textColor = "text-primary-900" }) => {

    return (
        <article className={`space-y-3 ${textColor}`}>
            <div>
                {icon ? <h1
                    className="flex items-center justify-center gap-4 md:justify-center text-4xl leading-9 font-extrabold capitalize   md:text-5xl lg:text-6xl"
                >
                    {title1}
                    <span>{icon}</span>
                </h1>
                    :
                    <h1 className="text-4xl leading-9 font-extrabold capitalize  md:text-5xl lg:text-6xl"
                    >
                        {title1}
                    </h1>}
            </div>
            <div className="">
                <h2
                    className="text-2xl  font-semibold sm:text-3xl lg:text-4xl"
                >
                    {title2}
                </h2>
            </div>
            <div className={`flex md:justify-center`}>
                <p
                    className="text-xs leading-5 md:text-lg md:px-6 lg:px-4 lg:max-w-3xl lg:text-xl"
                >
                    {description}
                </p>
            </div>
        </article>
    )
}

export default HeadingHero
