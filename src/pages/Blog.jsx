
import { useEffect, useState } from "react"
import { createClient } from "contentful"
import { Link } from "react-router"
import { IoIosArrowBack } from "react-icons/io"
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [assets, setAssets] = useState([])
    const client = createClient({
        space: "fulkbl2s1yqz",
        accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
    })
    useEffect(() => {
        client.getEntries({ content_type: 'post' }).then(res => {
            setPosts(res.items)        
            LoadThumbnail(res, client, setAssets)
        })
    }, [client])

    return (
        <>
            <div className="mt-5 container mx-auto ">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-1 dark:bg-green-600 bg-purple-700"></div>
                    <h4 className="text-4xl flex items-center">وبلاگ</h4>
                </div>
                <div className="grid grid-cols-3 mt-5 gap-10">
                    {posts.map(post => {
                        const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets)
                        return (
                            <div key={post.sys.id} className="border flex flex-col justify-between h-auto dark:border-gray-600 border-gray-300 rounded-lg">
                                {thumbnailUrl && (
                                    <div className="bg-white rounded-t-lg">
                                        <img
                                            src={thumbnailUrl}
                                            alt={post.title}
                                            className="mx-auto w-52"
                                        />
                                    </div>
                                )}
                                <div className="mt-5 flex flex-col gap-4 p-2">
                                    <h4 className="text-3xl">{post.fields.title}</h4>
                                    <p className="text-md dark:text-gray-300 text-gray-700">{post.fields.content.slice(0, 100)}...</p>
                                    <div className="flex justify-between">
                                        <span>توسط : <span className="text-purple-600 dark:text-green-400 font-bold">{post.fields.author}</span></span>
                                        <span>{post.fields.data}</span>
                                    </div>
                                </div>
                                <Link to={`/blog/post/${post.fields.slug}`} className="bg-purple-600 dark:bg-green-400 p-0 w-full text-white font-bold rounded-b-lg mt-5 cursor-pointer flex items-center justify-center gap-2">
                                    ادامه مطلب
                                    <IoIosArrowBack /> </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Blog
