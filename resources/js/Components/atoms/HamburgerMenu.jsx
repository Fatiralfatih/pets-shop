import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = ({ clickOpenSidebar }) => {
    return (
        <button onClick={clickOpenSidebar} className='md:hidden'>
            <RxHamburgerMenu size={30} className='w-full' />
        </button>
    )
}

export default HamburgerMenu
