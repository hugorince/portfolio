export default function QuizResult({quizResult, resetQuiz, resultView}) {
    const projects = require('./ProjectsList.json');
    for (let i in projects){
        if (projects[i].name === quizResult){
            return <div className="flex flex-col space-y-8 justify-center items-center">
            <h1 className="text-2xl">Chek out this project 😉</h1>
            <div>
                <div className="flex flex-col justify-center items-center space-y-2">
                <h3>{quizResult}</h3>
                <div className="project-block">
                    <div onClick={()=>resultView(projects[i].name)}>
                    <img src={projects[i].img} className="object-contain w-64 h-64" alt="" />
                    </div>
                </div>
                </div>
            </div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={resetQuiz}>Portfolio</button>
            </div>
        }
    }
}