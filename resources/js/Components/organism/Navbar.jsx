import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import HamburgerMenu from '../atoms/HamburgerMenu';
import LogoWeb from '../atoms/LogoWeb';
import InputSearch from '../molecules/InputSearch';
import dataSection from '../../libs/contanst/dataSection';
import ListItem from '../atoms/ListItem';
import ListContent from '../molecules/ListContent';
import ButtonPrimary from '../atoms/ButtonPrimary';
import { IoIosCloseCircleOutline } from "react-icons/io";
import assetLocal from '../../libs/helper/AssetLocal';


const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(true)
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    }

    return (
        <nav className='pt-6 bg-moon-yellow-400 '>

            <figure className='absolute -top-[75px] left-0 right-0 sm:left-[100px] md:-top-16 md:-left-[9rem] lg:-left-[7rem] xl:-left-[0.5rem] 2xl:-left-[4.7rem]'>
                <img
                    src={assetLocal('image/rectangle.svg')}
                    alt="rectangle"
                    className='min-w-[490px] h-[200px] sm:min-w-[600px] md:max-w-[200px]'
                />
            </figure>

            <div className='relative  container flex  justify-between items-center md:gap-3 '>
                {/** hamburger menu mobile */}
                <HamburgerMenu clickOpenSidebar={handleOpenSidebar} />
                {/** end hamburger menu mobile */}

                <LogoWeb />

                <ListContent classNavbar={!openSidebar && 'hidden md:p-2 xl:ms-5 2xl:-ms-0'}>
                    {dataSection.map(item => <ListItem key={item.id} item={item.nama} />)}
                </ListContent>

                {/** search menu mobile*/}
                <button onClick={handleOpenSidebar} className='md:hidden pe-3'>
                    <BsSearch size={30} style={{ stroke: 'black', strokeWidth: "0.2" }} />
                </button>
                {/** end search menu mobile */}

                <div className='hidden md:flex lg:gap-2 lg:justify-center lg:items-center'>

                    <InputSearch id="search" />

                    <div className='md:hidden lg:block'>
                        <ButtonPrimary name="Login"/>
                    </div>
                </div>

            </div>

            {/**sidebar on mobile */}
            <div
                className={`${openSidebar ? 'fixed z-10 top-0 h-full w-full bg-white  transition-all ease-in-out duration-150' : 'hidden'} md:hidden`}
            >
                <div className="flex flex-col gap-y-5">
                    <div className="flex justify-between items-center pt-5 px-4">
                        <LogoWeb />
                        <button onClick={handleCloseSidebar}>
                            <IoIosCloseCircleOutline size={35} />
                        </button>
                    </div>
                    <div className="container sm:p-0">
                        <InputSearch id="search-mobile" />
                    </div>

                    <ListContent>{dataSection.map(item => <ListItem key={item.id} item={item.nama} />)}</ListContent>

                </div>
            </div>

        </nav>
    )
}
export default Navbar
