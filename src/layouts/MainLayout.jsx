/* eslint-disable react/prop-types */
import Navbar from "../components/NavBar/Navbar"

const MainLayout = ({ children }) => {
    return (
        <div className="container my-0 mx-auto">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default MainLayout