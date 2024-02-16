import ButtonPrimary from "../atoms/ButtonPrimary"
import ButtonTransparant from "../atoms/ButtonTransparant"
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section className="min-h-[340px] md:min-h-[390px] xl:min-h-[410px] bg-moon-yellow-400 pt-14">
            <div className='container'>
                <div className="flex flex-col gap-8 md:text-center md:flex md:gap-8 md:justify-center">
                    <article className="flex flex-col flex-nowrap gap-4">
                        <div className="relative">
                            <div className="hidden md:block absolute  md:left-20 md:-top-4 lg:-top-5 lg:left-[120px] xl:left-[230px] 2xl:left-[340px] ">
                                <RiCheckboxBlankFill color="#F7DBA7"
                                    className="w-fit h-7 md:h-24 md:rotate-45 lg:h-28 "
                                />
                            </div>
                            <div className="relative">
                                <h1
                                    className=" text-[40px] leading-9 font-extrabold capitalize min-w-[420px] text-primary-900 
                                sm:text-5xl md:text-6xl lg:text-7xl"
                                >
                                    One more friend
                                </h1>
                            </div>
                            <div className="absolute top-8 right-3 md:right-16 lg:right-24 xl:right-48 2xl:right-64">
                                <RiCheckboxBlankFill color="#F7DBA7"
                                    className="w-fit h-7 lg:h-10 "
                                />
                            </div>
                        </div>
                        <div className="">
                            <h3
                                className="text-2xl  
                            text-primary-900 font-bold sm:text-3xl lg:text-4xl"
                            >
                                Thousands more fun!
                            </h3>
                        </div>
                        <div className="flex justify-center">
                            <p
                                className="text-sm leading-5 md:text-lg lg:max-w-3xl lg:text-xl"
                            >
                                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                            </p>
                        </div>
                    </article>
                    <div className="flex gap-5 md:justify-center">
                        <div>
                            <ButtonTransparant
                                name="View Intro"
                                icon={<IoPlayCircleOutline size={25} />}
                            />
                        </div>
                        <div>
                            <ButtonPrimary name="Explore Now"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
