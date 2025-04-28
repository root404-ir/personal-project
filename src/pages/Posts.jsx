import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import { createClient } from "contentful"
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"
import { JalaliDate } from "../components/Date"
import PostShare from "../components/PostShare"
import PostOptions from "../components/PostOptions"
import { PostOptionContext } from "../contexts/PostOptionContext"
import Skeleton from "react-loading-skeleton"
const Posts = () => {
    const { slug } = useParams()

    const [post, setPost] = useState(null)
    const [assets, setAssets] = useState([])
    const { fontSize } = useContext(PostOptionContext)
    const { fontWeight } = useContext(PostOptionContext)
    const client = createClient({
        space: "fulkbl2s1yqz",
        accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
    })
    useEffect(() => {
        client.getEntries({ content_type: 'post', 'fields.slug': slug, limit: 1 }).then(res => {
            setPost(res.items[0] || null)
            LoadThumbnail(res, client, setAssets)
        })
    }, [client])
    if (!post) return (
        <>
            <div className="p-4 flex flex-col gap-10">
                <div className="flex justify-between">
                    <Skeleton width={200} baseColor="green" />
                    <Skeleton width={200} baseColor="green" />
                </div>
                <div className="flex justify-center">
                    <Skeleton className="" width={100} height={100} baseColor="green" />
                </div>
                <Skeleton baseColor="green" className="my-4" count={10} />
            </div>
        </>
    )
    const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets)
    return (
        <>
            <div key={post.sys.id} className="container mx-auto mt-10">
                <div className="flex justify-between items-center">
                    <h4 className="text-4xl font-bold mb-2">{post.fields.title}</h4>
                    <div className="flex flex-col items-center">
                        <p className="text-md mb-4">نویسنده: {post.fields.author}</p>
                        <span className="text-md text-gray-400">{JalaliDate(post.fields.date)}</span>
                    </div>
                </div>
                {thumbnailUrl && (
                    <img src={thumbnailUrl} alt={post.title} className="rounded-xl mb-4 w-32 mx-auto " />
                )}
                <p className="text-gray-800 leading-14 mt-10 dark:text-white " style={{ fontSize: `${fontSize}`, fontWeight: `${fontWeight}` }}>{post.fields.content}</p>
                <PostShare url={window.location.href} title={post.fields.title} />
                <PostOptions />
            </div >
        </>
    )
}

export default Posts