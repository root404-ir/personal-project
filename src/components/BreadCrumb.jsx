import { Link, useLocation } from "react-router"

const foramtSlug = (slug) => {
    return slug
        .replace(/-/g, '')
        .replace(/\b\w/g, (char) => char.toUpperCase())
}
const BreadCrumb = () => {
    const location = useLocation()
    const pathName = location.pathname.split('/').filter(Boolean)

    if (pathName.length === 0) return null


    return (
        <nav className="text-sm my-4">
            <ul className="flex flex-wrap items-center gap-2 text-gray-600">
                <li>
                    <Link to={'/'}>خانه</Link>
                </li>
                {pathName.map((part, index) => {
                    const to = '/' + pathName.slice(0, index + 1).join('/')
                    const label = foramtSlug(part)
                    const isLast = index === pathName.length - 1
                    return (
                        <li key={to} className="flex items-center gap-1">
                            <span>/</span>
                            {isLast ? (
                                <span className="text-gray-500">{label}</span>
                            ) : (
                                <Link to={to} className="hover:underline">{label}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumb