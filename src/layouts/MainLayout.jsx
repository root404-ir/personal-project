/* eslint-disable react/prop-types */
import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/Navbar"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout