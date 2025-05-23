import { MdContactPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { PiGithubLogoBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router";

const ContactIcons = () => {
    const [contactMenuOpen, setContactMenuOpen] = useState(false)

    useEffect(() => {
        let tl = gsap.timeline()
        if (contactMenuOpen) {
            tl.to('.telegram', { y: 50 })
            tl.to('.call', { y: 100 })
            tl.to('.github', { y: 150 })
        } else {
            tl.to('.telegram', { y: 0 })
            tl.to('.call', { y: 0 })
            tl.to('.github', { y: 0 })
        }
    }, [contactMenuOpen])
    return (
        <>
            <div className="absolute left-[50] md:left-1 bottom-0 flex gap-10 my-5 md:top-10 z-10">
                <Link to={'https://t.me/root404'}>
                    <div title="پیام در تلگرام" className={`bg-white border border-gray-400 telegram md:absolute md:left-1 md:top-1  flex justify-center items-center text-black rounded-full p-2`}>
                        <FaTelegramPlane className="text-2xl" />
                    </div>
                </Link>
                <Link to={'tel:+989306136838'}>
                    <div title="تماس تلفنی" className={`bg-white border border-gray-400 call  md:absolute md:left-1 md:top-1 flex justify-center items-center text-black rounded-full p-2`}>
                        <IoMdCall className="text-2xl" />
                    </div>
                </Link>
                <Link to={'https://github.com/root404-ir'}>
                    <div title="گیت هاب" className={`bg-white border border-gray-400 github  md:absolute md:left-1 md:top-1 flex justify-center items-center text-black rounded-full p-2`}>
                        <PiGithubLogoBold className="text-2xl" />
                    </div>
                </Link>
                <div onClick={() => setContactMenuOpen(!contactMenuOpen)} className="bg-white hidden md:block border border-gray-400 cursor-pointer absolute left-0 md:flex justify-center items-center text-black rounded-full p-2">
                    {contactMenuOpen ? <AiOutlineClose className="text-3xl" /> : <MdContactPhone className="text-3xl" />}
                </div>
            </div >
        </>
    )
}

export default ContactIcons


// ${contactMenuOpen && 'translate-x-20'}
// ${contactMenuOpen && 'translate-x-32'}
// ${contactMenuOpen && 'translate-x-44'}