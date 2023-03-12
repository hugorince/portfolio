import { motion } from "framer-motion"

export default function QuizButtons ({content, buttonAction, speedAnim}) {
    return (
        <>
        <motion.button className="bg-transparent hover:bg-zinc-400 text-zinc-800 font-semibold hover:text-zinc-100 py-2 px-4 border border-zinc-800 rounded " 
            value={content} 
            onClick={buttonAction} 
            animate={{ opacity: [0, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: speedAnim }}
            >{content}
        </motion.button>
        </>
    )
}