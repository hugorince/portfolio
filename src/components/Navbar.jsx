import { Icon } from "@iconify/react";

const Navbar = ({backQuiz}) => {
    
    return (
    <>
    <div className="fixed top-0 z-10 pt-8 px-8">
        <nav>
            <ul className="bg-zinc-100 flex flex-col space-y-2">
                <li className="lg:text-xl text-zinc-800 hover:text-zinc-400"><a href="#home" scroll={false} className="hover:scale-110" ><Icon icon="mdi:arrow-top-thick"/></a></li>
                <li className="lg:text-xl text-zinc-800 hover:text-zinc-400 hover:scale-110"><a href="#projects" className="scroll-smooth" >PROJECTS</a></li>
                <li className="lg:text-xl text-zinc-800 hover:text-zinc-400 hover:scale-110"><a href="#contact" >CONTACT</a></li>
                <li><button className="lg:text-xl text-zinc-800 hover:text-zinc-400 hover:scale-110" onClick={backQuiz}>QUIZ</button></li>
                
            </ul>
        </nav>
    </div>   
    </>
);
};

export default Navbar;