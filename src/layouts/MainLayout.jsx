/* eslint-disable react/prop-types */
import Blog from "../components/Blog/Blog"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/NavBar/Navbar"

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}

export default MainLayout