import { useState } from "react";
import React from "react";
import QuizResult from "./QuizResult";
import Background from "./Background";
import { motion } from "framer-motion";
import QuizButtons from "./QuizButtons";
import ModalQuiz from "./ModalQuiz";


const question1 = ['geography', 'videogame', 'counting'];
const question2 = ['map', 'quiz'];
const question3 = ['quiz', 'retro'];
const question4 = ['animals', 'time'];

const Quiz = ({state, onShow}) => {
    const [option1, setOption1] = useState(question1[0])
    const [option2, setOption2] = useState(question1[1])
    const [option3, setOption3] = useState(question1[2])
    const [firstQuest, setFirstQuest] = useState(true)
    const [showQuiz, setShowQuiz] = useState(true)
    const [quizResult, setQuizResult] = useState('')
    const [buttonPort, setButtonPort] = useState(false)
    const [quizProj, setQuizProj] = useState('')
    const [showResult, setShowResult] = useState(false)

    const resetQuiz = () => {
        setOption1(question1[0])
        setOption2(question1[1])
        setShowQuiz(true)
        setQuizResult('')
        setButtonPort(false)
        onShow()
        setQuizProj('')
        setShowResult(false)
        setFirstQuest(true)
    }

    const nextQuestion = (event) => {

        setFirstQuest(false)
        if (event.target.value === 'geography'){
            setOption1(question2[0])
            setOption2(question2[1])
        }
        else if (event.target.value === 'videogame'){
            setOption1(question3[0])
            setOption2(question3[1])
        }
        else if (event.target.value === 'counting'){
            setOption1(question4[0])
            setOption2(question4[1])
        }
        else if (event.target.value === 'quiz'){
            setShowQuiz(false)
            setButtonPort(true)
            setQuizResult('How Many Capitals')
        }
        else if (event.target.value === 'map'){
            setShowQuiz(false)
            setButtonPort(true)
            setQuizResult('Climate Change in South America')
        }
        else if (event.target.value === 'retro'){
            setShowQuiz(false)
            setButtonPort(true)
            setQuizResult('CODEV-22')
        }
        else if (event.target.value === 'time'){
            setShowQuiz(false)
            setButtonPort(true)
            setQuizResult('Time Tracker')
        }
        else if (event.target.value === 'animals'){
            setShowQuiz(false)
            setButtonPort(true)
            setQuizResult('Social Animals')
        }
    }

    return (
        <>
        <div style={{display: state ? 'none' : 'block'}}>
            <div className="h-screen flex flex-col justify-center bg-zinc-100">
                <div style={{display: showQuiz ? 'block' : 'none'}}>
                    <div className="relative h-screen flex space-y-4 flex-col justify-center items-center">
                        <div className="absolute">
                        <Background />
                        </div>
                        <div className="flex flex-col w-64 space-y-4 justify-center items-center absolute" >
                            <h1 className="text-3xl font-bold text-zinc-800">Hey, let's play !</h1>
                            <h2 className="text-2xl font-bold italic text-zinc-800">do you prefer?</h2>
                                <motion.div className="flex flex-col space-y-4 sm:space-x-4 sm:flex-row justify-center items-center"
                                whileTap={{ opacity: [1, 0], scale: [1, 1.1, 1]}}
                                >
                                    <div className="sm:pt-4">
                                    <QuizButtons content={option1} buttonAction={nextQuestion} speedAnim={0.5}/>
                                    </div>
                                    <QuizButtons content={option2} buttonAction={nextQuestion} speedAnim={0.6}/>
                                    <div style={{display: firstQuest ? 'block' : 'none'}}>
                                    <QuizButtons content={option3} buttonAction={nextQuestion} speedAnim={0.7}/>
                                    </div>
                                </motion.div>
                        </div>
                    </div>
                </div>
                <div style={{display: buttonPort ? 'block' : 'none'}}>
                    <div className="flex flex-col justify-center">
                        <QuizResult 
                        quizResult={quizResult} 
                        resetQuiz={resetQuiz} 
                        resultView={
                            (projectName) => {
                                setQuizProj(projectName)
                                setShowResult(true)
                            }}
                        />
                    </div>
                </div>
                <ModalQuiz reset={resetQuiz} projectViewed={quizProj} res={showResult}/>
            </div>
        </div>
        </>
    );
}

export default Quiz;
