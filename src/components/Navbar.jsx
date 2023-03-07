const Navbar = ({backQuiz}) => {
    
    return (
    <>
    <div className="sticky top-0 z-50">
        <nav>
            <ul className="bg-zinc-100 h-16 flex space-x-8 w-screen justify-center items-center">
                <li className="lg:text-2xl text-zinc-800 font-bold hover:text-zinc-400"><a href="#home" >HOME</a></li>
                <li className="lg:text-2xl text-zinc-800 font-bold hover:text-zinc-400"><a href="#projects" >PROJECTS</a></li>
                <li className="lg:text-2xl text-zinc-800 font-bold hover:text-zinc-400"><a href="#contact" >CONTACT</a></li>
                <button className="lg:text-2xl text-zinc-800 font-bold hover:text-zinc-400" onClick={backQuiz}>QUIZ</button>
            </ul>
        </nav>
    </div>   
    </>
);
};

export default Navbar;