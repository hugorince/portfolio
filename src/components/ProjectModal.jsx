export default function ProjectModal({modalClosed, modalQuizClicked, projectView, quizEnd}) {
    const projects = require('./ProjectsList.json');

    for (let i in projects){
        if (projects[i].name === projectView){
            return (
                <>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                            
                                <div className="flex flex-col items-end bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div style={{display: quizEnd ? 'none' : 'block'}}>
                                        <button type="button" onClick={modalClosed} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <div style={{display: quizEnd ? 'block' : 'none'}}>
                                        <button type="button" onClick={modalQuizClicked} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div className="flex flex-col space-y-2">
                                            <h3 className="text-2xl font-semibold leading-6 text-gray-900" id="modal-title">{projects[i].name}</h3>
                                            <p className="text-xs italic text-gray-500">{projects[i].tech}</p>
                                            </div>
                                            <div className="mt-2 flex flex-col space-y-4">
                                                <a href={projects[i].href} target="_blank"><p className='hover:underline hover:text-blue-500'>link to project</p></a>
                                                <p className="text-sm text-gray-700">{projects[i].description}</p>
                                                <img src={projects[i].img2}></img>
                                                <img src={projects[i].img3}></img>
                                                <img src={projects[i].img4}></img>
                                                <img src={projects[i].img5}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                </>
            )}};
}