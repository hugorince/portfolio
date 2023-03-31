import { Icon } from "@iconify/react";
import { motion } from 'framer-motion'
export default function Menu({quizAgain}) {
    return (
        <>
        <div className="z-10 fixed bg-zinc-100 w-screen py-4 sm:w-36 sm:bg-transparent sm:px-4">
     <nav>
         <ul className="flex space-x-4 justify-center  sm:space-x-0 sm:flex-col sm:space-y-2">
             <li className="text-zinc-800 hover:text-zinc-400 lg:text-xl "><a href="#home" >
                <motion.div 
                className="dev">
                <Icon icon="mdi:arrow-top-thick"/>
                </motion.div>
                </a></li>
             <li><a href="#projects"><button className="lg:text-xl text-zinc-800 hover:text-zinc-400 hover:scale-105">PROJECTS</button></a></li>
             <li><button className="lg:text-xl text-zinc-800 hover:text-zinc-400 hover:scale-105" onClick={quizAgain}>QUIZ</button></li>
             <div className="flex space-x-2  ">
                 <a className=" opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer" href="https://github.com/hugorince" target="_blank">
                 <Icon icon="radix-icons:github-logo" />
                 </a>
                 <a className=" opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer" href="https://www.linkedin.com/in/hugorince/" target="_blank" >
                 <Icon icon="radix-icons:linkedin-logo" />
                 </a>
                 <a className=" opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer" href="https://www.codewars.com/users/hugorince" target="_blank">
                 <Icon icon="simple-icons:codewars" />
                 </a>
             </div>
         </ul>
     </nav>
 </div>
        </>
    )

}