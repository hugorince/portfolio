const Navbar = ({backQuiz}) => {
    
    return (
    <>
    <div className="sticky top-0 z-50">
        <nav>
            <ul className="bg-gray-100 h-16 flex space-x-8 w-screen justify-center items-center">
                <li className="lg:text-2xl font-bold hover:text-cyan-900"><a href="#home" >HOME</a></li>
                <li className="lg:text-2xl font-bold hover:text-cyan-900"><a href="#projects" >PROJECTS</a></li>
                <li className="lg:text-2xl font-bold hover:text-cyan-900"><a href="#contact" >CONTACT</a></li>
                <button className="lg:text-2xl font-bold hover:text-cyan-900" onClick={backQuiz}>QUIZ</button>
            </ul>
        </nav>
    </div>   
    </>
);
};

export default Navbar;