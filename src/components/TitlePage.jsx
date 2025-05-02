import { Helmet } from "react-helmet"
import { matchPath, useLocation } from "react-router"

const TitlePage = () => {
    const location = useLocation()
    const pathname = location.pathname

    let mainTitle = 'وبسایت محمد تفقدی'

    if (pathname === '/') {
        mainTitle = 'خانه'
    } else if (pathname === '/blog') {
        mainTitle = 'وبلاگ'
    } else if (pathname === '/contact') {
        mainTitle = 'تماس با من'
    } else if (matchPath({ path: '/blog/post/:slug', end: false }, pathname)) {
        mainTitle = 'پست ها'
    }
    return (
        <>
            <Helmet>
                <title>وبسایت محمد تفقدی - {mainTitle}</title>
            </Helmet>
        </>
    )
}

export default TitlePage