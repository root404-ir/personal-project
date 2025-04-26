import { useEffect, useState } from "react"
import { createClient } from "contentful"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"
import BlogContent from "../components/BlogContent"
import SearchBlog from "../components/Search/SearchBlog"
import 'instantsearch.css/themes/algolia.css'
const Blog = () => {
    const [posts, setPosts] = useState([])
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(true)
    const client = createClient({
        space: "fulkbl2s1yqz",
        accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
    })
    useEffect(() => {
        client.getEntries({ content_type: 'post' }).then(res => {
            setPosts(res.items)
            setLoading(false)
            LoadThumbnail(res, client, setAssets)
        })
    }, [client])


    return (
        <>
            <div className="mt-5 container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-1 dark:bg-green-600 bg-purple-700"></div>
                        <h4 className="text-4xl flex items-center">وبلاگ</h4>
                    </div>
                    <SearchBlog />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-10">
                    {loading ?
                        <>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="border rounded-lg p-4">
                                    <Skeleton height={200} />
                                    <Skeleton width={150} className="mt-4" />
                                    <Skeleton count={2} className="mt-4" />
                                </div>
                            ))}
                        </>
                        : (

                            posts.map(post => {
                                const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets)
                                return (
                                    <>
                                        <BlogContent post={post} thumbnailUrl={thumbnailUrl} />
                                    </>
                                )
                            })
                        )}
                </div>
            </div>
        </>
    )
}
export default Blog
