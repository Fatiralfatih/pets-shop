import ListItem from "@/Components/Elements/List/ListItem"
import UnorderedList from "@/Components/Elements/List/UnorderedList"
import LogoWeb from "@/Components/Elements/Logo/LogoWeb"
import dataSection from "@/libs/contanst/dataSection"
import listServiceProvider from "@/libs/contanst/listServiceProvider"
import listSosmed from "@/libs/contanst/listSosmed"

const Footer = () => {
    return (
        <footer className="mt-10 pb-10  bg-moon-yellow-400 rounded-3xl">
            <div className="container pt-12">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                        <UnorderedList gap="gap-x-8">
                            {dataSection.map((item) => (
                                <ListItem
                                    key={item.id}
                                >
                                    {item.nama}
                                </ListItem>)
                            )}
                        </UnorderedList>

                        <UnorderedList gap="gap-x-10">
                            {listSosmed.map(item => (
                                <ListItem key={item.id}>
                                    {item.logo}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </div>
                    <hr className="border-1 border-primary-800/30" />
                    <div className="flex flex-col items-center justify-center gap-4 mt-5 lg:flex-row lg:justify-between">
                        <div className="lg:order-2">
                            <LogoWeb />
                        </div>
                        <div className="lg:order-3">
                            <UnorderedList>
                                {listServiceProvider.map(item => (
                                    <ListItem key={item.id}>
                                        {item.nama}

                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </div>
                        <div className="lg:order-1">
                            <p className="text-primary-800 font-light capitalize">© 2024 Pet Shop. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
