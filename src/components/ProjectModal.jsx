export default function ProjectModal({modalClosed, modalQuizClicked, projectView, quizEnd}) {
    const projects = require('./ProjectsList.json');

    for (let i in projects){
        if (projects[i].name === projectView){
            let images = projects[i].img2.split(',')
            return (
                <>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex flex-col items-end bg-zinc-100 pt-5 pb-4 px-4 sm:p-6 sm:pb-4">
                        <div style={{display: quizEnd ? 'none' : 'block'}}>
                            <button type="button" onClick={modalClosed} className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div style={{display: quizEnd ? 'block' : 'none'}}>
                            <div className="">
                            <button type="button" onClick={modalQuizClicked} className="bg-transparent hover:bg-zinc-400 text-zinc-800 border border-zinc-800 font-semibold hover:text-zinc-100 py-2 px-4 rounded" data-modal-hide="defaultModal">
                            Go to portfolio
                            </button>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-2xl text-zinc-800 font-semibold leading-6 text-gray-900" id="modal-title">{projects[i].name}</h3>
                                    <p className="text-xs text-zinc-600">{projects[i].group} ({projects[i].tech})</p>
                                </div>
                                <div className="mt-2 flex flex-col space-y-4">
                                    <a href={projects[i].href} target="_blank"><p className='font-semibold text-zinc-600 hover:text-zinc-400'>link to project</p></a>
                                    <p className="text-sm text-gray-700">{projects[i].description}</p>
                                    {images.map(image=>
                                        <img src={image} key={image} className="border border-zinc-800"></img>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}};
}