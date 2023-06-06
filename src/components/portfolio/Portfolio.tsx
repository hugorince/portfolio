import Projects from "./Projects";
import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

type PortfolioProps = {
  showPortfolio: boolean;
  quizAgain: () => void;
  isMobile: boolean;
};

const Portfolio = ({ showPortfolio, quizAgain, isMobile }: PortfolioProps) => {
  const [modalUp, setModalUp] = useState(false);

  return (
    <>
      <div className="w-screen bg-zinc-100">
        <div style={{ display: showPortfolio ? "block" : "none" }}>
          <div className="bg-zinc-100 ">
            <div style={{ display: modalUp ? "none" : "block" }}>
              <Navbar quizAgain={quizAgain} isMobile={isMobile} />
            </div>
            <Parallax speed={10} disabled={isMobile}>
              <div className="flex flex-col justify-center items-center space-y-16 sm:space-y-48">
                <div className="w-10/12" id="home">
                  <Home />
                </div>
                <div className="w-10/12">
                  <Projects
                    modalOpen={() => setModalUp(true)}
                    modalClosed={() => setModalUp(false)}
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
};

export default Portfolio;
