import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MenuDropDown({ quizAgain }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <motion.div
          className=""
          animate={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 0.5 }}
          class="z-10 fixed "
        >
          <nav className="flex flex-col items-end bg-zinc-100 h-64 w-screen border border-zinc-600 rounded-sm">
            <button className="py-4 px-4">
              <Icon onClick={handleClick} icon="ion:close" width="30" />
            </button>
            <div>
              <ul className="flex flex-col items-end justify-center space-y-6 w-screen px-4">
                <li>
                  <a href="#projects">
                    <button
                      className="text-2xl text-zinc-800"
                      onClick={handleClick}
                    >
                      PROJECTS
                    </button>
                  </a>
                </li>
                <li>
                  <button
                    className="text-2xl text-zinc-800"
                    onClick={() => {
                      quizAgain();
                      handleClick();
                    }}
                  >
                    QUIZ
                  </button>
                </li>
                <div className="flex space-x-4 ">
                  <button onClick={handleClick}>
                    <a
                      className=" opacity-80 cursor-pointer"
                      href="https://github.com/hugorince"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="radix-icons:github-logo" width="30" />
                    </a>
                  </button>
                  <button onClick={handleClick}>
                    <a
                      className="opacity-80 cursor-pointer"
                      href="https://www.linkedin.com/in/hugorince/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="radix-icons:linkedin-logo" width="30" />
                    </a>
                  </button>
                  <button onClick={handleClick}>
                    <a
                      className="opacity-80 cursor-pointer"
                      href="https://www.codewars.com/users/hugorince"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="simple-icons:codewars" width="30" />
                    </a>
                  </button>
                </div>
              </ul>
            </div>
          </nav>
        </motion.div>
      ) : (
        <div className="z-10 fixed w-screen flex flex-col items-end">
          <div className="">
            <button className="py-4 px-4">
              <Icon
                onClick={handleClick}
                icon="akar-icons:three-line-horizontal"
                width="30"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
