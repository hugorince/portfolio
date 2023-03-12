import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Portfolio = ({state, quizAgain}) => {

    const [modalUp, setModalUp] = useState(false)

    

    return (
        <>
        
        <div className="w-screen bg-zinc-100">
            <div style={{display: state ? 'block' : 'none'}}>
                <div className="flex flex-col sm: space-y-20">
                <div style={{display: modalUp ? 'none' : 'block'}}>
                <Navbar 
                    backQuiz={quizAgain}
                />
                </div>
                <Parallax speed={10}>
                <Home  />
                <Projects 
                modalOpen={()=>setModalUp(true)} 
                modalClosed={()=>setModalUp(false)}
                />
                <Contact />
                </Parallax>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Portfolio;