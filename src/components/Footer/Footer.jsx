import Menu from "../NavBar/Menu"
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
    return (
        <>
            <div className="dark:bg-blue-900 bg-blue-100">
                <div className="grid grid-cols-3 mt-10">
                    <h4 className="text-2xl mt-10">این وبسایت شخصی من است  محمد تفقدی صفرپور برنامه نویس فول استک</h4>
                    <div className="flex flex-col items-center mt-10">
                        <h4 className="text-4xl dark:text-green-400 text-purple-600">منو</h4>
                        <ul className="flex flex-col items-center mt-5 gap-5">
                            <Menu />
                        </ul>
                    </div>
                    <div className="flex flex-col mt-10 items-center">
                        <h4 className="text-4xl dark:text-green-400 text-purple-600">شبکه های اجتماعی</h4>
                        <ul className="flex gap-10 mt-10 text-4xl">
                            <li><IoLogoGithub /></li>
                            <li><FaTelegram /></li>
                            <li><FaFacebook /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center border-t mt-10">
                    <h4 className="flex flex-row-reverse items-center gap-2 text-2xl">follow me on <DiGithubFull className="text-8xl dark:text-green-400 text-purple-600" /></h4>
                </div>
            </div>
        </>
    )
}

export default Footer