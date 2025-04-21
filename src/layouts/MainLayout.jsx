/* eslint-disable react/prop-types */
import Blog from "../components/Blog/Blog"
import Header from "../components/Header/Header"
import Navbar from "../components/NavBar/Navbar"

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Header />
            <Blog />
        </div>
    )
}

export default MainLayout