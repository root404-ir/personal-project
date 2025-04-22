import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { createClient } from "contentful"
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"
const Posts = () => {
    const { slug } = useParams()

    const [post, setPost] = useState(null)
    const [assets, setAssets] = useState([])
    const client = createClient({
        space: "fulkbl2s1yqz",
        accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
    })
    useEffect(() => {
        client.getEntries({ content_type: 'post', 'fields.slug': slug, limit: 1 }).then(res => {
            setPost(res.items[0] || null)
            LoadThumbnail(res, client, setAssets)
        })
    }, [slug])
    if (!post) return <p>در حال بارگزاری ...</p>
    const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets)
    return (
        <>
            <div key={post.sys.id} className="container mx-auto mt-10">
                <div className="flex justify-between items-center">
                    <h4 className="text-4xl font-bold mb-2">{post.fields.title}</h4>
                    <p className="text-md mb-4">نویسنده: {post.fields.author}</p>
                </div>
                {thumbnailUrl && (
                    <img src={thumbnailUrl} alt={post.title} className="rounded-xl mb-4 w-32 mx-auto " />
                )}
                <p className="text-lg text-gray-800 leading-7 mt-10 dark:text-white">{post.fields.content}</p>
            </div>
        </>
    )
}

export default Posts