import { Fragment, useState } from "react";
import React from "react";
import QuizResult from "./QuizResult";
import ProjectModal from "./ProjectModal";
import { Dialog, Transition } from '@headlessui/react'

const question1 = ['geography', 'videogame'];
const question2 = ['map', 'quiz'];
const question3 = ['quiz', 'retro'];

const Quiz = ({state, onShow}) => {
    const [option1, setOption1] = useState(question1[0])
    const [option2, setOption2] = useState(question1[1])
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
    }

    const nextQuestion = (event) => {
        if (event.target.value === 'geography'){
            setOption1(question2[0])
            setOption2(question2[1])
        }
        else if (event.target.value === 'videogame'){
            setOption1(question3[0])
            setOption2(question3[1])
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
    }

    return (
        <>
        <div style={{display: state ? 'none' : 'block'}}>
            <div className="h-screen flex space-y-4 flex-col justify-center items-center">
                <div style={{display: showQuiz ? 'block' : 'none'}}>
                    <div className="flex flex-col space-y-4 justify-center items-center" >
                        <h1 className="text-3xl font-bold">Hey, let's play !</h1>
                        <h2 className="text-2xl font-bold italic">Do you prefer</h2>
                        <div className="flex space-x-4 justify-center items-center">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" value={option1} onClick={nextQuestion}>{option1}</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" value={option2} onClick={nextQuestion}>{option2}</button>
                        </div>
                    </div>
                </div>
                <div style={{display: buttonPort ? 'block' : 'none'}}>
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
                <Transition appear show={showResult} as={Fragment}>
            <Dialog as="div" className="relative z-10" 
                onClose={resetQuiz}
                >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-64 text-left align-middle shadow-xl transition-all">
                            <ProjectModal 
                        projectView={quizProj}
                        modalQuizClicked={resetQuiz}
                        quizEnd={showResult}
                        />
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
            </div>
        </div>
        </>
    );
}

export default Quiz;