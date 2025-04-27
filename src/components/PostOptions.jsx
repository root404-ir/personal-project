import { useContext, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { PostOptionContext } from "../contexts/PostOptionContext";
const PostOptions = () => {

    const { setFontSize, setFontWeight } = useContext(PostOptionContext)
    const [settingOpen, setSettingOpen] = useState(false)

    return (
        <div>
            <div onClick={() => setSettingOpen(!settingOpen)} className="cursor-pointer text-white bg-black fixed top-50 p-2 rounded-full">
                <IoSettingsSharp size={32} />
            </div>
            {settingOpen ? (
                <div className="bg-white fixed flex flex-col justify-between top-60 right-20 text-black w-auto h-32 p-4 rounded-lg">
                    <p>شخصی سازی متن مقاله</p>
                    <div className="mt-5">
                        <select onChange={(e) => setFontSize(e.target.value)} className="border border-gray-500 w-full rounded-lg">
                            <option value="">سایز فونت</option>
                            <option value={'1.2rem'} >سایز 24</option>
                            <option value={'1.8rem'} >سایز 44</option>
                            <option value={'2rem'} >سایز 56</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => setFontWeight(e.target.value)} className="border border-gray-500 w-full rounded-lg">
                            <option value="">میزان ضخامت متن</option>
                            <option value={'300'}>باریک</option>
                            <option value={'900'}>پررنگ</option>
                        </select>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default PostOptions