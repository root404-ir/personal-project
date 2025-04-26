import PreGif from '/assets/image/gif/289.gif'
const PreLoader = () => {
    return (
        <>
            <div className='absolute w-full bg-white top-0 '>
                <div className='flex justify-center items-center h-screen'>
                    <img src={PreGif} alt="" />
                </div>
            </div>
        </>
    )
}

export default PreLoader