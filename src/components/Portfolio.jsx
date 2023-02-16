import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";

const Portfolio = ({state, quizAgain}) => {
    return (
        <>
        <div style={{display: state ? 'block' : 'none'}}>
            <Navbar 
                backQuiz={quizAgain}
            />
            <Home  />
            <Projects />
            <Contact />
        </div>
        </>
    );
}

export default Portfolio;