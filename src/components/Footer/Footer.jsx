import Menu from "../NavBar/Menu"
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { DiGithubFull } from "react-icons/di";
import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <div className="dark:bg-blue-900 bg-blue-100">
                <div className="grid lg:grid-cols-3 container mx-auto">
                    <h4 className="text-lg md:text-xl mt-10 text-center md:text-right">این وبسایت شخصی من است  محمد تفقدی صفرپور برنامه نویس فول استک</h4>
                    <div className="flex flex-col items-center mt-10">
                        <h4 className="text-4xl dark:text-green-400 text-purple-600">منو</h4>
                        <ul className="flex flex-col items-center mt-5 gap-5">
                            <Menu />
                        </ul>
                    </div>
                    <div className="flex flex-col mt-10 items-center">
                        <h4 className="text-xl md:text-4xl dark:text-green-400 text-purple-600">شبکه های اجتماعی</h4>
                        <ul className="flex gap-10 mt-10 md:text-4xl text-2xl">
                            <Link to={'https://github.com/root404-ir'}>
                                <li><IoLogoGithub /></li>
                            </Link>
                            <Link to={'https://t.me/root404'}>
                                <li><FaTelegram /></li>
                            </Link>
                            <Link to={'https://t.me/mtjsBot'}>
                                <li><FaRobot /></li>
                            </Link>

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