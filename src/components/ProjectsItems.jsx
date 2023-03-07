export default function ProjectsItems({projectClicked}){

    const projects = require('./ProjectsList.json');
    
    let projs = projects.map((project) => {
        return <div class='flex flex-col space-y-8 justify-center items-center'>
        <div class="overflow-hidden cursor-pointer relative group sm:w-48 h-48 lg:w-52 h-52 border border-zinc-800">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="transform-gpu p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out">
                        <div class="italic">{project.name}</div>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                            projectClicked(project.name);
                        }}>
                <img
                    alt=""
                    class="object-cover sm:w-48 h-48 lg:w-52 h-52 w-full aspect-square group-hover:scale-105 hover:opacity-80 transition duration-300 ease-in-out"
                    src={project.img}
                />
            </div>
            </div>
        </div>
      });
        return (
        <div id="project-line" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projs}
        </div>
    )
}

                                

{/* <div key={project.id} className="flex flex-col sm:w-48 h-48 lg:w-52 h-52 items-center justify-center hover:opacity-50 border border-zinc-800">
                    <div onClick={() => {
                        projectClicked(project.name);
                    }}>
                        <img src={project.img} className="object-contain sm:w-48 h-48 lg:w-52 h-52" alt="" />
                    </div>
                </div> */}