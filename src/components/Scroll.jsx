import { motion, useScroll } from 'framer-motion'
const Scroll = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div className={`dark:bg-green-400 bg-purple-400 fixed bottom-0 left-0 right-0 h-2.5 z-50 scale-x-${scrollYProgress}`} />
    )
}

export default Scroll