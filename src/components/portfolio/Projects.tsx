import ProjectsItems from "./ProjectsItems";
import ProjectModal from "./ProjectModal";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

type ProjectsProps = {
  isMobile: boolean;
};

export default function Projects({ isMobile }: ProjectsProps) {
  const [projectClicked, setProjectClicked] = useState(false);
  const [projectView, setProjectView] = useState("");
  const isSM = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      <div className="">
        <Parallax
          translateY={["-50px", "0px"]}
          speed={10}
          disabled={isSM}
          scale={[1.2, 1]}
        >
          <div
            id="projects"
            className="flex space-y-8 justify-center items-center pb-24"
          >
            <ProjectsItems
              isMobile={isMobile}
              projectClicked={(name) => {
                setProjectView(name);
                setProjectClicked(true);
              }}
            />
          </div>
        </Parallax>

        <Transition appear show={projectClicked} as={Fragment}>
          <Dialog
            as="div"
            className="relative"
            onClose={() => setProjectClicked(false)}
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
                  enter="ease-out duration-[400ms]"
                  enterFrom="opacity-0 rotate-[-45deg] scale-50"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="px-44 py-80 sm:px-72 lg:px-80  w-full rounded border border-zinc-600 max-w-md transform overflow-hidden align-middle shadow-xl transition-all">
                    <ProjectModal
                      projectView={projectView}
                      modalClosed={() => {
                        setProjectClicked(false);
                      }}
                      resetQuiz={() => {}}
                      quizEnd={false}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
