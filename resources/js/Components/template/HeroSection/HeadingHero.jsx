const HeadingHero = ({ title1, title2, description, icon, }) => {

    return (
        <article className="space-y-3">
            <div>
                {icon ? <h1
                    className="flex items-center justify-center gap-4 md:justify-center text-4xl leading-9 font-extrabold capitalize  text-primary-900 md:text-5xl lg:text-6xl"
                >
                    {title1}
                    <span>{icon}</span>
                </h1>
                    :
                    <h1 className="text-4xl leading-9 font-extrabold capitalize text-primary-900 md:text-5xl lg:text-6xl"
                    >
                        {title1}
                    </h1>}
            </div>
            <div className="">
                <h3
                    className="text-2xl text-primary-900 font-bold sm:text-3xl lg:text-4xl"
                >
                    {title2}
                </h3>
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
