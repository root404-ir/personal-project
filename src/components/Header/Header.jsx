import text from '../../data/text.json'
// import headerImage from '../../assets/images/logo/mts-removebg-preview (1).png'
import reverseHeaderImage from '../../assets/images/logo/mts-removebg-preview (1)-modified.png'
import '../../styles/header.css'
import Icons from './Icons'
import gsap from 'gsap'
import { useEffect } from 'react'
import TextPlugin from 'gsap/TextPlugin'
const Header = () => {
    gsap.registerPlugin(TextPlugin)
    useEffect(() => {
        gsap.to('#header-text', {
            duration: 2,
            text: text.headertext,
            ease: "none"
        })
    }, [])

    return (
        <>
            <div className='w-full flex flex-col justify-evenly h-screen bg-header-dark'>
                <div className='flex flex-col gap-10 items-center lg:gap-0 lg:flex-row lg:justify-between container mx-auto'>
                    <div className='lg:max-w-[60%] flex flex-col'>
                        <p id='header-text' className='text-4xl text-center leading-20 md:text-right'></p>
                    </div>
                    <div className='lg:max-w-[40%]'>
                        <img src={reverseHeaderImage} alt="logo" className='w-48 md:w-full' />
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