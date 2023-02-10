import './App.css';
import Quiz from './components/Quiz.jsx';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  
    return (
      <>
      <Navbar backQuiz={() => setShowPortfolio(false)}/>
      <Quiz state={showPortfolio} onShow={() => setShowPortfolio(true)} />
      <Portfolio state={showPortfolio} />
      </>
    );
}

export default App;