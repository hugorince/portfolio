import './App.css';
import Quiz from './components/Quiz';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  
    return (
      <>
      <ParallaxProvider >
      <Quiz 
      state={showPortfolio} 
      onShow={() => setShowPortfolio(true)} 
      />
      <Portfolio 
      state={showPortfolio} 
      quizAgain={() => setShowPortfolio(false)}
      />
      </ParallaxProvider>
      </>
    );
}

export default App;