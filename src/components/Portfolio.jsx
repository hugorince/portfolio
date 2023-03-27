import Projects from "./Projects";
import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const Portfolio = ({state, quizAgain}) => {

    const [modalUp, setModalUp] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    return (
        <>
        
        <div className="w-screen  bg-zinc-100">
            <div style={{display: state ? 'block' : 'none'}}>
                <div className="bg-zinc-100 ">
                    <div style={{display: modalUp ? 'none' : 'block'}}>
                        <Navbar 
                            quizAgain={quizAgain}
                            isMobile={isMobile}
                        />
                    </div>
                    <Parallax speed={10} disabled={isMobile} >
                        <div className="flex flex-col justify-center items-center lg:space-y-48">
                            <div className="w-10/12" id="home">
                            <Home  />
                            </div>
                            <div className="w-10/12">
                            <Projects 
                            modalOpen={()=>setModalUp(true)} 
                            modalClosed={()=>setModalUp(false)}
                            isMobile={isMobile}
                            />
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