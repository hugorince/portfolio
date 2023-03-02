import ProjectsItems from "./ProjectsItems"

export default function Projects() {

    return (
        <>
        <div id="projects"  className="flex flex-col space-y-8 h-screen justify-center items-center">
                <ProjectsItems />
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