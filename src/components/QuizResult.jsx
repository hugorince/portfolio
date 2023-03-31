import Background from './Background';
import QuizButtons from './QuizButtons';

export default function QuizResult({quizResult, resetQuiz, resultView, isMobile}) {
    const projects = require('./ProjectsList.json');
    for (let i in projects){
        if (projects[i].name === quizResult){
            return <div className='relative h-screen flex flex-col items-center justify-center'>
                        <div className='absolute'>
                            <Background />
                        </div>
                        <div className='absolute'>
                            <div className='flex flex-col space-y-8 justify-center items-center'>
                                <h1 className="text-2xl text-zinc-800">You may like this <a className='font-bold italic'>project</a> 😉</h1>
                                <div className="overflow-hidden  cursor-pointer relative group w-64 h-64 border border-zinc-800" onClick={()=>resultView(projects[i].name)}>
                                    {isMobile ? <div></div> : <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                        <div>
                                            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out">
                                                <div className="italic">{quizResult}</div>
                                            </div>
                                        </div>
                                    </div>}
                                    
                                    <div >
                                        <img
                                            alt=""
                                            className="object-cover w-full aspect-square group-hover:scale-105 hover:opacity-60 transition duration-500 ease-in-out"
                                            src={projects[i].img}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mt-8'>
                                    
                                    <QuizButtons buttonAction={resetQuiz} content={'Skip to portfolio'} speedAnim={0.7}/>
                                </div>
                            </div> 
                        </div>
                    
        }
    }
}
