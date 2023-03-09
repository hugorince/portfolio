import Background from './Background';

export default function QuizResult({quizResult, resetQuiz, resultView}) {
    const projects = require('./ProjectsList.json');
    for (let i in projects){
        if (projects[i].name === quizResult){
            return <div className='relative h-screen flex flex-col items-center justify-center'>
                        <div className='absolute'>
                            <Background />
                        </div>
                        <div className='absolute'>
                            <div class='flex flex-col space-y-8 justify-center items-center'>
                                <h1 className="text-2xl text-zinc-800">You may like this project 😉</h1>
                                <div class="overflow-hidden  cursor-pointer relative group w-64 h-64 border border-zinc-800">
                                    <div class="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out">
                                                <div class="italic">{quizResult}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={()=>resultView(projects[i].name)}>
                                        <img
                                            alt=""
                                            class="object-cover w-full aspect-square group-hover:scale-105 hover:opacity-60 transition duration-500 ease-in-out"
                                            src={projects[i].img}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mt-8'>
                                    <button className="bg-transparent hover:bg-zinc-400 text-zinc-800 font-semibold hover:text-zinc-100 py-2 px-4 border border-zinc-800 rounded" onClick={resetQuiz}>Skip to portfolio</button>
                                </div>
                            </div> 
                        </div>
                    
        }
    }
}



{/* <div className="flex flex-col space-y-8 justify-center items-center">
<h1 className="text-2xl text-zinc-800">You may like this project 😉</h1>
<div className="flex flex-col justify-center items-center space-y-2">
    <h3 className='text-zinc-800 italic'>{quizResult}</h3>
    <div className="flex flex-col w-64 h-64 items-center justify-center hover:opacity-70 border border-zinc-800">
        <div onClick={()=>resultView(projects[i].name)}>
        <img src={projects[i].img} className="object-contain w-64 h-64" alt="" />
        </div>
    </div>
</div> */}