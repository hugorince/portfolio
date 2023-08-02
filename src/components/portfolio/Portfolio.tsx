import Projects from "./Projects";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import { Parallax } from "react-scroll-parallax";

type PortfolioProps = {
  showPortfolio: boolean;
  quizAgain: () => void;
  isMobile: boolean;
};

const Portfolio = ({ showPortfolio, quizAgain, isMobile }: PortfolioProps) => {
  return (
    <>
      <div className="bg-zinc-100">
        <div style={{ display: showPortfolio ? "block" : "none" }}>
          <div className="bg-zinc-100 ">
            <Navbar quizAgain={quizAgain} isMobile={isMobile} />
            <Parallax speed={10} disabled={isMobile}>
              <div className="flex flex-col justify-center items-center space-y-16 sm:space-y-48">
                <div className="w-10/12" id="home">
                  <Home />
                </div>
                <div className="w-10/12">
                  <Projects isMobile={isMobile} />
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
