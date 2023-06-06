export const question1 = ["geography", "videogames", "sociability"];
export const question2 = ["map", "quiz", "names"];
export const question3 = ["quiz", "retro"];
export const question4 = ["pets", "furnitures"];

type nextQuestionProps = {
  event: any;
  setOption1: (e: string) => void;
  setOption2: (e: string) => void;
  setOption3: (e: string) => void;
  setFirstQuest: (e: boolean) => void;
  setShowQuiz: (e: boolean) => void;
  setButtonPort: (e: boolean) => void;
  setQuizResult: (e: string) => void;
};

export const nextQuestion = ({
  event,
  setOption1,
  setOption2,
  setOption3,
  setFirstQuest,
  setShowQuiz,
  setButtonPort,
  setQuizResult,
}: nextQuestionProps) => {
  if (event.target.value === "geography") {
    setOption1(question2[0]);
    setOption2(question2[1]);
    setOption3(question2[2]);
  } else if (event.target.value === "videogames") {
    setFirstQuest(false);
    setOption1(question3[0]);
    setOption2(question3[1]);
  } else if (event.target.value === "sociability") {
    setFirstQuest(false);
    setOption1(question4[0]);
    setOption2(question4[1]);
  } else if (event.target.value === "quiz") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("How Many Capitals");
  } else if (event.target.value === "map") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("Climate Change in South America");
  } else if (event.target.value === "retro") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("CODEV-22");
  } else if (event.target.value === "furnitures") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("Vinma");
  } else if (event.target.value === "pets") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("Social Animals");
  } else if (event.target.value === "names") {
    setFirstQuest(false);
    setShowQuiz(false);
    setButtonPort(true);
    setQuizResult("How Many Cities");
  }
};
