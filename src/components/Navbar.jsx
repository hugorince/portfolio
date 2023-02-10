const Navbar = ({backQuiz}) => {
    
    return (
    <>
    <nav className="bg-gray-100 dark:bg-gray-700">
        <ul className="flex space-x-8 w-screen justify-center items-center">
            <button className="text-2xl font-bold">HOME</button>
            <button className="text-2xl font-bold">PROJECTS</button>
            <button className="text-2xl font-bold">CONTACT</button>
            <button className="text-2xl font-bold" onClick={backQuiz}>QUIZ</button>
        </ul>
    </nav>
    </>
);
};

export default Navbar;