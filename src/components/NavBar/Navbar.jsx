import logo from '../../assets/images/logo/mts-removebg-preview (1).png'
import { CiSun } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
import '../../styles/navbar.css'
const Navbar = () => {
    return (
        <>
            <div>
                <div className='flex items-center justify-between shadow-lg shadow-purple-300 rounded-2xl px-2 mt-5'>
                    <img src={logo} alt="" width={200} />
                    <ul className='flex gap-10'>
                        <li className='nav-item'>صفحه اصلی</li>
                        <li className='nav-item'>وبلاگ</li>
                        <li className='nav-item'>رزومه</li>
                        <li className='nav-item'>تماس</li>
                    </ul>
                    <div>
                        <CiSun className='hidden' />
                        <RiMoonClearLine className='text-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar