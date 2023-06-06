import Background from "./Background";
import QuizButtons from "./QuizButtons";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";

type QuizResultTypes = {
  quizResult: string;
  resetQuiz: () => void;
  setShowResult: () => void;
  isMobile: boolean;
};

export default function QuizResult({
  quizResult,
  resetQuiz,
  setShowResult,
  isMobile,
}: QuizResultTypes) {
  const projects = require("../portfolio/ProjectsList.json");
  for (let i in projects) {
    if (projects[i].name === quizResult) {
      return (
        <div className="relative h-screen flex flex-col items-center justify-center">
          <div className="absolute">
            <Background />
          </div>
          <div className="absolute">
            <div className="flex flex-col space-y-8 justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <MovingText
                  type="bounce"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  iteration="1"
                  fillMode="none"
                  className="text-2xl text-zinc-800"
                >
                  You may like this <a className="font-bold italic">project</a>{" "}
                  😉
                </MovingText>
              </motion.div>
              <div className="sm:hover:scale-105 sm:transition">
                <motion.div
                  key={projects[i].id}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ opacity: [0, 1], scale: [1, 1.1, 1], rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden cursor-pointer relative group w-64 h-64 border border-zinc-700"
                  onClick={setShowResult}
                >
                  {isMobile ? (
                    <div></div>
                  ) : (
                    <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition  cursor-pointer from-zinc-600 bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div>
                        <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition">
                          <div className="italic">{quizResult}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <img
                      alt=""
                      className="object-cover w-full aspect-square hover:opacity-60 transition duration-500 ease-in-out"
                      src={projects[i].img}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <QuizButtons
                buttonAction={resetQuiz}
                content={"Skip to portfolio"}
                speedAnim={0.7}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
