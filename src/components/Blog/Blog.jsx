import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { IoIosArrowBack } from "react-icons/io";
const Blog = () => {
    const [postsData, setPostsData] = useState([])
    useEffect(() => {
        axios.get('/blog.json').then(res => {
            setPostsData(res.data)
            console.log(postsData);
        })
    }, [postsData])
    return (
        <>
            <div className="mt-5 container mx-auto ">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-1 dark:bg-green-600 bg-purple-700"></div>
                    <h4 className="text-4xl flex items-center">وبلاگ</h4>
                </div>
                <div className="grid grid-cols-3 mt-5 gap-10">
                    {postsData.map(post => (
                        <>
                            <div className="border dark:border-gray-600 border-gray-300 rounded-lg">
                                <img src={post.postCover} alt={post.postTitle} className="w-full bg-white rounded-lg h-60 object-contain border-b border-b-gray-500 py-4" />
                                <div className="mt-5 flex flex-col gap-4 p-2">
                                    <h4 className="text-4xl">{post.postTitle}</h4>
                                    <p className="text-md">{post.postText}</p>
                                    <span>توسط : <span className="text-purple-600 dark:text-green-400 font-bold">{post.author}</span></span>
                                </div>
                                <button className="bg-purple-600 dark:bg-green-400 p-0 w-full text-white font-bold rounded-b-lg mt-5 cursor-pointer flex items-center justify-center gap-2">
                                    ادامه مطلب
                                    <IoIosArrowBack /> </button>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog