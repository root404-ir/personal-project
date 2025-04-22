import { Route, Routes } from "react-router"
import Contact from "../pages/Contact"
import HomeLayout from "../layouts/HomeLayout"
import MainLayout from "../layouts/MainLayout"
import Blog from "../pages/Blog"
import Posts from "../pages/Posts"
import NotFound from "../pages/NotFound"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/post/:slug" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainRoutes