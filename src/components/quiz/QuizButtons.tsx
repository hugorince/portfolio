import { motion } from "framer-motion";

type QuizButtonsProps = {
  content: any;
  buttonAction: (event: any) => void;
  speedAnim: number;
};

export default function QuizButtons({
  content,
  buttonAction,
  speedAnim,
}: QuizButtonsProps) {
  return (
    <>
      <motion.button
        className="bg-transparent sm:hover:bg-zinc-400 text-zinc-800 font-semibold sm:active:bg-zinc-600 sm:hover:text-zinc-100 py-2 px-4 border border-zinc-800 rounded "
        value={content}
        onClick={buttonAction}
        animate={{ opacity: [0, 1], scale: [1, 1.1, 1] }}
        transition={{ duration: speedAnim }}
        key={content}
      >
        {content}
      </motion.button>
    </>
  );
}
