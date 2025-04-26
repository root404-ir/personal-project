import { MdContactPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { PiGithubLogoBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const ContactIcons = () => {
    const [contactMenuOpen, setContactMenuOpen] = useState(false)
    const handleClick = () => {
        setContactMenuOpen(!contactMenuOpen)
    }
    return (
        <>
            <div className="absolute left-0">
                <div className={`bg-white ${contactMenuOpen && 'translate-x-20'} absolute left-1 top-1  flex justify-center items-center text-black rounded-full p-2`}>
                    <FaTelegramPlane className="text-2xl" />
                </div>
                <div className={`bg-white ${contactMenuOpen && 'translate-x-32'} absolute left-1 top-1 flex justify-center items-center text-black rounded-full p-2`}>
                    <IoMdCall className="text-2xl" />
                </div>
                <div className={`bg-white ${contactMenuOpen && 'translate-x-44'} absolute left-1 top-1 flex justify-center items-center text-black rounded-full p-2`}>
                    <PiGithubLogoBold className="text-2xl" />
                </div>
                <div onClick={handleClick} className="bg-white cursor-pointer absolute left-0 flex justify-center items-center text-black rounded-full p-2">
                    {contactMenuOpen ? <AiOutlineClose className="text-3xl" /> : <MdContactPhone className="text-3xl" />}
                </div>
            </div >
        </>
    )
}

export default ContactIcons