import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from "react";
import ProjectModal from './ProjectModal';

export default function ModalQuiz({reset, projectViewed, res}) {
    return (
        <>
        <Transition appear show={res} as={Fragment}>
                    <Dialog as="div" className="relative z-10" 
                        onClose={reset}
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
                                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="px-46 py-80 lg:px-72 lg:py-72 w-full rounded border border-zinc-800 max-w-md transform overflow-hidden align-middle shadow-xl transition-all">
                                    <ProjectModal 
                                projectView={projectViewed}
                                modalQuizClicked={reset}
                                quizEnd={res}
                                />
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
        </>
    )
}