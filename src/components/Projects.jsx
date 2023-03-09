import ProjectsItems from "./ProjectsItems"
import ProjectModal from "./ProjectModal"
import { Fragment, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'

export default function Projects({modalOpen, modalClosed}) {
    const [projectClicked, setProjectClicked] = useState(false)
    const [reponse, setReponse] = useState('');

    return (
        <>
        <div id="projects" className="flex flex-col space-y-8 h-screen justify-center items-center">
                <ProjectsItems 
                projectClicked={(name)=>{
                    setReponse(name)
                    setProjectClicked(true)
                    modalOpen()
                }}/>
        </div>

        <Transition appear show={projectClicked} as={Fragment}>
            <Dialog as="div" className="relative" 
                onClose={
                ()=>setProjectClicked(false)}
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
                        <Dialog.Panel className="px-44 py-80 lg:px-72 lg:py-72 w-full rounded border border-zinc-800 max-w-md transform overflow-hidden align-middle shadow-xl transition-all">
                            <ProjectModal
                            projectView={reponse} 
                            modalClosed={()=>{
                                setProjectClicked(false)
                                modalClosed()
                            }}/>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </>
    )
};
