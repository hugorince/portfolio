import "./App.css";
import Quiz from "./components/Quiz";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <ParallaxProvider>
        <Quiz
          state={showPortfolio}
          onShow={() => setShowPortfolio(true)}
          isMobile={isMobile}
        />
        <Portfolio
          state={showPortfolio}
          quizAgain={() => setShowPortfolio(false)}
          isMobile={isMobile}
        />
      </ParallaxProvider>
    </>
  );
}

export default App;
