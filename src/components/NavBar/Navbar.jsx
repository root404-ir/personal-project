import logo from '../../assets/images/logo/mts-removebg-preview (1).png'
import reverseLogo from '../../assets/images/logo/mts-removebg-preview (1)-modified.png'
import { CiSun } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
import '../../styles/navbar.css'
import { useDark } from '../../hooks/useDarkMode';
const Navbar = () => {
    const { darkMode, handleDarkMode } = useDark()
    return (
        <>
            <div>
                <div className='flex items-center justify-between shadow-lg shadow-purple-300 rounded-2xl px-2 mt-5'>
                    <img src={darkMode ? reverseLogo : logo} alt="" width={200} />
                    <ul className='flex gap-10'>
                        <li className='nav-item'>صفحه اصلی</li>
                        <li className='nav-item'>وبلاگ</li>
                        <li className='nav-item'>رزومه</li>
                        <li className='nav-item'>تماس</li>
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