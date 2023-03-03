export default function ProjectModal({modalClicked, projectView}) {
    const projects = require('./ProjectsList.json');

    for (let i in projects){
        if (projects[i].name === projectView){
            return (
                <>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="flex flex-col items-end bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div>
                                    <button type="button" onClick={modalClicked} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-2xl font-semibold leading-6 text-gray-900" id="modal-title">{projects[i].name}</h3>
                                        <div className="mt-2 flex flex-col space-y-2">
                                            <a href={projects[i].href} target="_blank"><p>link to project</p></a>
                                            <p className="text-sm text-gray-500">{projects[i].description}</p>
                                            <img src={projects[i].img2}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            )}};
}