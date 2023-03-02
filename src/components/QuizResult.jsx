export default function QuizResult({quizResult, resetQuiz}) {
    return (
        <>
            <div className="flex flex-col space-y-8 justify-center items-center">
                
                <h1 className="text-2xl">Chek out this project 😉</h1>
                
                <div style={{display: quizResult == 'How Many Capitals' ? 'block' : 'none'}}>
                    <div className="flex flex-col justify-center items-center space-y-2">
                    <h3>{quizResult}</h3>
                    <div className="flex flex-col w-64 h-64 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                        <a href="https://hugorince.github.io" target="_blank">
                        <img src="images/howmanycapitals.png" className="object-contain w-64 h-64" alt="" />
                        </a>
                    </div>
                    </div>
                </div>
                
                <div style={{display: quizResult == 'Climate Change in South America' ? 'block' : 'none'}}>
                    <div className="flex flex-col justify-center items-center space-y-2">
                    <h3>{quizResult}</h3>
                    <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                        <a href="" target="_blank">
                        <img src="images/dataviz.png" className="object-scale-down w-52 h-52" alt="" />
                        </a>
                    </div>
                    </div>
                </div>
                
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={resetQuiz}>Portfolio</button>
            </div>
        </>
    )
}