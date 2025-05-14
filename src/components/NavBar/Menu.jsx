import { Link } from "react-router"

const Menu = () => {
    return (
        <>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link to={'/'}>صفحه اصلی</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link to={'blog'}>وبلاگ</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link to={'https://t.me/mtjsBot'} target="_blank">ربات تلگرام</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link to={'contact'}>تماس</Link></li>
        </>
    )
}

export default Menu