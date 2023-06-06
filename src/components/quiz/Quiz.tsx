import { useState } from "react";
import React from "react";
import QuizResult from "./QuizResult";
import Background from "./Background";
import { motion } from "framer-motion";
import QuizButtons from "./QuizButtons";
//import MovingText from "react-moving-text";
import ModalQuiz from "./ModalQuiz";
import { question1, nextQuestion } from "./quizLogic";

type QuizProps = {
  showPortfolio: boolean;
  setShowPortfolio: (e: boolean) => void;
  isMobile: boolean;
};

const Quiz = ({ showPortfolio, setShowPortfolio, isMobile }: QuizProps) => {
  const [option1, setOption1] = useState(question1[0]);
  const [option2, setOption2] = useState(question1[1]);
  const [option3, setOption3] = useState(question1[2]);
  const [firstQuest, setFirstQuest] = useState(true);
  const [showQuiz, setShowQuiz] = useState(true);
  const [quizResult, setQuizResult] = useState("");
  const [buttonPort, setButtonPort] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const resetQuiz = () => {
    setOption1(question1[0]);
    setOption2(question1[1]);
    setOption3(question1[2]);
    setShowQuiz(true);
    setQuizResult("");
    setButtonPort(false);
    setShowPortfolio(true);
    setShowResult(false);
    setFirstQuest(true);
  };

  return (
    <>
      <div style={{ display: showPortfolio ? "none" : "block" }}>
        <div className="h-screen flex flex-col justify-center bg-zinc-100">
          <div style={{ display: showQuiz ? "block" : "none" }}>
            <div className="relative h-screen flex space-y-4 flex-col justify-center items-center">
              <div className="absolute">
                <Background />
              </div>
              <div className="flex flex-col w-64 space-y-4 justify-center items-center absolute">
                <motion.div
                  className="text-3xl font-bold text-zinc-800"
                  animate={{
                    y: [-100, 10, 0],
                    scale: [0, 1.1, 1],
                  }}
                  transition={{ duration: 0.8 }}
                >
                  Hey, let's play !
                </motion.div>
                <motion.div
                  key={"prefer"}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-bold italic text-zinc-800"
                >
                  do you prefer?
                </motion.div>
                <motion.div className="flex flex-col space-y-4 sm:space-x-4 sm:flex-row justify-center items-center">
                  <div className="sm:pt-4">
                    <QuizButtons
                      content={option1}
                      buttonAction={(event: any) =>
                        nextQuestion({
                          event,
                          setOption1,
                          setOption2,
                          setOption3,
                          setFirstQuest,
                          setShowQuiz,
                          setButtonPort,
                          setQuizResult,
                        })
                      }
                      speedAnim={0.6}
                    />
                  </div>
                  <QuizButtons
                    content={option2}
                    buttonAction={(event: any) =>
                      nextQuestion({
                        event,
                        setOption1,
                        setOption2,
                        setOption3,
                        setFirstQuest,
                        setShowQuiz,
                        setButtonPort,
                        setQuizResult,
                      })
                    }
                    speedAnim={0.7}
                  />
                  <div style={{ display: firstQuest ? "block" : "none" }}>
                    <QuizButtons
                      content={option3}
                      buttonAction={(event: any) =>
                        nextQuestion({
                          event,
                          setOption1,
                          setOption2,
                          setOption3,
                          setFirstQuest,
                          setShowQuiz,
                          setButtonPort,
                          setQuizResult,
                        })
                      }
                      speedAnim={0.8}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div style={{ display: buttonPort ? "block" : "none" }}>
            <div className="flex flex-col justify-center">
              <QuizResult
                quizResult={quizResult}
                resetQuiz={resetQuiz}
                setShowResult={() => {
                  setShowResult(true);
                }}
                isMobile={isMobile}
              />
            </div>
          </div>
          <ModalQuiz
            resetQuiz={resetQuiz}
            quizResult={quizResult}
            showResult={showResult}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
