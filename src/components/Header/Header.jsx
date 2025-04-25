import text from '../../data/text.json'
import headerImage from '../../assets/images/logo/mts-removebg-preview (1).png'
import reverseHeaderImage from '../../assets/images/logo/mts-removebg-preview (1)-modified.png'
import '../../styles/header.css'
import { useDark } from '../../hooks/useDarkMode'
import Icons from './Icons'
const Header = () => {
    const { darkMode } = useDark()
    return (
        <>
            <div className={` w-full flex flex-col justify-evenly h-screen ${darkMode ? 'bg-header-dark' : 'bg-header'}`}>
                <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:justify-between container mx-auto'>
                    <div className='lg:max-w-[60%] flex flex-col'>
                        <p className='text-4xl'>{text.headertext}</p>
                    </div>
                    <div className='lg:max-w-[40%]'>
                        <img src={darkMode ? reverseHeaderImage : headerImage} alt="" />
                    </div>
                </div>
                <div className=' w-full px-4'>
                    <Icons />
                </div>
            </div>
        </>
    )
}

export default Header