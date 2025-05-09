/* eslint-disable react/prop-types */
import { Link } from "react-router"
import { JalaliDate } from "./Date"
import { IoIosArrowBack } from "react-icons/io"

const BlogContent = ({ post, thumbnailUrl }) => {
    return (
        <>
            <div key={post.sys.id} className="border flex flex-col justify-between h-auto border-gray-600 rounded-lg">
                {thumbnailUrl && (
                    <div className="bg-white rounded-t-lg">
                        <img
                            src={thumbnailUrl}
                            alt={post.title}
                            className="mx-auto h-60 object-contain w-full"
                        />
                    </div>
                )}
                <div className="mt-5 flex h-full justify-between flex-col gap-4 p-2">
                    <Link to={`/blog/post/${post.fields.slug}`}>
                        <h4 className="text-3xl hover:text-blue-400">{post.fields.title}</h4>
                    </Link>
                    <p className="text-md text-gray-300 ">{post.fields.content.slice(0, 100)}...</p>
                    <div className="flex justify-between">
                        <span>توسط : <span className="text-green-400 font-bold">{post.fields.author}</span></span>
                        <span>{JalaliDate(post.fields.data)}</span>
                    </div>
                </div>
                <Link to={`/blog/post/${post.fields.slug}`} className="bg-green-400 p-0 w-full text-white font-bold rounded-b-lg mt-5 cursor-pointer flex items-center justify-center gap-2">
                    ادامه مطلب
                    <IoIosArrowBack /> </Link>
            </div>
        </>
    )
}

export default BlogContent