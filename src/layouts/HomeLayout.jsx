import Blog from "../pages/Blog"
import Header from "../components/Header/Header"
import Order from "../components/Services"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Order />
            <Blog />
        </>
    )
}

export default HomeLayout