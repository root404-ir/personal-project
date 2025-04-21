import logo from '../../assets/images/logo/mts-removebg-preview (1).png'
import reverseLogo from '../../assets/images/logo/mts-removebg-preview (1)-modified.png'
import { CiSun } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
import '../../styles/navbar.css'
import { useDark } from '../../hooks/useDarkMode';
import Menu from './Menu';
const Navbar = () => {
    const { darkMode, handleDarkMode } = useDark()
    return (
        <>
            <div className=' absolute bg-white dark:bg-blue-950 border-b  w-full'>
                <div className='flex items-center justify-between h-auto rounded-2xl p-2'>
                    <img src={darkMode ? reverseLogo : logo} alt="" width={200} />
                    <ul className='flex gap-10'>
                        <Menu />
                    </ul>
                    <span onClick={handleDarkMode} className='cursor-pointer'>
                        {darkMode ? <CiSun className='text-3xl' /> :
                            <RiMoonClearLine className='text-3xl' />}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar