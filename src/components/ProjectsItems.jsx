export default function ProjectsItems(){
    const projects = require('./ProjectsList.json');

    let projs = projects.map((project) => {
        return <div className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <a href={project.href} target="_blank">
                    <img src={project.img} className="object-contain w-52 h-52" alt="" />
                    </a>
                </div>
      });
        return (
        <div id="project-line" className="flex space-x-8 ">
            {projs}
        </div>
    )
}
