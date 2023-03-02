export default function Projects() {
    return (
        <>
        <div id="projects"  className="flex flex-col space-y-8 h-screen justify-center items-center">
            <div id="project-line" className="flex space-x-8 ">
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <a href="https://hugorince.github.io" target="_blank">
                    <img src="images/howmanycapitals.png" className="object-scale-down w-52 h-52" alt="" />
                    </a>
                </div>
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <img src="images/socialanimals.png" className="object-scale-down w-52 h-52" alt="" />
                </div>
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <img src="images/dataviz.png" className="object-scale-down w-52 h-52" alt="" />
                </div>
            </div>
            <div id="project-line" className="flex space-x-8">
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                <img src="images/timetracker.png" className="object-scale-down w-48 h-48" alt="" />
                </div>
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <p>Project 5</p>
                </div>
                <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <p>Project 6</p>
                </div>
            </div>
          
            
        </div>
        </>
    )
};