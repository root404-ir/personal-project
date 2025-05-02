import BotImage from '../assets/images/my_service/gettyimages-1197242566-612x612-removebg-preview (1).png'
import WebImage from '../assets/images/my_service/wp2465923-javascript-wallpapers-removebg-preview (1).png'
import LinuxImage from '../assets/images/my_service/Dope-Linux-Wallpaper-removebg-preview (1).png'
const Order = () => {
    return (
        <>
            <div className="grid lg:grid-cols-3 text-white md:grid-cols-2 container mx-auto gap-10 md:gap-5 my-10">
                <div className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(135deg, #0088cc, #32c5ff)' }}>
                    <p className='font-bold text-xl w-full'>توسعه ربات های تلگرامی</p>
                    <img src={BotImage} alt="ربات تلگرامی" className='w-67 -translate-y-4 h-43 object-contain' />
                </div>
                <div className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(331deg,rgba(0, 208, 245, 1) 0%, rgba(3, 3, 3, 1) 100%)' }}>
                    <p className='font-bold text-xl w-full'>طراحی و توسعه وبسایت</p>
                    <img src={WebImage} alt="ربات تلگرامی" className='w-50 -translate-y-4 h-43 object-contain' />
                </div>
                <div className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(133deg,rgba(255, 255, 255, 1) 0%, rgba(64, 64, 64, 1) 0%, rgba(255, 229, 0, 1) 100%)' }}>
                    <p className='font-bold text-xl'>مدیریت سرور های لینوکسی</p>
                    <img src={LinuxImage} alt="ربات تلگرامی" className='w-67 -translate-y-4 h-43 object-contain' />
                </div>
            </div>
        </>
    )
}

export default Order