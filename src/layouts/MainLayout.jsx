/* eslint-disable react/prop-types */
import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/Navbar"
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuOpenContext"
const MainLayout = () => {
    const { setIsMenuOpen } = useContext(MenuContext)
    return (
        <div className="fanum" onClick={() => setIsMenuOpen(false)}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout