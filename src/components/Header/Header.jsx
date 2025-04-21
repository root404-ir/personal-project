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
            <div className={` w-full h-screen ${darkMode ? 'bg-header-dark' : 'bg-header'}`}>
                <div className='flex items-center justify-between h-full container mx-auto'>
                    <div className='max-w-[60%] flex flex-col'>
                        <p className='text-4xl'>{text.headertext}</p>
                    </div>
                    <div className='max-w-[40%]'>
                        <img src={darkMode ? reverseHeaderImage : headerImage} alt="" />
                    </div>
                    <div className='absolute bottom-10 left-0 w-full px-4'>
                        <Icons />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header