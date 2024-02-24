import HamburgerMenu from '@/Components/Elements/Logo/HamburgerMenu'
import dataSection from '@/libs/contanst/dataSection'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoIosCloseCircleOutline, IoMdLogIn } from 'react-icons/io'
import MenuList from '@/Components/Elements/List/MenuList'
import MenuItem from '@/Components/Elements/List/MenuItem'
import LogoWeb from '@/Components/Elements/Logo/LogoWeb'
import Button from '@/Components/Elements/Button/Button'
import { Link } from '@inertiajs/react'
import { FaRegRegistered } from 'react-icons/fa'
import { FaRegUser } from "react-icons/fa6";
import InputText from '@/Components/Elements/Input/InputText'

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(true)
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    }
    return (
        <>
            <nav className={`py-4 sm:py-2 bg-moon-yellow-400 fixed right-0 left-0 z-10`}>

                <div className='relative container flex justify-between items-center md:gap-3 '>
                    {/** hamburger menu mobile */}
                    <HamburgerMenu clickOpenSidebar={handleOpenSidebar} />
                    {/** end hamburger menu mobile */}

                    <LogoWeb />

                    <MenuList classNavbar={!openSidebar && 'hidden md:p-2 xl:ms-5 2xl:ms-4'}>
                        {dataSection.map((item) => (
                            <MenuItem
                                key={item.id}
                                {...item}
                            >
                                {item.nama}
                            </MenuItem>
                        ))}
                    </MenuList>

                    {/** search menu mobile*/}
                    <button onClick={handleOpenSidebar} className='md:hidden pe-3'>
                        <BsSearch size={30} style={{ stroke: 'black', strokeWidth: "0.2" }} />
                    </button>
                    {/** end search menu mobile */}

                    <div className='hidden sm:flex lg:gap-2 lg:justify-center lg:items-center'>
                        <div className='relative z-10 w-full right-3'>
                            <InputText
                                id="search-mobile"
                                type="text"
                                name="search"
                                placeholder="Search something here!"
                                className="py-3 border-primary-600 ps-10  w-full h-full  md:border-none active:ring-primary-900 truncate md:w-[160px] md:rounded-full xl:w-[300px]"
                            />
                            <span>
                                <BsSearch size={17} className='absolute z-10 top-3.5 left-4 cursor-pointer' />
                            </span>
                        </div>
                        <Link href={route('login')}>
                            <FaRegUser size={25} />
                        </Link>
                    </div>
                </div>

                {/**sidebar on mobile */}
                <div
                    className={`${openSidebar ? 'fixed z-10 top-0 right-0 left-0 w-full h-full bg-white transition-all ease-in-out duration-150' : 'hidden'} md:hidden`}
                >
                    <div className="flex flex-col gap-y-5">
                        <div className="flex justify-between items-center pt-5 px-4">
                            <LogoWeb />

                            <button onClick={handleCloseSidebar}>
                                <IoIosCloseCircleOutline size={35} />
                            </button>
                        </div>
                        <div className="relative px-2 ms-5 sm:p-0">
                            <InputText
                                id="search"
                                type="text"
                                name="search"
                                placeholder="Search something here!"
                                className="py-3 border-primary-600 ps-10  w-full h-full active:ring-primary-900 "
                            />
                            <span>
                                <BsSearch size={17} className='absolute z-10 top-3.5 left-4 cursor-pointer' />
                            </span>
                        </div>

                        <MenuList>{dataSection.map(item => (
                            <MenuItem
                                key={item.id}
                                {...item}
                            >
                                {item.nama}
                            </MenuItem>
                        ))}
                        </MenuList>
                    </div>
                    <div className='absolute bottom-2 left-0 right-0 px-4'>
                        <div className='flex gap-4 justify-between'>
                            <Link href={route('login')} aria-label='login/register'>
                                <Button
                                    name="login"
                                    bgColor="bg-primary-800"
                                    textColor="text-white"
                                    iconRight={<IoMdLogIn size={18} />}
                                />
                            </Link>
                            <Link href={route('register')}>
                                <Button
                                    name="register"
                                    textColor="text-black"
                                    iconRight={<FaRegRegistered size={18} />}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
