import { motion } from "framer-motion";

export default function ProjectsItems({projectClicked, isMobile}){

    const projects = require('./ProjectsList.json');
    
    const projs = projects.map((project) => {
        return <motion.div 
            key={project.id} 
            className='shadow sm:hover:shadow-xl sm:hover:scale-105 sm:transition' 
            onClick={() => {
                projectClicked(project.name);
            }}>
            
                    <div className="relative overflow-hidden cursor-pointer group w-48 h-48 sm:w-46 sm:h-46 border border-zinc-700">
                        {isMobile ? <div></div> : <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition cursor-pointer from-zinc-600 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div className="transform-gpu p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition">
                                        <div className="italic">{project.name}</div>
                                    </div>
                                </div>
                            </div>}
                        
                        <div >
                            <img
                                alt={project.name}
                                className="object-cover w-48 h-48 sm:w-46 sm:h-46 w-full aspect-square hover:opacity-60 transition ease-in-out"
                                src={project.img}
                            />
                        </div>
                    </div>
                </motion.div>
      });
        return (
        <>
        
        <div id="project-line" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projs}
        </div>
        
        </>
    )
}