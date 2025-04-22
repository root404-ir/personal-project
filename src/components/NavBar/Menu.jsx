import { Link } from "react-router"

const Menu = () => {
    return (
        <>
            <li className='nav-item'><Link to={'/'}>صفحه اصلی</Link></li>
            <li className='nav-item'><Link to={'blog'}>وبلاگ</Link></li>
            <li className='nav-item'>رزومه</li>
            <li className='nav-item'><Link to={'contact'}>تماس</Link></li>
        </>
    )
}

export default Menu