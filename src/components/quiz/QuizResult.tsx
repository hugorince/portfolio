import Background from "./Background";
import QuizButtons from "./QuizButtons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type QuizResultTypes = {
  quizResult: string;
  resetQuiz: () => void;
  setShowResult: () => void;
  isMobile: boolean;
};

type ProjectType = {
  id: number;
  name: string;
  href: string;
  tech: string;
  group: string;
  img: string;
  img2: string[];
  description: string;
};

export default function QuizResult({
  quizResult,
  resetQuiz,
  setShowResult,
  isMobile,
}: QuizResultTypes) {
  const projects = require("../portfolio/ProjectsList.json");
  const [project, setProject] = useState<ProjectType>({
    id: 0,
    name: "",
    href: "",
    tech: "",
    group: "",
    img: "",
    img2: [],
    description: "",
  });

  useEffect(() => {
    if (quizResult) {
      setProject(projects.filter((p: any) => p.name === quizResult)[0]);
    }
  }, [quizResult, projects]);

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
            <motion.div
              className="text-2xl font-bold text-zinc-800"
              animate={{ y: [-100, 10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              You may like this project 😉
            </motion.div>
          </motion.div>
          <div className="sm:hover:scale-105 sm:transition">
            <motion.div
              key={project.id}
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
                  src={project.img}
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
