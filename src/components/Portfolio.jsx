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
                <div className="flex flex-col sm:space-y-20">
                <div style={{display: modalUp ? 'none' : 'block'}}>
                <Navbar 
                    backQuiz={quizAgain}
                />
                </div>
                <Parallax speed={10}>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10/12">
                    <Home  />
                    </div>
                    <div className="w-10/12">
                    <Projects 
                    modalOpen={()=>setModalUp(true)} 
                    modalClosed={()=>setModalUp(false)}
                    />
                    </div>
                    <div className="w-10/12">
                    <Contact />
                    </div>
                </div>
                </Parallax>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Portfolio;