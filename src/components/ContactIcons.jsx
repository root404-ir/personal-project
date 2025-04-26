import { MdContactPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { PiGithubLogoBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";

const ContactIcons = () => {
    const [contactMenuOpen, setContactMenuOpen] = useState(false)

    useEffect(() => {
        let tl = gsap.timeline()
        if (contactMenuOpen) {
            tl.to('.telegram', { x: 100 })
            tl.to('.call', { x: 200 })
            tl.to('.github', { x: 300 })
        } else {
            tl.to('.telegram', { x: 0 })
            tl.to('.call', { x: 0 })
            tl.to('.github', { x: 0 })
        }
    }, [contactMenuOpen])
    return (
        <>
            <div className="absolute left-0">
                <div className={`bg-white telegram absolute left-1 top-1  flex justify-center items-center text-black rounded-full p-2`}>
                    <FaTelegramPlane className="text-2xl" />
                </div>
                <div className={`bg-white call  absolute left-1 top-1 flex justify-center items-center text-black rounded-full p-2`}>
                    <IoMdCall className="text-2xl" />
                </div>
                <div className={`bg-white github  absolute left-1 top-1 flex justify-center items-center text-black rounded-full p-2`}>
                    <PiGithubLogoBold className="text-2xl" />
                </div>
                <div onClick={() => setContactMenuOpen(!contactMenuOpen)} className="bg-white cursor-pointer absolute left-0 flex justify-center items-center text-black rounded-full p-2">
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