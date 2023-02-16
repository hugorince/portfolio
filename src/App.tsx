import './App.css';
import Quiz from './components/Quiz';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import React from 'react';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  
    return (
      <>
      <Quiz 
      state={showPortfolio} 
      onShow={() => setShowPortfolio(true)} 
      />
      <Portfolio 
      state={showPortfolio} 
      quizAgain={() => setShowPortfolio(false)}
      />
      </>
    );
}

export default App;