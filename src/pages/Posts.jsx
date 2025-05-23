import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import { createClient } from "contentful"
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"
import { JalaliDate } from "../components/Date"
import { AiOutlineToTop } from "react-icons/ai";
import { PostOptionContext } from "../contexts/PostOptionContext"
import PostShare from "../components/PostShare"
import PostOptions from "../components/PostOptions"
import Skeleton from "react-loading-skeleton"
import Scroll from "../components/Scroll"

const Posts = () => {
    const { slug } = useParams()

    const [post, setPost] = useState(null)
    const [assets, setAssets] = useState([])
    const { fontSize, fontWeight, lineSpacing } = useContext(PostOptionContext)
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

    useEffect(() => {
        scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const handleGoTop = () => {
        document.querySelector('#content').scrollIntoView({ behavior: 'smooth' })
    }

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
            <div key={post.sys.id} className="container mx-auto px-2 mt-10">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-3xl font-bold mb-2">{post.fields.title}</h4>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-md mb-4">نویسنده: {post.fields.author}</p>
                        <span className="text-md text-gray-400">{JalaliDate(post.fields.date)}</span>
                    </div>
                </div>
                {thumbnailUrl && (
                    <img id="content" src={thumbnailUrl} alt={post.title} className="rounded-xl mb-4 w-full h-100 object-contain mt-5 mx-auto " />
                )}
                <p className="text-gray-800 mt-10 text-white px-10" style={{ fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, lineHeight: `${lineSpacing}` }}>{post.fields.content}</p>
                <PostShare url={window.location.href} title={post.fields.title} />
                <PostOptions />
                <Scroll />
                <div onClick={handleGoTop} className="bg-green-400 cursor-pointer rounded-sm p-1 my-10 flex justify-center">
                    <div className="flex items-center gap-2 text-lg">
                        <span className="select-none">رفتن به بالای پست</span>
                        <AiOutlineToTop size={43} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts