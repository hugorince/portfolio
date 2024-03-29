import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProjectModal from "../portfolio/ProjectModal";

type ModalQuizProps = {
  resetQuiz: () => void;
  quizResult: string;
  showResult: boolean;
};

export default function ModalQuiz({
  resetQuiz,
  quizResult,
  showResult,
}: ModalQuizProps) {
  return (
    <>
      <Transition appear show={showResult} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={resetQuiz}>
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
                enter="ease-out duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="px-46 py-80 lg:px-72 lg:py-72 w-full rounded border border-zinc-800 max-w-md transform overflow-hidden align-middle shadow-xl transition-all">
                  <ProjectModal
                    projectView={quizResult}
                    resetQuiz={resetQuiz}
                    quizEnd={showResult}
                    modalClosed={() => {}}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
