export default function ProjectsItems({projectClicked}){

    const projects = require('./ProjectsList.json');
    
    const projs = projects.map((project) => {
        return <div key={project.name} className='flex flex-col space-y-8 justify-center items-center'>
        <div className="overflow-hidden cursor-pointer relative group w-48 h-48 sm:w-46 sm:w-46 border border-zinc-800">
            <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div className="transform-gpu p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out">
                        <div className="italic">{project.name}</div>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                            projectClicked(project.name);
                        }}>
                <img
                    alt=""
                    className="object-cover w-48 h-48 sm:w-46 sm:h-46 w-full aspect-square group-hover:scale-105 hover:opacity-60 transition duration-500 ease-in-out"
                    src={project.img}
                    
                />
            </div>
            </div>
        </div>
      });
        return (
        <>
        
        <div id="project-line" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projs}
        </div>
        
        </>
    )
}